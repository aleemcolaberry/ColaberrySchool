/* Beginners & Career Switchers — Gap, Who, Pillars, Open House explore */

/* "Earn Your Colaberry AI Certificate" — split card (proof + branded mock).
   The certificate on the right is a TEMPORARY CSS mock — swap the .bg-cdoc
   block for an <img> once the real Colaberry certificate art is supplied. */
const { Button: BgCertBtn } = window.ColaberryDesignSystem_098454;
function BgCertificate() {
  const ref = React.useRef(null);
  const feats = [
    { icon: 'linkedin', c: 'green', t: 'Share it on LinkedIn', d: 'Showcase your AI learning achievements on your professional profile.' },
    { icon: 'shield-check', c: 'blue', t: 'Verifiable credential', d: 'Every certificate carries a unique link that confirms your completion.' },
    { icon: 'briefcase', c: 'red', t: 'Strengthen your resume', d: 'Prove applied AI knowledge through structured, hands-on coursework.' },
  ];
  React.useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!window.gsap || !window.ScrollTrigger || reduce) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 84%', once: true }, defaults: { ease: 'power3.out' } });
      tl.from('.bg-cert2__badge', { opacity: 0, y: 16, duration: .45 })
        .from('.bg-cert2__left .aw-h2', { opacity: 0, y: 28, duration: .6 }, '-=.2')
        .from('.bg-cert2__lead', { opacity: 0, y: 20, duration: .5 }, '-=.35')
        .from('.bg-cert2__feat', { opacity: 0, x: -20, duration: .5, stagger: .13 }, '-=.25')
        .from('.bg-cert2__cta', { opacity: 0, y: 16, duration: .45 }, '-=.2')
        .fromTo('.bg-cdoc', { opacity: 0, x: 72, rotation: -9, scale: .93 }, { opacity: 1, x: 0, rotation: -1.6, scale: 1, duration: .9, ease: 'power3.out', clearProps: 'transform' }, '-=1.1')
        .from('.bg-cdoc__seal', { scale: 0, rotation: -90, duration: .55, ease: 'back.out(2)', clearProps: 'transform' }, '-=.3');
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section className="aw-section" id="certificate" data-screen-label="Certificate" ref={ref}>
      <div className="bg-cert2">
        <div className="bg-cert2__left">
          <span className="bg-cert2__badge"><I n="award" s={14} />Official certificate</span>
          <h2 className="aw-h2">Earn your Colaberry<br />AI Certificate</h2>
          <p className="bg-cert2__lead">Complete the membership, finish your guided projects, and receive a <strong>Colaberry-issued certificate</strong> that recognizes the real AI skills you have built.</p>
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
          <span className="bg-cert2__cta">
          <Magnetic>
            <BgCertBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Start your certificate path</BgCertBtn>
          </Magnetic>
          </span>
        </div>
        <div className="bg-cert2__right">
          <span className="bg-cert2__glow" aria-hidden="true" />
          {/* TEMPORARY mock — replace with <img src="..." className="bg-cdoc" alt="Colaberry certificate"/> */}
          <div className="bg-cdoc">
            <div className="bg-cdoc__bar">
              <img src={(window.__resources && window.__resources.logoColor) || "../assets/logo/colaberry-horizontal.png"} alt="Colaberry" className="bg-cdoc__logo" />
              <span className="bg-cdoc__no">No. CB-AI-2026-0148</span>
            </div>
            <span className="bg-cdoc__kick">Certificate of Completion</span>
            <h4 className="bg-cdoc__prog">AI MEMBERSHIP PROGRAM</h4>
            <span className="bg-cdoc__issued">Issued to</span>
            <span className="bg-cdoc__name">Your Name</span>
            <p className="bg-cdoc__desc">Awarded for completing Colaberry's AI Membership: learning AI with Claude through guided, hands-on projects.</p>
            <div className="bg-cdoc__foot">
              <div className="bg-cdoc__date"><span>Date of issue</span><b>30 March 2026</b></div>
              <div className="bg-cdoc__sign"><span className="bg-cdoc__signline" /><span>Colaberry School</span></div>
            </div>
          </div>
          <div className="bg-cdoc__seal">
            <img src={(window.__resources && window.__resources.markWhite) || "../assets/logo/colaberry-mark-white.png"} alt="" aria-hidden="true" />
            <span>VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* "You Do Not Need To Be An AI Expert" — the stuck statements + the answer */
