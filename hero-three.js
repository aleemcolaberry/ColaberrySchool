/* Colaberry DS landing — Three.js constellation hero.
   Connected data web: nodes + proximity lines + cherry cursor threads + trailing glow.
   Formations morph: scatter → wave → chart → globe. Pointer gathers, click ripples + reshapes.
   The render loop ALWAYS runs; reduced motion only disables autonomous movement
   (drift, jitter, auto-morph) — pointer and click response are user-initiated. */
(function () {
  'use strict';
  var canvas = document.getElementById('gl');
  if (!canvas) return;
  if (!window.THREE) { document.documentElement.classList.add('no-gl'); return; }
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var AUTO = !RM;
  var renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' }); }
  catch (e) { document.documentElement.classList.add('no-gl'); return; }
  renderer.setClearColor(0x000000, 0);

  var hero = canvas.closest('.hero') || canvas.parentElement;
  var small = window.innerWidth < 760;
  var N = small ? 140 : 240;
  var FOV = 42, CAMZ = 30;
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 120);
  camera.position.z = CAMZ;
  var group = new THREE.Group();
  group.position.z = -1;
  scene.add(group);

  function mkTex(px, stops) {
    var c = document.createElement('canvas'); c.width = c.height = px;
    var g = c.getContext('2d');
    var gr = g.createRadialGradient(px/2, px/2, 0, px/2, px/2, px/2);
    stops.forEach(function (s) { gr.addColorStop(s[0], 'rgba(255,255,255,' + s[1] + ')'); });
    g.fillStyle = gr; g.fillRect(0, 0, px, px);
    return new THREE.CanvasTexture(c);
  }
  var dotTex = mkTex(64, [[0, 1], [.3, 1], [.62, .55], [1, 0]]);
  var glowTex = mkTex(128, [[0, .9], [.3, .4], [1, 0]]);

  /* ---------- formation targets ---------- */
  function gauss() { var u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(6.2832 * v); }
  function mkScatter() { var a = new Float32Array(N * 3); for (var i = 0; i < N; i++) { a[i*3] = gauss() * 6.8; a[i*3+1] = gauss() * 3.7; a[i*3+2] = Math.max(-5, Math.min(5, gauss() * 2.8)); } return a; }
  function mkWave() {
    var a = new Float32Array(N * 3), W = Math.round(Math.sqrt(N * 2.9)), D = Math.ceil(N / W);
    for (var i = 0; i < N; i++) {
      var c = i % W, r = (i / W) | 0;
      var x = (c / (W - 1) - .5) * 34, z = (r / Math.max(D - 1, 1) - .5) * 13;
      a[i*3] = x; a[i*3+1] = Math.sin(x * .42) * 1.8 + Math.cos(z * .6 + x * .24) * 1.2; a[i*3+2] = z;
    } return a;
  }
  function mkBars() {
    var CX = 14, CZ = 5, a = new Float32Array(N * 3), H = [];
    for (var c = 0; c < CX * CZ; c++) { var ix = c % CX, iz = (c / CX) | 0; H[c] = 1.4 + (Math.sin(ix * .8 + 1) + Math.cos(iz * 1.15 + .5) + 2) / 4 * 7.2; }
    for (var i = 0; i < N; i++) {
      var k = i % (CX * CZ), jx = k % CX, jz = (k / CX) | 0, lvl = (i / (CX * CZ)) | 0;
      a[i*3] = (jx / (CX - 1) - .5) * 25 + (Math.random() - .5) * .3;
      a[i*3+1] = -5 + (lvl / Math.max(1, Math.ceil(N / (CX * CZ)) - 1)) * H[k];
      a[i*3+2] = (jz / (CZ - 1) - .5) * 9 + (Math.random() - .5) * .3;
    } return a;
  }
  function mkGlobe() {
    var a = new Float32Array(N * 3), GA = Math.PI * (3 - Math.sqrt(5)), R = 8.6;
    for (var i = 0; i < N; i++) {
      var y = 1 - (i / (N - 1)) * 2, rad = Math.sqrt(Math.max(0, 1 - y * y)), th = GA * i;
      a[i*3] = Math.cos(th) * rad * R; a[i*3+1] = y * R * .94; a[i*3+2] = Math.sin(th) * rad * R;
    } return a;
  }
  var TARGETS = [mkScatter(), mkWave(), mkBars(), mkGlobe()];
  var NAMES = ['scatter field', 'signal wave', 'the chart', 'the globe'];
  var LINKD = [2.6, 2.4, 2.6, 2.3];

  /* ---------- nodes ---------- */
  var geo = new THREE.BufferGeometry();
  var posArr = new Float32Array(N * 3);
  posArr.set(TARGETS[0]);
  var pos = new THREE.BufferAttribute(posArr, 3);
  if (pos.setUsage && THREE.DynamicDrawUsage !== undefined) pos.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', pos);
  var PAL = ['#FB2832', '#FB2832', '#FB2832', '#FD5760', '#77BB4A', '#5BA63C', '#367895', '#4A86A2'];
  var colArr = new Float32Array(N * 3), tmpC = new THREE.Color();
  for (var ci = 0; ci < N; ci++) { tmpC.set(PAL[(Math.random() * PAL.length) | 0]); colArr[ci*3] = tmpC.r; colArr[ci*3+1] = tmpC.g; colArr[ci*3+2] = tmpC.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
  var mat = new THREE.PointsMaterial({ size: small ? .5 : .44, map: dotTex, vertexColors: true, transparent: true, opacity: 0, depthWrite: false, sizeAttenuation: true });
  group.add(new THREE.Points(geo, mat));

  /* ---------- web lines (node↔node, local space) ---------- */
  var SEGMAX = N * 9;
  var lgeo = new THREE.BufferGeometry();
  var lpos = new THREE.BufferAttribute(new Float32Array(SEGMAX * 6), 3);
  var lcol = new THREE.BufferAttribute(new Float32Array(SEGMAX * 6), 3);
  if (lpos.setUsage && THREE.DynamicDrawUsage !== undefined) { lpos.setUsage(THREE.DynamicDrawUsage); lcol.setUsage(THREE.DynamicDrawUsage); }
  lgeo.setAttribute('position', lpos);
  lgeo.setAttribute('color', lcol);
  var lmat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0 });
  group.add(new THREE.LineSegments(lgeo, lmat));

  /* ---------- cursor threads (pointer↔node, local space) ---------- */
  var cgeo = new THREE.BufferGeometry();
  var cpos = new THREE.BufferAttribute(new Float32Array(N * 6), 3);
  var ccol = new THREE.BufferAttribute(new Float32Array(N * 6), 3);
  cgeo.setAttribute('position', cpos);
  cgeo.setAttribute('color', ccol);
  var cmat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0 });
  group.add(new THREE.LineSegments(cgeo, cmat));

  /* ---------- cursor glow ---------- */
  var glowMat = new THREE.SpriteMaterial({ map: glowTex, color: 0xFB2832, transparent: true, opacity: 0, depthWrite: false });
  var glow = new THREE.Sprite(glowMat);
  glow.scale.set(7, 7, 1);
  glow.position.set(0, 0, -1);
  scene.add(glow);

  /* theme-aware palette: line fade is encoded as color mixed toward the page bg */
  var BG = new THREE.Color('#ffffff'), LINE = new THREE.Color('#367895'), CHERRY = new THREE.Color('#FB2832');
  var isDark = false;
  function syncTheme() {
    isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    BG.set(isDark ? '#101010' : '#ffffff');
    LINE.set(isDark ? '#4A86A2' : '#367895');
  }
  new MutationObserver(syncTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  syncTheme();

  /* ---------- state ---------- */
  var a = 0, b = 0, p = 1;
  var t = 0, last = 0, idleSince = 0, jAmp = 0;
  var pulses = [];
  var mx = 0, my = 0, smx = 0, smy = 0;
  var px = 0, py = 0, pActive = false, glowA = 0;
  var vel = new Float32Array(N * 3), off = new Float32Array(N * 3);
  var label = document.getElementById('glShape');
  function setLabel() { if (label) label.textContent = '0' + (b + 1) + ' · ' + NAMES[b]; }
  setLabel();
  function ease(x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function advance() { a = b; b = (b + 1) % TARGETS.length; p = 0; idleSince = t; setLabel(); }

  /* ---------- sizing ---------- */
  var W = 0, H = 0;
  function size() {
    var w = hero.clientWidth || window.innerWidth, h = hero.clientHeight || window.innerHeight;
    if (!w || !h) return false;
    W = w; H = h;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    return true;
  }

  /* ---------- frame ---------- */
  var halfH = Math.tan(FOV * Math.PI / 360) * (CAMZ + 1); /* pointer plane sits at the group origin, z=-1 */
  var MI = new THREE.Matrix4(), PV = new THREE.Vector3(), PP = new THREE.Vector3();
  var mixA = new THREE.Color(), mixB = new THREE.Color();
  function write(dt) {
    dt = dt || 0.016;
    var e = p >= 1 ? 1 : ease(p);
    var A = TARGETS[a], B = TARGETS[b];

    /* pointer + pulses into the group's local space (exact, both rotations) */
    group.updateMatrixWorld(true);
    if (MI.invert) MI.copy(group.matrixWorld).invert(); else MI.getInverse(group.matrixWorld);
    PV.set(px, py, -1).applyMatrix4(MI);
    var GR = 6.4;
    var np = pulses.length, pu = [];
    for (var q = 0; q < np; q++) {
      var age = t - pulses[q].t0;
      PP.set(pulses[q].x, pulses[q].y, -1).applyMatrix4(MI);
      pu.push({ x: PP.x, y: PP.y, z: PP.z, rad: age * 22, amp: Math.max(0, 1 - age / 1.1) * 34 });
    }

    var fr = Math.max(0, 1 - 2.4 * dt), spring = 3.4 * dt;
    for (var i = 0; i < N; i++) {
      var i3 = i * 3, ph = i * .37;
      var tx = A[i3] + (B[i3] - A[i3]) * e;
      var ty = A[i3+1] + (B[i3+1] - A[i3+1]) * e;
      var tz = A[i3+2] + (B[i3+2] - A[i3+2]) * e;
      if (pActive) {
        var gx = PV.x - (tx + off[i3]), gy = PV.y - (ty + off[i3+1]), gz = PV.z - (tz + off[i3+2]);
        var gd2 = gx * gx + gy * gy + gz * gz;
        if (gd2 < GR * GR && gd2 > .0001) {
          var gd = Math.sqrt(gd2), gf = (1 - gd / GR) * 11 * dt;
          vel[i3] += gx / gd * gf; vel[i3+1] += gy / gd * gf; vel[i3+2] += gz / gd * gf;
        }
      }
      for (var w2 = 0; w2 < np; w2++) {
        var P = pu[w2];
        var wx = tx + off[i3] - P.x, wy = ty + off[i3+1] - P.y, wz = tz + off[i3+2] - P.z;
        var wd = Math.sqrt(wx * wx + wy * wy + wz * wz) || 1;
        var band = Math.abs(wd - P.rad);
        if (band < 3.2) {
          var push = (1 - band / 3.2) * P.amp * dt;
          vel[i3] += wx / wd * push; vel[i3+1] += wy / wd * push; vel[i3+2] += wz / wd * push;
        }
      }
      vel[i3] = (vel[i3] - off[i3] * spring) * fr;
      vel[i3+1] = (vel[i3+1] - off[i3+1] * spring) * fr;
      vel[i3+2] = (vel[i3+2] - off[i3+2] * spring) * fr;
      off[i3] += vel[i3]; off[i3+1] += vel[i3+1]; off[i3+2] += vel[i3+2];
      posArr[i3] = tx + off[i3] + (jAmp ? Math.sin(t * .8 + ph) * jAmp : 0);
      posArr[i3+1] = ty + off[i3+1] + (jAmp ? Math.cos(t * .7 + ph * 1.3) * jAmp : 0);
      posArr[i3+2] = tz + off[i3+2] + (jAmp ? Math.sin(t * .6 + ph * .7) * jAmp : 0);
    }
    pos.needsUpdate = true;

    /* web: proximity links */
    var LINK = LINKD[b] + (LINKD[a] - LINKD[b]) * (1 - e), L2 = LINK * LINK;
    var lp = lpos.array, lc = lcol.array, seg = 0;
    for (var m = 0; m < N && seg < SEGMAX; m++) {
      var m3 = m * 3, x1 = posArr[m3], y1 = posArr[m3+1], z1 = posArr[m3+2];
      for (var n = m + 1; n < N && seg < SEGMAX; n++) {
        var n3 = n * 3;
        var ddx = x1 - posArr[n3], ddy = y1 - posArr[n3+1], ddz = z1 - posArr[n3+2];
        var dd2 = ddx * ddx + ddy * ddy + ddz * ddz;
        if (dd2 < L2) {
          var wgt = 1 - Math.sqrt(dd2) / LINK;
          mixA.copy(BG).lerp(LINE, .12 + wgt * .55);
          var s6 = seg * 6;
          lp[s6] = x1; lp[s6+1] = y1; lp[s6+2] = z1;
          lp[s6+3] = posArr[n3]; lp[s6+4] = posArr[n3+1]; lp[s6+5] = posArr[n3+2];
          lc[s6] = mixA.r; lc[s6+1] = mixA.g; lc[s6+2] = mixA.b;
          lc[s6+3] = mixA.r; lc[s6+4] = mixA.g; lc[s6+5] = mixA.b;
          seg++;
        }
      }
    }
    lgeo.setDrawRange(0, seg * 2);
    lpos.needsUpdate = true; lcol.needsUpdate = true;

    /* cursor threads: pointer → nearby nodes, both in local space */
    var cp = cpos.array, cc = ccol.array, cseg = 0;
    if (pActive) {
      var TR = 6;
      for (var k2 = 0; k2 < N && cseg < N; k2++) {
        var k3 = k2 * 3;
        var ndx = PV.x - posArr[k3], ndy = PV.y - posArr[k3+1], ndz = PV.z - posArr[k3+2];
        var nd = Math.sqrt(ndx * ndx + ndy * ndy + ndz * ndz);
        if (nd < TR) {
          var cw = 1 - nd / TR;
          mixB.copy(BG).lerp(CHERRY, .15 + cw * .8);
          var c6 = cseg * 6;
          cp[c6] = PV.x; cp[c6+1] = PV.y; cp[c6+2] = PV.z;
          cp[c6+3] = posArr[k3]; cp[c6+4] = posArr[k3+1]; cp[c6+5] = posArr[k3+2];
          cc[c6] = mixB.r; cc[c6+1] = mixB.g; cc[c6+2] = mixB.b;
          cc[c6+3] = mixB.r; cc[c6+4] = mixB.g; cc[c6+5] = mixB.b;
          cseg++;
        }
      }
    }
    cgeo.setDrawRange(0, cseg * 2);
    cpos.needsUpdate = true; ccol.needsUpdate = true;
  }
  function render() { renderer.render(scene, camera); }

  /* ---------- pointer ---------- */
  function onMove(e) {
    var r = hero.getBoundingClientRect();
    var nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    var ny = -(((e.clientY - r.top) / r.height) * 2 - 1);
    mx = nx; my = ny;
    px = nx * halfH * camera.aspect; py = ny * halfH;
    pActive = e.clientY >= r.top && e.clientY <= r.bottom && e.clientX >= r.left && e.clientX <= r.right;
  }
  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', function () { pActive = false; });
  window.addEventListener('blur', function () { pActive = false; });
  hero.addEventListener('pointerdown', function (e) {
    if (e.target.closest('a, button, input')) return;
    onMove(e);
    pulses.push({ x: px, y: py, t0: t });
    if (pulses.length > 3) pulses.shift();
    advance();
  });

  /* ---------- boot: the loop runs for everyone ---------- */
  if (!size()) requestAnimationFrame(size);
  if ('ResizeObserver' in window) new ResizeObserver(function () { size(); }).observe(hero);
  window.addEventListener('resize', size);

  var visible = true;
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(canvas);

  function tick(ts) {
    requestAnimationFrame(tick);
    if (!visible || document.hidden) return;
    if (!W && !size()) return;
    var dt = Math.min((ts - last) / 1000 || 0.016, .05); last = ts;
    t += dt;
    if (mat.opacity < .95) { mat.opacity = Math.min(.95, mat.opacity + dt * .6); lmat.opacity = cmat.opacity = mat.opacity * .85; }
    if (p < 1) p = Math.min(1, p + dt / 1.9); else if (AUTO && t - idleSince > 6) advance();
    pulses = pulses.filter(function (P) { return t - P.t0 < 1.15; });
    smx += (mx - smx) * .06; smy += (my - smy) * .06;
    jAmp = AUTO ? .1 : 0;
    group.rotation.y = (AUTO ? t * .05 : 0) + smx * .26;
    group.rotation.x = -smy * .14 - (AUTO ? .03 : 0);
    /* cursor glow trails the pointer */
    glow.position.x += (px - glow.position.x) * .14;
    glow.position.y += (py - glow.position.y) * .14;
    glowA += (((pActive ? 1 : 0) * (isDark ? .38 : .22)) - glowA) * .1;
    glowMat.opacity = glowA;
    var gs = 7 + (AUTO ? Math.sin(t * 1.8) * .4 : 0);
    glow.scale.set(gs, gs, 1);
    write(dt); render();
  }
  requestAnimationFrame(function (ts) { last = ts; tick(ts); });
  window.__gl = { n: N, auto: AUTO, shape: function () { return NAMES[b]; }, hover: function () { return pActive; } };
})();
