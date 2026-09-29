/* v2 awwwards redesign — shared parts: Nav, Marquee, Canvas, Stats, Magnetic, Footer */
const { Button: AwButton } = window.ColaberryDesignSystem_098454;

/* Motion is ON by default — the page is an animated marketing experience.
   (Continuous decorative motion still pauses when off-screen.) */
const AW_REDUCE = false;

/* Run fn only when the document is actually visible. Hidden documents
   (ad-quality crawlers, prerenderers, background tabs) never fire rAF,
   which would leave gsap.from() content stuck invisible at its from-state.
   Returns a cancel function. */
function awWhenVisible(fn) {
  if (!document.hidden) { fn(); return () => {}; }
  const h = () => {
    if (!document.hidden) { document.removeEventListener('visibilitychange', h); fn(); }
  };
  document.addEventListener('visibilitychange', h);
  return () => document.removeEventListener('visibilitychange', h);
}

function AwNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="aw-nav" data-scrolled={scrolled}>
      <div className="aw-nav__inner">
        <Logo />
        <div className="aw-nav__meta">
          <span className="aw-nav__date"><I n="monitor" s={15} />FREE · LIVE ONLINE</span>
          <AwButton size="sm" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={15} />}>Reserve my free seat</AwButton>
        </div>
      </div>
    </header>
  );
}

function AwMarquee() {
  const items = [
    <span key="a">Learn with <em className="is-blue">Claude</em></span>,
    <span key="b">Build through <em className="is-green">Colaberry</em></span>,
    <span key="c">Deploy in the <em className="is-red">real world</em></span>,
    <span key="d">Free Open House · Live online</span>,
  ];
  const list = (hidden) => (
    <div className="aw-mq__list" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <span className="aw-mq__item" key={i}>{it}<span className="aw-mq__dot" /></span>
      ))}
    </div>
  );
  return (
    <div className="aw-mq">
      <div className="aw-mq__inner">{list(false)}{list(true)}</div>
    </div>
  );
}

