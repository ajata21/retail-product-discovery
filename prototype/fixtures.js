(function(root) {
  'use strict';
  const stores = { dallas: 'Dallas', lewisville: 'Lewisville' };
  // Fixed array order is the only initial color tie-breaker. Extra colors/prices
  // are invented demo values; undefined inventory combinations remain unknown.
  const products = [
    {id:'nike',brand:'NIKE',name:'Air Max Invigor',original:'grey',style:'Air-inspired everyday runner',colors:[
      {id:'grey',name:'Grey / Green',price:94.99,upper:'#a4acae',trim:'#b4cf35',sole:'#263231'},
      {id:'black',name:'Black',price:119.99,upper:'#292d30',trim:'#899492',sole:'#c4c8c5'}]},
    {id:'adidas',brand:'ADIDAS',name:'Swift Run 1.0',original:'black',style:'A simple everyday silhouette',colors:[
      {id:'black',name:'Black',price:79.99,upper:'#303437',trim:'#555d61',sole:'#303437'},
      {id:'sand',name:'Sand',price:89.99,upper:'#b4a78c',trim:'#81755b',sole:'#e7dfcd'}]},
    {id:'reebok',brand:'REEBOK',name:'Viva Speed',original:'white',style:'Light lines. Everyday movement.',colors:[
      {id:'white',name:'White / Navy',price:49.99,upper:'#e9e9e2',trim:'#243d5c',sole:'#d3c4ad'},
      {id:'navy',name:'Navy',price:59.99,upper:'#314a62',trim:'#b6c6ca',sole:'#e3e4da'}]}
  ];
  const descriptions = {
    'other-color':'Invented demonstration: Nike Black/10/D qualifies at Dallas for $119.99; Grey / Green does not. Any color pictures Black automatically. adidas and Reebok retain their defined matches.',
    multiple:'Invented: Grey / Green and Black both qualify at Dallas; fixed catalogue order chooses Grey / Green, not a personalized or price-optimized choice.',
    explicit:'Invented: Nike Grey / Green is an explicit preference. Black qualifies but must not replace it. Clear the preference to return to Any color.',
    historical:'Historically inspired original-color outcomes only. Nike Grey / Green is unavailable at Dallas and available at Lewisville; other Nike colors remain unknown. adidas Black and Reebok White / Navy qualify at Dallas. Extra color/price definitions are invented, with no inferred inventory.',
    none:'Invented complete coverage: every listed color in size 10/D is unavailable at both demo stores. There are no qualifying variants in this bounded catalogue.',
    unknown:'Invented: all inventory answers are unknown. Zero confirmed matches does not mean there are no matching products.',
    partial:'Invented partial results: Nike inventory is unknown; adidas Black and Reebok White / Navy qualify. Unknown alternative colors do not invalidate their confirmed matches.',
    'variant-price':'Invented price case: Nike Black qualifies for pickup but costs $159.99. With a $150 limit Nike is excluded; raise the limit to $160 to include Black. Grey / Green remains unavailable.',
    incomplete:'Invented: size is missing. No confirmed matches until required preferences are complete.',
    slow:'Invented: responses take 1.8 seconds. Changing selections immediately invalidates old match status.',
    failure:'Invented: checks fail until Retry is used for that product. Other products remain unresolved until retried.',
    stale:'Invented: the otherwise defined availability answers have expired. They cannot confirm matches or stock absence.',
    obsolete:'Invented: an older explicit Grey / Green check resolves after a newer explicit Black check; the older result is discarded.'
  };
  function product(id) { return products.find(p=>p.id===id); }
  function variant(id,color,scenario) {
    const c=product(id)?.colors.find(c=>c.id===color);
    return c ? {...c,price:scenario==='variant-price'&&id==='nike'&&color==='black'?159.99:c.price} : null;
  }
  function complete(s) {
    return !!(s.store && stores[s.store] && s.size && s.width && String(s.max).trim()!=='' && Number.isFinite(Number(s.max)) && Number(s.max)>=0 && Number(s.max)<=500);
  }
  function lookup(id,t,scenario,recovered=false) {
    if(!t.store || !t.size || !t.width || !t.color) return {status:'incomplete'};
    const p=product(id);
    if(!p || !stores[t.store] || !variant(id,t.color,scenario) || t.size!=='10' || t.width!=='D') return {status:'unknown'};
    if(scenario==='failure'&&!recovered) return {status:'failed'};
    if(scenario==='unknown' || (scenario==='partial'&&id==='nike')) return {status:'unknown'};
    let status='unknown';
    if(t.color===p.original) {
      if(t.store==='dallas') status=id==='nike'?'unavailable':'available';
      else if(id==='nike') status='available';
    }
    if(scenario==='none') status='unavailable';
    if(scenario==='multiple'&&id==='nike'&&t.store==='dallas'&&t.color==='grey')status='available';
    if(!['historical','partial','unknown','none'].includes(scenario) && id==='nike' && t.color==='black' && t.store==='dallas') status='available';
    if(scenario==='stale' && status!=='unknown') status='stale';
    return {status};
  }
  function assess(id,s,scenario,recovered=false) {
    if(!complete(s)) return {kind:'incomplete',reason:'incomplete',candidates:[]};
    const p=product(id);
    if(!p) return {kind:'uncertain',reason:'unknown',candidates:[]};
    const colors=s.preference?p.colors.filter(c=>c.id===s.preference):p.colors;
    if(!colors.length) return {kind:'uncertain',reason:'unknown',candidates:[]};
    const candidates=colors.map(c=>{
      const v=variant(id,c.id,scenario);
      if(!Number.isFinite(v.price)) return {color:c.id,status:'unknown'};
      if(v.price>Number(s.max)) return {color:c.id,price:v.price,status:'over-budget'};
      return {color:c.id,price:v.price,...lookup(id,{...s,color:c.id},scenario,recovered)};
    });
    const match=candidates.find(c=>c.status==='available');
    if(match) return {kind:'match',variant:match.color,price:match.price,candidates};
    const unresolved=candidates.filter(c=>!['unavailable','over-budget'].includes(c.status));
    if(unresolved.length) {
      const reason=['failed','stale','unknown','incomplete'].find(r=>unresolved.some(c=>c.status===r))||'unknown';
      return {kind:'uncertain',reason,candidates};
    }
    return {kind:'nonmatch',reason:candidates.every(c=>c.status==='over-budget')?'budget':'requirements',candidates};
  }
  const api={stores,products,descriptions,product,variant,complete,lookup,assess};
  root.PickupFixtures=api;
  if(typeof module!=='undefined') module.exports=api;
})(typeof window==='undefined'?globalThis:window);
