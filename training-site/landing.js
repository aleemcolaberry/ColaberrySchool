/* ============================================================
   Colaberry — Flagship landing interactions
   GSAP + ScrollTrigger + Lenis smooth scroll + Three.js hero
   field + custom cursor + magnetic buttons. Progressive: if a
   library is missing or reduced-motion is set, content stays
   visible and the page still works.
   ============================================================ */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch = window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches;
  var hasGSAP = !!window.gsap;
  if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ============================================================
     LENIS smooth scroll
     ============================================================ */
  var lenis = null;
  function initLenis() {
    if (reduce || !window.Lenis) return;
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    document.documentElement.classList.add('lenis');
    if (hasGSAP && window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      requestAnimationFrame(function raf(t) { lenis.raf(t); requestAnimationFrame(raf); });
    }
  }

  /* ============================================================
     CUSTOM CURSOR
     ============================================================ */
  function initCursor() {
    if (touch || reduce || !hasGSAP) return;
    var ring = document.querySelector('.cursor'), dot = document.querySelector('.cursor-dot');
    if (!ring) return;
    var xs = gsap.quickTo(ring, 'x', { duration: .4, ease: 'power3' });
    var ys = gsap.quickTo(ring, 'y', { duration: .4, ease: 'power3' });
    var xd = gsap.quickTo(dot, 'x', { duration: .1, ease: 'power3' });
    var yd = gsap.quickTo(dot, 'y', { duration: .1, ease: 'power3' });
    window.addEventListener('mousemove', function (e) { xs(e.clientX); ys(e.clientY); xd(e.clientX); yd(e.clientY); });
    document.querySelectorAll('a, button, .magnetic').forEach(function (el) {
      el.addEventListener('mouseenter', function () { ring.classList.add('is-hover'); });
      el.addEventListener('mouseleave', function () { ring.classList.remove('is-hover'); });
    });
  }

  /* ============================================================
     MAGNETIC BUTTONS
     ============================================================ */
  function initMagnetic() {
    if (touch || reduce || !hasGSAP) return;
    document.querySelectorAll('.btn-mag').forEach(function (btn) {
      var label = btn.querySelector('span') || btn;
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width / 2;
        var my = e.clientY - r.top - r.height / 2;
        gsap.to(btn, { x: mx * 0.3, y: my * 0.4, duration: .4, ease: 'power3' });
        gsap.to(label, { x: mx * 0.15, y: my * 0.2, duration: .4, ease: 'power3' });
      });
      btn.addEventListener('mouseleave', function () {
        gsap.to(btn, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,0.4)' });
        gsap.to(label, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,0.4)' });
      });
    });
  }

  /* ============================================================
     THREE.JS HERO FIELD — animated point wave
     ============================================================ */
  var fields = [];
  function buildField(canvas, opts) {
    if (!window.THREE || !canvas) return null;
    opts = opts || {};
    var renderer;
    try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); }
    catch (e) { return null; }
    var dpr = Math.min(window.devicePixelRatio || 1, touch ? 1.5 : 2);
    renderer.setPixelRatio(dpr);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.set(0, 0, opts.camZ || 60);

    var gx = touch ? 40 : (opts.gx || 64);
    var gy = touch ? 22 : (opts.gy || 38);
    var sep = opts.sep || 2.0;
    var n = gx * gy;
    var positions = new Float32Array(n * 3);
    var colors = new Float32Array(n * 3);
    var cA = new THREE.Color(0xfb2832); // cherry
    var cB = new THREE.Color(0x367895); // teal/blue
    var cC = new THREE.Color(0xffffff);
    var i = 0;
    for (var ix = 0; ix < gx; ix++) {
      for (var iy = 0; iy < gy; iy++) {
        positions[i * 3] = (ix - gx / 2) * sep;
        positions[i * 3 + 1] = (iy - gy / 2) * sep;
        positions[i * 3 + 2] = 0;
        var t = ix / gx;
        var c = t < 0.5 ? cA.clone().lerp(cC, t * 2 * 0.6) : cC.clone().lerp(cB, (t - 0.5) * 2);
        colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
        i++;
      }
    }
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    var mat = new THREE.PointsMaterial({ size: opts.size || 0.42, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending });
    var pts = new THREE.Points(geo, mat);
    pts.rotation.x = -1.0;
    pts.position.y = -2;
    scene.add(pts);

    var mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    if (!touch) window.addEventListener('mousemove', function (e) {
      mouse.tx = (e.clientX / window.innerWidth - 0.5);
      mouse.ty = (e.clientY / window.innerHeight - 0.5);
    });

    function resize() {
      var w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    var clock = new THREE.Clock();
    function frame() {
      var time = clock.getElapsedTime();
      var pos = geo.attributes.position.array;
      var k = 0;
      for (var ix = 0; ix < gx; ix++) {
        for (var iy = 0; iy < gy; iy++) {
          var x = (ix - gx / 2) * sep, y = (iy - gy / 2) * sep;
          pos[k * 3 + 2] = Math.sin(x * 0.3 + time * 0.9) * 1.6 + Math.cos(y * 0.35 + time * 0.7) * 1.6;
          k++;
        }
      }
      geo.attributes.position.needsUpdate = true;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      pts.rotation.z = mouse.x * 0.3;
      camera.position.x = mouse.x * 12;
      camera.position.y = -mouse.y * 8;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    return { frame: frame, resize: resize, renderOnce: function () { renderer.render(scene, camera); } };
  }

  function initFields() {
    var heroC = document.querySelector('.hero__canvas');
    var ctaC = document.querySelector('.fcta__canvas');
    var f1 = buildField(heroC, { size: 0.5 });
    var f2 = buildField(ctaC, { size: 0.4, gx: 48, gy: 28, camZ: 55 });
    if (f1) fields.push(f1);
    if (f2) fields.push(f2);
    if (reduce) { fields.forEach(function (f) { f.frame(); }); return; }
    function loop() { fields.forEach(function (f) { f.frame(); }); requestAnimationFrame(loop); }
    if (fields.length) loop();
  }

  /* ============================================================
     LOADER → reveal
     ============================================================ */
  function runLoader(done) {
    var loader = document.querySelector('.loader');
    var count = document.querySelector('.loader__count');
    var bar = document.querySelector('.loader__bar i');
    var heroStarted = false, loaderCleared = false;
    function startHero() { if (heroStarted) return; heroStarted = true; done(); }
    function clearLoader() { if (loaderCleared) return; loaderCleared = true; if (loader) { loader.classList.add('is-done'); loader.style.display = 'none'; } }
    function reveal() { clearLoader(); startHero(); }
    // Wall-clock fail-safe: setTimeout uses a different clock than rAF, so this
    // fires even if the GSAP/rAF ticker never advances (background tab, throttle,
    // ticker stall). The page can never stay hidden behind the loader.
    var failsafe = setTimeout(reveal, reduce ? 700 : 3200);

    if (!loader || !hasGSAP) { clearTimeout(failsafe); reveal(); return; }
    var obj = { v: 0 };
    var tl = gsap.timeline({ onComplete: function () {
      clearTimeout(failsafe);
      startHero(); // hero content reveals as the curtain lifts
      gsap.to(loader, { yPercent: -100, duration: 0.9, ease: 'power4.inOut', onComplete: clearLoader });
    }});
    tl.to(obj, { v: 100, duration: reduce ? 0.4 : 1.6, ease: 'power2.inOut', onUpdate: function () {
      var p = Math.round(obj.v);
      if (count) count.textContent = String(p).padStart(3, '0');
      if (bar) bar.style.width = p + '%';
    }});
    tl.to('.loader__brand', { y: -10, opacity: 0.0, duration: 0.4, ease: 'power2.in' }, '-=0.1');
  }

  /* ============================================================
     HERO reveal
     ============================================================ */
  function revealHero() {
    if (!hasGSAP || reduce) return; // reduced-motion: content already visible
    var tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.from('.hero__eyebrow', { y: 20, opacity: 0, duration: 0.6 })
      .from('.hero h1 .hline', { y: 50, opacity: 0, duration: 0.95, stagger: 0.12 }, '-=0.3')
      .from('.hero__sub', { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
      .from('.hero__cta > *', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.5')
      .from('.hero__scroll', { opacity: 0, duration: 0.6 }, '-=0.3');
  }

  /* ============================================================
     NAV behavior
     ============================================================ */
  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var last = 0;
    function onScroll() {
      var y = window.scrollY;
      nav.classList.toggle('solid', y > 40);
      if (y > 400 && y > last) nav.classList.add('hide'); else nav.classList.remove('hide');
      last = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    var burger = document.querySelector('.nav__burger');
    var menu = document.querySelector('.mmenu');
    var close = document.querySelector('.mmenu__close');
    function setMenu(o) { if (menu) menu.classList.toggle('open', o); document.body.style.overflow = o ? 'hidden' : ''; }
    if (burger) burger.addEventListener('click', function () { setMenu(true); });
    if (close) close.addEventListener('click', function () { setMenu(false); });
    if (menu) menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* ============================================================
     SCROLL-DRIVEN: marquee, manifesto, stats, programs, parallax
     ============================================================ */
  function initScroll() {
    if (!hasGSAP || !window.ScrollTrigger) return;

    // Helper: format a stat's final value (used for both the animated count
    // and the reduced-motion / no-animation path).
    function statFinal(el) {
      var target = parseFloat(el.getAttribute('data-to'));
      var pre = el.getAttribute('data-pre') || '';
      var suf = el.getAttribute('data-suf') || '';
      var sep = el.getAttribute('data-sep') === '1';
      var s = sep ? target.toLocaleString('en-US') : String(target);
      el.innerHTML = pre + s + '<span class="u">' + suf + '</span>';
    }

    // REDUCED MOTION: skip all reveal/scrub/pin animations (they would hide or
    // freeze content if the ticker is stalled). Show everything immediately.
    if (reduce) {
      gsap.utils.toArray('.stat2__n').forEach(statFinal);
      return;
    }

    // generic heading reveals
    gsap.utils.toArray('[data-rise]').forEach(function (el) {
      gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' } });
    });

    // text marquees (continuous + scroll velocity)
    gsap.utils.toArray('.marq__track, .lmarq__track').forEach(function (track) {
      var dir = track.classList.contains('lmarq__track') ? 1 : -1;
      var tw = gsap.to(track, { xPercent: dir * -50, repeat: -1, duration: 22, ease: 'none' });
      ScrollTrigger.create({ onUpdate: function (self) {
        tw.timeScale(1 + Math.min(Math.abs(self.getVelocity()) / 400, 4));
      }});
    });

    // manifesto words scrub
    var mwords = gsap.utils.toArray('.manifesto .w');
    if (mwords.length) {
      gsap.to(mwords, {
        color: '#0a0a0c', stagger: 1, ease: 'none',
        scrollTrigger: { trigger: '.manifesto', start: 'top 70%', end: 'bottom 75%', scrub: true }
      });
    }

    // stat counters
    gsap.utils.toArray('.stat2__n').forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-to'));
      var pre = el.getAttribute('data-pre') || '';
      var suf = el.getAttribute('data-suf') || '';
      var sep = el.getAttribute('data-sep') === '1';
      var o = { v: 0 };
      ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: function () {
        gsap.to(o, { v: target, duration: 1.8, ease: 'power2.out', onUpdate: function () {
          var val = Math.round(o.v);
          var s = sep ? val.toLocaleString('en-US') : String(val);
          el.innerHTML = pre + s + '<span class="u">' + suf + '</span>';
        }});
      }});
    });

    // parallax images
    gsap.utils.toArray('.why__media img').forEach(function (img) {
      gsap.fromTo(img, { yPercent: -10, scale: 1.12 }, { yPercent: 10, ease: 'none',
        scrollTrigger: { trigger: img.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    // why text rise
    gsap.utils.toArray('.why__row .why__text').forEach(function (el) {
      gsap.from(el.children, { y: 40, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%' } });
    });

    // programs horizontal pin (desktop only)
    var mm = gsap.matchMedia();
    mm.add('(min-width: 1001px)', function () {
      var track = document.querySelector('.progx__track');
      var pin = document.querySelector('.progx__pin');
      if (!track || !pin) return;
      var amount = function () { return track.scrollWidth - window.innerWidth + 56; };
      gsap.to(track, { x: function () { return -amount(); }, ease: 'none',
        scrollTrigger: { trigger: pin, start: 'top top', end: function () { return '+=' + amount(); },
          pin: true, scrub: 1, invalidateOnRefresh: true } });
    });

    // refresh after images load
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  }

  /* ============================================================
     BOOT
     ============================================================ */
  function boot() {
    initLenis();
    initNav();
    initCursor();
    initMagnetic();
    initFields();
    initScroll();
    revealHero(); // loader removed — hero reveals immediately on load
    // safety: if GSAP missing, ensure hero words visible
    if (!hasGSAP) document.querySelectorAll('.word__in').forEach(function (w) { w.style.transform = 'none'; });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
