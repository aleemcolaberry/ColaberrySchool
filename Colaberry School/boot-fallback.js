/* ============================================================
   boot-fallback.js — never-blank watchdog for the React pages.

   The home + landing pages mount a React app into #root at runtime
   (in-browser Babel + CDN React/GSAP). If ANY of those fail to load
   or execute — a blocked/slow CDN on a corporate network, a GCP edge
   hiccup, an old cached bundle — #root would otherwise stay empty and
   the visitor sees a blank white page. For a lead-gen site that means
   a lost lead.

   This watchdog polls #root; if the app has not mounted within ~7s it
   injects a styled, on-brand fallback: headline, the free Open House
   CTA, and a phone number — so the page is ALWAYS useful, on any
   browser or network, even when the app itself never boots.

   It uses hard-coded brand values (not CSS tokens) on purpose, so it
   still renders correctly even if the stylesheets failed too.
   ============================================================ */
(function () {
  var MOUNT_GRACE_MS = 7000;   // how long to wait for the app to mount
  var POLL_MS = 400;
  var waited = 0;

  var REGISTER_URL = 'https://form.jotform.com/251193437881463';

  function appMounted() {
    var root = document.getElementById('root');
    return root && root.children.length > 0;
  }

  function revealFallback() {
    var root = document.getElementById('root');
    if (!root || root.children.length > 0) return;

    root.innerHTML = [
      '<div style="min-height:100dvh;min-height:100vh;display:flex;flex-direction:column;',
      'align-items:center;justify-content:center;text-align:center;gap:22px;padding:40px 24px;',
      'font-family:Roboto,Arial,system-ui,sans-serif;color:#1A1A1A;background:#FBFAF8;">',

      '<img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry" ',
      'style="height:34px;margin-bottom:6px" onerror="this.style.display=\'none\'">',

      '<div style="font-family:mono,ui-monospace,Menlo,monospace;font-size:12px;letter-spacing:.12em;',
      'text-transform:uppercase;color:#8A8A8A;">AI Systems Architect Accelerator</div>',

      '<h1 style="font-size:clamp(32px,6vw,54px);line-height:1.04;letter-spacing:-.02em;',
      'font-weight:900;margin:0;max-width:14ch;">From AI curious to <span style="color:#FB2832">AI architect</span></h1>',

      '<p style="font-size:clamp(16px,2.2vw,19px);color:#4A4A4A;max-width:52ch;margin:0;line-height:1.5;">',
      'Learn with Claude, build real systems, and deploy in the real world. ',
      'Join our free Open House to see exactly how it works. Membership is <b>$149/month</b>.</p>',

      '<div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:6px;">',
      '<a href="' + REGISTER_URL + '" style="display:inline-flex;align-items:center;gap:8px;',
      'background:#FB2832;color:#fff;font-weight:700;font-size:16px;text-decoration:none;',
      'padding:15px 26px;border-radius:999px;box-shadow:0 6px 20px rgba(251,40,50,.28);">',
      'Join the free Open House &rarr;</a>',
      '<a href="contact.html" style="display:inline-flex;align-items:center;gap:8px;',
      'background:#fff;color:#1A1A1A;font-weight:700;font-size:16px;text-decoration:none;',
      'padding:15px 26px;border-radius:999px;border:1px solid #E4E1DC;">Contact us</a>',
      '</div>',

      '<div style="display:flex;flex-wrap:wrap;gap:8px 20px;justify-content:center;margin-top:10px;',
      'font-size:14px;color:#6A6A6A;">',
      '<span>5,000+ careers changed since 2012</span><span>&middot;</span>',
      '<span>Texas Workforce Commission approved</span><span>&middot;</span>',
      '<span>Anthropic / Claude Partner</span>',
      '</div>',

      '<nav style="display:flex;flex-wrap:wrap;gap:8px 18px;justify-content:center;margin-top:18px;',
      'font-size:14px;">',
      ['our-story.html:Our Story', 'events.html:Events', 'blog.html:Blog', 'faq.html:FAQ', 'contact.html:Contact']
        .map(function (p) { var s = p.split(':'); return '<a href="' + s[0] + '" style="color:#4A4A4A;text-decoration:none;">' + s[1] + '</a>'; })
        .join(''),
      '</nav>',
      '</div>'
    ].join('');

    // best-effort: mark that the fallback rendered (useful for the dev to spot in analytics)
    try { window.__awFallbackShown = true; } catch (e) {}
  }

  function poll() {
    if (appMounted()) return;            // app booted — nothing to do
    waited += POLL_MS;
    if (waited >= MOUNT_GRACE_MS) { revealFallback(); return; }
    setTimeout(poll, POLL_MS);
  }

  // start after a short grace so we don't race the normal boot
  setTimeout(poll, 1200);
})();
