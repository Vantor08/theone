var ICONS={
 check:'<polyline points="4 12 10 17.5 20 6.5"/>',
 check_circle:'<polyline points="4 12 10 17.5 20 6.5"/>',
 verified:'<path d="M12 3l6.5 2.8v4.7c0 4.3-2.8 7.1-6.5 8.5-3.7-1.4-6.5-4.2-6.5-8.5V5.8z"/><polyline points="9 12 11.3 14.3 15.5 9.5"/>',
 verified_user:'<path d="M12 3l6.5 2.8v4.7c0 4.3-2.8 7.1-6.5 8.5-3.7-1.4-6.5-4.2-6.5-8.5V5.8z"/><polyline points="9 12 11.3 14.3 15.5 9.5"/>',
 science:'<path d="M9 3h6M10 3v5.5L5.3 16.8A2 2 0 0 0 7 20h10a2 2 0 0 0 1.7-3.2L14 8.5V3"/><path d="M8 14h8"/>',
 battery_2_bar:'<rect x="3" y="7" width="15.5" height="10" rx="2"/><path d="M21 10.5v3"/><rect x="5.3" y="9.3" width="5" height="5.4" rx="1" fill="currentColor" stroke="none"/>',
 sentiment_dissatisfied:'<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.8 16c1.6-1.4 4.8-1.4 6.4 0"/>',
 sentiment_sad:'<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.8 16.3c1.6-1.6 4.8-1.6 6.4 0"/><path d="M6.6 12.5c0 1-.9 1.6-.9 2.6"/>',
 medication:'<path d="M5 13.2 13.2 5a4 4 0 0 1 5.8 5.8L10.8 19A4 4 0 0 1 5 13.2z"/><path d="M9 9l6 6"/>',
 spa:'<circle cx="12" cy="12" r="2.6"/><path d="M12 9.4V4M12 14.6V20M9.4 12H4M14.6 12H20"/>',
 bolt:'<path d="M13 2 4.5 13.5H10l-1 8.5L19.5 10H13z" fill="currentColor" stroke="none"/>',
 favorite:'<path d="M12 20.5S4.5 15.8 4.5 10A3.9 3.9 0 0 1 12 7.6 3.9 3.9 0 0 1 19.5 10c0 5.8-7.5 10.5-7.5 10.5z"/>',
 grain:'<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z"/><path d="M12 10v8"/>',
 psychology:'<path d="M12 3l1.5 5.3L19 10l-5.5 1.7L12 17l-1.5-5.3L5 10l5.5-1.7z" fill="currentColor" stroke="none"/>',
 coffee:'<path d="M5 8h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 9h2.2a2 2 0 0 1 0 4H16"/><path d="M7 3v2M11 3v2"/>',
 nutrition:'<path d="M12 8.2c-3-2.2-7.5 0-7.5 4.3C4.5 16.5 7.8 20 10 20c1 0 1.2-.6 2-.6s1 .6 2 .6c2.2 0 5.5-3.5 5.5-7.5 0-4.3-4.5-6.5-7.5-4.3z"/><path d="M12 8.2c0-2 1.2-3.2 3.2-3.7"/>',
 eco:'<path d="M5.5 19c0-8 6-13.5 14-13.5 0 8.5-5.5 14.5-13.5 14.5-.6 0-1.4-.2-.5-1z"/><path d="M9.5 15.5c2-2.3 4.3-3.6 7-4.5"/>',
 play_circle:'<circle cx="12" cy="12" r="8.5"/><path d="M10 8.5l5.5 3.5L10 15.5z" fill="currentColor" stroke="none"/>',
 add:'<path d="M12 5v14M5 12h14"/>',
 photo_camera:'<rect x="3" y="7.5" width="18" height="12.5" rx="2.5"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7.5 9.5 5h5L16 7.5"/>',
 image:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="8" cy="10" r="1.7"/><path d="M4.5 17.5 10 12l4 4 2.5-2.5 3 3"/>'
};

