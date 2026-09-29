/* Working Professionals — Transformation, Why different, Pricing, Closing */
const { Button: WpCloseBtn } = window.ColaberryDesignSystem_098454;

/* "The Transformation" — before / after */
function WpTransformation() {
  return (
    <section className="aw-section" data-rv-group>
      <div className="wp-tf__head" data-rv>
        <span className="aw-kicker aw-kicker--green"><span className="aw-kicker__n">04</span>The transformation</span>
        <h2 className="aw-h2">From unsure to<br />AI-capable</h2>
      </div>
      <div className="wp-tf__grid">
        <div className="wp-tf__card wp-tf__card--before" data-rv>
          <span className="wp-tf__tag"><I n="circle-dashed" s={14} />Before</span>
          <h3>You know AI matters, but not how to use it</h3>
          <p>You may have tried a few tools. But you are not sure how to use AI in a structured, valuable, and professional way.</p>
        </div>
        <div className="wp-tf__arrow" aria-hidden="true"><I n="arrow-right" /></div>
        <div className="wp-tf__card wp-tf__card--after" data-rv>
          <span className="wp-tf__tag"><I n="circle-check" s={14} />After</span>
          <h3>You apply Claude and AI workflows to real problems</h3>
          <p>You can apply AI to your work and speak confidently about AI use cases. <strong>You become more valuable in your role and more prepared for the future of work.</strong></p>
        </div>
      </div>
    </section>
  );
}

/* "Why This Is Different" — split compare */
function WpDifferent() {
  const old = [
    'Most AI courses teach tools.',
    'Most AI courses teach prompts.',
    'They leave you with information, but not enough practice.',
  ];
  const neu = [
    <React.Fragment>You <strong>learn with Claude</strong>.</React.Fragment>,
    <React.Fragment>You <strong>build through real projects</strong>.</React.Fragment>,
    <React.Fragment>You <strong>apply AI to practical problems</strong>.</React.Fragment>,
    <React.Fragment>You <strong>keep improving every month</strong>.</React.Fragment>,
  ];
  return (
    <section className="aw-section" data-rv-group>
      <div data-rv>
        <span className="aw-kicker aw-kicker--red"><span className="aw-kicker__n">05</span>Why it's different</span>
        <h2 className="aw-h2">Most courses teach tools.<br />This one builds <span className="is-red">capability</span></h2>
      </div>
      <div className="wp-diff">
        <div className="wp-diff__col wp-diff__col--old" data-rv>
          <div className="wp-diff__label"><I n="book-open" s={15} />Most AI courses</div>
          {old.map((t, i) => (
            <div className="wp-diff__row" key={i}><span className="wp-diff__icon"><I n="minus" s={18} /></span><span>{t}</span></div>
          ))}
        </div>
        <div className="wp-diff__col wp-diff__col--new" data-rv>
          <div className="wp-diff__label"><I n="sparkles" s={15} />Colaberry's AI Membership</div>
          {neu.map((t, i) => (
            <div className="wp-diff__row" key={i}><span className="wp-diff__icon"><I n="check" s={18} /></span><span>{t}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Pricing strip — $149/month only (lowest tier per Sohail) */
function WpPricing() {
  return (
    <section className="wp-price">
      <div className="wp-price__inner">
        <div>
          <div className="wp-price__left">
            <span className="wp-price__num"><span>$149</span></span>
            <span className="wp-price__per">/ month</span>
          </div>
          <p className="wp-price__sub">Membership is $149/month. Begin inside the free Open House.</p>
        </div>
        <Magnetic>
          <WpCloseBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Join the free Open House</WpCloseBtn>
        </Magnetic>
      </div>
    </section>
  );
}

/* Closing CTA — cherry band + brand tagline */
function WpFinal() {
  return (
    <React.Fragment>
      <section className="aw-final aw-grain aw-grain--light" id="reserve" data-rv-group>
        <img className="aw-final__mark" src={(window.__resources && window.__resources.markWhite) || "../assets/logo/colaberry-mark-white.png"} alt="" aria-hidden="true" />
        <div className="aw-final__inner">
          <span className="aw-final__kicker" data-rv>FREE OPEN HOUSE · LIVE ONLINE · MEMBERSHIP · $149/MO</span>
          <h2 className="aw-final__h" data-rv>Join the free<br />Open House</h2>
          <p className="aw-final__p" data-rv>See what is included inside Colaberry's AI Membership. Learn how working professionals are using Claude, real projects, and guided learning to build practical AI skills. Membership is $149/month.</p>
          <span className="aw-final__btn" data-rv>
            <Magnetic>
              <WpCloseBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Join the free Open House</WpCloseBtn>
            </Magnetic>
          </span>
          <div className="aw-final__meta" data-rv>NO ML DEGREE REQUIRED · PRACTICAL AI SKILLS YOU CAN USE AT WORK</div>
        </div>
      </section>
      <div className="wp-tagline">
        <span>Learn with <span className="is-blue">Claude</span>. Build through <span className="is-green">Colaberry</span>. Deploy in the <span className="is-red">real world</span>.</span>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { WpTransformation, WpDifferent, WpPricing, WpFinal });
