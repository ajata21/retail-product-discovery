(() => {
  'use strict';
  const F=window.PickupFixtures, $=id=>document.getElementById(id);
  const state={store:'dallas',size:'10',width:'D',max:'150',sort:'original',scenario:'other-color',preferences:{},pictured:{},nearby:{},nearResults:{},recovered:{},results:{},busy:true,view:null,detailColor:null,returnY:0,returnId:null};
  const cards={}, rows={}; let generation=0, announceTimer, scenarioTimer, discarded=0, fromResults=false;
  const nearTokens={}; history.scrollRestoration='manual';
  const selection=(id,s=state)=>({store:s.store,size:s.size,width:s.width,max:s.max,preference:s.preferences[id]||''});
  const currentColor=id=>state.view===id?state.detailColor:(state.results[id]?.variant||state.pictured[id]||state.preferences[id]||F.product(id).original);
  const tuple=(id,color=currentColor(id))=>({...selection(id),color});
  function announce(text){clearTimeout(announceTimer);announceTimer=setTimeout(()=>{if($('announcer').textContent!==text)$('announcer').textContent=text;},80);}
  function illustration(p, color) {
    const c = color || { name: 'Unselected color', upper: '#bfc3b8', trim: '#828c78', sole: '#8c9284' };
    const accent = p.id === 'adidas'
      ? `<path d="M139 89l20 39m1-45l20 42m-1-47l22 47" stroke="${c.trim}" stroke-width="9"/>`
      : `<path d="M111 118q42 17 119-8q-46 33-94 25z" fill="${c.trim}"/>`;
    return `<svg viewBox="0 0 360 210" role="img" aria-label="Illustration of ${p.name} in ${c.name}"><ellipse cx="184" cy="176" rx="139" ry="10" fill="#d9dccf"/><path d="M44 131l9-60q4-13 13-3l27 31q21 4 38-24l31-12q13 42 55 50l67 18q28 6 32 25l-9 11H61q-23-3-17-36z" fill="${c.upper}" stroke="#34483b" stroke-width="2"/><path d="M50 90l21 35m18-24l14 35M231 123l11 25m11-20l11 21" stroke="${c.trim}" stroke-width="3" opacity=".65"/>${accent}<path d="M117 91l45 6m-39-16l30 5m-21-17l16 6" stroke="#eef0e6" stroke-width="5" stroke-linecap="round"/><path d="M42 151q130 18 276 2v15q-113 18-267 0z" fill="${c.sole}" stroke="#34483b" stroke-width="2"/><path d="M66 163h225" stroke="#eef0e6" opacity=".55" stroke-width="3"/><path d="M52 72l14 20" stroke="${c.trim}" stroke-width="5"/></svg>`;
  }

  function cardHTML(p,detail=false){
    return `<div class="art"><span class="art-label">Illustrative color view</span><div class="shoe-art"></div></div><div class="card-body"><p class="brand">${p.brand}</p><h3 class="product-title" id="${detail?'detail-name':'name-'+p.id}">${p.name}</h3><p class="price"></p><p class="tuple"></p>${detail?`<label class="detail-color-label" for="detail-color">Selected color<select id="detail-color">${p.colors.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select></label><p class="preference-note"></p><button class="text-button clear-detail">Use Any color for results</button>`:`<p class="preference-note"></p><button class="text-button edit-preference">Change color preference</button>`}<section class="pickup" aria-label="Exact-variant pickup"><h4 class="pickup-heading"></h4><p class="status-text"></p><p class="status-detail"></p>${detail?'<button class="text-button detail-retry" hidden>Retry pickup check</button><button class="secondary detail-alternative" hidden></button>':''}<p class="nearby-result" hidden></p><button class="text-button nearby-check"></button></section>${detail?'':'<button class="details-link">View shoe details <span aria-hidden="true">↗</span></button>'}</div>`;
  }
  function setPreference(id,value){state.preferences[id]=value; $('preference-'+id).value=value; runLookup();}
  F.products.forEach(p=>{
    state.preferences[p.id]=''; state.pictured[p.id]=p.original;
    const label=document.createElement('label');label.textContent=p.brand+' '+p.name;
    const select=document.createElement('select');select.id='preference-'+p.id;select.innerHTML='<option value="">Any color</option>'+p.colors.map(c=>`<option value="${c.id}">${c.name}</option>`).join('');
    select.addEventListener('change',e=>setPreference(p.id,e.target.value));label.append(select);$('preference-controls').append(label);
    const card=document.createElement('article');card.id='card-'+p.id;card.className='card';card.setAttribute('aria-labelledby','name-'+p.id);card.innerHTML=cardHTML(p); card.querySelector('.card-body').insertBefore(card.querySelector('.pickup'),card.querySelector('.preference-note'));
    card.querySelector('.details-link').addEventListener('click',()=>openDetails(p.id));
    card.querySelector('.edit-preference').addEventListener('click',()=>select.focus());
    card.querySelector('.nearby-check').addEventListener('click',()=>toggleNearby(p.id));
    cards[p.id]=card;$('grid').append(card);
    const row=document.createElement('div');row.id='exception-'+p.id;row.className='exception-row';
    row.innerHTML=`<strong>${p.brand} ${p.name}</strong><p></p><div><button class="text-button clear-preference">Clear color preference</button><button class="text-button retry">Retry check</button><button class="text-button inspect">Inspect selection</button></div>`;
    row.querySelector('.clear-preference').setAttribute('aria-label',`Clear color preference for ${p.brand} ${p.name}`);
    row.querySelector('.retry').setAttribute('aria-label',`Retry check for ${p.brand} ${p.name}`);
    row.querySelector('.inspect').setAttribute('aria-label',`Inspect ${p.brand} ${p.name} selection`);
    row.querySelector('.clear-preference').addEventListener('click',()=>{select.focus({preventScroll:true});setPreference(p.id,'');});
    row.querySelector('.retry').addEventListener('click',()=>{state.recovered[p.id]=true;runLookup();});
    row.querySelector('.inspect').addEventListener('click',()=>openDetails(p.id,true));
    row.addEventListener('focusout',()=>setTimeout(render,0));rows[p.id]=row;$('exception-rows').append(row);
  });
  function reasonText(id,r){
    if(r.kind==='match')return 'Now a confirmed pickup match; shown above.';
    if(r.kind==='loading')return 'Checking requirements; previous match status no longer applies.';
    if(r.kind==='incomplete')return 'Choose store, size and width, and a valid maximum price to confirm results.';
    if(r.kind==='uncertain')return {failed:'Lookup failed. Results could not be fully confirmed. Retry this check.',stale:'Availability information is stale. Results could not be fully confirmed.',unknown:'No qualifying variant confirmed; potentially qualifying colors have unknown availability.'}[r.reason]||'Results could not be fully confirmed.';
    if(state.preferences[id])return `Your explicit ${F.variant(id,state.preferences[id],state.scenario)?.name||'color'} preference does not meet all selected requirements. It was not replaced. Clear it to allow another color.`;
    return r.reason==='budget'?'All listed variant prices exceed your maximum; product excluded.':'Complete checks confirm no listed variant meets all selected requirements; product excluded.';
  }
  function statusText(status,store){return {available:`Pickup available at ${store}`,unavailable:`Not available for pickup at ${store}`,unknown:'Pickup eligibility is unconfirmed',incomplete:'Complete your pickup preferences',loading:'Checking this selection…',failed:'Pickup check failed',stale:'Pickup information is stale'}[status];}
  function renderCard(p,card,color,status,detail=false){
    const c=F.variant(p.id,color,state.scenario), store=F.stores[state.store]||'store not selected';
    const art=card.querySelector('.shoe-art');if(art.dataset.color!==color||!art.innerHTML){art.innerHTML=illustration(p,c);art.dataset.color=color;}
    card.querySelector('.price').textContent=c?`$${c.price.toFixed(2)} · ordinary price`:'Price unconfirmed';
    card.querySelector('.tuple').textContent=`Pictured: ${c?.name||'unconfirmed'} · US ${state.size||'not selected'} · Width ${state.width||'not selected'} · ${store}`;
    card.querySelector('.preference-note').textContent=`Color preference: ${state.preferences[p.id]?F.variant(p.id,state.preferences[p.id],state.scenario)?.name:'Any color'}`;
    card.querySelector('.pickup-heading').textContent='YOUR PICKUP STORE / '+store.toUpperCase();
    card.querySelector('.pickup').dataset.status=status;
    card.querySelector('.status-text').textContent=statusText(status,store);
    let explanation={available:'For this exact variant. Not a reservation or readiness promise.',unavailable:'This color, size and width only; other colors may differ.',unknown:'Cannot confirm this exact selection; unknown is not out of stock.',loading:'Previous eligibility no longer applies.',failed:'Availability is unknown. Retry the check.',stale:'Expired information cannot confirm pickup eligibility.',incomplete:'Choose store, size, width and a valid maximum price.'}[status];
    if(detail&&c&&c.price>Number(state.max)&&String(state.max).trim()!=='')explanation+=' This variant is above your maximum price and is not a matching result.';
    card.querySelector('.status-detail').textContent=explanation;
    renderNearby(p.id,card,color);
    if(detail){
      $('detail-color').value=color;
      const retry=card.querySelector('.detail-retry');retry.hidden=status!=='failed'&&document.activeElement!==retry;
      const alternative=state.busy?null:F.assess(p.id,{...selection(p.id),preference:''},state.scenario,!!state.recovered[p.id]);
      const altButton=card.querySelector('.detail-alternative');
      altButton.hidden=!(alternative?.kind==='match'&&alternative.variant!==color);
      if(!altButton.hidden){altButton.textContent='View qualifying color: '+F.variant(p.id,alternative.variant,state.scenario).name;altButton.dataset.color=alternative.variant;}
    }
  }
  function nearKey(id,color){return [state.store,state.size,state.width,color,state.scenario].join('|');}
  function renderNearby(id,card,color){
    const other=state.store==='dallas'?'lewisville':'dallas';const button=card.querySelector('.nearby-check'),out=card.querySelector('.nearby-result');
    button.disabled=!F.complete(selection(id));button.textContent=state.nearby[id]?`Remove ${F.stores[other]} check`:`Check another store: ${F.stores[other]}`;
    out.hidden=!state.nearby[id];
    if(!out.hidden){const n=state.nearResults[id];const status=n?.key===nearKey(id,color)?n.status:'loading';out.textContent=`Other store — ${F.variant(id,color,state.scenario)?.name||'color unconfirmed'}, US ${state.size||'not selected'}, width ${state.width||'not selected'}: ${statusText(status,F.stores[other])}. Chosen store remains ${F.stores[state.store]||'not selected'}.`;}
  }
  function checkNearby(id){
    if(!state.nearby[id]||state.busy)return;
    const color=currentColor(id),key=nearKey(id,color),token=(nearTokens[id]||0)+1,gen=generation;
    nearTokens[id]=token;state.nearResults[id]={key,status:'loading'};render();
    const t={...tuple(id,color),store:state.store==='dallas'?'lewisville':'dallas'},mode=state.scenario,recovered=!!state.recovered[id];
    setTimeout(()=>{if(token!==nearTokens[id]||gen!==generation||!state.nearby[id]||key!==nearKey(id,currentColor(id)))return;
      state.nearResults[id]={key,...F.lookup(id,t,mode,recovered)};render();announce(`Explicit other-store check for ${F.product(id).name}, ${F.variant(id,color,mode).name}, size ${t.size}, width ${t.width}: ${statusText(state.nearResults[id].status,F.stores[t.store])}. Chosen store unchanged.`);
    },300);
  }
  function ensureNearby(id){
    if(state.nearby[id]&&state.nearResults[id]?.key!==nearKey(id,currentColor(id)))checkNearby(id);
  }
  function toggleNearby(id){state.nearby[id]=!state.nearby[id];if(state.nearby[id])checkNearby(id);else{nearTokens[id]=(nearTokens[id]||0)+1;delete state.nearResults[id];render();}}
  function render(){
    const validPrice=String(state.max).trim()!==''&&Number.isFinite(Number(state.max))&&Number(state.max)>=0&&Number(state.max)<=500;
    $('price-error').hidden=validPrice;$('max-price').setAttribute('aria-invalid',String(!validPrice));
    const matches=F.products.filter(p=>state.results[p.id]?.kind==='match');
    if(state.sort==='price')matches.sort((a,b)=>state.results[a.id].price-state.results[b.id].price);
    matches.forEach((p,i)=>{if($('grid').children[i]!==cards[p.id])$('grid').insertBefore(cards[p.id],$('grid').children[i]||null);});
    F.products.forEach(p=>{
      const r=state.results[p.id]||{kind:'loading'};cards[p.id].hidden=r.kind!=='match';
      if(r.kind==='match')renderCard(p,cards[p.id],r.variant,'available');
      const row=rows[p.id],focused=row.contains(document.activeElement);row.hidden=r.kind==='match'&&!focused;
      row.querySelector('p').textContent=reasonText(p.id,r);
      row.querySelector('.clear-preference').hidden=!state.preferences[p.id];
      row.querySelector('.retry').hidden=!(r.reason==='failed'||document.activeElement===row.querySelector('.retry'));
    });
    const uncertain=F.products.filter(p=>['uncertain','incomplete','loading'].includes(state.results[p.id]?.kind)).length;
    const nonmatches=F.products.filter(p=>state.results[p.id]?.kind==='nonmatch').length;
    $('results-notice').hidden=!state.busy&&uncertain===0&&nonmatches===0;
    $('result-count').textContent=`(${matches.length} of 3 products)`;
    $('results-notice').textContent=state.busy?'Checking all active requirements. Previous matches are not current.':uncertain?`${matches.length} confirmed matching products. Results could not be fully confirmed for ${uncertain} ${uncertain===1?'product':'products'}; see completion or retry options below.`:`${matches.length} confirmed matching products; ${nonmatches} excluded by your requirements.`;
    $('empty').hidden=!(matches.length===0&&nonmatches===F.products.length);
    $('exceptions').hidden=Object.values(rows).every(r=>r.hidden);
    if(state.view){
      const p=F.product(state.view),c=state.detailColor;
      const answer=state.busy?'loading':!F.complete(selection(p.id))?'incomplete':F.lookup(p.id,tuple(p.id,c),state.scenario,!!state.recovered[p.id]).status;
      renderCard(p,$('detail-card'),c,answer,true);
    }
  }
  function runLookup(){
    const token=++generation,snapshot=structuredClone(state),mode=state.scenario;
    state.busy=true;state.nearResults={};F.products.forEach(p=>state.results[p.id]={kind:'loading'});render();
    announce('Checking pickup matches for your current store, size, width, price limit and color preferences.');
    const delay=mode==='slow'?1800:mode==='obsolete'&&snapshot.preferences.nike==='grey'?1600:260;
    setTimeout(()=>{
      if(token!==generation){if(mode==='obsolete')$('race-log').textContent=`Discarded ${++discarded} obsolete response; current Nike preference remains ${state.preferences.nike}.`;return;}
      F.products.forEach(p=>{const answer=F.assess(p.id,selection(p.id,snapshot),mode,!!snapshot.recovered[p.id]);state.results[p.id]=answer;if(answer.kind==='match')state.pictured[p.id]=answer.variant;});
      state.busy=false;render();
      const text=state.view?`${F.product(state.view).name}, ${F.variant(state.view,state.detailColor,mode).name}, size ${state.size||'not selected'}, width ${state.width||'not selected'}: ${document.querySelector('#detail-card .status-text').textContent}`:$('results-notice').textContent+' '+F.products.filter(p=>state.results[p.id].kind==='match').map(p=>`${p.name}: ${F.variant(p.id,state.results[p.id].variant,mode).name}, size ${state.size}, width ${state.width}, pickup at ${F.stores[state.store]}.`).join(' ');
      announce(text);F.products.forEach(p=>{if(state.nearby[p.id])checkNearby(p.id);});
    },delay);
  }
  ['store','size','width'].forEach(id=>$(id).addEventListener('change',e=>{state[id]=e.target.value;if(id==='store')state.nearby={};runLookup();}));
  $('max-price').addEventListener('input',e=>{state.max=e.target.value;runLookup();});
  $('sort').addEventListener('change',e=>{state.sort=e.target.value;render();});
  $('shipping').addEventListener('change',e=>{$('shipping-status').textContent=`Shipping is not evaluated for ${e.target.value}. Pickup still uses ${F.stores[state.store]||'your chosen store'}; shipping never determines pickup eligibility.`;});
  function mountDetails(id,color){
    state.detailColor=color;const p=F.product(id),card=document.createElement('article');card.id='detail-card';card.className='card';card.setAttribute('aria-labelledby','detail-name');card.innerHTML=cardHTML(p,true);$('detail-slot').replaceChildren(card);
    $('detail-color').addEventListener('change',e=>{state.detailColor=e.target.value;state.preferences[id]=e.target.value;$('preference-'+id).value=e.target.value;history.replaceState({...history.state,color:e.target.value},'',location.hash);runLookup();});
    card.querySelector('.clear-detail').addEventListener('click',()=>setPreference(id,''));
    card.querySelector('.detail-retry').addEventListener('click',()=>{state.recovered[id]=true;runLookup();});
    card.querySelector('.detail-alternative').addEventListener('click',e=>{const c=e.currentTarget.dataset.color;state.detailColor=c;state.preferences[id]=c;$('preference-'+id).value=c;history.replaceState({...history.state,color:c},'',location.hash);$('detail-color').value=c;$('detail-color').focus({preventScroll:true});runLookup();});
    card.querySelector('.nearby-check').addEventListener('click',()=>toggleNearby(id));
  }
  function route(){
    const match=location.hash.match(/^#product\/(nike|adidas|reebok)$/);state.view=match?match[1]:null;
    $('results-view').hidden=!!state.view;$('details-view').hidden=!state.view;
    if(state.view){const id=state.view;mountDetails(id,history.state?.color||state.preferences[id]||state.results[id]?.variant||state.pictured[id]);$('details-title').textContent=F.product(id).name+' / details';render();window.scrollTo(0,0);$('details-title').focus({preventScroll:true});ensureNearby(id);}
    else{render();F.products.filter(p=>state.results[p.id]?.kind==='match').forEach(p=>ensureNearby(p.id));const id=state.returnId;const stillMatches=id&&state.results[id]?.kind==='match';$('return-notice').hidden=!id||stillMatches;$('return-notice').textContent=id&&!stillMatches?`${F.product(id).name} is no longer a confirmed match under your current preferences. Your remaining filters and color choice were preserved.`:'';
      requestAnimationFrame(()=>{window.scrollTo(0,state.returnY);if(id){const focus=stillMatches?cards[id].querySelector('.details-link'):$('preference-'+id);focus.focus({preventScroll:true});const box=focus.getBoundingClientRect();if(box.top<0||box.bottom>innerHeight)focus.scrollIntoView({block:'nearest'});}});
    }
  }
  function openDetails(id,inspect=false){state.returnY=scrollY;state.returnId=id;fromResults=true;const color=inspect?(state.preferences[id]||state.pictured[id]):state.results[id].variant;history.replaceState({view:'results'},'','#results');history.pushState({view:id,color},'',`#product/${id}`);route();}
  $('return').addEventListener('click',()=>{if(fromResults)history.back();else{history.replaceState({view:'results'},'','#results');route();}});
  document.querySelector('.wordmark').addEventListener('click',e=>{e.preventDefault();if(state.view)$('return').click();else scrollTo(0,0);});
  addEventListener('popstate',route);
  addEventListener('hashchange',()=>{const view=location.hash.startsWith('#product/')?location.hash.split('/')[1]:null;if(view!==state.view)route();});
  function setScenario(mode){
    clearTimeout(scenarioTimer);if(!state.view){state.returnId=null;$('return-notice').hidden=true;}Object.assign(state,{store:'dallas',size:mode==='incomplete'?'':'10',width:'D',max:'150',sort:'original',scenario:mode,nearby:{},nearResults:{},recovered:{}});
    F.products.forEach(p=>{state.preferences[p.id]='';state.pictured[p.id]=p.original;$('preference-'+p.id).value='';});
    if(['explicit','obsolete'].includes(mode)){state.preferences.nike='grey';$('preference-nike').value='grey';}
    ['store','size','width','sort'].forEach(id=>$(id).value=state[id]);$('max-price').value=state.max;$('scenario').value=mode;
    $('scenario-description').textContent=F.descriptions[mode];$('scenario-notice').hidden=false;$('scenario-notice').textContent=mode==='historical'?'Historically inspired scenario: original observed variants only; other inventory combinations are unknown.':`Invented simulated scenario: ${$('scenario').selectedOptions[0].textContent}. Not a research finding.`;
    if(state.view){state.detailColor=state.preferences[state.view]||F.product(state.view).original;$('detail-color').value=state.detailColor;}
    discarded=0;$('race-log').textContent=mode==='obsolete'?'Starting older explicit Grey / Green check; the demo will select Black after 120 ms.':'';runLookup();
    if(mode==='obsolete')scenarioTimer=setTimeout(()=>{if(state.scenario!=='obsolete')return;state.preferences.nike='black';$('preference-nike').value='black';if(state.view==='nike')state.detailColor='black';$('race-log').textContent='New Black response will arrive first; waiting to discard the old result.';runLookup();},120);
  }
  $('scenario').addEventListener('change',e=>setScenario(e.target.value));$('reset').addEventListener('click',()=>setScenario($('scenario').value));
  if(!location.hash)history.replaceState({view:'results'},'','#results');
  route();setScenario('other-color');
  window.PickupDemo={getState:()=>structuredClone(state),getGeneration:()=>generation};
})();