(function(){
 document.querySelectorAll('.msym').forEach(function(s){
   var n=(s.textContent||'').trim(), d=ICONS[n]; if(!d)return;
   s.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>';
 });
})();

function setView(v){
  // Homepage has no product data loaded, so the product buy box there is empty
  // ("Loading plans…"). If asked to show the product view without product data,
  // do a REAL navigation to the product page so real plan/variant data loads.
  if(v==='product' && !window.VALLORE_PRODUCT){
    window.location.href='/products/electrolyte-magnesium-powder-agent';
    return;
  }
  document.body.dataset.view=v;window.scrollTo(0,0);
  var ns=document.querySelector('.nl-shop'); if(ns)ns.classList.toggle('active',v==='product');
  var nh=document.querySelector('.nl-home'); if(nh)nh.classList.toggle('active',v==='home');
}
function scrollToId(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}
function goProduct(id){if(!window.VALLORE_PRODUCT){window.location.href='/products/electrolyte-magnesium-powder-agent#'+id;return;}setView('product');setTimeout(function(){scrollToId(id)},60);}

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(function(q){
  q.addEventListener('click',function(){q.parentElement.classList.toggle('open')});
});

// Kit selector
document.querySelectorAll('.kit').forEach(function(k){
  k.addEventListener('click',function(){
    document.querySelectorAll('.kit').forEach(function(x){x.classList.remove('sel')});
    k.classList.add('sel');
  });
});

// Subscribe/one-time selector + cart button price + once-bags visibility
var cartBtn = document.getElementById('addcartBtn');
var oncePriceEl = document.querySelector('.once-price');
var onceSubEl = document.querySelector('.once-sub');

document.querySelectorAll('.buyopt').forEach(function(o){
  o.addEventListener('click',function(){
    document.querySelectorAll('.buyopt').forEach(function(x){x.classList.remove('sel')});
    o.classList.add('sel');
    if(o.dataset.opt==='sub'){
      // get active sub bags button
      var activeSubBag=o.querySelector('.bags button.on');
      var subPrices={'1 pouch':'$26.39','2 pouches':'$39.99','4 pouches':'$47.99'};
      var label=activeSubBag?activeSubBag.textContent.trim():'1 pouch';
      if(cartBtn) cartBtn.textContent='Add to cart — '+(subPrices[label]||'$26.39');
    } else {
      // one-time
      var activeOnce=o.querySelector('.once-bags button.on');
      var oncePrice=activeOnce?activeOnce.dataset.price:'$32.99';
      var onceLabel=activeOnce?activeOnce.dataset.label:'1 pouch · $1.65 / serving';
      if(oncePriceEl) oncePriceEl.textContent=oncePrice;
      if(onceSubEl) onceSubEl.textContent=onceLabel;
      if(cartBtn) cartBtn.textContent='Add to cart — '+oncePrice;
    }
  });
});

// Subscribe bags
document.querySelectorAll('.buyopt[data-opt="sub"] .bags button').forEach(function(b){
  b.addEventListener('click',function(e){
    e.stopPropagation();
    this.closest('.bags').querySelectorAll('button').forEach(function(x){x.classList.remove('on')});
    this.classList.add('on');
    var subPrices={'1 pouch':'$26.39','2 pouches':'$39.99','4 pouches':'$47.99'};
    var label=this.textContent.trim();
    if(cartBtn && document.querySelector('.buyopt[data-opt="sub"]').classList.contains('sel')){
      cartBtn.textContent='Add to cart — '+(subPrices[label]||'$26.39');
    }
  });
});

// One-time bags
document.querySelectorAll('.once-bags button').forEach(function(b){
  b.addEventListener('click',function(e){
    e.stopPropagation();
    this.closest('.once-bags').querySelectorAll('button').forEach(function(x){x.classList.remove('on')});
    this.classList.add('on');
    var price=this.dataset.price||'$32.99';
    var label=this.dataset.label||'';
    if(oncePriceEl) oncePriceEl.textContent=price;
    var _onceNum=parseFloat(price.replace(/[^0-9.]/g,''))||0;var _onceWas=document.getElementById('once-was');if(_onceWas)_onceWas.textContent='$'+(_onceNum*2).toFixed(2);
    if(onceSubEl) onceSubEl.textContent=label;
    if(cartBtn && document.querySelector('.buyopt[data-opt="once"]').classList.contains('sel')){
      cartBtn.textContent='Add to cart — '+price;
    }
  });
});

