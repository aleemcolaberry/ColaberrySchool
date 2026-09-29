/* Colaberry — animated intro bumper + outro end card scenes (1080×1920).
   Reads the timeline engine (Stage, useTime, Easing, …) from window —
   load animations.jsx first via the same x-import `from` list.
   All styles literal (brand tokens inlined) so the exported svg is
   self-describing. */

const { Stage, Easing, clamp } = window;

const CB = {
  ink: '#0F0F0F',
  red: '#FB2832',
  red400: '#FD5760',
  gray300: '#D8D8D8',
  gray400: '#B4B4B4',
  gray500: '#8C8C8C',
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

// tween helper: eased 0→1 over [a,b]
const tw = (t, a, b, ease = Easing.easeOutCubic) => ease(clamp((t - a) / (b - a), 0, 1));
// one-shot pulse centered at `at` (gaussian bell, ~0.5s wide)
const pulse = (t, at) => Math.exp(-Math.pow((t - at) * 5, 2));

/* ── INTRO BUMPER — ~3s brand sting ────────────────────────────────────── */
function IntroContents() {
  const t = window.useTime();
  const logo = useDataURL('../../assets/logo/colaberry-horizontal-white.png');

  const logoIn = tw(t, 0.15, 0.55, Easing.easeOutBack);
  const logoFade = tw(t, 0.15, 0.45);
  const drift = 1 + 0.015 * clamp((t - 0.55) / 2.45, 0, 1); // subtle grow during hold
  const ruleW = 130 * tw(t, 0.5, 0.85, Easing.easeOutQuart);
  const l1 = tw(t, 0.75, 1.15), l2 = tw(t, 0.95, 1.35), l3 = tw(t, 1.15, 1.55);
  const meta = tw(t, 1.0, 1.45);
  const fadeOut = tw(t, 2.72, 3.0, Easing.easeInQuad);

  const line = (p, text, y) => (
    <div style={{ position: 'absolute', left: 0, right: 0, top: y, textAlign: 'center',
      opacity: p, transform: `translateY(${(1 - p) * 34}px)`,
      fontFamily: CB.display, fontWeight: 900, fontSize: 70, lineHeight: 1.1,
      letterSpacing: '-0.02em', color: '#fff' }}>{text}</div>
  );

  return (
    <div style={{ position: 'absolute', inset: 0, background: CB.ink, overflow: 'hidden' }}>
      <img src={logo} alt="" style={{ position: 'absolute', left: 240, top: 700, width: 600,
        opacity: logoFade, transform: `scale(${(0.82 + 0.18 * logoIn) * drift})`,
        transformOrigin: 'center' }} />

      <div style={{ position: 'absolute', left: 540 - ruleW / 2, top: 906, width: ruleW,
        height: 10, borderRadius: 99, background: CB.red }} />

      {line(l1, 'Hard work matters', 984)}
      {line(l2, 'Experience matters', 1068)}
      {line(l3, <span>But <span style={{ color: CB.red }}>AI skills</span> are becoming<br />a career advantage</span>, 1152)}

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 96, textAlign: 'center',
        opacity: meta, fontFamily: CB.mono, fontSize: 26, letterSpacing: '0.12em',
        color: CB.gray500 }}>training.colaberry.com</div>

      {/* fade to black for the hard cut into content */}
      <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: fadeOut,
        pointerEvents: 'none' }} />
    </div>
  );
}

