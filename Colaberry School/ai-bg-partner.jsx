/* Anthropic / Claude Partner Network — badge, proof cards, partnership band.
   Verified facts per "course-links-and-rules" doc (do not embellish):
   • 10 Colaberry team members completed the same 4-course Anthropic Academy
     learning path (Agent Skills · Claude API · MCP · Claude Code in Action).
   • That completion gate unlocked Claude Partner Network membership.
   • Skilljar issues per-course completion certificates — there is NO
     "Anthropic certification" of the team; say "trained", never "certified".
   • The path covers the Claude Certified Architect exam blueprint (per
     Anthropic Partner Support, Mar 18 2026). */

const { Button: BgPartBtn } = window.ColaberryDesignSystem_098454; // (kept for badge/nav use)

/* Generic radiant "spark" — evokes the Claude/Anthropic mark without copying
   its exact trademark geometry. Used inside Colaberry-styled partner moments. */
function AnthropicGlyph({ s = 18, color = 'currentColor', stroke = 2.4 }) {
  const rays = [];
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    const inner = i % 2 === 0 ? 3.4 : 4.4;
    const outer = i % 2 === 0 ? 10.4 : 8.6;
    rays.push(
      <line key={i}
        x1={12 + Math.cos(a) * inner} y1={12 + Math.sin(a) * inner}
        x2={12 + Math.cos(a) * outer} y2={12 + Math.sin(a) * outer}
        stroke={color} strokeWidth={stroke} strokeLinecap="round" />
    );
  }
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">{rays}</svg>;
}

/* The hero/nav co-brand badge */
function BgPartnerBadge({ href = '#partner' }) {
  return (
    <a className="bg-partbadge" href={href}>
      <span className="bg-partbadge__tile"><AnthropicGlyph s={18} color="#fff" /></span>
      <span className="bg-partbadge__tx">
        <b>Member · Claude Partner Network</b>
        <span>Colaberry × Anthropic · Certified team</span>
      </span>
    </a>
  );
}

/* Two Coursiv-style proof cards beneath the hero */
function BgProofCards() {
  return (
    <div className="bg-proof">
      <a className="bg-proofcard" href="#partner">
        <span className="bg-proofcard__media">
          <span className="bg-seal">
            <AnthropicGlyph s={26} color="var(--anthropic)" />
            <span className="bg-seal__chk"><I n="check" s={12} /></span>
          </span>
        </span>
        <span className="bg-proofcard__body">
          <span className="bg-proofcard__t">Anthropic Academy trained</span>
          <span className="bg-proofcard__d">A 10-person cohort completed all <b>4 Academy courses</b>, in full.</span>
        </span>
        <span className="bg-proofcard__arrow"><I n="arrow-right" s={20} /></span>
      </a>
      <a className="bg-proofcard" href="#partner">
        <span className="bg-proofcard__media">
          <span className="bg-ptile"><AnthropicGlyph s={28} color="#fff" /></span>
        </span>
        <span className="bg-proofcard__body">
          <span className="bg-proofcard__t">Claude Partner Network</span>
          <span className="bg-proofcard__d">Colaberry holds <b>confirmed partner status</b> with Anthropic.</span>
        </span>
        <span className="bg-proofcard__arrow"><I n="arrow-right" s={20} /></span>
      </a>
    </div>
  );
}

/* The full "official partnership" band.
   Props (from Home tweaks): bento, accentVars, accentName. */