function BgGap() {
  const stuck = [
    { icon: 'wrench', t: 'Which tools to use' },
    { icon: 'list-todo', t: 'What to learn first' },
    { icon: 'sparkles', t: 'How Claude works' },
    { icon: 'route', t: 'Turning learning into skills' },
  ];
  return (
    <section className="aw-section" data-rv-group>
      <div className="wp-gap">
        <div data-rv>
          <span className="aw-kicker aw-kicker--green"><span className="aw-kicker__n">01</span>The starting point</span>
          <h2 className="aw-h2">You do not need to<br />be an AI expert</h2>
          <p className="wp-gap__p">Many people want to learn AI, but feel stuck. They do not know which tools to use. They do not know what to learn first. They do not know how Claude works. They do not know how to turn learning into real skills. <strong>This membership gives you a clear starting point, guided learning, and real practice.</strong></p>
        </div>
        <div className="wp-verbs" data-rv>
          {stuck.map((v, i) => (
            <span className="wp-verb" key={i}><I n={v.icon} />{v.t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* "Built For Beginners And Career Switchers" — editorial audience manifest */
function BgWho() {
  const accents = ['var(--green-600)', 'var(--blue-500)', 'var(--red-500)'];
  const roles = [
    'Students', 'Recent graduates', 'Career switchers', 'Job seekers',
    'Non-technical professionals', 'Early-career professionals', 'Anyone starting from the ground up',
  ];
  return (
    <section className="aw-section" data-rv-group>
      <div className="wp-who2__head">
        <div data-rv>
          <span className="aw-kicker aw-kicker--blue"><span className="aw-kicker__n">02</span>Who it's for</span>
          <h2 className="aw-h2">Built for beginners<br />and career switchers</h2>
        </div>
        <div data-rv>
          <p className="wp-who2__lead">You do not need advanced technical experience. <strong>You need the right guidance and a practical learning path.</strong></p>
          <span className="wp-who2__tag"><I n="sparkles" s={13} />No experience required</span>
        </div>
      </div>
      <div className="wp-roles2">
        {roles.map((r, i) => (
          <span className="wp-rolechip" data-rv key={i} style={{ '--_c': accents[i % 3] }}>
            <span className="wp-rolechip__dot" />
            <span className="wp-rolechip__t">{r}</span>
          </span>
        ))}
      </div>
      <div className="wp-who2__cta" data-rv>
        <span className="wp-who2__cta-q">See yourself on this list?</span>
        <a className="wp-who2__cta-link" href="https://form.jotform.com/251193437881463">Join the free Open House<I n="arrow-right" s={18} /></a>
      </div>
    </section>
  );
}

/* "Learn AI Step By Step" + "Build Through Guided Projects" — two editorial pillars */
function BgPillars() {
  return (
    <div className="wp-pillars">
      {/* Learn AI step by step */}
      <section className="wp-pillar" style={{ '--_c': 'var(--blue-500)' }} data-rv-group>
        <div className="wp-pillar__inner">
          <div className="wp-pillar__body" data-rv>
            <span className="wp-pillar__big" aria-hidden="true">01</span>
            <span className="aw-kicker aw-kicker--blue"><span className="wp-pillar__tick" />Inside the membership</span>
            <h3>Learn AI <em>step by step</em></h3>
            <p className="wp-pillar__goal">The goal is not to overwhelm you. The goal is to help you build confidence one step at a time.</p>
            <div className="wp-pillar__chips">
              {['What AI tools can do', 'How Claude works', 'Research, writing & planning', 'Problem solving with AI', 'How AI workflows are created', 'How real AI projects are built'].map((c, i) => (
                <span className="wp-pillar__chip" key={i}>{c}</span>
              ))}
            </div>
          </div>
          <div className="wp-pillar__media" data-rv><AwIlloLearn /></div>
        </div>
      </section>

      {/* Build through guided projects */}
      <section className="wp-pillar" style={{ '--_c': 'var(--green-600)' }} data-rv-group>
        <div className="wp-pillar__inner">
          <div className="wp-pillar__body" data-rv>
            <span className="wp-pillar__big" aria-hidden="true">02</span>
            <span className="aw-kicker aw-kicker--green"><span className="wp-pillar__tick" />Inside the membership</span>
            <h3>Build through <em>guided projects</em></h3>
            <p>Watching videos is not enough. To build real AI skills, you need practice. Inside the membership, you will work on guided projects that help you apply what you learn. <strong>You will learn by doing. You will start creating work you can explain, improve, and show.</strong></p>
            <div className="wp-pillar__chips">
              {['Learn by doing', 'Apply what you learn', 'Work you can explain', 'Improve & show'].map((c, i) => (
                <span className="wp-pillar__chip" key={i}>{c}</span>
              ))}
            </div>
          </div>
          <div className="wp-pillar__media" data-rv><AwIlloBuild /></div>
        </div>
      </section>
    </div>
  );
}

/* "What You Will Explore In The Free Open House" — checklist + CTA */
const { Button: BgExBtn } = window.ColaberryDesignSystem_098454;
function BgExplore() {
  const items = [
    <React.Fragment>What is included inside the AI Membership</React.Fragment>,
    <React.Fragment>How beginners can start learning AI with Claude</React.Fragment>,
    <React.Fragment>How guided projects help you build practical skills</React.Fragment>,
    <React.Fragment>How career switchers can use AI to create new opportunities</React.Fragment>,
    <React.Fragment>How to get started for <b>$149/month</b></React.Fragment>,
  ];
  return (
    <section className="aw-section" id="explore" data-rv-group>
      <div className="wp-explore">
        <div className="wp-explore__aside" data-rv>
          <span className="aw-kicker aw-kicker--red"><span className="aw-kicker__n">04</span>The Open House</span>
          <h2 className="aw-h2">What you'll explore</h2>
          <div className="wp-explore__time"><I n="clock" s={15} />90 minutes · live · free</div>
          <Magnetic>
            <BgExBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Reserve my free seat</BgExBtn>
          </Magnetic>
        </div>
        <div className="wp-elist">
          {items.map((t, i) => (
            <div className="wp-eitem" data-rv key={i}>
              <span className="wp-eitem__n">{'0' + (i + 1)}</span>
              <span className="wp-eitem__t">{t}</span>
              <span className="wp-eitem__c"><I n="check" s={20} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BgCertificate, BgGap, BgWho, BgPillars, BgExplore });