// Self-check
function scCount(){}
function scReveal(){
  var n=document.querySelectorAll('.scitem.on').length;
  var t=document.getElementById('sctext');
  if(n>=3){t.textContent="That's exactly who Vallore is made for. You don't have to brace for the bad weeks anymore.";}
  else if(n>=1){t.textContent="Even one of these is worth feeling steadier about. Vallore was built for exactly this.";}
  else{t.textContent="If any of this ever sounds like you, Vallore was made for those days.";}
  document.getElementById('scresult').classList.add('show');
}
;
function syncSupply(){var o=document.querySelector('.buyopt[data-opt="sub"]');if(!o)return;var s=o.querySelector('.sub'),p=o.querySelector('.pr');if(!s&&!p)return;var b=o.querySelector('.bags button.on');var q=b?b.textContent.trim():'1 pouch';var pr={'1 pouch':'$26.39','2 pouches':'$39.99','4 pouches':'$47.99'}[q];if(s)s.textContent='Ships every 3 weeks · free shipping · cancel anytime';if(p)p.textContent=pr;}
document.querySelectorAll('.bags button').forEach(function(b){b.addEventListener('click',syncSupply)});syncSupply();
;
function selectGallery(button){
 var picture=button.querySelector('img');
 var main=document.getElementById('gallery-image');
 main.src=picture.src;main.alt=picture.alt;
 document.querySelectorAll('.gallery-thumb').forEach(function(b){var selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
}
;
var cartIndex=0,cartFlavor='Red Strawberry';
function selectFlavor(){var v=document.querySelector('[name="vallore-flavor"]:checked').value;var fl=document.querySelector('.buybox .flavor');if(fl)fl.textContent='Flavor: '+v+' · 20 servings';var blue=v==='Blue Raspberry';var g=document.querySelector('.gallery');if(g)g.classList.toggle('is-blue',blue);document.body.classList.toggle('theme-blue',blue);galShow(blue?1:0);}
function thumbScroll(dir){var t=document.getElementById('gthumbs');if(t)t.scrollBy({left:dir*170,behavior:'smooth'});}
var mq=matchMedia('(min-width:901px)');function placeRitual(){var box=document.getElementById('ritual-help');(mq.matches?document.querySelector('.gallery'):document.getElementById('ritual-slot')).appendChild(box);}placeRitual();mq.addEventListener('change',placeRitual);
function openCartDrawer(){var o=document.querySelector('.buyopt.sel'),sub=o.dataset.opt==='sub',buttons=Array.from(o.querySelectorAll(sub?'.bags button':'.once-bags button'));cartIndex=Math.max(0,buttons.findIndex(b=>b.classList.contains('on')));cartFlavor=document.querySelector('[name="vallore-flavor"]:checked').value;document.getElementById('cd-subscribe').checked=sub;updateCartPreview();document.getElementById('cart-drawer').showModal();document.body.style.overflow='hidden';startReserve();}
function updateCartPreview(){var sub=document.getElementById('cd-subscribe').checked,i=cartIndex,days=[20,40,80][i],once=[32.99,49.99,59.99][i],recurring=[26.39,39.99,47.99][i],price=sub?recurring:once,money=function(n){return '$'+n.toFixed(2);};document.getElementById('cd-flavor').textContent=cartFlavor;document.getElementById('cd-bundle').textContent=['1 pouch \u00b7 20 servings','2 pouches \u00b7 40 servings','4 pouches \u00b7 80 servings (1 free)'][i];document.getElementById('cd-type').textContent=sub?'Subscription \u00b7 every 3 weeks':'One-time purchase';var code=null,disc=0;try{if(localStorage.getItem('vallore_discount')==='BALANCE25'){code='BALANCE25';disc=price*0.25;}}catch(e){}var finalLine=price-disc,compareAt=price*2,savings=compareAt-finalLine,hasSave=savings>0.005;var ci=document.getElementById('cd-coupon'),cm=document.getElementById('cd-coupon-msg');if(code){if(ci&&!ci.value)ci.value='BALANCE25';if(cm){cm.hidden=false;cm.textContent='\u2713 BALANCE25 applied \u2014 25% off';cm.className='cd-coupon-msg ok';}}document.getElementById('cd-line-price').textContent=money(finalLine);document.getElementById('cd-line-was').textContent=hasSave?money(compareAt):'';document.getElementById('cd-total').textContent=money(finalLine);document.getElementById('cd-sub-was').textContent=hasSave?money(compareAt):'';document.getElementById('cd-checkout-total').textContent=money(finalLine);var sb=document.getElementById('cd-save-banner');if(hasSave){sb.hidden=false;document.getElementById('cd-save-amt').textContent=money(savings);}else{sb.hidden=true;}document.getElementById('cd-savings').textContent=money(recurring)+' per delivery \u00b7 save '+money(once-recurring)+' vs. one-time';document.getElementById('cd-plan').textContent=sub?'Recurring charge: '+money(recurring)+' every 3 weeks, plus applicable taxes and shipping. Cancel anytime.':'Optional: receive this bundle every 3 weeks for '+money(recurring)+' per delivery. Cancel anytime.';var fsg=50,fsc=Math.min(finalLine,fsg),fsm=document.getElementById('cd-ship-msg'),fsf=document.getElementById('cd-ship-fill');if(fsm){fsm.innerHTML=finalLine>=fsg?'<b>Congrats!</b> You unlocked <b>free shipping</b>':'You are <b>'+money(fsg-finalLine)+'</b> from free shipping';fsf.style.width=Math.round(fsc/fsg*100)+'%';}document.getElementById('cd-notice').hidden=true;}
function applyCoupon(){var el=document.getElementById('cd-coupon'),msg=document.getElementById('cd-coupon-msg'),v=(el.value||'').trim().toUpperCase();if(v==='BALANCE25'){try{localStorage.setItem('vallore_discount','BALANCE25');}catch(e){}msg.hidden=false;msg.textContent='\u2713 BALANCE25 applied \u2014 25% off';msg.className='cd-coupon-msg ok';}else if(v===''){msg.hidden=false;msg.textContent='Enter a code';msg.className='cd-coupon-msg';}else{msg.hidden=false;msg.textContent='Code not recognized';msg.className='cd-coupon-msg err';}updateCartPreview();}
function closeCartDrawer(){document.getElementById('cart-drawer').close();}document.getElementById('cart-drawer').addEventListener('close',()=>document.body.style.overflow='');document.getElementById('cart-drawer').addEventListener('click',function(e){var r=this.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)this.close();});
;
var gIdx=0;
function galShow(i){var s=document.querySelectorAll('#gslides .gslide'),t=document.querySelectorAll('#gthumbs .gthumb');gIdx=(i+s.length)%s.length;s.forEach(function(el,k){el.classList.toggle('active',k===gIdx)});t.forEach(function(el,k){el.classList.toggle('selected',k===gIdx);el.setAttribute('aria-pressed',String(k===gIdx))});}
function galMove(d){galShow(gIdx+d);}
;
(function(){
 var end=new Date('2026-12-01T08:00:00Z').getTime();
 function pad(n){return String(n).padStart(2,'0');}
 function tick(){var t=document.getElementById('bfTimer');if(!t)return;var d=end-Date.now();
   if(d<=0){t.textContent='Sale ended';return;}
   var dd=Math.floor(d/864e5),h=Math.floor(d%864e5/36e5),m=Math.floor(d%36e5/6e4),s=Math.floor(d%6e4/1e3);
   t.textContent='Ends in '+dd+'d '+pad(h)+':'+pad(m)+':'+pad(s);}
 tick();setInterval(tick,1000);
})();
var reserveIv;
function startReserve(){var end=Date.now()+600000;clearInterval(reserveIv);
 function r(){var el=document.getElementById('cdReserve');if(!el)return;var d=end-Date.now();if(d<0)d=0;
   el.textContent=String(Math.floor(d/6e4)).padStart(2,'0')+':'+String(Math.floor(d%6e4/1e3)).padStart(2,'0');}
 r();reserveIv=setInterval(r,1000);}
function copyBF(){var code='BALANCE25';
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(code).catch(function(){});}
 try{localStorage.setItem('vallore_discount',code);}catch(e){}
 try{var f=document.createElement('iframe');f.style.display='none';f.setAttribute('aria-hidden','true');f.src='/discount/'+encodeURIComponent(code)+'?redirect=/cart';document.body.appendChild(f);setTimeout(function(){try{f.remove();}catch(e){}},6000);}catch(e){}
 var b=document.getElementById('bfCopyBtn');if(b){b.textContent='Copied \u2713';b.classList.add('copied');setTimeout(function(){b.textContent='Copy code';b.classList.remove('copied');},2500);}
 try{var cd=document.getElementById('cart-drawer');if(cd&&cd.open&&typeof updateCartPreview==='function')updateCartPreview();}catch(e){}}
