/* ============================================================
   Colaberry Meta Ads — Intro & Outro scenes
   Built on ads/animations.jsx (Stage/Sprite engine).
   Brand: warm canvas #FBFAF8, cherry #FB2832, ink #1A1A1A.
   Both scenes are fully centered so they read in 1:1 and 9:16
   (and survive Meta's UI overlays top/bottom in 9:16).
   ============================================================ */
const { Stage, Sprite, useTime, Easing, animate, interpolate } = window;

const BRAND = {
  canvas: '#FBFAF8',
  ink: '#1A1A1A',
  red: '#FB2832',
  redDeep: '#E5121D',
  muted: '#6B6B6B',
  display: "'Roboto', system-ui, sans-serif",
  mono: "'Roboto Mono', ui-monospace, monospace",
};

/* ---------- shared bits ---------- */

/* Soft radial wash that slowly breathes — keeps every frame alive */
function Breather({ W, H, color, opacity = 1 }) {
  const t = useTime();
  const s = 1 + 0.06 * Math.sin(t * 0.7);
  return (
    <div style={{
      position: 'absolute', left: W / 2 - W * 0.75, top: H / 2 - W * 0.75,
      width: W * 1.5, height: W * 1.5, borderRadius: '50%',
      background: `radial-gradient(circle, ${color} 0%, transparent 62%)`,
      transform: `scale(${s})`, opacity,
    }} />
  );
}

/* Rise + fade entrance wrapper (clean & confident) */
function Rise({ at, dur = 0.55, dist = 34, children, style }) {
  const t = useTime();
  const p = Math.min(1, Math.max(0, (t - at) / dur));
  const e = Easing.easeOutCubic(p);
  return (
    <div style={{ ...style, opacity: e, transform: `translateY(${(1 - e) * dist}px)` }}>
      {children}
    </div>
  );
}

/* ============================================================
   INTRO — 3.5s logo reveal, "cherry drop".
   Beat: cherry falls in with gravity → lands with squash &
   stretch + a dust shadow → quick anticipation squeeze → BURSTS:
   juice droplets fly, red floods the frame, a ripple echoes →
   white logo rises on red. Ends on a held brand frame.
   ============================================================ */

/* deterministic splash droplets (angle, size, speed) */
const DROPLETS = Array.from({ length: 12 }, (_, i) => {
  const golden = i * 2.399963; // golden-angle spread — organic, no clumps
  return {
    ang: golden,
    r: 0.55 + ((i * 37) % 10) / 18,      // radius multiplier 0.55–1.1
    size: 10 + ((i * 53) % 26),           // px at 1080 wide
    delay: ((i * 29) % 10) / 90,          // 0–0.1s stagger
  };
});

