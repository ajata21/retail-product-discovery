const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs');
const {pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
  const errors=[],requests=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});
  const out=path.resolve(__dirname,'../screenshots/design-review-2026-10-21');fs.mkdirSync(out,{recursive:true});
  await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);
  const settle=()=>page.waitForFunction(()=>!PickupDemo.getState().busy);
  const count=()=>page.locator('#grid .card:visible').count();
  const pref=id=>page.locator('#preference-'+id);
  const scenario=async mode=>{await page.locator('#demo-controls').evaluate(el=>el.open=true);await page.selectOption('#scenario',mode);if(!['slow','obsolete'].includes(mode))await settle();};
  const shot=async name=>{await page.waitForFunction(()=>!PickupDemo.getState().busy&&Object.values(PickupDemo.getState().nearResults).every(r=>r.status!=='loading'));await page.locator('#demo-controls').evaluate(el=>el.open=false);if(process.env.PROTOTYPE_SCREENSHOTS!=='0')await page.screenshot({path:path.join(out,name),fullPage:true});};
  await settle();assert.equal(await count(),3);
  assert.equal(await page.locator('#demo-controls').getAttribute('open'),null);
  assert.equal(await page.locator('#shipping').isVisible(),false,'shipping demonstration is collapsed with demo controls');
  assert.equal(await page.locator('#demo-controls .shipping #shipping').count(),1);
  assert.equal(await page.getByText('Shipping is separate from pickup',{exact:true}).count(),0);
  assert.match(await page.locator('#scenario-notice').innerText(),/Invented/);
  assert.equal(await pref('nike').inputValue(),'');
  assert.match(await page.locator('#card-nike svg').getAttribute('aria-label'),/Black/);
  assert.match(await page.locator('#card-nike .price').innerText(),/119.99/);
  assert.match(await page.locator('#card-nike .tuple').innerText(),/Black.*US 10.*Width D.*Dallas/);
  assert.equal(await page.locator('#card-nike .status-text').innerText(),'Pickup available at Dallas');
  await shot('01-qualifying-results.png'); const statusBox=await page.locator('#card-nike .status-text').boundingBox(); assert.ok(statusBox.y+statusBox.height<900,'pickup information visible at desktop 100% zoom');
  await shot('01-qualifying-results.png');

  await pref('nike').focus();await page.selectOption('#preference-nike','grey');
  assert.equal(await count(),0,'old matches invalidated immediately');await settle();
  assert.equal(await count(),2);assert.equal(await pref('nike').inputValue(),'grey');
  assert.equal(await pref('nike').evaluate(el=>el===document.activeElement),true);
  assert.match(await page.locator('#exception-nike').innerText(),/explicit Grey.*not replaced/);
  await shot('02-explicit-preference.png');
  await page.locator('#exception-nike .inspect').click();
  assert.equal(await page.inputValue('#detail-color'),'grey');assert.match(await page.locator('#detail-card .status-text').innerText(),/Not available.*Dallas/);
  await page.locator('#detail-card .nearby-check').click();
  await page.waitForFunction(()=>PickupDemo.getState().nearResults.nike?.status==='available');
  assert.match(await page.locator('#detail-card .nearby-result').innerText(),/Lewisville/);
  assert.equal(await page.inputValue('#store'),'dallas');assert.equal(await page.evaluate(()=>PickupDemo.getState().results.nike.kind),'nonmatch','nearby never satisfies selected-store filter');
  await page.locator('#detail-card .clear-detail').click();await settle();
  assert.equal(await page.inputValue('#detail-color'),'grey','clearing preference does not silently change details');
  assert.equal(await pref('nike').inputValue(),'');
  assert.match(await page.locator('#detail-card .detail-alternative').innerText(),/Black/);
  await page.locator('#detail-card .detail-alternative').click();await settle();
  assert.equal(await page.inputValue('#detail-color'),'black');assert.equal(await pref('nike').inputValue(),'black');
  assert.match(await page.locator('#detail-card .price').innerText(),/119.99/);
  await shot('04-details-exact-variant.png');
  await page.locator('#return').click();await page.waitForTimeout(180);assert.equal(await count(),3);
  // Explicit removal while in details: Back does not resurrect a stale match.
  await page.locator('#card-nike .details-link').click();await page.selectOption('#detail-color','grey');await settle();
  assert.match(await page.locator('#detail-card .status-text').innerText(),/Not available.*Dallas/);
  await page.goBack();await page.waitForTimeout(180);assert.equal(await count(),2);
  assert.match(await page.locator('#return-notice').innerText(),/no longer a confirmed match/);
  assert.equal(await pref('nike').evaluate(el=>el===document.activeElement),true);
  await page.locator('#exception-nike .clear-preference').click();await settle();assert.equal(await count(),3);assert.equal(await pref('nike').inputValue(),'');

  // Nearby navigation regression: both a completed Grey answer and an obsolete
  // in-flight Grey response must resolve to the qualifying Black results tuple.
  for(const finishDetailsCheck of [true,false]){
   await scenario('other-color');
   await page.locator('#card-nike .details-link').click();await page.selectOption('#detail-color','grey');await settle();
   await page.locator('#detail-card .nearby-check').click();
   await page.waitForFunction(()=>PickupDemo.getState().nearResults.nike?.status==='available');
   await page.locator('#detail-card .clear-detail').click();await settle();
   assert.equal(await page.inputValue('#detail-color'),'grey');assert.equal(await pref('nike').inputValue(),'');
   if(finishDetailsCheck)await page.waitForFunction(()=>PickupDemo.getState().nearResults.nike?.status==='available');
   else assert.equal(await page.evaluate(()=>PickupDemo.getState().nearResults.nike.status),'loading');
   await page.locator('#return').click();
   await page.waitForFunction(()=>{const s=PickupDemo.getState();return s.view===null&&s.nearResults.nike?.key==='dallas|10|D|black|other-color'&&s.nearResults.nike.status==='unknown';});
   await page.waitForTimeout(350); // Allow the obsolete Grey response to finish.
   const returned=await page.evaluate(()=>PickupDemo.getState());
   assert.equal(returned.results.nike.variant,'black');assert.equal(returned.nearResults.nike.key,'dallas|10|D|black|other-color');
   assert.equal(returned.nearResults.nike.status,'unknown');assert.equal(returned.store,'dallas');assert.equal(returned.nearby.nike,true);assert.equal(returned.preferences.nike,'');
   assert.match(await page.locator('#card-nike .tuple').innerText(),/Black.*US 10.*Width D.*Dallas/);
   const nearbyText=await page.locator('#card-nike .nearby-result').innerText();
   assert.match(nearbyText,/Black, US 10, width D: Pickup eligibility is unconfirmed/);assert.doesNotMatch(nearbyText,/Checking|Grey/);
   assert.match(await page.locator('#card-nike .nearby-check').innerText(),/Remove Lewisville check/);
  }

  await scenario('multiple');assert.match(await page.locator('#card-nike .tuple').innerText(),/Grey \/ Green/);assert.equal(await pref('nike').inputValue(),'');
  await scenario('historical');assert.equal(await count(),2);assert.equal(await page.locator('#card-nike').isVisible(),false);
  assert.equal(await page.locator('#empty').isVisible(),false);assert.match(await page.locator('#results-notice').innerText(),/could not be fully confirmed/);
  assert.equal(await page.evaluate(()=>PickupDemo.getState().results.nike.kind),'uncertain');
  await scenario('none');assert.equal(await count(),0);assert.equal(await page.locator('#empty').isVisible(),true);
  await scenario('unknown');assert.equal(await count(),0);assert.equal(await page.locator('#empty').isVisible(),false);
  assert.match(await page.locator('#results-notice').innerText(),/could not be fully confirmed/);
  assert.match(await page.locator('#results-notice').innerText(),/Inspect selection.*check another store.*may remain unknown/);
  assert.doesNotMatch(await page.locator('#results-notice').innerText(),/retry|completion|out of stock/i);
  assert.equal(await page.locator('#exception-rows .retry:visible').count(),0);
  assert.equal(await page.locator('#exception-rows .inspect:visible').count(),3);
  await shot('03-uncertain-results.png');
  await page.locator('#exception-nike .inspect').click();
  assert.equal(await page.locator('#detail-color').isVisible(),true);
  assert.equal(await page.locator('#detail-card .nearby-check').isEnabled(),true);
  assert.match(await page.locator('#detail-card .status-detail').innerText(),/unknown is not out of stock/);
  await page.locator('#detail-card .nearby-check').click();
  await page.waitForFunction(()=>PickupDemo.getState().nearResults.nike?.status==='unknown');
  assert.match(await page.locator('#detail-card .status-text').innerText(),/unconfirmed/);
  await page.goBack();await page.waitForFunction(()=>PickupDemo.getState().view===null);
  await scenario('partial');assert.equal(await count(),2);assert.match(await page.locator('#results-notice').innerText(),/1 product/);
  await scenario('variant-price');assert.equal(await count(),2);assert.equal(await page.locator('#card-nike').isVisible(),false);
  await page.fill('#max-price','160');assert.equal(await count(),0);await settle();assert.equal(await count(),3);
  assert.match(await page.locator('#card-nike .price').innerText(),/159.99/);
  await scenario('incomplete');assert.equal(await count(),0);assert.equal(await page.locator('#empty').isVisible(),false);
  assert.match(await page.locator('#results-notice').innerText(),/Complete missing or invalid pickup preferences above/);
  assert.doesNotMatch(await page.locator('#results-notice').innerText(),/retry|check another store/i);
  assert.equal(await page.inputValue('#size'),'');assert.equal(await page.locator('#size').isVisible(),true);
  assert.equal(await page.locator('#exception-rows .retry:visible').count(),0);
  await page.selectOption('#size','9');await settle();assert.equal(await count(),0);assert.equal(await page.locator('#empty').isVisible(),false);
  await page.selectOption('#size','10');await page.selectOption('#width','2E');await settle();assert.equal(await count(),0);
  await scenario('failure');assert.equal(await count(),0);
  assert.match(await page.locator('#results-notice').innerText(),/Retry check for failed lookups/);
  assert.equal(await page.locator('#exception-rows .retry:visible').count(),3);
  assert.match(await page.locator('#exception-adidas p').innerText(),/Lookup failed.*Retry check/);
  await page.locator('#exception-adidas .retry').click();await settle();
  assert.equal(await count(),1);assert.equal(await page.locator('#exception-adidas .retry').evaluate(el=>el===document.activeElement),true,'retry completion retains focus');
  await page.keyboard.press('Tab');
  await scenario('stale');assert.equal(await count(),0);assert.match(await page.locator('#exception-nike').innerText(),/stale/);assert.equal(await page.locator('#empty').isVisible(),false);
  await scenario('slow');assert.equal(await count(),0);await page.selectOption('#size','9');assert.equal(await count(),0);await settle();assert.equal(await count(),0);
  await scenario('obsolete');await page.waitForTimeout(1900);
  assert.equal(await pref('nike').inputValue(),'black');assert.equal(await count(),3);assert.match(await page.locator('#race-log').innerText(),/Discarded 1 obsolete/);

  await scenario('other-color');
  const gen=await page.evaluate(()=>PickupDemo.getGeneration()),pickupBeforeShipping=await page.evaluate(()=>PickupDemo.getState());
  assert.equal(await page.locator('#shipping').isVisible(),true);
  for(const area of ['61820','unknown','75231']){
   await page.selectOption('#shipping',area);
   assert.equal(await page.evaluate(()=>PickupDemo.getGeneration()),gen);
   assert.deepEqual(await page.evaluate(()=>PickupDemo.getState()),pickupBeforeShipping,'shipping never mutates pickup selections, scope or results');
   assert.match(await page.locator('#shipping-status').innerText(),/Shipping is not evaluated.*pickup.*Dallas/i);
   assert.equal(await page.inputValue('#store'),'dallas');
  }
  await page.selectOption('#store','lewisville');assert.equal(await count(),0);await settle();assert.equal(await count(),1);assert.match(await page.locator('#card-nike .tuple').innerText(),/Grey \/ Green.*Lewisville/);
  await page.selectOption('#store','dallas');await settle();assert.equal(await count(),3);
  await page.fill('#max-price','');await settle();assert.equal(await page.locator('#price-error').isVisible(),true);assert.equal(await count(),0);
  await page.fill('#max-price','150');await settle();await page.selectOption('#sort','price');
  await page.locator('#card-nike .nearby-check').click();await page.waitForFunction(()=>PickupDemo.getState().nearResults.nike?.status==='unknown');
  await page.locator('#demo-controls').evaluate(el=>el.open=false);
  await page.locator('#card-nike .details-link').scrollIntoViewIfNeeded();const y=await page.evaluate(()=>scrollY);const before=await page.evaluate(()=>PickupDemo.getState());
  await page.locator('#card-nike .details-link').click();assert.equal(await page.inputValue('#detail-color'),'black');assert.equal(await pref('nike').inputValue(),'');assert.match(await page.locator('#detail-card .price').innerText(),/119.99/);
  await page.goBack();await page.waitForTimeout(180);const after=await page.evaluate(()=>PickupDemo.getState());
  for(const key of ['store','size','width','max','sort','preferences','pictured','nearby','nearResults'])assert.deepEqual(after[key],before[key]);
  assert.ok(Math.abs((await page.evaluate(()=>scrollY))-y)<=1,'unchanged Back restores scroll');
  assert.equal(await page.locator('#card-nike .details-link').evaluate(el=>el===document.activeElement),true);
  await pref('nike').focus();await page.keyboard.press('ArrowDown');await page.keyboard.press('Enter');await settle();
  assert.equal(await pref('nike').evaluate(el=>el===document.activeElement),true);
  await page.waitForTimeout(100);assert.equal(await page.locator('#announcer').getAttribute('aria-live'),'polite');assert.match(await page.locator('#announcer').textContent(),/confirmed matching/);
  await page.selectOption('#preference-nike','');await settle();
  await page.setViewportSize({width:900,height:760});await page.evaluate(()=>scrollTo(0,0));
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'smaller window has no horizontal overflow');
  await shot('05-smaller-window.png');
  assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);
  console.log('PASS: revised Chrome file:// acceptance checks at 1440x900 and 900x760, matching/preferences/coverage/prices/nearby/details/races/Back/focus, state-specific guidance and shipping independence; no runtime errors or HTTP(S) requests. '+(process.env.PROTOTYPE_SCREENSHOTS==='0'?'Existing screenshots preserved.':'Five design-review screenshots saved separately.'));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