/* ========== REAL SHOPIFY CART INTEGRATION (runs only on the live store) ========== */
(function(){
  function money(c){return '$'+(c/100).toFixed(2);}
  function P(){return window.VALLORE_PRODUCT||null;}
  var BUNDLES=['1 Pouch','2 Pouches','3+1 Free (4 Pouches)'];(function(){var p=window.VALLORE_PRODUCT;if(!p||!p.variants)return;var PK=['1 Pouch','2 Pouches','4 Pouch','4 Pouches','3+1 Free (4 Pouches)'];var MP={'1 Pouch':'1 Pouch','2 Pouches':'2 Pouches','4 Pouch':'3+1 Free (4 Pouches)','4 Pouches':'3+1 Free (4 Pouches)','3+1 Free (4 Pouches)':'3+1 Free (4 Pouches)'};p.variants.forEach(function(v){var a=v.bundle,b=v.flavor;var pk=PK.indexOf(a)>=0?a:(PK.indexOf(b)>=0?b:a);var fl=(pk===a)?b:a;v.bundle=MP[pk]||pk;v.flavor=(''+fl).toLowerCase().indexOf('red')>=0?'Red Strawberry':'Blue Raspberry';});})();

  function getSelection(){
    var o=document.querySelector('.buyopt.sel'); if(!o)return null;
    var sub=o.dataset.opt==='sub';
    var btns=Array.prototype.slice.call(o.querySelectorAll(sub?'.bags button':'.once-bags button'));
    var idx=Math.max(0,btns.findIndex(function(b){return b.classList.contains('on');}));
    var fl=document.querySelector('[name="vallore-flavor"]:checked');
    return {sub:sub, bundle:BUNDLES[idx]||BUNDLES[0], flavor: fl?fl.value:'Red Strawberry'};
  }
  function findVariant(sel){
    var p=P(); if(!p)return null;
    var exact=p.variants.filter(function(v){return v.bundle===sel.bundle && v.flavor===sel.flavor;})[0];
    return exact || p.variants.filter(function(v){return v.bundle===sel.bundle;})[0] || p.variants[0] || null;
  }

  window.addToCart=function(){
    var p=P();
    if(!p){ // homepage / no product context -> navigate to product page
      window.location = '/products/electrolyte-magnesium-powder-agent#bundle-selector';
      return;
    }
    var sel=getSelection(); var v=findVariant(sel);
    if(!v){
      console.error('[Vallore] No variant found for',sel,'in',p.variants);
      var btn2=document.getElementById('addcartBtn'); if(btn2)btn2.textContent='Sold out'; return;
    }
    // Determine selling_plan — must be integer for Shopify API
    var planId=null;
    if(sel.sub){
      var ps=document.getElementById('sc-freq-select');
      var rawId=(ps&&ps.value)||((v.plans&&v.plans[0])?v.plans[0].id:null);
      if(rawId) planId=parseInt(rawId,10)||null;
    }
    var btn=document.getElementById('addcartBtn'); var label=btn?btn.textContent:'';
    if(btn)btn.textContent='Adding…';
    // Build form data — Shopify's native /cart/add handles this perfectly
    var form=document.getElementById('vallore-atc-form');
    if(form){
      form.querySelector('[name="id"]').value=String(v.id);
      form.querySelector('[name="quantity"]').value='1';
      var spInput=form.querySelector('[name="selling_plan"]');
      if(planId){ spInput.value=String(planId); spInput.disabled=false; }
      else { spInput.value=''; spInput.disabled=true; }
      // Try JSON fetch first (stays on page + opens drawer), form submit as infallible fallback
      var body={items:[{id:v.id,quantity:1}]};
      if(planId) body.items[0].selling_plan=planId;
      fetch('/cart/add.js',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(body)})
        .then(function(r){
          if(!r.ok) return r.text().then(function(t){throw new Error(t);});
          return r.json();
        })
        .then(function(){
          if(btn)btn.textContent=label;
          openRealCart();
        })
        .catch(function(err){
          console.warn('[Vallore] fetch add failed, using form fallback:',err);
          // Form submit goes to /cart — Shopify processes it and redirects to /cart
          // We override the action to stay on page via fetch form data
          var fd=new FormData(form);
          fetch('/cart/add',{method:'POST',body:fd,headers:{'Accept':'application/json'}})
            .then(function(r2){ if(btn)btn.textContent=label; openRealCart(); })
            .catch(function(){ if(btn)btn.textContent=label; window.location='/cart'; });
        });
    } else {
      // No form in DOM (shouldn't happen) — direct fetch
      var body2={items:[{id:v.id,quantity:1}]};
      if(planId) body2.items[0].selling_plan=planId;
      fetch('/cart/add.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body2)})
        .then(function(r){if(!r.ok)throw new Error('failed');return r.json();})
        .then(function(){if(btn)btn.textContent=label;openRealCart();})
        .catch(function(){if(btn)btn.textContent=label;window.location='/cart';});
    }
  };

  function openRealCart(){
    fetch('/cart.js',{headers:{'Accept':'application/json'}})
      .then(function(r){return r.json();})
      .then(function(cart){
        renderRealCart(cart);
        var d=document.getElementById('cart-drawer');
        if(d&&d.showModal){ d.showModal(); document.body.style.overflow='hidden'; if(window.startReserve)startReserve(); }
      })
      .catch(function(){ window.location='/cart'; });
  }
  window.openCartDrawer=openRealCart; // primary alias
  window.openRealCart=openRealCart;   // used by cart.liquid auto-open

  function set(id,val){var e=document.getElementById(id); if(e)e.textContent=val;}
  function renderRealCart(cart){
    var it=cart.items&&cart.items[0]; if(!it){ set('cd-total',money(0)); return; }
    set('cd-count', cart.item_count+(cart.item_count===1?' item':' items'));
    if(window.setCartBadge)window.setCartBadge(cart.item_count);
    var photo=document.getElementById('cd-photo'); if(photo&&it.image)photo.src=it.image;
    var bundle='',flavor=''; (it.options_with_values||[]).forEach(function(o){ if(/flavor/i.test(o.name))flavor=o.value; else bundle=o.value; });
    set('cd-flavor', flavor||'');
    set('cd-bundle', (bundle||it.product_title));
    var isSub=!!it.selling_plan_allocation;
    set('cd-type', isSub ? ('Subscription · '+((it.selling_plan_allocation.selling_plan&&it.selling_plan_allocation.selling_plan.name)||'recurring')) : 'One-time purchase');
    var now=it.final_line_price;
    var was=it.original_line_price>now?it.original_line_price:(it.compare_at_price?it.compare_at_price*it.quantity:0);
    set('cd-line-price', money(now));
    var lw=document.getElementById('cd-line-was'); if(lw)lw.textContent=(was&&was>now)?money(was):'';
    var sub=cart.total_price;
    set('cd-total', money(sub)); set('cd-checkout-total', money(sub));
    var ot=cart.original_total_price||sub, save=ot-sub;
    var sw=document.getElementById('cd-sub-was'); if(sw)sw.textContent=(ot>sub)?money(ot):'';
    var sb=document.getElementById('cd-save-banner');
    if(sb){ if(save>5){ sb.hidden=false; set('cd-save-amt',money(save)); } else sb.hidden=true; }
    var fsg=5000, fsm=document.getElementById('cd-ship-msg'), fsf=document.getElementById('cd-ship-fill');
    if(fsm){ fsm.innerHTML = sub>=fsg ? '<b>Congrats!</b> You unlocked <b>free shipping</b>' : 'You are <b>'+money(fsg-sub)+'</b> from free shipping'; }
    if(fsf){ fsf.style.width=Math.min(100,Math.round(sub/fsg*100))+'%'; }
    var up=document.querySelector('.cd-upsell'); if(up)up.style.display='none'; // sub/once chosen in the buy box now
    try{ if(localStorage.getItem('vallore_discount')==='BALANCE25'){ var ci=document.getElementById('cd-coupon'); if(ci&&!ci.value)ci.value='BALANCE25'; var cm=document.getElementById('cd-coupon-msg'); if(cm){cm.hidden=false;cm.textContent='✓ BALANCE25 applied at checkout';cm.className='cd-coupon-msg ok';} } }catch(e){}
  }

  // wire checkout button + add-to-cart button (DOM is ready: this script is at end of body)
  var co=document.querySelector('.cd-checkout'); if(co){ co.onclick=function(){ window.location='/checkout'; }; }
  var ab=document.getElementById('addcartBtn'); if(ab){ ab.onclick=function(e){ e.preventDefault(); addToCart(); return false; }; }

  // make the coupon Apply + copy button actually set the Shopify discount
  window.applyCoupon=function(){
    var el=document.getElementById('cd-coupon'), msg=document.getElementById('cd-coupon-msg');
    var v=(el&&el.value||'').trim().toUpperCase();
    if(v==='BALANCE25'){ try{localStorage.setItem('vallore_discount','BALANCE25');}catch(e){}
      try{var f=document.createElement('iframe');f.style.display='none';f.src='/discount/BALANCE25';document.body.appendChild(f);setTimeout(function(){try{f.remove();}catch(e){}},6000);}catch(e){}
      if(msg){msg.hidden=false;msg.textContent='✓ BALANCE25 applied at checkout';msg.className='cd-coupon-msg ok';}
    } else if(v===''){ if(msg){msg.hidden=false;msg.textContent='Enter a code';msg.className='cd-coupon-msg';} }
    else { if(msg){msg.hidden=false;msg.textContent='Code not recognized';msg.className='cd-coupon-msg err';} }
  };
})();

