/* Colaberry Learn — shared theme layer.
   Load in <head> on every app page. Applies the persisted theme BEFORE
   first paint, swaps -black/-white logo art, and wires any
   [data-theme-toggle] button. The actual theming is done in one place:
   tokens/colors.css via [data-theme="dark"]. */
(function () {
  var root = document.documentElement, KEY = 'cb-theme';
  function stored() { try { return localStorage.getItem(KEY) || 'light'; } catch (e) { return 'light'; } }
  function apply(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    if (!document.body) return;
    document.querySelectorAll('img[data-logo-swap]').forEach(function (img) {
      img.src = img.getAttribute('src').replace(/-(black|white)(\.\w+)$/, '-' + (t === 'dark' ? 'white' : 'black') + '$2');
    });
    document.querySelectorAll('[data-theme-toggle] i').forEach(function (ic) {
      ic.className = t === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    });
    document.querySelectorAll('input[data-theme-radio]').forEach(function (rd) {
      rd.checked = rd.value === t;
    });
  }
  window.cbApplyTheme = apply;
  apply(stored()); /* pre-paint: attribute only (body not parsed yet) */
  document.addEventListener('DOMContentLoaded', function () { apply(stored()); });
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-theme-toggle]') : null;
    if (btn) apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();