function IntroScene({ W, H }) {
  const t = useTime();
  const iconW = Math.round(W * 0.26);
  const iconH = Math.round(iconW * 408 / 508);
  const cx = W / 2, cy = H / 2;

  /* -- 1. THE DROP (0–0.55): gravity fall from above the frame -- */
  const fallP = Math.min(1, Math.max(0, (t - 0.05) / 0.5));
  const fall = Easing.easeInQuad(fallP);            // accelerates like gravity
  const dropY = (fall - 1) * (H / 2 + iconH);       // from off-screen to center
  const fallRot = (1 - fall) * -10;                  // slight tumble that rights itself

  /* -- 2. THE LANDING (0.55–0.95): squash & stretch, then settle -- */
  let sx = 1, sy = 1;
  if (t >= 0.55 && t < 0.72) {            // impact: squash wide + flat
    const p = (t - 0.55) / 0.17;
    const k = Math.sin(p * Math.PI);
    sx = 1 + 0.20 * k; sy = 1 - 0.22 * k;
  } else if (t >= 0.72 && t < 0.95) {     // rebound: overshoot tall, settle
    const p = (t - 0.72) / 0.23;
    const k = Math.sin(p * Math.PI) * (1 - p);
    sx = 1 - 0.08 * k; sy = 1 + 0.10 * k;
  }

  /* -- 3. ANTICIPATION (1.05–1.2): quick inhale before the burst -- */
  if (t >= 1.05 && t < 1.2) {
    const p = (t - 1.05) / 0.15;
    const k = Math.sin(p * Math.PI * 0.5);
    sx -= 0.10 * k; sy -= 0.10 * k;
  }

  /* -- 4. THE BURST (1.2–1.75): flood + droplets + ripple -- */
  const burstP = Math.min(1, Math.max(0, (t - 1.2) / 0.55));
  const burst = Easing.easeInOutQuart(burstP);
  const cover = Math.hypot(W, H);
  const floodD = iconW * 0.4 + burst * cover;
  const cherryFade = Math.min(1, Math.max(0, (t - 1.28) / 0.26));
  const cherryPop = 1 + burst * 0.7;

  // ground shadow: appears late in the fall, flattens on squash, dies at burst
  const shadowOn = Math.min(1, Math.max(0, (fallP - 0.55) / 0.45));
  const shadowW = iconW * (0.72 + 0.3 * (sx - 1) * 5) * shadowOn;
  const shadowO = shadowOn * 0.18 * (1 - burstP);

  // ripple ring echoing across the red after the flood
  const rippleP = Math.min(1, Math.max(0, (t - 1.7) / 0.7));
  const rippleD = iconW + Easing.easeOutCubic(rippleP) * W * 1.1;

  // logo: rises with a soft scale settle, then breathes
  const drift = 1 + 0.012 * Math.sin(Math.max(0, t - 2.4) * 0.9);

  return (
    <div style={{ position: 'absolute', inset: 0, background: BRAND.canvas, overflow: 'hidden' }}>
      <Breather W={W} H={H} color="rgba(251,40,50,0.07)" />

      {/* ground shadow */}
      <Sprite start={0.3} end={1.5}>
        <div style={{
          position: 'absolute', left: cx - shadowW / 2, top: cy + iconH * 0.52,
          width: shadowW, height: iconH * 0.13, borderRadius: '50%',
          background: `radial-gradient(ellipse, rgba(26,26,26,${shadowO}) 0%, transparent 70%)`,
        }} />
      </Sprite>

      {/* red flood emerging from behind the cherry */}
      <Sprite start={1.2} end={999}>
        <div style={{
          position: 'absolute', left: cx - floodD / 2, top: cy - floodD / 2,
          width: floodD, height: floodD, borderRadius: '50%', background: BRAND.red,
        }} />
      </Sprite>

      {/* juice droplets — fly out radially while the flood is still small */}
      <Sprite start={1.2} end={1.85}>
        {DROPLETS.map((d, i) => {
          const p = Math.min(1, Math.max(0, (t - 1.2 - d.delay) / 0.5));
          const e = Easing.easeOutCubic(p);
          const dist = e * W * 0.42 * d.r;
          const px = cx + Math.cos(d.ang) * dist;
          const py = cy + Math.sin(d.ang) * dist + 0.25 * p * p * W * 0.12; // slight gravity
          const ds = d.size * (W / 1080) * (1 - 0.5 * p);
          return (
            <div key={i} style={{
              position: 'absolute', left: px - ds / 2, top: py - ds / 2,
              width: ds, height: ds, borderRadius: '50%',
              background: i % 3 === 0 ? BRAND.redDeep : BRAND.red,
              opacity: 1 - Easing.easeInQuad(p),
            }} />
          );
        })}
      </Sprite>

      {/* the cherry */}
      <Sprite start={0} end={1.6}>
        <img src="../assets/logo/colaberry-mark.png" alt=""
          style={{
            position: 'absolute', left: cx - iconW / 2, top: cy - iconH / 2 + dropY,
            width: iconW, height: iconH,
            transform: `rotate(${fallRot}deg) scale(${sx * cherryPop}, ${sy * cherryPop})`,
            transformOrigin: '50% 100%',   // squash from the ground up
            opacity: 1 - cherryFade,
            filter: burstP > 0 ? 'none' : 'drop-shadow(0 18px 34px rgba(251,40,50,0.25))',
          }} />
      </Sprite>

      {/* ripple echo on the red */}
      <Sprite start={1.7} end={2.5}>
        <div style={{
          position: 'absolute', left: cx - rippleD / 2, top: cy - rippleD / 2,
          width: rippleD, height: rippleD, borderRadius: '50%',
          border: `${3 * (W / 1080)}px solid rgba(255,255,255,${0.35 * (1 - rippleP)})`,
        }} />
      </Sprite>

      {/* on-red content */}
      <Sprite start={1.55} end={999}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${drift})` }}>
          <Rise at={1.65} dur={0.6} dist={44}>
            <img src="../assets/logo/colaberry-horizontal-white.png" alt="Colaberry"
              style={{ width: Math.round(W * 0.52), display: 'block' }} />
          </Rise>
        </div>
      </Sprite>
    </div>
  );
}

/* ============================================================
   OUTRO — 5s CTA card, everything center-stacked.
   Beat: logo → headline → date chip → CTA pops and floats → url.
   ============================================================ */
function OutroScene({ W, H }) {
  const t = useTime();

  // CTA pop + perpetual gentle float
  const popP = Math.min(1, Math.max(0, (t - 1.4) / 0.55));
  const pop = Easing.easeOutBack(popP);
  const float = popP >= 1 ? Math.sin((t - 1.95) * 1.6) * 6 : 0;
  const arrowNudge = 4 + 3 * Math.sin(t * 2.2);

  // slow-drifting warm glow behind the stack
  const gx = W / 2 + Math.sin(t * 0.5) * W * 0.06;
  const gy = H / 2 + Math.cos(t * 0.4) * H * 0.05;

  const fs = (k) => Math.round(W * k); // scale type off width so 1:1 and 9:16 both read

  return (
    <div style={{ position: 'absolute', inset: 0, background: BRAND.ink, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', left: gx - W * 0.6, top: gy - W * 0.6, width: W * 1.2, height: W * 1.2,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,40,50,0.16) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: `0 ${Math.round(W * 0.09)}px`, gap: 0,
      }}>
        <Rise at={0.2} dur={0.55}>
          <img src="../assets/logo/colaberry-horizontal-white.png" alt="Colaberry"
            style={{ width: fs(0.30), display: 'block', margin: '0 auto' }} />
        </Rise>

        <Rise at={0.7} dur={0.6} style={{ marginTop: Math.round(H * 0.045) }}>
          <div style={{
            fontFamily: BRAND.display, fontWeight: 900, color: '#fff',
            fontSize: fs(0.082), lineHeight: 1.02, letterSpacing: '-0.03em',
          }}>
            Join the free<br />Open House.
          </div>
        </Rise>

        <div style={{
          marginTop: Math.round(H * 0.05), position: 'relative',
          opacity: popP, transform: `scale(${pop}) translateY(${float}px)`,
        }}>
          {/* tap-me pulse rings radiating from the CTA */}
          {[0, 0.7].map((off, i) => {
            const cycle = ((t - 2.1 - off) % 1.4 + 1.4) % 1.4;
            const on = t > 2.1 + off;
            const rp = cycle / 1.4;
            return (
              <div key={i} style={{
                position: 'absolute', inset: 0, borderRadius: 999,
                border: `2px solid rgba(251,40,50,${on ? 0.55 * (1 - rp) : 0})`,
                transform: `scale(${1 + rp * 0.55})`,
              }} />
            );
          })}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 14, position: 'relative', overflow: 'hidden',
            fontFamily: BRAND.display, fontWeight: 700, color: '#fff',
            fontSize: fs(0.036), background: BRAND.red, borderRadius: 999,
            padding: `${fs(0.026)}px ${fs(0.055)}px`,
            boxShadow: '0 22px 60px rgba(251,40,50,0.45)',
          }}>
            {/* shine sweep */}
            <div style={{
              position: 'absolute', top: 0, bottom: 0, width: '36%',
              left: `${-40 + (((t - 2.3) % 2.4 + 2.4) % 2.4) / 2.4 * 190}%`,
              background: 'linear-gradient(105deg, transparent, rgba(255,255,255,0.28), transparent)',
              opacity: t > 2.3 ? 1 : 0,
            }} />
            Register free
            <span style={{ display: 'inline-block', transform: `translateX(${arrowNudge}px)`, fontWeight: 400 }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   App shell — format toggle (1:1 / 9:16) + scene toggle, one
   Stage mounted at a time so video export captures exactly it.
   ============================================================ */
const AD_FORMATS = {
  square: { label: '1:1', W: 1080, H: 1080 },
  story: { label: '9:16', W: 1080, H: 1920 },
};

function AdApp({ scene }) {
  const [fmt, setFmt] = React.useState(() => {
    const q = new URLSearchParams(location.search).get('fmt');
    if (q === 'square' || q === 'story') return q;
    return localStorage.getItem('cb-ad-fmt') || 'square';
  });
  React.useEffect(() => { localStorage.setItem('cb-ad-fmt', fmt); }, [fmt]);
  const { W, H } = AD_FORMATS[fmt];
  const dur = scene === 'intro' ? 3.5 : 4;
  const Scene = scene === 'intro' ? IntroScene : OutroScene;

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', background: '#111' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        padding: '10px 16px', background: '#1A1A1A', borderBottom: '1px solid #2c2c2c', flex: 'none',
      }}>
        <span style={{ fontFamily: BRAND.mono, fontSize: 12, letterSpacing: '0.12em', color: '#888', textTransform: 'uppercase', marginRight: 8 }}>
          {scene === 'intro' ? 'Meta ad · Intro' : 'Meta ad · Outro'}
        </span>
        {Object.entries(AD_FORMATS).map(([k, f]) => (
          <button key={k} onClick={() => setFmt(k)} style={{
            fontFamily: BRAND.mono, fontSize: 13, fontWeight: 700, cursor: 'pointer',
            padding: '7px 18px', borderRadius: 999, border: '1px solid ' + (fmt === k ? BRAND.red : '#3a3a3a'),
            background: fmt === k ? BRAND.red : 'transparent', color: fmt === k ? '#fff' : '#aaa',
          }}>{f.label}</button>
        ))}
        <a href={scene === 'intro' ? 'Meta Ad Outro.html' : 'Meta Ad Intro.html'} style={{
          fontFamily: BRAND.mono, fontSize: 12, color: '#888', marginLeft: 14, textDecoration: 'none', borderBottom: '1px dotted #555',
        }}>{scene === 'intro' ? 'go to outro →' : '← go to intro'}</a>
        <a href="Meta Ads Review.html" style={{
          fontFamily: BRAND.mono, fontSize: 12, color: '#888', marginLeft: 14, textDecoration: 'none', borderBottom: '1px dotted #555',
        }}>all 4 ↗</a>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <Stage key={fmt} width={W} height={H} duration={dur} background={scene === 'intro' ? BRAND.canvas : BRAND.ink} loop autoplay>
          <Sprite start={0} end={999}>
            <SceneMount Scene={Scene} W={W} H={H} />
          </Sprite>
        </Stage>
      </div>
    </div>
  );
}

function SceneMount({ Scene, W, H }) {
  return <Scene W={W} H={H} />;
}

/* ============================================================
   REVIEW GALLERY — all four deliverables on one page.
   Live looping previews driven by one shared clock; each card
   opens its dedicated export page (Share → Export → Video).
   ============================================================ */
const AD_SET = [
  { scene: 'intro', fmt: 'square', dur: 3.5, page: 'Meta Ad Intro.html' },
  { scene: 'intro', fmt: 'story', dur: 3.5, page: 'Meta Ad Intro.html' },
  { scene: 'outro', fmt: 'square', dur: 4, page: 'Meta Ad Outro.html' },
  { scene: 'outro', fmt: 'story', dur: 4, page: 'Meta Ad Outro.html' },
];

function GalleryCard({ item, time }) {
  const { W, H } = AD_FORMATS[item.fmt];
  const Scene = item.scene === 'intro' ? IntroScene : OutroScene;
  const previewH = 400;
  const previewW = Math.round(previewH * W / H);
  const s = previewH / H;
  const [hover, setHover] = React.useState(false);
  const href = item.page + '?fmt=' + item.fmt;
  const ctx = React.useMemo(
    () => ({ time: time % item.dur, duration: item.dur, playing: true, setTime: () => {}, setPlaying: () => {} }),
    [time, item.dur]
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, alignSelf: 'stretch' }}>
        <span style={{ fontFamily: BRAND.display, fontWeight: 700, fontSize: 16, color: '#fff', textTransform: 'capitalize' }}>{item.scene}</span>
        <span style={{ fontFamily: BRAND.mono, fontSize: 12, color: '#888' }}>{AD_FORMATS[item.fmt].label} · {W}×{H} · {item.dur}s</span>
      </div>
      <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          position: 'relative', display: 'block', width: previewW, height: previewH,
          borderRadius: 14, overflow: 'hidden', textDecoration: 'none', flex: 'none',
          outline: hover ? '2px solid ' + BRAND.red : '1px solid #333',
          boxShadow: hover ? '0 18px 50px rgba(251,40,50,0.25)' : '0 12px 36px rgba(0,0,0,0.5)',
          transform: hover ? 'translateY(-4px)' : 'none', transition: 'all .25s ease',
        }}>
        <div style={{ width: W, height: H, transform: `scale(${s})`, transformOrigin: 'top left', position: 'relative', pointerEvents: 'none', background: item.scene === 'intro' ? BRAND.canvas : BRAND.ink }}>
          <TimelineContext.Provider value={ctx}>
            <SceneMount Scene={Scene} W={W} H={H} />
          </TimelineContext.Provider>
        </div>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hover ? 'rgba(26,26,26,0.55)' : 'transparent', transition: 'background .25s ease',
        }}>
          <span style={{
            fontFamily: BRAND.mono, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#fff', background: BRAND.red, borderRadius: 999, padding: '10px 20px',
            opacity: hover ? 1 : 0, transform: hover ? 'none' : 'translateY(8px)', transition: 'all .25s ease',
          }}>Open · Export →</span>
        </div>
      </a>
    </div>
  );
}

function AdGallery() {
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    let raf, last;
    const step = (ts) => {
      if (last == null) last = ts;
      setTime(t => t + (ts - last) / 1000);
      last = ts;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div style={{ minHeight: '100vh', background: '#111', padding: '40px 32px 64px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <img src="../assets/logo/colaberry-horizontal-white.png" alt="Colaberry" style={{ height: 26, marginBottom: 14 }} />
          <div style={{ fontFamily: BRAND.display, fontWeight: 900, fontSize: 30, color: '#fff', letterSpacing: '-0.02em' }}>Meta Ads · Intro &amp; Outro</div>
          <div style={{ fontFamily: BRAND.mono, fontSize: 13, color: '#888', marginTop: 8 }}>
            4 deliverables · click any card, then Share → Export → Video for the MP4
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 36, justifyContent: 'center', alignItems: 'flex-end' }}>
          {AD_SET.map((item, i) => <GalleryCard key={i} item={item} time={time} />)}
        </div>
      </div>
    </div>
  );
}

window.CbAdApp = AdApp;
window.CbAdGallery = AdGallery;