function updateSubCard(){var card=document.querySelector(".sub-card");if(!card)return;var btns=card.querySelectorAll(".bags button");var idx=0;btns.forEach(function(b,k){if(b.classList.contains("on"))idx=k;});var sub=[26.39,39.99,47.99][idx],once=[32.99,49.99,59.99][idx],serv=[20,40,80][idx];var m=function(n){return "$"+n.toFixed(2);};var e;if(e=document.getElementById("sc-now"))e.textContent=m(sub);if(e=document.getElementById("sc-was"))e.textContent=m(sub*2);if(e=document.getElementById("sc-serving"))e.textContent=m(sub/serv)+" / serving";if(e=document.getElementById("sc-save-amt"))e.textContent=m(sub)+" (50%)";}
function setTxt(id,t){var e=document.getElementById(id);if(e)e.textContent=t;}
function refreshSubCard(){var card=document.querySelector(".sub-card");if(!card)return;var P=window.VALLORE_PRODUCT;var btns=card.querySelectorAll(".bags button"),idx=0;btns.forEach(function(b,k){if(b.classList.contains("on"))idx=k;});var sel=document.getElementById("sc-freq-select");if(P&&P.variants){var bundle=["1 Pouch","2 Pouches","3+1 Free (4 Pouches)"][idx];var flEl=document.querySelector('[name="vallore-flavor"]:checked'),flavor=flEl?flEl.value:"Red Strawberry";var v=P.variants.filter(function(x){return x.bundle===bundle&&x.flavor===flavor;})[0]||P.variants.filter(function(x){return x.bundle===bundle;})[0];if(v&&v.plans&&v.plans.length&&sel){// Always repopulate the dropdown — keep selected value if still valid
var prevVal=sel.value;sel.innerHTML="";v.plans.forEach(function(p){var o=document.createElement("option");o.value=String(p.id);o.textContent=p.name;sel.appendChild(o);});// Restore previously selected plan if it still exists in this variant
var stillValid=Array.prototype.some.call(sel.options,function(o){return o.value===prevVal;});if(stillValid&&prevVal)sel.value=prevVal;sel.dataset.v=String(v.id);var plan=v.plans.filter(function(p){return String(p.id)===sel.value;})[0]||v.plans[0];if(plan){var now=plan.price/100,was=now*2,save=now,serv=[20,40,80][idx];setTxt("sc-now","$"+now.toFixed(2));setTxt("sc-was","$"+was.toFixed(2));setTxt("sc-serving","$"+(now/serv).toFixed(2)+" / serving");setTxt("sc-save-amt","$"+save.toFixed(2)+" (50%)");card.dataset.plan=plan.id;}return;}}updateSubCard();}
(function(){var card=document.querySelector(".sub-card");if(!card)return;card.querySelectorAll(".bags button").forEach(function(b){b.addEventListener("click",function(){setTimeout(refreshSubCard,0);});});var so=document.querySelector('.buyopt[data-opt="sub"]');if(so)so.addEventListener("click",function(){setTimeout(refreshSubCard,0);});document.querySelectorAll('[name="vallore-flavor"]').forEach(function(r){r.addEventListener("change",function(){setTimeout(refreshSubCard,0);});});refreshSubCard();})();

