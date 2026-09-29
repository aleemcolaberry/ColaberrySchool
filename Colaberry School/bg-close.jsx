/* Beginners & Career Switchers — Transformation, Why different, Pricing, Closing */
const { Button: BgCloseBtn } = window.ColaberryDesignSystem_098454;

/* "The Transformation" — before / after */
function BgTransformation() {
  return (
    <section className="aw-section" data-rv-group>
      <div className="wp-tf__head" data-rv>
        <span className="aw-kicker aw-kicker--green"><span className="aw-kicker__n">05</span>The transformation</span>
        <h2 className="aw-h2">From unsure to<br />confident</h2>
      </div>
      <div className="wp-tf__grid">
        <div className="wp-tf__card wp-tf__card--before" data-rv>
          <span className="wp-tf__tag"><I n="circle-dashed" s={14} />Before</span>
          <h3>You're interested in AI, but unsure where to start</h3>
          <p>You are interested in AI, but you feel unsure where to start. AI may feel too technical, too fast, or too confusing.</p>
        </div>
        <div className="wp-tf__arrow" aria-hidden="true"><I n="arrow-right" /></div>
        <div className="wp-tf__card wp-tf__card--after" data-rv>
          <span className="wp-tf__tag"><I n="circle-check" s={14} />After</span>
          <h3>You use Claude with confidence and build real projects</h3>
          <p>You understand the basics of AI. You know how to use Claude with confidence. You start building practical projects. <strong>You have a clear path to keep improving.</strong></p>
        </div>
      </div>
    </section>
  );
}

/* "Why This Is Different" — split compare */
function BgDifferent() {
  const old = [
    'Most AI learning feels confusing.',
    'Too many tools, videos, and random tutorials.',
    'Information without a clear path forward.',
  ];
  const neu = [
    <React.Fragment>You <strong>learn with Claude</strong>.</React.Fragment>,
    <React.Fragment>You <strong>build through projects</strong>.</React.Fragment>,
    <React.Fragment>You <strong>get practical support</strong>.</React.Fragment>,
    <React.Fragment>You <strong>keep improving every month</strong>.</React.Fragment>,
  ];
  return (
    <section className="aw-section" data-rv-group>
      <div data-rv>
        <span className="aw-kicker aw-kicker--red"><span className="aw-kicker__n">06</span>Why it's different</span>
        <h2 className="aw-h2">Most learning leaves you lost.<br />This one gives you a <span className="is-red">path</span></h2>
      </div>
      <div className="wp-diff">
        <div className="wp-diff__col wp-diff__col--old" data-rv>
          <div className="wp-diff__label"><I n="book-open" s={15} />Most AI learning</div>
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
function BgPricing() {
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
          <BgCloseBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Join the free Open House</BgCloseBtn>
        </Magnetic>
      </div>
    </section>
  );
}

/* Closing CTA — cherry band + brand tagline */
function BgFinal() {
  return (
    <React.Fragment>
      <section className="aw-final aw-grain aw-grain--light" id="reserve" data-rv-group>
        <img className="aw-final__mark" src={(window.__resources && window.__resources.markWhite) || "../assets/logo/colaberry-mark-white.png"} alt="" aria-hidden="true" />
        <div className="aw-final__inner">
          <span className="aw-final__kicker" data-rv>FREE OPEN HOUSE · LIVE ONLINE · MEMBERSHIP · $149/MO</span>
          <h2 className="aw-final__h" data-rv>Join the free<br />Open House</h2>
          <p className="aw-final__p" data-rv>See how Colaberry's AI Membership helps beginners and career switchers start learning AI the right way. Membership is $149/month.</p>
          <span className="aw-final__btn" data-rv>
            <Magnetic>
              <BgCloseBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Join the free Open House</BgCloseBtn>
            </Magnetic>
          </span>
          <div className="aw-final__meta" data-rv>NO EXPERIENCE REQUIRED · START LEARNING AI FROM THE GROUND UP</div>
        </div>
      </section>
      <div className="wp-tagline">
        <span>Learn with <span className="is-blue">Claude</span>. Build through <span className="is-green">Colaberry</span>. Deploy in the <span className="is-red">real world</span>.</span>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { BgTransformation, BgDifferent, BgPricing, BgFinal });
