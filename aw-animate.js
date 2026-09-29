/* ============================================================
   aw-animate.js — drop-in entrance + scroll-reveal engine
   No dependencies. Pairs with aw-animate.css.

   - Reveals [data-rv] elements as they scroll into view (IntersectionObserver).
   - Staggers [data-rv] children inside any [data-rv-group].
   - Plays the hero mask-rise on [data-rv-hero] immediately on load.
   - Watches for nodes injected later (SPA / framework hydration).
   - SAFETY NET: forces everything visible after 2.4s so content is
     NEVER stranded, even if the observer misfires.
   - Respects prefers-reduced-motion (leaves everything visible, no motion).
   ============================================================ */
(function () {
  var docEl = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // With reduced motion we add the class (so CSS neutralizes any transform) but skip the observer.
  docEl.classList.add('aw-anim');
  if (reduce) {
    ready(function () {
      all('[data-rv], [data-rv-hero]').forEach(function (el) { el.classList.add('aw-in'); });
    });
    return;
  }

  function all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('aw-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.02, rootMargin: '0px 0px 10% 0px' }) : null;

  function indexGroup(group) {
    all('[data-rv]', group).forEach(function (el, i) {
      if (el.closest('[data-rv-group]') === group) el.style.setProperty('--rv-i', i % 9);
    });
  }

  function register(el) {
    if (el.__awReg) return;
    el.__awReg = true;
    // hero line spans get a small stagger
    if (el.hasAttribute('data-rv-hero')) {
      all('.home-hero__line > span, .aw-line__word', el).forEach(function (s, i) { s.style.setProperty('--rv-i', i); });
    }
    if (io) io.observe(el); else el.classList.add('aw-in');
  }

  function scan() {
    all('[data-rv-group]').forEach(indexGroup);
    all('[data-rv], [data-rv-hero]').forEach(register);
    // hero (and anything already in the first viewport) reveals on load
    all('[data-rv-hero]').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        requestAnimationFrame(function () { el.classList.add('aw-in'); });
      }
    });
  }

  ready(function () {
    scan();
    // catch framework-injected / hydrated nodes
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function () { scan(); });
      mo.observe(document.body, { childList: true, subtree: true });
    }
    // safety net — never leave content hidden
    setTimeout(function () {
      all('[data-rv], [data-rv-hero]').forEach(function (el) { el.classList.add('aw-in'); });
    }, 2400);
  });
})();