// On full page load, sync nav active state to match the server-rendered data-view
(function(){
  var v=document.body.dataset.view||'home';
  var shopLink=document.querySelector('.nl-shop');
  var homeLink=document.querySelector('.nl-home');
  if(shopLink) shopLink.classList.toggle('active', v==='product');
  if(homeLink) homeLink.classList.toggle('active', v==='home');
})();

// Reviews carousel arrows
window.revScroll=function(btn,dir){
  var car=btn.parentElement;var track=car.querySelector('.reviews');if(!track)return;
  var card=track.querySelector('.rev');var step=card?card.getBoundingClientRect().width+20:320;
  track.scrollBy({left:dir*step,behavior:'smooth'});
};
/* Header cart button badge */
(function(){
  function setCartBadge(n){var b=document.getElementById('cart-badge');if(!b)return;n=parseInt(n,10)||0;if(n>0){b.textContent=n>99?'99+':String(n);b.hidden=false;}else{b.hidden=true;}}
  window.setCartBadge=setCartBadge;
  var init=parseInt(window.__cartCount,10);setCartBadge(isNaN(init)?0:init);
  var ab=document.getElementById('addcartBtn');
  if(ab)ab.addEventListener('click',function(){var b=document.getElementById('cart-badge');var cur=b?(parseInt(b.textContent,10)||0):0;setCartBadge(cur+1);});
})();

/* Fade the whole header away after scrolling past the Add-to-cart button */
(function(){
  var hdr=document.querySelector('nav'),atc=document.getElementById('addcartBtn');
  if(!hdr||!atc)return;
  var ticking=false;
  function check(){ticking=false;if(atc.offsetParent===null){hdr.classList.remove('hdr-hidden');return;}var r=atc.getBoundingClientRect();if(r.bottom<70){hdr.classList.add('hdr-hidden');}else{hdr.classList.remove('hdr-hidden');}}
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(check);}}
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll,{passive:true});
  check();
})();
