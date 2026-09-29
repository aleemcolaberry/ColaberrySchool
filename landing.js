/* Colaberry DS landing — GSAP + Lenis choreography and interactions.
   Tiers: FULL (motion OK) · LITE (reduced motion: opacity fades) · STATIC (no gsap/rAF: final states). */
(function () {
  'use strict';
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE = window.matchMedia('(pointer: fine)').matches;

  /* ---------- Toast ---------- */
  var toastEl = document.getElementById('ltoast'), toastT;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 1600);
  }

  /* ---------- Theme ---------- */
  var TKEY = 'cb-landing-theme';
  function theme() { return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(t === 'dark'));
      var ic = b.querySelector('i');
      if (ic) ic.className = t === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    });
    var sw = document.getElementById('themeSwitch');
    if (sw) sw.setAttribute('aria-checked', String(t === 'dark'));
  }
  applyTheme(theme());
  function flipTheme() {
    var t = theme() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(TKEY, t); } catch (e) {}
    applyTheme(t);
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (b) { b.addEventListener('click', flipTheme); });
  var themeSwitch = document.getElementById('themeSwitch');
  if (themeSwitch) themeSwitch.addEventListener('click', flipTheme);

  /* ---------- Nav: scrolled + hide-on-scroll-down ---------- */
  var nav = document.querySelector('.lnav'), lastY = 0;
  function onScroll() {
    var y = window.scrollY;
    if (nav) {
      nav.classList.toggle('is-scrolled', y > 10);
      if (y > lastY + 6 && y > 420 && !document.documentElement.classList.contains('menu-open')) nav.classList.add('is-hid');
      else if (y < lastY - 6 || y <= 420) nav.classList.remove('is-hid');
    }
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (!RM && FINE && window.Lenis && window.gsap) {
    lenis = new Lenis({ lerp: 0.105 });
    lenis.on('scroll', function () { if (window.ScrollTrigger) ScrollTrigger.update(); });
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.documentElement.classList.add('lenis', 'lenis-smooth');
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    if (lenis) { e.preventDefault(); lenis.scrollTo(el, { offset: -70, duration: 1.2 }); }
    setMenu(false);
  });

  /* ---------- Menu overlay ---------- */
  var burger = document.getElementById('burger'), menu = document.getElementById('menu');
  function setMenu(open) {
    if (!menu || !burger) return;
    if (open === menu.classList.contains('is-open')) return;
    menu.classList.toggle('is-open', open);
    burger.classList.toggle('is-x', open);
    burger.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('menu-open', open);
    if (lenis) { open ? lenis.stop() : lenis.start(); }
    if (open && window.gsap && !RM) gsap.fromTo('.menu__links a', { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'power3.out', delay: 0.12, clearProps: 'all' });
  }
  if (burger) burger.addEventListener('click', function () { setMenu(!menu.classList.contains('is-open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Color ramps ---------- */
  var RAMPS = [
    { name: 'Cherry Red', base: '#FB2832', hex: ['#FFF0F1','#FFDBDD','#FFB8BC','#FE8A90','#FD5760','#FB2832','#E5121D','#C20E1E','#9B0E18','#7A1016'] },
    { name: 'Leaf Green', base: '#77BB4A', hex: ['#F1F9EA','#DEF0CC','#C2E3A1','#A2D375','#8AC759','#77BB4A','#5BA63C','#468A2E','#356A24','#2A521E'] },
    { name: 'Berry Blue', base: '#367895', hex: ['#EAF2F6','#CFE0E9','#A6C5D5','#6F9DB6','#4A86A2','#367895','#2E6A86','#265A72','#20485C','#1A3947'] }
  ];
  var rampsRoot = document.getElementById('ramps');
  if (rampsRoot) {
    RAMPS.forEach(function (r) {
      var block = document.createElement('div');
      block.className = 'lr-block';
      block.innerHTML = '<div class="lr-name"><b>' + r.name + '</b><code>' + r.base + '</code></div>';
      var ramp = document.createElement('div');
      ramp.className = 'lr-ramp';
      r.hex.forEach(function (h) {
        var b = document.createElement('button');
        b.className = 'lr-sw'; b.style.background = h;
        b.setAttribute('aria-label', 'Copy ' + h); b.dataset.hex = h;
        ramp.appendChild(b);
      });
      block.appendChild(ramp);
      rampsRoot.appendChild(block);
    });
    rampsRoot.addEventListener('click', function (e) {
      var sw = e.target.closest('.lr-sw');
      if (!sw) return;
      if (navigator.clipboard) navigator.clipboard.writeText(sw.dataset.hex);
      toast('Copied ' + sw.dataset.hex);
    });
  }

  /* ---------- Copy snippets ---------- */
  var SNIPS = {
    prompt: 'Using the Colaberry design system, create a [social post / flyer / slide / one-pager] at [size] for [topic]. Headline: [your headline]. Add a [call-to-action] and the logo. Warm and on-brand, no emoji — give me 3 options.',
    install: '<link rel="stylesheet" href="colaberry/styles.css">\n<scr' + 'ipt src="colaberry/_ds_bundle.js"></scr' + 'ipt>\n/* tokens: var(--brand-accent) · components: window.ColaberryDesignSystem_098454 */'
  };
  document.querySelectorAll('[data-snip]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (navigator.clipboard) navigator.clipboard.writeText(SNIPS[el.dataset.snip] || '');
      toast('Copied to clipboard');
    });
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
  });

  /* ---------- Small interactions ---------- */
  document.querySelectorAll('.r-switch:not(#themeSwitch)').forEach(function (s) {
    s.addEventListener('click', function () { s.setAttribute('aria-checked', String(s.getAttribute('aria-checked') !== 'true')); });
  });
  document.querySelectorAll('.tw-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var aa = document.getElementById('twAa');
      if (aa) aa.style.fontWeight = b.dataset.w;
      document.querySelectorAll('.tw-btn').forEach(function (x) { x.classList.toggle('is-on', x === b); });
    });
  });
  var mplay = document.getElementById('mplay');
  function playMotion() {
    var stage = document.getElementById('mstage');
    if (!stage || !window.gsap) return;
    var chips = stage.querySelectorAll('.mo-chip'), check = stage.querySelector('.mo-check');
    if (RM) { gsap.fromTo([chips, check], { opacity: 0 }, { opacity: 1, stagger: 0.07, duration: 0.35, clearProps: 'opacity' }); return; }
    gsap.timeline()
      .fromTo(chips, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', stagger: 0.09, clearProps: 'all' })
      .fromTo(check, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2.8)', clearProps: 'all' }, '-=0.08');
  }
  if (mplay) mplay.addEventListener('click', playMotion);

  /* ---------- Gallery: drag, progress, arrows ---------- */
  var gal = document.getElementById('gal');
  if (gal) {
    var bar = document.getElementById('galBar');
    function upd() { var m = gal.scrollWidth - gal.clientWidth; if (bar) bar.style.transform = 'scaleX(' + (m > 0 ? gal.scrollLeft / m : 0) + ')'; }
    gal.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', upd);
    upd();
    document.querySelectorAll('[data-gal]').forEach(function (b) {
      b.addEventListener('click', function () { gal.scrollBy({ left: (b.dataset.gal === 'next' ? 1 : -1) * Math.round(gal.clientWidth * 0.72), behavior: RM ? 'auto' : 'smooth' }); });
    });
    if (FINE) {
      var down = false, sx = 0, sl = 0, moved = false;
      gal.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = gal.scrollLeft; gal.classList.add('is-drag'); gal.setPointerCapture(e.pointerId); });
      gal.addEventListener('pointermove', function (e) { if (!down) return; var dx = e.clientX - sx; if (Math.abs(dx) > 5) moved = true; gal.scrollLeft = sl - dx; });
      ['pointerup', 'pointercancel'].forEach(function (ev) { gal.addEventListener(ev, function () { down = false; gal.classList.remove('is-drag'); }); });
      gal.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    }
  }

  /* ---------- Word splitters ---------- */
  function splitWords(el, masked) {
    var spans = [];
    (function proc(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (ch) {
        if (ch.nodeType === 3) {
          var frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(function (t) {
            if (!t) return;
            if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(' ')); return; }
            var s;
            if (masked) {
              s = document.createElement('span'); s.className = 'sw';
              var i = document.createElement('span'); i.className = 'swi'; i.textContent = t;
              s.appendChild(i); spans.push(i);
            } else {
              s = document.createElement('span'); s.className = 'mw'; s.textContent = t; spans.push(s);
            }
            frag.appendChild(s);
          });
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1 && ch.tagName !== 'BR') proc(ch);
      });
    })(el);
    return spans;
  }

  /* ---------- Final-state fallback ---------- */
  function staticFinalize() {
    document.querySelectorAll('.r-prog i').forEach(function (b) { b.style.width = (b.dataset.val || 70) + '%'; });
    document.querySelectorAll('[data-count]').forEach(function (el) { var n = parseFloat(el.dataset.count); el.textContent = (isNaN(n) ? el.dataset.count : n.toLocaleString('en-US')) + (el.dataset.suffix || ''); });
  }

  /* ---------- FULL choreography ---------- */
  function startFull() {
    gsap.registerPlugin(ScrollTrigger);
    var EMPH = 'expo.out';

    gsap.timeline({ defaults: { ease: EMPH } })
      .from('.hero__pill', { y: 20, opacity: 0, duration: 0.7 }, 0.1)
      .from('.hl__i', { yPercent: 114, duration: 1.15, stagger: 0.09 }, 0.2)
      .from('.hero__sub', { y: 24, opacity: 0, duration: 0.8 }, '-=0.6')
      .from('.hero__cta', { y: 24, opacity: 0, duration: 0.8 }, '-=0.62')
      .from('.hero__note', { opacity: 0, duration: 0.7 }, '-=0.5')
      .from('.hero__shape, .hero__hint, .hero__cue', { opacity: 0, duration: 0.8 }, '-=0.4');

    gsap.to('.hero__in', { y: -70, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('#gl', { opacity: 0.22, y: 70, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.utils.toArray('.hero__h1 .hl').forEach(function (l, i) {
      gsap.to(l, { y: -22 * i, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    });

    /* velocity-reactive marquee: skews with scroll speed, settles when you stop */
    var marq = document.querySelector('.marq');
    if (marq) {
      var skewTo = gsap.quickTo(marq, 'skewX', { duration: 0.4, ease: 'power2.out' }), skewT;
      ScrollTrigger.create({ start: 0, end: 'max', onUpdate: function (self) {
        skewTo(gsap.utils.clamp(-5, 5, self.getVelocity() / -300));
        clearTimeout(skewT); skewT = setTimeout(function () { skewTo(0); }, 140);
      } });
    }

    /* pinned token pipeline: horizontal scrub ≥960px, staggered stack below */
    var flowVp = document.querySelector('.fp-vp');
    if (flowVp) {
      var fTrack = flowVp.querySelector('.fp-track'), fFill = document.getElementById('fpFill'), fps = gsap.utils.toArray('.fp');
      if (window.innerWidth >= 960) {
        document.documentElement.classList.add('js-flow');
        var maxX = function () { return Math.max(0, fTrack.scrollWidth - flowVp.clientWidth); };
        var ftl = gsap.timeline({ scrollTrigger: {
          trigger: flowVp, start: 'top top', end: function () { return '+=' + Math.round(maxX() + window.innerHeight * 0.2); },
          pin: true, scrub: 0.65, invalidateOnRefresh: true,
          onUpdate: function (self) { for (var i = 0; i < fps.length; i++) fps[i].classList.toggle('is-on', self.progress >= (i / fps.length) * 0.92); }
        } });
        ftl.to(fTrack, { x: function () { return -maxX(); }, ease: 'none' }, 0);
        if (fFill) ftl.fromTo(fFill, { width: '3%' }, { width: '100%', ease: 'none' }, 0);
      } else {
        fps.forEach(function (c) {
          gsap.from(c, { y: 44, opacity: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 88%', onEnter: function () { c.classList.add('is-on'); } } });
        });
      }
    }

    /* principles: sticky stack — settled cards recede as the next arrives */
    var prs = gsap.utils.toArray('.pr-card');
    prs.forEach(function (c, i) {
      if (i === prs.length - 1) return;
      gsap.to(c, { scale: 0.955, opacity: 0.55, transformOrigin: 'center top', ease: 'none',
        scrollTrigger: { trigger: prs[i + 1], start: 'top 92%', end: 'top 30%', scrub: true } });
    });

    /* generic depth parallax: data-speed <1 lags, >1 leads */
    gsap.utils.toArray('[data-speed]').forEach(function (el) {
      var sp = parseFloat(el.dataset.speed) || 1;
      gsap.fromTo(el, { y: (1 - sp) * -90 }, { y: (1 - sp) * 90, ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    document.querySelectorAll('[data-split]').forEach(function (h) {
      var words = splitWords(h, true);
      gsap.from(words, { yPercent: 112, duration: 0.9, stagger: 0.05, ease: EMPH, scrollTrigger: { trigger: h, start: 'top 86%' } });
    });
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      gsap.from(el, { y: 44, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 87%' } });
    });
    document.querySelectorAll('[data-reveal-group]').forEach(function (g) {
      gsap.from(g.children, { y: 44, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.09, scrollTrigger: { trigger: g, start: 'top 86%' } });
    });

    document.querySelectorAll('[data-count]').forEach(function (el) {
      var end = parseFloat(el.dataset.count), suffix = el.dataset.suffix || '', obj = { v: 0 };
      gsap.to(obj, {
        v: end, duration: 1.5, ease: 'power1.out',
        scrollTrigger: { trigger: el, start: 'top 92%' },
        onUpdate: function () { el.textContent = Math.round(obj.v).toLocaleString('en-US') + suffix; }
      });
    });
    document.querySelectorAll('.r-prog i').forEach(function (b) {
      gsap.to(b, { width: (b.dataset.val || 70) + '%', duration: 1.1, ease: 'power2.out', scrollTrigger: { trigger: b, start: 'top 93%' } });
    });
    document.querySelectorAll('.lr-ramp').forEach(function (r) {
      gsap.from(r.children, { scaleY: 0, transformOrigin: 'bottom', duration: 0.5, ease: 'power2.out', stagger: 0.04, scrollTrigger: { trigger: r, start: 'top 90%' } });
    });

    var mstage = document.getElementById('mstage');
    if (mstage) ScrollTrigger.create({ trigger: mstage, start: 'top 88%', once: true, onEnter: playMotion });

    var gal2 = document.getElementById('gal');
    if (gal2) {
      gsap.from(gal2.children, { x: 90, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.07, scrollTrigger: { trigger: gal2, start: 'top 84%' } });
      gsap.fromTo(gal2, { x: 44 }, { x: -44, ease: 'none', scrollTrigger: { trigger: '#work', start: 'top bottom', end: 'bottom top', scrub: true } });
    }

    gsap.from('.cta__in', { scale: 0.95, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.cta', start: 'top 84%' } });
    gsap.fromTo('.cta__glow', { yPercent: -26, xPercent: -6 }, { yPercent: 26, xPercent: 6, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.from('.foot__in > *', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, scrollTrigger: { trigger: '.foot', start: 'top 90%' } });

    if (FINE) document.querySelectorAll('.mag').forEach(function (el) {
      var qx = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
      var qy = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        qx((e.clientX - r.left - r.width / 2) * 0.2);
        qy((e.clientY - r.top - r.height / 2) * 0.3);
      });
      el.addEventListener('pointerleave', function () { qx(0); qy(0); });
    });
  }

  /* ---------- LITE (reduced motion) ---------- */
  function startLite() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero__in > *', { opacity: 0, duration: 0.6, stagger: 0.07 });
    document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach(function (el) {
      gsap.from(el, { opacity: 0, duration: 0.5, scrollTrigger: { trigger: el, start: 'top 90%' } });
    });
    gsap.utils.toArray('.fp, .pr-card').forEach(function (el) {
      gsap.from(el, { opacity: 0, duration: 0.5, scrollTrigger: { trigger: el, start: 'top 92%' } });
    });
    staticFinalize();
  }

  /* ---------- Boot ---------- */
  var rafOk = false;
  requestAnimationFrame(function () { rafOk = true; });
  setTimeout(function () {
    if (window.gsap && window.ScrollTrigger && rafOk) { RM ? startLite() : startFull(); }
    else staticFinalize();
  }, 250);

  var y = document.getElementById('yr');
  if (y) y.textContent = String(new Date().getFullYear());
})();
