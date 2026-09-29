/* Colaberry — LIGHT animated intro bumper + outro end card (1080×1920).
   Full-color logo on a light ground; accents sampled from the logo
   (cherry red, leaf green, berry blue). Engine globals come from
   animations.jsx — load it first in the same x-import `from` list. */

const { Stage, Easing, clamp } = window;

const CBL = {
  bg: '#FAF9F6',
  ink: '#171717',
  red: '#E8232E',
  green: '#2F9E44',
  blue: '#33739B',
  gray500: '#6E6E6E',
  gray600: '#4A4A4A',
  display: "'Roboto', system-ui, -apple-system, 'Segoe UI', sans-serif",
  mono: "'Roboto Mono', ui-monospace, 'SF Mono', Menlo, monospace",
};

// Fetch an image once and swap in a data: URL so the serialized export svg
// still contains the logo.
function useDataURL(src) {
  const [url, setUrl] = React.useState(src);
  React.useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((r) => { if (!r.ok) throw 0; return r.blob(); })
      .then((b) => new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(b); }))
      .then((u) => { if (!cancelled) setUrl(u); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [src]);
  return url;
}

const tw = (t, a, b, ease = Easing.easeOutCubic) => ease(clamp((t - a) / (b - a), 0, 1));
const pulse = (t, at) => Math.exp(-Math.pow((t - at) * 5, 2));

// tri-color brand rule, grows from center
function TriRule({ w, top, h = 10 }) {
  const seg = w / 3;
  return (
    <div style={{ position: 'absolute', left: 540 - w / 2, top, width: w, height: h,
      borderRadius: 99, overflow: 'hidden', display: 'flex' }}>
      <div style={{ width: seg, background: CBL.red }} />
      <div style={{ width: seg, background: CBL.green }} />
      <div style={{ width: seg, background: CBL.blue }} />
    </div>
  );
}

/* ── INTRO BUMPER — ~3s brand sting ────────────────────────────────────── */
function IntroLightContents() {
  const t = window.useTime();
  const logo = useDataURL('../../assets/logo/colaberry-horizontal.png');

  const logoIn = tw(t, 0.15, 0.55, Easing.easeOutBack);
  const logoFade = tw(t, 0.15, 0.45);
  const drift = 1 + 0.015 * clamp((t - 0.55) / 2.45, 0, 1);
  const ruleW = 150 * tw(t, 0.5, 0.85, Easing.easeOutQuart);
  const l1 = tw(t, 0.75, 1.15), l2 = tw(t, 0.95, 1.35), l3 = tw(t, 1.15, 1.55);
  const meta = tw(t, 1.0, 1.45);
  const fadeOut = tw(t, 2.72, 3.0, Easing.easeInQuad);

  const line = (p, text, y) => (
    <div style={{ position: 'absolute', left: 0, right: 0, top: y, textAlign: 'center',
      opacity: p, transform: `translateY(${(1 - p) * 34}px)`,
      fontFamily: CBL.display, fontWeight: 900, fontSize: 96, lineHeight: 1.1,
      letterSpacing: '-0.02em', color: CBL.ink }}>{text}</div>
  );

  return (
    <div style={{ position: 'absolute', inset: 0, background: CBL.bg, overflow: 'hidden' }}>
      {/* faint warm wash so the long white hold isn't sterile */}
      <div style={{ position: 'absolute', left: -200, top: 320, width: 1480, height: 900,
        background: 'radial-gradient(closest-side, rgba(232,35,46,0.05), rgba(232,35,46,0))' }} />

      <img src={logo} alt="" style={{ position: 'absolute', left: 210, top: 712, width: 660,
        opacity: logoFade, transform: `scale(${(0.82 + 0.18 * logoIn) * drift})`,
        transformOrigin: 'center' }} />

      <TriRule w={ruleW} top={928} />

      {line(l1, <span>Start Learning <span style={{ color: CBL.red }}>AI</span><br />for Free</span>, 1010)}

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 96, textAlign: 'center',
        opacity: meta, fontFamily: CBL.mono, fontSize: 26, letterSpacing: '0.12em',
        color: CBL.gray500 }}>training.colaberry.com</div>

      {/* fade to white for the cut into content */}
      <div style={{ position: 'absolute', inset: 0, background: '#fff', opacity: fadeOut,
        pointerEvents: 'none' }} />
    </div>
  );
}

