/* VALLORE — WINNING CONVERSION LAYER v2 (runs after theme.js) */
(function(){
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }

  ready(function(){

    /* ---------- 1. GAMIFIED POP-UP (Grüns-style "try your luck") ---------- */
    var ov=document.createElement('div');
    ov.className='wn-ov';
    var cards='';
    for(var i=0;i<6;i++){ cards+='<button class="wn-card" type="button">?</button>'; }
    ov.innerHTML=''
      +'<div class="wn-modal" role="dialog" aria-label="Welcome offer">'
      +'  <div class="wn-mimg">'
      +'    <img class="wn-photo" src="'+vA('emotional_new.jpg')+'" alt="">'
      +'    <span class="wn-float wn-f1">&#10022;</span><span class="wn-float wn-f2">&#10022;</span><span class="wn-float wn-f3">&#10022;</span>'
      +'  </div>'
      +'  <div class="wn-mbody" id="wnBody">'
      +'    <button class="wn-close" aria-label="Close">&times;</button>'
      +'    <div class="wn-logo">Vallore</div>'
      +'    <h3 class="wn-game-title">Try your luck</h3>'
      +'    <p class="wn-sub">Flip 3 cards to reveal your welcome gift.</p>'
      +'    <div class="wn-cards" id="wnCards">'+cards+'</div>'
      +'    <div class="wn-hint" id="wnHint">0 of 3 flipped</div>'
      +'    <button class="wn-decline" type="button">No thanks, I\'ll pay full price</button>'
      +'  </div>'
      +'</div>';
    document.body.appendChild(ov);
    function closeOv(){ ov.classList.remove('show'); }
    function openOv(){ ov.classList.add('show'); }
    ov.querySelector('.wn-close').addEventListener('click',closeOv);
    ov.querySelector('.wn-decline').addEventListener('click',closeOv);
    ov.addEventListener('click',function(e){ if(e.target===ov) closeOv(); });

    var flips=0, cardsEl=ov.querySelector('#wnCards');
    cardsEl.querySelectorAll('.wn-card').forEach(function(c){
      c.addEventListener('click',function(){
        if(c.classList.contains('flipped')||flips>=3) return;
        c.classList.add('flipped'); c.innerHTML='&#127827;'; flips++;
        var hint=ov.querySelector('#wnHint'); if(hint)hint.textContent=flips+' of 3 flipped';
        if(flips===3){
          setTimeout(function(){ cardsEl.querySelectorAll('.flipped').forEach(function(x){x.classList.add('matched');}); },140);
          setTimeout(showWin,720);
        }
      });
    });
    function showWin(){
      try{ localStorage.setItem('vallore_discount','BALANCE25'); }catch(_){}
      var body=ov.querySelector('#wnBody');
      body.innerHTML=''
        +'<button class="wn-close" aria-label="Close">&times;</button>'
        +'<div class="wn-win">'
        +'  <div class="wn-win-badge">&#9733; You matched &mdash; 25% OFF</div>'
        +'  <h3>Feel like yourself again &mdash; for less.</h3>'
        +'  <p>Drop your email and we\'ll lock in your code.</p>'
        +'  <form class="wn-form" id="wnForm">'
        +'    <input type="email" id="wnEmail" placeholder="Your email address" autocomplete="email" required>'
        +'    <button class="wn-cta" type="submit">Claim my 25% off</button>'
        +'  </form>'
        +'  <div class="wn-fine">Unlocks code <b>BALANCE25</b> &middot; 60-day money-back guarantee</div>'
        +'  <button class="wn-decline" type="button">Maybe later</button>'
        +'</div>';
      body.querySelector('.wn-close').addEventListener('click',closeOv);
      body.querySelector('.wn-decline').addEventListener('click',closeOv);
      body.querySelector('#wnForm').addEventListener('submit',function(e){
        e.preventDefault();
        var em=body.querySelector('#wnEmail');
        if(!em.value||em.value.indexOf('@')<1){ em.focus(); em.style.borderColor='var(--berry)'; return; }
        var win=body.querySelector('.wn-win');
        win.innerHTML=''
          +'<div class="wn-win-badge">You\'re in &#10003;</div>'
          +'<h3>Your code is ready.</h3>'
          +'<div class="wn-code-reveal"><b>BALANCE25</b><span>25% off your first order</span>'
          +'<button class="wn-copy2" type="button" id="wnCopy">Copy</button></div>'
          +'<div class="wn-fine">Applied automatically at checkout. Welcome to Vallore.</div>'
          +'<button class="wn-cta" type="button" id="wnShop" style="margin-top:12px;width:100%">Shop Super Balance &rarr;</button>';
        win.querySelector('#wnCopy').addEventListener('click',function(){ try{navigator.clipboard.writeText('BALANCE25');}catch(_){} this.textContent='Copied ✓'; });
        win.querySelector('#wnShop').addEventListener('click',function(){ closeOv(); var bs=document.getElementById('bundle-selector'); if(bs)bs.scrollIntoView({behavior:'smooth'}); });
      });
    }
    var seen=false; try{ seen=sessionStorage.getItem('wn_popup_seen')==='1'; }catch(_){}
    if(!seen){ setTimeout(function(){ openOv(); try{ sessionStorage.setItem('wn_popup_seen','1'); }catch(_){} },2600); }

    /* ---------- 2. BOLD PAIN BAND ---------- */
    var painHTML=''
      +'<section class="wn-pain"><div class="wrap">'
      +'<div class="wn-peye">If this is you, it\'s not in your head</div>'
      +'<h2>For two weeks a month, you don\'t <em>recognize yourself.</em></h2>'
      +'<p class="wn-plead">Your labs say you\'re &ldquo;fine.&rdquo; You feel anything but. It isn\'t willpower — it\'s three hormones out of sync.</p>'
      +'<div class="wn-pgrid">'
      +'<div class="wn-pitem"><span class="wn-x">&times;</span><p>The <b>2:30 crash</b> hits like a wall — no amount of coffee fixes it.</p></div>'
      +'<div class="wn-pitem"><span class="wn-x">&times;</span><p>You <b>snap at the people you love</b>, then drown in guilt.</p></div>'
      +'<div class="wn-pitem"><span class="wn-x">&times;</span><p>Wired but <b>exhausted</b> — eight hours of sleep and still foggy.</p></div>'
      +'<div class="wn-pitem"><span class="wn-x">&times;</span><p>A <b>cabinet of half-used pills</b> that each promised to be the one.</p></div>'
      +'</div>'
      +'<p class="wn-presign">&ldquo;I figured this was just my life now.&rdquo; <span>&mdash; It isn\'t.</span></p>'
      +'</div></section>';
    /* 2b. COMPETITOR-STYLE TABS (quick facts under the buy box) */
    var tabsHTML=''
      +'<section class="wn-tabs"><div class="wn-acc">'
      +'<div class="wn-ac open"><button class="wn-ac-h" type="button">Why Vallore?<span class="wn-ac-i"></span></button><div class="wn-ac-b"><p class="wn-ac-p">Most supplements fix one thing. Vallore was built to support the whole system behind the two hardest weeks of your month — three hormones working together, in clinically-studied doses, in one strawberry-lemonade ritual you actually look forward to. No caffeine, no jitters, no cabinet of half-used pills.</p></div></div>'
      +'<div class="wn-ac"><button class="wn-ac-h" type="button">Ingredients &amp; Allergies<span class="wn-ac-i"></span></button><div class="wn-ac-b"><ul class="wn-ing-list">'
      +'<li><b>SRI-81™ Shatavari</b><span>300 mg</span></li>'
      +'<li><b>Myo-Inositol</b><span>2,000 mg</span></li>'
      +'<li><b>Rhodiola Rosea</b><span>200 mg</span></li>'
      +'<li><b>Magnesium Malate</b><span>75 mg</span></li>'
      +'<li><b>Theobromine</b><span>25 mg</span></li>'
      +'<li><b>Vitamin C + B6</b><span>120 / 10 mg</span></li>'
      +'</ul><p class="wn-ac-note">Vegan · gluten-free · non-GMO · no added sugar. Made in a cGMP facility. If you\'re pregnant, nursing or on medication, check with your doctor first.</p></div></div>'
      +'<div class="wn-ac"><button class="wn-ac-h" type="button">Science &amp; Certifications<span class="wn-ac-i"></span></button><div class="wn-ac-b"><ul class="wn-tp-benefits">'
      +'<li>Every active dosed to levels used in published research</li><li>3rd-party tested for purity &amp; label accuracy</li>'
      +'<li>Tested for heavy metals, microbials &amp; contaminants</li><li>Made in a US cGMP-certified facility</li>'
      +'</ul></div></div>'
      +'<div class="wn-ac"><button class="wn-ac-h" type="button">Directions<span class="wn-ac-i"></span></button><div class="wn-ac-b"><div class="wn-steps3">'
      +'<div class="wn-s"><div class="wn-sn">1</div><b>Tear</b><p>One strawberry-lemonade stick pack.</p></div>'
      +'<div class="wn-s"><div class="wn-sn">2</div><b>Stir</b><p>Into 8–12 oz of cold water.</p></div>'
      +'<div class="wn-s"><div class="wn-sn">3</div><b>Sip</b><p>Every morning. Give it two weeks.</p></div>'
      +'</div></div></div>'
      +'<div class="wn-ac"><button class="wn-ac-h" type="button">Benefits<span class="wn-ac-i"></span></button><div class="wn-ac-b"><ul class="wn-tp-benefits">'
      +'<li>Supports healthy hormone function*</li><li>Soothes the emotional swings*</li>'
      +'<li>Builds everyday stress resilience*</li><li>Delivers steady, clean energy*</li>'
      +'<li>Supports a smoother, calmer cycle*</li><li>No caffeine · no jitters · no crash</li>'
      +'</ul></div></div>'
      +'</div></section>';
    var prodTop=document.querySelector('.only-product > section#top');
    if(prodTop){
      prodTop.insertAdjacentHTML('afterend', tabsHTML);
      var tabsSec=prodTop.nextElementSibling;
      if(tabsSec) tabsSec.insertAdjacentHTML('afterend', painHTML);
      var tw=document.querySelector('.wn-acc');
      if(tw){
        tw.querySelectorAll('.wn-ac-h').forEach(function(h){
          h.addEventListener('click',function(){ h.parentElement.classList.toggle('open'); });
        });
      }
    }
    /* 2b2. REPLACE PHOTO SLIDES WITH REAL PHOTOS (keep designed slides) + RED/BLUE SWAP */
    (function(){
      var gsl=document.getElementById('gslides'), gth=document.getElementById('gthumbs');
      if(!gsl||!gth) return;
      var SL=[
        {r:vA('r_flat.jpg'), b:vA('b_flat.jpg'), alt:'Vallore SuperBalance pouch and stick packs'},
        {r:vA('r_pour.jpg'), b:vA('b_pour.jpg'), alt:'Vallore SuperBalance in a glass'},
        {r:vA('r_group.jpg'),b:vA('b_group.jpg'),alt:'Vallore SuperBalance — together in balance'}
      ];
      // keep ONLY Flavor / Inside / Facts (delete Why Vallore + Every age); each gets an image-preview thumb
      var keepSel='.fl-slide,.ing-slide,.facts-slide';
      var thumbMap=[['fl-slide',vA('thumb_fl.jpg')],['ing-slide',vA('thumb_ing.jpg')],['facts-slide',vA('thumb_facts.jpg')]];
      // remove the two unwanted designed slides from the DOM entirely
      gsl.querySelectorAll('.why-split,.dec-slide').forEach(function(el){ el.parentNode&&el.parentNode.removeChild(el); });
      var kept=[].slice.call(gsl.querySelectorAll('.gslide')).filter(function(el){return el.matches(keepSel);});
      // rebuild slides: new real photos first, then kept designed slides
      gsl.innerHTML=SL.map(function(s,i){return '<div class="gslide gs-hero'+(i===0?' active':'')+'"><img class="gphoto" data-r="'+s.r+'" data-b="'+s.b+'" src="'+s.r+'" alt="'+s.alt+'"></div>';}).join('');
      kept.forEach(function(el){ el.classList.remove('active'); gsl.appendChild(el); });
      // thumbnails: photo thumbs + IMAGE-PREVIEW thumbs for kept slides (no text tiles)
      var th=SL.map(function(s,i){return '<button class="gthumb'+(i===0?' selected':'')+'" type="button" aria-pressed="'+(i===0)+'" onclick="galShow('+i+')"><img data-r="'+s.r+'" data-b="'+s.b+'" src="'+s.r+'" alt=""></button>';});
      var idx=SL.length;
      kept.forEach(function(el){
        var img=vA('thumb_ing.jpg'); thumbMap.forEach(function(p){ if(el.classList.contains(p[0])) img=p[1]; });
        th.push('<button class="gthumb" type="button" onclick="galShow('+idx+')"><img src="'+img+'" alt=""></button>'); idx++;
      });
      gth.innerHTML=th.join('');
      function swap(blue){
        gsl.querySelectorAll('.gphoto[data-r]').forEach(function(im){var n=blue?im.getAttribute('data-b'):im.getAttribute('data-r');if(n)im.src=n;});
        gth.querySelectorAll('img[data-r]').forEach(function(im){var n=blue?im.getAttribute('data-b'):im.getAttribute('data-r');if(n)im.src=n;});
      }
      document.querySelectorAll('[name="vallore-flavor"]').forEach(function(r){ r.addEventListener('change',function(){ swap(this.value==='Blue Raspberry'); }); });
      var ck=document.querySelector('[name="vallore-flavor"]:checked');
      swap(!!(ck&&ck.value==='Blue Raspberry'));
    })();
    /* 2b3. FLAVOR OPTIONS AS IMAGE CARDS (Grüns-style) */
    (function(){
      var fo=document.querySelector('.flavor-options'); if(!fo) return;
      var map={'Red Strawberry':vA('fc_red.jpg'),'Blue Raspberry':vA('fc_blue.jpg')};
      fo.querySelectorAll('label').forEach(function(l){
        var inp=l.querySelector('input'); var v=inp?inp.value:''; var span=l.querySelector('span'); if(!span)return;
        span.innerHTML='<span class="wn-fimg"><img src="'+(map[v]||'')+'" alt=""></span><span class="wn-fname">'+v+'</span>';
      });
    })();
    /* 2c. STICKY MOBILE ADD-TO-CART */
    (function(){
      var bar=document.createElement('div');
      bar.className='wn-sticky';
      bar.innerHTML='<div class="wn-sk-info"><b>$32.99</b><s>$65.98</s></div><button class="wn-sk-btn" type="button">Add to cart</button>';
      document.body.appendChild(bar);
      bar.querySelector('.wn-sk-btn').addEventListener('click',function(){ if(typeof window.addToCart==='function') window.addToCart(); });
    })();

    /* ---------- 3. GLOWY-FREE BUNDLE RIBBONS ---------- */
    function addRibbons(scope){
      scope.querySelectorAll('.bags button, .once-bags button').forEach(function(b){
        var t=b.textContent.trim().toLowerCase();
        if(b.querySelector('.wn-rib')) return;
        if(t.indexOf('2 pouch')>=0){ b.insertAdjacentHTML('beforeend','<span class="wn-rib pop">Most&nbsp;Popular</span>'); }
        if(t.indexOf('4 pouch')>=0){ b.insertAdjacentHTML('beforeend','<span class="wn-rib val">Best&nbsp;Value</span>'); }
      });
    }
    document.querySelectorAll('.buyopt').forEach(addRibbons);

    /* ---------- 3b. ONE-LINE SCROLLING TICKER ---------- */
    (function(){
      var bar=document.querySelector('.bf-anno'); if(!bar) return;
      var msgs=['BLACK FRIDAY — 25% OFF with code <b>BALANCE25</b>','FREE shipping over $50','60-day money-back guarantee','No caffeine · no jitters','3rd-party tested · made in the USA','Feel like yourself again'];
      var one=msgs.map(function(m){return '<span>'+m+'</span><span class="wn-dot">&#10022;</span>';}).join('');
      bar.classList.add('wn-ticker');
      bar.innerHTML='<div class="wn-ttrack">'+one+one+'</div>';
    })();

    /* ---------- 3c. PRICE ABOVE THE FOLD (mobile head) ---------- */
    (function(){
      var head=document.querySelector('.pdp-mobilehead'); if(!head||head.querySelector('.wn-mh-price')) return;
      var html='<div class="wn-mh-price"><b>$32.99</b> <s>$65.98</s></div>'
        +'<a class="wn-mh-cta" href="#bundle-selector">Choose your bundle &darr;</a>';
      head.insertAdjacentHTML('beforeend',html);
      var cta=head.querySelector('.wn-mh-cta');
      if(cta)cta.addEventListener('click',function(e){e.preventDefault();var b=document.getElementById('bundle-selector');if(b)b.scrollIntoView({behavior:'smooth'});});
    })();

    /* ---------- 4. FOUNDER SACRIFICE / EMOTIONAL DEBT ---------- */
    var fw=document.querySelector('.founder .wrap');
    if(fw){
      fw.innerHTML=''
        +'<span class="wn-founder-tag">Our founder’s story</span>'
        +'<div class="wn-pull">I was 34 the morning I caught my reflection and didn’t recognize the woman looking back. <span>Not older. Just… gone.</span></div>'
        +'<p class="wn-fbody">For two weeks out of every month, I was someone I didn’t choose to be. Flat before noon. Snapping at the people I love most, then lying awake that night drowning in guilt for it. I’d walk into a room and forget why. I started bracing for it like weather — counting the “good” days I had left before I disappeared again.</p>'
        +'<p class="wn-fbody">Every test came back “normal.” My doctor told me I was fine. I had a whole drawer of half-used supplements that each promised to fix one piece of me — and not one of them gave me <b>me</b> back. I started to believe this was just who I was now.</p>'
        +'<p class="wn-fbody">So I stopped hunting for the one magic pill and asked a different question: what if it was never one bad hormone — but three systems that had quietly fallen out of sync? I spent two years with formulators building the one morning ritual I wished I’d had, at the doses the research actually uses.</p>'
        +'<div class="wn-fsacrifice"><span class="wn-si">&#9670;</span><p>An advisor told me to cut the Shatavari dose to protect our margins. I said no. Every active in Vallore is dosed to the <b>levels used in published studies</b> — not sprinkled in for the label. It costs more to make. I’d rather earn your trust than cut a corner you’d never see.</p></div>'
        +'<p class="wn-fbody">The first morning I felt steady straight through the afternoon — no crash, no fog, still myself at 3 PM — I actually cried. That’s the feeling I built Vallore to give you back. Give it a full 60 days. If you don’t feel more like yourself, email me and I’ll refund you — even an empty pouch.</p>'
        +'<p class="sig">— Maya, Founder of Vallore</p>';
    }

    /* ---------- 5. CART (preview-only in artifact) ---------- */
    function openLocal(){
      try{
        var o=document.querySelector('.buyopt.sel')||document.querySelector('.buyopt');
        var sub=!!(o&&o.dataset.opt==='sub');
        var btns=o?[].slice.call(o.querySelectorAll(sub?'.bags button':'.once-bags button')):[];
        var idx=Math.max(0,btns.findIndex(function(b){return b.classList.contains('on');}));
        window.cartIndex=idx;
        var fl=document.querySelector('[name="vallore-flavor"]:checked');
        window.cartFlavor=fl?fl.value:'Red Strawberry';
        var sc=document.getElementById('cd-subscribe'); if(sc)sc.checked=sub;
        if(typeof updateCartPreview==='function')updateCartPreview();
        var d=document.getElementById('cart-drawer'); if(d&&d.showModal){d.showModal();document.body.style.overflow='hidden';}
        if(typeof startReserve==='function')startReserve();
      }catch(e){}
    }
    /* LIVE = real Shopify storefront (window.Shopify is injected by the theme). In the artifact it's undefined → stay preview-only. */
    var WN_LIVE = (typeof window.Shopify!=='undefined' && !!window.Shopify);
    if(!WN_LIVE){
      window.addToCart=openLocal; window.openCartDrawer=openLocal; window.openRealCart=openLocal;
      var cb=document.querySelector('.cd-checkout'); if(cb)cb.onclick=function(){var n=document.getElementById('cd-notice');if(n)n.hidden=false;};
    }
    /* on a live store, keep theme.js's real addToCart/openRealCart and send checkout to Shopify */

    /* ---------- 6. GRÜNS-STYLE: SIMPLIFY + CLEAN TRUST BADGES + OPTION PERKS ---------- */
    (function(){
      var box=document.querySelector('.buybox'); if(!box) return;
      // remove the redundant "mood, energy" paragraph
      box.querySelectorAll('p').forEach(function(p){
        if(/mood, energy/i.test(p.textContent) && p.textContent.length<140) p.remove();
      });
      var SEAL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z"/><path d="M9 12l2 2 4-4.5"/></svg>';
      var FLASK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v5.5L5.5 17A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 8.5V3"/><path d="M8 14h8"/></svg>';
      var LEAF='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14-.6 0-1.4-.2-.5-1z"/><path d="M9 15c2-2 4-3 7-4"/></svg>';
      if(!box.querySelector('.wn-tbadges')){
        var badges=document.createElement('div');
        badges.className='wn-tbadges';
        badges.innerHTML=''
          +'<div class="wn-tb"><span class="wn-tbi">'+SEAL+'</span><small>60-Day<br>Money-Back</small></div>'
          +'<div class="wn-tb"><span class="wn-tbi">'+FLASK+'</span><small>Clinically &amp;<br>3rd-party tested</small></div>'
          +'<div class="wn-tb"><span class="wn-tbi">'+LEAF+'</span><small>No caffeine<br>No jitters</small></div>';
        // place UNDER the add-to-cart button (Grüns-style), after pay badges if present
        var anchor=box.querySelector('.paybadges')||document.getElementById('vallore-atc-form')||box.querySelector('#addcartBtn');
        if(anchor&&anchor.parentNode){ anchor.parentNode.insertBefore(badges, anchor.nextSibling); }
        else { var opts=box.querySelector('.buyopts'); if(opts)opts.parentNode.insertBefore(badges,opts); }
      }
      // perks lists (sub = what you GET, once = what you MISS)
      var sub=box.querySelector('.buyopt[data-opt="sub"]');
      if(sub && !sub.querySelector('.wn-perks')){
        sub.insertAdjacentHTML('beforeend','<ul class="wn-perks"><li>Free shipping, always</li><li>Save 20% on every order</li><li>Skip, swap or cancel anytime</li><li>60-day money-back guarantee</li></ul>');
      }
      var once=box.querySelector('.buyopt[data-opt="once"]');
      if(once && !once.querySelector('.wn-perks')){
        once.insertAdjacentHTML('beforeend','<ul class="wn-perks wn-off"><li class="yes">No commitment — one-time only</li><li>No 20% subscriber savings</li><li>Free shipping only over $50</li><li>No skip, swap or pause perks</li></ul>');
        var onceTop=once.querySelector('.top');
        if(onceTop && !once.querySelector('.wn-oradio')) onceTop.insertAdjacentHTML('afterbegin','<span class="wn-oradio"></span>');
      }
      // feeling + identity in the benefit checks
      var bl=box.querySelector('.benefit-bullets');
      if(bl){ bl.innerHTML=''
        +'<li>Feel like yourself again — steady, the whole month</li>'
        +'<li>Calm, clean energy that outlasts the 3 PM crash</li>'
        +'<li>The two weeks you brace for, finally quiet</li>'
        +'<li>One ritual you actually look forward to</li>'; }
    })();

    /* ---------- 7. SUBSCRIBE HEADLINE BANNER (Grüns "MOST POPULAR") ---------- */
    (function(){
      var sub=document.querySelector('.buyopt.sub-card'); if(!sub||sub.querySelector('.wn-subbanner'))return;
      sub.insertAdjacentHTML('afterbegin','<div class="wn-subbanner">MOST POPULAR · EXCLUSIVE OFFER + FREE SHIPPING</div>');
      sub.classList.add('wn-has-banner');
    })();

    /* ---------- 8. "GET 25% OFF" FLOATING SIDE TAB → opens the pop-up ---------- */
    (function(){
      var tab=document.createElement('button');
      tab.type='button'; tab.className='wn-sidetab'; tab.textContent='Get 25% Off';
      tab.addEventListener('click',function(){ openOv(); });
      document.body.appendChild(tab);
    })();

    /* ---------- 9. GALLERY TRUST STRIP (Grüns: View Nutrition Label + Tested by Labs) ---------- */
    (function(){
      var gw=document.querySelector('.gthumb-wrap')||document.getElementById('gthumbs'); if(!gw)return;
      if(document.querySelector('.wn-gtrust'))return;
      var html=''
        +'<div class="wn-gtrust">'
        +'  <button class="wn-vnl" type="button">'
        +'    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>'
        +'    View Supplement Facts</button>'
        +'  <div class="wn-tested"><span class="wn-tcheck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>'
        +'    <div><b>3rd-party tested</b><small>26 substances verified for purity &amp; label accuracy</small></div></div>'
        +'</div>';
      gw.insertAdjacentHTML('afterend', html);
      var vnl=document.querySelector('.wn-vnl');
      if(vnl)vnl.addEventListener('click',function(){
        var fs=document.querySelectorAll('#gthumbs .gthumb');
        if(fs.length){ fs[fs.length-1].click(); var g=document.querySelector('.gallery'); if(g)g.scrollIntoView({behavior:'smooth',block:'center'}); }
      });
    })();

    /* ---------- 10. GRÜNS-STYLE CONTENT SECTIONS ---------- */
    (function(){
      if(document.querySelector('.wn-gsec'))return;
      /* 10a. SPLIT: modern life leaves hormones out of sync (stats + lifestyle photo) */
      var splitHTML=''
        +'<section class="wn-gsec wn-split"><div class="wrap"><div class="wn-split-in">'
        +'<div class="wn-split-copy">'
        +'<p class="wn-geye">The problem</p>'
        +'<h2 class="wn-gh">Modern life leaves<br>women <em>out of balance.</em></h2>'
        +'<p class="wn-gsub">Vallore is the daily ritual built to bring three key hormones back into sync.</p>'
        +'<div class="wn-splitstats">'
        +'<div><div class="wn-statn">80%</div><p>of women say the two weeks before their period disrupt daily life.<sup>1</sup></p></div>'
        +'<div><div class="wn-statn">61%</div><p>deal with low energy, mood swings or brain fog they can’t explain.<sup>2</sup></p></div>'
        +'</div>'
        +'<a class="wn-gcta" href="#bundle-selector">Save 25% + Free Shipping</a>'
        +'<p class="wn-gfine"><sup>1,2</sup> Illustrative — replace with your cited sources.</p>'
        +'</div>'
        +'<div class="wn-split-img"><img src="'+vA('handled_new.jpg')+'" alt="A woman feeling like herself again with Vallore"></div>'
        +'</div></div></section>';
      /* 10b. POST-PURCHASE SURVEY STATS + QUALITY YOU CAN TRUST */
      var surveyHTML=''
        +'<section class="wn-gsec wn-survey"><div class="wrap">'
        +'<h2 class="wn-gh wn-gh-c">Simple, steady, proven</h2>'
        +'<p class="wn-gsub wn-gsub-c">We wanted to know what happens after the honeymoon. Here’s what women reported after 3 months of Vallore.</p>'
        +'<div class="wn-surveygrid">'
        +'<div class="wn-sv"><div class="wn-statn">92%</div><p>felt steadier through the two weeks they used to dread.*</p></div>'
        +'<div class="wn-sv"><div class="wn-statn">88%</div><p>say their energy no longer crashes in the afternoon.*</p></div>'
        +'<div class="wn-sv"><div class="wn-statn">90%</div><p>look forward to their morning ritual.*</p></div>'
        +'<div class="wn-sv"><div class="wn-statn">94%</div><p>plan to keep Vallore as part of their routine.*</p></div>'
        +'</div>'
        +'<p class="wn-svnote">*In a post-purchase survey of Vallore customers. Illustrative — replace with your own figures.</p>'
        +'<div class="wn-qdiv"></div>'
        +'<h3 class="wn-qh">Quality you can trust</h3>'
        +'<p class="wn-gsub wn-gsub-c">Every batch is 3rd-party tested so label claims are accurate and it passes tests for contaminants including:</p>'
        +'<div class="wn-qgrid">'
        +'<div class="wn-qitem"><span class="wn-qx">&#10003;</span>Heavy metals</div>'
        +'<div class="wn-qitem"><span class="wn-qx">&#10003;</span>Pesticides</div>'
        +'<div class="wn-qitem"><span class="wn-qx">&#10003;</span>Microbial contaminants</div>'
        +'<div class="wn-qitem"><span class="wn-qx">&#10003;</span>Label-claim accuracy</div>'
        +'</div></div></section>';
      /* 10c. US VS THEM */
      var vsHTML=''
        +'<section class="wn-gsec wn-vs"><div class="wrap">'
        +'<h2 class="wn-gh wn-gh-c">Us vs. the cabinet of pills</h2>'
        +'<p class="wn-gsub wn-gsub-c">Not overhyped or overpriced. One ritual that treats the whole system.</p>'
        +'<div class="wn-vtable">'
        +'<div class="wn-vrow wn-vhead"><span></span><span class="wn-vus">Vallore</span><span>Random pills</span><span>Doing nothing</span></div>'
        +'<div class="wn-vrow"><span>Supports whole hormone system</span><span class="wn-vus">&#10003;</span><span class="wn-vno">&times;</span><span class="wn-vno">&times;</span></div>'
        +'<div class="wn-vrow"><span>Clinically-studied doses</span><span class="wn-vus">&#10003;</span><span class="wn-vno">&times;</span><span class="wn-vno">&times;</span></div>'
        +'<div class="wn-vrow"><span>No caffeine · no crash</span><span class="wn-vus">&#10003;</span><span class="wn-vno">?</span><span class="wn-vno">&times;</span></div>'
        +'<div class="wn-vrow"><span>One simple daily ritual</span><span class="wn-vus">&#10003;</span><span class="wn-vno">&times;</span><span class="wn-vno">&times;</span></div>'
        +'<div class="wn-vrow"><span>60-day money-back</span><span class="wn-vus">&#10003;</span><span class="wn-vno">&times;</span><span class="wn-vno">&times;</span></div>'
        +'</div></div></section>';
      /* 10d. REVIEWS with category tabs (Grüns-style) */
      var R={
        all:[
          {n:'Rachel M.',t:'Verified buyer',r:'By week three my energy stopped crashing at 3pm — I actually feel steady now.',c:['Energy']},
          {n:'Dani P.',t:'Verified buyer',r:'The two weeks before my period used to flatten me. This is the first thing that’s made them feel… normal.',c:['Cycle']},
          {n:'Sofia R.',t:'Verified buyer',r:'Tastes like strawberry lemonade, not medicine. I actually look forward to it every morning.',c:['Taste']},
          {n:'Megan T.',t:'Verified buyer',r:'I was skeptical about one more supplement, but my cabinet of half-used bottles is finally in the trash.',c:['Value']},
          {n:'Priya K.',t:'Verified buyer',r:'No jitters, no crash — just calm, clean focus. I canceled my afternoon coffee.',c:['Energy']},
          {n:'Jordan L.',t:'Verified buyer',r:'Mixes clear in cold water, no clumps, no chalk. Easy to keep up with every day.',c:['Ease']},
          {n:'Amara W.',t:'Verified buyer',r:'My mood swings softened by the second cycle. My husband noticed before I did.',c:['Cycle']},
          {n:'Christine H.',t:'Verified buyer',r:'Felt like myself again — steadier, less on-edge. Worth every penny of the subscription.',c:['Value']}
        ]
      };
      var cats=['All','Energy','Cycle','Taste','Value','Ease'];
      function stars(){return '<span class="wn-rstars">★★★★★</span>';}
      function card(x){return '<div class="wn-rcard">'+stars()+'<p class="wn-rtext">“'+x.r+'”</p><div class="wn-rwho"><span class="wn-ravt">'+x.n.charAt(0)+'</span><div><b>'+x.n+'</b><small>'+x.t+'</small></div></div></div>';}
      var tabsHtml=cats.map(function(c,i){return '<button class="wn-rtab'+(i===0?' on':'')+'" type="button" data-cat="'+c+'">'+c+'</button>';}).join('');
      var cardsHtml=R.all.map(card).join('');
      var revHTML=''
        +'<section class="wn-gsec wn-reviews2"><div class="wrap">'
        +'<div class="wn-rhead"><span class="wn-rbig">4.8</span><span class="wn-rbigstars">★★★★★</span><span class="wn-rcount">1,200+ verified reviews</span></div>'
        +'<h2 class="wn-gh wn-gh-c">Join 1,200+ women who feel like themselves again</h2>'
        +'<div class="wn-rtabs">'+tabsHtml+'</div>'
        +'<div class="wn-rgrid" id="wnRgrid">'+cardsHtml+'</div>'
        +'</div></section>';
      var anchor=document.querySelector('.founder')||document.querySelector('.final');
      var blockHTML=splitHTML+surveyHTML+vsHTML+revHTML;
      if(anchor){ anchor.insertAdjacentHTML('beforebegin', blockHTML); }
      else { document.querySelector('.only-product').insertAdjacentHTML('beforeend', blockHTML); }
      /* wire review tabs */
      var grid=document.getElementById('wnRgrid');
      document.querySelectorAll('.wn-rtab').forEach(function(b){
        b.addEventListener('click',function(){
          document.querySelectorAll('.wn-rtab').forEach(function(x){x.classList.remove('on');});
          b.classList.add('on');
          var cat=b.getAttribute('data-cat');
          var list=(cat==='All')?R.all:R.all.filter(function(x){return x.c.indexOf(cat)>=0;});
          grid.innerHTML=list.map(card).join('');
        });
      });
    })();

    /* ---------- 11. GRÜNS SECTION ORDER + REMOVE LEGACY NOISE ---------- */
    (function(){
      var par=document.querySelector('.only-product'); if(!par||par.getAttribute('data-wn-ordered'))return;
      var sections=[].slice.call(par.children).filter(function(c){return c.tagName==='SECTION';});
      function byText(re){ return sections.find(function(s){return re.test(s.textContent||'');}); }
      var faq=byText(/Questions,\s*answered/i);
      // target Grüns order (only elements that exist are used)
      var order=[
        document.getElementById('top'),
        par.querySelector('.wn-tabs'),
        par.querySelector('.wn-pain'),
        par.querySelector('.wn-split'),
        par.querySelector('.wn-survey'),
        par.querySelector('.wn-reviews2'),
        par.querySelector('.wn-vs'),
        par.querySelector('section.guar'),
        faq,
        par.querySelector('.founder'),
        par.querySelector('.final')
      ].filter(Boolean);
      var keep=order.slice();
      // hide every other direct child (legacy marketing noise, clinical doses, supply guide, duplicate reviews, marquee)
      [].slice.call(par.children).forEach(function(c){
        if(keep.indexOf(c)>=0)return;
        if(/cart|drawer|cd-/i.test((c.id||'')+' '+(c.className||'')))return; // leave cart utility nodes
        c.style.display='none';
      });
      // re-append kept sections in Grüns order
      order.forEach(function(el){ par.appendChild(el); });
      par.setAttribute('data-wn-ordered','1');
    })();

    /* ---------- 12. GRÜNS-STYLE HEADER: hamburger menu ---------- */
    (function(){
      var row=document.querySelector('nav .navrow'); if(!row||row.querySelector('.wn-burger'))return;
      var navEl=document.querySelector('nav');
      var cart=row.querySelector('.cart-btn');
      var b=document.createElement('button');
      b.type='button'; b.className='wn-burger'; b.setAttribute('aria-label','Menu');
      b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
      if(cart&&cart.parentNode){ cart.parentNode.insertBefore(b, cart.nextSibling); } else { row.appendChild(b); }
      b.addEventListener('click',function(e){ e.stopPropagation(); navEl.classList.toggle('wn-nav-open'); });
      document.addEventListener('click',function(){ navEl.classList.remove('wn-nav-open'); });
      var nl=row.querySelector('.navlinks'); if(nl)nl.addEventListener('click',function(){ navEl.classList.remove('wn-nav-open'); });
    })();

    /* ---------- 13. CART DRAWER — Grüns-exact layout (brand colors, price hooks preserved) ---------- */
    (function(){
      var dr=document.getElementById('cart-drawer'); if(!dr||dr.getAttribute('data-wn-cart'))return;
      dr.setAttribute('data-wn-cart','1');
      var content=dr.querySelector('.cd-content'), footer=dr.querySelector('.cd-footer');
      var CHK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
      var TAG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 12 22l-8-8V4h10l6.6 6.6a2 2 0 0 1 0 2.8z"/><circle cx="8.5" cy="8.5" r="1.4" fill="currentColor"/></svg>';
      /* hide elements Grüns' cart doesn't show */
      ['.cd-shipbar','.cd-reserve','.cd-trust-block','.cd-coupon','.cd-coupon-msg','.cd-save-banner','.cd-continue'].forEach(function(s){var el=dr.querySelector(s);if(el)el.style.display='none';});

      /* 1) FREE-SHIPPING block to top of content */
      var ship=dr.querySelector('.cd-ship');
      if(ship&&content){ content.insertBefore(ship, content.firstChild); ship.classList.add('cd-fsblock'); }
      /* 2) discount auto-applied banner (solid) right after it */
      if(ship&&!dr.querySelector('.cd-autodisc')){
        ship.insertAdjacentHTML('afterend','<div class="cd-autodisc">Limited-time discount auto-applied</div>');
      }
      /* 3) ITEM: label + remove-x + saving pill + qty stepper + code pill */
      var item=dr.querySelector('.cd-item');
      if(item&&!item.getAttribute('data-wn')){
        item.setAttribute('data-wn','1');
        var lab=document.createElement('div'); lab.className='cd-item-label'; lab.id='cd-item-label'; lab.textContent='Delivered every 3 weeks';
        item.parentNode.insertBefore(lab,item);
        item.insertAdjacentHTML('beforeend','<button class="cd-item-x" type="button" aria-label="Remove">&times;</button>');
        var body=item.querySelector('.cd-item-body');
        if(body){
          body.insertAdjacentHTML('beforeend',
            '<span class="cd-savepill">'+TAG+' Saving with subscription</span>'
           +'<div class="cd-item-ctl"><div class="cd-qty"><button type="button" aria-label="Decrease">&minus;</button><span>1</span><button type="button" aria-label="Increase">+</button></div>'
           +'<span class="cd-codepill">'+TAG+' BALANCE25</span></div>');
        }
      }
      /* 4) UPSELL → compact "Most popular" promo box with perks (hide toggle/desc/plan) */
      var up=dr.querySelector('.cd-upsell');
      if(up){
        ['.cd-tog','.cd-sub-desc','.cd-plan'].forEach(function(s){var el=up.querySelector(s);if(el)el.style.display='none';});
        var slab=up.querySelector('.cd-sub-label'); if(slab)slab.textContent='Subscribe & save an extra 20%';
        if(!up.querySelector('.cd-mp')) up.insertAdjacentHTML('afterbegin','<span class="cd-mp">Most popular</span>');
        if(!up.querySelector('.cd-perks')){
          var sr=up.querySelector('.cd-sub-row');
          (sr||up).insertAdjacentHTML('afterend','<ul class="cd-perks">'
            +'<li>'+CHK+'Instantly save more off your first order</li>'
            +'<li>'+CHK+'Our most flexible plan — skip or cancel anytime</li>'
            +'<li>'+CHK+'Backed by our 60-day guarantee</li>'
          +'</ul>');
        }
      }
      /* 5) SUBTOTAL pill */
      var sub=dr.querySelector('.cd-subtotal');
      if(sub&&!sub.querySelector('.cd-discpill')){
        var f=sub.querySelector('span'); if(f) f.insertAdjacentHTML('afterend','<span class="cd-discpill">25% Off</span>');
      }
      /* 6) SECURE CHECKOUT button (lock, no total — matches Grüns) */
      var chk=dr.querySelector('.cd-checkout');
      if(chk&&!chk.querySelector('.cd-lock2')){
        var tot=chk.querySelector('#cd-checkout-total'); if(tot)tot.style.display='none';
        chk.innerHTML='<span class="cd-lock2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span> Secure checkout';
        if(tot)chk.appendChild(tot);
        /* on a live Shopify store, go straight to checkout; in the artifact keep the preview notice */
        if(WN_LIVE){ chk.removeAttribute('onclick'); chk.onclick=function(){ window.location.href='/checkout'; }; }
      }
      /* 7) TRUST ROW (3 cols, below the button) */
      var tl=dr.querySelector('.cd-trustline');
      if(tl&&!tl.classList.contains('cd-trow')){
        tl.classList.add('cd-trow');
        tl.innerHTML=''
          +'<div class="cd-trc"><span class="cd-trc-ic">&#9733;</span><b>4.8 stars</b><small>1,200+ reviews</small></div>'
          +'<div class="cd-trc"><span class="cd-trc-ic">&#8635;</span><b>Cancel anytime</b><small>Skip or pause free</small></div>'
          +'<div class="cd-trc"><span class="cd-trc-ic">&#36;</span><b>60-day</b><small>Money-back</small></div>';
      }
      /* order footer: subtotal → checkout → trust row */
      var notice=dr.querySelector('#cd-notice');
      [sub,chk,tl,notice].forEach(function(el){ if(el&&footer)footer.appendChild(el); });

      /* auto-applied banner disappears 4s after the cart opens */
      function armAutoDisc(){
        var ad=dr.querySelector('.cd-autodisc'); if(!ad)return;
        ad.classList.remove('cd-ad-hide');
        if(ad._t)clearTimeout(ad._t);
        ad._t=setTimeout(function(){ ad.classList.add('cd-ad-hide'); },4000);
      }
      ['addToCart','openCartDrawer','openRealCart'].forEach(function(fn){
        var prev=window[fn];
        if(typeof prev==='function'){ window[fn]=function(){ var r=prev.apply(this,arguments); try{armAutoDisc();}catch(e){} return r; }; }
      });

      /* free-shipping unlocked state (honest: only when actually ≥ threshold) */
      function syncShip(){
        var fill=document.getElementById('cd-ship-fill'), msg=document.getElementById('cd-ship-msg'), bar=dr.querySelector('.cd-ship');
        if(!fill||!bar)return;
        var w=parseFloat((fill.style.width||'0').replace('%',''));
        if(w>=100){ bar.classList.add('cd-unlocked'); if(msg)msg.innerHTML='Congrats! You’ve unlocked <b>FREE SHIPPING!</b>'; }
        else { bar.classList.remove('cd-unlocked'); }
      }
      if(typeof window.updateCartPreview==='function'){
        var _ucp=window.updateCartPreview;
        window.updateCartPreview=function(){ var r=_ucp.apply(this,arguments); try{syncShip();}catch(e){} return r; };
      }
      syncShip();
    })();

  });
})();
