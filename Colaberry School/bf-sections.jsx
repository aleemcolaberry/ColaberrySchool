/* Builders & Founders — Your idea needs a build path, Who it's for,
   Build with Claude, Open House explainer. Copy verbatim from Sohail's draft. */
const { Button: BfSecBtn } = window.ColaberryDesignSystem_098454;

/* "Your Idea Needs A Build Path" — the gap + the things people want to build */
function BfGap() {
  const builds = [
    { icon: 'package', t: 'A product' },
    { icon: 'workflow', t: 'A business workflow' },
    { icon: 'zap', t: 'An automation' },
    { icon: 'headset', t: 'A customer support tool' },
    { icon: 'file-text', t: 'A content system' },
    { icon: 'flask-conical', t: 'A research assistant' },
    { icon: 'building-2', t: 'An internal business solution' },
  ];
  return (
    <section className="aw-section" data-rv-group>
      <div className="wp-gap">
        <div data-rv>
          <span className="aw-kicker aw-kicker--green"><span className="aw-kicker__n">01</span>The starting point</span>
          <h2 className="aw-h2">Your idea needs<br />a build path</h2>
          <p className="wp-gap__p">Many people have AI ideas. Few know how to turn them into something real. <strong>This membership gives you the structure, tools, and guidance to build.</strong> You may want to build:</p>
        </div>
        <div className="wp-verbs" data-rv>
          {builds.map((v, i) => (
            <span className="wp-verb" key={i}><I n={v.icon} />{v.t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* "Built For Builders And Idea Owners" — editorial audience manifest */
function BfWho() {
  const accents = ['var(--green-600)', 'var(--blue-500)', 'var(--red-500)'];
  const roles = [
    'Entrepreneurs', 'Founders', 'Freelancers', 'Consultants', 'Business owners',
    'Creators', 'Technical professionals', 'Anyone with an idea they want to build using AI',
  ];
  return (
    <section className="aw-section" data-rv-group>
      <div className="wp-who2__head">
        <div data-rv>
          <span className="aw-kicker aw-kicker--blue"><span className="aw-kicker__n">02</span>Who it's for</span>
          <h2 className="aw-h2">Built for builders<br />and idea owners</h2>
        </div>
        <div data-rv>
          <p className="wp-who2__lead">You do not need to have everything figured out. <strong>You need a clear path, practical guidance, and a place to start building.</strong></p>
          <span className="wp-who2__tag"><I n="sparkles" s={13} />An idea is enough to start</span>
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
        <span className="wp-who2__cta-q">Sound like you?</span>
        <a className="wp-who2__cta-link" href="https://form.jotform.com/251193437881463">Join the free Open House<I n="arrow-right" s={18} /></a>
      </div>
    </section>
  );
}

/* "Build With Claude" — capability grid */
function BfBuild() {
  const caps = [
    { icon: 'lightbulb', c: 'blue', t: 'Idea development' },
    { icon: 'search', c: 'green', t: 'Research and planning' },
    { icon: 'workflow', c: 'red', t: 'Workflow design' },
    { icon: 'file-text', c: 'blue', t: 'Project documentation' },
    { icon: 'pen-tool', c: 'green', t: 'AI-assisted prototyping' },
    { icon: 'puzzle', c: 'red', t: 'Problem solving' },
    { icon: 'rocket', c: 'blue', t: 'Implementation support' },
  ];
  return (
    <section className="aw-section" id="build-with-claude" data-screen-label="Build with Claude" data-rv-group>
      <div className="bf-build__head">
        <div data-rv>
          <span className="aw-kicker aw-kicker--red"><span className="aw-kicker__n">03</span>Inside the membership</span>
          <h2 className="aw-h2">Build with Claude</h2>
        </div>
        <p className="bf-build__lead" data-rv>Inside the membership, you will learn how to use Claude across the whole journey: <strong>from scattered ideas to a clear build plan.</strong></p>
      </div>
      <div className="bf-caps">
        {caps.map((c, i) => (
          <div className="bf-cap" data-rv key={i} style={{ '--_c': 'var(--' + c.c + '-' + (c.c === 'green' ? '600' : '500') + ')' }}>
            <span className="bf-cap__icon"><I n={c.icon} s={22} /></span>
            <span className="bf-cap__t">{c.t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* "What You Will Explore In The Free Open House" — checklist + CTA */
function BfExplore() {
  const items = [
    <React.Fragment>What is included inside the AI Membership</React.Fragment>,
    <React.Fragment>How builders use Claude to develop ideas</React.Fragment>,
    <React.Fragment>How live projects help you move from concept to execution</React.Fragment>,
    <React.Fragment>How the 12-week build path works</React.Fragment>,
    <React.Fragment>How to get started for <b>$149/month</b></React.Fragment>,
  ];
  return (
    <section className="aw-section" id="explore" data-rv-group>
      <div className="wp-explore">
        <div className="wp-explore__aside" data-rv>
          <span className="aw-kicker aw-kicker--red"><span className="aw-kicker__n">05</span>The Open House</span>
          <h2 className="aw-h2">What you'll explore</h2>
          <div className="wp-explore__time"><I n="clock" s={15} />90 minutes · live · free</div>
          <Magnetic>
            <BfSecBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Reserve my free seat</BfSecBtn>
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

Object.assign(window, { BfGap, BfWho, BfBuild, BfExplore });