/* Generative node-network canvas — "AI systems" motif for the hero. */
function AwCanvas() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const css = getComputedStyle(document.documentElement);
    const tok = (n, fb) => (css.getPropertyValue(n) || fb).trim();
    const COLORS = [tok('--blue-500', '#367895'), tok('--green-500', '#77BB4A'), tok('--red-500', '#FB2832')];
    let nodes = [], raf = 0, running = true, W = 0, H = 0;

    const build = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width; H = rect.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.max(26, Math.round(W / 24)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
        r: 1.2 + Math.random() * 1.6,
        c: Math.random() < .8 ? null : COLORS[(Math.random() * 3) | 0],
      }));
    };

    const frame = (move) => {
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        if (move) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < -10) n.x = W + 10; else if (n.x > W + 10) n.x = -10;
          if (n.y < -10) n.y = H + 10; else if (n.y > H + 10) n.y = -10;
        }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 16900) {
            const o = (1 - Math.sqrt(d2) / 130) * .14;
            ctx.strokeStyle = 'rgba(74,74,74,' + o.toFixed(3) + ')';
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = n.c ? n.c + '99' : 'rgba(74,74,74,.30)';
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
    };

    const loop = () => { if (!running) return; frame(true); raf = requestAnimationFrame(loop); };
    build();
    if (AW_REDUCE) { frame(false); }
    else {
      const io = new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (e.isIntersecting && !running) { running = true; loop(); }
          else if (!e.isIntersecting) { running = false; cancelAnimationFrame(raf); }
        });
      });
      io.observe(canvas);
      loop();
      const onResize = () => { build(); };
      window.addEventListener('resize', onResize);
      return () => { running = false; cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', onResize); };
    }
    const onResize = () => { build(); frame(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return <div className="aw-hero__canvas" aria-hidden="true"><canvas ref={ref} /></div>;
}

/* Scroll-triggered count-up stats (final values live in markup as fallback). */
function AwStats() {
  const ref = React.useRef(null);
  const stats = [
    { n: 5000, suffix: '+', label: 'careers changed since 2012', em: true },
    { n: 49, suffix: '', label: 'countries with Colaberry learners' },
    { n: 12, suffix: '', label: 'weeks from idea to working AI system' },
    { n: 90, suffix: '', label: 'minutes of live demos, stories & Q&A' },
  ];
  const fmt = (v) => v.toLocaleString('en-US');
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const ctx = gsap.context(() => {
      const els = ref.current.querySelectorAll('[data-count]');
      els.forEach((el) => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 1.05, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => { el.textContent = fmt(Math.round(obj.v)) + suffix; },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <div className="aw-stats" ref={ref}>
      <div className="aw-stats__grid">
        {stats.map((s, i) => (
          <div className="aw-stat" key={i}>
            <div className="aw-stat__n">
              {s.em
                ? <em data-count={s.n} data-suffix={s.suffix}>{fmt(s.n) + s.suffix}</em>
                : <span data-count={s.n} data-suffix={s.suffix}>{fmt(s.n) + s.suffix}</span>}
            </div>
            <div className="aw-stat__l">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Magnetic hover wrapper (fine pointers + motion only). */
function Magnetic({ children, strength = 0.32 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.gsap || AW_REDUCE) return;
    if (!(window.matchMedia && window.matchMedia('(pointer: fine)').matches)) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * strength, y: y * strength, duration: .4, ease: 'power3.out' });
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [strength]);
  return <div ref={ref} style={{ display: 'inline-block' }}>{children}</div>;
}

function AwFooter({ tagline, dateLabel, campaign = false } = {}) {
  return (
    <footer className="aw-footer">
      <div className="aw-footer__inner">
        <div className="aw-footer__brand">
          <img src={(window.__resources && window.__resources.logoWhite) || '../assets/logo/colaberry-horizontal-white.png'} alt="Colaberry" style={{ height: 30, display: 'block' }} />
          <p>{tagline || 'Learn with Claude. Build through Colaberry. Deploy in the real world. Helping people move from AI consumer to AI builder since 2012.'}</p>
          <div className="aw-social">
            <a href="https://www.youtube.com/@ColaberrySODA/shorts" target="_blank" rel="noopener" aria-label="Colaberry on YouTube"><I n="youtube" s={20} /></a>
            <a href="https://www.instagram.com/colaberryschool/" target="_blank" rel="noopener" aria-label="Colaberry on Instagram"><I n="instagram" s={20} /></a>
          </div>
        </div>
        <div className="aw-footer__meta">
          <span><I n="calendar-days" s={16} />{dateLabel || 'Free Open House · live online'}</span>
          <span><I n="ticket" s={16} />Membership · $149/month</span>
          <span><I n="map-pin" s={16} />Plano, TX · Boston, MA</span>
        </div>
      </div>
      <span className="aw-footer__word" aria-hidden="true">colaberry</span>
      <div className="aw-footer__bar">
        <div>
          <span>© 2026 · Colaberry School of Data and AI is operated by Colaberry Inc. · Texas Workforce Commission approved</span>
          <span className="aw-footer__links">
            {campaign ? (
              <a href="https://form.jotform.com/251193437881463">Join the free Open House</a>
            ) : (
              <React.Fragment>
                <a href="our-story.html">Our Story</a>
                <a href="student-projects.html">Student Projects</a>
                <a href="events.html">Events</a>
                <a href="blog.html">Blog</a>
                <a href="podcasts.html">Podcast</a>
                <a href="shorts.html">Shorts</a>
                <a href="faq.html">FAQ</a>
                <a href="contact.html">Contact</a>
                <a href="https://form.jotform.com/251193437881463">Register</a>
              </React.Fragment>
            )}
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { AwNav, AwMarquee, AwCanvas, AwStats, Magnetic, AwFooter, AW_REDUCE, awWhenVisible });