function BgPartner({ bento = false, accentVars = null, accentName = null } = {}) {
  const ref = React.useRef(null);
  const stats = [
    { count: 10, l: 'team members completed the training cohort' },
    { count: 4, l: 'Anthropic Academy courses, each completed in full' },
    { check: true, l: 'Claude Partner Network member' },
  ];
  React.useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!window.gsap || !window.ScrollTrigger || reduce) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 84%', once: true }, defaults: { ease: 'power3.out' } });
      tl.from('.bg-partband__kick', { opacity: 0, y: 18, duration: .5 })
        .from('.bg-partband h2', { opacity: 0, y: 30, duration: .7 }, '-=.25')
        .from('.bg-partband__p', { opacity: 0, y: 22, duration: .6 }, '-=.45')
        .from('.bg-partstat', { opacity: 0, y: 26, scale: .9, duration: .55, stagger: .12, ease: 'back.out(1.5)' }, '-=.3')
        .fromTo('.bg-certbig', { opacity: 0, y: 54, rotation: -10, scale: .9 }, { opacity: 1, y: 0, rotation: -1.4, scale: 1, duration: .9, ease: 'back.out(1.3)', clearProps: 'transform' }, '-=.9')
        .from('.bg-certghost', { opacity: 0, duration: .6, stagger: .14, clearProps: 'opacity' }, '-=.45')
        .from('.bg-lp__row', { opacity: 0, x: 22, duration: .45, stagger: .1, clearProps: 'transform,opacity' }, '-=.35')
        .from('.bg-certbig__seal', { scale: 0, rotation: -80, duration: .55, ease: 'back.out(2)', clearProps: 'transform' }, '-=.2');
    }, ref);
    return () => ctx.revert();
  }, []);
  const kick = (
    <span className="bg-partband__kick"><AnthropicGlyph s={17} color="var(--anthropic)" />Official partnership</span>
  );
  const heading = (
    <h2>Learn Claude straight<br /><em>from the source</em></h2>
  );
  const para = (
    <p className="bg-partband__p">Most schools teach <i>about</i> AI. We give you the source. Your membership includes access to <b>Anthropic Academy's four-course learning path</b>: agent skills, the Claude API, Model Context Protocol, and Claude Code. It's the same path a 10-person Colaberry cohort completed to earn <b>membership in the Claude Partner Network</b>.</p>
  );
  const statsEl = (
    <div className="bg-partstats">
      {stats.map((s, i) => (
        <div className="bg-partstat" key={i}>
          <div className="bg-partstat__n">{s.check ? <I n="check" s={30} /> : s.count}</div>
          <div className="bg-partstat__l">{s.l}</div>
        </div>
      ))}
    </div>
  );
  const cert = (
    <div className="bg-certwrap">
      {/* Ghost cards behind the plaque — more learning paths, same membership */}
      <div className="bg-certghost bg-certghost--b" aria-hidden="true"></div>
      <div className="bg-certghost bg-certghost--a" aria-hidden="true"><span>More paths · same membership</span></div>
      <div className="bg-certbig">
        <div className="bg-certbig__head">
          <span className="bg-certbig__brand"><AnthropicGlyph s={15} color="var(--anthropic)" />Anthropic Academy</span>
          <span className="bg-certbig__id">CPN · 2026</span>
        </div>
        <span className="bg-certbig__kick">Anthropic Academy · included with membership</span>
        <h4 className="bg-certbig__name">Your four-course learning path</h4>
        <div className="bg-lp">
          {['Introduction to Agent Skills', 'Building with the Claude API', 'Introduction to Model Context Protocol', 'Claude Code in Action'].map((c, i) => (
            <div className="bg-lp__row" key={i}>
              <span className="bg-lp__n">{'0' + (i + 1)}</span>
              <span className="bg-lp__t">{c}</span>
              <span className="bg-lp__chk"><I n="check" s={15} /></span>
            </div>
          ))}
        </div>
        <p className="bg-certbig__awarded">The same path a <b>10-person Colaberry cohort</b> completed. It also covers the Claude Certified Architect exam blueprint.</p>
        <div className="bg-certbig__foot">
          <span className="bg-certbig__seal"><AnthropicGlyph s={24} color="#fff" /></span>
          <span className="bg-certbig__sig">
            <span className="bg-certbig__sigline" />
            <span className="bg-certbig__siglabel">Claude Partner Network</span>
          </span>
        </div>
      </div>
    </div>
  );

  const cls = 'bg-partband aw-grain aw-grain--light' + (bento ? ' is-bento' : '');
  const secProps = { className: cls, id: 'partner', 'data-screen-label': 'Partnership', ref };
  if (accentVars) secProps.style = accentVars;
  if (accentName) secProps['data-accent'] = accentName;

  return (
    <section {...secProps}>
      <span className="bg-partband__glow" aria-hidden="true" />
      <div className="bg-partband__inner">
        {bento ? (
          <React.Fragment>
            <div className="bg-pt-intro">{kick}{heading}{para}</div>
            {statsEl}
            {cert}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              {kick}
              {heading}
              {para}
              {statsEl}
            </div>
            {cert}
          </React.Fragment>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { AnthropicGlyph, BgPartnerBadge, BgProofCards, BgPartner });
