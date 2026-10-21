// sidalog thumbnails: original monochrome line drawings on soft neutral tiles.
// Each entry: [tone, svg body in a 64x64 box]. Tone picks a subtle tile tint: f=food, d=drinks, s=sweets, o=other.
window.ART = {
  ramen:['f','<path d="M12 30h40a20 17 0 0 1-40 0z"/><path d="M12 30h40"/><path d="M18 36c4 2 8-2 12 0s8-2 12 0 6-1 8 0"/><circle cx="24" cy="27" r="3.2"/><path d="M38 6l-5 22M45 8l-8 20"/><path d="M26 50h12"/>'],
  sushi:['f','<rect x="9" y="30" width="20" height="12" rx="6"/><path d="M9 34c3-6 17-6 20 0"/><rect x="35" y="27" width="20" height="16" rx="8"/><circle cx="45" cy="35" r="4.5"/><circle cx="45" cy="35" r="1.6"/><path d="M8 48h48"/>'],
  japanese:['f','<path d="M14 30h36a18 15 0 0 1-36 0z"/><path d="M14 30h36"/><path d="M21 27c3-4 7-4 10 0 3-4 8-4 11 0"/><path d="M43 8l-7 18M49 10l-10 16"/><path d="M26 50h12"/>'],
  yakitori:['f','<path d="M10 52L54 14"/><circle cx="22" cy="41.5" r="5"/><circle cx="31.5" cy="33.3" r="5"/><circle cx="41" cy="25.2" r="5"/><path d="M14 58c3-4 6-4 9 0M30 58c3-4 6-4 9 0"/>'],
  korean:['f','<circle cx="32" cy="32" r="19"/><circle cx="32" cy="32" r="14"/><path d="M19 29h26M19 35h26"/><rect x="22" y="25" width="9" height="5" rx="2"/><rect x="33" y="34" width="9" height="5" rx="2"/><path d="M10 52h44"/>'],
  chinese:['f','<rect x="11" y="33" width="42" height="13" rx="4"/><path d="M11 39h42"/><path d="M17 33c0-7 4-11 7-11s7 4 7 11"/><path d="M33 33c0-7 4-11 7-11s7 4 7 11"/><path d="M21 25c2 2 4 2 6 0M37 25c2 2 4 2 6 0"/><path d="M23 15c0-3 2-3 2-6M39 15c0-3 2-3 2-6"/>'],
  noodles:['f','<path d="M11 32h42a21 16 0 0 1-42 0z"/><path d="M11 32h42"/><path d="M22 6c4 6 4 14 2 24M28 6c3 6 3 14 1 24"/><path d="M17 38c5 2 9-2 14 0s9-2 14 0"/><path d="M26 52h12"/>'],
  hotpot:['f','<rect x="9" y="28" width="46" height="20" rx="10"/><ellipse cx="32" cy="30" rx="23" ry="6"/><path d="M32 24v12"/><path d="M5 34h4M55 34h4"/><path d="M20 18c0-3 3-3 3-6M40 18c0-3 3-3 3-6"/>'],
  local:['f','<path d="M9 34h46a23 14 0 0 1-46 0z"/><path d="M9 34h46"/><path d="M16 34c2-5 6-7 10-7s8 2 10 7"/><path d="M36 30h12l-2 4"/><path d="M26 52h12"/>'],
  bowl:['f','<path d="M11 32h42a21 16 0 0 1-42 0z"/><path d="M11 32h42"/><path d="M16 38c5 2 9-2 14 0s9-2 14 0"/><circle cx="25" cy="28" r="2"/><path d="M36 28l5-2"/><path d="M26 52h12"/>'],
  satay:['f','<path d="M10 46L50 18M14 52L54 24"/><path d="M20 39l12-8"/><path d="M24 45l12-8"/><ellipse cx="46" cy="46" rx="9" ry="4.5"/>'],
  curry:['f','<circle cx="32" cy="34" r="20"/><circle cx="24" cy="30" r="6"/><circle cx="40" cy="30" r="5"/><path d="M20 42c4-3 20-3 24 0"/><path d="M42 48c5-6 11-6 13-2"/>'],
  mezze:['f','<circle cx="32" cy="36" r="17"/><circle cx="32" cy="36" r="11"/><circle cx="32" cy="36" r="4"/><path d="M48 18c-6 2-8 8-6 14"/>'],
  pizza:['f','<circle cx="32" cy="34" r="21"/><circle cx="32" cy="34" r="17"/><path d="M32 34L49 34M32 34L40.5 19.3M32 34L23.5 19.3M32 34L15 34M32 34L23.5 48.7M32 34L40.5 48.7"/><circle cx="25" cy="29" r="2"/><circle cx="38" cy="40" r="2"/>'],
  pasta:['f','<ellipse cx="32" cy="40" rx="23" ry="8"/><path d="M19 38c4-4 8 4 12 0s8 4 12 0M21 34c4-3 8 3 12 0s7 3 10 0"/><circle cx="32" cy="31" r="3"/><path d="M47 8l-6 22"/>'],
  plated:['f','<ellipse cx="32" cy="40" rx="23" ry="8"/><ellipse cx="32" cy="39" rx="15" ry="4.5"/><path d="M23 38c0-6 4-9 9-9s9 3 9 9"/><path d="M41 33c3-2 6 0 6 3"/><path d="M6 26v20M10 26v6M6 32h4M58 26v20"/>'],
  tapas:['f','<ellipse cx="32" cy="38" rx="24" ry="10"/><ellipse cx="32" cy="36" rx="18" ry="6"/><path d="M20 34l5 2M34 33l5 3M27 39l4-1"/><path d="M4 38h4M56 38h4"/>'],
  taco:['f','<path d="M8 44c0-14 10-22 24-22s24 8 24 22z"/><path d="M14 36c4-2 6 2 10 0s6 2 10 0 6 2 10 0 4 1 6 0"/><circle cx="24" cy="31" r="2"/><circle cx="38" cy="30" r="2"/>'],
  burger:['f','<path d="M12 30c0-10 9-16 20-16s20 6 20 16z"/><path d="M11 30h42"/><path d="M11 35c4 2 8-2 12 0s8-2 12 0 8-2 12 0 6 1 6 0"/><rect x="11" y="38" width="42" height="5" rx="2.5"/><path d="M12 43h40c0 5-4 7-8 7H20c-4 0-8-2-8-7z"/><path d="M24 20h.01M32 18h.01M40 21h.01"/>'],
  steak:['f','<ellipse cx="32" cy="40" rx="24" ry="9"/><path d="M15 36c0-8 8-12 17-12s17 4 17 12-8 7-17 7-17 0-17-7z"/><path d="M19 30l6-3M29 28l6-3M39 30l6-3"/>'],
  grill:['f','<rect x="10" y="30" width="44" height="17" rx="6"/><path d="M10 36h44M10 42h44"/><path d="M16 25c0-6 6-6 6-12M30 23c0-6 6-6 6-12M44 25c0-6 6-6 6-12"/>'],
  seafood:['f','<path d="M11 34c8-12 26-12 34 0-8 12-26 12-34 0z"/><path d="M45 34l10-8v16z"/><circle cx="19" cy="31.5" r="1.4"/><path d="M26 27c3 3 3 11 0 14M32 26c3 4 3 12 0 16"/><path d="M8 52c4-3 8-3 12 0s8 3 12 0 8-3 12 0 8 3 12 0"/>'],
  salad:['f','<path d="M11 32h42a21 16 0 0 1-42 0z"/><path d="M11 32h42"/><path d="M18 31c0-5 4-8 8-6M28 30c1-6 7-8 10-4M38 31c2-4 7-4 8 0"/><path d="M26 52h12"/>'],
  coffee:['d','<path d="M13 24h30v14a13 13 0 0 1-13 13h-4A13 13 0 0 1 13 38z"/><path d="M43 28h3a6 6 0 0 1 0 12h-3"/><path d="M13 24h30"/><path d="M24 31c2-2 6-2 8 0-2 2-6 2-8 0z"/><path d="M22 16c0-3 3-3 3-6M31 16c0-3 3-3 3-6"/><path d="M10 56h36"/>'],
  bakery:['s','<path d="M8 42c2-12 14-20 24-20s22 8 24 20c-6 4-42 4-48 0z"/><path d="M20 27c2 4 2 10 0 14M32 23c2 5 2 13 0 18M44 27c-2 4-2 10 0 14"/>'],
  dessert:['s','<path d="M16 34h32v12a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z"/><path d="M16 41h32"/><path d="M14 34c0-6 8-8 18-8s18 2 18 8"/><circle cx="32" cy="21" r="3.5"/><path d="M32 17.5c1-3 3-4 5-4"/>'],
  icecream:['s','<path d="M24 34l8 22 8-22z"/><path d="M26 39h12M28 45h8"/><circle cx="26" cy="28" r="7"/><circle cx="38" cy="28" r="7"/><circle cx="32" cy="20" r="7"/>'],
  cocktail:['d','<path d="M14 14h36L32 34z"/><path d="M19 19h26"/><path d="M32 34v17M24 52h16"/><circle cx="45" cy="13" r="5"/><path d="M26 23l9 5"/>'],
  wine:['d','<path d="M22 9h20l-1 13a9 9 0 0 1-18 0z"/><path d="M23 17h18"/><path d="M32 31v18M24 50h16"/><path d="M48 20h6v27a3 3 0 0 1-6 0zM49 12h4v8h-4z"/>'],
  beer:['d','<rect x="16" y="20" width="24" height="32" rx="4"/><path d="M40 26h5a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-5"/><path d="M16 22c0-6 4-8 8-8 2-3 8-3 10 0 4 0 6 3 6 8"/><path d="M22 30v16M28 30v16M34 30v16"/>'],
  sake:['d','<path d="M22 10h10v6l6 6v26a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V22l6-6z"/><path d="M16 28h22M16 40h22"/><path d="M42 40h12l-2 10h-8z"/>'],
  skyline:['d','<path d="M6 56V36h10v20M18 56V28h9v28M29 56V32h8v24M39 56V22h10v34M51 56V40h7v16"/><circle cx="50" cy="11" r="4"/><path d="M29 9h14l-7 9z"/><path d="M36 18v7M32 25h8"/>'],
  bag:['o','<path d="M14 22h36l-3 28a4 4 0 0 1-4 3H21a4 4 0 0 1-4-3z"/><path d="M24 22v-4a8 8 0 0 1 16 0v4"/>']
};
window.artKey = function(p){
  const t = `${p.q||''} ${p.gc||''} ${p.n||''}`.toLowerCase(), s = p.s||'';
  const has = (...w) => w.some(x => t.includes(x));
  if (s==='Other') return 'bag';
  if (s==='Cocktail bar') return 'cocktail';
  if (s==='Wine & spirits bar') return 'wine';
  if (s==='Pub & craft beer') return 'beer';
  if (s==='Izakaya & sake bar') return 'sake';
  if (s==='Rooftop & lounge') return 'skyline';
  if (has('ice cream','gelato','creamery')) return 'icecream';
  if (has('coffee','cafe','café','kopi','brunch','tea house','tea bar','roast')) return s==='Bar'?'cocktail':'coffee';
  if (has('bagel','bakery','bread','pastry','pie','boulangerie','sourdough','croissant')) return 'bakery';
  if (has('dessert','cake','patisserie','pâtisserie','kueh','chocolate','crêpe','crepe','tart','granola','yogurt')) return 'dessert';
  if (s==='Bar') return has('wine')?'wine':has('beer','brew')?'beer':'cocktail';
  if (has('ramen')) return 'ramen';
  if (has('sushi','omakase','handroll','unagi')) return 'sushi';
  if (has('yakitori','kushiyaki','skewer')) return 'yakitori';
  if (has('korean')) return 'korean';
  if (has('yakiniku','barbecue','bbq','grill','mookata')) return 'grill';
  if (has('japanese','izakaya','tonkatsu','udon','soba','tempura','sukiyaki','shabu','teppan')) return 'japanese';
  if (has('hotpot','hot pot','steamboat','mala')) return 'hotpot';
  if (has('satay')) return 'satay';
  if (has('laksa','noodle','mee','pan mee','kway teow','hor fun','lor mee','bee hoon')) return 'noodles';
  if (has('dumpling','dim sum','xiao long','bao','pau')) return 'chinese';
  if (has('chicken rice','nasi lemak','hawker','prata','roti','claypot','kway chap','porridge','bak kut teh','singaporean','malay','peranakan','nyonya','zi char','local','carrot cake','hokkien','indonesian','halal','duck rice','fish soup','food court')) return 'local';
  if (has('thai','vietnam','pho','banh')) return 'bowl';
  if (has('indian','biryani','tandoor','pakistani','sri lankan','bengal','curry')) return 'curry';
  if (has('turkish','mediterranean','greek','lebanese','israeli','middle eastern','egyptian','kebab')) return 'mezze';
  if (has('pizza')) return 'pizza';
  if (has('pasta','italian','trattoria','osteria')) return 'pasta';
  if (has('spanish','tapas','paella')) return 'tapas';
  if (has('mexican','taco','tamale','quesadilla','latin','peruvian','brazilian','argentin')) return 'taco';
  if (has('burger','hot dog','sandwich')) return 'burger';
  if (has('steak','meat','butcher')) return 'steak';
  if (has('seafood','oyster','fish','crab','prawn')) return 'seafood';
  if (has('chinese','cantonese','sichuan','hunan','teochew','shanghai','xinjiang','taiwanese','hakka','dongbei','chongqing')) return 'chinese';
  if (has('healthy','salad','vegan','vegetarian','poke')) return 'salad';
  if (s==='Street food') return 'local';
  return 'plated';
};
window.artSVG = function(p){
  const a = window.ART[window.artKey(p)] || window.ART.bag;
  return `<svg class="art art-${a[0]}" viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true"><g transform="translate(13 13) scale(.6)" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${a[1]}</g></svg>`;
};
