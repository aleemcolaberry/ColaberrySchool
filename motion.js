/* ============================================================
   Colaberry — motion.js
   Fail-safe reveal-on-scroll bootstrap for the cb motion layer.

   What it does
   ------------
   1. Adds <html class="cb-js"> so the [data-reveal] CSS arms.
      (Without this, all content stays visible — by design.)
   2. Reveals each [data-reveal] element when it scrolls into view
      by adding .is-in, then unobserves it.
   3. Safety nets: if IntersectionObserver is missing, or anything
      is still hidden after a timeout, everything is revealed.
   4. Re-scans on demand via window.ColaberryMotion.refresh() and
      automatically for nodes added later (lightweight MutationObserver).

   Usage — load ONCE, ideally in <head> (a normal blocking tag is
   fine; it's tiny) so cb-js is set before first paint and there is
   no flash of visible-then-hidden content:
     <script src="motion.js"></script>
   ============================================================ */
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  var d = document, root = d.documentElement;
  if (root.classList.contains('cb-js')) return; // already booted
  root.classList.add('cb-js');

  var REVEAL = '[data-reveal]';
  var io = null;

  function reveal(el) {
    el.classList.add('is-in');
    if (io) io.unobserve(el);
  }
  function revealAll() {
    var els = d.querySelectorAll(REVEAL);
    for (var i = 0; i < els.length; i++) els[i].classList.add('is-in');
  }

  function arm(el) {
    if (el.__cbArmed) return;
    el.__cbArmed = true;
    if (io) io.observe(el);
    else reveal(el); // no observer support → just show it
  }

  function scan() {
    var els = d.querySelectorAll(REVEAL);
    for (var i = 0; i < els.length; i++) arm(els[i]);
  }

  function start() {
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) reveal(entries[i].target);
        }
      }, { rootMargin: '0px 0px 12% 0px', threshold: 0.01 });
    }
    scan();

    // Watch for elements injected after load (SPA views, async content).
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          var added = muts[i].addedNodes;
          for (var j = 0; j < added.length; j++) {
            var n = added[j];
            if (n.nodeType !== 1) continue;
            if (n.matches && n.matches(REVEAL)) arm(n);
            if (n.querySelectorAll) {
              var inner = n.querySelectorAll(REVEAL);
              for (var k = 0; k < inner.length; k++) arm(inner[k]);
            }
          }
        }
      });
      mo.observe(d.body, { childList: true, subtree: true });
    }

    // Ultimate safety net: nothing should ever stay hidden for long.
    setTimeout(revealAll, 2600);
  }

  window.ColaberryMotion = { refresh: scan, revealAll: revealAll };

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start);
  else start();
})();
