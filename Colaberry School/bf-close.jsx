/* Builders & Founders — The Transformation, Pricing, Closing */
const { Button: BfCloseBtn } = window.ColaberryDesignSystem_098454;

/* "The Transformation" — before / after */
function BfTransformation() {
  return (
    <section className="aw-section" data-rv-group>
      <div className="wp-tf__head" data-rv>
        <span className="aw-kicker aw-kicker--green"><span className="aw-kicker__n">06</span>The transformation</span>
        <h2 className="aw-h2">From idea to<br />working system</h2>
      </div>
      <div className="wp-tf__grid">
        <div className="wp-tf__card wp-tf__card--before" data-rv>
          <span className="wp-tf__tag"><I n="circle-dashed" s={14} />Before</span>
          <h3>You have an idea, but no way to make it real</h3>
          <p>You have an idea. You know AI can help. But you are not sure how to build it, structure it, or make it real.</p>
        </div>
        <div className="wp-tf__arrow" aria-hidden="true"><I n="arrow-right" /></div>
        <div className="wp-tf__card wp-tf__card--after" data-rv>
          <span className="wp-tf__tag"><I n="circle-check" s={14} />After</span>
          <h3>You have a clear build path and a working system</h3>
          <p>You have a clear build path. You understand how to use Claude in the process. You start building your AI-powered system: <strong>something you can improve, demonstrate, and continue developing.</strong></p>
        </div>
      </div>
    </section>
  );
}

/* Pricing strip — $149/month only (lowest tier per Sohail) */
function BfPricing() {
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
          <BfCloseBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Join the free Open House</BfCloseBtn>
        </Magnetic>
      </div>
    </section>
  );
}

/* Closing CTA — cherry band + brand tagline */
function BfFinal() {
  return (
    <React.Fragment>
      <section className="aw-final aw-grain aw-grain--light" id="reserve" data-rv-group>
        <img className="aw-final__mark" src={(window.__resources && window.__resources.markWhite) || "../assets/logo/colaberry-mark-white.png"} alt="" aria-hidden="true" />
        <div className="aw-final__inner">
          <span className="aw-final__kicker" data-rv>FREE OPEN HOUSE · LIVE ONLINE · MEMBERSHIP · $149/MO</span>
          <h2 className="aw-final__h" data-rv>Join the free<br />Open House</h2>
          <p className="aw-final__p" data-rv>See how Colaberry's AI Membership helps builders and idea owners turn ideas into AI-powered systems. Membership is $149/month.</p>
          <span className="aw-final__btn" data-rv>
            <Magnetic>
              <BfCloseBtn size="lg" as="a" href="https://form.jotform.com/251193437881463" trailingIcon={<I n="arrow-right" s={18} />}>Join the free Open House</BfCloseBtn>
            </Magnetic>
          </span>
          <div className="aw-final__meta" data-rv>TURN YOUR AI IDEA INTO A WORKING SYSTEM</div>
        </div>
      </section>
      <div className="wp-tagline">
        <span>Learn with <span className="is-blue">Claude</span>. Build through <span className="is-green">Colaberry</span>. Deploy in the <span className="is-red">real world</span>.</span>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { BfTransformation, BfPricing, BfFinal });