/* ── OUTRO END CARD — 6s CTA hold ──────────────────────────────────────── */
function OutroContents() {
  const t = window.useTime();
  const logo = useDataURL('../../assets/logo/colaberry-horizontal-white.png');

  const logoIn = tw(t, 0.0, 0.4);
  const eyebrow = tw(t, 0.1, 0.45);
  const title = tw(t, 0.18, 0.6, Easing.easeOutQuart);
  const btn = tw(t, 0.55, 0.95, Easing.easeOutBack);
  const link = tw(t, 0.8, 1.15);
  const tagline = tw(t, 0.95, 1.3);
  const btnPulse = 1 + 0.055 * (pulse(t, 1.6) + pulse(t, 3.8));
  const glow = 0.5 + 0.5 * Math.sin(t * 1.1); // slow ambient drift

  return (
    <div style={{ position: 'absolute', inset: 0, background: CB.ink, overflow: 'hidden' }}>
      {/* ambient glow — keeps the long hold alive */}
      <div style={{ position: 'absolute', left: -300, top: 500, width: 1680, height: 1100,
        background: 'radial-gradient(closest-side, rgba(251,40,50,0.14), rgba(251,40,50,0))',
        opacity: 0.55 + 0.45 * glow, transform: `translateY(${(glow - 0.5) * 40}px)` }} />

      <img src={logo} alt="" style={{ position: 'absolute', left: 315, top: 120, width: 450,
        opacity: logoIn, transform: `translateY(${(1 - logoIn) * -20}px)` }} />

      <div style={{ position: 'absolute', left: 0, right: 0, top: 620, textAlign: 'center',
        opacity: eyebrow, transform: `translateY(${(1 - eyebrow) * 20}px)`,
        fontFamily: CB.mono, fontSize: 32, letterSpacing: '0.2em', textTransform: 'uppercase',
        fontWeight: 700, color: CB.red400 }}>Free · Live · Online</div>

      <div style={{ position: 'absolute', left: 0, right: 0, top: 694, textAlign: 'center',
        opacity: title, transform: `scale(${1.08 - 0.08 * title})`, transformOrigin: 'center',
        fontFamily: CB.display, fontWeight: 900, fontSize: 150, lineHeight: 1.0,
        letterSpacing: '-0.025em', color: '#fff' }}>Open House</div>

      <div style={{ position: 'absolute', left: 0, right: 0, top: 950, textAlign: 'center',
        opacity: btn, transform: `translateY(${(1 - btn) * 44}px)` }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 24,
          background: CB.red, color: '#fff',
          fontFamily: CB.display, fontWeight: 900, fontSize: 60, padding: '38px 74px',
          borderRadius: 99, whiteSpace: 'nowrap',
          transform: `scale(${btnPulse})`, transformOrigin: 'center',
          boxShadow: '0 30px 80px rgba(251,40,50,0.5)' }}>Comment
          <span style={{ display: 'inline-block', background: '#fff', color: CB.red,
            fontFamily: CB.mono, fontWeight: 700, fontSize: 66, padding: '12px 40px',
            borderRadius: 20, letterSpacing: '0.1em',
            boxShadow: `0 0 ${34 + 26 * glow}px rgba(255,255,255,${0.55 + 0.3 * glow}), 0 12px 34px rgba(0,0,0,0.3)`,
            transform: `scale(${1 + 0.08 * (pulse(t, 2.2) + pulse(t, 4.4))})` }}>&ldquo;AI&rdquo;</span>
        </span>
      </div>

      <div style={{ position: 'absolute', left: 0, right: 0, top: 1180, textAlign: 'center',
        opacity: link, fontFamily: CB.display, fontWeight: 700, fontSize: 44,
        color: '#fff' }}>to get our <span style={{ color: CB.red400 }}>open house link</span></div>

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 120, textAlign: 'center', opacity: tagline }}>
        <div style={{ width: 120, height: 6, borderRadius: 99, background: CB.red, margin: '0 auto 34px' }}></div>
        <div style={{ fontFamily: CB.display, fontWeight: 700, fontSize: 32, color: CB.gray300,
          letterSpacing: '-0.01em' }}>Learn with Claude. Build through Colaberry.</div>
      </div>
    </div>
  );
}

/* ── Root — one Stage per clip, switched by prop ───────────────────────── */
function IntroOutroAnimation({ clip = 'intro' }) {
  if (clip === 'outro') {
    return (
      <Stage key="outro" width={1080} height={1920} duration={6} background={CB.ink}
        persistKey="cb-outro-anim">
        <OutroContents />
      </Stage>
    );
  }
  return (
    <Stage key="intro" width={1080} height={1920} duration={3} background={CB.ink}
      persistKey="cb-intro-anim">
      <IntroContents />
    </Stage>
  );
}

window.IntroOutroAnimation = IntroOutroAnimation;
