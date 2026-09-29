/* ============================================================
   to-top.js — self-contained "back to top" control.
   Drop in on any page:  <script src="to-top.js" defer></script>
   - Injects its own button + styles (uses Colaberry tokens from styles.css).
   - A circular progress ring fills as you scroll, so the control doubles
     as a read-progress indicator.
   - Appears after the first screenful; smooth-scrolls to top on click.
   - Keyboard accessible; respects prefers-reduced-motion.
   Requires styles.css (RemixIcon + design tokens) on the page.
   ============================================================ */
(function () {
  if (document.querySelector('.cb-totop')) return; // guard against double-inject

  var css = ''
    + '.cb-totop{position:fixed;right:clamp(18px,3vw,32px);bottom:clamp(18px,3vw,32px);z-index:1200;'
    + 'width:54px;height:54px;display:grid;place-items:center;border:none;padding:0;cursor:pointer;'
    + 'border-radius:50%;background:var(--surface-card,#fff);color:var(--text-strong,#1a1a1a);'
    + 'box-shadow:0 8px 28px rgba(0,0,0,.16),0 2px 6px rgba(0,0,0,.08);'
    + 'opacity:0;visibility:hidden;transform:translateY(14px) scale(.92);'
    + 'transition:opacity .28s ease,transform .28s cubic-bezier(.16,.84,.44,1),visibility .28s,box-shadow .2s ease;}'
    + '.cb-totop.is-on{opacity:1;visibility:visible;transform:none;}'
    + '.cb-totop:hover{box-shadow:0 12px 34px rgba(0,0,0,.22),0 3px 8px rgba(0,0,0,.10);}'
    + '.cb-totop:hover .cb-totop__arrow{transform:translateY(-2px);color:var(--red-500,#FB2832);}'
    + '.cb-totop:focus-visible{outline:3px solid var(--blue-500,#367895);outline-offset:3px;}'
    + '.cb-totop:active{transform:translateY(1px) scale(.97);}'
    + '.cb-totop__ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg);pointer-events:none;}'
    + '.cb-totop__track{fill:none;stroke:var(--border-default,#e2e2e2);stroke-width:2.5;}'
    + '.cb-totop__prog{fill:none;stroke:var(--red-500,#FB2832);stroke-width:2.5;stroke-linecap:round;'
    + 'stroke-dasharray:131.95;stroke-dashoffset:131.95;transition:stroke-dashoffset .12s linear;}'
    + '.cb-totop__arrow{position:relative;font-size:22px;line-height:1;display:grid;place-items:center;'
    + 'transition:transform .2s ease,color .2s ease;}'
    + '.cb-totop__arrow i{display:block;}'
    + '@media (prefers-reduced-motion: reduce){.cb-totop{transition:opacity .2s ease,visibility .2s ease;transform:none;}'
    + '.cb-totop.is-on{transform:none;}.cb-totop__prog{transition:none;}.cb-totop:hover .cb-totop__arrow{transform:none;}}';

  var style = document.createElement('style');
  style.setAttribute('data-cb-totop', '');
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.className = 'cb-totop';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML =
    '<svg class="cb-totop__ring" viewBox="0 0 54 54" aria-hidden="true">'
    + '<circle class="cb-totop__track" cx="27" cy="27" r="21"/>'
    + '<circle class="cb-totop__prog" cx="27" cy="27" r="21"/></svg>'
    + '<span class="cb-totop__arrow"><i class="ri-arrow-up-line"></i></span>';
  document.body.appendChild(btn);

  var prog = btn.querySelector('.cb-totop__prog');
  var CIRC = 131.95;
  var ticking = false;

  function update() {
    ticking = false;
    var doc = document.documentElement;
    var max = (doc.scrollHeight - window.innerHeight);
    var y = window.scrollY || doc.scrollTop || 0;
    var ratio = max > 0 ? Math.min(1, y / max) : 0;
    prog.style.strokeDashoffset = (CIRC * (1 - ratio)).toFixed(2);
    // reveal after the first screenful
    if (y > window.innerHeight * 0.6) btn.classList.add('is-on');
    else btn.classList.remove('is-on');
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    // move focus to top of document for keyboard users
    var h1 = document.querySelector('h1');
    if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
