/* Beginners & Career Switchers — "Your 12-Week Build Path"
   New section from the marketing draft, rendered as a 4-phase timeline/stepper.
   Phase copy is verbatim from Sohail's final draft (no wording changes per ticket).
   Sits after the learn/build pillars (what's inside) and before Career support,
   so a beginner sees exactly what the structured 12 weeks look like. */
const { Button: BgPathBtn } = window.ColaberryDesignSystem_098454;

function BgBuildPath() {
  const phases = [
    {
      weeks: 'Weeks 1–3',
      c: 'blue',
      t: 'Build Your AI Foundation',
      d: 'Clarify your idea, set up your AI workspace, and learn the foundations needed to begin building.',
    },
    {
      weeks: 'Weeks 4–6',
      c: 'green',
      t: 'Create Your AI Team',
      d: 'Design AI agents and workflows that support your project.',
    },
    {
      weeks: 'Weeks 7–9',
      c: 'red',
      t: 'Connect AI To The Real World',
      d: 'Connect your project to real data, tools, workflows, and use cases.',
    },
    {
      weeks: 'Weeks 10–12',
      c: 'dark',
      t: 'Design AI That Scales',
      d: 'Turn your project into a stronger system with architecture, documentation, and deployment planning.',
      dark: true,
    },
  ];
  const accent = (c) => (c === 'dark' ? 'var(--neutral-950)' : 'var(--' + c + '-' + (c === 'green' ? '600' : c === 'blue' ? '500' : '500') + ')');
  return (
    <section className="aw-section" id="build-path" data-screen-label="12-Week Build Path" data-rv-group>
      <div className="bg-path__head">
        <div data-rv>
          <span className="aw-kicker aw-kicker--blue"><span className="aw-kicker__n">04</span>Your build path</span>
          <h2 className="aw-h2">Your 12-week<br />build path</h2>
        </div>
        <div data-rv>
          <p className="bg-path__lead">No guessing what comes next. <strong>A clear, guided path</strong> takes you from your first AI workspace to a working system you can show, explain, and keep improving.</p>
          <span className="bg-path__tag"><I n="route" s={13} />4 phases · 12 weeks · fully guided</span>
        </div>
      </div>

      <div className="bg-path__track">
        {phases.map((p, i) => (
          <div className={'bg-path__step' + (p.dark ? ' is-dark' : '')} data-rv key={i} style={{ '--_c': accent(p.c) }}>
            <div className="bg-path__node">
              <span className="bg-path__num">{i + 1}</span>
            </div>
            <span className="bg-path__weeks">{p.weeks}</span>
            <h3 className="bg-path__t">{p.t}</h3>
            <p className="bg-path__d">{p.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-path__foot" data-rv>
        <span className="bg-path__foot-q">See the full 12 weeks walked through, live.</span>
        <Magnetic>
          <BgPathBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Join the free Open House</BgPathBtn>
        </Magnetic>
      </div>
    </section>
  );
}

Object.assign(window, { BgBuildPath });
