/* AI Systems Architect Accelerator — HOME sections:
   Stats · Choose your path · How it works · Photo band · Certificate ·
   Logo wall · Testimonials · Pricing · Final CTA */
const { Button: HsBtn } = window.ColaberryDesignSystem_098454;

/* ---- Stat band (scroll count-up; markup carries the fallback values) ---- */
function HomeStats() {
  const ref = React.useRef(null);
  const stats = [
    { n: 5000, suffix: '+', prefix: '', label: 'careers changed since 2012', em: true },
    { n: 49, suffix: '', prefix: '', label: 'countries with Colaberry learners' },
    { n: 98, suffix: '%', prefix: '', label: 'employment rate among graduates' },
    { n: 12, suffix: '', prefix: '', label: 'weeks from idea to working AI system' },
  ];
  const fmt = (v) => v.toLocaleString('en-US');
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const ctx = gsap.context(() => {
      ref.current.querySelectorAll('[data-count]').forEach((el) => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 1.05, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => { el.textContent = prefix + fmt(Math.round(obj.v)) + suffix; },
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
                ? <em data-count={s.n} data-suffix={s.suffix} data-prefix={s.prefix}>{s.prefix + fmt(s.n) + s.suffix}</em>
                : <span data-count={s.n} data-suffix={s.suffix} data-prefix={s.prefix}>{s.prefix + fmt(s.n) + s.suffix}</span>}
            </div>
            <div className="aw-stat__l">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Choose your path — three audience routes ---- */
function HomePaths() {
  const paths = [
    {
      c: 'var(--blue-500)', n: '01', icon: 'briefcase', kick: 'For working professionals',
      h: 'Use AI at work, starting now', href: 'working-professionals.html',
      li: ['Apply Claude to real business workflows', 'Research, analysis, planning & automation', 'No ML degree required'],
    },
    {
      c: 'var(--green-600)', n: '02', icon: 'sparkles', kick: 'For beginners & career switchers',
      h: 'Start AI from the ground up', href: 'beginners-career-switchers.html',
      li: ['Learn AI step by step with Claude', 'Guided, hands-on projects', 'Earn your Colaberry AI Certificate'],
    },
    {
      c: 'var(--red-500)', n: '03', icon: 'rocket', kick: 'For builders & founders',
      h: 'Turn your idea into a system', href: 'builders-founders.html',
      li: ['A clear 12-week build path', 'Build with Claude end to end', 'From concept to working product'],
    },
  ];
  return (
    <section className="aw-section" id="paths" data-screen-label="Choose your path" data-rv-group>
      <div className="home-paths__head">
        <div data-rv>
          <span className="aw-kicker aw-kicker--red"><span className="aw-kicker__n">01</span>Choose your path</span>
          <h2 className="aw-h2">One accelerator.<br />Three ways in</h2>
        </div>
        <p data-rv>Everyone learns with Claude, builds real projects, and joins through the same free Open House. Pick the path that sounds like you. The destination is the same: <strong>becoming an AI systems architect.</strong></p>
      </div>
      <div className="home-paths__grid">
        {paths.map((p, i) => (
          <a className="home-path" data-rv key={i} href={p.href} style={{ '--_c': p.c }}>
            <div className="home-path__top">
              <span className="home-path__icon"><I n={p.icon} s={26} /></span>
              <span className="home-path__n">{p.n}</span>
            </div>
            <span className="home-path__kick">{p.kick}</span>
            <h3 className="home-path__h">{p.h}</h3>
            <div className="home-path__list">
              {p.li.map((t, j) => (
                <span className="home-path__li" key={j}><I n="check" s={16} />{t}</span>
              ))}
            </div>
            <span className="home-path__cta">Explore this path<I n="arrow-right" s={17} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---- How it works — the 3-step spine ---- */
function HomeHow() {
  const steps = [
    { c: 'var(--blue-500)', n: '1', kick: 'Step 01', h: <React.Fragment>Learn with <em>Claude</em></React.Fragment>,
      p: 'Go straight to the source. Learn to use Claude as a real work partner for research, analysis, planning, and problem solving, guided by an Anthropic-trained team.', illo: <AwIlloLearn /> },
    { c: 'var(--green-600)', n: '2', kick: 'Step 02', h: <React.Fragment>Build <em>real projects</em></React.Fragment>,
      p: 'Skill comes from practice. You build real, guided projects that show how AI works in business, operations, and product. You learn by doing, not just watching.', illo: <AwIlloBuild /> },
    { c: 'var(--red-500)', n: '3', kick: 'Step 03', h: <React.Fragment>Deploy in the <em>real world</em></React.Fragment>,
      p: 'Ship something that matters. Move from concept to a working AI system you can explain, improve, and put in front of real users, over a focused 12-week build path.', illo: <AwIlloDeploy /> },
  ];
  return (
    <section className="aw-section" id="how" data-screen-label="How it works" data-rv-group>
      <div data-rv>
        <span className="aw-kicker aw-kicker--blue"><span className="aw-kicker__n">02</span>How it works</span>
        <h2 className="aw-h2">Learn. Build. <span className="is-red">Deploy</span></h2>
      </div>
      <div className="home-steps">
        {steps.map((s, i) => (
          <div className="home-step" data-rv key={i} style={{ '--_c': s.c }}>
            <div className="home-step__head">
              <span className="home-step__num">{s.n}</span>
              <span className="home-step__kick">{s.kick}</span>
            </div>
            <h3>{s.h}</h3>
            <p>{s.p}</p>
            <div className="home-step__media">{s.illo}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- Photo band — real cohort ---- */
function HomePhoto() {
  const ref = React.useRef(null);
  // Cinematic settle: the cohort photo eases from a gentle zoom to rest as it
  // reveals — one-time, clipped by the frame, skipped for reduced motion.
  React.useEffect(() => {
    if (!ref.current || !window.gsap || !window.ScrollTrigger) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const img = ref.current.querySelector('.home-photo__img');
    if (!img) return;
    const tw = gsap.from(img, {
      scale: 1.08, duration: 1.4, ease: 'power2.out', clearProps: 'transform',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
    return () => { if (tw.scrollTrigger) tw.scrollTrigger.kill(); tw.kill(); };
  }, []);
  const chips = [
    { icon: 'monitor', t: <React.Fragment><b>Live</b> · online</React.Fragment> },
    { icon: 'users', t: <React.Fragment><b>Mentor-led</b> cohorts</React.Fragment> },
    { icon: 'clock', t: <React.Fragment><b>90-min</b> Open House</React.Fragment> },
    { icon: 'award', t: <React.Fragment><b>5,000+</b> graduates</React.Fragment> },
  ];
  return (
    <div className="home-photo" data-rv-group ref={ref}>
      <div className="home-photo__layout">
        <div className="home-photo__text" data-rv>
          <span className="home-photo__kick">Inside the accelerator</span>
          <h3 className="home-photo__h">Real cohorts. Real projects. Real outcomes</h3>
          <div className="home-photo__stats">
            {chips.map((c, i) => (
              <span className="home-photo__stat" key={i}><I n={c.icon} s={15} />{c.t}</span>
            ))}
          </div>
        </div>
        <div className="home-photo__frame" data-rv>
          <img className="home-photo__img" src="../assets/photos/openhouse-cohort.png" alt="A Colaberry cohort working through an AI system design together" />
        </div>
      </div>
    </div>
  );
}

/* ---- Earn your Colaberry AI Certificate (reuses partner.css .bg-cert2) ----
   Props (from Home tweaks): bento, mood ('ink'|null), accentVars, accentName. */
function HomeCertificate({ bento = false, mood = null, accentVars = null, accentName = null } = {}) {
  const ref = React.useRef(null);
  const feats = [
    { icon: 'linkedin', c: 'green', t: 'Share it on LinkedIn', d: 'Showcase your AI build work on your professional profile.' },
    { icon: 'shield-check', c: 'blue', t: 'Verifiable credential', d: 'Every certificate carries a unique link that confirms completion.' },
    { icon: 'briefcase', c: 'red', t: 'Strengthen your resume', d: 'Prove applied AI skill through structured, hands-on projects.' },
  ];
  React.useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!window.gsap || !window.ScrollTrigger || reduce) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 86%', once: true }, defaults: { ease: 'power3.out' } });
      tl.fromTo('.bg-cdoc', { opacity: 0, x: 64, rotation: -9, scale: .93 }, { opacity: 1, x: 0, rotation: -1.6, scale: 1, duration: .9, clearProps: 'transform' })
        .from('.bg-cdoc__seal', { scale: 0, rotation: -90, duration: .5, ease: 'back.out(2)', clearProps: 'transform' }, '-=.3');
    }, ref);
    return () => ctx.revert();
  }, [bento, mood]);

  const badge = <span className="bg-cert2__badge"><I n="award" s={14} />Official certificate</span>;
  const heading = <h2 className="aw-h2">Earn your Colaberry<br />AI Certificate</h2>;
  const lead = <p className="bg-cert2__lead">Complete the membership, finish your guided projects, and receive a <strong>Colaberry-issued certificate</strong> that recognizes the real AI skills you have built.</p>;
  const featsEl = (
    <div className="bg-cert2__feats">
      {feats.map((f, i) => (
        <div className="bg-cert2__feat" key={i} style={{ '--_c': 'var(--' + f.c + '-600)' }}>
          <span className="bg-cert2__ficon"><I n={f.icon} s={20} /></span>
          <div>
            <span className="bg-cert2__ft">{f.t}</span>
            <span className="bg-cert2__fd">{f.d}</span>
          </div>
        </div>
      ))}
    </div>
  );
  const cta = (
    <span className="bg-cert2__cta">
      <Magnetic>
        <HsBtn size="lg" as="a" href={REGISTER_URL} target="_blank" rel="noopener" trailingIcon={<I n="arrow-right" s={18} />}>Start your certificate path</HsBtn>
      </Magnetic>
    </span>
  );
  const doc = (
    <div className="bg-cert2__right">
      <span className="bg-cert2__glow" aria-hidden="true" />
      <div className="bg-cdoc">
        <div className="bg-cdoc__bar">
          <img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry" className="bg-cdoc__logo" />
          <span className="bg-cdoc__no">No. CB-AI-2026-0148</span>
        </div>
        <span className="bg-cdoc__kick">Certificate of Completion</span>
        <h4 className="bg-cdoc__prog">AI SYSTEMS ARCHITECT</h4>
        <span className="bg-cdoc__issued">Issued to</span>
        <span className="bg-cdoc__name">Your Name</span>
        <p className="bg-cdoc__desc">Awarded for completing Colaberry's AI Systems Architect Accelerator, learning, building, and deploying with Claude.</p>
        <div className="bg-cdoc__foot">
          <div className="bg-cdoc__date"><span>Date of issue</span><b>30 March 2026</b></div>
          <div className="bg-cdoc__sign"><span className="bg-cdoc__signline" /><span>Colaberry School</span></div>
        </div>
      </div>
      <div className="bg-cdoc__seal">
        <img src="../assets/logo/colaberry-mark-white.png" alt="" aria-hidden="true" />
        <span>VERIFIED</span>
      </div>
    </div>
  );

  const cls = 'aw-section' + (bento ? ' is-bento' : '');
  const secProps = { className: cls, id: 'certificate', 'data-screen-label': 'Certificate', ref };
  if (mood) secProps['data-mood'] = mood;
  if (accentVars) secProps.style = accentVars;
  if (accentName) secProps['data-accent'] = accentName;

  return (
    <section {...secProps}>
      <div className="bg-cert2">
        {bento ? (
          <React.Fragment>
            <div className="cb2-intro">{badge}{heading}{lead}{cta}</div>
            <div className="cb2-feats">
              {feats.map((f, i) => (
                <div className="bg-cert2__feat" key={i} style={{ '--_c': 'var(--' + f.c + '-600)' }}>
                  <span className="bg-cert2__ficon"><I n={f.icon} s={20} /></span>
                  <div>
                    <span className="bg-cert2__ft">{f.t}</span>
                    <span className="bg-cert2__fd">{f.d}</span>
                  </div>
                </div>
              ))}
            </div>
            {doc}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="bg-cert2__left">
              {badge}
              {heading}
              {lead}
              {featsEl}
              {cta}
            </div>
            {doc}
          </React.Fragment>
        )}
      </div>
    </section>
  );
}

/* ---- Logo wall ---- */
function HomeLogos() {
  /* Local logo assets — Google/Microsoft/Amazon/Adobe from learn.colaberry.com's
     own set; the rest from Wikimedia Commons (PD-textlogo wordmarks). */
  const base = '../assets/logos/companies/';
  const logos = [
    { src: base + 'google.svg', alt: 'Google', h: 40 },
    { src: base + 'microsoft.svg', alt: 'Microsoft', h: 38 },
    { src: base + 'amazon.svg', alt: 'Amazon', h: 40 },
    { src: base + 'adobe.svg', alt: 'Adobe', h: 36 },
    { src: base + 'meta.svg', alt: 'Meta', h: 22 },
    { src: base + 'ibm.svg', alt: 'IBM', h: 22 },
    { src: base + 'accenture.svg', alt: 'Accenture', h: 24 },
    { src: base + 'cognizant.svg', alt: 'Cognizant', h: 22 },
    { src: base + 'bank-of-america.svg', alt: 'Bank of America', h: 17 },
  ];
  return (
    <div className="home-logos">
      <div className="home-logos__inner">
        <div className="home-logos__label"><b>Our graduates work at</b>top companies worldwide</div>
        <div className="home-logos__viewport">
          <div className="home-logos__track">
            <div className="home-logos__row">
              {logos.map((l, i) => (<img key={i} src={l.src} alt={l.alt} loading="lazy" style={{ '--h': l.h + 'px' }} />))}
            </div>
            <div className="home-logos__row" aria-hidden="true">
              {logos.map((l, i) => (<img key={i} src={l.src} alt="" loading="lazy" style={{ '--h': l.h + 'px' }} />))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Testimonials ---- */
function HomeTestimonials() {
  return (
    <section className="aw-section" id="reviews" data-screen-label="Reviews" data-rv-group>
      <div className="home-ts__head" data-rv>
        <span className="aw-kicker aw-kicker--green"><span className="aw-kicker__n">03</span>Graduate stories</span>
        <h2 className="aw-h2">Careers changed,<br />in their words</h2>
      </div>
      <div className="home-ts__grid">
        <div className="home-tcard home-tcard--feature" data-rv>
          <span className="home-tcard__stars">{[0,1,2,3,4].map((i) => <I key={i} n="star" s={18} />)}</span>
          <p className="home-tcard__quote">"Colaberry's project-based teaching enabled me to learn critical data skills and land a <span className="hl">rewarding career</span>."</p>
          <div className="home-tcard__by">
            <img className="home-tcard__avatar" src="../assets/avatars/person-1.png" alt="Kodjovi Togbey" />
            <span><span className="home-tcard__name">Kodjovi Togbey</span><span className="home-tcard__role">Colaberry Graduate · Data &amp; AI</span></span>
          </div>
        </div>
        <div className="home-tcol">
          <div className="home-tcard home-tcard--sm" data-rv>
            <p className="home-tcard__quote">I came in with no technical background. The guided projects made AI finally click, and I switched careers within the year.</p>
            <div className="home-tcard__by">
              <img className="home-tcard__avatar" src="../assets/avatars/person-1.png" alt="" />
              <span><span className="home-tcard__name">Maria Delgado</span><span className="home-tcard__role">Career switcher → AI Analyst</span></span>
            </div>
          </div>
          <div className="home-tcard home-tcard--sm" data-rv>
            <p className="home-tcard__quote">I had an idea for two years. In the 12-week build path I turned it into a working Claude-powered tool my team actually uses.</p>
            <div className="home-tcard__by">
              <img className="home-tcard__avatar" src="../assets/avatars/person-2.png" alt="" />
              <span><span className="home-tcard__name">Daniel Okeke</span><span className="home-tcard__role">Founder · Builders path</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Pricing strip ---- */
function HomePricing() {
  const tags = ['Cancel anytime', 'Live online sessions', 'Anthropic-trained team', 'Colaberry AI Certificate'];
  return (
    <div className="home-price" id="pricing" data-rv-group>
      <div className="home-price__inner" data-rv>
        <div>
          <div className="home-price__left">
            <span className="home-price__num">$149</span>
            <span className="home-price__per">/ month</span>
          </div>
          <p className="home-price__sub">Membership is <b>$149/month</b>. Every path begins inside the free Open House. No payment to attend.</p>
          <div className="home-price__tags">
            {tags.map((t, i) => (<span className="home-price__tag" key={i}><I n="check" s={14} />{t}</span>))}
          </div>
        </div>
        <Magnetic>
          <HsBtn size="lg" as="a" href={REGISTER_URL} target="_blank" rel="noopener" trailingIcon={<I n="arrow-right" s={18} />}>Join the free Open House</HsBtn>
        </Magnetic>
      </div>
    </div>
  );
}

/* ---- Final CTA + tagline ---- */
function HomeFinal() {
  return (
    <React.Fragment>
      <section className="aw-final aw-grain aw-grain--light" id="reserve" data-rv-group>
        <img className="aw-final__mark" src="../assets/logo/colaberry-mark-white.png" alt="" aria-hidden="true" />
        <div className="aw-final__inner">
          <span className="aw-final__kicker" data-rv>FREE OPEN HOUSE · LIVE ONLINE · MEMBERSHIP · $149/MO</span>
          <h2 className="aw-final__h" data-rv>Join the free<br />Open House</h2>
          <p className="aw-final__p" data-rv>See inside the AI Systems Architect Accelerator. Meet the Anthropic-trained team, see real projects, and find the path that fits, whether you're a professional, a career switcher, or a builder.</p>
          <span className="aw-final__btn" data-rv>
            <Magnetic>
              <HsBtn size="lg" as="a" href={REGISTER_URL} target="_blank" rel="noopener" trailingIcon={<I n="arrow-right" s={18} />}>Reserve my free seat</HsBtn>
            </Magnetic>
          </span>
          <div className="aw-final__meta" data-rv>LEARN WITH CLAUDE · BUILD REAL SYSTEMS · DEPLOY IN THE REAL WORLD</div>
        </div>
      </section>
      <div className="home-tagline">
        <span>Learn with <span className="is-blue">Claude</span>. Build through <span className="is-green">Colaberry</span>. Deploy in the <span className="is-red">real world</span>.</span>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { HomeStats, HomePaths, HomeHow, HomePhoto, HomeCertificate, HomeLogos, HomeTestimonials, HomePricing, HomeFinal });
