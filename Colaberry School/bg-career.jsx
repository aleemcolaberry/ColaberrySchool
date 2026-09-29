/* Beginners & Career Switchers — "Career support until you're ready"
   New section from the marketing draft. Job-outcome support is the payoff
   beginners care about most, so it sits right after the learn/build pillars
   and before the Open-House explainer. Light section, brand accents rotate. */
const { Button: BgCareBtn } = window.ColaberryDesignSystem_098454;

function BgCareer() {
  const items = [
    { icon: 'award', c: 'red', t: 'Certificate preparation', d: 'Get ready to earn your Colaberry AI Certificate and prove what you can do.' },
    { icon: 'layers', c: 'blue', t: 'Guided project experience', d: 'Apply your learning to real, structured projects with support at every step.' },
    { icon: 'folder-check', c: 'green', t: 'Portfolio-ready work', d: 'Finish with work you can show, explain, and keep improving over time.' },
    { icon: 'messages-square', c: 'blue', t: 'Interview preparation', d: 'Practice how to talk about AI, your projects, and your skills with confidence.' },
    { icon: 'compass', c: 'green', t: 'Career guidance', d: 'Understand where AI skills fit and which opportunities match your goals.' },
    { icon: 'target', c: 'red', t: 'Job-readiness support', d: 'Build the confidence and habits you need to pursue AI-enabled roles.' },
    { icon: 'trending-up', c: 'blue', t: 'Ongoing AI upskilling', d: 'Keep learning as AI evolves so your skills stay current and relevant.' },
  ];
  return (
    <section className="aw-section" id="career" data-screen-label="Career support" data-rv-group>
      <div className="bg-care__head">
        <div data-rv>
          <span className="aw-kicker aw-kicker--green"><span className="aw-kicker__n">03</span>Career support</span>
          <h2 className="aw-h2">Supported until<br />you're ready</h2>
        </div>
        <div data-rv>
          <p className="bg-care__lead">We do not just want you to learn AI. <strong>We want you to be ready for real opportunities.</strong> Your membership includes support that carries you from learning into an AI-enabled career.</p>
          <Magnetic>
            <BgCareBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Start your career path</BgCareBtn>
          </Magnetic>
        </div>
      </div>
      <div className="bg-care__grid">
        {items.map((it, i) => (
          <div className="bg-care__card" data-rv key={i} style={{ '--_c': 'var(--' + it.c + '-600)' }}>
            <span className="bg-care__icon"><I n={it.icon} s={22} /></span>
            <span className="bg-care__t">{it.t}</span>
            <span className="bg-care__d">{it.d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { BgCareer });
