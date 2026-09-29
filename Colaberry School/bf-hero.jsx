/* Builders & Founders — Hero, Reg card, Marquee, Stats */
const { Button: BfBtn, Input: BfInput, Avatar: BfAvatar } = window.ColaberryDesignSystem_098454;

const BF_DATE = 'Live online · 90 minutes';

/* On submit we capture email + mobile and redirect to the thank-you page.
   Swap this for the real OpenHouseModal → /api/leads POST at integration time. */
const BF_THANKYOU = 'https://form.jotform.com/251193437881463';

function BfRegCard() {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = React.useState({});
  const [busy, setBusy] = React.useState(false);

  const set = (k) => (e) => {
    let v = e.target.value;
    if (k === 'phone') {
      const d = v.replace(/\D/g, '').replace(/^1/, '').slice(0, 10);
      v = d.length > 6 ? '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6)
        : d.length > 3 ? '(' + d.slice(0, 3) + ') ' + d.slice(3)
        : d;
    }
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((er) => (er[k] ? { ...er, [k]: null } : er));
  };

  const submit = (e) => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    const er = {};
    if (!form.name.trim()) er.name = 'Please add your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) er.email = form.email.trim() ? 'Enter a valid email address.' : 'Please add your email.';
    if (digits.length !== 10) er.phone = form.phone.trim() ? 'Enter a 10-digit US mobile number.' : 'Please add your mobile number.';
    if (Object.keys(er).length) { setErrors(er); return; }
    setBusy(true);
    const q = new URLSearchParams({ name: form.name.trim(), email: form.email.trim(), phone: '+1' + digits });
    window.location.href = BF_THANKYOU + '?' + q.toString();
  };
  React.useEffect(() => { if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(); }, []);

  const firstError = errors.name || errors.email || errors.phone;

  return (
    <div className="lead-card">
      <div className="lead-card__top">
        <span className="lead-card__live"><span className="lead-card__dot" />Live · Free Open House</span>
        <span className="lead-card__when"><I n="clock" s={14} />90 min · online</span>
      </div>
      <div className="lead-card__body">
        <h2 className="lead-card__h">Save your free seat</h2>
        <p className="lead-card__sub">Bring your idea. See how builders like you turn ideas into shipped AI systems.</p>
        <form className="lead-card__form" onSubmit={submit} noValidate>
          <div className="lead-card__field" data-invalid={errors.name ? 'true' : undefined}>
            <span className="lead-card__field-ic"><I n="user" s={18} /></span>
            <input className="lead-card__input" type="text" autoComplete="name" name="name"
              placeholder="Full name" aria-label="Your full name"
              value={form.name} onChange={set('name')} />
          </div>
          <div className="lead-card__field" data-invalid={errors.email ? 'true' : undefined}>
            <span className="lead-card__field-ic"><I n="mail" s={18} /></span>
            <input className="lead-card__input" type="email" inputMode="email" autoComplete="email" name="email"
              placeholder="Email address" aria-label="Your email"
              value={form.email} onChange={set('email')} />
          </div>
          <div className="lead-card__field" data-invalid={errors.phone ? 'true' : undefined}>
            <span className="lead-card__field-ic"><I n="smartphone" s={18} /></span>
            <span className="lead-card__prefix">+1</span>
            <input className="lead-card__input" type="tel" inputMode="tel" autoComplete="tel-national" name="phone"
              placeholder="(555) 123-4567" aria-label="Your US mobile number"
              value={form.phone} onChange={set('phone')} />
          </div>
          {firstError ? <p className="lead-card__err"><I n="alert-circle" s={14} />{firstError}</p> : null}
          <Magnetic>
            <BfBtn type="submit" size="lg" fullWidth disabled={busy} trailingIcon={<I n="arrow-right" s={18} />}>{busy ? 'Saving your seat…' : 'Save my free seat'}</BfBtn>
          </Magnetic>
        </form>
        <p className="lead-card__fine"><I n="shield-check" s={14} />Free · we text your invite and join link · no spam, ever</p>
      </div>
    </div>
  );
}

