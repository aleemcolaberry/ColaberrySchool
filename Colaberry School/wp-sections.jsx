/* Working Professionals — Gap, Roles, Pillars, Open House explore */

/* "AI Is No Longer Optional" — statement + the verbs AI is already touching */
function WpGap() {
  const verbs = [
    { icon: 'search', t: 'Research' },
    { icon: 'pen-line', t: 'Write' },
    { icon: 'bar-chart-3', t: 'Analyze' },
    { icon: 'calendar-range', t: 'Plan' },
    { icon: 'workflow', t: 'Automate' },
    { icon: 'git-branch', t: 'Decide' },
  ];
  return (
    <section className="aw-section" data-rv-group>
      <div className="wp-gap">
        <div data-rv>
          <span className="aw-kicker aw-kicker--red"><span className="aw-kicker__n">01</span>The shift</span>
          <h2 className="aw-h2">AI is no longer<br />optional</h2>
          <p className="wp-gap__p">AI is already changing how teams research, write, analyze, plan, automate, and make decisions. Most professionals are experimenting with AI tools. <strong>Very few are learning how to apply AI to real business workflows.</strong> That is the gap this membership is designed to close.</p>
        </div>
        <div className="wp-verbs" data-rv>
          {verbs.map((v, i) => (
            <span className="wp-verb" key={i}><I n={v.icon} />{v.t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* "Built For Working Professionals" — editorial role manifest */
function WpWho() {
  const accents = ['var(--blue-500)', 'var(--green-600)', 'var(--red-500)'];
  const roles = [
    'Business Analysts', 'Project Managers', 'Product Managers', 'Operations Professionals',
    'Marketing Professionals', 'HR Professionals', 'Consultants', 'Managers & Team Leads',
  ];
  return (
    <section className="aw-section" data-rv-group>
      <div className="wp-who2__head">
        <div data-rv>
          <span className="aw-kicker aw-kicker--blue"><span className="aw-kicker__n">02</span>Who it's for</span>
          <h2 className="aw-h2">Built for working<br />professionals</h2>
        </div>
        <div data-rv>
          <p className="wp-who2__lead">You do not need to become a machine learning engineer. <strong>You need practical AI skills you can apply at work.</strong></p>
          <span className="wp-who2__tag"><I n="sparkles" s={13} />No ML degree required</span>
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

/* "Learn With Claude" + "Build Through Real Projects" — two editorial pillars */
function WpPillars() {
  return (
    <div className="wp-pillars">
      {/* Learn with Claude */}
      <section className="wp-pillar" style={{ '--_c': 'var(--blue-500)' }} data-rv-group>
        <div className="wp-pillar__inner">
          <div className="wp-pillar__body" data-rv>
            <span className="wp-pillar__big" aria-hidden="true">01</span>
            <span className="aw-kicker aw-kicker--blue"><span className="wp-pillar__tick" />Inside the membership</span>
            <h3>Learn with <em>Claude</em></h3>
            <p className="wp-pillar__goal">The goal is simple: learn how to use AI as a practical work partner.</p>
            <div className="wp-pillar__chips">
              {['Research & analysis', 'Planning & documentation', 'Workflow improvement', 'Business problem solving', 'AI-assisted project development', 'Real-world use cases'].map((c, i) => (
                <span className="wp-pillar__chip" key={i}>{c}</span>
              ))}
            </div>
          </div>
          <div className="wp-pillar__media" data-rv><AwIlloLearn /></div>
        </div>
      </section>

      {/* Build through real projects */}
      <section className="wp-pillar" style={{ '--_c': 'var(--green-600)' }} data-rv-group>
        <div className="wp-pillar__inner">
          <div className="wp-pillar__body" data-rv>
            <span className="wp-pillar__big" aria-hidden="true">02</span>
            <span className="aw-kicker aw-kicker--green"><span className="wp-pillar__tick" />Inside the membership</span>
            <h3>Build through <em>real projects</em></h3>
            <p>Learning AI is not enough. You need practice. Inside the membership, you will work on real projects that show how AI can be used in business, operations, workflows, and problem solving. <strong>You will learn by building. You will learn by applying. You will learn by doing.</strong></p>
            <div className="wp-pillar__chips">
              {['Business', 'Operations', 'Workflows', 'Problem solving'].map((c, i) => (
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
const { Button: WpExBtn } = window.ColaberryDesignSystem_098454;
function WpExplore() {
  const items = [
    <React.Fragment>What is included inside the AI Membership</React.Fragment>,
    <React.Fragment>How working professionals can learn AI with Claude</React.Fragment>,
    <React.Fragment>How real projects help you build practical skills</React.Fragment>,
    <React.Fragment>How the membership helps you stay updated as AI evolves</React.Fragment>,
    <React.Fragment>How Colaberry guides you from learning to implementation</React.Fragment>,
    <React.Fragment>How to get started for <b>$149/month</b></React.Fragment>,
  ];
  return (
    <section className="aw-section" id="explore" data-rv-group>
      <div className="wp-explore">
        <div className="wp-explore__aside" data-rv>
          <span className="aw-kicker aw-kicker--red"><span className="aw-kicker__n">03</span>The Open House</span>
          <h2 className="aw-h2">What you'll explore</h2>
          <div className="wp-explore__time"><I n="clock" s={15} />90 minutes · live · free</div>
          <Magnetic>
            <WpExBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Reserve my free seat</WpExBtn>
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

Object.assign(window, { WpGap, WpWho, WpPillars, WpExplore });
