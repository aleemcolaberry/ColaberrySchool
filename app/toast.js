/* Colaberry Learn — stacked, theme-aware toasts.
   window.cbToast(message, { tone, title, duration })
   - tone: success | warning | error | info (icon + color defined ONCE below)
   - stacks (never replaces); newest at the bottom, capped at 4
   - auto-dismisses (errors linger longer); hover or focus pauses the timer
   - dismiss button; colors come from status tokens so dark mode just works
   - a11y: role=status (polite) for success/info/warning, role=alert for errors */
(function () {
  var TONES = {
    success: { icon: 'ri-checkbox-circle-line', color: 'var(--status-success)', role: 'status', label: 'Success' },
    info:    { icon: 'ri-information-line',     color: 'var(--status-info)',    role: 'status', label: 'Info' },
    warning: { icon: 'ri-alarm-warning-line',   color: 'var(--status-warning)', role: 'status', label: 'Warning' },
    error:   { icon: 'ri-error-warning-line',   color: 'var(--status-danger)',  role: 'alert',  label: 'Error' }
  };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var host = null;
  function getHost() {
    if (!host) {
      host = document.createElement('div');
      host.className = 'toasts';
      document.body.appendChild(host);
    }
    return host;
  }
  function dismiss(t) {
    if (t._gone) return;
    t._gone = true;
    clearTimeout(t._timer);
    if (reduce) { t.remove(); return; }
    t.classList.add('is-out');
    setTimeout(function () { t.remove(); }, 220);
  }
  function startTimer(t, ms) {
    t._t0 = Date.now(); t._rem = ms;
    t._timer = setTimeout(function () { dismiss(t); }, ms);
  }
  window.cbToast = function (msg, opts) {
    opts = opts || {};
    var tone = TONES[opts.tone] || TONES.info;
    var duration = opts.duration || (opts.tone === 'error' ? 7000 : 4200);
    var h = getHost();
    while (h.children.length >= 4) h.firstChild.remove();
    var t = document.createElement('div');
    t.className = 'toast' + (reduce ? ' no-motion' : '');
    t.setAttribute('role', tone.role);
    t.setAttribute('aria-atomic', 'true');
    t.style.setProperty('--_tone', tone.color);
    t.innerHTML =
      '<span class="cb-i toast__ic" aria-hidden="true"><i class="' + tone.icon + '"></i></span>' +
      '<div class="toast__body">' + (opts.title ? '<b>' + opts.title + '</b>' : '') + '<p>' + msg + '</p></div>' +
      '<button class="toast__x" type="button" aria-label="Dismiss notification"><span class="cb-i"><i class="ri-close-line"></i></span></button>' +
      '<span class="toast__bar" aria-hidden="true" style="animation-duration:' + duration + 'ms"></span>';
    t.querySelector('.toast__x').addEventListener('click', function () { dismiss(t); });
    function pause() {
      if (t._gone || t._paused) return;
      t._paused = true;
      clearTimeout(t._timer);
      t._rem -= Date.now() - t._t0;
      t.classList.add('is-paused');
    }
    function resume() {
      if (t._gone || !t._paused) return;
      t._paused = false;
      t.classList.remove('is-paused');
      startTimer(t, Math.max(t._rem, 600));
    }
    t.addEventListener('mouseenter', pause);
    t.addEventListener('mouseleave', resume);
    t.addEventListener('focusin', pause);
    t.addEventListener('focusout', function (e) { if (!t.contains(e.relatedTarget)) resume(); });
    h.appendChild(t);
    startTimer(t, duration);
    return t;
  };
})();