/* ── OUTRO END CARD — 6s CTA hold ──────────────────────────────────────── */
function OutroLightContents() {
  const t = window.useTime();
  const logo = useDataURL('../../assets/logo/colaberry-horizontal.png');

  const logoIn = tw(t, 0.0, 0.4);
  const eyebrow = tw(t, 0.1, 0.45);
  const title = tw(t, 0.18, 0.6, Easing.easeOutQuart);
  const btn = tw(t, 0.55, 0.95, Easing.easeOutBack);
  const link = tw(t, 0.8, 1.15);
  const tagline = tw(t, 0.95, 1.3);
  const btnPulse = 1 + 0.055 * (pulse(t, 1.6) + pulse(t, 3.8));
  const glow = 0.5 + 0.5 * Math.sin(t * 1.1);

  return (
    <div style={{ position: 'absolute', inset: 0, background: CBL.bg, overflow: 'hidden' }}>
      {/* ambient color washes — keep the long hold alive */}
      <div style={{ position: 'absolute', left: -320, top: -260, width: 1200, height: 1000,
        background: 'radial-gradient(closest-side, rgba(47,158,68,0.08), rgba(47,158,68,0))',
        opacity: 0.6 + 0.4 * glow, transform: `translateY(${(glow - 0.5) * 30}px)` }} />
      <div style={{ position: 'absolute', left: 200, top: 900, width: 1400, height: 1100,
        background: 'radial-gradient(closest-side, rgba(232,35,46,0.07), rgba(232,35,46,0))',
        opacity: 0.55 + 0.45 * glow, transform: `translateY(${(0.5 - glow) * 40}px)` }} />

      <img src={logo} alt="" style={{ position: 'absolute', left: 290, top: 140, width: 500,
        opacity: logoIn, transform: `translateY(${(1 - logoIn) * -20}px)` }} />

      <div style={{ position: 'absolute', left: 0, right: 0, top: 620, textAlign: 'center',
        opacity: eyebrow, transform: `translateY(${(1 - eyebrow) * 20}px)`,
        fontFamily: CBL.mono, fontSize: 32, letterSpacing: '0.2em', textTransform: 'uppercase',
        fontWeight: 700, color: CBL.green }}>Free · Live · Online</div>

      <div style={{ position: 'absolute', left: 0, right: 0, top: 694, textAlign: 'center',
        opacity: title, transform: `scale(${1.08 - 0.08 * title})`, transformOrigin: 'center',
        fontFamily: CBL.display, fontWeight: 900, fontSize: 150, lineHeight: 1.0,
        letterSpacing: '-0.025em', color: CBL.ink }}>Open House</div>

      <div style={{ position: 'absolute', left: 0, right: 0, top: 950, textAlign: 'center',
        opacity: btn, transform: `translateY(${(1 - btn) * 44}px)` }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 24,
          background: CBL.red, color: '#fff',
          fontFamily: CBL.display, fontWeight: 900, fontSize: 60, padding: '38px 74px',
          borderRadius: 99, whiteSpace: 'nowrap',
          transform: `scale(${btnPulse})`, transformOrigin: 'center',
          boxShadow: '0 26px 70px rgba(232,35,46,0.35)' }}>Comment
          <span style={{ display: 'inline-block', background: '#fff', color: CBL.red,
            fontFamily: CBL.mono, fontWeight: 700, fontSize: 66, padding: '12px 40px',
            borderRadius: 20, letterSpacing: '0.1em',
            boxShadow: `0 0 ${30 + 22 * glow}px rgba(255,255,255,${0.5 + 0.3 * glow}), 0 12px 30px rgba(0,0,0,0.22)`,
            transform: `scale(${1 + 0.08 * (pulse(t, 2.2) + pulse(t, 4.4))})` }}>&ldquo;AI&rdquo;</span>
        </span>
      </div>

      <div style={{ position: 'absolute', left: 0, right: 0, top: 1180, textAlign: 'center',
        opacity: link, fontFamily: CBL.display, fontWeight: 700, fontSize: 44,
        color: CBL.ink }}>to get our <span style={{ color: CBL.red }}>open house link</span></div>

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 120, textAlign: 'center', opacity: tagline }}>
        <TriRule w={150} top={-40} h={6} />
        <div style={{ fontFamily: CBL.display, fontWeight: 700, fontSize: 32, color: CBL.gray600,
          letterSpacing: '-0.01em' }}>Learn with Claude. Build through Colaberry.</div>
      </div>
    </div>
  );
}

/* ── Root — one Stage per clip, switched by prop ───────────────────────── */
function IntroOutroLightAnimation({ clip = 'intro' }) {
  if (clip === 'outro') {
    return (
      <Stage key="outro" width={1080} height={1920} duration={6} background={CBL.bg}
        persistKey="cb-outro-light-anim">
        <OutroLightContents />
      </Stage>
    );
  }
  return (
    <Stage key="intro" width={1080} height={1920} duration={3} background={CBL.bg}
      persistKey="cb-intro-light-anim">
      <IntroLightContents />
    </Stage>
  );
}

window.IntroOutroLightAnimation = IntroOutroLightAnimation;
