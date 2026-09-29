/* Colaberry Learn — global error safety net, shared inline validation,
   and the confirm dialog (top-most UI layer). Loaded on every page BEFORE
   page scripts so their failures are caught and surfaced, never silent. */
(function () {
  /* ---- 1. Global net: uncaught errors -> friendly, non-blocking message ---- */
  var last = 0;
  function friendly() {
    var now = Date.now();
    if (now - last < 4000) return; /* don't spam on error loops */
    last = now;
    var msg = 'Something went wrong. Your data is safe \u2014 try again, or reload the page.';
    if (window.cbToast) { window.cbToast(msg, { tone: 'error', title: 'Unexpected error' }); return; }
    var b = document.createElement('div');
    b.setAttribute('role', 'alert');
    b.style.cssText = 'position:fixed;left:50%;bottom:20px;transform:translateX(-50%);z-index:400;max-width:calc(100vw - 32px);background:var(--surface-card,#fff);color:var(--text-body,#333);border:1px solid var(--border-default,#ddd);border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.18);padding:12px 18px;font:14px/1.4 var(--font-body,sans-serif)';
    b.textContent = msg;
    (document.body || document.documentElement).appendChild(b);
    setTimeout(function () { b.remove(); }, 6000);
  }
  window.addEventListener('error', friendly);
  window.addEventListener('unhandledrejection', friendly);

  /* ---- 2. Inline field validation (pairs with a toast summary) ---- */
  window.cbEmailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); };
  window.cbPhoneOk = function (v) { return /^[\d\s().+-]{7,20}$/.test(v); };
  window.cbSetFieldError = function (input, msg) {
    if (!input) return;
    var field = input.closest('.field') || input.parentNode;
    var err = field.querySelector('.field__err');
    if (msg) {
      if (!err) {
        err = document.createElement('span');
        err.className = 'field__err';
        err.id = (input.id || 'f' + Math.random().toString(36).slice(2)) + '-err';
        field.appendChild(err);
      }
      err.innerHTML = '<span class="cb-i" aria-hidden="true"><i class="ri-error-warning-line"></i></span> ' + msg;
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', err.id);
    } else {
      if (err) err.remove();
      input.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
    }
  };

  /* ---- 3. Confirm dialog. Top-most layer: its capture-phase Escape wins
     over popover/drawer handlers; outside click = cancel; focus is trapped
     and returned to the invoking element. ---- */
  window.cbConfirm = function (opts, onConfirm) {
    var prev = document.activeElement;
    var wrap = document.createElement('div');
    wrap.className = 'cbdlg';
    wrap.innerHTML =
      '<div class="cbdlg__scrim"></div>' +
      '<div class="cbdlg__card" role="alertdialog" aria-modal="true" aria-labelledby="cbdlgT" aria-describedby="cbdlgM">' +
      '<h3 id="cbdlgT">' + opts.title + '</h3>' +
      '<p id="cbdlgM" class="muted">' + opts.message + '</p>' +
      '<div class="cbdlg__row">' +
      '<button type="button" class="cb-btn cb-btn--outline cb-btn--sm" data-x="cancel">' + (opts.cancelLabel || 'Cancel') + '</button>' +
      '<button type="button" class="cb-btn cb-btn--confirm cb-btn--sm" data-x="ok"' + (opts.danger ? ' style="--_bg:var(--status-danger);--_bg-hover:var(--status-danger);--_bg-press:var(--status-danger)"' : '') + '>' + (opts.confirmLabel || 'Confirm') + '</button>' +
      '</div></div>';
    function close(ok) {
      document.removeEventListener('keydown', onKey, true);
      wrap.remove();
      if (prev && prev.focus) prev.focus();
      if (ok && onConfirm) onConfirm();
    }
    function onKey(e) {
      if (e.key === 'Escape') { e.stopImmediatePropagation(); e.preventDefault(); close(false); return; }
      if (e.key === 'Tab') {
        var f = wrap.querySelectorAll('button'), first = f[0], lastB = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastB.focus(); }
        else if (!e.shiftKey && document.activeElement === lastB) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKey, true);
    wrap.querySelector('.cbdlg__scrim').addEventListener('click', function () { close(false); });
    wrap.querySelector('[data-x="cancel"]').addEventListener('click', function () { close(false); });
    wrap.querySelector('[data-x="ok"]').addEventListener('click', function () { close(true); });
    document.body.appendChild(wrap);
    wrap.querySelector('[data-x="cancel"]').focus();
  };
})();
