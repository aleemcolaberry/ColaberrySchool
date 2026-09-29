/* AI Systems Architect Accelerator — shared parts (Logo, Reveal, AnnouncementBar, Header, Footer) */
const { Button: CBButton } = window.ColaberryDesignSystem_098454;

/* React-safe Lucide icon — React owns the <span>, Lucide swaps the inner <i>. */
function I({ n, s, c, className = '', style }) {
  const st = { fontSize: s ? s + 'px' : undefined, color: c, ...style };
  return <span className={'cb-i ' + className} aria-hidden="true" style={st} dangerouslySetInnerHTML={{ __html: `<i data-lucide="${n}"></i>` }} />;
}

/* Scroll-reveal wrapper: adds .is-in once the element enters the viewport. */
function Reveal({ as = 'div', className = '', style, delay = 0, children, ...rest }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
    }, { threshold: 0.04, rootMargin: '0px 0px 10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  const cls = 'reveal ' + (seen ? 'is-in ' : '') + className;
  const st = delay ? { transitionDelay: delay + 'ms', ...style } : style;
  return <Tag ref={ref} className={cls} style={st} {...rest}>{children}</Tag>;
}

/* Thin brand-gradient bar that tracks scroll progress. */
function ScrollProgress() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pxEls = Array.from(document.querySelectorAll('[data-parallax]'));
    const update = () => {
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      const p = Math.max(0, Math.min(1, (window.scrollY || doc.scrollTop) / max));
      if (ref.current) ref.current.style.setProperty('--p', p.toFixed(4));
      if (!reduce && pxEls.length) {
        const half = (window.innerHeight || doc.clientHeight) / 2;
        for (const el of pxEls) {
          const sp = parseFloat(el.getAttribute('data-parallax')) || 0;
          const r = el.getBoundingClientRect();
          const fromCenter = (r.top + r.height / 2) - half;
          el.style.transform = 'translate3d(0,' + (-fromCenter * sp).toFixed(1) + 'px,0)';
        }
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <div className="cbx-progress" ref={ref} aria-hidden="true" />;
}

function Logo({ height = 30 }) {
  const src = (window.__resources && window.__resources.logoColor) || '../assets/logo/colaberry-horizontal.png';
  return <img src={src} alt="Colaberry" style={{ height, display: 'block' }} />;
}

/* ---- Sticky announcement bar ---- */
function AnnouncementBar() {
  return (
    <div className="cbx-ann">
      <div className="cbx-ann__shine" aria-hidden="true" />
      <div className="cbx-ann__inner">
        <span className="cbx-ann__msg">
          <I n="megaphone" />
          Turn your AI idea into a real system in 12 weeks
          <span className="cbx-ann__sep">·</span>
          Join the free Open House
        </span>
        <a className="cbx-ann__cta" href="https://learn.colaberry.com/" target="_blank" rel="noopener">Reserve my free seat<I n="arrow-right" s={14} /></a>
      </div>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="cbx-header" data-scrolled={scrolled}>
      <div className="cbx-header__inner">
        <a className="cbx-logo" href="#top">
          <Logo />
          <span className="cbx-logo__div" />
          <span className="cbx-logo__tag">AI Systems Architect<br/>Accelerator</span>
        </a>
        <div className="cbx-header__meta">
          <span className="cbx-header__date"><I n="monitor" s={16} />Free Open House · Live online</span>
          <CBButton size="sm" as="a" href="https://learn.colaberry.com/" target="_blank" rel="noopener" trailingIcon={<I n="arrow-right" s={15} />}>Reserve my free seat</CBButton>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="cbx-footer">
      <div className="cbx-footer__inner">
        <div className="cbx-footer__brand">
          <img src={(window.__resources && window.__resources.logoWhite) || '../assets/logo/colaberry-horizontal-white.png'} alt="Colaberry" style={{ height: 30, display: 'block' }} />
          <p>Learn with Claude. Build through Colaberry. Deploy in the real world. Helping people move from AI consumer to AI builder since 2012.</p>
        </div>
        <div className="cbx-footer__meta">
          <span><I n="calendar-days" s={16} />Free Open House</span>
          <span><I n="monitor" s={16} />Live online event</span>
          <span><I n="map-pin" s={16} />Plano, TX · Boston, MA</span>
        </div>
      </div>
      <div className="cbx-footer__bar">
        <div>
          <span>© 2026 · Colaberry School of Data and AI is operated by Colaberry Inc. · Texas Workforce Commission approved</span>
          <span>AI Systems Architect Accelerator · Founding Cohort</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { I, Reveal, ScrollProgress, Logo, AnnouncementBar, Header, Footer });