function BfHero() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    let ctx = null;
    const cancel = awWhenVisible(() => {
      if (!ref.current) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
        tl.from(ref.current.querySelector('.bg-partbadge'), { opacity: 0, y: 10, duration: .5 }, 0)
          .from(ref.current.querySelectorAll('.wp-line__in'), { yPercent: 115, duration: .9, stagger: .12 }, .12)
          .from(ref.current.querySelectorAll('.aw-hero__sub, .wp-hero__price, .wp-hero__cta, .wp-hero__trust'),
            { opacity: 0, y: 22, duration: .65, stagger: .1 }, '-=.4')
          .from(ref.current.querySelector('.aw-hero__card'), { opacity: 0, y: 34, duration: .8 }, '-=.5')
          .from(ref.current.querySelectorAll('.bg-proof .bg-proofcard'), { opacity: 0, y: 24, duration: .6, stagger: .12 }, '-=.45');
      }, ref);
    });
    return () => { cancel(); if (ctx) ctx.revert(); };
  }, []);

  const Badge = window.BgPartnerBadge;
  const Proof = window.BgProofCards;
  return (
    <section className="aw-hero aw-grain" ref={ref} id="top">
      <AwCanvas />
      <div className="aw-hero__stack">
      <div className="aw-hero__grid">
        <div className="aw-hero__copy">
          {Badge ? <Badge /> : null}
          <h1 className="wp-hero__h1" aria-label="Turn your AI idea into a working system">
            <span className="wp-line" aria-hidden="true"><span className="wp-line__mask"><span className="wp-line__in">Turn your AI idea</span></span></span>
            <span className="wp-line" aria-hidden="true"><span className="wp-line__mask"><span className="wp-line__in">into a <em>working system</em></span></span></span>
          </h1>
          <p className="aw-hero__sub">You have an idea. Now you need the structure, tools, and guidance to build it. As a certified member of the <strong>Claude Partner Network</strong>, Colaberry helps builders, entrepreneurs, and idea owners use Claude, live projects, and guided support to turn ideas into real AI-powered systems.</p>
          <p className="wp-hero__price">
            <span className="wp-hero__price-ic"><I n="ticket" s={14} /></span>
            <span className="wp-hero__price-tx">Membership starts at <b><span>$149</span>/month</b></span>
          </p>
          <div className="wp-hero__trust">
            <div className="cb-avatar-group">
              <BfAvatar name="Mika Rivera" size="sm" style={{ background: 'var(--green-700)' }} />
              <BfAvatar name="Owen Brooks" size="sm" style={{ background: 'var(--blue-600)' }} />
              <BfAvatar name="Ada Lovelace" size="sm" style={{ background: 'var(--red-600)' }} />
              <BfAvatar name="Sam Okafor" size="sm" style={{ background: 'var(--blue-700)' }} />
            </div>
            <span className="wp-hero__trust-label"><b>5,000+</b> learners supported since 2012 · Texas Workforce Commission approved</span>
          </div>
        </div>
        <div className="aw-hero__card">
          <BfRegCard />
        </div>
      </div>
      {Proof ? <Proof /> : null}
      </div>
    </section>
  );
}

function BfMarquee() {
  const items = [
    <span key="a">Certified <em className="is-blue">Claude Partner Network</em></span>,
    <span key="b">Turn ideas into <em className="is-green">working systems</em></span>,
    <span key="c">From idea to <em className="is-red">build plan</em></span>,
    <span key="d">Anthropic Academy-trained team</span>,
    <span key="e">Membership · $149/month</span>,
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

function BfStats() {
  const ref = React.useRef(null);
  const stats = [
    { n: 5000, suffix: '+', label: 'learners supported since 2012', em: true },
    { n: 49, suffix: '', label: 'countries with Colaberry learners' },
    { n: 149, suffix: '', prefix: '$', label: 'per month to get started' },
    { n: 12, suffix: '', label: 'week guided build path' },
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
                ? <em data-count={s.n} data-suffix={s.suffix} data-prefix={s.prefix || ''}>{(s.prefix || '') + fmt(s.n) + s.suffix}</em>
                : <span data-count={s.n} data-suffix={s.suffix} data-prefix={s.prefix || ''}>{(s.prefix || '') + fmt(s.n) + s.suffix}</span>}
            </div>
            <div className="aw-stat__l">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { BfHero, BfRegCard, BfMarquee, BfStats, BF_DATE, BF_THANKYOU });
