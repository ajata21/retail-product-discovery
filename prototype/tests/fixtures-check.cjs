const assert=require('node:assert/strict');
const F=require('../fixtures.js');
const s={store:'dallas',size:'10',width:'D',max:'150',preference:''};
let checks=0;
function equal(a,b){assert.deepEqual(a,b);checks++;}
const assess=(id,scenario,change={})=>F.assess(id,{...s,...change},scenario);
equal(assess('nike','other-color').variant,'black');
equal(assess('nike','multiple').variant,'grey');
equal(assess('nike','multiple',{preference:'black'}).variant,'black');
equal(assess('nike','other-color').price,119.99);
equal(assess('nike','explicit',{preference:'grey'}).kind,'nonmatch');
equal(assess('nike','other-color',{preference:'grey'}).candidates.map(c=>c.color),['grey']);
equal(assess('nike','historical').kind,'uncertain'); // One unavailable color is not whole-product proof.
equal(assess('nike','historical',{preference:'grey'}).kind,'nonmatch');
equal(assess('nike','historical',{store:'lewisville'}).variant,'grey');
equal(assess('adidas','historical').variant,'black'); // Unknown alternatives do not invalidate match.
equal(assess('reebok','historical').price,49.99);
equal(assess('nike','partial').kind,'uncertain');
equal(assess('adidas','partial').kind,'match');
equal(assess('nike','variant-price').kind,'nonmatch');
equal(assess('nike','variant-price',{max:'160'}).price,159.99);
equal(assess('nike','variant-price',{max:'160'}).variant,'black');
equal(assess('nike','other-color',{max:'100'}).kind,'nonmatch');
equal(assess('nike','other-color',{preference:'black',max:'119'}).kind,'nonmatch');
for(const p of F.products){
 equal(assess(p.id,'none').kind,'nonmatch');
 equal(assess(p.id,'unknown').kind,'uncertain');
 equal(assess(p.id,'failure').reason,'failed');
 equal(F.assess(p.id,s,'failure',true).kind,'match');
 equal(assess(p.id,'stale').reason,'stale');
 equal(assess(p.id,'none',{size:'9'}).kind,'uncertain'); // Coverage is not invented outside 10/D.
 equal(assess(p.id,'other-color',{width:'2E'}).kind,'uncertain');
}
for(const key of ['store','size','width','max'])equal(assess('nike','other-color',{[key]:''}).kind,'incomplete');
equal(assess('nike','other-color',{preference:'not-a-color'}).kind,'uncertain');
equal(assess('nike','historical',{max:'1'}).kind,'nonmatch'); // Prices alone can disqualify; not a stock claim.
equal(F.lookup('nike',{...s,color:'grey'},'historical').status,'unavailable');
equal(F.lookup('nike',{...s,color:'grey',store:'lewisville'},'historical').status,'available');
console.log(`PASS: ${checks} revised fixture assertions: conjunction, explicit preferences, bounded coverage, partial results, prices, scope, failures and uncertainty.`);
