/* @ds-bundle: {"format":4,"namespace":"ColaberryDesignSystem_098454","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Breadcrumb","sourcePath":"components/core/Breadcrumb.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Carousel","sourcePath":"components/core/Carousel.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Dialog","sourcePath":"components/core/Dialog.jsx"},{"name":"Drawer","sourcePath":"components/core/Drawer.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Pagination","sourcePath":"components/core/Pagination.jsx"},{"name":"Popover","sourcePath":"components/core/Popover.jsx"},{"name":"Progress","sourcePath":"components/core/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Table","sourcePath":"components/core/Table.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"}],"sourceHashes":{"Colaberry School/ai-aw-illos.jsx":"4340f2b75406","Colaberry School/ai-aw-parts.jsx":"839cc62359bd","Colaberry School/ai-bg-partner.jsx":"3db6cbaca9bc","Colaberry School/ai-home-hero.jsx":"403d49ebaf77","Colaberry School/ai-home-sections.jsx":"4e7148de3744","Colaberry School/ai-parts.jsx":"0e26dc0bafdb","Colaberry School/ai-site-nav.jsx":"3639f2778fe0","Colaberry School/bf-close.jsx":"fe33a5139c80","Colaberry School/bf-hero.jsx":"53ed564ad967","Colaberry School/bf-sections.jsx":"e1864f5d30f6","Colaberry School/bg-buildpath.jsx":"b479f7249233","Colaberry School/bg-career.jsx":"f480789a5169","Colaberry School/bg-close.jsx":"767289defd3f","Colaberry School/bg-hero.jsx":"3048ec05ba2e","Colaberry School/bg-sections.jsx":"8d61f5e1fc2f","Colaberry School/boot-fallback.js":"9ad4ee9e47fd","Colaberry School/site-chrome.js":"312017cf1ed9","Colaberry School/to-top.js":"8dd5b083ea05","Colaberry School/tweaks-panel.jsx":"6591467622ed","Colaberry School/wp-close.jsx":"90da15378fc8","Colaberry School/wp-hero.jsx":"d70d93070fe7","Colaberry School/wp-sections.jsx":"6959f16abab0","ads/ad-scenes.jsx":"8595d1c2af62","ads/animations.jsx":"a8d2a696abaa","app/charts.js":"b3481aee905d","app/guard.js":"83a37175b6f5","app/icons.js":"d98b2e1398e5","app/theme.js":"cb609d40a068","app/toast.js":"e028e03cfe43","aw-animate.js":"988c209a27e0","components/core/Accordion.jsx":"73950c451cf7","components/core/Avatar.jsx":"efc10e1a815a","components/core/Badge.jsx":"53d8fbcfa769","components/core/Breadcrumb.jsx":"358bf4020b72","components/core/Button.jsx":"67e3db235173","components/core/Card.jsx":"ebf94cdea394","components/core/Carousel.jsx":"d12b816cf800","components/core/Checkbox.jsx":"cfc80de49a3e","components/core/Dialog.jsx":"116f1d848752","components/core/Drawer.jsx":"5af46cfaf865","components/core/Input.jsx":"e57a54ea40d6","components/core/Pagination.jsx":"31bf7ecd5f84","components/core/Popover.jsx":"e4d1a6be31cb","components/core/Progress.jsx":"625af9295189","components/core/Skeleton.jsx":"e54ebc95d2ce","components/core/Switch.jsx":"f3d0eb31917f","components/core/Table.jsx":"34bcefbe3e5d","components/core/Textarea.jsx":"4a9b67046378","components/core/Toast.jsx":"f876e7ea0102","components/core/Tooltip.jsx":"d9d563a8a3de","guidelines/showcase.jsx":"8016c46bb9e8","hero-three.js":"0c14f32992a2","landing.js":"5414d81c8320","motion.js":"bd615a2411b4","training-site/landing.js":"2ff7f3715bf4","training-site/site.js":"8d27cc2cda89","ui_kits/marketing-website/home.jsx":"f2d0585b6567","ui_kits/marketing-website/parts.jsx":"b07de169cd34","ui_kits/marketing-website/program-enroll.jsx":"8d376d895d6c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ColaberryDesignSystem_098454 = window.ColaberryDesignSystem_098454 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// Colaberry School/ai-aw-illos.jsx
try { (() => {
/* v2 — blueprint-style system schematics (token-colored, Lucide-matching 2px strokes) */

function AwIlloFrame({
  children,
  label,
  viewBox = '0 0 300 230'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-illo"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: viewBox,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, children), label ? /*#__PURE__*/React.createElement("span", {
    className: "aw-illo__cap"
  }, label) : null);
}

/* 01 — LEARN: prompt → Claude → understanding */
function AwIlloLearn() {
  const line = 'var(--neutral-300)';
  const ink = 'var(--neutral-500)';
  const c = 'var(--blue-500)';
  return /*#__PURE__*/React.createElement(AwIlloFrame, {
    label: "FIG. 01 \u2014 PROMPT \u2192 MODEL \u2192 SKILL"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "58",
    width: "92",
    height: "64",
    rx: "10",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "28",
    y1: "78",
    x2: "92",
    y2: "78",
    stroke: line,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "28",
    y1: "92",
    x2: "78",
    y2: "92",
    stroke: line,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "28",
    y1: "106",
    x2: "86",
    y2: "106",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: "14",
    y: "44",
    className: "aw-illo__t"
  }, "PROMPT"), /*#__PURE__*/React.createElement("path", {
    d: "M106 90 H 138",
    stroke: c,
    strokeWidth: "2",
    strokeDasharray: "3 6",
    strokeLinecap: "round",
    className: "aw-illo__dash"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "172",
    cy: "90",
    r: "32",
    stroke: c,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "172",
    cy: "90",
    r: "20",
    stroke: line,
    strokeWidth: "2",
    strokeDasharray: "2 5",
    className: "aw-illo__dash"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "172",
    cy: "90",
    r: "5",
    fill: c
  }), /*#__PURE__*/React.createElement("text", {
    x: "146",
    y: "142",
    className: "aw-illo__t"
  }, "CLAUDE"), /*#__PURE__*/React.createElement("path", {
    d: "M204 90 H 236",
    stroke: c,
    strokeWidth: "2",
    strokeDasharray: "3 6",
    strokeLinecap: "round",
    className: "aw-illo__dash"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "236",
    y: "62",
    width: "50",
    height: "16",
    rx: "6",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "236",
    y: "84",
    width: "50",
    height: "16",
    rx: "6",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "236",
    y: "106",
    width: "50",
    height: "16",
    rx: "6",
    stroke: c,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "236",
    y: "44",
    className: "aw-illo__t"
  }, "SKILLS"), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "180",
    r: "2",
    fill: line
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "180",
    r: "2",
    fill: line
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "180",
    r: "2",
    fill: line
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "180",
    r: "2",
    fill: line
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "180",
    r: "2",
    fill: line
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "190",
    cy: "180",
    r: "2",
    fill: c
  }));
}

/* 02 — BUILD: orchestrator + agent team */
function AwIlloBuild() {
  const line = 'var(--neutral-300)';
  const ink = 'var(--neutral-500)';
  const c = 'var(--green-600)';
  return /*#__PURE__*/React.createElement(AwIlloFrame, {
    label: "FIG. 02 \u2014 YOUR AGENT TEAM"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "112",
    y: "22",
    width: "76",
    height: "40",
    rx: "10",
    stroke: c,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "150",
    cy: "42",
    r: "6",
    fill: c
  }), /*#__PURE__*/React.createElement("text", {
    x: "112",
    y: "14",
    className: "aw-illo__t"
  }, "ORCHESTRATOR"), /*#__PURE__*/React.createElement("path", {
    d: "M150 62 V 88 M150 88 H 60 M150 88 H 240 M60 88 V 112 M150 88 V 112 M240 88 V 112",
    stroke: line,
    strokeWidth: "2",
    strokeDasharray: "3 6",
    className: "aw-illo__dash"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "28",
    y: "112",
    width: "64",
    height: "48",
    rx: "10",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "130",
    r: "7",
    stroke: c,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "44",
    y1: "148",
    x2: "76",
    y2: "148",
    stroke: line,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "118",
    y: "112",
    width: "64",
    height: "48",
    rx: "10",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "150",
    cy: "130",
    r: "7",
    stroke: c,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "134",
    y1: "148",
    x2: "166",
    y2: "148",
    stroke: line,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "208",
    y: "112",
    width: "64",
    height: "48",
    rx: "10",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "240",
    cy: "130",
    r: "7",
    stroke: c,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "224",
    y1: "148",
    x2: "256",
    y2: "148",
    stroke: line,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: "28",
    y: "178",
    className: "aw-illo__t"
  }, "AGENT 01"), /*#__PURE__*/React.createElement("text", {
    x: "118",
    y: "178",
    className: "aw-illo__t"
  }, "AGENT 02"), /*#__PURE__*/React.createElement("text", {
    x: "208",
    y: "178",
    className: "aw-illo__t"
  }, "AGENT 03"), /*#__PURE__*/React.createElement("path", {
    d: "M252 36 l5 5 9 -10",
    stroke: c,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "244",
    y: "24",
    width: "30",
    height: "30",
    rx: "8",
    stroke: line,
    strokeWidth: "2"
  }));
}

/* 03 — DEPLOY: system → pipeline → world */
function AwIlloDeploy() {
  const line = 'var(--neutral-300)';
  const ink = 'var(--neutral-500)';
  const c = 'var(--red-500)';
  return /*#__PURE__*/React.createElement(AwIlloFrame, {
    label: "FIG. 03 \u2014 SHIP TO PRODUCTION"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "64",
    width: "74",
    height: "20",
    rx: "6",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "90",
    width: "74",
    height: "20",
    rx: "6",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "116",
    width: "74",
    height: "20",
    rx: "6",
    stroke: c,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "74",
    r: "2.5",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "100",
    r: "2.5",
    fill: line
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "126",
    r: "2.5",
    fill: c
  }), /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "50",
    className: "aw-illo__t"
  }, "YOUR SYSTEM"), /*#__PURE__*/React.createElement("path", {
    d: "M94 100 H 140",
    stroke: c,
    strokeWidth: "2",
    strokeDasharray: "3 6",
    strokeLinecap: "round",
    className: "aw-illo__dash"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M132 92 l10 8 -10 8",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "196",
    cy: "100",
    r: "40",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "196",
    cy: "100",
    rx: "18",
    ry: "40",
    stroke: line,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "156",
    y1: "100",
    x2: "236",
    y2: "100",
    stroke: line,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "172",
    y: "162",
    className: "aw-illo__t"
  }, "REAL WORLD"), /*#__PURE__*/React.createElement("circle", {
    cx: "262",
    cy: "58",
    r: "9",
    stroke: c,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M249 84 a13 11 0 0 1 26 0",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "284",
    cy: "106",
    r: "7",
    stroke: ink,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M274 126 a10 9 0 0 1 20 0",
    stroke: ink,
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M228 72 L 250 62 M232 96 L 274 102",
    stroke: line,
    strokeWidth: "2",
    strokeDasharray: "3 6",
    className: "aw-illo__dash"
  }));
}
Object.assign(window, {
  AwIlloLearn,
  AwIlloBuild,
  AwIlloDeploy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/ai-aw-illos.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/ai-aw-parts.jsx
try { (() => {
/* v2 awwwards redesign — shared parts: Nav, Marquee, Canvas, Stats, Magnetic, Footer */
const {
  Button: AwButton
} = window.ColaberryDesignSystem_098454;

/* Motion is ON by default — the page is an animated marketing experience.
   (Continuous decorative motion still pauses when off-screen.) */
const AW_REDUCE = false;

/* Run fn only when the document is actually visible. Hidden documents
   (ad-quality crawlers, prerenderers, background tabs) never fire rAF,
   which would leave gsap.from() content stuck invisible at its from-state.
   Returns a cancel function. */
function awWhenVisible(fn) {
  if (!document.hidden) {
    fn();
    return () => {};
  }
  const h = () => {
    if (!document.hidden) {
      document.removeEventListener('visibilitychange', h);
      fn();
    }
  };
  document.addEventListener('visibilitychange', h);
  return () => document.removeEventListener('visibilitychange', h);
}
function AwNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "aw-nav",
    "data-scrolled": scrolled
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-nav__inner"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    className: "aw-nav__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-nav__date"
  }, /*#__PURE__*/React.createElement(I, {
    n: "monitor",
    s: 15
  }), "FREE \xB7 LIVE ONLINE"), /*#__PURE__*/React.createElement(AwButton, {
    size: "sm",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 15
    })
  }, "Reserve my free seat"))));
}
function AwMarquee() {
  const items = [/*#__PURE__*/React.createElement("span", {
    key: "a"
  }, "Learn with ", /*#__PURE__*/React.createElement("em", {
    className: "is-blue"
  }, "Claude")), /*#__PURE__*/React.createElement("span", {
    key: "b"
  }, "Build through ", /*#__PURE__*/React.createElement("em", {
    className: "is-green"
  }, "Colaberry")), /*#__PURE__*/React.createElement("span", {
    key: "c"
  }, "Deploy in the ", /*#__PURE__*/React.createElement("em", {
    className: "is-red"
  }, "real world")), /*#__PURE__*/React.createElement("span", {
    key: "d"
  }, "Free Open House \xB7 Live online")];
  const list = hidden => /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__list",
    "aria-hidden": hidden || undefined
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__item",
    key: i
  }, it, /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__dot"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-mq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__inner"
  }, list(false), list(true)));
}

/* Generative node-network canvas — "AI systems" motif for the hero. */
function AwCanvas() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const css = getComputedStyle(document.documentElement);
    const tok = (n, fb) => (css.getPropertyValue(n) || fb).trim();
    const COLORS = [tok('--blue-500', '#367895'), tok('--green-500', '#77BB4A'), tok('--red-500', '#FB2832')];
    let nodes = [],
      raf = 0,
      running = true,
      W = 0,
      H = 0;
    const build = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.max(26, Math.round(W / 24)));
      nodes = Array.from({
        length: count
      }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - .5) * .28,
        vy: (Math.random() - .5) * .28,
        r: 1.2 + Math.random() * 1.6,
        c: Math.random() < .8 ? null : COLORS[Math.random() * 3 | 0]
      }));
    };
    const frame = move => {
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        if (move) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -10) n.x = W + 10;else if (n.x > W + 10) n.x = -10;
          if (n.y < -10) n.y = H + 10;else if (n.y > H + 10) n.y = -10;
        }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 16900) {
            const o = (1 - Math.sqrt(d2) / 130) * .14;
            ctx.strokeStyle = 'rgba(74,74,74,' + o.toFixed(3) + ')';
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = n.c ? n.c + '99' : 'rgba(74,74,74,.30)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    const loop = () => {
      if (!running) return;
      frame(true);
      raf = requestAnimationFrame(loop);
    };
    build();
    if (AW_REDUCE) {
      frame(false);
    } else {
      const io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting && !running) {
            running = true;
            loop();
          } else if (!e.isIntersecting) {
            running = false;
            cancelAnimationFrame(raf);
          }
        });
      });
      io.observe(canvas);
      loop();
      const onResize = () => {
        build();
      };
      window.addEventListener('resize', onResize);
      return () => {
        running = false;
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener('resize', onResize);
      };
    }
    const onResize = () => {
      build();
      frame(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__canvas",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: ref
  }));
}

/* Scroll-triggered count-up stats (final values live in markup as fallback). */
function AwStats() {
  const ref = React.useRef(null);
  const stats = [{
    n: 5000,
    suffix: '+',
    label: 'careers changed since 2012',
    em: true
  }, {
    n: 49,
    suffix: '',
    label: 'countries with Colaberry learners'
  }, {
    n: 12,
    suffix: '',
    label: 'weeks from idea to working AI system'
  }, {
    n: 90,
    suffix: '',
    label: 'minutes of live demos, stories & Q&A'
  }];
  const fmt = v => v.toLocaleString('en-US');
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const ctx = gsap.context(() => {
      const els = ref.current.querySelectorAll('[data-count]');
      els.forEach(el => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const obj = {
          v: 0
        };
        gsap.to(obj, {
          v: target,
          duration: 1.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true
          },
          onUpdate: () => {
            el.textContent = fmt(Math.round(obj.v)) + suffix;
          }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-stats",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stats__grid"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "aw-stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__n"
  }, s.em ? /*#__PURE__*/React.createElement("em", {
    "data-count": s.n,
    "data-suffix": s.suffix
  }, fmt(s.n) + s.suffix) : /*#__PURE__*/React.createElement("span", {
    "data-count": s.n,
    "data-suffix": s.suffix
  }, fmt(s.n) + s.suffix)), /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__l"
  }, s.label)))));
}

/* Magnetic hover wrapper (fine pointers + motion only). */
function Magnetic({
  children,
  strength = 0.32
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.gsap || AW_REDUCE) return;
    if (!(window.matchMedia && window.matchMedia('(pointer: fine)').matches)) return;
    const onMove = e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: .4,
        ease: 'power3.out'
      });
    };
    const onLeave = () => gsap.to(el, {
      x: 0,
      y: 0,
      duration: .7,
      ease: 'elastic.out(1, 0.4)'
    });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'inline-block'
    }
  }, children);
}
function AwFooter({
  tagline,
  dateLabel,
  campaign = false
} = {}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "aw-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWhite || '../assets/logo/colaberry-horizontal-white.png',
    alt: "Colaberry",
    style: {
      height: 30,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", null, tagline || 'Learn with Claude. Build through Colaberry. Deploy in the real world. Helping people move from AI consumer to AI builder since 2012.'), /*#__PURE__*/React.createElement("div", {
    className: "aw-social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@ColaberrySODA/shorts",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Colaberry on YouTube"
  }, /*#__PURE__*/React.createElement(I, {
    n: "youtube",
    s: 20
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/colaberryschool/",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Colaberry on Instagram"
  }, /*#__PURE__*/React.createElement(I, {
    n: "instagram",
    s: 20
  })))), /*#__PURE__*/React.createElement("div", {
    className: "aw-footer__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "calendar-days",
    s: 16
  }), dateLabel || 'Free Open House · live online'), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "ticket",
    s: 16
  }), "Membership \xB7 $149/month"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "map-pin",
    s: 16
  }), "Plano, TX \xB7 Boston, MA"))), /*#__PURE__*/React.createElement("span", {
    className: "aw-footer__word",
    "aria-hidden": "true"
  }, "colaberry"), /*#__PURE__*/React.createElement("div", {
    className: "aw-footer__bar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \xB7 Colaberry School of Data and AI is operated by Colaberry Inc. \xB7 Texas Workforce Commission approved"), /*#__PURE__*/React.createElement("span", {
    className: "aw-footer__links"
  }, campaign ? /*#__PURE__*/React.createElement("a", {
    href: "https://form.jotform.com/251193437881463"
  }, "Join the free Open House") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: "our-story.html"
  }, "Our Story"), /*#__PURE__*/React.createElement("a", {
    href: "student-projects.html"
  }, "Student Projects"), /*#__PURE__*/React.createElement("a", {
    href: "events.html"
  }, "Events"), /*#__PURE__*/React.createElement("a", {
    href: "blog.html"
  }, "Blog"), /*#__PURE__*/React.createElement("a", {
    href: "podcasts.html"
  }, "Podcast"), /*#__PURE__*/React.createElement("a", {
    href: "shorts.html"
  }, "Shorts"), /*#__PURE__*/React.createElement("a", {
    href: "faq.html"
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "https://form.jotform.com/251193437881463"
  }, "Register"))))));
}
Object.assign(window, {
  AwNav,
  AwMarquee,
  AwCanvas,
  AwStats,
  Magnetic,
  AwFooter,
  AW_REDUCE,
  awWhenVisible
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/ai-aw-parts.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/ai-bg-partner.jsx
try { (() => {
/* Anthropic / Claude Partner Network — badge, proof cards, partnership band.
   Verified facts per "course-links-and-rules" doc (do not embellish):
   • 10 Colaberry team members completed the same 4-course Anthropic Academy
     learning path (Agent Skills · Claude API · MCP · Claude Code in Action).
   • That completion gate unlocked Claude Partner Network membership.
   • Skilljar issues per-course completion certificates — there is NO
     "Anthropic certification" of the team; say "trained", never "certified".
   • The path covers the Claude Certified Architect exam blueprint (per
     Anthropic Partner Support, Mar 18 2026). */

const {
  Button: BgPartBtn
} = window.ColaberryDesignSystem_098454; // (kept for badge/nav use)

/* Generic radiant "spark" — evokes the Claude/Anthropic mark without copying
   its exact trademark geometry. Used inside Colaberry-styled partner moments. */
function AnthropicGlyph({
  s = 18,
  color = 'currentColor',
  stroke = 2.4
}) {
  const rays = [];
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4;
    const inner = i % 2 === 0 ? 3.4 : 4.4;
    const outer = i % 2 === 0 ? 10.4 : 8.6;
    rays.push(/*#__PURE__*/React.createElement("line", {
      key: i,
      x1: 12 + Math.cos(a) * inner,
      y1: 12 + Math.sin(a) * inner,
      x2: 12 + Math.cos(a) * outer,
      y2: 12 + Math.sin(a) * outer,
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, rays);
}

/* The hero/nav co-brand badge */
function BgPartnerBadge({
  href = '#partner'
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "bg-partbadge",
    href: href
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-partbadge__tile"
  }, /*#__PURE__*/React.createElement(AnthropicGlyph, {
    s: 18,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    className: "bg-partbadge__tx"
  }, /*#__PURE__*/React.createElement("b", null, "Member \xB7 Claude Partner Network"), /*#__PURE__*/React.createElement("span", null, "Colaberry \xD7 Anthropic \xB7 Certified team")));
}

/* Two Coursiv-style proof cards beneath the hero */
function BgProofCards() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-proof"
  }, /*#__PURE__*/React.createElement("a", {
    className: "bg-proofcard",
    href: "#partner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__media"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-seal"
  }, /*#__PURE__*/React.createElement(AnthropicGlyph, {
    s: 26,
    color: "var(--anthropic)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bg-seal__chk"
  }, /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 12
  })))), /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__t"
  }, "Anthropic Academy trained"), /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__d"
  }, "A 10-person cohort completed all ", /*#__PURE__*/React.createElement("b", null, "4 Academy courses"), ", in full.")), /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__arrow"
  }, /*#__PURE__*/React.createElement(I, {
    n: "arrow-right",
    s: 20
  }))), /*#__PURE__*/React.createElement("a", {
    className: "bg-proofcard",
    href: "#partner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__media"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-ptile"
  }, /*#__PURE__*/React.createElement(AnthropicGlyph, {
    s: 28,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__t"
  }, "Claude Partner Network"), /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__d"
  }, "Colaberry holds ", /*#__PURE__*/React.createElement("b", null, "confirmed partner status"), " with Anthropic.")), /*#__PURE__*/React.createElement("span", {
    className: "bg-proofcard__arrow"
  }, /*#__PURE__*/React.createElement(I, {
    n: "arrow-right",
    s: 20
  }))));
}

/* The full "official partnership" band.
   Props (from Home tweaks): bento, accentVars, accentName. */
function BgPartner({
  bento = false,
  accentVars = null,
  accentName = null
} = {}) {
  const ref = React.useRef(null);
  const stats = [{
    count: 10,
    l: 'team members completed the training cohort'
  }, {
    count: 4,
    l: 'Anthropic Academy courses, each completed in full'
  }, {
    check: true,
    l: 'Claude Partner Network member'
  }];
  React.useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!window.gsap || !window.ScrollTrigger || reduce) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 84%',
          once: true
        },
        defaults: {
          ease: 'power3.out'
        }
      });
      tl.from('.bg-partband__kick', {
        opacity: 0,
        y: 18,
        duration: .5
      }).from('.bg-partband h2', {
        opacity: 0,
        y: 30,
        duration: .7
      }, '-=.25').from('.bg-partband__p', {
        opacity: 0,
        y: 22,
        duration: .6
      }, '-=.45').from('.bg-partstat', {
        opacity: 0,
        y: 26,
        scale: .9,
        duration: .55,
        stagger: .12,
        ease: 'back.out(1.5)'
      }, '-=.3').fromTo('.bg-certbig', {
        opacity: 0,
        y: 54,
        rotation: -10,
        scale: .9
      }, {
        opacity: 1,
        y: 0,
        rotation: -1.4,
        scale: 1,
        duration: .9,
        ease: 'back.out(1.3)',
        clearProps: 'transform'
      }, '-=.9').from('.bg-certghost', {
        opacity: 0,
        duration: .6,
        stagger: .14,
        clearProps: 'opacity'
      }, '-=.45').from('.bg-lp__row', {
        opacity: 0,
        x: 22,
        duration: .45,
        stagger: .1,
        clearProps: 'transform,opacity'
      }, '-=.35').from('.bg-certbig__seal', {
        scale: 0,
        rotation: -80,
        duration: .55,
        ease: 'back.out(2)',
        clearProps: 'transform'
      }, '-=.2');
    }, ref);
    return () => ctx.revert();
  }, []);
  const kick = /*#__PURE__*/React.createElement("span", {
    className: "bg-partband__kick"
  }, /*#__PURE__*/React.createElement(AnthropicGlyph, {
    s: 17,
    color: "var(--anthropic)"
  }), "Official partnership");
  const heading = /*#__PURE__*/React.createElement("h2", null, "Learn Claude straight", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "from the source"));
  const para = /*#__PURE__*/React.createElement("p", {
    className: "bg-partband__p"
  }, "Most schools teach ", /*#__PURE__*/React.createElement("i", null, "about"), " AI. We give you the source. Your membership includes access to ", /*#__PURE__*/React.createElement("b", null, "Anthropic Academy's four-course learning path"), ": agent skills, the Claude API, Model Context Protocol, and Claude Code. It's the same path a 10-person Colaberry cohort completed to earn ", /*#__PURE__*/React.createElement("b", null, "membership in the Claude Partner Network"), ".");
  const statsEl = /*#__PURE__*/React.createElement("div", {
    className: "bg-partstats"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "bg-partstat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-partstat__n"
  }, s.check ? /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 30
  }) : s.count), /*#__PURE__*/React.createElement("div", {
    className: "bg-partstat__l"
  }, s.l))));
  const cert = /*#__PURE__*/React.createElement("div", {
    className: "bg-certwrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-certghost bg-certghost--b",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-certghost bg-certghost--a",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null, "More paths \xB7 same membership")), /*#__PURE__*/React.createElement("div", {
    className: "bg-certbig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-certbig__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-certbig__brand"
  }, /*#__PURE__*/React.createElement(AnthropicGlyph, {
    s: 15,
    color: "var(--anthropic)"
  }), "Anthropic Academy"), /*#__PURE__*/React.createElement("span", {
    className: "bg-certbig__id"
  }, "CPN \xB7 2026")), /*#__PURE__*/React.createElement("span", {
    className: "bg-certbig__kick"
  }, "Anthropic Academy \xB7 included with membership"), /*#__PURE__*/React.createElement("h4", {
    className: "bg-certbig__name"
  }, "Your four-course learning path"), /*#__PURE__*/React.createElement("div", {
    className: "bg-lp"
  }, ['Introduction to Agent Skills', 'Building with the Claude API', 'Introduction to Model Context Protocol', 'Claude Code in Action'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "bg-lp__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-lp__n"
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("span", {
    className: "bg-lp__t"
  }, c), /*#__PURE__*/React.createElement("span", {
    className: "bg-lp__chk"
  }, /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 15
  }))))), /*#__PURE__*/React.createElement("p", {
    className: "bg-certbig__awarded"
  }, "The same path a ", /*#__PURE__*/React.createElement("b", null, "10-person Colaberry cohort"), " completed. It also covers the Claude Certified Architect exam blueprint."), /*#__PURE__*/React.createElement("div", {
    className: "bg-certbig__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-certbig__seal"
  }, /*#__PURE__*/React.createElement(AnthropicGlyph, {
    s: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    className: "bg-certbig__sig"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-certbig__sigline"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bg-certbig__siglabel"
  }, "Claude Partner Network")))));
  const cls = 'bg-partband aw-grain aw-grain--light' + (bento ? ' is-bento' : '');
  const secProps = {
    className: cls,
    id: 'partner',
    'data-screen-label': 'Partnership',
    ref
  };
  if (accentVars) secProps.style = accentVars;
  if (accentName) secProps['data-accent'] = accentName;
  return /*#__PURE__*/React.createElement("section", secProps, /*#__PURE__*/React.createElement("span", {
    className: "bg-partband__glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-partband__inner"
  }, bento ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bg-pt-intro"
  }, kick, heading, para), statsEl, cert) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, kick, heading, para, statsEl), cert)));
}
Object.assign(window, {
  AnthropicGlyph,
  BgPartnerBadge,
  BgProofCards,
  BgPartner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/ai-bg-partner.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/ai-home-hero.jsx
try { (() => {
/* AI Systems Architect Accelerator — HOME: Nav, Hero (+ Open House reg card), Marquee */
const {
  Button: HomeBtn,
  Input: HomeInput,
  Avatar: HomeAvatar
} = window.ColaberryDesignSystem_098454;
const REGISTER_URL = 'https://form.jotform.com/251193437881463';

/* High-intent lead card for the home hero. Name + email + US mobile —
   prefills the JotForm, which redirects to thank-you.html. */
function HomeRegCard() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  const set = k => e => {
    let v = e.target.value;
    if (k === 'phone') {
      const d = v.replace(/\D/g, '').replace(/^1/, '').slice(0, 10);
      v = d.length > 6 ? '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6) : d.length > 3 ? '(' + d.slice(0, 3) + ') ' + d.slice(3) : d;
    }
    setForm(f => ({
      ...f,
      [k]: v
    }));
    setErrors(er => er[k] ? {
      ...er,
      [k]: null
    } : er);
  };
  const submit = e => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    const er = {};
    if (!form.name.trim()) er.name = 'Please add your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) er.email = form.email.trim() ? 'Enter a valid email address.' : 'Please add your email.';
    if (digits.length !== 10) er.phone = form.phone.trim() ? 'Enter a 10-digit US mobile number.' : 'Please add your mobile number.';
    if (Object.keys(er).length) {
      setErrors(er);
      return;
    }
    setBusy(true);
    const q = new URLSearchParams({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: '+1' + digits
    });
    window.location.href = REGISTER_URL + '?' + q.toString();
  };
  React.useEffect(() => {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }, []);
  const firstError = errors.name || errors.email || errors.phone;
  return /*#__PURE__*/React.createElement("div", {
    className: "lead-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lead-card__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__dot"
  }), "Live \xB7 Free Open House"), /*#__PURE__*/React.createElement("span", {
    className: "lead-card__when"
  }, /*#__PURE__*/React.createElement(I, {
    n: "clock",
    s: 14
  }), "90 min \xB7 online")), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "lead-card__h"
  }, "Save your free seat"), /*#__PURE__*/React.createElement("p", {
    className: "lead-card__sub"
  }, "No payment, no pressure. See exactly how the accelerator works, then choose your path."), /*#__PURE__*/React.createElement("form", {
    className: "lead-card__form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.name ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "user",
    s: 18
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "text",
    autoComplete: "name",
    name: "name",
    placeholder: "Full name",
    "aria-label": "Your full name",
    value: form.name,
    onChange: set('name')
  })), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.email ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "mail",
    s: 18
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "email",
    inputMode: "email",
    autoComplete: "email",
    name: "email",
    placeholder: "Email address",
    "aria-label": "Your email",
    value: form.email,
    onChange: set('email')
  })), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.phone ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "smartphone",
    s: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "lead-card__prefix"
  }, "+1"), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "tel",
    inputMode: "tel",
    autoComplete: "tel-national",
    name: "phone",
    placeholder: "(555) 123-4567",
    "aria-label": "Your US mobile number",
    value: form.phone,
    onChange: set('phone')
  })), firstError ? /*#__PURE__*/React.createElement("p", {
    className: "lead-card__err"
  }, /*#__PURE__*/React.createElement(I, {
    n: "alert-circle",
    s: 14
  }), firstError) : null, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(HomeBtn, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    disabled: busy,
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, busy ? 'Saving your seat…' : 'Save my free seat'))), /*#__PURE__*/React.createElement("p", {
    className: "lead-card__fine"
  }, /*#__PURE__*/React.createElement(I, {
    n: "shield-check",
    s: 14
  }), "Free \xB7 we text your invite and join link \xB7 no spam, ever")));
}
function HomeNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "aw-nav",
    "data-scrolled": scrolled
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cbx-logo",
    href: "#top",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 26,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '.02em',
      color: 'var(--text-muted)'
    }
  }, "AI Systems Architect", /*#__PURE__*/React.createElement("br", null), "Accelerator")), /*#__PURE__*/React.createElement("nav", {
    className: "aw-nav__links",
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#paths"
  }, "Accelerator"), /*#__PURE__*/React.createElement("a", {
    href: "our-story.html"
  }, "Our Story"), /*#__PURE__*/React.createElement("a", {
    href: "student-projects.html"
  }, "Student Projects"), /*#__PURE__*/React.createElement("a", {
    href: "events.html"
  }, "Events"), /*#__PURE__*/React.createElement("a", {
    href: "blog.html"
  }, "Blog"), /*#__PURE__*/React.createElement("a", {
    href: "faq.html"
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "aw-nav__meta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "bg-navpartner",
    href: "#partner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-navpartner__g"
  }, /*#__PURE__*/React.createElement(AnthropicGlyph, {
    s: 14,
    color: "var(--anthropic)"
  })), "Anthropic Partner"), /*#__PURE__*/React.createElement(HomeBtn, {
    size: "sm",
    as: "a",
    href: REGISTER_URL,
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 15
    })
  }, "Join the free Open House"))));
}
function HomeHero() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    let ctx = null;
    const cancel = awWhenVisible(() => {
      if (!ref.current) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power4.out'
          }
        });
        tl.from(ref.current.querySelectorAll('.home-hero__line > span'), {
          yPercent: 115,
          duration: .9,
          stagger: .1
        }, .15).from(ref.current.querySelectorAll('.home-hero__sub, .home-pills, .home-hero__price, .home-hero__cta, .home-hero__trust'), {
          opacity: 0,
          y: 22,
          duration: .6,
          stagger: .09
        }, '-=.45').from(ref.current.querySelector('.aw-hero__card'), {
          opacity: 0,
          y: 34,
          duration: .8
        }, '-=.5');
      }, ref);
    });
    return () => {
      cancel();
      if (ctx) ctx.revert();
    };
  }, []);
  const pills = [{
    t: 'Working professionals',
    c: 'var(--blue-500)',
    href: '#paths'
  }, {
    t: 'Beginners & career switchers',
    c: 'var(--green-600)',
    href: '#paths'
  }, {
    t: 'Builders & founders',
    c: 'var(--red-500)',
    href: '#paths'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-hero aw-grain",
    ref: ref,
    id: "top"
  }, /*#__PURE__*/React.createElement(AwCanvas, null), /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__copy"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "home-hero__h1",
    "aria-label": "From AI curious to AI Systems Architect"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-hero__line"
  }, /*#__PURE__*/React.createElement("span", null, "From AI curious")), /*#__PURE__*/React.createElement("span", {
    className: "home-hero__line"
  }, /*#__PURE__*/React.createElement("span", null, "to ", /*#__PURE__*/React.createElement("span", {
    className: "is-red"
  }, "AI architect")))), /*#__PURE__*/React.createElement("p", {
    className: "home-hero__sub"
  }, "Go from ", /*#__PURE__*/React.createElement("em", null, "using"), " AI to ", /*#__PURE__*/React.createElement("strong", null, "architecting real systems with Claude"), ", through guided projects, a 12-week build path, and an Anthropic-trained team. One membership, three ways in."), /*#__PURE__*/React.createElement("div", {
    className: "home-pills"
  }, pills.map((p, i) => /*#__PURE__*/React.createElement("a", {
    className: "home-pill",
    key: i,
    href: p.href,
    style: {
      '--_c': p.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-pill__dot"
  }), p.t))), /*#__PURE__*/React.createElement("p", {
    className: "home-hero__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-hero__price-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "ticket",
    s: 14
  })), /*#__PURE__*/React.createElement("span", null, "Membership is ", /*#__PURE__*/React.createElement("b", null, "$149/month"), " \xB7 cancel anytime")), /*#__PURE__*/React.createElement("div", {
    className: "home-hero__trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-avatar-group"
  }, /*#__PURE__*/React.createElement(HomeAvatar, {
    name: "Mika Rivera",
    size: "sm",
    style: {
      background: 'var(--blue-600)'
    }
  }), /*#__PURE__*/React.createElement(HomeAvatar, {
    name: "Owen Brooks",
    size: "sm",
    style: {
      background: 'var(--green-700)'
    }
  }), /*#__PURE__*/React.createElement(HomeAvatar, {
    name: "Ada Lovelace",
    size: "sm",
    style: {
      background: 'var(--red-600)'
    }
  }), /*#__PURE__*/React.createElement(HomeAvatar, {
    name: "Sam Okafor",
    size: "sm",
    style: {
      background: 'var(--blue-700)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "home-hero__trust-label"
  }, /*#__PURE__*/React.createElement("b", null, "5,000+"), " careers changed since 2012 \xB7 Texas Workforce Commission approved"))), /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__card"
  }, /*#__PURE__*/React.createElement(HomeRegCard, null))));
}
function HomeMarquee() {
  const items = [/*#__PURE__*/React.createElement("span", {
    key: "a"
  }, "Learn with ", /*#__PURE__*/React.createElement("em", {
    className: "is-blue"
  }, "Claude")), /*#__PURE__*/React.createElement("span", {
    key: "b"
  }, "Build ", /*#__PURE__*/React.createElement("em", {
    className: "is-green"
  }, "real systems")), /*#__PURE__*/React.createElement("span", {
    key: "c"
  }, "Deploy in the ", /*#__PURE__*/React.createElement("em", {
    className: "is-red"
  }, "real world")), /*#__PURE__*/React.createElement("span", {
    key: "d"
  }, "Membership \xB7 $149/month")];
  const list = hidden => /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__list",
    "aria-hidden": hidden || undefined
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__item",
    key: i
  }, it, /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__dot"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-mq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__inner"
  }, list(false), list(true)));
}
Object.assign(window, {
  HomeNav,
  HomeHero,
  HomeMarquee,
  HomeRegCard,
  REGISTER_URL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/ai-home-hero.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/ai-home-sections.jsx
try { (() => {
/* AI Systems Architect Accelerator — HOME sections:
   Stats · Choose your path · How it works · Photo band · Certificate ·
   Logo wall · Testimonials · Pricing · Final CTA */
const {
  Button: HsBtn
} = window.ColaberryDesignSystem_098454;

/* ---- Stat band (scroll count-up; markup carries the fallback values) ---- */
function HomeStats() {
  const ref = React.useRef(null);
  const stats = [{
    n: 5000,
    suffix: '+',
    prefix: '',
    label: 'careers changed since 2012',
    em: true
  }, {
    n: 49,
    suffix: '',
    prefix: '',
    label: 'countries with Colaberry learners'
  }, {
    n: 98,
    suffix: '%',
    prefix: '',
    label: 'employment rate among graduates'
  }, {
    n: 12,
    suffix: '',
    prefix: '',
    label: 'weeks from idea to working AI system'
  }];
  const fmt = v => v.toLocaleString('en-US');
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const ctx = gsap.context(() => {
      ref.current.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const obj = {
          v: 0
        };
        gsap.to(obj, {
          v: target,
          duration: 1.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true
          },
          onUpdate: () => {
            el.textContent = prefix + fmt(Math.round(obj.v)) + suffix;
          }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-stats",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stats__grid"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "aw-stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__n"
  }, s.em ? /*#__PURE__*/React.createElement("em", {
    "data-count": s.n,
    "data-suffix": s.suffix,
    "data-prefix": s.prefix
  }, s.prefix + fmt(s.n) + s.suffix) : /*#__PURE__*/React.createElement("span", {
    "data-count": s.n,
    "data-suffix": s.suffix,
    "data-prefix": s.prefix
  }, s.prefix + fmt(s.n) + s.suffix)), /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__l"
  }, s.label)))));
}

/* ---- Choose your path — three audience routes ---- */
function HomePaths() {
  const paths = [{
    c: 'var(--blue-500)',
    n: '01',
    icon: 'briefcase',
    kick: 'For working professionals',
    h: 'Use AI at work, starting now',
    href: 'working-professionals.html',
    li: ['Apply Claude to real business workflows', 'Research, analysis, planning & automation', 'No ML degree required']
  }, {
    c: 'var(--green-600)',
    n: '02',
    icon: 'sparkles',
    kick: 'For beginners & career switchers',
    h: 'Start AI from the ground up',
    href: 'beginners-career-switchers.html',
    li: ['Learn AI step by step with Claude', 'Guided, hands-on projects', 'Earn your Colaberry AI Certificate']
  }, {
    c: 'var(--red-500)',
    n: '03',
    icon: 'rocket',
    kick: 'For builders & founders',
    h: 'Turn your idea into a system',
    href: 'builders-founders.html',
    li: ['A clear 12-week build path', 'Build with Claude end to end', 'From concept to working product']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "paths",
    "data-screen-label": "Choose your path",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-paths__head"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--red"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "01"), "Choose your path"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "One accelerator.", /*#__PURE__*/React.createElement("br", null), "Three ways in")), /*#__PURE__*/React.createElement("p", {
    "data-rv": true
  }, "Everyone learns with Claude, builds real projects, and joins through the same free Open House. Pick the path that sounds like you. The destination is the same: ", /*#__PURE__*/React.createElement("strong", null, "becoming an AI systems architect."))), /*#__PURE__*/React.createElement("div", {
    className: "home-paths__grid"
  }, paths.map((p, i) => /*#__PURE__*/React.createElement("a", {
    className: "home-path",
    "data-rv": true,
    key: i,
    href: p.href,
    style: {
      '--_c': p.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-path__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-path__icon"
  }, /*#__PURE__*/React.createElement(I, {
    n: p.icon,
    s: 26
  })), /*#__PURE__*/React.createElement("span", {
    className: "home-path__n"
  }, p.n)), /*#__PURE__*/React.createElement("span", {
    className: "home-path__kick"
  }, p.kick), /*#__PURE__*/React.createElement("h3", {
    className: "home-path__h"
  }, p.h), /*#__PURE__*/React.createElement("div", {
    className: "home-path__list"
  }, p.li.map((t, j) => /*#__PURE__*/React.createElement("span", {
    className: "home-path__li",
    key: j
  }, /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 16
  }), t))), /*#__PURE__*/React.createElement("span", {
    className: "home-path__cta"
  }, "Explore this path", /*#__PURE__*/React.createElement(I, {
    n: "arrow-right",
    s: 17
  }))))));
}

/* ---- How it works — the 3-step spine ---- */
function HomeHow() {
  const steps = [{
    c: 'var(--blue-500)',
    n: '1',
    kick: 'Step 01',
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Learn with ", /*#__PURE__*/React.createElement("em", null, "Claude")),
    p: 'Go straight to the source. Learn to use Claude as a real work partner for research, analysis, planning, and problem solving, guided by an Anthropic-trained team.',
    illo: /*#__PURE__*/React.createElement(AwIlloLearn, null)
  }, {
    c: 'var(--green-600)',
    n: '2',
    kick: 'Step 02',
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Build ", /*#__PURE__*/React.createElement("em", null, "real projects")),
    p: 'Skill comes from practice. You build real, guided projects that show how AI works in business, operations, and product. You learn by doing, not just watching.',
    illo: /*#__PURE__*/React.createElement(AwIlloBuild, null)
  }, {
    c: 'var(--red-500)',
    n: '3',
    kick: 'Step 03',
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Deploy in the ", /*#__PURE__*/React.createElement("em", null, "real world")),
    p: 'Ship something that matters. Move from concept to a working AI system you can explain, improve, and put in front of real users, over a focused 12-week build path.',
    illo: /*#__PURE__*/React.createElement(AwIlloDeploy, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "how",
    "data-screen-label": "How it works",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--blue"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "02"), "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Learn. Build. ", /*#__PURE__*/React.createElement("span", {
    className: "is-red"
  }, "Deploy"))), /*#__PURE__*/React.createElement("div", {
    className: "home-steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "home-step",
    "data-rv": true,
    key: i,
    style: {
      '--_c': s.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-step__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-step__num"
  }, s.n), /*#__PURE__*/React.createElement("span", {
    className: "home-step__kick"
  }, s.kick)), /*#__PURE__*/React.createElement("h3", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p), /*#__PURE__*/React.createElement("div", {
    className: "home-step__media"
  }, s.illo)))));
}

/* ---- Photo band — real cohort ---- */
function HomePhoto() {
  const ref = React.useRef(null);
  // Cinematic settle: the cohort photo eases from a gentle zoom to rest as it
  // reveals — one-time, clipped by the frame, skipped for reduced motion.
  React.useEffect(() => {
    if (!ref.current || !window.gsap || !window.ScrollTrigger) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const img = ref.current.querySelector('.home-photo__img');
    if (!img) return;
    const tw = gsap.from(img, {
      scale: 1.08,
      duration: 1.4,
      ease: 'power2.out',
      clearProps: 'transform',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 82%',
        once: true
      }
    });
    return () => {
      if (tw.scrollTrigger) tw.scrollTrigger.kill();
      tw.kill();
    };
  }, []);
  const chips = [{
    icon: 'monitor',
    t: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Live"), " \xB7 online")
  }, {
    icon: 'users',
    t: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Mentor-led"), " cohorts")
  }, {
    icon: 'clock',
    t: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "90-min"), " Open House")
  }, {
    icon: 'award',
    t: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "5,000+"), " graduates")
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "home-photo",
    "data-rv-group": true,
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-photo__layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-photo__text",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-photo__kick"
  }, "Inside the accelerator"), /*#__PURE__*/React.createElement("h3", {
    className: "home-photo__h"
  }, "Real cohorts. Real projects. Real outcomes"), /*#__PURE__*/React.createElement("div", {
    className: "home-photo__stats"
  }, chips.map((c, i) => /*#__PURE__*/React.createElement("span", {
    className: "home-photo__stat",
    key: i
  }, /*#__PURE__*/React.createElement(I, {
    n: c.icon,
    s: 15
  }), c.t)))), /*#__PURE__*/React.createElement("div", {
    className: "home-photo__frame",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("img", {
    className: "home-photo__img",
    src: "../assets/photos/openhouse-cohort.png",
    alt: "A Colaberry cohort working through an AI system design together"
  }))));
}

/* ---- Earn your Colaberry AI Certificate (reuses partner.css .bg-cert2) ----
   Props (from Home tweaks): bento, mood ('ink'|null), accentVars, accentName. */
function HomeCertificate({
  bento = false,
  mood = null,
  accentVars = null,
  accentName = null
} = {}) {
  const ref = React.useRef(null);
  const feats = [{
    icon: 'linkedin',
    c: 'green',
    t: 'Share it on LinkedIn',
    d: 'Showcase your AI build work on your professional profile.'
  }, {
    icon: 'shield-check',
    c: 'blue',
    t: 'Verifiable credential',
    d: 'Every certificate carries a unique link that confirms completion.'
  }, {
    icon: 'briefcase',
    c: 'red',
    t: 'Strengthen your resume',
    d: 'Prove applied AI skill through structured, hands-on projects.'
  }];
  React.useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!window.gsap || !window.ScrollTrigger || reduce) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 86%',
          once: true
        },
        defaults: {
          ease: 'power3.out'
        }
      });
      tl.fromTo('.bg-cdoc', {
        opacity: 0,
        x: 64,
        rotation: -9,
        scale: .93
      }, {
        opacity: 1,
        x: 0,
        rotation: -1.6,
        scale: 1,
        duration: .9,
        clearProps: 'transform'
      }).from('.bg-cdoc__seal', {
        scale: 0,
        rotation: -90,
        duration: .5,
        ease: 'back.out(2)',
        clearProps: 'transform'
      }, '-=.3');
    }, ref);
    return () => ctx.revert();
  }, [bento, mood]);
  const badge = /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__badge"
  }, /*#__PURE__*/React.createElement(I, {
    n: "award",
    s: 14
  }), "Official certificate");
  const heading = /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Earn your Colaberry", /*#__PURE__*/React.createElement("br", null), "AI Certificate");
  const lead = /*#__PURE__*/React.createElement("p", {
    className: "bg-cert2__lead"
  }, "Complete the membership, finish your guided projects, and receive a ", /*#__PURE__*/React.createElement("strong", null, "Colaberry-issued certificate"), " that recognizes the real AI skills you have built.");
  const featsEl = /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2__feats"
  }, feats.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2__feat",
    key: i,
    style: {
      '--_c': 'var(--' + f.c + '-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__ficon"
  }, /*#__PURE__*/React.createElement(I, {
    n: f.icon,
    s: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__ft"
  }, f.t), /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__fd"
  }, f.d)))));
  const cta = /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__cta"
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(HsBtn, {
    size: "lg",
    as: "a",
    href: REGISTER_URL,
    target: "_blank",
    rel: "noopener",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Start your certificate path")));
  const doc = /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2__right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__bar"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/colaberry-horizontal.png",
    alt: "Colaberry",
    className: "bg-cdoc__logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__no"
  }, "No. CB-AI-2026-0148")), /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__kick"
  }, "Certificate of Completion"), /*#__PURE__*/React.createElement("h4", {
    className: "bg-cdoc__prog"
  }, "AI SYSTEMS ARCHITECT"), /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__issued"
  }, "Issued to"), /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__name"
  }, "Your Name"), /*#__PURE__*/React.createElement("p", {
    className: "bg-cdoc__desc"
  }, "Awarded for completing Colaberry's AI Systems Architect Accelerator, learning, building, and deploying with Claude."), /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__date"
  }, /*#__PURE__*/React.createElement("span", null, "Date of issue"), /*#__PURE__*/React.createElement("b", null, "30 March 2026")), /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__sign"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__signline"
  }), /*#__PURE__*/React.createElement("span", null, "Colaberry School")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__seal"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/colaberry-mark-white.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, "VERIFIED")));
  const cls = 'aw-section' + (bento ? ' is-bento' : '');
  const secProps = {
    className: cls,
    id: 'certificate',
    'data-screen-label': 'Certificate',
    ref
  };
  if (mood) secProps['data-mood'] = mood;
  if (accentVars) secProps.style = accentVars;
  if (accentName) secProps['data-accent'] = accentName;
  return /*#__PURE__*/React.createElement("section", secProps, /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2"
  }, bento ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cb2-intro"
  }, badge, heading, lead, cta), /*#__PURE__*/React.createElement("div", {
    className: "cb2-feats"
  }, feats.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2__feat",
    key: i,
    style: {
      '--_c': 'var(--' + f.c + '-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__ficon"
  }, /*#__PURE__*/React.createElement(I, {
    n: f.icon,
    s: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__ft"
  }, f.t), /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__fd"
  }, f.d))))), doc) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2__left"
  }, badge, heading, lead, featsEl, cta), doc)));
}

/* ---- Logo wall ---- */
function HomeLogos() {
  /* Local logo assets — Google/Microsoft/Amazon/Adobe from learn.colaberry.com's
     own set; the rest from Wikimedia Commons (PD-textlogo wordmarks). */
  const base = '../assets/logos/companies/';
  const logos = [{
    src: base + 'google.svg',
    alt: 'Google',
    h: 40
  }, {
    src: base + 'microsoft.svg',
    alt: 'Microsoft',
    h: 38
  }, {
    src: base + 'amazon.svg',
    alt: 'Amazon',
    h: 40
  }, {
    src: base + 'adobe.svg',
    alt: 'Adobe',
    h: 36
  }, {
    src: base + 'meta.svg',
    alt: 'Meta',
    h: 22
  }, {
    src: base + 'ibm.svg',
    alt: 'IBM',
    h: 22
  }, {
    src: base + 'accenture.svg',
    alt: 'Accenture',
    h: 24
  }, {
    src: base + 'cognizant.svg',
    alt: 'Cognizant',
    h: 22
  }, {
    src: base + 'bank-of-america.svg',
    alt: 'Bank of America',
    h: 17
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "home-logos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-logos__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-logos__label"
  }, /*#__PURE__*/React.createElement("b", null, "Our graduates work at"), "top companies worldwide"), /*#__PURE__*/React.createElement("div", {
    className: "home-logos__viewport"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-logos__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-logos__row"
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: l.src,
    alt: l.alt,
    loading: "lazy",
    style: {
      '--h': l.h + 'px'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "home-logos__row",
    "aria-hidden": "true"
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: l.src,
    alt: "",
    loading: "lazy",
    style: {
      '--h': l.h + 'px'
    }
  })))))));
}

/* ---- Testimonials ---- */
function HomeTestimonials() {
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "reviews",
    "data-screen-label": "Reviews",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-ts__head",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--green"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "03"), "Graduate stories"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Careers changed,", /*#__PURE__*/React.createElement("br", null), "in their words")), /*#__PURE__*/React.createElement("div", {
    className: "home-ts__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-tcard home-tcard--feature",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-tcard__stars"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(I, {
    key: i,
    n: "star",
    s: 18
  }))), /*#__PURE__*/React.createElement("p", {
    className: "home-tcard__quote"
  }, "\"Colaberry's project-based teaching enabled me to learn critical data skills and land a ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "rewarding career"), ".\""), /*#__PURE__*/React.createElement("div", {
    className: "home-tcard__by"
  }, /*#__PURE__*/React.createElement("img", {
    className: "home-tcard__avatar",
    src: "../assets/avatars/person-1.png",
    alt: "Kodjovi Togbey"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "home-tcard__name"
  }, "Kodjovi Togbey"), /*#__PURE__*/React.createElement("span", {
    className: "home-tcard__role"
  }, "Colaberry Graduate \xB7 Data & AI")))), /*#__PURE__*/React.createElement("div", {
    className: "home-tcol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-tcard home-tcard--sm",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "home-tcard__quote"
  }, "I came in with no technical background. The guided projects made AI finally click, and I switched careers within the year."), /*#__PURE__*/React.createElement("div", {
    className: "home-tcard__by"
  }, /*#__PURE__*/React.createElement("img", {
    className: "home-tcard__avatar",
    src: "../assets/avatars/person-1.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "home-tcard__name"
  }, "Maria Delgado"), /*#__PURE__*/React.createElement("span", {
    className: "home-tcard__role"
  }, "Career switcher \u2192 AI Analyst")))), /*#__PURE__*/React.createElement("div", {
    className: "home-tcard home-tcard--sm",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "home-tcard__quote"
  }, "I had an idea for two years. In the 12-week build path I turned it into a working Claude-powered tool my team actually uses."), /*#__PURE__*/React.createElement("div", {
    className: "home-tcard__by"
  }, /*#__PURE__*/React.createElement("img", {
    className: "home-tcard__avatar",
    src: "../assets/avatars/person-2.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "home-tcard__name"
  }, "Daniel Okeke"), /*#__PURE__*/React.createElement("span", {
    className: "home-tcard__role"
  }, "Founder \xB7 Builders path")))))));
}

/* ---- Pricing strip ---- */
function HomePricing() {
  const tags = ['Cancel anytime', 'Live online sessions', 'Anthropic-trained team', 'Colaberry AI Certificate'];
  return /*#__PURE__*/React.createElement("div", {
    className: "home-price",
    id: "pricing",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-price__inner",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "home-price__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-price__num"
  }, "$149"), /*#__PURE__*/React.createElement("span", {
    className: "home-price__per"
  }, "/ month")), /*#__PURE__*/React.createElement("p", {
    className: "home-price__sub"
  }, "Membership is ", /*#__PURE__*/React.createElement("b", null, "$149/month"), ". Every path begins inside the free Open House. No payment to attend."), /*#__PURE__*/React.createElement("div", {
    className: "home-price__tags"
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    className: "home-price__tag",
    key: i
  }, /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 14
  }), t)))), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(HsBtn, {
    size: "lg",
    as: "a",
    href: REGISTER_URL,
    target: "_blank",
    rel: "noopener",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Join the free Open House"))));
}

/* ---- Final CTA + tagline ---- */
function HomeFinal() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "aw-final aw-grain aw-grain--light",
    id: "reserve",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("img", {
    className: "aw-final__mark",
    src: "../assets/logo/colaberry-mark-white.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "aw-final__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-final__kicker",
    "data-rv": true
  }, "FREE OPEN HOUSE \xB7 LIVE ONLINE \xB7 MEMBERSHIP \xB7 $149/MO"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-final__h",
    "data-rv": true
  }, "Join the free", /*#__PURE__*/React.createElement("br", null), "Open House"), /*#__PURE__*/React.createElement("p", {
    className: "aw-final__p",
    "data-rv": true
  }, "See inside the AI Systems Architect Accelerator. Meet the Anthropic-trained team, see real projects, and find the path that fits, whether you're a professional, a career switcher, or a builder."), /*#__PURE__*/React.createElement("span", {
    className: "aw-final__btn",
    "data-rv": true
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(HsBtn, {
    size: "lg",
    as: "a",
    href: REGISTER_URL,
    target: "_blank",
    rel: "noopener",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Reserve my free seat"))), /*#__PURE__*/React.createElement("div", {
    className: "aw-final__meta",
    "data-rv": true
  }, "LEARN WITH CLAUDE \xB7 BUILD REAL SYSTEMS \xB7 DEPLOY IN THE REAL WORLD"))), /*#__PURE__*/React.createElement("div", {
    className: "home-tagline"
  }, /*#__PURE__*/React.createElement("span", null, "Learn with ", /*#__PURE__*/React.createElement("span", {
    className: "is-blue"
  }, "Claude"), ". Build through ", /*#__PURE__*/React.createElement("span", {
    className: "is-green"
  }, "Colaberry"), ". Deploy in the ", /*#__PURE__*/React.createElement("span", {
    className: "is-red"
  }, "real world"), ".")));
}
Object.assign(window, {
  HomeStats,
  HomePaths,
  HomeHow,
  HomePhoto,
  HomeCertificate,
  HomeLogos,
  HomeTestimonials,
  HomePricing,
  HomeFinal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/ai-home-sections.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/ai-parts.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* AI Systems Architect Accelerator — shared parts (Logo, Reveal, AnnouncementBar, Header, Footer) */
const {
  Button: CBButton
} = window.ColaberryDesignSystem_098454;

/* React-safe Lucide icon — React owns the <span>, Lucide swaps the inner <i>. */
function I({
  n,
  s,
  c,
  className = '',
  style
}) {
  const st = {
    fontSize: s ? s + 'px' : undefined,
    color: c,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", {
    className: 'cb-i ' + className,
    "aria-hidden": "true",
    style: st,
    dangerouslySetInnerHTML: {
      __html: `<i data-lucide="${n}"></i>`
    }
  });
}

/* Scroll-reveal wrapper: adds .is-in once the element enters the viewport. */
function Reveal({
  as = 'div',
  className = '',
  style,
  delay = 0,
  children,
  ...rest
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.04,
      rootMargin: '0px 0px 10% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  const cls = 'reveal ' + (seen ? 'is-in ' : '') + className;
  const st = delay ? {
    transitionDelay: delay + 'ms',
    ...style
  } : style;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: cls,
    style: st
  }, rest), children);
}

/* Thin brand-gradient bar that tracks scroll progress. */
function ScrollProgress() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pxEls = Array.from(document.querySelectorAll('[data-parallax]'));
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      const p = Math.max(0, Math.min(1, (window.scrollY || doc.scrollTop) / max));
      if (ref.current) ref.current.style.setProperty('--p', p.toFixed(4));
      if (!reduce && pxEls.length) {
        const half = (window.innerHeight || doc.clientHeight) / 2;
        for (const el of pxEls) {
          const sp = parseFloat(el.getAttribute('data-parallax')) || 0;
          const r = el.getBoundingClientRect();
          const fromCenter = r.top + r.height / 2 - half;
          el.style.transform = 'translate3d(0,' + (-fromCenter * sp).toFixed(1) + 'px,0)';
        }
      }
    };
    window.addEventListener('scroll', update, {
      passive: true
    });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "cbx-progress",
    ref: ref,
    "aria-hidden": "true"
  });
}
function Logo({
  height = 30
}) {
  const src = window.__resources && window.__resources.logoColor || '../assets/logo/colaberry-horizontal.png';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Colaberry",
    style: {
      height,
      display: 'block'
    }
  });
}

/* ---- Sticky announcement bar ---- */
function AnnouncementBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "cbx-ann"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbx-ann__shine",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cbx-ann__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbx-ann__msg"
  }, /*#__PURE__*/React.createElement(I, {
    n: "megaphone"
  }), "Turn your AI idea into a real system in 12 weeks", /*#__PURE__*/React.createElement("span", {
    className: "cbx-ann__sep"
  }, "\xB7"), "Join the free Open House"), /*#__PURE__*/React.createElement("a", {
    className: "cbx-ann__cta",
    href: "https://learn.colaberry.com/",
    target: "_blank",
    rel: "noopener"
  }, "Reserve my free seat", /*#__PURE__*/React.createElement(I, {
    n: "arrow-right",
    s: 14
  }))));
}
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "cbx-header",
    "data-scrolled": scrolled
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbx-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cbx-logo",
    href: "#top"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("span", {
    className: "cbx-logo__div"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cbx-logo__tag"
  }, "AI Systems Architect", /*#__PURE__*/React.createElement("br", null), "Accelerator")), /*#__PURE__*/React.createElement("div", {
    className: "cbx-header__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbx-header__date"
  }, /*#__PURE__*/React.createElement(I, {
    n: "monitor",
    s: 16
  }), "Free Open House \xB7 Live online"), /*#__PURE__*/React.createElement(CBButton, {
    size: "sm",
    as: "a",
    href: "https://learn.colaberry.com/",
    target: "_blank",
    rel: "noopener",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 15
    })
  }, "Reserve my free seat"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "cbx-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbx-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbx-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWhite || '../assets/logo/colaberry-horizontal-white.png',
    alt: "Colaberry",
    style: {
      height: 30,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", null, "Learn with Claude. Build through Colaberry. Deploy in the real world. Helping people move from AI consumer to AI builder since 2012.")), /*#__PURE__*/React.createElement("div", {
    className: "cbx-footer__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "calendar-days",
    s: 16
  }), "Free Open House"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "monitor",
    s: 16
  }), "Live online event"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "map-pin",
    s: 16
  }), "Plano, TX \xB7 Boston, MA"))), /*#__PURE__*/React.createElement("div", {
    className: "cbx-footer__bar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \xB7 Colaberry School of Data and AI is operated by Colaberry Inc. \xB7 Texas Workforce Commission approved"), /*#__PURE__*/React.createElement("span", null, "AI Systems Architect Accelerator \xB7 Founding Cohort"))));
}
Object.assign(window, {
  I,
  Reveal,
  ScrollProgress,
  Logo,
  AnnouncementBar,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/ai-parts.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/ai-site-nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Unified site navigation — React component (home + landing pages).
   Mirrors the vanilla nav in site-chrome.js exactly (.snav markup, v2 IA).
   IA: Programs ▾ · Student Projects · Events · Resources ▾ · About ▾  |  Partner · Log In · Start free */
const SITE_HOME = 'accelerator.html';
const SITE_LIVE = 'https://training.colaberry.com';
const SITE_START = SITE_LIVE + '/start-free';
const SITE_LOGIN = 'https://enterprise.colaberry.ai/portal/login';
const SITE_NAV = {
  paths: [{
    n: '01',
    t: 'Working professionals',
    d: 'Use AI at work, starting now',
    href: 'working-professionals.html'
  }, {
    n: '02',
    t: 'Beginners & career switchers',
    d: 'Start AI from the ground up',
    href: 'beginners-career-switchers.html'
  }, {
    n: '03',
    t: 'Builders & founders',
    d: 'Turn your idea into a system',
    href: 'builders-founders.html'
  }],
  programsAside: [{
    t: 'How it works',
    d: 'Learn, build, deploy',
    href: SITE_HOME + '#how'
  }, {
    t: 'Anthropic certification',
    d: 'Earn a verifiable credential',
    href: SITE_HOME + '#partner'
  }, {
    t: 'Graduate stories',
    d: 'Careers changed, in their words',
    href: SITE_HOME + '#reviews'
  }],
  resources: [{
    k: 'Watch, read & listen',
    items: [{
      id: 'shorts',
      t: 'Shorts',
      d: 'Quick AI lessons in under 60 seconds',
      href: 'shorts.html'
    }, {
      id: 'blog',
      t: 'Blog',
      d: 'Guides and field notes',
      href: 'blog.html'
    }, {
      id: 'podcast',
      t: 'Podcast',
      d: 'Conversations with AI builders',
      href: 'podcasts.html'
    }, {
      id: 'book',
      t: 'Trust Before Intelligence',
      d: 'The book by founder Ram Katamaraja',
      href: 'https://trustbeforeintelligence.ai/',
      ext: true
    }]
  }, {
    k: 'Get answers',
    items: [{
      id: 'knowledge',
      t: 'Knowledge Base',
      d: 'Concepts, terms and how-tos',
      href: SITE_LIVE + '/knowledge',
      ext: true
    }, {
      id: 'faq',
      t: 'FAQ',
      d: 'Membership, pricing, schedule',
      href: 'faq.html'
    }]
  }],
  about: [{
    id: 'our-story',
    t: 'Our Story',
    d: 'Helping people build with AI since 2012',
    href: 'our-story.html'
  }, {
    id: 'partner',
    t: 'Anthropic partnership',
    d: 'Member, Claude Partner Network',
    href: SITE_HOME + '#partner'
  }, {
    id: 'contact',
    t: 'Contact',
    d: 'Talk to our admissions team',
    href: 'contact.html'
  }],
  projects: {
    id: 'student-projects',
    t: 'Student Projects',
    href: 'student-projects.html'
  },
  events: {
    id: 'events',
    t: 'Events',
    href: 'events.html'
  }
};
/* Primary CTA: if the page has its own lead form (home + audience pages), scroll to it
   and focus the first field instead of leaving the page. Otherwise go to /start-free. */
function siteStartClick(e) {
  const f = document.querySelector('.lead-card__form');
  if (!f) return;
  e.preventDefault();
  const card = f.closest('.lead-card') || f;
  const y = card.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({
    top: Math.max(0, y),
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  });
  const inp = f.querySelector('input:not([type=hidden]):not([tabindex="-1"])');
  if (inp) setTimeout(() => inp.focus({
    preventScroll: true
  }), 450);
}
function SiteCta() {
  return /*#__PURE__*/React.createElement("a", {
    className: "snav__cta",
    href: SITE_START,
    onClick: siteStartClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "snav__cta-l"
  }, "Start learning free"), /*#__PURE__*/React.createElement("span", {
    className: "snav__cta-s"
  }, "Start free"), /*#__PURE__*/React.createElement("span", {
    className: "cb-i"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })));
}
const SITE_VIBING = {
  id: 'ai-dev-wire',
  t: "What's Vibing",
  href: SITE_LIVE + '/ai-dev-wire'
};
const SITE_NETWORK = [{
  t: 'AI Accelerator Program',
  href: SITE_HOME,
  current: true
}, {
  t: 'For Enterprise AI',
  href: 'https://enterprise.colaberry.ai/',
  ext: true
}, {
  t: 'Tech on Colaberry',
  href: 'https://colaberry.ai',
  ext: true
}];
/* Utility bar scrolls away; the fixed main row follows it up (--ubar-y). */
function siteUbarSync() {
  document.documentElement.style.setProperty('--ubar-y', Math.max(0, 36 - window.scrollY) + 'px');
}
function SiteUtilityBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "snav-ubar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "snav-ubar__in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "snav-ubar__vibe",
    href: SITE_VIBING.href
  }, /*#__PURE__*/React.createElement("span", {
    className: "snav-ubar__dot",
    "aria-hidden": "true"
  }), SITE_VIBING.t, /*#__PURE__*/React.createElement("span", {
    className: "snav-ubar__vibe-d"
  }, "AI dev news"), /*#__PURE__*/React.createElement("span", {
    className: "cb-i"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "snav-ubar__sites",
    "aria-label": "Colaberry sites"
  }, SITE_NETWORK.map(s => /*#__PURE__*/React.createElement("a", _extends({
    key: s.t,
    href: s.href,
    "aria-current": s.current ? 'true' : undefined
  }, s.ext ? {
    target: '_blank',
    rel: 'noopener'
  } : {}), s.t, s.ext && /*#__PURE__*/React.createElement("span", {
    className: "cb-i"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right"
  })))))));
}
const SITE_GROUP_OF = {
  accelerator: 'programs',
  'our-story': 'about',
  contact: 'about',
  blog: 'resources',
  podcast: 'resources',
  shorts: 'resources',
  faq: 'resources',
  events: 'events',
  'student-projects': 'student-projects'
};
function SiteSpark({
  s = 15,
  color = '#fff'
}) {
  const rays = [];
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4;
    const inner = i % 2 === 0 ? 3.4 : 4.4;
    const outer = i % 2 === 0 ? 10.4 : 8.6;
    rays.push(/*#__PURE__*/React.createElement("line", {
      key: i,
      x1: 12 + Math.cos(a) * inner,
      y1: 12 + Math.sin(a) * inner,
      x2: 12 + Math.cos(a) * outer,
      y2: 12 + Math.sin(a) * outer,
      stroke: color,
      strokeWidth: "2.4",
      strokeLinecap: "round"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, rays);
}
function SitePartner({
  link = true
}) {
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "snav-partner__ic"
  }, /*#__PURE__*/React.createElement(SiteSpark, {
    s: 15,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    className: "snav-partner__tx"
  }, /*#__PURE__*/React.createElement("small", null, "Member"), /*#__PURE__*/React.createElement("b", null, "Anthropic Partner")));
  const label = 'Colaberry is an Anthropic Partner, member of the Claude Partner Network';
  if (!link) return /*#__PURE__*/React.createElement("span", {
    className: "snav-partner",
    "aria-label": label
  }, inner);
  return /*#__PURE__*/React.createElement("a", {
    className: "snav-partner",
    href: SITE_HOME + '#partner',
    "aria-label": label
  }, inner);
}
function SiteRow({
  it,
  active
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "snav__row",
    href: it.href,
    "data-ext": it.ext ? '' : undefined,
    "aria-current": it.id && it.id === active ? 'page' : undefined
  }, /*#__PURE__*/React.createElement("b", null, it.t), /*#__PURE__*/React.createElement("span", null, it.d));
}
function SiteNav({
  active = '',
  campaign = false
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = React.useState('');
  const navRef = React.useRef(null);
  React.useEffect(() => {
    document.querySelectorAll('#siteNav, #siteMenu, .snav-ubar').forEach(e => {
      if (!e.closest('#root')) e.remove();
    });
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (!campaign) siteUbarSync();
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    const onDoc = e => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenu('');
    };
    const onKey = e => {
      if (e.key === 'Escape') setMenu('');
    };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const c = document.querySelector('.snav-menu__close');
    if (c) c.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      const b = document.querySelector('.snav__burger');
      if (b) b.focus();
    };
  }, [open]);
  if (campaign) {
    return /*#__PURE__*/React.createElement("header", {
      className: "snav",
      "data-scrolled": scrolled
    }, /*#__PURE__*/React.createElement("div", {
      className: "snav__in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "snav__brand"
    }, /*#__PURE__*/React.createElement("a", {
      className: "snav__logo",
      href: "#top",
      "aria-label": "Back to top"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../assets/logo/colaberry-horizontal.png",
      alt: "Colaberry"
    })), /*#__PURE__*/React.createElement(SitePartner, {
      link: false
    })), /*#__PURE__*/React.createElement("div", {
      className: "snav__meta snav__meta--campaign",
      style: {
        marginLeft: 'auto'
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "snav__login",
      href: SITE_LOGIN
    }, /*#__PURE__*/React.createElement("span", {
      className: "cb-i"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "log-in"
    })), "Log In"), /*#__PURE__*/React.createElement(SiteCta, null))));
  }
  const group = SITE_GROUP_OF[active] || '';
  const N = SITE_NAV;
  const dd = (id, label, panel) => /*#__PURE__*/React.createElement("li", {
    className: "snav__item",
    "data-open": menu === id,
    "data-current": group === id ? 'true' : undefined,
    onKeyDown: e => {
      if (e.key === 'Escape') setMenu('');
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "snav__link",
    type: "button",
    "aria-expanded": menu === id,
    "aria-controls": 'snav-p-' + id,
    onClick: () => setMenu(menu === id ? '' : id)
  }, label, /*#__PURE__*/React.createElement("span", {
    className: "snav__chev",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "snav__panel",
    id: 'snav-p-' + id
  }, panel));
  const plain = it => /*#__PURE__*/React.createElement("li", {
    className: "snav__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "snav__link",
    href: it.href,
    "aria-current": group === it.id ? 'page' : undefined
  }, it.t));
  const close = () => setOpen(false);
  const mlink = (it, key) => /*#__PURE__*/React.createElement("a", {
    key: key || it.t,
    href: it.href,
    "aria-current": it.id && it.id === active ? 'page' : undefined,
    onClick: close
  }, /*#__PURE__*/React.createElement("span", null, it.t, it.d && /*#__PURE__*/React.createElement("small", null, it.d)), /*#__PURE__*/React.createElement("span", {
    className: "cb-i"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.ext ? 'arrow-up-right' : 'arrow-right'
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteUtilityBar, null), /*#__PURE__*/React.createElement("header", {
    className: "snav snav--ubar",
    "data-scrolled": scrolled,
    ref: navRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "snav__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "snav__brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "snav__logo",
    href: SITE_HOME,
    "aria-label": "Colaberry home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/colaberry-horizontal.png",
    alt: "Colaberry"
  })), /*#__PURE__*/React.createElement(SitePartner, null)), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "snav__links"
  }, dd('programs', 'Programs', /*#__PURE__*/React.createElement("div", {
    className: "snav__card snav__card--programs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "snav__paths"
  }, /*#__PURE__*/React.createElement("span", {
    className: "snav__kicker"
  }, "AI Systems Architect Accelerator"), N.paths.map(p => /*#__PURE__*/React.createElement("a", {
    className: "snav__path",
    key: p.n,
    href: p.href
  }, /*#__PURE__*/React.createElement("i", null, p.n), /*#__PURE__*/React.createElement("b", null, p.t), /*#__PURE__*/React.createElement("span", null, p.d)))), /*#__PURE__*/React.createElement("div", {
    className: "snav__aside"
  }, /*#__PURE__*/React.createElement("span", {
    className: "snav__kicker"
  }, "Inside the program"), N.programsAside.map(it => /*#__PURE__*/React.createElement(SiteRow, {
    key: it.t,
    it: it,
    active: active
  })), /*#__PURE__*/React.createElement("div", {
    className: "snav__price"
  }, "Membership from ", /*#__PURE__*/React.createElement("b", null, "$149/month"), " \xB7 cancel anytime")))), plain(N.projects), plain(N.events), dd('resources', 'Resources', /*#__PURE__*/React.createElement("div", {
    className: "snav__card snav__card--cols"
  }, N.resources.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.k
  }, /*#__PURE__*/React.createElement("span", {
    className: "snav__kicker"
  }, c.k), c.items.map(it => /*#__PURE__*/React.createElement(SiteRow, {
    key: it.t,
    it: it,
    active: active
  })))))), dd('about', 'About', /*#__PURE__*/React.createElement("div", {
    className: "snav__card"
  }, N.about.map(it => /*#__PURE__*/React.createElement(SiteRow, {
    key: it.t,
    it: it,
    active: active
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "snav__meta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "snav__login",
    href: SITE_LOGIN
  }, /*#__PURE__*/React.createElement("span", {
    className: "cb-i"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "log-in"
  })), "Log In"), /*#__PURE__*/React.createElement(SiteCta, null), /*#__PURE__*/React.createElement("button", {
    className: "snav__burger",
    "aria-label": "Open menu",
    "aria-expanded": open,
    onClick: () => setOpen(true)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cb-i"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "menu"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "snav-menu",
    "data-open": open,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "snav-menu__top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/colaberry-horizontal.png",
    alt: "Colaberry"
  }), /*#__PURE__*/React.createElement("button", {
    className: "snav-menu__close",
    "aria-label": "Close menu",
    onClick: close
  }, /*#__PURE__*/React.createElement("span", {
    className: "cb-i"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "snav-menu__body"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "snav-menu__group",
    "aria-label": "Programs"
  }, /*#__PURE__*/React.createElement("h6", null, "Programs"), N.paths.map(p => mlink(p, p.n)), mlink({
    t: 'How it works',
    href: SITE_HOME + '#how'
  })), /*#__PURE__*/React.createElement("nav", {
    className: "snav-menu__group",
    "aria-label": "Explore"
  }, /*#__PURE__*/React.createElement("h6", null, "Explore"), mlink(N.projects), mlink(N.events), mlink(SITE_VIBING)), /*#__PURE__*/React.createElement("nav", {
    className: "snav-menu__group",
    "aria-label": "Resources"
  }, /*#__PURE__*/React.createElement("h6", null, "Resources"), N.resources.flatMap(c => c.items).map(it => mlink({
    ...it,
    d: undefined
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "snav-menu__group",
    "aria-label": "About"
  }, /*#__PURE__*/React.createElement("h6", null, "About"), mlink({
    id: 'our-story',
    t: 'Our Story',
    href: 'our-story.html'
  }), mlink({
    id: 'contact',
    t: 'Contact',
    href: 'contact.html'
  })), /*#__PURE__*/React.createElement("nav", {
    className: "snav-menu__group",
    "aria-label": "Colaberry sites"
  }, /*#__PURE__*/React.createElement("h6", null, "More from Colaberry"), SITE_NETWORK.filter(s => s.ext).map(s => mlink({
    t: s.t,
    href: s.href,
    ext: true
  }))), /*#__PURE__*/React.createElement("a", {
    className: "snav-menu__partner",
    href: SITE_HOME + '#partner',
    onClick: close
  }, /*#__PURE__*/React.createElement("span", {
    className: "snav-partner__ic"
  }, /*#__PURE__*/React.createElement(SiteSpark, {
    s: 17,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("small", null, "Claude Partner Network"), /*#__PURE__*/React.createElement("b", null, "Anthropic Partner")))), /*#__PURE__*/React.createElement("div", {
    className: "snav-menu__foot"
  }, /*#__PURE__*/React.createElement("a", {
    className: "snav-menu__login",
    href: SITE_LOGIN
  }, "Log In"), /*#__PURE__*/React.createElement("a", {
    className: "snav-menu__cta",
    href: SITE_START,
    onClick: e => {
      close();
      siteStartClick(e);
    }
  }, "Start learning free"))));
}
Object.assign(window, {
  SiteNav,
  SitePartner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/ai-site-nav.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/bf-close.jsx
try { (() => {
/* Builders & Founders — The Transformation, Pricing, Closing */
const {
  Button: BfCloseBtn
} = window.ColaberryDesignSystem_098454;

/* "The Transformation" — before / after */
function BfTransformation() {
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__head",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--green"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "06"), "The transformation"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "From idea to", /*#__PURE__*/React.createElement("br", null), "working system")), /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__card wp-tf__card--before",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-tf__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "circle-dashed",
    s: 14
  }), "Before"), /*#__PURE__*/React.createElement("h3", null, "You have an idea, but no way to make it real"), /*#__PURE__*/React.createElement("p", null, "You have an idea. You know AI can help. But you are not sure how to build it, structure it, or make it real.")), /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(I, {
    n: "arrow-right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__card wp-tf__card--after",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-tf__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "circle-check",
    s: 14
  }), "After"), /*#__PURE__*/React.createElement("h3", null, "You have a clear build path and a working system"), /*#__PURE__*/React.createElement("p", null, "You have a clear build path. You understand how to use Claude in the process. You start building your AI-powered system: ", /*#__PURE__*/React.createElement("strong", null, "something you can improve, demonstrate, and continue developing.")))));
}

/* Pricing strip — $149/month only (lowest tier per Sohail) */
function BfPricing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wp-price"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-price__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wp-price__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-price__num"
  }, /*#__PURE__*/React.createElement("span", null, "$149")), /*#__PURE__*/React.createElement("span", {
    className: "wp-price__per"
  }, "/ month")), /*#__PURE__*/React.createElement("p", {
    className: "wp-price__sub"
  }, "Membership is $149/month. Begin inside the free Open House.")), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BfCloseBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Join the free Open House"))));
}

/* Closing CTA — cherry band + brand tagline */
function BfFinal() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "aw-final aw-grain aw-grain--light",
    id: "reserve",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("img", {
    className: "aw-final__mark",
    src: window.__resources && window.__resources.markWhite || "../assets/logo/colaberry-mark-white.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "aw-final__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-final__kicker",
    "data-rv": true
  }, "FREE OPEN HOUSE \xB7 LIVE ONLINE \xB7 MEMBERSHIP \xB7 $149/MO"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-final__h",
    "data-rv": true
  }, "Join the free", /*#__PURE__*/React.createElement("br", null), "Open House"), /*#__PURE__*/React.createElement("p", {
    className: "aw-final__p",
    "data-rv": true
  }, "See how Colaberry's AI Membership helps builders and idea owners turn ideas into AI-powered systems. Membership is $149/month."), /*#__PURE__*/React.createElement("span", {
    className: "aw-final__btn",
    "data-rv": true
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BfCloseBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Join the free Open House"))), /*#__PURE__*/React.createElement("div", {
    className: "aw-final__meta",
    "data-rv": true
  }, "TURN YOUR AI IDEA INTO A WORKING SYSTEM"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-tagline"
  }, /*#__PURE__*/React.createElement("span", null, "Learn with ", /*#__PURE__*/React.createElement("span", {
    className: "is-blue"
  }, "Claude"), ". Build through ", /*#__PURE__*/React.createElement("span", {
    className: "is-green"
  }, "Colaberry"), ". Deploy in the ", /*#__PURE__*/React.createElement("span", {
    className: "is-red"
  }, "real world"), ".")));
}
Object.assign(window, {
  BfTransformation,
  BfPricing,
  BfFinal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/bf-close.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/bf-hero.jsx
try { (() => {
/* Builders & Founders — Hero, Reg card, Marquee, Stats */
const {
  Button: BfBtn,
  Input: BfInput,
  Avatar: BfAvatar
} = window.ColaberryDesignSystem_098454;
const BF_DATE = 'Live online · 90 minutes';

/* On submit we capture email + mobile and redirect to the thank-you page.
   Swap this for the real OpenHouseModal → /api/leads POST at integration time. */
const BF_THANKYOU = 'https://form.jotform.com/251193437881463';
function BfRegCard() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  const set = k => e => {
    let v = e.target.value;
    if (k === 'phone') {
      const d = v.replace(/\D/g, '').replace(/^1/, '').slice(0, 10);
      v = d.length > 6 ? '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6) : d.length > 3 ? '(' + d.slice(0, 3) + ') ' + d.slice(3) : d;
    }
    setForm(f => ({
      ...f,
      [k]: v
    }));
    setErrors(er => er[k] ? {
      ...er,
      [k]: null
    } : er);
  };
  const submit = e => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    const er = {};
    if (!form.name.trim()) er.name = 'Please add your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) er.email = form.email.trim() ? 'Enter a valid email address.' : 'Please add your email.';
    if (digits.length !== 10) er.phone = form.phone.trim() ? 'Enter a 10-digit US mobile number.' : 'Please add your mobile number.';
    if (Object.keys(er).length) {
      setErrors(er);
      return;
    }
    setBusy(true);
    const q = new URLSearchParams({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: '+1' + digits
    });
    window.location.href = BF_THANKYOU + '?' + q.toString();
  };
  React.useEffect(() => {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }, []);
  const firstError = errors.name || errors.email || errors.phone;
  return /*#__PURE__*/React.createElement("div", {
    className: "lead-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lead-card__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__dot"
  }), "Live \xB7 Free Open House"), /*#__PURE__*/React.createElement("span", {
    className: "lead-card__when"
  }, /*#__PURE__*/React.createElement(I, {
    n: "clock",
    s: 14
  }), "90 min \xB7 online")), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "lead-card__h"
  }, "Save your free seat"), /*#__PURE__*/React.createElement("p", {
    className: "lead-card__sub"
  }, "Bring your idea. See how builders like you turn ideas into shipped AI systems."), /*#__PURE__*/React.createElement("form", {
    className: "lead-card__form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.name ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "user",
    s: 18
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "text",
    autoComplete: "name",
    name: "name",
    placeholder: "Full name",
    "aria-label": "Your full name",
    value: form.name,
    onChange: set('name')
  })), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.email ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "mail",
    s: 18
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "email",
    inputMode: "email",
    autoComplete: "email",
    name: "email",
    placeholder: "Email address",
    "aria-label": "Your email",
    value: form.email,
    onChange: set('email')
  })), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.phone ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "smartphone",
    s: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "lead-card__prefix"
  }, "+1"), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "tel",
    inputMode: "tel",
    autoComplete: "tel-national",
    name: "phone",
    placeholder: "(555) 123-4567",
    "aria-label": "Your US mobile number",
    value: form.phone,
    onChange: set('phone')
  })), firstError ? /*#__PURE__*/React.createElement("p", {
    className: "lead-card__err"
  }, /*#__PURE__*/React.createElement(I, {
    n: "alert-circle",
    s: 14
  }), firstError) : null, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BfBtn, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    disabled: busy,
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, busy ? 'Saving your seat…' : 'Save my free seat'))), /*#__PURE__*/React.createElement("p", {
    className: "lead-card__fine"
  }, /*#__PURE__*/React.createElement(I, {
    n: "shield-check",
    s: 14
  }), "Free \xB7 we text your invite and join link \xB7 no spam, ever")));
}
function BfHero() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    let ctx = null;
    const cancel = awWhenVisible(() => {
      if (!ref.current) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power4.out'
          }
        });
        tl.from(ref.current.querySelector('.bg-partbadge'), {
          opacity: 0,
          y: 10,
          duration: .5
        }, 0).from(ref.current.querySelectorAll('.wp-line__in'), {
          yPercent: 115,
          duration: .9,
          stagger: .12
        }, .12).from(ref.current.querySelectorAll('.aw-hero__sub, .wp-hero__price, .wp-hero__cta, .wp-hero__trust'), {
          opacity: 0,
          y: 22,
          duration: .65,
          stagger: .1
        }, '-=.4').from(ref.current.querySelector('.aw-hero__card'), {
          opacity: 0,
          y: 34,
          duration: .8
        }, '-=.5').from(ref.current.querySelectorAll('.bg-proof .bg-proofcard'), {
          opacity: 0,
          y: 24,
          duration: .6,
          stagger: .12
        }, '-=.45');
      }, ref);
    });
    return () => {
      cancel();
      if (ctx) ctx.revert();
    };
  }, []);
  const Badge = window.BgPartnerBadge;
  const Proof = window.BgProofCards;
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-hero aw-grain",
    ref: ref,
    id: "top"
  }, /*#__PURE__*/React.createElement(AwCanvas, null), /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__copy"
  }, Badge ? /*#__PURE__*/React.createElement(Badge, null) : null, /*#__PURE__*/React.createElement("h1", {
    className: "wp-hero__h1",
    "aria-label": "Turn your AI idea into a working system"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__in"
  }, "Turn your AI idea"))), /*#__PURE__*/React.createElement("span", {
    className: "wp-line",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__in"
  }, "into a ", /*#__PURE__*/React.createElement("em", null, "working system"))))), /*#__PURE__*/React.createElement("p", {
    className: "aw-hero__sub"
  }, "You have an idea. Now you need the structure, tools, and guidance to build it. As a certified member of the ", /*#__PURE__*/React.createElement("strong", null, "Claude Partner Network"), ", Colaberry helps builders, entrepreneurs, and idea owners use Claude, live projects, and guided support to turn ideas into real AI-powered systems."), /*#__PURE__*/React.createElement("p", {
    className: "wp-hero__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-hero__price-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "ticket",
    s: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "wp-hero__price-tx"
  }, "Membership starts at ", /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("span", null, "$149"), "/month"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-hero__trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-avatar-group"
  }, /*#__PURE__*/React.createElement(BfAvatar, {
    name: "Mika Rivera",
    size: "sm",
    style: {
      background: 'var(--green-700)'
    }
  }), /*#__PURE__*/React.createElement(BfAvatar, {
    name: "Owen Brooks",
    size: "sm",
    style: {
      background: 'var(--blue-600)'
    }
  }), /*#__PURE__*/React.createElement(BfAvatar, {
    name: "Ada Lovelace",
    size: "sm",
    style: {
      background: 'var(--red-600)'
    }
  }), /*#__PURE__*/React.createElement(BfAvatar, {
    name: "Sam Okafor",
    size: "sm",
    style: {
      background: 'var(--blue-700)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "wp-hero__trust-label"
  }, /*#__PURE__*/React.createElement("b", null, "5,000+"), " learners supported since 2012 \xB7 Texas Workforce Commission approved"))), /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__card"
  }, /*#__PURE__*/React.createElement(BfRegCard, null))), Proof ? /*#__PURE__*/React.createElement(Proof, null) : null));
}
function BfMarquee() {
  const items = [/*#__PURE__*/React.createElement("span", {
    key: "a"
  }, "Certified ", /*#__PURE__*/React.createElement("em", {
    className: "is-blue"
  }, "Claude Partner Network")), /*#__PURE__*/React.createElement("span", {
    key: "b"
  }, "Turn ideas into ", /*#__PURE__*/React.createElement("em", {
    className: "is-green"
  }, "working systems")), /*#__PURE__*/React.createElement("span", {
    key: "c"
  }, "From idea to ", /*#__PURE__*/React.createElement("em", {
    className: "is-red"
  }, "build plan")), /*#__PURE__*/React.createElement("span", {
    key: "d"
  }, "Anthropic Academy-trained team"), /*#__PURE__*/React.createElement("span", {
    key: "e"
  }, "Membership \xB7 $149/month")];
  const list = hidden => /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__list",
    "aria-hidden": hidden || undefined
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__item",
    key: i
  }, it, /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__dot"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-mq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__inner"
  }, list(false), list(true)));
}
function BfStats() {
  const ref = React.useRef(null);
  const stats = [{
    n: 5000,
    suffix: '+',
    label: 'learners supported since 2012',
    em: true
  }, {
    n: 49,
    suffix: '',
    label: 'countries with Colaberry learners'
  }, {
    n: 149,
    suffix: '',
    prefix: '$',
    label: 'per month to get started'
  }, {
    n: 12,
    suffix: '',
    label: 'week guided build path'
  }];
  const fmt = v => v.toLocaleString('en-US');
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const ctx = gsap.context(() => {
      ref.current.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const obj = {
          v: 0
        };
        gsap.to(obj, {
          v: target,
          duration: 1.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true
          },
          onUpdate: () => {
            el.textContent = prefix + fmt(Math.round(obj.v)) + suffix;
          }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-stats",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stats__grid"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "aw-stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__n"
  }, s.em ? /*#__PURE__*/React.createElement("em", {
    "data-count": s.n,
    "data-suffix": s.suffix,
    "data-prefix": s.prefix || ''
  }, (s.prefix || '') + fmt(s.n) + s.suffix) : /*#__PURE__*/React.createElement("span", {
    "data-count": s.n,
    "data-suffix": s.suffix,
    "data-prefix": s.prefix || ''
  }, (s.prefix || '') + fmt(s.n) + s.suffix)), /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__l"
  }, s.label)))));
}
Object.assign(window, {
  BfHero,
  BfRegCard,
  BfMarquee,
  BfStats,
  BF_DATE,
  BF_THANKYOU
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/bf-hero.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/bf-sections.jsx
try { (() => {
/* Builders & Founders — Your idea needs a build path, Who it's for,
   Build with Claude, Open House explainer. Copy verbatim from Sohail's draft. */
const {
  Button: BfSecBtn
} = window.ColaberryDesignSystem_098454;

/* "Your Idea Needs A Build Path" — the gap + the things people want to build */
function BfGap() {
  const builds = [{
    icon: 'package',
    t: 'A product'
  }, {
    icon: 'workflow',
    t: 'A business workflow'
  }, {
    icon: 'zap',
    t: 'An automation'
  }, {
    icon: 'headset',
    t: 'A customer support tool'
  }, {
    icon: 'file-text',
    t: 'A content system'
  }, {
    icon: 'flask-conical',
    t: 'A research assistant'
  }, {
    icon: 'building-2',
    t: 'An internal business solution'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-gap"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--green"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "01"), "The starting point"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Your idea needs", /*#__PURE__*/React.createElement("br", null), "a build path"), /*#__PURE__*/React.createElement("p", {
    className: "wp-gap__p"
  }, "Many people have AI ideas. Few know how to turn them into something real. ", /*#__PURE__*/React.createElement("strong", null, "This membership gives you the structure, tools, and guidance to build."), " You may want to build:")), /*#__PURE__*/React.createElement("div", {
    className: "wp-verbs",
    "data-rv": true
  }, builds.map((v, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-verb",
    key: i
  }, /*#__PURE__*/React.createElement(I, {
    n: v.icon
  }), v.t)))));
}

/* "Built For Builders And Idea Owners" — editorial audience manifest */
function BfWho() {
  const accents = ['var(--green-600)', 'var(--blue-500)', 'var(--red-500)'];
  const roles = ['Entrepreneurs', 'Founders', 'Freelancers', 'Consultants', 'Business owners', 'Creators', 'Technical professionals', 'Anyone with an idea they want to build using AI'];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-who2__head"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--blue"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "02"), "Who it's for"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Built for builders", /*#__PURE__*/React.createElement("br", null), "and idea owners")), /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "wp-who2__lead"
  }, "You do not need to have everything figured out. ", /*#__PURE__*/React.createElement("strong", null, "You need a clear path, practical guidance, and a place to start building.")), /*#__PURE__*/React.createElement("span", {
    className: "wp-who2__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "sparkles",
    s: 13
  }), "An idea is enough to start"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-roles2"
  }, roles.map((r, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-rolechip",
    "data-rv": true,
    key: i,
    style: {
      '--_c': accents[i % 3]
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-rolechip__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wp-rolechip__t"
  }, r)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-who2__cta",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-who2__cta-q"
  }, "Sound like you?"), /*#__PURE__*/React.createElement("a", {
    className: "wp-who2__cta-link",
    href: "https://form.jotform.com/251193437881463"
  }, "Join the free Open House", /*#__PURE__*/React.createElement(I, {
    n: "arrow-right",
    s: 18
  }))));
}

/* "Build With Claude" — capability grid */
function BfBuild() {
  const caps = [{
    icon: 'lightbulb',
    c: 'blue',
    t: 'Idea development'
  }, {
    icon: 'search',
    c: 'green',
    t: 'Research and planning'
  }, {
    icon: 'workflow',
    c: 'red',
    t: 'Workflow design'
  }, {
    icon: 'file-text',
    c: 'blue',
    t: 'Project documentation'
  }, {
    icon: 'pen-tool',
    c: 'green',
    t: 'AI-assisted prototyping'
  }, {
    icon: 'puzzle',
    c: 'red',
    t: 'Problem solving'
  }, {
    icon: 'rocket',
    c: 'blue',
    t: 'Implementation support'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "build-with-claude",
    "data-screen-label": "Build with Claude",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "bf-build__head"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--red"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "03"), "Inside the membership"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Build with Claude")), /*#__PURE__*/React.createElement("p", {
    className: "bf-build__lead",
    "data-rv": true
  }, "Inside the membership, you will learn how to use Claude across the whole journey: ", /*#__PURE__*/React.createElement("strong", null, "from scattered ideas to a clear build plan."))), /*#__PURE__*/React.createElement("div", {
    className: "bf-caps"
  }, caps.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "bf-cap",
    "data-rv": true,
    key: i,
    style: {
      '--_c': 'var(--' + c.c + '-' + (c.c === 'green' ? '600' : '500') + ')'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bf-cap__icon"
  }, /*#__PURE__*/React.createElement(I, {
    n: c.icon,
    s: 22
  })), /*#__PURE__*/React.createElement("span", {
    className: "bf-cap__t"
  }, c.t)))));
}

/* "What You Will Explore In The Free Open House" — checklist + CTA */
function BfExplore() {
  const items = [/*#__PURE__*/React.createElement(React.Fragment, null, "What is included inside the AI Membership"), /*#__PURE__*/React.createElement(React.Fragment, null, "How builders use Claude to develop ideas"), /*#__PURE__*/React.createElement(React.Fragment, null, "How live projects help you move from concept to execution"), /*#__PURE__*/React.createElement(React.Fragment, null, "How the 12-week build path works"), /*#__PURE__*/React.createElement(React.Fragment, null, "How to get started for ", /*#__PURE__*/React.createElement("b", null, "$149/month"))];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "explore",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-explore"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-explore__aside",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--red"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "05"), "The Open House"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "What you'll explore"), /*#__PURE__*/React.createElement("div", {
    className: "wp-explore__time"
  }, /*#__PURE__*/React.createElement(I, {
    n: "clock",
    s: 15
  }), "90 minutes \xB7 live \xB7 free"), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BfSecBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Reserve my free seat"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-elist"
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "wp-eitem",
    "data-rv": true,
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-eitem__n"
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("span", {
    className: "wp-eitem__t"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "wp-eitem__c"
  }, /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 20
  })))))));
}
Object.assign(window, {
  BfGap,
  BfWho,
  BfBuild,
  BfExplore
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/bf-sections.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/bg-buildpath.jsx
try { (() => {
/* Beginners & Career Switchers — "Your 12-Week Build Path"
   New section from the marketing draft, rendered as a 4-phase timeline/stepper.
   Phase copy is verbatim from Sohail's final draft (no wording changes per ticket).
   Sits after the learn/build pillars (what's inside) and before Career support,
   so a beginner sees exactly what the structured 12 weeks look like. */
const {
  Button: BgPathBtn
} = window.ColaberryDesignSystem_098454;
function BgBuildPath() {
  const phases = [{
    weeks: 'Weeks 1–3',
    c: 'blue',
    t: 'Build Your AI Foundation',
    d: 'Clarify your idea, set up your AI workspace, and learn the foundations needed to begin building.'
  }, {
    weeks: 'Weeks 4–6',
    c: 'green',
    t: 'Create Your AI Team',
    d: 'Design AI agents and workflows that support your project.'
  }, {
    weeks: 'Weeks 7–9',
    c: 'red',
    t: 'Connect AI To The Real World',
    d: 'Connect your project to real data, tools, workflows, and use cases.'
  }, {
    weeks: 'Weeks 10–12',
    c: 'dark',
    t: 'Design AI That Scales',
    d: 'Turn your project into a stronger system with architecture, documentation, and deployment planning.',
    dark: true
  }];
  const accent = c => c === 'dark' ? 'var(--neutral-950)' : 'var(--' + c + '-' + (c === 'green' ? '600' : c === 'blue' ? '500' : '500') + ')';
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "build-path",
    "data-screen-label": "12-Week Build Path",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-path__head"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--blue"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "04"), "Your build path"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Your 12-week", /*#__PURE__*/React.createElement("br", null), "build path")), /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "bg-path__lead"
  }, "No guessing what comes next. ", /*#__PURE__*/React.createElement("strong", null, "A clear, guided path"), " takes you from your first AI workspace to a working system you can show, explain, and keep improving."), /*#__PURE__*/React.createElement("span", {
    className: "bg-path__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "route",
    s: 13
  }), "4 phases \xB7 12 weeks \xB7 fully guided"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-path__track"
  }, phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: 'bg-path__step' + (p.dark ? ' is-dark' : ''),
    "data-rv": true,
    key: i,
    style: {
      '--_c': accent(p.c)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-path__node"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-path__num"
  }, i + 1)), /*#__PURE__*/React.createElement("span", {
    className: "bg-path__weeks"
  }, p.weeks), /*#__PURE__*/React.createElement("h3", {
    className: "bg-path__t"
  }, p.t), /*#__PURE__*/React.createElement("p", {
    className: "bg-path__d"
  }, p.d)))), /*#__PURE__*/React.createElement("div", {
    className: "bg-path__foot",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-path__foot-q"
  }, "See the full 12 weeks walked through, live."), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BgPathBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Join the free Open House"))));
}
Object.assign(window, {
  BgBuildPath
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/bg-buildpath.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/bg-career.jsx
try { (() => {
/* Beginners & Career Switchers — "Career support until you're ready"
   New section from the marketing draft. Job-outcome support is the payoff
   beginners care about most, so it sits right after the learn/build pillars
   and before the Open-House explainer. Light section, brand accents rotate. */
const {
  Button: BgCareBtn
} = window.ColaberryDesignSystem_098454;
function BgCareer() {
  const items = [{
    icon: 'award',
    c: 'red',
    t: 'Certificate preparation',
    d: 'Get ready to earn your Colaberry AI Certificate and prove what you can do.'
  }, {
    icon: 'layers',
    c: 'blue',
    t: 'Guided project experience',
    d: 'Apply your learning to real, structured projects with support at every step.'
  }, {
    icon: 'folder-check',
    c: 'green',
    t: 'Portfolio-ready work',
    d: 'Finish with work you can show, explain, and keep improving over time.'
  }, {
    icon: 'messages-square',
    c: 'blue',
    t: 'Interview preparation',
    d: 'Practice how to talk about AI, your projects, and your skills with confidence.'
  }, {
    icon: 'compass',
    c: 'green',
    t: 'Career guidance',
    d: 'Understand where AI skills fit and which opportunities match your goals.'
  }, {
    icon: 'target',
    c: 'red',
    t: 'Job-readiness support',
    d: 'Build the confidence and habits you need to pursue AI-enabled roles.'
  }, {
    icon: 'trending-up',
    c: 'blue',
    t: 'Ongoing AI upskilling',
    d: 'Keep learning as AI evolves so your skills stay current and relevant.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "career",
    "data-screen-label": "Career support",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-care__head"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--green"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "03"), "Career support"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Supported until", /*#__PURE__*/React.createElement("br", null), "you're ready")), /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "bg-care__lead"
  }, "We do not just want you to learn AI. ", /*#__PURE__*/React.createElement("strong", null, "We want you to be ready for real opportunities."), " Your membership includes support that carries you from learning into an AI-enabled career."), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BgCareBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Start your career path")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-care__grid"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "bg-care__card",
    "data-rv": true,
    key: i,
    style: {
      '--_c': 'var(--' + it.c + '-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-care__icon"
  }, /*#__PURE__*/React.createElement(I, {
    n: it.icon,
    s: 22
  })), /*#__PURE__*/React.createElement("span", {
    className: "bg-care__t"
  }, it.t), /*#__PURE__*/React.createElement("span", {
    className: "bg-care__d"
  }, it.d)))));
}
Object.assign(window, {
  BgCareer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/bg-career.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/bg-close.jsx
try { (() => {
/* Beginners & Career Switchers — Transformation, Why different, Pricing, Closing */
const {
  Button: BgCloseBtn
} = window.ColaberryDesignSystem_098454;

/* "The Transformation" — before / after */
function BgTransformation() {
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__head",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--green"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "05"), "The transformation"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "From unsure to", /*#__PURE__*/React.createElement("br", null), "confident")), /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__card wp-tf__card--before",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-tf__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "circle-dashed",
    s: 14
  }), "Before"), /*#__PURE__*/React.createElement("h3", null, "You're interested in AI, but unsure where to start"), /*#__PURE__*/React.createElement("p", null, "You are interested in AI, but you feel unsure where to start. AI may feel too technical, too fast, or too confusing.")), /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(I, {
    n: "arrow-right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__card wp-tf__card--after",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-tf__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "circle-check",
    s: 14
  }), "After"), /*#__PURE__*/React.createElement("h3", null, "You use Claude with confidence and build real projects"), /*#__PURE__*/React.createElement("p", null, "You understand the basics of AI. You know how to use Claude with confidence. You start building practical projects. ", /*#__PURE__*/React.createElement("strong", null, "You have a clear path to keep improving.")))));
}

/* "Why This Is Different" — split compare */
function BgDifferent() {
  const old = ['Most AI learning feels confusing.', 'Too many tools, videos, and random tutorials.', 'Information without a clear path forward.'];
  const neu = [/*#__PURE__*/React.createElement(React.Fragment, null, "You ", /*#__PURE__*/React.createElement("strong", null, "learn with Claude"), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "You ", /*#__PURE__*/React.createElement("strong", null, "build through projects"), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "You ", /*#__PURE__*/React.createElement("strong", null, "get practical support"), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "You ", /*#__PURE__*/React.createElement("strong", null, "keep improving every month"), ".")];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--red"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "06"), "Why it's different"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Most learning leaves you lost.", /*#__PURE__*/React.createElement("br", null), "This one gives you a ", /*#__PURE__*/React.createElement("span", {
    className: "is-red"
  }, "path"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-diff"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__col wp-diff__col--old",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__label"
  }, /*#__PURE__*/React.createElement(I, {
    n: "book-open",
    s: 15
  }), "Most AI learning"), old.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-diff__icon"
  }, /*#__PURE__*/React.createElement(I, {
    n: "minus",
    s: 18
  })), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__col wp-diff__col--new",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__label"
  }, /*#__PURE__*/React.createElement(I, {
    n: "sparkles",
    s: 15
  }), "Colaberry's AI Membership"), neu.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-diff__icon"
  }, /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 18
  })), /*#__PURE__*/React.createElement("span", null, t))))));
}

/* Pricing strip — $149/month only (lowest tier per Sohail) */
function BgPricing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wp-price"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-price__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wp-price__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-price__num"
  }, /*#__PURE__*/React.createElement("span", null, "$149")), /*#__PURE__*/React.createElement("span", {
    className: "wp-price__per"
  }, "/ month")), /*#__PURE__*/React.createElement("p", {
    className: "wp-price__sub"
  }, "Membership is $149/month. Begin inside the free Open House.")), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BgCloseBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Join the free Open House"))));
}

/* Closing CTA — cherry band + brand tagline */
function BgFinal() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "aw-final aw-grain aw-grain--light",
    id: "reserve",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("img", {
    className: "aw-final__mark",
    src: window.__resources && window.__resources.markWhite || "../assets/logo/colaberry-mark-white.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "aw-final__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-final__kicker",
    "data-rv": true
  }, "FREE OPEN HOUSE \xB7 LIVE ONLINE \xB7 MEMBERSHIP \xB7 $149/MO"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-final__h",
    "data-rv": true
  }, "Join the free", /*#__PURE__*/React.createElement("br", null), "Open House"), /*#__PURE__*/React.createElement("p", {
    className: "aw-final__p",
    "data-rv": true
  }, "See how Colaberry's AI Membership helps beginners and career switchers start learning AI the right way. Membership is $149/month."), /*#__PURE__*/React.createElement("span", {
    className: "aw-final__btn",
    "data-rv": true
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BgCloseBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Join the free Open House"))), /*#__PURE__*/React.createElement("div", {
    className: "aw-final__meta",
    "data-rv": true
  }, "NO EXPERIENCE REQUIRED \xB7 START LEARNING AI FROM THE GROUND UP"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-tagline"
  }, /*#__PURE__*/React.createElement("span", null, "Learn with ", /*#__PURE__*/React.createElement("span", {
    className: "is-blue"
  }, "Claude"), ". Build through ", /*#__PURE__*/React.createElement("span", {
    className: "is-green"
  }, "Colaberry"), ". Deploy in the ", /*#__PURE__*/React.createElement("span", {
    className: "is-red"
  }, "real world"), ".")));
}
Object.assign(window, {
  BgTransformation,
  BgDifferent,
  BgPricing,
  BgFinal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/bg-close.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/bg-hero.jsx
try { (() => {
/* Beginners & Career Switchers — Hero, Reg card, Marquee, Stats */
const {
  Button: BgBtn,
  Input: BgInput,
  Avatar: BgAvatar
} = window.ColaberryDesignSystem_098454;
const BG_DATE = 'Live online · 90 minutes';

/* On submit we capture email + mobile and redirect to the thank-you page.
   Swap this for the real OpenHouseModal → /api/leads POST at integration time. */
const BG_THANKYOU = 'https://form.jotform.com/251193437881463';
function BgRegCard() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  const set = k => e => {
    let v = e.target.value;
    if (k === 'phone') {
      const d = v.replace(/\D/g, '').replace(/^1/, '').slice(0, 10);
      v = d.length > 6 ? '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6) : d.length > 3 ? '(' + d.slice(0, 3) + ') ' + d.slice(3) : d;
    }
    setForm(f => ({
      ...f,
      [k]: v
    }));
    setErrors(er => er[k] ? {
      ...er,
      [k]: null
    } : er);
  };
  const submit = e => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    const er = {};
    if (!form.name.trim()) er.name = 'Please add your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) er.email = form.email.trim() ? 'Enter a valid email address.' : 'Please add your email.';
    if (digits.length !== 10) er.phone = form.phone.trim() ? 'Enter a 10-digit US mobile number.' : 'Please add your mobile number.';
    if (Object.keys(er).length) {
      setErrors(er);
      return;
    }
    setBusy(true);
    const q = new URLSearchParams({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: '+1' + digits
    });
    window.location.href = BG_THANKYOU + '?' + q.toString();
  };
  React.useEffect(() => {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }, []);
  const firstError = errors.name || errors.email || errors.phone;
  return /*#__PURE__*/React.createElement("div", {
    className: "lead-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lead-card__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__dot"
  }), "Live \xB7 Free Open House"), /*#__PURE__*/React.createElement("span", {
    className: "lead-card__when"
  }, /*#__PURE__*/React.createElement(I, {
    n: "clock",
    s: 14
  }), "90 min \xB7 online")), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "lead-card__h"
  }, "Save your free seat"), /*#__PURE__*/React.createElement("p", {
    className: "lead-card__sub"
  }, "No experience needed. See how beginners get their start with AI \u2014 one guided step at a time."), /*#__PURE__*/React.createElement("form", {
    className: "lead-card__form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.name ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "user",
    s: 18
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "text",
    autoComplete: "name",
    name: "name",
    placeholder: "Full name",
    "aria-label": "Your full name",
    value: form.name,
    onChange: set('name')
  })), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.email ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "mail",
    s: 18
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "email",
    inputMode: "email",
    autoComplete: "email",
    name: "email",
    placeholder: "Email address",
    "aria-label": "Your email",
    value: form.email,
    onChange: set('email')
  })), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.phone ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "smartphone",
    s: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "lead-card__prefix"
  }, "+1"), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "tel",
    inputMode: "tel",
    autoComplete: "tel-national",
    name: "phone",
    placeholder: "(555) 123-4567",
    "aria-label": "Your US mobile number",
    value: form.phone,
    onChange: set('phone')
  })), firstError ? /*#__PURE__*/React.createElement("p", {
    className: "lead-card__err"
  }, /*#__PURE__*/React.createElement(I, {
    n: "alert-circle",
    s: 14
  }), firstError) : null, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BgBtn, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    disabled: busy,
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, busy ? 'Saving your seat…' : 'Save my free seat'))), /*#__PURE__*/React.createElement("p", {
    className: "lead-card__fine"
  }, /*#__PURE__*/React.createElement(I, {
    n: "shield-check",
    s: 14
  }), "Free \xB7 we text your invite and join link \xB7 no spam, ever")));
}
function BgHero() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    let ctx = null;
    const cancel = awWhenVisible(() => {
      if (!ref.current) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power4.out'
          }
        });
        tl.from(ref.current.querySelector('.bg-partbadge'), {
          opacity: 0,
          y: 10,
          duration: .5
        }, 0).from(ref.current.querySelectorAll('.wp-line__in'), {
          yPercent: 115,
          duration: .9,
          stagger: .12
        }, .12).from(ref.current.querySelectorAll('.aw-hero__sub, .wp-hero__price, .wp-hero__cta, .wp-hero__trust'), {
          opacity: 0,
          y: 22,
          duration: .65,
          stagger: .1
        }, '-=.4').from(ref.current.querySelector('.aw-hero__card'), {
          opacity: 0,
          y: 34,
          duration: .8
        }, '-=.5').from(ref.current.querySelectorAll('.bg-proof .bg-proofcard'), {
          opacity: 0,
          y: 24,
          duration: .6,
          stagger: .12
        }, '-=.45');
      }, ref);
    });
    return () => {
      cancel();
      if (ctx) ctx.revert();
    };
  }, []);
  const Badge = window.BgPartnerBadge;
  const Proof = window.BgProofCards;
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-hero aw-grain",
    ref: ref,
    id: "top"
  }, /*#__PURE__*/React.createElement(AwCanvas, null), /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__copy"
  }, Badge ? /*#__PURE__*/React.createElement(Badge, null) : null, /*#__PURE__*/React.createElement("h1", {
    className: "wp-hero__h1",
    "aria-label": "Start learning AI, even as a beginner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__in"
  }, "Start ", /*#__PURE__*/React.createElement("em", null, "learning AI"), ","))), /*#__PURE__*/React.createElement("span", {
    className: "wp-line",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__in"
  }, "even as a beginner")))), /*#__PURE__*/React.createElement("p", {
    className: "aw-hero__sub"
  }, "As a certified member of the ", /*#__PURE__*/React.createElement("strong", null, "Claude Partner Network"), ", Colaberry helps you learn AI step by step, starting at our free Open House."), /*#__PURE__*/React.createElement("p", {
    className: "wp-hero__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-hero__price-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "ticket",
    s: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "wp-hero__price-tx"
  }, "Membership starts at ", /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("span", null, "$149"), "/month"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-hero__trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-avatar-group"
  }, /*#__PURE__*/React.createElement(BgAvatar, {
    name: "Mika Rivera",
    size: "sm",
    style: {
      background: 'var(--green-700)'
    }
  }), /*#__PURE__*/React.createElement(BgAvatar, {
    name: "Owen Brooks",
    size: "sm",
    style: {
      background: 'var(--blue-600)'
    }
  }), /*#__PURE__*/React.createElement(BgAvatar, {
    name: "Ada Lovelace",
    size: "sm",
    style: {
      background: 'var(--red-600)'
    }
  }), /*#__PURE__*/React.createElement(BgAvatar, {
    name: "Sam Okafor",
    size: "sm",
    style: {
      background: 'var(--blue-700)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "wp-hero__trust-label"
  }, /*#__PURE__*/React.createElement("b", null, "5,000+"), " careers changed since 2012 \xB7 Texas Workforce Commission approved"))), /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__card"
  }, /*#__PURE__*/React.createElement(BgRegCard, null))), Proof ? /*#__PURE__*/React.createElement(Proof, null) : null));
}
function BgMarquee() {
  const items = [/*#__PURE__*/React.createElement("span", {
    key: "a"
  }, "Certified ", /*#__PURE__*/React.createElement("em", {
    className: "is-blue"
  }, "Claude Partner Network")), /*#__PURE__*/React.createElement("span", {
    key: "b"
  }, "Build through ", /*#__PURE__*/React.createElement("em", {
    className: "is-green"
  }, "guided projects")), /*#__PURE__*/React.createElement("span", {
    key: "c"
  }, "Start from the ", /*#__PURE__*/React.createElement("em", {
    className: "is-red"
  }, "ground up")), /*#__PURE__*/React.createElement("span", {
    key: "d"
  }, "Anthropic Academy-trained team"), /*#__PURE__*/React.createElement("span", {
    key: "e"
  }, "Membership \xB7 $149/month")];
  const list = hidden => /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__list",
    "aria-hidden": hidden || undefined
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__item",
    key: i
  }, it, /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__dot"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-mq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__inner"
  }, list(false), list(true)));
}
function BgStats() {
  const ref = React.useRef(null);
  const stats = [{
    n: 5000,
    suffix: '+',
    label: 'careers changed since 2012',
    em: true
  }, {
    n: 49,
    suffix: '',
    label: 'countries with Colaberry learners'
  }, {
    n: 149,
    suffix: '',
    prefix: '$',
    label: 'per month to get started'
  }, {
    n: 90,
    suffix: '',
    label: 'minutes of demos, stories & Q&A'
  }];
  const fmt = v => v.toLocaleString('en-US');
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const ctx = gsap.context(() => {
      ref.current.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const obj = {
          v: 0
        };
        gsap.to(obj, {
          v: target,
          duration: 1.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true
          },
          onUpdate: () => {
            el.textContent = prefix + fmt(Math.round(obj.v)) + suffix;
          }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-stats",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stats__grid"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "aw-stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__n"
  }, s.em ? /*#__PURE__*/React.createElement("em", {
    "data-count": s.n,
    "data-suffix": s.suffix,
    "data-prefix": s.prefix || ''
  }, (s.prefix || '') + fmt(s.n) + s.suffix) : /*#__PURE__*/React.createElement("span", {
    "data-count": s.n,
    "data-suffix": s.suffix,
    "data-prefix": s.prefix || ''
  }, (s.prefix || '') + fmt(s.n) + s.suffix)), /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__l"
  }, s.label)))));
}
Object.assign(window, {
  BgHero,
  BgRegCard,
  BgMarquee,
  BgStats,
  BG_DATE,
  BG_THANKYOU
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/bg-hero.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/bg-sections.jsx
try { (() => {
/* Beginners & Career Switchers — Gap, Who, Pillars, Open House explore */

/* "Earn Your Colaberry AI Certificate" — split card (proof + branded mock).
   The certificate on the right is a TEMPORARY CSS mock — swap the .bg-cdoc
   block for an <img> once the real Colaberry certificate art is supplied. */
const {
  Button: BgCertBtn
} = window.ColaberryDesignSystem_098454;
function BgCertificate() {
  const ref = React.useRef(null);
  const feats = [{
    icon: 'linkedin',
    c: 'green',
    t: 'Share it on LinkedIn',
    d: 'Showcase your AI learning achievements on your professional profile.'
  }, {
    icon: 'shield-check',
    c: 'blue',
    t: 'Verifiable credential',
    d: 'Every certificate carries a unique link that confirms your completion.'
  }, {
    icon: 'briefcase',
    c: 'red',
    t: 'Strengthen your resume',
    d: 'Prove applied AI knowledge through structured, hands-on coursework.'
  }];
  React.useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!window.gsap || !window.ScrollTrigger || reduce) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 84%',
          once: true
        },
        defaults: {
          ease: 'power3.out'
        }
      });
      tl.from('.bg-cert2__badge', {
        opacity: 0,
        y: 16,
        duration: .45
      }).from('.bg-cert2__left .aw-h2', {
        opacity: 0,
        y: 28,
        duration: .6
      }, '-=.2').from('.bg-cert2__lead', {
        opacity: 0,
        y: 20,
        duration: .5
      }, '-=.35').from('.bg-cert2__feat', {
        opacity: 0,
        x: -20,
        duration: .5,
        stagger: .13
      }, '-=.25').from('.bg-cert2__cta', {
        opacity: 0,
        y: 16,
        duration: .45
      }, '-=.2').fromTo('.bg-cdoc', {
        opacity: 0,
        x: 72,
        rotation: -9,
        scale: .93
      }, {
        opacity: 1,
        x: 0,
        rotation: -1.6,
        scale: 1,
        duration: .9,
        ease: 'power3.out',
        clearProps: 'transform'
      }, '-=1.1').from('.bg-cdoc__seal', {
        scale: 0,
        rotation: -90,
        duration: .55,
        ease: 'back.out(2)',
        clearProps: 'transform'
      }, '-=.3');
    }, ref);
    return () => ctx.revert();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "certificate",
    "data-screen-label": "Certificate",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__badge"
  }, /*#__PURE__*/React.createElement(I, {
    n: "award",
    s: 14
  }), "Official certificate"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Earn your Colaberry", /*#__PURE__*/React.createElement("br", null), "AI Certificate"), /*#__PURE__*/React.createElement("p", {
    className: "bg-cert2__lead"
  }, "Complete the membership, finish your guided projects, and receive a ", /*#__PURE__*/React.createElement("strong", null, "Colaberry-issued certificate"), " that recognizes the real AI skills you have built."), /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2__feats"
  }, feats.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2__feat",
    key: i,
    style: {
      '--_c': 'var(--' + f.c + '-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__ficon"
  }, /*#__PURE__*/React.createElement(I, {
    n: f.icon,
    s: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__ft"
  }, f.t), /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__fd"
  }, f.d))))), /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__cta"
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BgCertBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Start your certificate path")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-cert2__right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-cert2__glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__bar"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoColor || "../assets/logo/colaberry-horizontal.png",
    alt: "Colaberry",
    className: "bg-cdoc__logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__no"
  }, "No. CB-AI-2026-0148")), /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__kick"
  }, "Certificate of Completion"), /*#__PURE__*/React.createElement("h4", {
    className: "bg-cdoc__prog"
  }, "AI MEMBERSHIP PROGRAM"), /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__issued"
  }, "Issued to"), /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__name"
  }, "Your Name"), /*#__PURE__*/React.createElement("p", {
    className: "bg-cdoc__desc"
  }, "Awarded for completing Colaberry's AI Membership: learning AI with Claude through guided, hands-on projects."), /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__date"
  }, /*#__PURE__*/React.createElement("span", null, "Date of issue"), /*#__PURE__*/React.createElement("b", null, "30 March 2026")), /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__sign"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-cdoc__signline"
  }), /*#__PURE__*/React.createElement("span", null, "Colaberry School")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-cdoc__seal"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.markWhite || "../assets/logo/colaberry-mark-white.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, "VERIFIED")))));
}

/* "You Do Not Need To Be An AI Expert" — the stuck statements + the answer */
function BgGap() {
  const stuck = [{
    icon: 'wrench',
    t: 'Which tools to use'
  }, {
    icon: 'list-todo',
    t: 'What to learn first'
  }, {
    icon: 'sparkles',
    t: 'How Claude works'
  }, {
    icon: 'route',
    t: 'Turning learning into skills'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-gap"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--green"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "01"), "The starting point"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "You do not need to", /*#__PURE__*/React.createElement("br", null), "be an AI expert"), /*#__PURE__*/React.createElement("p", {
    className: "wp-gap__p"
  }, "Many people want to learn AI, but feel stuck. They do not know which tools to use. They do not know what to learn first. They do not know how Claude works. They do not know how to turn learning into real skills. ", /*#__PURE__*/React.createElement("strong", null, "This membership gives you a clear starting point, guided learning, and real practice."))), /*#__PURE__*/React.createElement("div", {
    className: "wp-verbs",
    "data-rv": true
  }, stuck.map((v, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-verb",
    key: i
  }, /*#__PURE__*/React.createElement(I, {
    n: v.icon
  }), v.t)))));
}

/* "Built For Beginners And Career Switchers" — editorial audience manifest */
function BgWho() {
  const accents = ['var(--green-600)', 'var(--blue-500)', 'var(--red-500)'];
  const roles = ['Students', 'Recent graduates', 'Career switchers', 'Job seekers', 'Non-technical professionals', 'Early-career professionals', 'Anyone starting from the ground up'];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-who2__head"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--blue"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "02"), "Who it's for"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Built for beginners", /*#__PURE__*/React.createElement("br", null), "and career switchers")), /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "wp-who2__lead"
  }, "You do not need advanced technical experience. ", /*#__PURE__*/React.createElement("strong", null, "You need the right guidance and a practical learning path.")), /*#__PURE__*/React.createElement("span", {
    className: "wp-who2__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "sparkles",
    s: 13
  }), "No experience required"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-roles2"
  }, roles.map((r, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-rolechip",
    "data-rv": true,
    key: i,
    style: {
      '--_c': accents[i % 3]
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-rolechip__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wp-rolechip__t"
  }, r)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-who2__cta",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-who2__cta-q"
  }, "See yourself on this list?"), /*#__PURE__*/React.createElement("a", {
    className: "wp-who2__cta-link",
    href: "https://form.jotform.com/251193437881463"
  }, "Join the free Open House", /*#__PURE__*/React.createElement(I, {
    n: "arrow-right",
    s: 18
  }))));
}

/* "Learn AI Step By Step" + "Build Through Guided Projects" — two editorial pillars */
function BgPillars() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-pillars"
  }, /*#__PURE__*/React.createElement("section", {
    className: "wp-pillar",
    style: {
      '--_c': 'var(--blue-500)'
    },
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__body",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__big",
    "aria-hidden": "true"
  }, "01"), /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--blue"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__tick"
  }), "Inside the membership"), /*#__PURE__*/React.createElement("h3", null, "Learn AI ", /*#__PURE__*/React.createElement("em", null, "step by step")), /*#__PURE__*/React.createElement("p", {
    className: "wp-pillar__goal"
  }, "The goal is not to overwhelm you. The goal is to help you build confidence one step at a time."), /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__chips"
  }, ['What AI tools can do', 'How Claude works', 'Research, writing & planning', 'Problem solving with AI', 'How AI workflows are created', 'How real AI projects are built'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__chip",
    key: i
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__media",
    "data-rv": true
  }, /*#__PURE__*/React.createElement(AwIlloLearn, null)))), /*#__PURE__*/React.createElement("section", {
    className: "wp-pillar",
    style: {
      '--_c': 'var(--green-600)'
    },
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__body",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__big",
    "aria-hidden": "true"
  }, "02"), /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--green"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__tick"
  }), "Inside the membership"), /*#__PURE__*/React.createElement("h3", null, "Build through ", /*#__PURE__*/React.createElement("em", null, "guided projects")), /*#__PURE__*/React.createElement("p", null, "Watching videos is not enough. To build real AI skills, you need practice. Inside the membership, you will work on guided projects that help you apply what you learn. ", /*#__PURE__*/React.createElement("strong", null, "You will learn by doing. You will start creating work you can explain, improve, and show.")), /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__chips"
  }, ['Learn by doing', 'Apply what you learn', 'Work you can explain', 'Improve & show'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__chip",
    key: i
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__media",
    "data-rv": true
  }, /*#__PURE__*/React.createElement(AwIlloBuild, null)))));
}

/* "What You Will Explore In The Free Open House" — checklist + CTA */
const {
  Button: BgExBtn
} = window.ColaberryDesignSystem_098454;
function BgExplore() {
  const items = [/*#__PURE__*/React.createElement(React.Fragment, null, "What is included inside the AI Membership"), /*#__PURE__*/React.createElement(React.Fragment, null, "How beginners can start learning AI with Claude"), /*#__PURE__*/React.createElement(React.Fragment, null, "How guided projects help you build practical skills"), /*#__PURE__*/React.createElement(React.Fragment, null, "How career switchers can use AI to create new opportunities"), /*#__PURE__*/React.createElement(React.Fragment, null, "How to get started for ", /*#__PURE__*/React.createElement("b", null, "$149/month"))];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "explore",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-explore"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-explore__aside",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--red"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "04"), "The Open House"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "What you'll explore"), /*#__PURE__*/React.createElement("div", {
    className: "wp-explore__time"
  }, /*#__PURE__*/React.createElement(I, {
    n: "clock",
    s: 15
  }), "90 minutes \xB7 live \xB7 free"), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(BgExBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Reserve my free seat"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-elist"
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "wp-eitem",
    "data-rv": true,
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-eitem__n"
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("span", {
    className: "wp-eitem__t"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "wp-eitem__c"
  }, /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 20
  })))))));
}
Object.assign(window, {
  BgCertificate,
  BgGap,
  BgWho,
  BgPillars,
  BgExplore
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/bg-sections.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/boot-fallback.js
try { (() => {
/* ============================================================
   boot-fallback.js — never-blank watchdog for the React pages.

   The home + landing pages mount a React app into #root at runtime
   (in-browser Babel + CDN React/GSAP). If ANY of those fail to load
   or execute — a blocked/slow CDN on a corporate network, a GCP edge
   hiccup, an old cached bundle — #root would otherwise stay empty and
   the visitor sees a blank white page. For a lead-gen site that means
   a lost lead.

   This watchdog polls #root; if the app has not mounted within ~7s it
   injects a styled, on-brand fallback: headline, the free Open House
   CTA, and a phone number — so the page is ALWAYS useful, on any
   browser or network, even when the app itself never boots.

   It uses hard-coded brand values (not CSS tokens) on purpose, so it
   still renders correctly even if the stylesheets failed too.
   ============================================================ */
(function () {
  var MOUNT_GRACE_MS = 7000; // how long to wait for the app to mount
  var POLL_MS = 400;
  var waited = 0;
  var REGISTER_URL = 'https://form.jotform.com/251193437881463';
  function appMounted() {
    var root = document.getElementById('root');
    return root && root.children.length > 0;
  }
  function revealFallback() {
    var root = document.getElementById('root');
    if (!root || root.children.length > 0) return;
    root.innerHTML = ['<div style="min-height:100dvh;min-height:100vh;display:flex;flex-direction:column;', 'align-items:center;justify-content:center;text-align:center;gap:22px;padding:40px 24px;', 'font-family:Roboto,Arial,system-ui,sans-serif;color:#1A1A1A;background:#FBFAF8;">', '<img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry" ', 'style="height:34px;margin-bottom:6px" onerror="this.style.display=\'none\'">', '<div style="font-family:mono,ui-monospace,Menlo,monospace;font-size:12px;letter-spacing:.12em;', 'text-transform:uppercase;color:#8A8A8A;">AI Systems Architect Accelerator</div>', '<h1 style="font-size:clamp(32px,6vw,54px);line-height:1.04;letter-spacing:-.02em;', 'font-weight:900;margin:0;max-width:14ch;">From AI curious to <span style="color:#FB2832">AI architect</span></h1>', '<p style="font-size:clamp(16px,2.2vw,19px);color:#4A4A4A;max-width:52ch;margin:0;line-height:1.5;">', 'Learn with Claude, build real systems, and deploy in the real world. ', 'Join our free Open House to see exactly how it works. Membership is <b>$149/month</b>.</p>', '<div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:6px;">', '<a href="' + REGISTER_URL + '" style="display:inline-flex;align-items:center;gap:8px;', 'background:#FB2832;color:#fff;font-weight:700;font-size:16px;text-decoration:none;', 'padding:15px 26px;border-radius:999px;box-shadow:0 6px 20px rgba(251,40,50,.28);">', 'Join the free Open House &rarr;</a>', '<a href="contact.html" style="display:inline-flex;align-items:center;gap:8px;', 'background:#fff;color:#1A1A1A;font-weight:700;font-size:16px;text-decoration:none;', 'padding:15px 26px;border-radius:999px;border:1px solid #E4E1DC;">Contact us</a>', '</div>', '<div style="display:flex;flex-wrap:wrap;gap:8px 20px;justify-content:center;margin-top:10px;', 'font-size:14px;color:#6A6A6A;">', '<span>5,000+ careers changed since 2012</span><span>&middot;</span>', '<span>Texas Workforce Commission approved</span><span>&middot;</span>', '<span>Anthropic / Claude Partner</span>', '</div>', '<nav style="display:flex;flex-wrap:wrap;gap:8px 18px;justify-content:center;margin-top:18px;', 'font-size:14px;">', ['our-story.html:Our Story', 'events.html:Events', 'blog.html:Blog', 'faq.html:FAQ', 'contact.html:Contact'].map(function (p) {
      var s = p.split(':');
      return '<a href="' + s[0] + '" style="color:#4A4A4A;text-decoration:none;">' + s[1] + '</a>';
    }).join(''), '</nav>', '</div>'].join('');

    // best-effort: mark that the fallback rendered (useful for the dev to spot in analytics)
    try {
      window.__awFallbackShown = true;
    } catch (e) {}
  }
  function poll() {
    if (appMounted()) return; // app booted — nothing to do
    waited += POLL_MS;
    if (waited >= MOUNT_GRACE_MS) {
      revealFallback();
      return;
    }
    setTimeout(poll, POLL_MS);
  }

  // start after a short grace so we don't race the normal boot
  setTimeout(poll, 1200);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/boot-fallback.js", error: String((e && e.message) || e) }); }

// Colaberry School/site-chrome.js
try { (() => {
/* ============================================================
   Colaberry · AI Systems Architect Accelerator
   Shared site chrome for content pages: injects the unified nav
   (.snav, matches the SiteNav React component) + footer, and wires
   scroll state, mobile drawer, FAQ accordion, blog filters, contact.
   Set <body data-page="our-story|events|blog|podcast|faq|contact"> to mark
   the active link. Icons use RemixIcon (loaded via styles.css).
   ============================================================ */
(function () {
  var HOME = 'accelerator.html';
  var REGISTER = 'https://form.jotform.com/251193437881463';
  var page = document.body.getAttribute('data-page') || '';
  var LIVE = 'https://training.colaberry.com';
  var START = LIVE + '/start-free';
  var LOGIN = 'https://enterprise.colaberry.ai/portal/login';
  // v2 IA — keep in sync with SITE_NAV in ai-site-nav.jsx
  var N = {
    paths: [{
      n: '01',
      t: 'Working professionals',
      d: 'Use AI at work, starting now',
      href: 'working-professionals.html'
    }, {
      n: '02',
      t: 'Beginners & career switchers',
      d: 'Start AI from the ground up',
      href: 'beginners-career-switchers.html'
    }, {
      n: '03',
      t: 'Builders & founders',
      d: 'Turn your idea into a system',
      href: 'builders-founders.html'
    }],
    aside: [{
      t: 'How it works',
      d: 'Learn, build, deploy',
      href: HOME + '#how'
    }, {
      t: 'Anthropic certification',
      d: 'Earn a verifiable credential',
      href: HOME + '#partner'
    }, {
      t: 'Graduate stories',
      d: 'Careers changed, in their words',
      href: HOME + '#reviews'
    }],
    resources: [{
      k: 'Watch, read & listen',
      items: [{
        id: 'shorts',
        t: 'Shorts',
        d: 'Quick AI lessons in under 60 seconds',
        href: 'shorts.html'
      }, {
        id: 'blog',
        t: 'Blog',
        d: 'Guides and field notes',
        href: 'blog.html'
      }, {
        id: 'podcast',
        t: 'Podcast',
        d: 'Conversations with AI builders',
        href: 'podcasts.html'
      }, {
        id: 'book',
        t: 'Trust Before Intelligence',
        d: 'The book by founder Ram Katamaraja',
        href: 'https://trustbeforeintelligence.ai/',
        ext: true
      }]
    }, {
      k: 'Get answers',
      items: [{
        id: 'knowledge',
        t: 'Knowledge Base',
        d: 'Concepts, terms and how-tos',
        href: LIVE + '/knowledge',
        ext: true
      }, {
        id: 'faq',
        t: 'FAQ',
        d: 'Membership, pricing, schedule',
        href: 'faq.html'
      }]
    }],
    about: [{
      id: 'our-story',
      t: 'Our Story',
      d: 'Helping people build with AI since 2012',
      href: 'our-story.html'
    }, {
      id: 'partner',
      t: 'Anthropic partnership',
      d: 'Member, Claude Partner Network',
      href: HOME + '#partner'
    }, {
      id: 'contact',
      t: 'Contact',
      d: 'Talk to our admissions team',
      href: 'contact.html'
    }],
    projects: {
      id: 'student-projects',
      t: 'Student Projects',
      href: 'student-projects.html'
    },
    events: {
      id: 'events',
      t: 'Events',
      href: 'events.html'
    }
  };
  var GROUP = {
    accelerator: 'programs',
    'our-story': 'about',
    contact: 'about',
    blog: 'resources',
    podcast: 'resources',
    shorts: 'resources',
    faq: 'resources',
    events: 'events',
    'student-projects': 'student-projects'
  }[page] || '';
  function spark(size) {
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" aria-hidden="true">' + '<g stroke="#fff" stroke-width="2.4" stroke-linecap="round">' + '<line x1="12" y1="4" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="20"/>' + '<line x1="4" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="20" y2="12"/>' + '<line x1="6.3" y1="6.3" x2="9.5" y2="9.5"/><line x1="14.5" y1="14.5" x2="17.7" y2="17.7"/>' + '<line x1="17.7" y1="6.3" x2="14.5" y2="9.5"/><line x1="9.5" y1="14.5" x2="6.3" y2="17.7"/></g></svg>';
  }
  function cur(id) {
    return id && id === page ? ' aria-current="page"' : '';
  }
  function row(it) {
    return '<a class="snav__row" href="' + it.href + '"' + (it.ext ? ' data-ext' : '') + cur(it.id) + '><b>' + it.t + '</b><span>' + it.d + '</span></a>';
  }
  function dd(id, label, panel) {
    return '<li class="snav__item" data-open="false"' + (GROUP === id ? ' data-current="true"' : '') + '>' + '<button class="snav__link" type="button" aria-expanded="false" aria-controls="snav-p-' + id + '">' + label + '<span class="snav__chev" aria-hidden="true"></span></button>' + '<div class="snav__panel" id="snav-p-' + id + '">' + panel + '</div></li>';
  }
  function plain(it) {
    return '<li class="snav__item"><a class="snav__link" href="' + it.href + '"' + (GROUP === it.id ? ' aria-current="page"' : '') + '>' + it.t + '</a></li>';
  }
  function mlink(it) {
    return '<a href="' + it.href + '"' + cur(it.id) + '><span>' + it.t + (it.d ? '<small>' + it.d + '</small>' : '') + '</span>' + '<span class="cb-i"><i class="' + (it.ext ? 'ri-arrow-right-up-line' : 'ri-arrow-right-line') + '"></i></span></a>';
  }
  var programs = '<div class="snav__card snav__card--programs"><div class="snav__paths"><span class="snav__kicker">AI Systems Architect Accelerator</span>' + N.paths.map(function (p) {
    return '<a class="snav__path" href="' + p.href + '"><i>' + p.n + '</i><b>' + p.t + '</b><span>' + p.d + '</span></a>';
  }).join('') + '</div><div class="snav__aside"><span class="snav__kicker">Inside the program</span>' + N.aside.map(row).join('') + '<div class="snav__price">Membership from <b>$149/month</b> · cancel anytime</div></div></div>';
  var resources = '<div class="snav__card snav__card--cols">' + N.resources.map(function (c) {
    return '<div><span class="snav__kicker">' + c.k + '</span>' + c.items.map(row).join('') + '</div>';
  }).join('') + '</div>';
  var about = '<div class="snav__card">' + N.about.map(row).join('') + '</div>';
  var allRes = [].concat(N.resources[0].items, N.resources[1].items).map(function (it) {
    return {
      id: it.id,
      t: it.t,
      href: it.href,
      ext: it.ext
    };
  });
  var NETWORK = [{
    t: 'AI Accelerator Program',
    href: HOME,
    current: true
  }, {
    t: 'For Enterprise AI',
    href: 'https://enterprise.colaberry.ai/',
    ext: true
  }, {
    t: 'Tech on Colaberry',
    href: 'https://colaberry.ai',
    ext: true
  }];
  var VIBING = {
    id: 'ai-dev-wire',
    t: "What's Vibing",
    href: LIVE + '/ai-dev-wire'
  };
  var ubarHTML = '<div class="snav-ubar"><div class="snav-ubar__in">' + '<a class="snav-ubar__vibe" href="' + VIBING.href + '"><span class="snav-ubar__dot" aria-hidden="true"></span>' + VIBING.t + '<span class="snav-ubar__vibe-d">AI dev news</span><span class="cb-i"><i class="ri-arrow-right-line"></i></span></a>' + '<nav class="snav-ubar__sites" aria-label="Colaberry sites">' + NETWORK.map(function (n) {
    return '<a href="' + n.href + '"' + (n.current ? ' aria-current="true"' : ' target="_blank" rel="noopener"') + '>' + n.t + (n.ext ? '<span class="cb-i"><i class="ri-arrow-right-up-line"></i></span>' : '') + '</a>';
  }).join('') + '</nav>' + '</div></div>';
  var navHTML = ubarHTML + '<header class="snav snav--ubar" id="siteNav" data-scrolled="false">' + '<div class="snav__in">' + '<div class="snav__brand"><a class="snav__logo" href="' + HOME + '" aria-label="Colaberry home"><img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry"></a>' + '<a class="snav-partner" href="' + HOME + '#partner" aria-label="Colaberry is an Anthropic Partner, member of the Claude Partner Network">' + '<span class="snav-partner__ic">' + spark(15) + '</span>' + '<span class="snav-partner__tx"><small>Member</small><b>Anthropic Partner</b></span></a></div>' + '<nav aria-label="Primary" style="margin:0 auto"><ul class="snav__links">' + dd('programs', 'Programs', programs) + plain(N.projects) + plain(N.events) + dd('resources', 'Resources', resources) + dd('about', 'About', about) + '</ul></nav>' + '<div class="snav__meta">' + '<a class="snav__login" href="' + LOGIN + '"><span class="cb-i"><i class="ri-login-box-line"></i></span>Log In</a>' + '<a class="snav__cta" href="' + START + '"><span class="snav__cta-l">Start learning free</span><span class="snav__cta-s">Start free</span><span class="cb-i"><i class="ri-arrow-right-line"></i></span></a>' + '<button class="snav__burger" id="siteBurger" aria-label="Open menu" aria-expanded="false"><span class="cb-i"><i class="ri-menu-line"></i></span></button>' + '</div></div></header>' + '<div class="snav-menu" id="siteMenu" data-open="false" role="dialog" aria-modal="true" aria-label="Menu">' + '<div class="snav-menu__top"><img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry">' + '<button class="snav-menu__close" id="siteMclose" aria-label="Close menu"><span class="cb-i"><i class="ri-close-line"></i></span></button></div>' + '<div class="snav-menu__body">' + '<nav class="snav-menu__group" aria-label="Programs"><h6>Programs</h6>' + N.paths.map(mlink).join('') + mlink({
    t: 'How it works',
    href: HOME + '#how'
  }) + '</nav>' + '<nav class="snav-menu__group" aria-label="Explore"><h6>Explore</h6>' + mlink(N.projects) + mlink(N.events) + mlink(VIBING) + '</nav>' + '<nav class="snav-menu__group" aria-label="Resources"><h6>Resources</h6>' + allRes.map(mlink).join('') + '</nav>' + '<nav class="snav-menu__group" aria-label="About"><h6>About</h6>' + mlink({
    id: 'our-story',
    t: 'Our Story',
    href: 'our-story.html'
  }) + mlink({
    id: 'contact',
    t: 'Contact',
    href: 'contact.html'
  }) + '</nav>' + '<nav class="snav-menu__group" aria-label="Colaberry sites"><h6>More from Colaberry</h6>' + NETWORK.filter(function (n) {
    return n.ext;
  }).map(function (n) {
    return mlink({
      t: n.t,
      href: n.href,
      ext: true
    });
  }).join('') + '</nav>' + '<a class="snav-menu__partner" href="' + HOME + '#partner"><span class="snav-partner__ic">' + spark(17) + '</span>' + '<span><small>Claude Partner Network</small><b>Anthropic Partner</b></span></a>' + '</div>' + '<div class="snav-menu__foot"><a class="snav-menu__login" href="' + LOGIN + '">Log In</a><a class="snav-menu__cta" href="' + START + '">Start learning free</a></div>' + '</div>';
  var footHTML = '<footer class="aw-footer">' + '<div class="aw-footer__inner">' + '<div class="aw-footer__brand">' + '<img src="../assets/logo/colaberry-horizontal-white.png" alt="Colaberry" style="height:30px;display:block">' + '<p>Learn with Claude. Build through Colaberry. Deploy in the real world. Helping people move from AI consumer to AI builder since 2012.</p>' + '<div class="aw-social"><a href="https://www.youtube.com/@ColaberrySODA/shorts" target="_blank" rel="noopener" aria-label="Colaberry on YouTube"><span class="cb-i"><i class="ri-youtube-fill"></i></span></a>' + '<a href="https://www.instagram.com/colaberryschool/" target="_blank" rel="noopener" aria-label="Colaberry on Instagram"><span class="cb-i"><i class="ri-instagram-line"></i></span></a></div>' + '</div>' + '<div class="aw-footer__meta">' + '<span><span class="cb-i"><i class="ri-calendar-event-line"></i></span>Free Open House · live online</span>' + '<span><span class="cb-i"><i class="ri-ticket-2-line"></i></span>Membership · $149/month</span>' + '<span><span class="cb-i"><i class="ri-map-pin-line"></i></span>Plano, TX · Boston, MA</span>' + '</div>' + '</div>' + '<span class="aw-footer__word" aria-hidden="true">colaberry</span>' + '<div class="aw-footer__bar"><div>' + '<span>© 2026 · Colaberry School of Data and AI is operated by Colaberry Inc. · Texas Workforce Commission approved</span>' + '<span class="aw-footer__links">' + '<a href="' + HOME + '">Accelerator</a><a href="our-story.html">Our Story</a><a href="student-projects.html">Student Projects</a><a href="events.html">Events</a>' + '<a href="blog.html">Blog</a><a href="podcasts.html">Podcast</a><a href="shorts.html">Shorts</a><a href="faq.html">FAQ</a><a href="contact.html">Contact</a>' + '</span>' + '</div></div>' + '</footer>';

  // ---- inject (idempotent; clear any stale chrome from in-app navigation) ----
  document.querySelectorAll('#siteNav, .snav-menu, #siteMenu, body > .snav-ubar').forEach(function (e) {
    e.remove();
  });
  document.querySelectorAll('body > .aw-footer').forEach(function (e) {
    e.remove();
  });
  var navMount = document.getElementById('site-nav');
  if (navMount) navMount.innerHTML = navHTML;
  var footMount = document.getElementById('site-footer');
  if (footMount) footMount.innerHTML = footHTML;

  // ---- scroll state ----
  var nav = document.getElementById('siteNav');
  function onScroll() {
    if (nav) nav.setAttribute('data-scrolled', window.scrollY > 8 ? 'true' : 'false');
    document.documentElement.style.setProperty('--ubar-y', Math.max(0, 36 - window.scrollY) + 'px');
  }
  window.addEventListener('scroll', onScroll, {
    passive: true
  });
  onScroll();

  // ---- mobile drawer ----
  var menu = document.getElementById('siteMenu');
  function setMenu(open) {
    if (menu) menu.setAttribute('data-open', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  var burger = document.getElementById('siteBurger');
  var mclose = document.getElementById('siteMclose');
  if (burger) burger.addEventListener('click', function () {
    setMenu(true);
  });
  if (mclose) mclose.addEventListener('click', function () {
    setMenu(false);
  });
  if (menu) menu.querySelectorAll('.snav-menu__body a').forEach(function (a) {
    a.addEventListener('click', function () {
      setMenu(false);
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setMenu(false);
      closeAll();
    }
  });

  // ---- desktop dropdowns ----
  var items = nav ? nav.querySelectorAll('.snav__item[data-open]') : [];
  function closeAll(except) {
    items.forEach(function (it) {
      if (it !== except) {
        it.setAttribute('data-open', 'false');
        it.querySelector('button').setAttribute('aria-expanded', 'false');
      }
    });
  }
  items.forEach(function (it) {
    var btn = it.querySelector('button');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = it.getAttribute('data-open') === 'true';
      closeAll(it);
      it.setAttribute('data-open', open ? 'false' : 'true');
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  });
  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target)) closeAll();
  });

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq2__q').forEach(function (btn) {
    var item = btn.closest('.faq2__item');
    btn.setAttribute('aria-expanded', item && item.getAttribute('data-open') === 'true' ? 'true' : 'false');
    btn.addEventListener('click', function () {
      var open = item.getAttribute('data-open') === 'true';
      item.setAttribute('data-open', open ? 'false' : 'true');
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  });

  // ---- blog filters ----
  var chips = document.querySelectorAll('.blog-chip');
  if (chips.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) {
          c.setAttribute('aria-pressed', 'false');
        });
        chip.setAttribute('aria-pressed', 'true');
        var f = chip.getAttribute('data-filter');
        document.querySelectorAll('.blog-card').forEach(function (card) {
          var cats = (card.getAttribute('data-cat') || '').split(' ');
          card.classList.toggle('is-hidden', !(f === 'all' || cats.indexOf(f) !== -1));
        });
      });
    });
  }

  // ---- contact form ----
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var sent = document.getElementById('ctSent');
      if (sent) sent.style.display = 'flex';
      form.reset();
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/site-chrome.js", error: String((e && e.message) || e) }); }

// Colaberry School/to-top.js
try { (() => {
/* ============================================================
   to-top.js — self-contained "back to top" control.
   Drop in on any page:  <script src="to-top.js" defer></script>
   - Injects its own button + styles (uses Colaberry tokens from styles.css).
   - A circular progress ring fills as you scroll, so the control doubles
     as a read-progress indicator.
   - Appears after the first screenful; smooth-scrolls to top on click.
   - Keyboard accessible; respects prefers-reduced-motion.
   Requires styles.css (RemixIcon + design tokens) on the page.
   ============================================================ */
(function () {
  if (document.querySelector('.cb-totop')) return; // guard against double-inject

  var css = '' + '.cb-totop{position:fixed;right:clamp(18px,3vw,32px);bottom:clamp(18px,3vw,32px);z-index:1200;' + 'width:54px;height:54px;display:grid;place-items:center;border:none;padding:0;cursor:pointer;' + 'border-radius:50%;background:var(--surface-card,#fff);color:var(--text-strong,#1a1a1a);' + 'box-shadow:0 8px 28px rgba(0,0,0,.16),0 2px 6px rgba(0,0,0,.08);' + 'opacity:0;visibility:hidden;transform:translateY(14px) scale(.92);' + 'transition:opacity .28s ease,transform .28s cubic-bezier(.16,.84,.44,1),visibility .28s,box-shadow .2s ease;}' + '.cb-totop.is-on{opacity:1;visibility:visible;transform:none;}' + '.cb-totop:hover{box-shadow:0 12px 34px rgba(0,0,0,.22),0 3px 8px rgba(0,0,0,.10);}' + '.cb-totop:hover .cb-totop__arrow{transform:translateY(-2px);color:var(--red-500,#FB2832);}' + '.cb-totop:focus-visible{outline:3px solid var(--blue-500,#367895);outline-offset:3px;}' + '.cb-totop:active{transform:translateY(1px) scale(.97);}' + '.cb-totop__ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg);pointer-events:none;}' + '.cb-totop__track{fill:none;stroke:var(--border-default,#e2e2e2);stroke-width:2.5;}' + '.cb-totop__prog{fill:none;stroke:var(--red-500,#FB2832);stroke-width:2.5;stroke-linecap:round;' + 'stroke-dasharray:131.95;stroke-dashoffset:131.95;transition:stroke-dashoffset .12s linear;}' + '.cb-totop__arrow{position:relative;font-size:22px;line-height:1;display:grid;place-items:center;' + 'transition:transform .2s ease,color .2s ease;}' + '.cb-totop__arrow i{display:block;}' + '@media (prefers-reduced-motion: reduce){.cb-totop{transition:opacity .2s ease,visibility .2s ease;transform:none;}' + '.cb-totop.is-on{transform:none;}.cb-totop__prog{transition:none;}.cb-totop:hover .cb-totop__arrow{transform:none;}}';
  var style = document.createElement('style');
  style.setAttribute('data-cb-totop', '');
  style.textContent = css;
  document.head.appendChild(style);
  var btn = document.createElement('button');
  btn.className = 'cb-totop';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<svg class="cb-totop__ring" viewBox="0 0 54 54" aria-hidden="true">' + '<circle class="cb-totop__track" cx="27" cy="27" r="21"/>' + '<circle class="cb-totop__prog" cx="27" cy="27" r="21"/></svg>' + '<span class="cb-totop__arrow"><i class="ri-arrow-up-line"></i></span>';
  document.body.appendChild(btn);
  var prog = btn.querySelector('.cb-totop__prog');
  var CIRC = 131.95;
  var ticking = false;
  function update() {
    ticking = false;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var y = window.scrollY || doc.scrollTop || 0;
    var ratio = max > 0 ? Math.min(1, y / max) : 0;
    prog.style.strokeDashoffset = (CIRC * (1 - ratio)).toFixed(2);
    // reveal after the first screenful
    if (y > window.innerHeight * 0.6) btn.classList.add('is-on');else btn.classList.remove('is-on');
  }
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  btn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: reduce ? 'auto' : 'smooth'
    });
    // move focus to top of document for keyboard users
    var h1 = document.querySelector('h1');
    if (h1) {
      h1.setAttribute('tabindex', '-1');
      h1.focus({
        preventScroll: true
      });
    }
  });
  window.addEventListener('scroll', onScroll, {
    passive: true
  });
  window.addEventListener('resize', onScroll, {
    passive: true
  });
  update();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/to-top.js", error: String((e && e.message) || e) }); }

// Colaberry School/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/wp-close.jsx
try { (() => {
/* Working Professionals — Transformation, Why different, Pricing, Closing */
const {
  Button: WpCloseBtn
} = window.ColaberryDesignSystem_098454;

/* "The Transformation" — before / after */
function WpTransformation() {
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__head",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--green"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "04"), "The transformation"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "From unsure to", /*#__PURE__*/React.createElement("br", null), "AI-capable")), /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__card wp-tf__card--before",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-tf__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "circle-dashed",
    s: 14
  }), "Before"), /*#__PURE__*/React.createElement("h3", null, "You know AI matters, but not how to use it"), /*#__PURE__*/React.createElement("p", null, "You may have tried a few tools. But you are not sure how to use AI in a structured, valuable, and professional way.")), /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(I, {
    n: "arrow-right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wp-tf__card wp-tf__card--after",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-tf__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "circle-check",
    s: 14
  }), "After"), /*#__PURE__*/React.createElement("h3", null, "You apply Claude and AI workflows to real problems"), /*#__PURE__*/React.createElement("p", null, "You can apply AI to your work and speak confidently about AI use cases. ", /*#__PURE__*/React.createElement("strong", null, "You become more valuable in your role and more prepared for the future of work.")))));
}

/* "Why This Is Different" — split compare */
function WpDifferent() {
  const old = ['Most AI courses teach tools.', 'Most AI courses teach prompts.', 'They leave you with information, but not enough practice.'];
  const neu = [/*#__PURE__*/React.createElement(React.Fragment, null, "You ", /*#__PURE__*/React.createElement("strong", null, "learn with Claude"), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "You ", /*#__PURE__*/React.createElement("strong", null, "build through real projects"), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "You ", /*#__PURE__*/React.createElement("strong", null, "apply AI to practical problems"), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "You ", /*#__PURE__*/React.createElement("strong", null, "keep improving every month"), ".")];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--red"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "05"), "Why it's different"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Most courses teach tools.", /*#__PURE__*/React.createElement("br", null), "This one builds ", /*#__PURE__*/React.createElement("span", {
    className: "is-red"
  }, "capability"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-diff"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__col wp-diff__col--old",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__label"
  }, /*#__PURE__*/React.createElement(I, {
    n: "book-open",
    s: 15
  }), "Most AI courses"), old.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-diff__icon"
  }, /*#__PURE__*/React.createElement(I, {
    n: "minus",
    s: 18
  })), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__col wp-diff__col--new",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__label"
  }, /*#__PURE__*/React.createElement(I, {
    n: "sparkles",
    s: 15
  }), "Colaberry's AI Membership"), neu.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "wp-diff__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-diff__icon"
  }, /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 18
  })), /*#__PURE__*/React.createElement("span", null, t))))));
}

/* Pricing strip — $149/month only (lowest tier per Sohail) */
function WpPricing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wp-price"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-price__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wp-price__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-price__num"
  }, /*#__PURE__*/React.createElement("span", null, "$149")), /*#__PURE__*/React.createElement("span", {
    className: "wp-price__per"
  }, "/ month")), /*#__PURE__*/React.createElement("p", {
    className: "wp-price__sub"
  }, "Membership is $149/month. Begin inside the free Open House.")), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(WpCloseBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Join the free Open House"))));
}

/* Closing CTA — cherry band + brand tagline */
function WpFinal() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "aw-final aw-grain aw-grain--light",
    id: "reserve",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("img", {
    className: "aw-final__mark",
    src: window.__resources && window.__resources.markWhite || "../assets/logo/colaberry-mark-white.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "aw-final__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-final__kicker",
    "data-rv": true
  }, "FREE OPEN HOUSE \xB7 LIVE ONLINE \xB7 MEMBERSHIP \xB7 $149/MO"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-final__h",
    "data-rv": true
  }, "Join the free", /*#__PURE__*/React.createElement("br", null), "Open House"), /*#__PURE__*/React.createElement("p", {
    className: "aw-final__p",
    "data-rv": true
  }, "See what is included inside Colaberry's AI Membership. Learn how working professionals are using Claude, real projects, and guided learning to build practical AI skills. Membership is $149/month."), /*#__PURE__*/React.createElement("span", {
    className: "aw-final__btn",
    "data-rv": true
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(WpCloseBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Join the free Open House"))), /*#__PURE__*/React.createElement("div", {
    className: "aw-final__meta",
    "data-rv": true
  }, "NO ML DEGREE REQUIRED \xB7 PRACTICAL AI SKILLS YOU CAN USE AT WORK"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-tagline"
  }, /*#__PURE__*/React.createElement("span", null, "Learn with ", /*#__PURE__*/React.createElement("span", {
    className: "is-blue"
  }, "Claude"), ". Build through ", /*#__PURE__*/React.createElement("span", {
    className: "is-green"
  }, "Colaberry"), ". Deploy in the ", /*#__PURE__*/React.createElement("span", {
    className: "is-red"
  }, "real world"), ".")));
}
Object.assign(window, {
  WpTransformation,
  WpDifferent,
  WpPricing,
  WpFinal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/wp-close.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/wp-hero.jsx
try { (() => {
/* Working Professionals — Hero, Reg card, Marquee, Stats */
const {
  Button: WpBtn,
  Input: WpInput,
  Avatar: WpAvatar
} = window.ColaberryDesignSystem_098454;
const WP_DATE = 'Live online · 90 minutes';

/* On submit we capture email + mobile and redirect to the thank-you page.
   Swap this for the real OpenHouseModal → /api/leads POST at integration time. */
const WP_THANKYOU = 'https://form.jotform.com/251193437881463';
function WpRegCard() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  const set = k => e => {
    let v = e.target.value;
    if (k === 'phone') {
      const d = v.replace(/\D/g, '').replace(/^1/, '').slice(0, 10);
      v = d.length > 6 ? '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6) : d.length > 3 ? '(' + d.slice(0, 3) + ') ' + d.slice(3) : d;
    }
    setForm(f => ({
      ...f,
      [k]: v
    }));
    setErrors(er => er[k] ? {
      ...er,
      [k]: null
    } : er);
  };
  const submit = e => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    const er = {};
    if (!form.name.trim()) er.name = 'Please add your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) er.email = form.email.trim() ? 'Enter a valid email address.' : 'Please add your email.';
    if (digits.length !== 10) er.phone = form.phone.trim() ? 'Enter a 10-digit US mobile number.' : 'Please add your mobile number.';
    if (Object.keys(er).length) {
      setErrors(er);
      return;
    }
    setBusy(true);
    const q = new URLSearchParams({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: '+1' + digits
    });
    window.location.href = WP_THANKYOU + '?' + q.toString();
  };
  React.useEffect(() => {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }, []);
  const firstError = errors.name || errors.email || errors.phone;
  return /*#__PURE__*/React.createElement("div", {
    className: "lead-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lead-card__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__dot"
  }), "Live \xB7 Free Open House"), /*#__PURE__*/React.createElement("span", {
    className: "lead-card__when"
  }, /*#__PURE__*/React.createElement(I, {
    n: "clock",
    s: 14
  }), "90 min \xB7 online")), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "lead-card__h"
  }, "Save your free seat"), /*#__PURE__*/React.createElement("p", {
    className: "lead-card__sub"
  }, "No payment, no pressure. See exactly how AI fits your work \u2014 and what it makes possible."), /*#__PURE__*/React.createElement("form", {
    className: "lead-card__form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.name ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "user",
    s: 18
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "text",
    autoComplete: "name",
    name: "name",
    placeholder: "Full name",
    "aria-label": "Your full name",
    value: form.name,
    onChange: set('name')
  })), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.email ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "mail",
    s: 18
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "email",
    inputMode: "email",
    autoComplete: "email",
    name: "email",
    placeholder: "Email address",
    "aria-label": "Your email",
    value: form.email,
    onChange: set('email')
  })), /*#__PURE__*/React.createElement("div", {
    className: "lead-card__field",
    "data-invalid": errors.phone ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead-card__field-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "smartphone",
    s: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "lead-card__prefix"
  }, "+1"), /*#__PURE__*/React.createElement("input", {
    className: "lead-card__input",
    type: "tel",
    inputMode: "tel",
    autoComplete: "tel-national",
    name: "phone",
    placeholder: "(555) 123-4567",
    "aria-label": "Your US mobile number",
    value: form.phone,
    onChange: set('phone')
  })), firstError ? /*#__PURE__*/React.createElement("p", {
    className: "lead-card__err"
  }, /*#__PURE__*/React.createElement(I, {
    n: "alert-circle",
    s: 14
  }), firstError) : null, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(WpBtn, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    disabled: busy,
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, busy ? 'Saving your seat…' : 'Save my free seat'))), /*#__PURE__*/React.createElement("p", {
    className: "lead-card__fine"
  }, /*#__PURE__*/React.createElement(I, {
    n: "shield-check",
    s: 14
  }), "Free \xB7 we text your invite and join link \xB7 no spam, ever")));
}
function WpHero() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    let ctx = null;
    const cancel = awWhenVisible(() => {
      if (!ref.current) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power4.out'
          }
        });
        tl.from(ref.current.querySelectorAll('.wp-line__in'), {
          yPercent: 115,
          duration: .9,
          stagger: .12
        }, .15).from(ref.current.querySelectorAll('.aw-hero__sub, .wp-hero__price, .wp-hero__trust'), {
          opacity: 0,
          y: 22,
          duration: .65,
          stagger: .1
        }, '-=.4').from(ref.current.querySelector('.aw-hero__card'), {
          opacity: 0,
          y: 34,
          duration: .8
        }, '-=.5');
      }, ref);
    });
    return () => {
      cancel();
      if (ctx) ctx.revert();
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-hero aw-grain",
    ref: ref,
    id: "top"
  }, /*#__PURE__*/React.createElement(AwCanvas, null), /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__copy"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "wp-hero__h1",
    "aria-label": "Learn AI skills you can actually use at work"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__in"
  }, "Learn ", /*#__PURE__*/React.createElement("em", null, "AI skills")))), /*#__PURE__*/React.createElement("span", {
    className: "wp-line",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__in"
  }, "you can actually use"))), /*#__PURE__*/React.createElement("span", {
    className: "wp-line",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-line__in"
  }, "at work")))), /*#__PURE__*/React.createElement("p", {
    className: "aw-hero__sub"
  }, "AI is changing every role. The professionals who learn how to use AI, build with AI, and apply AI to real business problems will have a major advantage. Join our free Open House and see how Colaberry's AI Membership helps working professionals ", /*#__PURE__*/React.createElement("strong", null, "learn with Claude, build through real projects, and stay ahead in the AI economy.")), /*#__PURE__*/React.createElement("p", {
    className: "wp-hero__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-hero__price-ic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "ticket",
    s: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "wp-hero__price-tx"
  }, "Membership starts at ", /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("span", null, "$149"), "/month"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-hero__trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-avatar-group"
  }, /*#__PURE__*/React.createElement(WpAvatar, {
    name: "Mika Rivera",
    size: "sm",
    style: {
      background: 'var(--blue-600)'
    }
  }), /*#__PURE__*/React.createElement(WpAvatar, {
    name: "Owen Brooks",
    size: "sm",
    style: {
      background: 'var(--green-700)'
    }
  }), /*#__PURE__*/React.createElement(WpAvatar, {
    name: "Ada Lovelace",
    size: "sm",
    style: {
      background: 'var(--red-600)'
    }
  }), /*#__PURE__*/React.createElement(WpAvatar, {
    name: "Sam Okafor",
    size: "sm",
    style: {
      background: 'var(--blue-700)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "wp-hero__trust-label"
  }, /*#__PURE__*/React.createElement("b", null, "5,000+"), " careers changed since 2012 \xB7 Texas Workforce Commission approved"))), /*#__PURE__*/React.createElement("div", {
    className: "aw-hero__card"
  }, /*#__PURE__*/React.createElement(WpRegCard, null))));
}
function WpMarquee() {
  const items = [/*#__PURE__*/React.createElement("span", {
    key: "a"
  }, "Learn with ", /*#__PURE__*/React.createElement("em", {
    className: "is-blue"
  }, "Claude")), /*#__PURE__*/React.createElement("span", {
    key: "b"
  }, "Build through ", /*#__PURE__*/React.createElement("em", {
    className: "is-green"
  }, "real projects")), /*#__PURE__*/React.createElement("span", {
    key: "c"
  }, "Stay ahead in the ", /*#__PURE__*/React.createElement("em", {
    className: "is-red"
  }, "AI economy")), /*#__PURE__*/React.createElement("span", {
    key: "d"
  }, "Membership \xB7 $149/month")];
  const list = hidden => /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__list",
    "aria-hidden": hidden || undefined
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__item",
    key: i
  }, it, /*#__PURE__*/React.createElement("span", {
    className: "aw-mq__dot"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-mq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-mq__inner"
  }, list(false), list(true)));
}
function WpStats() {
  const ref = React.useRef(null);
  const stats = [{
    n: 5000,
    suffix: '+',
    label: 'careers changed since 2012',
    em: true
  }, {
    n: 49,
    suffix: '',
    label: 'countries with Colaberry learners'
  }, {
    n: 149,
    suffix: '',
    prefix: '$',
    label: 'per month to get started'
  }, {
    n: 90,
    suffix: '',
    label: 'minutes of demos, stories & Q&A'
  }];
  const fmt = v => v.toLocaleString('en-US');
  React.useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const ctx = gsap.context(() => {
      ref.current.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const obj = {
          v: 0
        };
        gsap.to(obj, {
          v: target,
          duration: 1.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true
          },
          onUpdate: () => {
            el.textContent = prefix + fmt(Math.round(obj.v)) + suffix;
          }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "aw-stats",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stats__grid"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "aw-stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__n"
  }, s.em ? /*#__PURE__*/React.createElement("em", {
    "data-count": s.n,
    "data-suffix": s.suffix,
    "data-prefix": s.prefix || ''
  }, (s.prefix || '') + fmt(s.n) + s.suffix) : /*#__PURE__*/React.createElement("span", {
    "data-count": s.n,
    "data-suffix": s.suffix,
    "data-prefix": s.prefix || ''
  }, (s.prefix || '') + fmt(s.n) + s.suffix)), /*#__PURE__*/React.createElement("div", {
    className: "aw-stat__l"
  }, s.label)))));
}
Object.assign(window, {
  WpHero,
  WpRegCard,
  WpMarquee,
  WpStats,
  WP_DATE,
  WP_THANKYOU
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/wp-hero.jsx", error: String((e && e.message) || e) }); }

// Colaberry School/wp-sections.jsx
try { (() => {
/* Working Professionals — Gap, Roles, Pillars, Open House explore */

/* "AI Is No Longer Optional" — statement + the verbs AI is already touching */
function WpGap() {
  const verbs = [{
    icon: 'search',
    t: 'Research'
  }, {
    icon: 'pen-line',
    t: 'Write'
  }, {
    icon: 'bar-chart-3',
    t: 'Analyze'
  }, {
    icon: 'calendar-range',
    t: 'Plan'
  }, {
    icon: 'workflow',
    t: 'Automate'
  }, {
    icon: 'git-branch',
    t: 'Decide'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-gap"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--red"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "01"), "The shift"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "AI is no longer", /*#__PURE__*/React.createElement("br", null), "optional"), /*#__PURE__*/React.createElement("p", {
    className: "wp-gap__p"
  }, "AI is already changing how teams research, write, analyze, plan, automate, and make decisions. Most professionals are experimenting with AI tools. ", /*#__PURE__*/React.createElement("strong", null, "Very few are learning how to apply AI to real business workflows."), " That is the gap this membership is designed to close.")), /*#__PURE__*/React.createElement("div", {
    className: "wp-verbs",
    "data-rv": true
  }, verbs.map((v, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-verb",
    key: i
  }, /*#__PURE__*/React.createElement(I, {
    n: v.icon
  }), v.t)))));
}

/* "Built For Working Professionals" — editorial role manifest */
function WpWho() {
  const accents = ['var(--blue-500)', 'var(--green-600)', 'var(--red-500)'];
  const roles = ['Business Analysts', 'Project Managers', 'Product Managers', 'Operations Professionals', 'Marketing Professionals', 'HR Professionals', 'Consultants', 'Managers & Team Leads'];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-who2__head"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--blue"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "02"), "Who it's for"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "Built for working", /*#__PURE__*/React.createElement("br", null), "professionals")), /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "wp-who2__lead"
  }, "You do not need to become a machine learning engineer. ", /*#__PURE__*/React.createElement("strong", null, "You need practical AI skills you can apply at work.")), /*#__PURE__*/React.createElement("span", {
    className: "wp-who2__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "sparkles",
    s: 13
  }), "No ML degree required"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-roles2"
  }, roles.map((r, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-rolechip",
    "data-rv": true,
    key: i,
    style: {
      '--_c': accents[i % 3]
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-rolechip__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wp-rolechip__t"
  }, r)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-who2__cta",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-who2__cta-q"
  }, "See yourself on this list?"), /*#__PURE__*/React.createElement("a", {
    className: "wp-who2__cta-link",
    href: "https://form.jotform.com/251193437881463"
  }, "Join the free Open House", /*#__PURE__*/React.createElement(I, {
    n: "arrow-right",
    s: 18
  }))));
}

/* "Learn With Claude" + "Build Through Real Projects" — two editorial pillars */
function WpPillars() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-pillars"
  }, /*#__PURE__*/React.createElement("section", {
    className: "wp-pillar",
    style: {
      '--_c': 'var(--blue-500)'
    },
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__body",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__big",
    "aria-hidden": "true"
  }, "01"), /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--blue"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__tick"
  }), "Inside the membership"), /*#__PURE__*/React.createElement("h3", null, "Learn with ", /*#__PURE__*/React.createElement("em", null, "Claude")), /*#__PURE__*/React.createElement("p", {
    className: "wp-pillar__goal"
  }, "The goal is simple: learn how to use AI as a practical work partner."), /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__chips"
  }, ['Research & analysis', 'Planning & documentation', 'Workflow improvement', 'Business problem solving', 'AI-assisted project development', 'Real-world use cases'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__chip",
    key: i
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__media",
    "data-rv": true
  }, /*#__PURE__*/React.createElement(AwIlloLearn, null)))), /*#__PURE__*/React.createElement("section", {
    className: "wp-pillar",
    style: {
      '--_c': 'var(--green-600)'
    },
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__body",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__big",
    "aria-hidden": "true"
  }, "02"), /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--green"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__tick"
  }), "Inside the membership"), /*#__PURE__*/React.createElement("h3", null, "Build through ", /*#__PURE__*/React.createElement("em", null, "real projects")), /*#__PURE__*/React.createElement("p", null, "Learning AI is not enough. You need practice. Inside the membership, you will work on real projects that show how AI can be used in business, operations, workflows, and problem solving. ", /*#__PURE__*/React.createElement("strong", null, "You will learn by building. You will learn by applying. You will learn by doing.")), /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__chips"
  }, ['Business', 'Operations', 'Workflows', 'Problem solving'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    className: "wp-pillar__chip",
    key: i
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-pillar__media",
    "data-rv": true
  }, /*#__PURE__*/React.createElement(AwIlloBuild, null)))));
}

/* "What You Will Explore In The Free Open House" — checklist + CTA */
const {
  Button: WpExBtn
} = window.ColaberryDesignSystem_098454;
function WpExplore() {
  const items = [/*#__PURE__*/React.createElement(React.Fragment, null, "What is included inside the AI Membership"), /*#__PURE__*/React.createElement(React.Fragment, null, "How working professionals can learn AI with Claude"), /*#__PURE__*/React.createElement(React.Fragment, null, "How real projects help you build practical skills"), /*#__PURE__*/React.createElement(React.Fragment, null, "How the membership helps you stay updated as AI evolves"), /*#__PURE__*/React.createElement(React.Fragment, null, "How Colaberry guides you from learning to implementation"), /*#__PURE__*/React.createElement(React.Fragment, null, "How to get started for ", /*#__PURE__*/React.createElement("b", null, "$149/month"))];
  return /*#__PURE__*/React.createElement("section", {
    className: "aw-section",
    id: "explore",
    "data-rv-group": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-explore"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-explore__aside",
    "data-rv": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker aw-kicker--red"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw-kicker__n"
  }, "03"), "The Open House"), /*#__PURE__*/React.createElement("h2", {
    className: "aw-h2"
  }, "What you'll explore"), /*#__PURE__*/React.createElement("div", {
    className: "wp-explore__time"
  }, /*#__PURE__*/React.createElement(I, {
    n: "clock",
    s: 15
  }), "90 minutes \xB7 live \xB7 free"), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(WpExBtn, {
    size: "lg",
    as: "a",
    href: "https://form.jotform.com/251193437881463",
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Reserve my free seat"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-elist"
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "wp-eitem",
    "data-rv": true,
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-eitem__n"
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("span", {
    className: "wp-eitem__t"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "wp-eitem__c"
  }, /*#__PURE__*/React.createElement(I, {
    n: "check",
    s: 20
  })))))));
}
Object.assign(window, {
  WpGap,
  WpWho,
  WpPillars,
  WpExplore
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "Colaberry School/wp-sections.jsx", error: String((e && e.message) || e) }); }

// ads/ad-scenes.jsx
try { (() => {
/* ============================================================
   Colaberry Meta Ads — Intro & Outro scenes
   Built on ads/animations.jsx (Stage/Sprite engine).
   Brand: warm canvas #FBFAF8, cherry #FB2832, ink #1A1A1A.
   Both scenes are fully centered so they read in 1:1 and 9:16
   (and survive Meta's UI overlays top/bottom in 9:16).
   ============================================================ */
const {
  Stage,
  Sprite,
  useTime,
  Easing,
  animate,
  interpolate
} = window;
const BRAND = {
  canvas: '#FBFAF8',
  ink: '#1A1A1A',
  red: '#FB2832',
  redDeep: '#E5121D',
  muted: '#6B6B6B',
  display: "'Roboto', system-ui, sans-serif",
  mono: "'Roboto Mono', ui-monospace, monospace"
};

/* ---------- shared bits ---------- */

/* Soft radial wash that slowly breathes — keeps every frame alive */
function Breather({
  W,
  H,
  color,
  opacity = 1
}) {
  const t = useTime();
  const s = 1 + 0.06 * Math.sin(t * 0.7);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: W / 2 - W * 0.75,
      top: H / 2 - W * 0.75,
      width: W * 1.5,
      height: W * 1.5,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${color} 0%, transparent 62%)`,
      transform: `scale(${s})`,
      opacity
    }
  });
}

/* Rise + fade entrance wrapper (clean & confident) */
function Rise({
  at,
  dur = 0.55,
  dist = 34,
  children,
  style
}) {
  const t = useTime();
  const p = Math.min(1, Math.max(0, (t - at) / dur));
  const e = Easing.easeOutCubic(p);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style,
      opacity: e,
      transform: `translateY(${(1 - e) * dist}px)`
    }
  }, children);
}

/* ============================================================
   INTRO — 3.5s logo reveal, "cherry drop".
   Beat: cherry falls in with gravity → lands with squash &
   stretch + a dust shadow → quick anticipation squeeze → BURSTS:
   juice droplets fly, red floods the frame, a ripple echoes →
   white logo rises on red. Ends on a held brand frame.
   ============================================================ */

/* deterministic splash droplets (angle, size, speed) */
const DROPLETS = Array.from({
  length: 12
}, (_, i) => {
  const golden = i * 2.399963; // golden-angle spread — organic, no clumps
  return {
    ang: golden,
    r: 0.55 + i * 37 % 10 / 18,
    // radius multiplier 0.55–1.1
    size: 10 + i * 53 % 26,
    // px at 1080 wide
    delay: i * 29 % 10 / 90 // 0–0.1s stagger
  };
});
function IntroScene({
  W,
  H
}) {
  const t = useTime();
  const iconW = Math.round(W * 0.26);
  const iconH = Math.round(iconW * 408 / 508);
  const cx = W / 2,
    cy = H / 2;

  /* -- 1. THE DROP (0–0.55): gravity fall from above the frame -- */
  const fallP = Math.min(1, Math.max(0, (t - 0.05) / 0.5));
  const fall = Easing.easeInQuad(fallP); // accelerates like gravity
  const dropY = (fall - 1) * (H / 2 + iconH); // from off-screen to center
  const fallRot = (1 - fall) * -10; // slight tumble that rights itself

  /* -- 2. THE LANDING (0.55–0.95): squash & stretch, then settle -- */
  let sx = 1,
    sy = 1;
  if (t >= 0.55 && t < 0.72) {
    // impact: squash wide + flat
    const p = (t - 0.55) / 0.17;
    const k = Math.sin(p * Math.PI);
    sx = 1 + 0.20 * k;
    sy = 1 - 0.22 * k;
  } else if (t >= 0.72 && t < 0.95) {
    // rebound: overshoot tall, settle
    const p = (t - 0.72) / 0.23;
    const k = Math.sin(p * Math.PI) * (1 - p);
    sx = 1 - 0.08 * k;
    sy = 1 + 0.10 * k;
  }

  /* -- 3. ANTICIPATION (1.05–1.2): quick inhale before the burst -- */
  if (t >= 1.05 && t < 1.2) {
    const p = (t - 1.05) / 0.15;
    const k = Math.sin(p * Math.PI * 0.5);
    sx -= 0.10 * k;
    sy -= 0.10 * k;
  }

  /* -- 4. THE BURST (1.2–1.75): flood + droplets + ripple -- */
  const burstP = Math.min(1, Math.max(0, (t - 1.2) / 0.55));
  const burst = Easing.easeInOutQuart(burstP);
  const cover = Math.hypot(W, H);
  const floodD = iconW * 0.4 + burst * cover;
  const cherryFade = Math.min(1, Math.max(0, (t - 1.28) / 0.26));
  const cherryPop = 1 + burst * 0.7;

  // ground shadow: appears late in the fall, flattens on squash, dies at burst
  const shadowOn = Math.min(1, Math.max(0, (fallP - 0.55) / 0.45));
  const shadowW = iconW * (0.72 + 0.3 * (sx - 1) * 5) * shadowOn;
  const shadowO = shadowOn * 0.18 * (1 - burstP);

  // ripple ring echoing across the red after the flood
  const rippleP = Math.min(1, Math.max(0, (t - 1.7) / 0.7));
  const rippleD = iconW + Easing.easeOutCubic(rippleP) * W * 1.1;

  // logo: rises with a soft scale settle, then breathes
  const drift = 1 + 0.012 * Math.sin(Math.max(0, t - 2.4) * 0.9);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: BRAND.canvas,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Breather, {
    W: W,
    H: H,
    color: "rgba(251,40,50,0.07)"
  }), /*#__PURE__*/React.createElement(Sprite, {
    start: 0.3,
    end: 1.5
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: cx - shadowW / 2,
      top: cy + iconH * 0.52,
      width: shadowW,
      height: iconH * 0.13,
      borderRadius: '50%',
      background: `radial-gradient(ellipse, rgba(26,26,26,${shadowO}) 0%, transparent 70%)`
    }
  })), /*#__PURE__*/React.createElement(Sprite, {
    start: 1.2,
    end: 999
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: cx - floodD / 2,
      top: cy - floodD / 2,
      width: floodD,
      height: floodD,
      borderRadius: '50%',
      background: BRAND.red
    }
  })), /*#__PURE__*/React.createElement(Sprite, {
    start: 1.2,
    end: 1.85
  }, DROPLETS.map((d, i) => {
    const p = Math.min(1, Math.max(0, (t - 1.2 - d.delay) / 0.5));
    const e = Easing.easeOutCubic(p);
    const dist = e * W * 0.42 * d.r;
    const px = cx + Math.cos(d.ang) * dist;
    const py = cy + Math.sin(d.ang) * dist + 0.25 * p * p * W * 0.12; // slight gravity
    const ds = d.size * (W / 1080) * (1 - 0.5 * p);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: px - ds / 2,
        top: py - ds / 2,
        width: ds,
        height: ds,
        borderRadius: '50%',
        background: i % 3 === 0 ? BRAND.redDeep : BRAND.red,
        opacity: 1 - Easing.easeInQuad(p)
      }
    });
  })), /*#__PURE__*/React.createElement(Sprite, {
    start: 0,
    end: 1.6
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/colaberry-mark.png",
    alt: "",
    style: {
      position: 'absolute',
      left: cx - iconW / 2,
      top: cy - iconH / 2 + dropY,
      width: iconW,
      height: iconH,
      transform: `rotate(${fallRot}deg) scale(${sx * cherryPop}, ${sy * cherryPop})`,
      transformOrigin: '50% 100%',
      // squash from the ground up
      opacity: 1 - cherryFade,
      filter: burstP > 0 ? 'none' : 'drop-shadow(0 18px 34px rgba(251,40,50,0.25))'
    }
  })), /*#__PURE__*/React.createElement(Sprite, {
    start: 1.7,
    end: 2.5
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: cx - rippleD / 2,
      top: cy - rippleD / 2,
      width: rippleD,
      height: rippleD,
      borderRadius: '50%',
      border: `${3 * (W / 1080)}px solid rgba(255,255,255,${0.35 * (1 - rippleP)})`
    }
  })), /*#__PURE__*/React.createElement(Sprite, {
    start: 1.55,
    end: 999
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: `scale(${drift})`
    }
  }, /*#__PURE__*/React.createElement(Rise, {
    at: 1.65,
    dur: 0.6,
    dist: 44
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/colaberry-horizontal-white.png",
    alt: "Colaberry",
    style: {
      width: Math.round(W * 0.52),
      display: 'block'
    }
  })))));
}

/* ============================================================
   OUTRO — 5s CTA card, everything center-stacked.
   Beat: logo → headline → date chip → CTA pops and floats → url.
   ============================================================ */
function OutroScene({
  W,
  H
}) {
  const t = useTime();

  // CTA pop + perpetual gentle float
  const popP = Math.min(1, Math.max(0, (t - 1.4) / 0.55));
  const pop = Easing.easeOutBack(popP);
  const float = popP >= 1 ? Math.sin((t - 1.95) * 1.6) * 6 : 0;
  const arrowNudge = 4 + 3 * Math.sin(t * 2.2);

  // slow-drifting warm glow behind the stack
  const gx = W / 2 + Math.sin(t * 0.5) * W * 0.06;
  const gy = H / 2 + Math.cos(t * 0.4) * H * 0.05;
  const fs = k => Math.round(W * k); // scale type off width so 1:1 and 9:16 both read

  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: BRAND.ink,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: gx - W * 0.6,
      top: gy - W * 0.6,
      width: W * 1.2,
      height: W * 1.2,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(251,40,50,0.16) 0%, transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: `0 ${Math.round(W * 0.09)}px`,
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(Rise, {
    at: 0.2,
    dur: 0.55
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/colaberry-horizontal-white.png",
    alt: "Colaberry",
    style: {
      width: fs(0.30),
      display: 'block',
      margin: '0 auto'
    }
  })), /*#__PURE__*/React.createElement(Rise, {
    at: 0.7,
    dur: 0.6,
    style: {
      marginTop: Math.round(H * 0.045)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BRAND.display,
      fontWeight: 900,
      color: '#fff',
      fontSize: fs(0.082),
      lineHeight: 1.02,
      letterSpacing: '-0.03em'
    }
  }, "Join the free", /*#__PURE__*/React.createElement("br", null), "Open House.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: Math.round(H * 0.05),
      position: 'relative',
      opacity: popP,
      transform: `scale(${pop}) translateY(${float}px)`
    }
  }, [0, 0.7].map((off, i) => {
    const cycle = ((t - 2.1 - off) % 1.4 + 1.4) % 1.4;
    const on = t > 2.1 + off;
    const rp = cycle / 1.4;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: 999,
        border: `2px solid rgba(251,40,50,${on ? 0.55 * (1 - rp) : 0})`,
        transform: `scale(${1 + rp * 0.55})`
      }
    });
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: BRAND.display,
      fontWeight: 700,
      color: '#fff',
      fontSize: fs(0.036),
      background: BRAND.red,
      borderRadius: 999,
      padding: `${fs(0.026)}px ${fs(0.055)}px`,
      boxShadow: '0 22px 60px rgba(251,40,50,0.45)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '36%',
      left: `${-40 + ((t - 2.3) % 2.4 + 2.4) % 2.4 / 2.4 * 190}%`,
      background: 'linear-gradient(105deg, transparent, rgba(255,255,255,0.28), transparent)',
      opacity: t > 2.3 ? 1 : 0
    }
  }), "Register free", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: `translateX(${arrowNudge}px)`,
      fontWeight: 400
    }
  }, "\u2192")))));
}

/* ============================================================
   App shell — format toggle (1:1 / 9:16) + scene toggle, one
   Stage mounted at a time so video export captures exactly it.
   ============================================================ */
const AD_FORMATS = {
  square: {
    label: '1:1',
    W: 1080,
    H: 1080
  },
  story: {
    label: '9:16',
    W: 1080,
    H: 1920
  }
};
function AdApp({
  scene
}) {
  const [fmt, setFmt] = React.useState(() => {
    const q = new URLSearchParams(location.search).get('fmt');
    if (q === 'square' || q === 'story') return q;
    return localStorage.getItem('cb-ad-fmt') || 'square';
  });
  React.useEffect(() => {
    localStorage.setItem('cb-ad-fmt', fmt);
  }, [fmt]);
  const {
    W,
    H
  } = AD_FORMATS[fmt];
  const dur = scene === 'intro' ? 3.5 : 4;
  const Scene = scene === 'intro' ? IntroScene : OutroScene;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: '#111'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: '10px 16px',
      background: '#1A1A1A',
      borderBottom: '1px solid #2c2c2c',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: BRAND.mono,
      fontSize: 12,
      letterSpacing: '0.12em',
      color: '#888',
      textTransform: 'uppercase',
      marginRight: 8
    }
  }, scene === 'intro' ? 'Meta ad · Intro' : 'Meta ad · Outro'), Object.entries(AD_FORMATS).map(([k, f]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setFmt(k),
    style: {
      fontFamily: BRAND.mono,
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      padding: '7px 18px',
      borderRadius: 999,
      border: '1px solid ' + (fmt === k ? BRAND.red : '#3a3a3a'),
      background: fmt === k ? BRAND.red : 'transparent',
      color: fmt === k ? '#fff' : '#aaa'
    }
  }, f.label)), /*#__PURE__*/React.createElement("a", {
    href: scene === 'intro' ? 'Meta Ad Outro.html' : 'Meta Ad Intro.html',
    style: {
      fontFamily: BRAND.mono,
      fontSize: 12,
      color: '#888',
      marginLeft: 14,
      textDecoration: 'none',
      borderBottom: '1px dotted #555'
    }
  }, scene === 'intro' ? 'go to outro →' : '← go to intro'), /*#__PURE__*/React.createElement("a", {
    href: "Meta Ads Review.html",
    style: {
      fontFamily: BRAND.mono,
      fontSize: 12,
      color: '#888',
      marginLeft: 14,
      textDecoration: 'none',
      borderBottom: '1px dotted #555'
    }
  }, "all 4 \u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Stage, {
    key: fmt,
    width: W,
    height: H,
    duration: dur,
    background: scene === 'intro' ? BRAND.canvas : BRAND.ink,
    loop: true,
    autoplay: true
  }, /*#__PURE__*/React.createElement(Sprite, {
    start: 0,
    end: 999
  }, /*#__PURE__*/React.createElement(SceneMount, {
    Scene: Scene,
    W: W,
    H: H
  })))));
}
function SceneMount({
  Scene,
  W,
  H
}) {
  return /*#__PURE__*/React.createElement(Scene, {
    W: W,
    H: H
  });
}

/* ============================================================
   REVIEW GALLERY — all four deliverables on one page.
   Live looping previews driven by one shared clock; each card
   opens its dedicated export page (Share → Export → Video).
   ============================================================ */
const AD_SET = [{
  scene: 'intro',
  fmt: 'square',
  dur: 3.5,
  page: 'Meta Ad Intro.html'
}, {
  scene: 'intro',
  fmt: 'story',
  dur: 3.5,
  page: 'Meta Ad Intro.html'
}, {
  scene: 'outro',
  fmt: 'square',
  dur: 4,
  page: 'Meta Ad Outro.html'
}, {
  scene: 'outro',
  fmt: 'story',
  dur: 4,
  page: 'Meta Ad Outro.html'
}];
function GalleryCard({
  item,
  time
}) {
  const {
    W,
    H
  } = AD_FORMATS[item.fmt];
  const Scene = item.scene === 'intro' ? IntroScene : OutroScene;
  const previewH = 400;
  const previewW = Math.round(previewH * W / H);
  const s = previewH / H;
  const [hover, setHover] = React.useState(false);
  const href = item.page + '?fmt=' + item.fmt;
  const ctx = React.useMemo(() => ({
    time: time % item.dur,
    duration: item.dur,
    playing: true,
    setTime: () => {},
    setPlaying: () => {}
  }), [time, item.dur]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: BRAND.display,
      fontWeight: 700,
      fontSize: 16,
      color: '#fff',
      textTransform: 'capitalize'
    }
  }, item.scene), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: BRAND.mono,
      fontSize: 12,
      color: '#888'
    }
  }, AD_FORMATS[item.fmt].label, " \xB7 ", W, "\xD7", H, " \xB7 ", item.dur, "s")), /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      width: previewW,
      height: previewH,
      borderRadius: 14,
      overflow: 'hidden',
      textDecoration: 'none',
      flex: 'none',
      outline: hover ? '2px solid ' + BRAND.red : '1px solid #333',
      boxShadow: hover ? '0 18px 50px rgba(251,40,50,0.25)' : '0 12px 36px rgba(0,0,0,0.5)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'all .25s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      transform: `scale(${s})`,
      transformOrigin: 'top left',
      position: 'relative',
      pointerEvents: 'none',
      background: item.scene === 'intro' ? BRAND.canvas : BRAND.ink
    }
  }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
    value: ctx
  }, /*#__PURE__*/React.createElement(SceneMount, {
    Scene: Scene,
    W: W,
    H: H
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(26,26,26,0.55)' : 'transparent',
      transition: 'background .25s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: BRAND.mono,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#fff',
      background: BRAND.red,
      borderRadius: 999,
      padding: '10px 20px',
      opacity: hover ? 1 : 0,
      transform: hover ? 'none' : 'translateY(8px)',
      transition: 'all .25s ease'
    }
  }, "Open \xB7 Export \u2192"))));
}
function AdGallery() {
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    let raf, last;
    const step = ts => {
      if (last == null) last = ts;
      setTime(t => t + (ts - last) / 1000);
      last = ts;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#111',
      padding: '40px 32px 64px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/colaberry-horizontal-white.png",
    alt: "Colaberry",
    style: {
      height: 26,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BRAND.display,
      fontWeight: 900,
      fontSize: 30,
      color: '#fff',
      letterSpacing: '-0.02em'
    }
  }, "Meta Ads \xB7 Intro & Outro"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BRAND.mono,
      fontSize: 13,
      color: '#888',
      marginTop: 8
    }
  }, "4 deliverables \xB7 click any card, then Share \u2192 Export \u2192 Video for the MP4")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 36,
      justifyContent: 'center',
      alignItems: 'flex-end'
    }
  }, AD_SET.map((item, i) => /*#__PURE__*/React.createElement(GalleryCard, {
    key: i,
    item: item,
    time: time
  })))));
}
window.CbAdApp = AdApp;
window.CbAdGallery = AdGallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ads/ad-scenes.jsx", error: String((e && e.message) || e) }); }

// ads/animations.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// animations.jsx — timeline engine. Exports (on window): Stage, Sprite,
//   TextSprite, ImageSprite, RectSprite, VideoSprite, PlaybackBar,
//   useTime, useTimeline, useSprite, Easing, interpolate, animate, clamp.
//
//   <Stage width={1280} height={720} duration={10} background="#f6f4ef">
//     <Sprite start={0} end={3}>
//       <TextSprite text="Hello" x={100} y={300} size={72} color="#111" />
//     </Sprite>
//     <Sprite start={2} end={8}>
//       <ImageSprite src="hero.png" x={200} y={120} width={640} height={360} kenBurns />
//     </Sprite>
//   </Stage>
//
// Stage({width,height,duration,background,fps,loop,autoplay}) — auto-scales to
//   viewport; scrubber + play/pause + ←/→ seek + space + 0-reset; persists
//   playhead. The canvas is an <svg><foreignObject>, export-ready: Share →
//   Export → Video (or the PlaybackBar's download button) renders it to .mp4.
//   Screenshot tools DOM-rerender (not pixel-capture) and unwrap this wrapper
//   so captures should work — but if one comes back black, that's a capture
//   artifact, not a render bug; trust the live preview.
// Sprite({start,end,keepMounted}) — mounts children only while playhead is in
//   [start,end]. Children read {localTime, progress, duration} via useSprite().
// useTime() → seconds; useTimeline() → {time,duration,playing,setTime,setPlaying}.
// TextSprite({text,x,y,size,color,font,weight,align,entryDur,exitDur}) — fades/scales in+out.
// ImageSprite({src,x,y,width,height,fit,radius,kenBurns,placeholder}) — same, with optional ken-burns.
// RectSprite({x,y,width,height,color,radius}) — solid box with entry/exit.
// VideoSprite({src,start,end,speed,style}) — looped <video> clip synced to the
//   timeline; its audio is mixed into the exported video.
// Easing.{linear,easeIn/Out/InOut Quad/Cubic/Quart/Quint/Expo/Back, …}
// interpolate([t0,t1,…],[v0,v1,…],ease?) → (t)=>v  — piecewise tween.
// animate({from,to,start,end,ease}) → (t)=>v  — single tween.
//
// Build scenes by composing Sprites inside Stage. Absolutely-position elements.
//
// In a .dc.html project, put your scene in a sibling my-scene.jsx (reading
// {Stage, Sprite, useTime, Easing, …} from window is safe) and mount BOTH:
//   <x-import component-from-global-scope="MyScene"
//             from="./animations.jsx ./my-scene.jsx"></x-import>
// The two files in from= load in order, so my-scene.jsx can use the globals
// animations.jsx set.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: t => t,
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // Expo
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  // Back (overshoot)
  easeOutBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: t => {
    const c1 = 1.70158,
      c2 = c1 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  // Elastic
  easeOutElastic: t => {
    const c4 = 2 * Math.PI / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return t => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? ease[i] || Easing.linear : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic
}) {
  return t => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({
  time: 0,
  duration: 10,
  playing: false
});
const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// ── Sprite ──────────────────────────────────────────────────────────────────
// Renders children only when the playhead is inside [start, end]. Provides
// a sub-context with `localTime` (seconds since start) and `progress` (0..1).
//
//   <Sprite start={2} end={5}>
//     {({ localTime, progress }) => <Thing x={progress * 100} />}
//   </Sprite>
//
// Or as a plain wrapper — children can call useSprite() themselves.

const SpriteContext = React.createContext({
  localTime: 0,
  progress: 0,
  duration: 0
});
const useSprite = () => React.useContext(SpriteContext);
function Sprite({
  start = 0,
  end = Infinity,
  children,
  keepMounted = false
}) {
  const {
    time
  } = useTimeline();
  const visible = time >= start && time <= end;
  if (!visible && !keepMounted) return null;
  const duration = end - start;
  const localTime = Math.max(0, time - start);
  const progress = duration > 0 && isFinite(duration) ? clamp(localTime / duration, 0, 1) : 0;
  const value = {
    localTime,
    progress,
    duration,
    visible
  };
  return /*#__PURE__*/React.createElement(SpriteContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
}

// ── Sample sprite components ────────────────────────────────────────────────

// TextSprite: fades/slides text in on entry, holds, then fades out on exit.
// Props: text, x, y, size, color, font, entryDur, exitDur, align
function TextSprite({
  text,
  x = 0,
  y = 0,
  size = 48,
  color = '#111',
  font = 'Inter, system-ui, sans-serif',
  weight = 600,
  entryDur = 0.45,
  exitDur = 0.35,
  entryEase = Easing.easeOutBack,
  exitEase = Easing.easeInCubic,
  align = 'left',
  letterSpacing = '-0.01em'
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let ty = 0;
  if (localTime < entryDur) {
    const t = entryEase(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    ty = (1 - t) * 16;
  } else if (localTime > exitStart) {
    const t = exitEase(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    ty = -t * 8;
  }
  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      transform: `translate(${translateX}, ${ty}px)`,
      opacity,
      fontFamily: font,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing,
      whiteSpace: 'pre',
      lineHeight: 1.1,
      willChange: 'transform, opacity'
    }
  }, text);
}

// ImageSprite: scales + fades in; optional Ken Burns drift during hold.
function ImageSprite({
  src,
  x = 0,
  y = 0,
  width = 400,
  height = 300,
  entryDur = 0.6,
  exitDur = 0.4,
  kenBurns = false,
  kenBurnsScale = 1.08,
  radius = 12,
  fit = 'cover',
  placeholder = null // {label: string} for striped placeholder
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutCubic(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    scale = 0.96 + 0.04 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = (kenBurns ? kenBurnsScale : 1) + 0.02 * t;
  } else if (kenBurns) {
    const holdSpan = exitStart - entryDur;
    const holdT = holdSpan > 0 ? (localTime - entryDur) / holdSpan : 0;
    scale = 1 + (kenBurnsScale - 1) * holdT;
  }
  const content = placeholder ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'repeating-linear-gradient(135deg, #e9e6df 0 10px, #dcd8cf 10px 20px)',
      color: '#6b6458',
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, placeholder.label || 'image') : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      borderRadius: radius,
      overflow: 'hidden',
      willChange: 'transform, opacity'
    }
  }, content);
}

// RectSprite: simple rectangle that animates position/size/color via props.
// Useful demo primitive — takes a `render` fn for per-frame customization.
function RectSprite({
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  color = '#111',
  radius = 8,
  entryDur = 0.4,
  exitDur = 0.3,
  render // optional: (ctx) => style overrides
}) {
  const spriteCtx = useSprite();
  const {
    localTime,
    duration
  } = spriteCtx;
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutBack(clamp(localTime / entryDur, 0, 1));
    opacity = clamp(localTime / entryDur, 0, 1);
    scale = 0.4 + 0.6 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInQuad(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = 1 - 0.15 * t;
  }
  const overrides = render ? render(spriteCtx) : {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      background: color,
      borderRadius: radius,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      willChange: 'transform, opacity',
      ...overrides
    }
  });
}

// ── Font inlining ───────────────────────────────────────────────────────────
// Copy every @font-face rule from the page into a <style> inside the svg's
// foreignObject, with font URLs rewritten to data: URLs. Makes the svg
// self-describing so serializing it alone (video export fast path) still
// renders with the right fonts. Sets data-om-fonts-inlined on the svg when
// done so the exporter can wait for it.

function useInlineFontsInto(svgRef) {
  React.useEffect(() => {
    const svg = svgRef.current;
    const host = svg && svg.querySelector('foreignObject > div');
    if (!svg || !host) return;
    let cancelled = false;
    (async () => {
      const rules = [];
      for (const ss of document.styleSheets) {
        let cssRules;
        try {
          cssRules = ss.cssRules;
        } catch {
          // Cross-origin sheet without crossorigin attr (e.g. the standard
          // fonts.googleapis.com <link>) — fetch the CSS text directly and
          // regex-extract the @font-face blocks.
          if (ss.href) {
            try {
              const txt = await fetch(ss.href).then(r => {
                if (!r.ok) throw 0;
                return r.text();
              });
              for (const ff of txt.match(/@font-face\s*{[^}]*}/g) || []) rules.push({
                css: ff,
                base: ss.href
              });
            } catch {}
          }
          continue;
        }
        if (!cssRules) continue;
        for (const r of cssRules) {
          if (r.type === CSSRule.FONT_FACE_RULE) {
            rules.push({
              css: r.cssText,
              base: ss.href || location.href
            });
          }
        }
      }
      const toDataURL = url => fetch(url).then(r => {
        if (!r.ok) throw 0;
        return r.blob();
      }).then(b => new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => res(url);
        fr.readAsDataURL(b);
      })).catch(() => url);
      const parts = await Promise.all(rules.map(async ({
        css,
        base
      }) => {
        const re = /url\((['"]?)([^'")]+)\1\)/g;
        let out = css,
          m;
        while (m = re.exec(css)) {
          const u = m[2];
          if (u.startsWith('data:')) continue;
          let abs;
          try {
            abs = new URL(u, base).href;
          } catch {
            continue;
          }
          out = out.split(m[0]).join(`url("${await toDataURL(abs)}")`);
        }
        return out;
      }));
      if (cancelled || !parts.length) {
        svg.setAttribute('data-om-fonts-inlined', 'true');
        return;
      }
      const style = document.createElement('style');
      style.textContent = parts.join('\n');
      host.insertBefore(style, host.firstChild);
      svg.setAttribute('data-om-fonts-inlined', 'true');
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  persistKey = 'animstage',
  children
}) {
  // Props arrive as strings when Stage is mounted via <x-import> (DC
  // projects) — coerce so style={{width}} gets a number React can px-ify.
  width = +width || 1280;
  height = +height || 720;
  duration = +duration || 10;
  fps = +fps || 60;
  if (typeof loop === 'string') loop = loop !== 'false';
  if (typeof autoplay === 'string') autoplay = autoplay !== 'false';
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch {
      return 0;
    }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try {
      localStorage.setItem(persistKey + ':t', String(time));
    } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(el.clientWidth / width, (el.clientHeight - barH) / height);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    const step = ts => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime(t => {
        let next = t + dt;
        if (next >= duration) {
          if (loop) next = next % duration;else {
            next = duration;
            setPlaying(false);
          }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loop]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  // Video-export protocol: the exporter dispatches this event per frame;
  // pause + sync the playhead so the capture sees exactly that timestamp.
  React.useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onSeek = e => {
      setPlaying(false);
      setTime(clamp(e.detail.time, 0, duration));
    };
    el.addEventListener('data-om-seek-to-time-frame', onSeek);
    return () => el.removeEventListener('data-om-seek-to-time-frame', onSeek);
  }, [duration]);

  // Inline @font-face rules into the svg's foreignObject so the svg is
  // self-describing — serializing it alone (for video export) then renders
  // with the right fonts. Sets data-om-fonts-inlined once done.
  useInlineFontsInto(canvasRef);
  const displayTime = hoverTime != null ? hoverTime : time;
  const ctxValue = React.useMemo(() => ({
    time: displayTime,
    duration,
    playing,
    setTime,
    setPlaying
  }), [displayTime, duration, playing]);
  return /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#0a0a0a',
      fontFamily: 'Inter, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    ref: canvasRef,
    width: width,
    height: height,
    "data-om-exportable-video-with-duration-secs": duration,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      flexShrink: 0,
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("foreignObject", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("div", {
    xmlns: "http://www.w3.org/1999/xhtml",
    style: {
      width,
      height,
      background,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
    value: ctxValue
  }, children))))), /*#__PURE__*/React.createElement(PlaybackBar, {
    time: displayTime,
    actualTime: time,
    duration: duration,
    playing: playing,
    onPlayPause: () => setPlaying(p => !p),
    onReset: () => {
      setTime(0);
    },
    onSeek: t => setTime(t),
    onHover: t => setHoverTime(t)
  }));
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({
  time,
  duration,
  playing,
  onPlayPause,
  onReset,
  onSeek,
  onHover
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const timeFromEvent = React.useCallback(e => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);
  const onTrackMove = e => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };
  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };
  const onTrackDown = e => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = e => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);
  const pct = duration > 0 ? time / duration * 100 : 0;
  const fmt = t => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor(total * 100 % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };
  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';
  return /*#__PURE__*/React.createElement("div", {
    "data-omelette-chrome": true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 16px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',
      borderRadius: 8,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onReset,
    title: "Return to start (0)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v10M12 2L5 7l7 5V2z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onPlayPause,
    title: "Play/pause (space)"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'right',
      color: '#f6f4ef'
    }
  }, fmt(time)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseMove: onTrackMove,
    onMouseLeave: onTrackLeave,
    onMouseDown: onTrackDown,
    style: {
      flex: 1,
      height: 22,
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'oklch(72% 0.12 250)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct}%`,
      top: '50%',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -6,
      background: '#fff',
      borderRadius: 6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'left',
      color: 'rgba(246,244,239,0.55)'
    }
  }, fmt(duration)), typeof VideoEncoder !== 'undefined' && /*#__PURE__*/React.createElement(IconButton, {
    title: "Export video",
    onClick: () => window.parent.postMessage({
      type: 'omelette:request-video-export'
    }, '*')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7m0 0L4 6m3 3l3-3M2 12h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
function IconButton({
  children,
  onClick,
  title
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 6,
      color: '#f6f4ef',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 120ms'
    }
  }, children);
}

// ── VideoSprite ─────────────────────────────────────────────────────────────
// Renders a <video> that loops within [start,end] of its source at `speed`,
// kept in sync with the Stage's playhead. Carries the
// data-om-exportable-video-play-* attrs so video export can mix its audio.
//
//   <VideoSprite src="clip.mp4" start={2} end={5} speed={1}
//     style={{ width: 640, height: 360 }} />

function VideoSprite({
  src,
  start = 0,
  end,
  speed = 1,
  style,
  ...rest
}) {
  start = +start || 0;
  speed = +speed || 1;
  if (end != null) end = +end || undefined;
  const t = useTime();
  const ref = React.useRef(null);
  const span = Math.max(0.001, (end ?? start + 1) - start);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || v.readyState < 1) return;
    const target = start + t * speed % span;
    if (Math.abs(v.currentTime - target) > 0.05) v.currentTime = target;
  }, [t, start, span, speed]);
  return /*#__PURE__*/React.createElement("video", _extends({
    ref: ref,
    src: src,
    muted: true,
    playsInline: true,
    preload: "auto",
    "data-om-exportable-video-play-start": start,
    "data-om-exportable-video-play-end": end ?? start + span,
    "data-om-exportable-video-play-speed": speed,
    style: {
      display: 'block',
      objectFit: 'cover',
      ...style
    }
  }, rest));
}
Object.assign(window, {
  Easing,
  interpolate,
  animate,
  clamp,
  TimelineContext,
  useTime,
  useTimeline,
  Sprite,
  SpriteContext,
  useSprite,
  TextSprite,
  ImageSprite,
  RectSprite,
  VideoSprite,
  Stage,
  PlaybackBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ads/animations.jsx", error: String((e && e.message) || e) }); }

// app/charts.js
try { (() => {
/* Colaberry Learn — dashboard charts.
   Vanilla JS. Charts are drawn with the design system's --chart-N
   tokens so they stay on-brand and theme-aware. Reduced-motion safe.
   Theme boot + toggle lives in theme.js (shared by every app page). */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) {
    return (r || document).querySelector(s);
  };

  /* ---------- MOBILE DRAWER ---------- */
  var drawer = $('#drawer'),
    scrim = $('#scrim');
  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('is-open', open);
    scrim.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  var burger = $('#burger');
  if (burger) burger.addEventListener('click', function () {
    setDrawer(true);
  });
  var dClose = $('#drawerClose');
  if (dClose) dClose.addEventListener('click', function () {
    setDrawer(false);
  });
  if (scrim) scrim.addEventListener('click', function () {
    setDrawer(false);
  });
  if (drawer) drawer.addEventListener('click', function (e) {
    if (e.target.closest('a')) setDrawer(false);
  });

  /* ---------- LINE CHART ---------- */
  var W = 640,
    H = 240,
    PAD_L = 10,
    PAD_R = 10,
    TOP = 20,
    BOT = 24;
  var data = {
    progress: [8, 14, 21, 27, 34, 42, 50, 57, 61, 64, 66, 68],
    hours: [6, 9, 7, 11, 10, 13, 9, 14, 12, 15, 13, 16],
    grades: [72, 75, 78, 76, 82, 84, 83, 88, 86, 90, 89, 91],
    cohort: {
      progress: [7, 13, 19, 25, 31, 38, 45, 51, 56, 58, 60, 62],
      hours: [7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      grades: [70, 72, 74, 75, 77, 79, 80, 82, 83, 84, 85, 86]
    }
  };
  function maxOf(series) {
    var m = 0;
    series.forEach(function (a) {
      a.forEach(function (v) {
        if (v > m) m = v;
      });
    });
    return m <= 100 ? 100 : Math.ceil(m / 10) * 10;
  }
  function pts(arr, max) {
    var n = arr.length,
      span = W - PAD_L - PAD_R,
      innerH = H - TOP - BOT;
    return arr.map(function (v, i) {
      var x = PAD_L + span * i / (n - 1);
      var y = TOP + innerH * (1 - v / max);
      return [x, y];
    });
  }
  function lineD(p) {
    return p.map(function (q, i) {
      return (i ? 'L' : 'M') + q[0].toFixed(1) + ',' + q[1].toFixed(1);
    }).join(' ');
  }
  function areaD(p) {
    return lineD(p) + ' L' + p[p.length - 1][0].toFixed(1) + ',' + (H - BOT) + ' L' + p[0][0].toFixed(1) + ',' + (H - BOT) + ' Z';
  }
  var gridG = $('#grid'),
    areaPath = $('#areaPath'),
    linePath = $('#linePath');
  var cohortPath = null;
  if (linePath) {
    cohortPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    cohortPath.setAttribute('fill', 'none');
    cohortPath.setAttribute('stroke', 'var(--border-strong)');
    cohortPath.setAttribute('stroke-width', '2');
    cohortPath.setAttribute('stroke-dasharray', '5 6');
    cohortPath.setAttribute('stroke-linecap', 'round');
    linePath.parentNode.insertBefore(cohortPath, linePath);
  }
  function drawGrid(max) {
    if (!gridG) return;
    gridG.innerHTML = '';
    for (var i = 0; i <= 4; i++) {
      var y = TOP + (H - TOP - BOT) * (i / 4);
      var ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ln.setAttribute('x1', PAD_L);
      ln.setAttribute('x2', W - PAD_R);
      ln.setAttribute('y1', y);
      ln.setAttribute('y2', y);
      gridG.appendChild(ln);
    }
  }
  function render(series, animate) {
    if (!linePath) return;
    var max = maxOf([data[series], data.cohort[series]]);
    drawGrid(max);
    var p = pts(data[series], max),
      c = pts(data.cohort[series], max);
    areaPath.setAttribute('d', areaD(p));
    linePath.setAttribute('d', lineD(p));
    cohortPath.setAttribute('d', lineD(c));
    if (animate && !reduce) {
      var len = linePath.getTotalLength();
      linePath.style.transition = 'none';
      linePath.style.strokeDasharray = len;
      linePath.style.strokeDashoffset = len;
      areaPath.style.opacity = 0;
      // force reflow
      void linePath.getBoundingClientRect();
      linePath.style.transition = 'stroke-dashoffset .9s var(--ease-out)';
      linePath.style.strokeDashoffset = 0;
      areaPath.style.transition = 'opacity .9s ease';
      areaPath.style.opacity = 1;
    }
  }
  if (linePath) {
    var series = 'progress';
    try {
      series = localStorage.getItem('cb-series') || 'progress';
    } catch (e) {}
    if (!data[series]) series = 'progress';
    var seg = $('#seg');
    if (seg) {
      [].forEach.call(seg.children, function (c) {
        c.classList.toggle('is-active', c.getAttribute('data-series') === series);
      });
      seg.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) return;
        [].forEach.call(seg.children, function (c) {
          c.classList.remove('is-active');
        });
        b.classList.add('is-active');
        try {
          localStorage.setItem('cb-series', b.getAttribute('data-series'));
        } catch (e2) {}
        render(b.getAttribute('data-series'), true);
      });
    }
    try {
      render(series, true);
    } catch (err) {
      console.error('[cb] line chart failed:', err);
    }
  }

  /* ---------- DONUT ---------- */
  var arc = $('#donutArc');
  if (arc) try {
    var dash = parseFloat(arc.getAttribute('stroke-dasharray'));
    var pct = parseFloat(arc.getAttribute('data-pct'));
    var target = dash * (1 - pct / 100);
    if (reduce) {
      arc.style.strokeDashoffset = target;
    } else {
      arc.style.transition = 'stroke-dashoffset 1.1s var(--ease-out)';
      setTimeout(function () {
        arc.style.strokeDashoffset = target;
      }, 200);
    }
  } catch (err) {
    console.error('[cb] donut failed:', err);
  }

  /* ---------- SKILL TRACKS + BARS ---------- */
  function fill() {
    document.querySelectorAll('.track > i[data-w]').forEach(function (el) {
      el.style.width = el.getAttribute('data-w') + '%';
    });
    document.querySelectorAll('#bars [data-h]').forEach(function (el) {
      el.style.height = el.getAttribute('data-h') + '%';
    });
  }
  if (reduce) fill();else setTimeout(fill, 250);

  /* ---------- ROUTER (#/view or #/view/id) ----------
     Hash-based so browser back/forward and refresh restore the exact
     screen + open detail; unknown routes fall back safely. */
  var VIEWS = ['overview', 'courses', 'assignments', 'schedule', 'jobs', 'mentor', 'settings'];
  var TITLES = {
    overview: 'Overview',
    courses: 'My courses',
    assignments: 'Assignments',
    schedule: 'Schedule',
    jobs: 'Job board',
    mentor: 'Mentor',
    settings: 'Settings'
  };
  var COURSES = {
    'c-foundations': {
      name: 'Foundations',
      weeks: 'Weeks 1–6',
      pct: 100,
      blurb: 'Python, SQL, statistics and the analyst mindset — the base every later module builds on.',
      assignment: 'a-sql',
      modules: [['done', 'Python essentials'], ['done', 'SQL & relational modeling'], ['done', 'Statistics for analysts'], ['done', 'Capstone: EDA notebook']]
    },
    'c-viz': {
      name: 'Data Visualization',
      weeks: 'Weeks 7–10',
      pct: 85,
      blurb: 'From chart grammar to executive dashboards that drive decisions.',
      assignment: 'a-dash',
      modules: [['done', 'Chart grammar & perception'], ['done', 'Tableau workflows'], ['done', 'Dashboard design'], ['current', 'Storytelling with data']]
    },
    'c-ml': {
      name: 'Machine Learning',
      weeks: 'Weeks 11–16',
      pct: 74,
      blurb: 'Supervised learning end to end: framing, features, evaluation, deployment basics.',
      assignment: 'a-churn',
      modules: [['done', 'Regression & classification'], ['done', 'Feature engineering'], ['current', 'Model evaluation'], ['locked', 'MLOps basics']]
    },
    'c-genai': {
      name: 'LLMs & GenAI',
      weeks: 'Weeks 17–24',
      pct: 60,
      blurb: 'Transformers, prompting, retrieval-augmented systems, and your production capstone.',
      assignment: 'a-capstone',
      modules: [['done', 'Transformer foundations'], ['done', 'Prompt engineering'], ['current', 'RAG systems (lesson 4.2)'], ['locked', 'LLM capstone build']]
    }
  };
  var ASSIGN_ORDER = ['a-capstone', 'a-churn', 'a-dash', 'a-sql', 'a-eda'];
  var ASSIGNMENTS = {
    'a-capstone': {
      t: 'LLM capstone — proposal',
      m: 'GenAI',
      due: 'Jun 28',
      badge: ['warning', 'Due soon', 'due'],
      icon: ['ri-file-code-line', 'var(--chart-2)'],
      score: null,
      course: 'c-genai',
      desc: 'One page: problem statement, dataset, retrieval strategy, and how you will evaluate answer quality.',
      action: 'Submit proposal'
    },
    'a-churn': {
      t: 'Churn model evaluation',
      m: 'Machine Learning',
      due: 'Jun 24',
      badge: ['blue', 'In review', 'review'],
      icon: ['ri-bar-chart-box-line', 'var(--chart-4)'],
      score: null,
      course: 'c-ml',
      desc: 'Compare three classifiers on the telecom churn set and justify the metric you optimize.'
    },
    'a-dash': {
      t: 'Sales analytics dashboard',
      m: 'Data Viz',
      due: 'Jun 17',
      badge: ['green', 'Graded', 'done'],
      icon: ['ri-dashboard-line', 'var(--chart-1)'],
      score: 92,
      course: 'c-viz',
      desc: 'Executive dashboard on the retail sales dataset.',
      feedback: 'Strong layout hierarchy. Push annotations further on the regional view.'
    },
    'a-sql': {
      t: 'SQL window functions lab',
      m: 'SQL',
      due: 'Jun 12',
      badge: ['green', 'Graded', 'done'],
      icon: ['ri-database-2-line', 'var(--chart-3)'],
      score: 96,
      course: 'c-foundations',
      desc: 'Ranking, running totals, and cohort windows over the orders schema.',
      feedback: 'Clean window-function work — textbook partitioning.'
    },
    'a-eda': {
      t: 'Pandas EDA notebook',
      m: 'Foundations',
      due: 'Jun 5',
      badge: ['green', 'Graded', 'done'],
      icon: ['ri-function-line', 'var(--chart-3)'],
      score: 88,
      course: 'c-foundations',
      desc: 'Open-ended exploration of the NYC listings dataset.',
      feedback: 'Good hygiene. Go deeper on outlier rationale next time.'
    }
  };
  function badgeHTML(b) {
    return '<span class="cb-badge cb-badge--' + b[0] + '">' + (b[2] ? window.cbStatusIcon(b[2]) : '') + b[1] + '</span>';
  }
  var rowsHost = $('#assignRows');
  try {
    if (rowsHost) rowsHost.innerHTML = ASSIGN_ORDER.map(function (id) {
      var a = ASSIGNMENTS[id];
      return '<tr data-assignment="' + id + '"><td><div class="who"><span class="cb-i" style="color:' + a.icon[1] + ';font-size:18px"><i class="' + a.icon[0] + '"></i></span> ' + a.t + '</div></td><td class="muted">' + a.m + '</td><td class="muted">' + a.due + '</td><td>' + badgeHTML(a.badge) + '</td><td class="num">' + (a.score != null ? '<b>' + a.score + '</b>' : '<span class="muted">—</span>') + '</td></tr>';
    }).join('');
  } catch (err) {
    console.error('[cb] assignments table failed:', err);
    if (window.cbToast) window.cbToast('The assignments list failed to load. Reload to try again.', {
      tone: 'error'
    });
  }
  var aDetail = $('#assignmentDetail'),
    aList = $('#assignmentListCard');
  function renderAssignmentDetail(r) {
    if (!aDetail) return;
    var show = r.view === 'assignments' && r.id;
    if (aList) aList.style.display = show ? 'none' : '';
    if (!show) {
      aDetail.innerHTML = '';
      return;
    }
    var a = ASSIGNMENTS[r.id];
    aDetail.innerHTML = '<section class="cb-card cb-card--pad">' + '<a class="cb-btn cb-btn--link" style="align-self:flex-start;margin:-4px 0 12px -6px" href="#/assignments"><span class="cb-i"><i class="ri-arrow-left-line"></i></span> All assignments</a>' + '<div class="cb-cluster" style="gap:8px">' + badgeHTML(a.badge) + '<span class="cb-badge cb-badge--outline">' + a.m + '</span></div>' + '<h2 style="font-size:var(--fs-h3);margin:14px 0 8px">' + a.t + '</h2>' + '<p class="muted" style="margin:0;max-width:60ch">' + a.desc + '</p>' + '<div class="cb-cluster" style="gap:28px;margin:18px 0 0">' + '<div><div class="muted" style="font-size:12px;text-transform:uppercase;letter-spacing:.04em">Due</div><b style="color:var(--text-strong)">' + a.due + '</b></div>' + (a.score != null ? '<div><div class="muted" style="font-size:12px;text-transform:uppercase;letter-spacing:.04em">Score</div><b style="color:var(--text-strong)">' + a.score + ' / 100</b></div>' : '') + '</div>' + (a.feedback ? '<blockquote style="margin:18px 0 0;padding:12px 16px;border-left:3px solid var(--status-success);background:var(--status-success-bg);border-radius:0 var(--radius-md) var(--radius-md) 0;color:var(--status-success-fg);font-size:14px">“' + a.feedback + '” — mentor feedback</blockquote>' : '') + (a.action ? '<div style="margin-top:20px"><button class="cb-btn cb-btn--confirm cb-btn--sm" id="assignAction"><span class="cb-i"><i class="ri-send-plane-line"></i></span> ' + a.action + '</button></div>' : '') + '<p class="muted" style="font-size:13px;margin:20px 0 0">Part of <a href="#/courses/' + a.course + '">' + COURSES[a.course].name + '</a></p>' + '</section>';
    var act = $('#assignAction');
    if (act) act.addEventListener('click', function () {
      act.outerHTML = '<span class="cb-badge cb-badge--green">' + window.cbStatusIcon('done') + 'Submitted — in review</span>';
      window.cbToast('Your mentor will review it before grading.', {
        tone: 'success',
        title: 'Proposal submitted'
      });
    });
  }
  var cDetail = $('#courseDetail'),
    cGrid = $('#courseGrid');
  var MOD_ICON = {
    done: ['ri-checkbox-circle-line', 'var(--status-success)'],
    current: ['ri-play-circle-line', 'var(--text-brand)'],
    locked: ['ri-lock-line', 'var(--text-subtle)']
  };
  function renderCourseDetail(r) {
    if (!cDetail) return;
    var show = r.view === 'courses' && r.id;
    if (cGrid) cGrid.style.display = show ? 'none' : '';
    if (!show) {
      cDetail.innerHTML = '';
      return;
    }
    var c = COURSES[r.id];
    cDetail.innerHTML = '<section class="cb-card cb-card--pad">' + '<a class="cb-btn cb-btn--link" style="align-self:flex-start;margin:-4px 0 12px -6px" href="#/courses"><span class="cb-i"><i class="ri-arrow-left-line"></i></span> All courses</a>' + '<div class="cb-cluster cb-cluster--between"><h2 style="font-size:var(--fs-h3);margin:0">' + c.name + '</h2><span class="cb-badge cb-badge--outline">' + c.weeks + '</span></div>' + '<p class="muted" style="margin:8px 0 16px;max-width:60ch">' + c.blurb + '</p>' + '<div class="cb-prog" style="max-width:420px"><div class="cb-prog__head"><span class="cb-prog__label">Progress</span><span class="cb-prog__val">' + c.pct + '%</span></div><div class="cb-prog__track"><div class="cb-prog__bar green" style="width:' + c.pct + '%"></div></div></div>' + '<div style="margin-top:16px">' + c.modules.map(function (m) {
      var ic = MOD_ICON[m[0]];
      return '<div class="module module--' + m[0] + '"><span class="cb-i" style="color:' + ic[1] + ';font-size:17px"><i class="' + ic[0] + '"></i></span> ' + m[1] + '</div>';
    }).join('') + '</div>' + (c.assignment ? '<p class="muted" style="font-size:14px;margin:18px 0 0">Related assignment: <a href="#/assignments/' + c.assignment + '">' + ASSIGNMENTS[c.assignment].t + '</a></p>' : '') + '</section>';
  }

  /* Recoverable error state: a failed view render never leaves a blank page. */
  function renderFail(err) {
    console.error('[cb] view render failed:', err);
    var body = document.querySelector('.dash__body');
    if (!body) return;
    body.innerHTML = '<section class="cb-card cb-card--pad" role="alert" style="text-align:center;max-width:520px;margin:48px auto;align-items:center">' + '<span class="cb-i" style="font-size:40px;color:var(--status-danger)"><i class="ri-error-warning-line"></i></span>' + '<h2 style="font-size:var(--fs-h3);margin:14px 0 6px">This screen hit a snag</h2>' + '<p class="muted" style="margin:0 0 20px">Your data is safe. Reload to pick up where you left off.</p>' + '<div class="cb-cluster" style="justify-content:center">' + '<button class="cb-btn cb-btn--confirm cb-btn--sm" onclick="location.reload()"><span class="cb-i"><i class="ri-restart-line"></i></span> Reload</button>' + '<button class="cb-btn cb-btn--outline cb-btn--sm" onclick="location.hash=\'#/overview\';location.reload()">Go to Overview</button>' + '</div></section>';
  }
  function parseHash() {
    var m = (location.hash || '').match(/^#\/([a-z-]+)(?:\/([\w-]+))?$/);
    return m ? {
      view: m[1],
      id: m[2] || null
    } : null;
  }
  function validate(r) {
    if (!r || VIEWS.indexOf(r.view) === -1) return null;
    if (r.id && r.view === 'assignments' && !ASSIGNMENTS[r.id]) return {
      view: 'assignments',
      id: null
    };
    if (r.id && r.view === 'courses' && !COURSES[r.id]) return {
      view: 'courses',
      id: null
    };
    if (r.id && r.view !== 'assignments' && r.view !== 'courses') return {
      view: r.view,
      id: null
    };
    return r;
  }
  function route() {
    var r = validate(parseHash());
    if (!r) {
      try {
        r = validate(JSON.parse(localStorage.getItem('cb-route')));
      } catch (e) {}
      if (!r) r = {
        view: 'overview',
        id: null
      };
      location.replace('#/' + r.view + (r.id ? '/' + r.id : ''));
      return; /* hashchange re-enters with the canonical route */
    }
    try {
      document.querySelectorAll('.view').forEach(function (v) {
        v.classList.toggle('is-active', v.getAttribute('data-view') === r.view);
      });
      document.querySelectorAll('[data-nav]').forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('data-nav') === r.view);
      });
      renderAssignmentDetail(r);
      renderCourseDetail(r);
      document.title = TITLES[r.view] + ' — Colaberry Learn';
      try {
        localStorage.setItem('cb-route', JSON.stringify(r));
      } catch (e) {}
      if (pop) pop.classList.remove('is-open');
      window.scrollTo(0, 0);
    } catch (err) {
      renderFail(err);
    }
  }
  window.addEventListener('hashchange', route);

  /* ---------- INTERACTIONS ---------- */
  document.addEventListener('click', function (e) {
    var tr = e.target.closest && e.target.closest('tr[data-assignment]');
    if (tr) location.hash = '#/assignments/' + tr.getAttribute('data-assignment');
  });
  var pop = $('#notifPop'),
    popBtn = $('#notifBtn');
  if (popBtn) {
    popBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      pop.classList.toggle('is-open');
    });
    document.addEventListener('click', function (e) {
      if (!pop.contains(e.target)) pop.classList.remove('is-open');
    });
  }
  var ex = $('#exportBtn');
  if (ex) ex.addEventListener('click', function () {
    window.print();
  });
  var savedJobs = [];
  try {
    savedJobs = JSON.parse(localStorage.getItem('cb-saved-jobs') || '[]');
  } catch (e) {}
  document.querySelectorAll('[data-save-job]').forEach(function (b) {
    var id = b.getAttribute('data-save-job');
    function paint() {
      b.innerHTML = savedJobs.indexOf(id) !== -1 ? '<span class="cb-i"><i class="ri-bookmark-fill"></i></span> Saved' : '<span class="cb-i"><i class="ri-bookmark-line"></i></span> Save';
    }
    paint();
    b.addEventListener('click', function () {
      var i = savedJobs.indexOf(id);
      if (i === -1) savedJobs.push(id);else savedJobs.splice(i, 1);
      try {
        localStorage.setItem('cb-saved-jobs', JSON.stringify(savedJobs));
      } catch (e) {}
      paint();
      window.cbToast(i === -1 ? 'Job saved to your shortlist.' : 'Job removed from your shortlist.', {
        tone: i === -1 ? 'success' : 'info'
      });
    });
  });
  [['prefEmail', 'cb-pref-email'], ['prefDigest', 'cb-pref-digest']].forEach(function (p) {
    var el = document.getElementById(p[0]);
    if (!el) return;
    try {
      var v = localStorage.getItem(p[1]);
      if (v !== null) el.checked = v === '1';
    } catch (e) {}
    el.addEventListener('change', function () {
      try {
        localStorage.setItem(p[1], el.checked ? '1' : '0');
      } catch (e) {}
      window.cbToast(el.checked ? 'Notifications on \u2014 preference saved.' : 'Notifications off \u2014 preference saved.', {
        tone: 'success'
      });
    });
  });
  var sp = $('#saveProfile'),
    pName = $('#setName'),
    pEmail = $('#setEmail');
  var profileSaved = {
    name: pName ? pName.value : '',
    email: pEmail ? pEmail.value : ''
  };
  function profileDirty() {
    return !!(pName && pEmail) && (pName.value !== profileSaved.name || pEmail.value !== profileSaved.email);
  }
  [pName, pEmail].forEach(function (el) {
    if (el) el.addEventListener('input', function () {
      window.cbSetFieldError(el, '');
    });
  });
  if (sp) sp.addEventListener('click', function () {
    var bad = [];
    if (!pName.value.trim()) {
      window.cbSetFieldError(pName, 'Name can\u2019t be empty.');
      bad.push(pName);
    }
    if (!pEmail.value.trim()) {
      window.cbSetFieldError(pEmail, 'Email can\u2019t be empty.');
      bad.push(pEmail);
    } else if (!window.cbEmailOk(pEmail.value.trim())) {
      window.cbSetFieldError(pEmail, 'Enter a valid email like ada@colaberry.com.');
      bad.push(pEmail);
    }
    if (bad.length) {
      window.cbToast('Fix the highlighted fields to save.', {
        tone: 'error',
        title: 'Profile not saved'
      });
      bad[0].focus();
      return;
    }
    profileSaved = {
      name: pName.value,
      email: pEmail.value
    };
    window.cbToast('Profile changes saved.', {
      tone: 'success'
    });
  });
  /* Warn before DISCARDING unsaved profile edits. In-app (hash) navigation
     keeps the edits, so only real page exits prompt. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a || !profileDirty()) return;
    var href = a.getAttribute('href');
    if (/^(#|mailto:)/.test(href)) return;
    e.preventDefault();
    window.cbConfirm({
      title: 'Discard unsaved changes?',
      message: 'Your profile edits haven\u2019t been saved yet.',
      confirmLabel: 'Discard changes',
      cancelLabel: 'Keep editing',
      danger: true
    }, function () {
      pName.value = profileSaved.name;
      pEmail.value = profileSaved.email;
      window.cbSetFieldError(pName, '');
      window.cbSetFieldError(pEmail, '');
      location.href = href;
    });
  }, true);
  window.addEventListener('beforeunload', function (e) {
    if (profileDirty()) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
  /* Demo search: honest feedback instead of silence */
  var search = document.querySelector('.topbar__search input');
  if (search) search.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && search.value.trim()) window.cbToast('Search is coming soon in this demo.', {
      tone: 'info'
    });
  });
  document.querySelectorAll('input[data-theme-radio]').forEach(function (rd) {
    rd.addEventListener('change', function () {
      if (window.cbApplyTheme) window.cbApplyTheme(rd.value);
    });
  });

  /* Layered Escape: top-most first \u2014 confirm dialog (guard.js, capture
     phase) \u2192 notifications popover \u2192 mobile drawer. One layer per press. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (pop && pop.classList.contains('is-open')) {
      pop.classList.remove('is-open');
      if (popBtn) popBtn.focus();
      return;
    }
    if (drawer && drawer.classList.contains('is-open')) setDrawer(false);
  });
  route();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/charts.js", error: String((e && e.message) || e) }); }

// app/guard.js
try { (() => {
/* Colaberry Learn — global error safety net, shared inline validation,
   and the confirm dialog (top-most UI layer). Loaded on every page BEFORE
   page scripts so their failures are caught and surfaced, never silent. */
(function () {
  /* ---- 1. Global net: uncaught errors -> friendly, non-blocking message ---- */
  var last = 0;
  function friendly() {
    var now = Date.now();
    if (now - last < 4000) return; /* don't spam on error loops */
    last = now;
    var msg = 'Something went wrong. Your data is safe \u2014 try again, or reload the page.';
    if (window.cbToast) {
      window.cbToast(msg, {
        tone: 'error',
        title: 'Unexpected error'
      });
      return;
    }
    var b = document.createElement('div');
    b.setAttribute('role', 'alert');
    b.style.cssText = 'position:fixed;left:50%;bottom:20px;transform:translateX(-50%);z-index:400;max-width:calc(100vw - 32px);background:var(--surface-card,#fff);color:var(--text-body,#333);border:1px solid var(--border-default,#ddd);border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.18);padding:12px 18px;font:14px/1.4 var(--font-body,sans-serif)';
    b.textContent = msg;
    (document.body || document.documentElement).appendChild(b);
    setTimeout(function () {
      b.remove();
    }, 6000);
  }
  window.addEventListener('error', friendly);
  window.addEventListener('unhandledrejection', friendly);

  /* ---- 2. Inline field validation (pairs with a toast summary) ---- */
  window.cbEmailOk = function (v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  };
  window.cbPhoneOk = function (v) {
    return /^[\d\s().+-]{7,20}$/.test(v);
  };
  window.cbSetFieldError = function (input, msg) {
    if (!input) return;
    var field = input.closest('.field') || input.parentNode;
    var err = field.querySelector('.field__err');
    if (msg) {
      if (!err) {
        err = document.createElement('span');
        err.className = 'field__err';
        err.id = (input.id || 'f' + Math.random().toString(36).slice(2)) + '-err';
        field.appendChild(err);
      }
      err.innerHTML = '<span class="cb-i" aria-hidden="true"><i class="ri-error-warning-line"></i></span> ' + msg;
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', err.id);
    } else {
      if (err) err.remove();
      input.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
    }
  };

  /* ---- 3. Confirm dialog. Top-most layer: its capture-phase Escape wins
     over popover/drawer handlers; outside click = cancel; focus is trapped
     and returned to the invoking element. ---- */
  window.cbConfirm = function (opts, onConfirm) {
    var prev = document.activeElement;
    var wrap = document.createElement('div');
    wrap.className = 'cbdlg';
    wrap.innerHTML = '<div class="cbdlg__scrim"></div>' + '<div class="cbdlg__card" role="alertdialog" aria-modal="true" aria-labelledby="cbdlgT" aria-describedby="cbdlgM">' + '<h3 id="cbdlgT">' + opts.title + '</h3>' + '<p id="cbdlgM" class="muted">' + opts.message + '</p>' + '<div class="cbdlg__row">' + '<button type="button" class="cb-btn cb-btn--outline cb-btn--sm" data-x="cancel">' + (opts.cancelLabel || 'Cancel') + '</button>' + '<button type="button" class="cb-btn cb-btn--confirm cb-btn--sm" data-x="ok"' + (opts.danger ? ' style="--_bg:var(--status-danger);--_bg-hover:var(--status-danger);--_bg-press:var(--status-danger)"' : '') + '>' + (opts.confirmLabel || 'Confirm') + '</button>' + '</div></div>';
    function close(ok) {
      document.removeEventListener('keydown', onKey, true);
      wrap.remove();
      if (prev && prev.focus) prev.focus();
      if (ok && onConfirm) onConfirm();
    }
    function onKey(e) {
      if (e.key === 'Escape') {
        e.stopImmediatePropagation();
        e.preventDefault();
        close(false);
        return;
      }
      if (e.key === 'Tab') {
        var f = wrap.querySelectorAll('button'),
          first = f[0],
          lastB = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          lastB.focus();
        } else if (!e.shiftKey && document.activeElement === lastB) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener('keydown', onKey, true);
    wrap.querySelector('.cbdlg__scrim').addEventListener('click', function () {
      close(false);
    });
    wrap.querySelector('[data-x="cancel"]').addEventListener('click', function () {
      close(false);
    });
    wrap.querySelector('[data-x="ok"]').addEventListener('click', function () {
      close(true);
    });
    document.body.appendChild(wrap);
    wrap.querySelector('[data-x="cancel"]').focus();
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/guard.js", error: String((e && e.message) || e) }); }

// app/icons.js
try { (() => {
/* Colaberry Learn — iconography, single source of truth.
   Rules: Remix Icon LINE variants only (one 24px grid, uniform stroke).
   Fills are reserved for brand logos (Google/LinkedIn) and active toggle
   states (bookmark -> saved). Every status/state maps to ONE icon here:
   change it once and it changes on every page. Static badges opt in with
   data-status="key"; dynamic renders (charts.js) call cbStatusIcon(key). */
window.CB_STATUS_ICON = {
  done: 'ri-checkbox-circle-line',
  /* graded / complete / submitted / on track */
  active: 'ri-play-circle-line',
  /* current / in progress / wrapping up */
  review: 'ri-eye-line',
  /* in review */
  due: 'ri-alarm-line',
  /* due soon / deadline */
  today: 'ri-calendar-event-line',
  /* scheduled / happening today */
  live: 'ri-live-line',
  /* live session / live cohort */
  mentor: 'ri-user-star-line',
  /* 1:1 / mentor session */
  match: 'ri-focus-2-line',
  /* job match strength */
  locked: 'ri-lock-line' /* locked module */
};
window.cbStatusIcon = function (key) {
  var ic = window.CB_STATUS_ICON[key];
  return ic ? '<span class="cb-i"><i class="' + ic + '"></i></span>' : '';
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-status]').forEach(function (el) {
    if (!el.querySelector('.cb-i')) el.insertAdjacentHTML('afterbegin', window.cbStatusIcon(el.getAttribute('data-status')));
  });
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/icons.js", error: String((e && e.message) || e) }); }

// app/theme.js
try { (() => {
/* Colaberry Learn — shared theme layer.
   Load in <head> on every app page. Applies the persisted theme BEFORE
   first paint, swaps -black/-white logo art, and wires any
   [data-theme-toggle] button. The actual theming is done in one place:
   tokens/colors.css via [data-theme="dark"]. */
(function () {
  var root = document.documentElement,
    KEY = 'cb-theme';
  function stored() {
    try {
      return localStorage.getItem(KEY) || 'light';
    } catch (e) {
      return 'light';
    }
  }
  function apply(t) {
    root.setAttribute('data-theme', t);
    try {
      localStorage.setItem(KEY, t);
    } catch (e) {}
    if (!document.body) return;
    document.querySelectorAll('img[data-logo-swap]').forEach(function (img) {
      img.src = img.getAttribute('src').replace(/-(black|white)(\.\w+)$/, '-' + (t === 'dark' ? 'white' : 'black') + '$2');
    });
    document.querySelectorAll('[data-theme-toggle] i').forEach(function (ic) {
      ic.className = t === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    });
    document.querySelectorAll('input[data-theme-radio]').forEach(function (rd) {
      rd.checked = rd.value === t;
    });
  }
  window.cbApplyTheme = apply;
  apply(stored()); /* pre-paint: attribute only (body not parsed yet) */
  document.addEventListener('DOMContentLoaded', function () {
    apply(stored());
  });
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-theme-toggle]') : null;
    if (btn) apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/theme.js", error: String((e && e.message) || e) }); }

// app/toast.js
try { (() => {
/* Colaberry Learn — stacked, theme-aware toasts.
   window.cbToast(message, { tone, title, duration })
   - tone: success | warning | error | info (icon + color defined ONCE below)
   - stacks (never replaces); newest at the bottom, capped at 4
   - auto-dismisses (errors linger longer); hover or focus pauses the timer
   - dismiss button; colors come from status tokens so dark mode just works
   - a11y: role=status (polite) for success/info/warning, role=alert for errors */
(function () {
  var TONES = {
    success: {
      icon: 'ri-checkbox-circle-line',
      color: 'var(--status-success)',
      role: 'status',
      label: 'Success'
    },
    info: {
      icon: 'ri-information-line',
      color: 'var(--status-info)',
      role: 'status',
      label: 'Info'
    },
    warning: {
      icon: 'ri-alarm-warning-line',
      color: 'var(--status-warning)',
      role: 'status',
      label: 'Warning'
    },
    error: {
      icon: 'ri-error-warning-line',
      color: 'var(--status-danger)',
      role: 'alert',
      label: 'Error'
    }
  };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var host = null;
  function getHost() {
    if (!host) {
      host = document.createElement('div');
      host.className = 'toasts';
      document.body.appendChild(host);
    }
    return host;
  }
  function dismiss(t) {
    if (t._gone) return;
    t._gone = true;
    clearTimeout(t._timer);
    if (reduce) {
      t.remove();
      return;
    }
    t.classList.add('is-out');
    setTimeout(function () {
      t.remove();
    }, 220);
  }
  function startTimer(t, ms) {
    t._t0 = Date.now();
    t._rem = ms;
    t._timer = setTimeout(function () {
      dismiss(t);
    }, ms);
  }
  window.cbToast = function (msg, opts) {
    opts = opts || {};
    var tone = TONES[opts.tone] || TONES.info;
    var duration = opts.duration || (opts.tone === 'error' ? 7000 : 4200);
    var h = getHost();
    while (h.children.length >= 4) h.firstChild.remove();
    var t = document.createElement('div');
    t.className = 'toast' + (reduce ? ' no-motion' : '');
    t.setAttribute('role', tone.role);
    t.setAttribute('aria-atomic', 'true');
    t.style.setProperty('--_tone', tone.color);
    t.innerHTML = '<span class="cb-i toast__ic" aria-hidden="true"><i class="' + tone.icon + '"></i></span>' + '<div class="toast__body">' + (opts.title ? '<b>' + opts.title + '</b>' : '') + '<p>' + msg + '</p></div>' + '<button class="toast__x" type="button" aria-label="Dismiss notification"><span class="cb-i"><i class="ri-close-line"></i></span></button>' + '<span class="toast__bar" aria-hidden="true" style="animation-duration:' + duration + 'ms"></span>';
    t.querySelector('.toast__x').addEventListener('click', function () {
      dismiss(t);
    });
    function pause() {
      if (t._gone || t._paused) return;
      t._paused = true;
      clearTimeout(t._timer);
      t._rem -= Date.now() - t._t0;
      t.classList.add('is-paused');
    }
    function resume() {
      if (t._gone || !t._paused) return;
      t._paused = false;
      t.classList.remove('is-paused');
      startTimer(t, Math.max(t._rem, 600));
    }
    t.addEventListener('mouseenter', pause);
    t.addEventListener('mouseleave', resume);
    t.addEventListener('focusin', pause);
    t.addEventListener('focusout', function (e) {
      if (!t.contains(e.relatedTarget)) resume();
    });
    h.appendChild(t);
    startTimer(t, duration);
    return t;
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/toast.js", error: String((e && e.message) || e) }); }

// aw-animate.js
try { (() => {
/* ============================================================
   aw-animate.js — drop-in entrance + scroll-reveal engine
   No dependencies. Pairs with aw-animate.css.

   - Reveals [data-rv] elements as they scroll into view (IntersectionObserver).
   - Staggers [data-rv] children inside any [data-rv-group].
   - Plays the hero mask-rise on [data-rv-hero] immediately on load.
   - Watches for nodes injected later (SPA / framework hydration).
   - SAFETY NET: forces everything visible after 2.4s so content is
     NEVER stranded, even if the observer misfires.
   - Respects prefers-reduced-motion (leaves everything visible, no motion).
   ============================================================ */
(function () {
  var docEl = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // With reduced motion we add the class (so CSS neutralizes any transform) but skip the observer.
  docEl.classList.add('aw-anim');
  if (reduce) {
    ready(function () {
      all('[data-rv], [data-rv-hero]').forEach(function (el) {
        el.classList.add('aw-in');
      });
    });
    return;
  }
  function all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);else fn();
  }
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('aw-in');
        io.unobserve(e.target);
      }
    });
  }, {
    threshold: 0.02,
    rootMargin: '0px 0px 10% 0px'
  }) : null;
  function indexGroup(group) {
    all('[data-rv]', group).forEach(function (el, i) {
      if (el.closest('[data-rv-group]') === group) el.style.setProperty('--rv-i', i % 9);
    });
  }
  function register(el) {
    if (el.__awReg) return;
    el.__awReg = true;
    // hero line spans get a small stagger
    if (el.hasAttribute('data-rv-hero')) {
      all('.home-hero__line > span, .aw-line__word', el).forEach(function (s, i) {
        s.style.setProperty('--rv-i', i);
      });
    }
    if (io) io.observe(el);else el.classList.add('aw-in');
  }
  function scan() {
    all('[data-rv-group]').forEach(indexGroup);
    all('[data-rv], [data-rv-hero]').forEach(register);
    // hero (and anything already in the first viewport) reveals on load
    all('[data-rv-hero]').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        requestAnimationFrame(function () {
          el.classList.add('aw-in');
        });
      }
    });
  }
  ready(function () {
    scan();
    // catch framework-injected / hydrated nodes
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function () {
        scan();
      });
      mo.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
    // safety net — never leave content hidden
    setTimeout(function () {
      all('[data-rv], [data-rv-hero]').forEach(function (el) {
        el.classList.add('aw-in');
      });
    }, 2400);
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "aw-animate.js", error: String((e && e.message) || e) }); }

// components/core/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-acc { border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--surface-card); }
.cb-acc__item + .cb-acc__item { border-top: 1px solid var(--border-subtle); }
.cb-acc__btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 20px; background: none; border: none; cursor: pointer; font-family: var(--font-body); font-weight: var(--fw-bold); font-size: var(--fs-body); color: var(--text-strong); text-align: left; transition: background var(--dur-fast) var(--ease-out); }
.cb-acc__btn:hover { background: var(--surface-sunken); }
.cb-acc__btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.cb-acc__ic { flex: none; color: var(--brand-primary); transition: transform var(--dur-base) var(--ease-out); }
.cb-acc__item[data-open="true"] .cb-acc__ic { transform: rotate(180deg); }
.cb-acc__panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--dur-base) var(--ease-out); }
.cb-acc__item[data-open="true"] .cb-acc__panel { grid-template-rows: 1fr; }
.cb-acc__inner { overflow: hidden; }
.cb-acc__body { padding: 0 20px 18px; font-size: var(--fs-body-sm); color: var(--text-muted); line-height: 1.6; }
@media (prefers-reduced-motion: reduce){ .cb-acc__panel, .cb-acc__ic { transition-duration: .001ms; } }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-acc-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-acc-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Vertically stacked, animated disclosure panels. Single-open by default;
 * pass `allowMultiple` to let several stay open. `defaultOpen` seeds indices.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = '',
  ...rest
}) {
  inject();
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const uid = React.useMemo(() => 'cb-acc-' + Math.random().toString(36).slice(2, 7), []); // unique per instance so ids never collide
  const toggle = i => setOpen(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'cb-acc ' + className
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    const btnId = uid + '-b' + i,
      panelId = uid + '-p' + i;
    return /*#__PURE__*/React.createElement("div", {
      className: "cb-acc__item",
      "data-open": isOpen,
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      className: "cb-acc__btn",
      id: btnId,
      "aria-expanded": isOpen,
      "aria-controls": panelId,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("svg", {
      className: "cb-acc__ic",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "cb-acc__panel",
      id: panelId,
      role: "region",
      "aria-labelledby": btnId
    }, /*#__PURE__*/React.createElement("div", {
      className: "cb-acc__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cb-acc__body"
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 50%; overflow: hidden; flex: none;
  font-family: var(--font-body); font-weight: var(--fw-bold); color: var(--neutral-900);
  background: var(--green-500); user-select: none;
}
.cb-avatar { position: relative; }
.cb-avatar img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; background: inherit; }
.cb-avatar__txt { line-height: 1; white-space: nowrap; }
.cb-avatar--xs { width: 28px; height: 28px; font-size: 11px; }
.cb-avatar--sm { width: 36px; height: 36px; font-size: 13px; }
.cb-avatar--md { width: 48px; height: 48px; font-size: 16px; }
.cb-avatar--lg { width: 64px; height: 64px; font-size: 22px; }
.cb-avatar--xl { width: 88px; height: 88px; font-size: 30px; }
.cb-avatar--ring { box-shadow: 0 0 0 3px var(--surface-card), 0 0 0 5px var(--brand-primary); }
.cb-avatar-group { display: inline-flex; }
.cb-avatar-group > .cb-avatar { box-shadow: 0 0 0 3px var(--surface-card); }
.cb-avatar-group > .cb-avatar + .cb-avatar { margin-left: -12px; }
`;
const TONES = ['var(--green-500)', 'var(--blue-500)', 'var(--red-500)', 'var(--green-600)', 'var(--blue-600)'];
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('cb-avatar-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

/**
 * Circular avatar. Shows a photo when `src` is given, with the person's
 * initials underneath as a graceful fallback (used while the image loads or
 * if it fails). Initials get a stable brand-tone background from the name.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  className = '',
  style,
  ...rest
}) {
  inject();
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => {
    setFailed(false);
  }, [src]);
  const classes = ['cb-avatar', 'cb-avatar--' + size];
  if (ring) classes.push('cb-avatar--ring');
  if (className) classes.push(className);
  const hash = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const bg = TONES[hash % TONES.length];
  const showImg = src && !failed;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes.join(' '),
    style: {
      background: bg,
      ...style
    },
    role: "img",
    "aria-label": name || undefined
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cb-avatar__txt",
    "aria-hidden": "true"
  }, initials(name)), showImg && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    onError: () => setFailed(true)
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-body); font-weight: var(--fw-medium);
  font-size: var(--fs-caption); line-height: 1;
  padding: 5px 12px; border-radius: var(--radius-pill);
  background: var(--surface-sunken); color: var(--text-body);
  white-space: nowrap;
}
.cb-badge--solid { background: var(--action-bg); color: var(--action-fg); }
.cb-badge--neutral { background: var(--surface-sunken); color: var(--text-body); }
.cb-badge--red { background: var(--status-danger-bg); color: var(--status-danger-fg); }
.cb-badge--green { background: var(--status-success-bg); color: var(--status-success-fg); }
.cb-badge--blue { background: var(--status-info-bg); color: var(--status-info-fg); }
.cb-badge--warning { background: var(--status-warning-bg); color: var(--status-warning-fg); }
.cb-badge--outline { background: transparent; box-shadow: inset 0 0 0 1px var(--border-default); color: var(--text-body); }
.cb-badge__dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('cb-badge-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Small status / category label. Soft tints by default; use `solid` for the
 * cherry-red emphasis pill and `dot` for a status indicator.
 */
function Badge({
  tone = 'neutral',
  solid = false,
  outline = false,
  dot = false,
  className = '',
  children,
  ...rest
}) {
  inject();
  const classes = ['cb-badge'];
  if (solid) classes.push('cb-badge--solid');else if (outline) classes.push('cb-badge--outline');else classes.push('cb-badge--' + tone);
  if (className) classes.push(className);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes.join(' ')
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "cb-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-bc { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; font-family: var(--font-body); font-size: var(--fs-body-sm); }
.cb-bc a, .cb-bc span { color: var(--text-muted); text-decoration: none; }
.cb-bc a { transition: color var(--dur-fast) var(--ease-out); }
.cb-bc a:hover { color: var(--text-brand-hover); }
.cb-bc__sep { color: var(--border-strong); display: inline-flex; }
.cb-bc__cur { color: var(--text-strong); font-weight: var(--fw-medium); }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-bc-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-bc-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Breadcrumb trail. The last item renders as the current page (non-link).
 */
function Breadcrumb({
  items = [],
  className = '',
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: 'cb-bc ' + className,
    "aria-label": "Breadcrumb"
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "cb-bc__cur",
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: it.onClick
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "cb-bc__sep",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 6l6 6-6 6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-btn {
  --_bg: var(--action-bg);
  --_fg: var(--action-fg);
  --_bg-hover: var(--action-bg-hover);
  --_bg-press: var(--action-bg-press);
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font-family: var(--font-body); font-weight: var(--fw-bold);
  font-size: var(--fs-body-sm); line-height: 1.2; min-height: 48px;
  border: none; border-radius: var(--radius-pill); cursor: pointer;
  padding: 0 24px; text-decoration: none; white-space: nowrap;
  max-width: 100%;
  background: var(--_bg); color: var(--_fg);
  transition: background var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out);
}
.cb-btn:hover { background: var(--_bg-hover); text-decoration: none; color: var(--_fg); }
.cb-btn:active { background: var(--_bg-press); transform: translateY(1px); }
.cb-btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.cb-btn[disabled], .cb-btn[aria-disabled="true"] {
  opacity: .45; cursor: not-allowed; pointer-events: none;
}
.cb-btn--sm { font-size: var(--fs-caption); min-height: 38px; padding: 0 16px; gap: 6px; }
.cb-btn--lg { font-size: var(--fs-body); min-height: 56px; padding: 0 32px; }
.cb-btn--green, .cb-btn--confirm { --_bg: var(--action-confirm-bg); --_bg-hover: var(--action-confirm-bg-hover); --_bg-press: var(--action-confirm-bg-press); --_fg: var(--action-confirm-fg); }
.cb-btn--danger { --_bg: var(--action-danger-bg); --_bg-hover: var(--action-danger-bg-hover); --_bg-press: var(--action-danger-bg-press); --_fg: var(--action-danger-fg); }
.cb-btn--blue { --_bg: var(--blue-500); --_bg-hover: var(--blue-600); --_bg-press: var(--blue-700); --_fg: var(--neutral-0); }
.cb-btn--primary { box-shadow: var(--shadow-brand); }
.cb-btn--primary:hover { box-shadow: 0 12px 30px color-mix(in srgb, var(--red-500) 34%, transparent); }
.cb-btn--outline {
  background: transparent; color: var(--text-strong);
  box-shadow: inset 0 0 0 var(--border-2) var(--border-strong);
}
.cb-btn--outline:hover { background: var(--surface-sunken); color: var(--text-strong); box-shadow: inset 0 0 0 var(--border-2) var(--text-strong); }
.cb-btn--outline:active { background: var(--surface-sunken); }
.cb-btn--ghost { background: transparent; color: var(--text-strong); }
.cb-btn--ghost:hover { background: var(--surface-sunken); color: var(--text-strong); }
.cb-btn--ghost:active { background: var(--surface-sunken); }
.cb-btn--link { background: transparent; color: var(--text-link); border-radius: var(--radius-xs); padding: 4px 6px; min-height: 0; }
.cb-btn--link:hover { background: transparent; color: var(--text-link-hover); text-decoration: underline; }
.cb-btn--full { width: 100%; }
/* Responsive ground rule: on small screens a long label wraps inside the
   pill instead of pushing past the viewport. */
@media (max-width: 480px) {
  .cb-btn { white-space: normal; text-align: center; line-height: 1.25; padding-top: 10px; padding-bottom: 10px; }
}
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('cb-btn-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Colaberry primary button. Cherry-red by default; supports green/blue
 * brand tones, outline/ghost/link variants, three sizes, and icons.
 */
function Button({
  variant = 'primary',
  tone,
  size = 'md',
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  as,
  className = '',
  children,
  ...rest
}) {
  inject();
  const classes = ['cb-btn'];
  if (variant === 'primary') classes.push('cb-btn--primary');
  if (variant === 'outline') classes.push('cb-btn--outline');
  if (variant === 'ghost') classes.push('cb-btn--ghost');
  if (variant === 'link') classes.push('cb-btn--link');
  if (variant === 'confirm') classes.push('cb-btn--confirm');
  if (variant === 'danger') classes.push('cb-btn--danger');
  // tone overrides fill color for solid buttons
  if ((variant === 'primary' || variant === 'solid') && tone === 'green') classes.push('cb-btn--green');
  if ((variant === 'primary' || variant === 'solid') && tone === 'blue') classes.push('cb-btn--blue');
  if (size === 'sm') classes.push('cb-btn--sm');
  if (size === 'lg') classes.push('cb-btn--lg');
  if (fullWidth) classes.push('cb-btn--full');
  if (className) classes.push(className);

  // Only forward real DOM attributes to the host element (never component-only props).
  const dom = {};
  for (const k in rest) {
    if (k.startsWith('aria-') || k.startsWith('data-') || /^on[A-Z]/.test(k) || ['href', 'target', 'rel', 'type', 'name', 'value', 'id', 'title', 'role', 'tabIndex', 'disabled', 'form', 'autoFocus'].includes(k)) {
      dom[k] = rest[k];
    }
  }
  const Tag = rest.href || as === 'a' ? 'a' : as || 'button';
  if (Tag === 'button' && dom.type === undefined) dom.type = 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes.join(' ')
  }, dom), leadingIcon, children && /*#__PURE__*/React.createElement("span", null, children), trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-card {
  display: flex; flex-direction: column;
  background: var(--surface-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);
}
.cb-card--pad { padding: var(--space-6); }
.cb-card--hoverable { cursor: pointer; }
.cb-card--hoverable:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); }
.cb-card--flat { box-shadow: none; }
.cb-card--elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.cb-card--accent { border-top: 4px solid var(--brand-primary); }
.cb-card--accent-green { border-top: 4px solid var(--brand-secondary); }
.cb-card--accent-blue { border-top: 4px solid var(--brand-tertiary); }
.cb-card__media { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; background: var(--surface-sunken); }
.cb-card__body { padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3); }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('cb-card-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Surface container with rounded corners and a soft shadow. Optional media
 * header, body padding, hover lift, and a colored accent top-border.
 */
function Card({
  elevation = 'sm',
  accent,
  hoverable = false,
  padded = false,
  media,
  className = '',
  children,
  ...rest
}) {
  inject();
  const classes = ['cb-card'];
  if (elevation === 'flat') classes.push('cb-card--flat');
  if (elevation === 'md') classes.push('cb-card--elevated');
  if (hoverable) classes.push('cb-card--hoverable');
  if (padded && !media) classes.push('cb-card--pad');
  if (accent === 'red') classes.push('cb-card--accent');
  if (accent === 'green') classes.push('cb-card--accent-green');
  if (accent === 'blue') classes.push('cb-card--accent-blue');
  if (className) classes.push(className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes.join(' ')
  }, rest), media && (typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    className: "cb-card__media",
    src: media,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "cb-card__media"
  }, media)), media ? /*#__PURE__*/React.createElement("div", {
    className: "cb-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Carousel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-carousel { position: relative; border-radius: var(--radius-xl); overflow: hidden; background: var(--surface-sunken); }
.cb-carousel__viewport { overflow: hidden; }
.cb-carousel__track { display: flex; transition: transform var(--dur-slow) var(--ease-out); }
.cb-carousel__slide { flex: 0 0 100%; min-width: 0; }
.cb-carousel__nav { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 50%; border: none; background: var(--surface-card); color: var(--text-strong); box-shadow: var(--shadow-md); cursor: pointer; display: grid; place-items: center; transition: background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out); }
.cb-carousel__nav:hover { background: var(--surface-hover); }
.cb-carousel__nav:active { transform: translateY(-50%) scale(.94); }
.cb-carousel__nav--prev { left: 14px; } .cb-carousel__nav--next { right: 14px; }
.cb-carousel__dots { position: absolute; left: 0; right: 0; bottom: 14px; display: flex; justify-content: center; gap: 8px; }
.cb-carousel__dot { width: 8px; height: 8px; border-radius: 50%; border: none; background: color-mix(in srgb, var(--neutral-0) 55%, transparent); cursor: pointer; padding: 0; transition: width var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out); }
.cb-carousel__dot.is-active { width: 22px; border-radius: var(--radius-pill); background: var(--neutral-0); }
@media (prefers-reduced-motion: reduce){ .cb-carousel__track { transition-duration: .001ms; } }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-carousel-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-carousel-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Sliding carousel with prev/next controls and dot indicators. `slides` is an
 * array of nodes. Set `loop` to wrap around at the ends.
 */
function Carousel({
  slides = [],
  loop = true,
  className = '',
  ...rest
}) {
  inject();
  const [i, setI] = React.useState(0);
  const n = slides.length;
  const go = to => setI(loop ? (to + n) % n : Math.max(0, Math.min(n - 1, to)));
  const onKey = e => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(i - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(i + 1);
    }
  };
  const Arrow = ({
    d
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'cb-carousel ' + className,
    role: "group",
    "aria-roledescription": "carousel",
    "aria-label": "Carousel",
    onKeyDown: onKey
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cb-carousel__viewport"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-carousel__track",
    style: {
      transform: `translateX(-${i * 100}%)`
    }
  }, slides.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    className: "cb-carousel__slide",
    key: idx,
    "aria-hidden": idx !== i,
    inert: idx !== i ? '' : undefined,
    role: "group",
    "aria-roledescription": "slide",
    "aria-label": idx + 1 + ' of ' + n
  }, s)))), n > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "cb-carousel__nav cb-carousel__nav--prev",
    onClick: () => go(i - 1),
    disabled: !loop && i === 0,
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement(Arrow, {
    d: "M15 6l-6 6 6 6"
  })), /*#__PURE__*/React.createElement("button", {
    className: "cb-carousel__nav cb-carousel__nav--next",
    onClick: () => go(i + 1),
    disabled: !loop && i === n - 1,
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(Arrow, {
    d: "M9 6l6 6-6 6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cb-carousel__dots"
  }, slides.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    className: 'cb-carousel__dot' + (idx === i ? ' is-active' : ''),
    onClick: () => setI(idx),
    "aria-label": 'Go to slide ' + (idx + 1),
    "aria-current": idx === i ? 'true' : undefined
  })))));
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-check { display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-body); cursor: pointer; color: var(--text-body); font-size: var(--fs-body-sm); }
.cb-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.cb-check__box {
  width: 22px; height: 22px; flex: none; border-radius: var(--radius-sm);
  border: var(--border-2) solid var(--border-strong); background: var(--surface-card);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
  margin-top: 1px;
}
.cb-check__box svg { width: 14px; height: 14px; opacity: 0; transform: scale(.6); transition: all var(--dur-fast) var(--ease-spring); }
.cb-check input:checked + .cb-check__box { background: var(--action-confirm-bg); border-color: var(--action-confirm-bg); color: var(--action-confirm-fg); }
.cb-check input:checked + .cb-check__box svg { opacity: 1; transform: scale(1); }
.cb-check input:focus-visible + .cb-check__box { box-shadow: var(--focus-ring); }
.cb-check:hover .cb-check__box { border-color: var(--green-600); }
.cb-check input:disabled + .cb-check__box { opacity: .45; }
.cb-check--disabled { cursor: not-allowed; color: var(--text-subtle); }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('cb-check-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-check-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Checkbox with a leaf-green checked state and a soft spring-in tick.
 */
function Checkbox({
  label,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  inject();
  const classes = ['cb-check'];
  if (disabled) classes.push('cb-check--disabled');
  if (className) classes.push(className);
  return /*#__PURE__*/React.createElement("label", {
    className: classes.join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cb-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5l3.2 3.2L13 4.5",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-dialog__scrim { position: fixed; inset: 0; z-index: var(--z-modal); background: var(--overlay-scrim); display: grid; place-items: center; padding: 24px; opacity: 0; transition: opacity var(--dur-base) var(--ease-out); }
.cb-dialog__scrim.is-open { opacity: 1; }
.cb-dialog { width: min(520px, 100%); max-height: 90vh; overflow-y: auto; background: var(--surface-card); border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); transform: translateY(10px) scale(.97); transition: transform var(--dur-base) var(--ease-spring); }
.cb-dialog__scrim.is-open .cb-dialog { transform: translateY(0) scale(1); }
.cb-dialog__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 22px 24px 0; }
.cb-dialog__title { font-family: var(--font-display); font-weight: var(--fw-bold); font-size: var(--fs-h4); color: var(--text-strong); margin: 0; }
.cb-dialog__close { flex: none; background: none; border: none; cursor: pointer; color: var(--text-subtle); padding: 4px; border-radius: var(--radius-sm); transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out); }
.cb-dialog__close:hover { background: var(--surface-sunken); color: var(--text-strong); }
.cb-dialog__body { padding: 12px 24px 8px; font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-body); line-height: 1.6; }
.cb-dialog__foot { display: flex; justify-content: flex-end; gap: 12px; padding: 16px 24px 24px; }
@media (prefers-reduced-motion: reduce){ .cb-dialog__scrim, .cb-dialog { transition-duration: .001ms; } }
`;
function trapTab(e, root) {
  const f = root.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])');
  if (!f.length) {
    e.preventDefault();
    root.focus();
    return;
  }
  const first = f[0],
    last = f[f.length - 1],
    a = document.activeElement;
  if (e.shiftKey && (a === first || a === root)) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && (a === last || !root.contains(a))) {
    e.preventDefault();
    first.focus();
  }
}
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-dialog-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-dialog-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Centered modal dialog with scrim. Controlled via `open`; closes on scrim
 * click or Esc. Provide `footer` for action buttons.
 */
function Dialog({
  open = false,
  title,
  onClose,
  footer,
  children,
  className = '',
  ...rest
}) {
  inject();
  const [mounted, setMounted] = React.useState(open);
  const [shown, setShown] = React.useState(false);
  const panelRef = React.useRef(null);
  const lastFocus = React.useRef(null);
  const titleId = React.useMemo(() => 'cb-dlg-' + Math.random().toString(36).slice(2, 8), []);
  React.useEffect(() => {
    let t;
    if (open) {
      setMounted(true);
      t = requestAnimationFrame(() => setShown(true));
    } else {
      setShown(false);
      t = setTimeout(() => setMounted(false), 240);
    }
    return () => {
      cancelAnimationFrame(t);
      clearTimeout(t);
    };
  }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') {
        onClose && onClose();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) trapTab(e, panelRef.current); // keep focus inside the modal
    };
    document.addEventListener('keydown', onKey);
    // body scroll lock
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // focus management: remember, move focus in, restore on close
    lastFocus.current = document.activeElement;
    const f = requestAnimationFrame(() => {
      if (panelRef.current) panelRef.current.focus();
    });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(f);
      if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
    };
  }, [open, onClose]);
  if (!mounted) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: 'cb-dialog__scrim ' + (shown ? 'is-open' : ''),
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: 'cb-dialog ' + className,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    tabIndex: -1,
    ref: panelRef
  }, rest), (title || onClose) && /*#__PURE__*/React.createElement("div", {
    className: "cb-dialog__head"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "cb-dialog__title",
    id: titleId
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    className: "cb-dialog__close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "cb-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "cb-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/Drawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-drawer__scrim { position: fixed; inset: 0; z-index: var(--z-modal); background: var(--overlay-scrim); opacity: 0; transition: opacity var(--dur-base) var(--ease-out); }
.cb-drawer__scrim.is-open { opacity: 1; }
.cb-drawer { position: fixed; z-index: var(--z-modal); top: 0; bottom: 0; width: min(380px, 88vw); background: var(--surface-card); box-shadow: var(--shadow-xl); display: flex; flex-direction: column; transition: transform var(--dur-base) var(--ease-out); }
.cb-drawer--right { right: 0; transform: translateX(100%); }
.cb-drawer--left { left: 0; transform: translateX(-100%); }
.cb-drawer.is-open { transform: translateX(0); }
.cb-drawer__head { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 22px; border-bottom: 1px solid var(--border-subtle); }
.cb-drawer__title { font-family: var(--font-display); font-weight: var(--fw-bold); font-size: var(--fs-h4); color: var(--text-strong); margin: 0; }
.cb-drawer__close { background: none; border: none; cursor: pointer; color: var(--text-subtle); padding: 4px; border-radius: var(--radius-sm); transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out); }
.cb-drawer__close:hover { background: var(--surface-sunken); color: var(--text-strong); }
.cb-drawer__body { padding: 20px 22px; overflow-y: auto; font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-body); line-height: 1.6; flex: 1; }
@media (prefers-reduced-motion: reduce){ .cb-drawer__scrim, .cb-drawer { transition-duration: .001ms; } }
`;
function trapTab(e, root) {
  const f = root.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])');
  if (!f.length) {
    e.preventDefault();
    root.focus();
    return;
  }
  const first = f[0],
    last = f[f.length - 1],
    a = document.activeElement;
  if (e.shiftKey && (a === first || a === root)) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && (a === last || !root.contains(a))) {
    e.preventDefault();
    first.focus();
  }
}
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-drawer-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-drawer-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Slide-in panel anchored to a screen edge. Controlled via `open`; `side` =
 * right|left. Closes on scrim click or Esc.
 */
function Drawer({
  open = false,
  side = 'right',
  title,
  onClose,
  children,
  className = '',
  ...rest
}) {
  inject();
  const [mounted, setMounted] = React.useState(open);
  const [shown, setShown] = React.useState(false);
  const panelRef = React.useRef(null);
  const lastFocus = React.useRef(null);
  const titleId = React.useMemo(() => 'cb-drw-' + Math.random().toString(36).slice(2, 8), []);
  React.useEffect(() => {
    let t;
    if (open) {
      setMounted(true);
      t = requestAnimationFrame(() => setShown(true));
    } else {
      setShown(false);
      t = setTimeout(() => setMounted(false), 240);
    }
    return () => {
      cancelAnimationFrame(t);
      clearTimeout(t);
    };
  }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') {
        onClose && onClose();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) trapTab(e, panelRef.current); // keep focus inside the drawer
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    lastFocus.current = document.activeElement;
    const f = requestAnimationFrame(() => {
      if (panelRef.current) panelRef.current.focus();
    });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(f);
      if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
    };
  }, [open, onClose]);
  if (!mounted) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'cb-drawer__scrim ' + (shown ? 'is-open' : ''),
    onMouseDown: () => onClose && onClose()
  }), /*#__PURE__*/React.createElement("aside", _extends({
    className: 'cb-drawer cb-drawer--' + side + ' ' + (shown ? 'is-open ' : '') + className,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    tabIndex: -1,
    ref: panelRef
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cb-drawer__head"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "cb-drawer__title",
    id: titleId
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    className: "cb-drawer__close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "cb-drawer__body"
  }, children)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-body); }
.cb-field__label { font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-strong); }
.cb-field__req { color: var(--status-danger); margin-left: 2px; }
.cb-input {
  font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-strong);
  background: var(--surface-card);
  border: var(--border-1) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 12px 14px; width: 100%;
  transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.cb-input::placeholder { color: var(--text-subtle); }
.cb-input:hover { border-color: var(--border-strong); }
.cb-input:focus { outline: none; border-color: var(--border-focus); box-shadow: var(--focus-ring); }
.cb-input:disabled { background: var(--surface-sunken); color: var(--text-subtle); cursor: not-allowed; }
.cb-input--sm { padding: 8px 12px; font-size: var(--fs-body-sm); }
.cb-input--lg { padding: 15px 16px; font-size: var(--fs-body-lg); }
.cb-field--error .cb-input { border-color: var(--status-danger); }
.cb-field--error .cb-input:focus { box-shadow: 0 0 0 3px color-mix(in srgb, var(--status-danger) 35%, transparent); }
.cb-field__msg { font-size: var(--fs-caption); color: var(--text-muted); }
.cb-field--error .cb-field__msg { color: var(--status-danger-fg); }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('cb-input-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _id = 0;

/**
 * Text input with optional label, helper / error message, and sizes.
 * Pass `multiline` to render a textarea.
 */
function Input({
  label,
  required = false,
  size = 'md',
  error,
  helperText,
  multiline = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const fieldId = id || 'cb-input-' + ++_id;
  const inputClasses = ['cb-input'];
  if (size === 'sm') inputClasses.push('cb-input--sm');
  if (size === 'lg') inputClasses.push('cb-input--lg');
  if (className) inputClasses.push(className);
  const msg = error || helperText;
  const Control = multiline ? 'textarea' : 'input';
  const msgId = msg ? fieldId + '-msg' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: 'cb-field' + (error ? ' cb-field--error' : '')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cb-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "cb-field__req",
    "aria-hidden": "true"
  }, "*")), /*#__PURE__*/React.createElement(Control, _extends({
    id: fieldId,
    className: inputClasses.join(' '),
    "aria-invalid": !!error,
    "aria-describedby": msgId
  }, rest)), msg && /*#__PURE__*/React.createElement("span", {
    className: "cb-field__msg",
    id: msgId
  }, msg));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-pag { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-body); }
.cb-pag button { min-width: 38px; height: 38px; padding: 0 10px; border: 1px solid var(--border-default); background: var(--surface-card); color: var(--text-body); border-radius: var(--radius-md); cursor: pointer; font-family: var(--font-body); font-size: var(--fs-body-sm); font-weight: var(--fw-medium); display: inline-flex; align-items: center; justify-content: center; transition: background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out); }
.cb-pag button:hover:not(:disabled):not(.is-current) { background: var(--surface-sunken); border-color: var(--border-strong); }
.cb-pag button:active:not(:disabled) { transform: translateY(1px); }
.cb-pag button:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.cb-pag button.is-current { background: var(--action-bg); border-color: var(--action-bg); color: var(--action-fg); }
.cb-pag button:disabled { opacity: .4; cursor: not-allowed; }
.cb-pag__ellipsis { min-width: 24px; text-align: center; color: var(--text-subtle); }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-pag-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-pag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function range(start, end) {
  const a = [];
  for (let i = start; i <= end; i++) a.push(i);
  return a;
}

/**
 * Page navigation with prev/next and truncated number pills (current = cherry).
 */
function Pagination({
  page = 1,
  total = 1,
  siblings = 1,
  onChange = () => {},
  className = '',
  ...rest
}) {
  inject();
  const pages = [];
  const left = Math.max(2, page - siblings);
  const right = Math.min(total - 1, page + siblings);
  pages.push(1);
  if (left > 2) pages.push('…l');
  pages.push(...range(left, right));
  if (right < total - 1) pages.push('…r');
  if (total > 1) pages.push(total);
  const go = p => p >= 1 && p <= total && p !== page && onChange(p);
  const Arrow = ({
    d
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: 'cb-pag ' + className,
    "aria-label": "Pagination"
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page - 1),
    disabled: page <= 1,
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement(Arrow, {
    d: "M15 6l-6 6 6 6"
  })), pages.map((p, i) => typeof p === 'string' ? /*#__PURE__*/React.createElement("span", {
    className: "cb-pag__ellipsis",
    key: p + i
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    className: p === page ? 'is-current' : '',
    "aria-current": p === page ? 'page' : undefined,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page + 1),
    disabled: page >= total,
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(Arrow, {
    d: "M9 6l6 6-6 6"
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/core/Popover.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-pop { position: relative; display: inline-flex; }
.cb-pop__panel { position: absolute; z-index: var(--z-overlay); min-width: 200px; background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); padding: 14px 16px; font-family: var(--font-body); font-size: var(--fs-body-sm); color: var(--text-body); opacity: 0; transform: translateY(6px) scale(.98); transform-origin: top center; transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out); pointer-events: none; }
.cb-pop__panel[data-p="top"] { bottom: calc(100% + 8px); left: 0; transform-origin: bottom center; }
.cb-pop__panel[data-p="bottom"] { top: calc(100% + 8px); left: 0; }
.cb-pop__panel[data-p="right"] { top: 0; left: calc(100% + 8px); }
.cb-pop.is-open .cb-pop__panel { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
@media (prefers-reduced-motion: reduce){ .cb-pop__panel { transition-duration: .001ms; } }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-pop-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-pop-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Click-triggered floating panel that closes on outside-click or Esc.
 * `trigger` is the clickable node; children are the panel content.
 */
function Popover({
  trigger,
  placement = 'bottom',
  children,
  className = '',
  ...rest
}) {
  inject();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      const t = ref.current && ref.current.querySelector('[aria-haspopup]'); // return focus to the trigger
      if (t) t.focus();
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  // Trigger should be a natively focusable element (e.g. Button) so Enter/Space toggle via its click event.
  const trig = React.isValidElement(trigger) ? React.cloneElement(trigger, {
    'aria-haspopup': 'dialog',
    'aria-expanded': open
  }) : trigger;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'cb-pop ' + (open ? 'is-open ' : '') + className,
    ref: ref
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'inline-flex'
    }
  }, trig), /*#__PURE__*/React.createElement("span", {
    className: "cb-pop__panel",
    "data-p": placement,
    role: "dialog"
  }, children));
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Popover.jsx", error: String((e && e.message) || e) }); }

// components/core/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-prog { width: 100%; }
.cb-prog__track { height: 10px; background: var(--surface-sunken); border-radius: var(--radius-pill); overflow: hidden; }
.cb-prog__bar { height: 100%; border-radius: var(--radius-pill); background: var(--brand-primary); width: 0; transition: width var(--dur-slow) var(--ease-out); }
.cb-prog__bar.green { background: var(--green-700); } .cb-prog__bar.blue { background: var(--blue-500); }
.cb-prog__bar.indet { width: 40% !important; animation: cb-indet 1.3s var(--ease-in-out) infinite; }
.cb-prog__head { display: flex; justify-content: space-between; margin-bottom: 8px; font-family: var(--font-body); font-size: var(--fs-caption); }
.cb-prog__label { color: var(--text-strong); font-weight: var(--fw-medium); }
.cb-prog__val { color: var(--text-muted); font-family: var(--font-mono); }
@keyframes cb-indet { 0% { margin-left: -40%; } 100% { margin-left: 100%; } }
@media (prefers-reduced-motion: reduce){ .cb-prog__bar { transition-duration: .001ms; } .cb-prog__bar.indet { animation: none; width: 100% !important; } }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-prog-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-prog-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Progress bar with an animated fill. Pass `value`/`max` for determinate, or
 * `indeterminate` for an in-flight loop. `tone` = red|green|blue.
 */
function Progress({
  value = 0,
  max = 100,
  tone = 'red',
  indeterminate = false,
  label,
  showValue = false,
  className = '',
  ...rest
}) {
  inject();
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'cb-prog ' + className
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "cb-prog__head"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cb-prog__label"
  }, label), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    className: "cb-prog__val"
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    className: "cb-prog__track",
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : Math.round(pct),
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, /*#__PURE__*/React.createElement("div", {
    className: 'cb-prog__bar ' + (tone !== 'red' ? tone : '') + (indeterminate ? ' indet' : ''),
    style: indeterminate ? undefined : {
      width: pct + '%'
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Progress.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-skel { display: block; background: var(--surface-sunken); border-radius: var(--radius-sm); position: relative; overflow: hidden; }
.cb-skel--text { height: 0.85em; border-radius: var(--radius-xs); margin: 0.2em 0; }
.cb-skel--circle { border-radius: 50%; }
.cb-skel::after { content: ''; position: absolute; inset: 0; transform: translateX(-100%); background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--neutral-0) 60%, transparent), transparent); animation: cb-shimmer 1.4s var(--ease-in-out) infinite; }
[data-theme="dark"] .cb-skel::after { background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--neutral-0) 6%, transparent), transparent); }
@keyframes cb-shimmer { 100% { transform: translateX(100%); } }
@media (prefers-reduced-motion: reduce){ .cb-skel::after { animation: none; } }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-skel-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-skel-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Loading placeholder with a soft shimmer. `variant` = rect|text|circle.
 * Size with `width`/`height` (numbers → px) or CSS.
 */
function Skeleton({
  variant = 'rect',
  width,
  height,
  radius,
  className = '',
  style,
  ...rest
}) {
  inject();
  const dim = v => typeof v === 'number' ? v + 'px' : v;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'cb-skel cb-skel--' + variant + ' ' + className,
    style: {
      width: dim(width),
      height: dim(height),
      borderRadius: dim(radius),
      ...style
    },
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-body); font-size: var(--fs-body-sm); color: var(--text-body); }
.cb-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.cb-switch__track { width: 44px; height: 26px; border-radius: var(--radius-pill); background: var(--control-track); position: relative; flex: none; transition: background var(--dur-base) var(--ease-out); }
.cb-switch__knob { position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: var(--neutral-0); box-shadow: var(--shadow-sm); transition: transform var(--dur-base) var(--ease-spring); }
.cb-switch input:checked + .cb-switch__track { background: var(--control-checked); }
.cb-switch input:checked + .cb-switch__track .cb-switch__knob { transform: translateX(18px); }
.cb-switch input:focus-visible + .cb-switch__track { box-shadow: var(--focus-ring); }
.cb-switch:hover .cb-switch__track { filter: brightness(0.97); }
.cb-switch--disabled { opacity: .45; cursor: not-allowed; }
@media (prefers-reduced-motion: reduce){ .cb-switch__track, .cb-switch__knob { transition-duration: .001ms; } }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-switch-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * On/off toggle switch with a soft spring knob (leaf-green when on).
 */
function Switch({
  label,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: 'cb-switch ' + (disabled ? 'cb-switch--disabled ' : '') + className
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cb-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cb-switch__knob"
  })), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-table-wrap { width: 100%; overflow-x: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); }
.cb-table { width: 100%; border-collapse: collapse; font-family: var(--font-body); font-size: var(--fs-body-sm); }
.cb-table thead th { text-align: left; padding: 13px 16px; background: var(--surface-subtle); color: var(--text-muted); font-size: var(--fs-caption); font-weight: var(--fw-bold); text-transform: uppercase; letter-spacing: var(--ls-wide); white-space: nowrap; border-bottom: 1px solid var(--border-subtle); }
.cb-table tbody td { padding: 13px 16px; color: var(--text-body); border-bottom: 1px solid var(--border-subtle); }
.cb-table tbody tr:last-child td { border-bottom: none; }
.cb-table tbody tr { transition: background var(--dur-fast) var(--ease-out); }
.cb-table--hover tbody tr:hover { background: var(--surface-sunken); }
.cb-table--striped tbody tr:nth-child(even) { background: color-mix(in srgb, var(--surface-sunken) 55%, transparent); }
.cb-table td.num, .cb-table th.num { text-align: right; font-variant-numeric: tabular-nums; }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-table-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-table-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Data table. `columns` = [{ key, header, align, render }]; `data` = row objects.
 * `hover` highlights rows; `striped` zebra-stripes them.
 */
function Table({
  columns = [],
  data = [],
  hover = true,
  striped = false,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['cb-table'];
  if (hover) cls.push('cb-table--hover');
  if (striped) cls.push('cb-table--striped');
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("div", {
    className: "cb-table-wrap"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: cls.join(' ')
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    className: c.align === 'right' ? 'num' : ''
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    className: c.align === 'right' ? 'num' : ''
  }, c.render ? c.render(row[c.key], row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Table.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-ta-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-body); }
.cb-ta-field__label { font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-strong); }
.cb-ta-field__req { color: var(--status-danger); margin-left: 2px; }
.cb-ta { font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-strong); background: var(--surface-card); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 12px 14px; width: 100%; resize: vertical; min-height: 96px; line-height: 1.5; transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out); }
.cb-ta::placeholder { color: var(--text-subtle); }
.cb-ta:hover { border-color: var(--border-strong); }
.cb-ta:focus { outline: none; border-color: var(--border-focus); box-shadow: var(--focus-ring); }
.cb-ta:disabled { background: var(--surface-sunken); color: var(--text-subtle); cursor: not-allowed; }
.cb-ta-field--error .cb-ta { border-color: var(--status-danger); }
.cb-ta-field__foot { display: flex; justify-content: space-between; font-size: var(--fs-caption); color: var(--text-muted); }
.cb-ta-field--error .cb-ta-field__msg { color: var(--status-danger-fg); }
.cb-ta-field__count { font-family: var(--font-mono); margin-left: auto; }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-ta-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-ta-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _taid = 0;

/**
 * Multi-line text field with optional label, error/helper text, and a live
 * character counter when `maxLength` is set.
 */
function Textarea({
  label,
  required = false,
  error,
  helperText,
  maxLength,
  id,
  value,
  defaultValue,
  onChange,
  className = '',
  ...rest
}) {
  inject();
  const fid = id || 'cb-ta-' + ++_taid;
  const [len, setLen] = React.useState((value ?? defaultValue ?? '').length);
  const msg = error || helperText;
  const msgId = msg ? fid + '-msg' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: 'cb-ta-field' + (error ? ' cb-ta-field--error' : '')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cb-ta-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "cb-ta-field__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: 'cb-ta ' + className,
    maxLength: maxLength,
    value: value,
    defaultValue: defaultValue,
    "aria-invalid": !!error,
    "aria-describedby": msgId,
    onChange: e => {
      setLen(e.target.value.length);
      onChange && onChange(e);
    }
  }, rest)), (msg || maxLength) && /*#__PURE__*/React.createElement("div", {
    className: "cb-ta-field__foot"
  }, msg && /*#__PURE__*/React.createElement("span", {
    className: "cb-ta-field__msg",
    id: msgId
  }, msg), maxLength && /*#__PURE__*/React.createElement("span", {
    className: "cb-ta-field__count"
  }, len, "/", maxLength)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-toast { display: flex; align-items: flex-start; gap: 12px; width: min(380px, calc(100vw - 32px)); background: var(--surface-card); border: 1px solid var(--border-subtle); border-left: 4px solid var(--neutral-400); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); padding: 14px 16px; font-family: var(--font-body); }
.cb-toast--fixed { position: fixed; left: 50%; bottom: 24px; z-index: var(--z-toast); transform: translateX(-50%) translateY(16px); opacity: 0; transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-spring); pointer-events: none; }
.cb-toast--fixed.is-open { opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: auto; }
.cb-toast--success { border-left-color: var(--status-success); } .cb-toast--success .cb-toast__ic { color: var(--status-success); }
.cb-toast--danger { border-left-color: var(--status-danger); } .cb-toast--danger .cb-toast__ic { color: var(--status-danger); }
.cb-toast--info { border-left-color: var(--status-info); } .cb-toast--info .cb-toast__ic { color: var(--status-info); }
.cb-toast__ic { flex: none; margin-top: 1px; color: var(--text-muted); }
.cb-toast__body { flex: 1; min-width: 0; }
.cb-toast__title { font-weight: var(--fw-bold); font-size: var(--fs-body-sm); color: var(--text-strong); }
.cb-toast__msg { font-size: var(--fs-caption); color: var(--text-muted); margin-top: 2px; line-height: 1.45; }
.cb-toast__close { flex: none; background: none; border: none; cursor: pointer; color: var(--text-subtle); padding: 2px; border-radius: var(--radius-xs); transition: color var(--dur-fast) var(--ease-out); }
.cb-toast__close:hover { color: var(--text-strong); }
@media (prefers-reduced-motion: reduce){ .cb-toast--fixed { transition-duration: .001ms; } }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-toast-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-toast-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  success: 'M20 6L9 17l-5-5',
  danger: 'M12 8v5M12 16.5v.5M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
  info: 'M12 16v-5M12 8v.5M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
  neutral: 'M12 16v-5M12 8v.5M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'
};

/**
 * Notification toast. `variant` = neutral|success|danger|info. Renders
 * fixed-bottom-center by default; pass `static` to place it in normal flow.
 */
function Toast({
  open = true,
  variant = 'neutral',
  title,
  children,
  onClose,
  static: inFlow = false,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['cb-toast', 'cb-toast--' + variant];
  if (!inFlow) {
    cls.push('cb-toast--fixed');
    if (open) cls.push('is-open');
  }
  if (className) cls.push(className);
  if (inFlow && !open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls.join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("svg", {
    className: "cb-toast__ic",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[variant],
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cb-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "cb-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "cb-toast__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "cb-toast__close",
    onClick: onClose,
    "aria-label": "Dismiss"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cb-tip { position: relative; display: inline-flex; }
.cb-tip__pop { position: absolute; z-index: var(--z-overlay); pointer-events: none; background: var(--surface-inverse); color: var(--text-on-inverse); font-family: var(--font-body); font-size: var(--fs-caption); font-weight: var(--fw-medium); line-height: 1.3; padding: 7px 11px; border-radius: var(--radius-sm); white-space: nowrap; box-shadow: var(--shadow-md); opacity: 0; transform: translateY(4px); transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out); }
.cb-tip:hover .cb-tip__pop, .cb-tip:focus-within .cb-tip__pop { opacity: 1; transform: translateY(0); }
.cb-tip.is-esc .cb-tip__pop { opacity: 0; }
.cb-tip__pop::after { content: ''; position: absolute; width: 8px; height: 8px; background: var(--surface-inverse); transform: rotate(45deg); }
.cb-tip__pop[data-p="top"] { bottom: calc(100% + 8px); left: 50%; translate: -50% 0; }
.cb-tip__pop[data-p="top"]::after { bottom: -4px; left: 50%; margin-left: -4px; }
.cb-tip__pop[data-p="bottom"] { top: calc(100% + 8px); left: 50%; translate: -50% 0; }
.cb-tip__pop[data-p="bottom"]::after { top: -4px; left: 50%; margin-left: -4px; }
.cb-tip__pop[data-p="left"] { right: calc(100% + 8px); top: 50%; translate: 0 -50%; }
.cb-tip__pop[data-p="left"]::after { right: -4px; top: 50%; margin-top: -4px; }
.cb-tip__pop[data-p="right"] { left: calc(100% + 8px); top: 50%; translate: 0 -50%; }
.cb-tip__pop[data-p="right"]::after { left: -4px; top: 50%; margin-top: -4px; }
@media (prefers-reduced-motion: reduce){ .cb-tip__pop { transition-duration: .001ms; } }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById('cb-tip-css')) return;
  const s = document.createElement('style');
  s.id = 'cb-tip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Hover/focus tooltip. Wraps a single trigger; `placement` = top|bottom|left|right.
 */
function Tooltip({
  label,
  placement = 'top',
  children,
  className = '',
  ...rest
}) {
  inject();
  const [esc, setEsc] = React.useState(false); // WCAG 1.4.13: Esc dismisses without moving focus
  const tipId = React.useMemo(() => 'cb-tip-' + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'cb-tip ' + (esc ? 'is-esc ' : '') + className,
    tabIndex: 0,
    "aria-describedby": tipId,
    onKeyDown: e => {
      if (e.key === 'Escape') setEsc(true);
    },
    onBlur: () => setEsc(false),
    onMouseLeave: () => setEsc(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "cb-tip__pop",
    id: tipId,
    "data-p": placement,
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// guidelines/showcase.jsx
try { (() => {
/* Live component gallery + example layouts for design-system.html.
   Reads the components off the standalone build's window namespace. */
const C = window.ColaberryDesignSystem_098454 || {};
const {
  Button,
  Badge,
  Card,
  Avatar,
  Input,
  Textarea,
  Checkbox,
  Switch,
  Accordion,
  Breadcrumb,
  Pagination,
  Tooltip,
  Popover,
  Progress,
  Skeleton,
  Toast,
  Table,
  Dialog,
  Drawer,
  Carousel
} = C;
function Tile({
  name,
  wide,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'ds-tile' + (wide ? ' ds-tile--wide' : '')
  }, /*#__PURE__*/React.createElement("p", {
    className: "ds-tile__name"
  }, name), children);
}
function OverlayDemo() {
  const [dlg, setDlg] = React.useState(false);
  const [drw, setDrw] = React.useState(false);
  const [tst, setTst] = React.useState(false);
  React.useEffect(() => {
    if (!tst) return;
    const t = setTimeout(() => setTst(false), 3200);
    return () => clearTimeout(t);
  }, [tst]);
  return /*#__PURE__*/React.createElement(Tile, {
    name: "Dialog \xB7 Drawer \xB7 Toast",
    wide: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setDlg(true)
  }, "Open dialog"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    onClick: () => setDrw(true)
  }, "Open drawer"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => setTst(true)
  }, "Show toast")), /*#__PURE__*/React.createElement(Dialog, {
    open: dlg,
    title: "Confirm enrollment",
    onClose: () => setDlg(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setDlg(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setDlg(false)
    }, "Confirm"))
  }, "Ready to start the Data Analytics program? You can change your cohort later."), /*#__PURE__*/React.createElement(Drawer, {
    open: drw,
    title: "Filters",
    onClose: () => setDrw(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Online",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "On campus"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Scholarships only"
  }))), /*#__PURE__*/React.createElement(Toast, {
    open: tst,
    variant: "success",
    title: "Application sent",
    onClose: () => setTst(false)
  }, "We'll be in touch within a day."));
}
function Gallery() {
  const [page, setPage] = React.useState(3);
  const slide = (label, a, b) => /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      background: `linear-gradient(135deg, var(--${a}), var(--${b}))`
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-gal"
  }, /*#__PURE__*/React.createElement(Tile, {
    name: "Button"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, null, "Apply now"), /*#__PURE__*/React.createElement(Button, {
    tone: "green"
  }, "Enroll"), /*#__PURE__*/React.createElement(Button, {
    tone: "blue"
  }, "Book a call")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Link")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Large"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "Disabled"))), /*#__PURE__*/React.createElement(Tile, {
    name: "Badge \xB7 Avatar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    dot: true
  }, "Enrolling"), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "Data Science"), /*#__PURE__*/React.createElement(Badge, {
    tone: "red",
    dot: true
  }, "Closing"), /*#__PURE__*/React.createElement(Badge, {
    solid: true
  }, "New"), /*#__PURE__*/React.createElement(Badge, {
    outline: true
  }, "Self-paced")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "assets/avatars/person-1.png",
    name: "Mika Rivera",
    size: "lg",
    ring: true
  }), /*#__PURE__*/React.createElement(Avatar, {
    src: "assets/avatars/person-2.png",
    name: "Owen Brooks",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Avatar, {
    src: "assets/avatars/person-3.png",
    name: "Sam Okafor",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Ada Lovelace",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cb-avatar-group"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "assets/avatars/person-2.png",
    name: "Owen Brooks"
  }), /*#__PURE__*/React.createElement(Avatar, {
    src: "assets/avatars/person-1.png",
    name: "Mika Rivera"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Ada Lovelace"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Lee Park"
  })))), /*#__PURE__*/React.createElement(Tile, {
    name: "Input \xB7 Textarea"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "ada@email.com"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Why data?",
    placeholder: "A sentence or two\u2026",
    maxLength: 120
  }))), /*#__PURE__*/React.createElement(Tile, {
    name: "Checkbox \xB7 Switch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Email me about new cohorts",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to the terms"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Notifications",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "SMS"
  })))), /*#__PURE__*/React.createElement(Tile, {
    name: "Accordion"
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: [{
      title: 'What is included?',
      content: 'Live classes, 1:1 mentorship, a portfolio project, and a year of job support.'
    }, {
      title: 'Do I need a degree?',
      content: 'No — a GED or diploma is all you need. No admissions tests.'
    }]
  })), /*#__PURE__*/React.createElement(Tile, {
    name: "Breadcrumb \xB7 Pagination"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home'
    }, {
      label: 'Programs'
    }, {
      label: 'Data Analytics'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 9,
    onChange: setPage
  }))), /*#__PURE__*/React.createElement(Tile, {
    name: "Tooltip \xB7 Popover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Closes the menu"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline"
  }, "Hover me")), /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom",
    trigger: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Open popover")
  }, /*#__PURE__*/React.createElement("strong", null, "Need help?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, "Talk to an advisor \u2014 no pressure.")))), /*#__PURE__*/React.createElement(Tile, {
    name: "Progress \xB7 Skeleton"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Progress, {
    label: "Course progress",
    value: 68,
    showValue: true
  }), /*#__PURE__*/React.createElement(Progress, {
    tone: "blue",
    indeterminate: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
    width: 42,
    height: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text",
    width: "80%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text",
    width: "55%"
  }))))), /*#__PURE__*/React.createElement(Tile, {
    name: "Table",
    wide: true
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'name',
      header: 'Cohort'
    }, {
      key: 'start',
      header: 'Starts'
    }, {
      key: 'wk',
      header: 'Weeks',
      align: 'right'
    }, {
      key: 'st',
      header: 'Status',
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: v === 'Open' ? 'green' : 'neutral',
        dot: v === 'Open'
      }, v)
    }],
    data: [{
      name: 'Data Analytics',
      start: 'Apr 8',
      wk: 12,
      st: 'Open'
    }, {
      name: 'Data Science',
      start: 'May 6',
      wk: 24,
      st: 'Open'
    }, {
      name: 'Intro Seminar',
      start: 'Mar 18',
      wk: 2,
      st: 'Closed'
    }]
  })), /*#__PURE__*/React.createElement(OverlayDemo, null), /*#__PURE__*/React.createElement(Tile, {
    name: "Carousel",
    wide: true
  }, /*#__PURE__*/React.createElement(Carousel, {
    slides: [slide('Mentorship', 'blue-500', 'blue-700'), slide('Real projects', 'green-500', 'green-700'), slide('Get hired', 'red-400', 'red-600')]
  })));
}

/* ---------------- Example layouts ---------------- */

function Frame({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-ex__frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-ex__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-ex__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-ex__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-ex__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-ex__title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "ds-ex__body"
  }, children));
}
function SignIn() {
  return /*#__PURE__*/React.createElement(Frame, {
    title: "sign-in.html"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/colaberry-horizontal.png",
    alt: "Colaberry",
    style: {
      height: 34,
      display: 'block',
      margin: '0 auto 22px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      fontSize: 26,
      margin: '0 0 6px'
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      margin: '0 0 24px'
    }
  }, "Sign in to continue your data journey."), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "ada@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true
  }, "Sign in")), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 20
    }
  }, "New here? ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Apply now"))));
}
function Pricing() {
  const plans = [{
    tone: 'blue',
    tag: '12 weeks',
    name: 'Data Analytics',
    price: '$1,999',
    feats: ['SQL & reporting', 'Dashboards', 'Portfolio project'],
    cta: 'blue'
  }, {
    tone: 'red',
    tag: 'Most popular',
    name: 'Analytics + Accelerator',
    price: '$12,000',
    feats: ['Everything in Analytics', '1:1 mentorship', '1-year job support'],
    featured: true,
    cta: 'red'
  }, {
    tone: 'green',
    tag: '24 weeks',
    name: 'Data Science',
    price: '$4,500',
    feats: ['Python & ML', 'Statistics', 'Capstone project'],
    cta: 'green'
  }];
  return /*#__PURE__*/React.createElement(Frame, {
    title: "pricing.html"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, plans.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padded: true,
    elevation: p.featured ? 'md' : 'sm',
    accent: p.featured ? 'red' : undefined,
    style: p.featured ? {
      outline: '2px solid var(--red-500)'
    } : undefined
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone,
    solid: p.featured
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4px 0 0',
      fontSize: 20
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 34,
      color: 'var(--text-strong)'
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 9,
      margin: '4px 0 8px'
    }
  }, p.feats.map((f, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5",
    stroke: "var(--green-600)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), f))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    tone: p.cta,
    variant: p.featured ? 'primary' : 'outline'
  }, "Choose plan")))));
}
function Dashboard() {
  const stats = [['68%', 'Course complete'], ['12', 'Lessons left'], ['4.9', 'Avg. score'], ['Apr 30', 'Cohort ends']];
  return /*#__PURE__*/React.createElement(Frame, {
    title: "dashboard.html"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14,
      marginBottom: 22
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padded: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 28,
      color: 'var(--red-500)'
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, s[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18
    }
  }, "Upcoming cohorts"), /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'name',
      header: 'Program'
    }, {
      key: 'wk',
      header: 'Weeks',
      align: 'right'
    }, {
      key: 'st',
      header: 'Status',
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: v === 'Open' ? 'green' : 'neutral'
      }, v)
    }],
    data: [{
      name: 'Data Analytics',
      wk: 12,
      st: 'Open'
    }, {
      name: 'Data Science',
      wk: 24,
      st: 'Open'
    }, {
      name: 'Intro Seminar',
      wk: 2,
      st: 'Closed'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    padded: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontSize: 18
    }
  }, "This week"), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Progress, {
    label: "SQL fundamentals",
    value: 90,
    showValue: true,
    tone: "green"
  }), /*#__PURE__*/React.createElement(Progress, {
    label: "Dashboards",
    value: 55,
    showValue: true
  }), /*#__PURE__*/React.createElement(Progress, {
    label: "Capstone",
    value: 20,
    showValue: true,
    tone: "blue"
  })))));
}
function Examples() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-ex"
  }, /*#__PURE__*/React.createElement(SignIn, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(Dashboard, null));
}
if (C.Button) {
  const cmp = document.getElementById('cmp-root');
  const lay = document.getElementById('lay-root');
  cmp.classList.remove('ds-loading');
  lay.classList.remove('ds-loading');
  ReactDOM.createRoot(cmp).render(/*#__PURE__*/React.createElement(Gallery, null));
  ReactDOM.createRoot(lay).render(/*#__PURE__*/React.createElement(Examples, null));
} else {
  document.getElementById('cmp-root').textContent = 'Component bundle failed to load.';
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/showcase.jsx", error: String((e && e.message) || e) }); }

// hero-three.js
try { (() => {
/* Colaberry DS landing — Three.js constellation hero.
   Connected data web: nodes + proximity lines + cherry cursor threads + trailing glow.
   Formations morph: scatter → wave → chart → globe. Pointer gathers, click ripples + reshapes.
   The render loop ALWAYS runs; reduced motion only disables autonomous movement
   (drift, jitter, auto-morph) — pointer and click response are user-initiated. */
(function () {
  'use strict';

  var canvas = document.getElementById('gl');
  if (!canvas) return;
  if (!window.THREE) {
    document.documentElement.classList.add('no-gl');
    return;
  }
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var AUTO = !RM;
  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance'
    });
  } catch (e) {
    document.documentElement.classList.add('no-gl');
    return;
  }
  renderer.setClearColor(0x000000, 0);
  var hero = canvas.closest('.hero') || canvas.parentElement;
  var small = window.innerWidth < 760;
  var N = small ? 140 : 240;
  var FOV = 42,
    CAMZ = 30;
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 120);
  camera.position.z = CAMZ;
  var group = new THREE.Group();
  group.position.z = -1;
  scene.add(group);
  function mkTex(px, stops) {
    var c = document.createElement('canvas');
    c.width = c.height = px;
    var g = c.getContext('2d');
    var gr = g.createRadialGradient(px / 2, px / 2, 0, px / 2, px / 2, px / 2);
    stops.forEach(function (s) {
      gr.addColorStop(s[0], 'rgba(255,255,255,' + s[1] + ')');
    });
    g.fillStyle = gr;
    g.fillRect(0, 0, px, px);
    return new THREE.CanvasTexture(c);
  }
  var dotTex = mkTex(64, [[0, 1], [.3, 1], [.62, .55], [1, 0]]);
  var glowTex = mkTex(128, [[0, .9], [.3, .4], [1, 0]]);

  /* ---------- formation targets ---------- */
  function gauss() {
    var u = 0,
      v = 0;
    while (!u) u = Math.random();
    while (!v) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(6.2832 * v);
  }
  function mkScatter() {
    var a = new Float32Array(N * 3);
    for (var i = 0; i < N; i++) {
      a[i * 3] = gauss() * 6.8;
      a[i * 3 + 1] = gauss() * 3.7;
      a[i * 3 + 2] = Math.max(-5, Math.min(5, gauss() * 2.8));
    }
    return a;
  }
  function mkWave() {
    var a = new Float32Array(N * 3),
      W = Math.round(Math.sqrt(N * 2.9)),
      D = Math.ceil(N / W);
    for (var i = 0; i < N; i++) {
      var c = i % W,
        r = i / W | 0;
      var x = (c / (W - 1) - .5) * 34,
        z = (r / Math.max(D - 1, 1) - .5) * 13;
      a[i * 3] = x;
      a[i * 3 + 1] = Math.sin(x * .42) * 1.8 + Math.cos(z * .6 + x * .24) * 1.2;
      a[i * 3 + 2] = z;
    }
    return a;
  }
  function mkBars() {
    var CX = 14,
      CZ = 5,
      a = new Float32Array(N * 3),
      H = [];
    for (var c = 0; c < CX * CZ; c++) {
      var ix = c % CX,
        iz = c / CX | 0;
      H[c] = 1.4 + (Math.sin(ix * .8 + 1) + Math.cos(iz * 1.15 + .5) + 2) / 4 * 7.2;
    }
    for (var i = 0; i < N; i++) {
      var k = i % (CX * CZ),
        jx = k % CX,
        jz = k / CX | 0,
        lvl = i / (CX * CZ) | 0;
      a[i * 3] = (jx / (CX - 1) - .5) * 25 + (Math.random() - .5) * .3;
      a[i * 3 + 1] = -5 + lvl / Math.max(1, Math.ceil(N / (CX * CZ)) - 1) * H[k];
      a[i * 3 + 2] = (jz / (CZ - 1) - .5) * 9 + (Math.random() - .5) * .3;
    }
    return a;
  }
  function mkGlobe() {
    var a = new Float32Array(N * 3),
      GA = Math.PI * (3 - Math.sqrt(5)),
      R = 8.6;
    for (var i = 0; i < N; i++) {
      var y = 1 - i / (N - 1) * 2,
        rad = Math.sqrt(Math.max(0, 1 - y * y)),
        th = GA * i;
      a[i * 3] = Math.cos(th) * rad * R;
      a[i * 3 + 1] = y * R * .94;
      a[i * 3 + 2] = Math.sin(th) * rad * R;
    }
    return a;
  }
  var TARGETS = [mkScatter(), mkWave(), mkBars(), mkGlobe()];
  var NAMES = ['scatter field', 'signal wave', 'the chart', 'the globe'];
  var LINKD = [2.6, 2.4, 2.6, 2.3];

  /* ---------- nodes ---------- */
  var geo = new THREE.BufferGeometry();
  var posArr = new Float32Array(N * 3);
  posArr.set(TARGETS[0]);
  var pos = new THREE.BufferAttribute(posArr, 3);
  if (pos.setUsage && THREE.DynamicDrawUsage !== undefined) pos.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', pos);
  var PAL = ['#FB2832', '#FB2832', '#FB2832', '#FD5760', '#77BB4A', '#5BA63C', '#367895', '#4A86A2'];
  var colArr = new Float32Array(N * 3),
    tmpC = new THREE.Color();
  for (var ci = 0; ci < N; ci++) {
    tmpC.set(PAL[Math.random() * PAL.length | 0]);
    colArr[ci * 3] = tmpC.r;
    colArr[ci * 3 + 1] = tmpC.g;
    colArr[ci * 3 + 2] = tmpC.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
  var mat = new THREE.PointsMaterial({
    size: small ? .5 : .44,
    map: dotTex,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    sizeAttenuation: true
  });
  group.add(new THREE.Points(geo, mat));

  /* ---------- web lines (node↔node, local space) ---------- */
  var SEGMAX = N * 9;
  var lgeo = new THREE.BufferGeometry();
  var lpos = new THREE.BufferAttribute(new Float32Array(SEGMAX * 6), 3);
  var lcol = new THREE.BufferAttribute(new Float32Array(SEGMAX * 6), 3);
  if (lpos.setUsage && THREE.DynamicDrawUsage !== undefined) {
    lpos.setUsage(THREE.DynamicDrawUsage);
    lcol.setUsage(THREE.DynamicDrawUsage);
  }
  lgeo.setAttribute('position', lpos);
  lgeo.setAttribute('color', lcol);
  var lmat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0
  });
  group.add(new THREE.LineSegments(lgeo, lmat));

  /* ---------- cursor threads (pointer↔node, local space) ---------- */
  var cgeo = new THREE.BufferGeometry();
  var cpos = new THREE.BufferAttribute(new Float32Array(N * 6), 3);
  var ccol = new THREE.BufferAttribute(new Float32Array(N * 6), 3);
  cgeo.setAttribute('position', cpos);
  cgeo.setAttribute('color', ccol);
  var cmat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0
  });
  group.add(new THREE.LineSegments(cgeo, cmat));

  /* ---------- cursor glow ---------- */
  var glowMat = new THREE.SpriteMaterial({
    map: glowTex,
    color: 0xFB2832,
    transparent: true,
    opacity: 0,
    depthWrite: false
  });
  var glow = new THREE.Sprite(glowMat);
  glow.scale.set(7, 7, 1);
  glow.position.set(0, 0, -1);
  scene.add(glow);

  /* theme-aware palette: line fade is encoded as color mixed toward the page bg */
  var BG = new THREE.Color('#ffffff'),
    LINE = new THREE.Color('#367895'),
    CHERRY = new THREE.Color('#FB2832');
  var isDark = false;
  function syncTheme() {
    isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    BG.set(isDark ? '#101010' : '#ffffff');
    LINE.set(isDark ? '#4A86A2' : '#367895');
  }
  new MutationObserver(syncTheme).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
  syncTheme();

  /* ---------- state ---------- */
  var a = 0,
    b = 0,
    p = 1;
  var t = 0,
    last = 0,
    idleSince = 0,
    jAmp = 0;
  var pulses = [];
  var mx = 0,
    my = 0,
    smx = 0,
    smy = 0;
  var px = 0,
    py = 0,
    pActive = false,
    glowA = 0;
  var vel = new Float32Array(N * 3),
    off = new Float32Array(N * 3);
  var label = document.getElementById('glShape');
  function setLabel() {
    if (label) label.textContent = '0' + (b + 1) + ' · ' + NAMES[b];
  }
  setLabel();
  function ease(x) {
    return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
  function advance() {
    a = b;
    b = (b + 1) % TARGETS.length;
    p = 0;
    idleSince = t;
    setLabel();
  }

  /* ---------- sizing ---------- */
  var W = 0,
    H = 0;
  function size() {
    var w = hero.clientWidth || window.innerWidth,
      h = hero.clientHeight || window.innerHeight;
    if (!w || !h) return false;
    W = w;
    H = h;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    return true;
  }

  /* ---------- frame ---------- */
  var halfH = Math.tan(FOV * Math.PI / 360) * (CAMZ + 1); /* pointer plane sits at the group origin, z=-1 */
  var MI = new THREE.Matrix4(),
    PV = new THREE.Vector3(),
    PP = new THREE.Vector3();
  var mixA = new THREE.Color(),
    mixB = new THREE.Color();
  function write(dt) {
    dt = dt || 0.016;
    var e = p >= 1 ? 1 : ease(p);
    var A = TARGETS[a],
      B = TARGETS[b];

    /* pointer + pulses into the group's local space (exact, both rotations) */
    group.updateMatrixWorld(true);
    if (MI.invert) MI.copy(group.matrixWorld).invert();else MI.getInverse(group.matrixWorld);
    PV.set(px, py, -1).applyMatrix4(MI);
    var GR = 6.4;
    var np = pulses.length,
      pu = [];
    for (var q = 0; q < np; q++) {
      var age = t - pulses[q].t0;
      PP.set(pulses[q].x, pulses[q].y, -1).applyMatrix4(MI);
      pu.push({
        x: PP.x,
        y: PP.y,
        z: PP.z,
        rad: age * 22,
        amp: Math.max(0, 1 - age / 1.1) * 34
      });
    }
    var fr = Math.max(0, 1 - 2.4 * dt),
      spring = 3.4 * dt;
    for (var i = 0; i < N; i++) {
      var i3 = i * 3,
        ph = i * .37;
      var tx = A[i3] + (B[i3] - A[i3]) * e;
      var ty = A[i3 + 1] + (B[i3 + 1] - A[i3 + 1]) * e;
      var tz = A[i3 + 2] + (B[i3 + 2] - A[i3 + 2]) * e;
      if (pActive) {
        var gx = PV.x - (tx + off[i3]),
          gy = PV.y - (ty + off[i3 + 1]),
          gz = PV.z - (tz + off[i3 + 2]);
        var gd2 = gx * gx + gy * gy + gz * gz;
        if (gd2 < GR * GR && gd2 > .0001) {
          var gd = Math.sqrt(gd2),
            gf = (1 - gd / GR) * 11 * dt;
          vel[i3] += gx / gd * gf;
          vel[i3 + 1] += gy / gd * gf;
          vel[i3 + 2] += gz / gd * gf;
        }
      }
      for (var w2 = 0; w2 < np; w2++) {
        var P = pu[w2];
        var wx = tx + off[i3] - P.x,
          wy = ty + off[i3 + 1] - P.y,
          wz = tz + off[i3 + 2] - P.z;
        var wd = Math.sqrt(wx * wx + wy * wy + wz * wz) || 1;
        var band = Math.abs(wd - P.rad);
        if (band < 3.2) {
          var push = (1 - band / 3.2) * P.amp * dt;
          vel[i3] += wx / wd * push;
          vel[i3 + 1] += wy / wd * push;
          vel[i3 + 2] += wz / wd * push;
        }
      }
      vel[i3] = (vel[i3] - off[i3] * spring) * fr;
      vel[i3 + 1] = (vel[i3 + 1] - off[i3 + 1] * spring) * fr;
      vel[i3 + 2] = (vel[i3 + 2] - off[i3 + 2] * spring) * fr;
      off[i3] += vel[i3];
      off[i3 + 1] += vel[i3 + 1];
      off[i3 + 2] += vel[i3 + 2];
      posArr[i3] = tx + off[i3] + (jAmp ? Math.sin(t * .8 + ph) * jAmp : 0);
      posArr[i3 + 1] = ty + off[i3 + 1] + (jAmp ? Math.cos(t * .7 + ph * 1.3) * jAmp : 0);
      posArr[i3 + 2] = tz + off[i3 + 2] + (jAmp ? Math.sin(t * .6 + ph * .7) * jAmp : 0);
    }
    pos.needsUpdate = true;

    /* web: proximity links */
    var LINK = LINKD[b] + (LINKD[a] - LINKD[b]) * (1 - e),
      L2 = LINK * LINK;
    var lp = lpos.array,
      lc = lcol.array,
      seg = 0;
    for (var m = 0; m < N && seg < SEGMAX; m++) {
      var m3 = m * 3,
        x1 = posArr[m3],
        y1 = posArr[m3 + 1],
        z1 = posArr[m3 + 2];
      for (var n = m + 1; n < N && seg < SEGMAX; n++) {
        var n3 = n * 3;
        var ddx = x1 - posArr[n3],
          ddy = y1 - posArr[n3 + 1],
          ddz = z1 - posArr[n3 + 2];
        var dd2 = ddx * ddx + ddy * ddy + ddz * ddz;
        if (dd2 < L2) {
          var wgt = 1 - Math.sqrt(dd2) / LINK;
          mixA.copy(BG).lerp(LINE, .12 + wgt * .55);
          var s6 = seg * 6;
          lp[s6] = x1;
          lp[s6 + 1] = y1;
          lp[s6 + 2] = z1;
          lp[s6 + 3] = posArr[n3];
          lp[s6 + 4] = posArr[n3 + 1];
          lp[s6 + 5] = posArr[n3 + 2];
          lc[s6] = mixA.r;
          lc[s6 + 1] = mixA.g;
          lc[s6 + 2] = mixA.b;
          lc[s6 + 3] = mixA.r;
          lc[s6 + 4] = mixA.g;
          lc[s6 + 5] = mixA.b;
          seg++;
        }
      }
    }
    lgeo.setDrawRange(0, seg * 2);
    lpos.needsUpdate = true;
    lcol.needsUpdate = true;

    /* cursor threads: pointer → nearby nodes, both in local space */
    var cp = cpos.array,
      cc = ccol.array,
      cseg = 0;
    if (pActive) {
      var TR = 6;
      for (var k2 = 0; k2 < N && cseg < N; k2++) {
        var k3 = k2 * 3;
        var ndx = PV.x - posArr[k3],
          ndy = PV.y - posArr[k3 + 1],
          ndz = PV.z - posArr[k3 + 2];
        var nd = Math.sqrt(ndx * ndx + ndy * ndy + ndz * ndz);
        if (nd < TR) {
          var cw = 1 - nd / TR;
          mixB.copy(BG).lerp(CHERRY, .15 + cw * .8);
          var c6 = cseg * 6;
          cp[c6] = PV.x;
          cp[c6 + 1] = PV.y;
          cp[c6 + 2] = PV.z;
          cp[c6 + 3] = posArr[k3];
          cp[c6 + 4] = posArr[k3 + 1];
          cp[c6 + 5] = posArr[k3 + 2];
          cc[c6] = mixB.r;
          cc[c6 + 1] = mixB.g;
          cc[c6 + 2] = mixB.b;
          cc[c6 + 3] = mixB.r;
          cc[c6 + 4] = mixB.g;
          cc[c6 + 5] = mixB.b;
          cseg++;
        }
      }
    }
    cgeo.setDrawRange(0, cseg * 2);
    cpos.needsUpdate = true;
    ccol.needsUpdate = true;
  }
  function render() {
    renderer.render(scene, camera);
  }

  /* ---------- pointer ---------- */
  function onMove(e) {
    var r = hero.getBoundingClientRect();
    var nx = (e.clientX - r.left) / r.width * 2 - 1;
    var ny = -((e.clientY - r.top) / r.height * 2 - 1);
    mx = nx;
    my = ny;
    px = nx * halfH * camera.aspect;
    py = ny * halfH;
    pActive = e.clientY >= r.top && e.clientY <= r.bottom && e.clientX >= r.left && e.clientX <= r.right;
  }
  window.addEventListener('pointermove', onMove, {
    passive: true
  });
  document.addEventListener('pointerleave', function () {
    pActive = false;
  });
  window.addEventListener('blur', function () {
    pActive = false;
  });
  hero.addEventListener('pointerdown', function (e) {
    if (e.target.closest('a, button, input')) return;
    onMove(e);
    pulses.push({
      x: px,
      y: py,
      t0: t
    });
    if (pulses.length > 3) pulses.shift();
    advance();
  });

  /* ---------- boot: the loop runs for everyone ---------- */
  if (!size()) requestAnimationFrame(size);
  if ('ResizeObserver' in window) new ResizeObserver(function () {
    size();
  }).observe(hero);
  window.addEventListener('resize', size);
  var visible = true;
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) {
    visible = es[0].isIntersecting;
  }).observe(canvas);
  function tick(ts) {
    requestAnimationFrame(tick);
    if (!visible || document.hidden) return;
    if (!W && !size()) return;
    var dt = Math.min((ts - last) / 1000 || 0.016, .05);
    last = ts;
    t += dt;
    if (mat.opacity < .95) {
      mat.opacity = Math.min(.95, mat.opacity + dt * .6);
      lmat.opacity = cmat.opacity = mat.opacity * .85;
    }
    if (p < 1) p = Math.min(1, p + dt / 1.9);else if (AUTO && t - idleSince > 6) advance();
    pulses = pulses.filter(function (P) {
      return t - P.t0 < 1.15;
    });
    smx += (mx - smx) * .06;
    smy += (my - smy) * .06;
    jAmp = AUTO ? .1 : 0;
    group.rotation.y = (AUTO ? t * .05 : 0) + smx * .26;
    group.rotation.x = -smy * .14 - (AUTO ? .03 : 0);
    /* cursor glow trails the pointer */
    glow.position.x += (px - glow.position.x) * .14;
    glow.position.y += (py - glow.position.y) * .14;
    glowA += ((pActive ? 1 : 0) * (isDark ? .38 : .22) - glowA) * .1;
    glowMat.opacity = glowA;
    var gs = 7 + (AUTO ? Math.sin(t * 1.8) * .4 : 0);
    glow.scale.set(gs, gs, 1);
    write(dt);
    render();
  }
  requestAnimationFrame(function (ts) {
    last = ts;
    tick(ts);
  });
  window.__gl = {
    n: N,
    auto: AUTO,
    shape: function () {
      return NAMES[b];
    },
    hover: function () {
      return pActive;
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "hero-three.js", error: String((e && e.message) || e) }); }

// landing.js
try { (() => {
/* Colaberry DS landing — GSAP + Lenis choreography and interactions.
   Tiers: FULL (motion OK) · LITE (reduced motion: opacity fades) · STATIC (no gsap/rAF: final states). */
(function () {
  'use strict';

  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE = window.matchMedia('(pointer: fine)').matches;

  /* ---------- Toast ---------- */
  var toastEl = document.getElementById('ltoast'),
    toastT;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 1600);
  }

  /* ---------- Theme ---------- */
  var TKEY = 'cb-landing-theme';
  function theme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(t === 'dark'));
      var ic = b.querySelector('i');
      if (ic) ic.className = t === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    });
    var sw = document.getElementById('themeSwitch');
    if (sw) sw.setAttribute('aria-checked', String(t === 'dark'));
  }
  applyTheme(theme());
  function flipTheme() {
    var t = theme() === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(TKEY, t);
    } catch (e) {}
    applyTheme(t);
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', flipTheme);
  });
  var themeSwitch = document.getElementById('themeSwitch');
  if (themeSwitch) themeSwitch.addEventListener('click', flipTheme);

  /* ---------- Nav: scrolled + hide-on-scroll-down ---------- */
  var nav = document.querySelector('.lnav'),
    lastY = 0;
  function onScroll() {
    var y = window.scrollY;
    if (nav) {
      nav.classList.toggle('is-scrolled', y > 10);
      if (y > lastY + 6 && y > 420 && !document.documentElement.classList.contains('menu-open')) nav.classList.add('is-hid');else if (y < lastY - 6 || y <= 420) nav.classList.remove('is-hid');
    }
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, {
    passive: true
  });
  onScroll();

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (!RM && FINE && window.Lenis && window.gsap) {
    lenis = new Lenis({
      lerp: 0.105
    });
    lenis.on('scroll', function () {
      if (window.ScrollTrigger) ScrollTrigger.update();
    });
    gsap.ticker.add(function (t) {
      lenis.raf(t * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    document.documentElement.classList.add('lenis', 'lenis-smooth');
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    if (lenis) {
      e.preventDefault();
      lenis.scrollTo(el, {
        offset: -70,
        duration: 1.2
      });
    }
    setMenu(false);
  });

  /* ---------- Menu overlay ---------- */
  var burger = document.getElementById('burger'),
    menu = document.getElementById('menu');
  function setMenu(open) {
    if (!menu || !burger) return;
    if (open === menu.classList.contains('is-open')) return;
    menu.classList.toggle('is-open', open);
    burger.classList.toggle('is-x', open);
    burger.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('menu-open', open);
    if (lenis) {
      open ? lenis.stop() : lenis.start();
    }
    if (open && window.gsap && !RM) gsap.fromTo('.menu__links a', {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.5,
      ease: 'power3.out',
      delay: 0.12,
      clearProps: 'all'
    });
  }
  if (burger) burger.addEventListener('click', function () {
    setMenu(!menu.classList.contains('is-open'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  /* ---------- Color ramps ---------- */
  var RAMPS = [{
    name: 'Cherry Red',
    base: '#FB2832',
    hex: ['#FFF0F1', '#FFDBDD', '#FFB8BC', '#FE8A90', '#FD5760', '#FB2832', '#E5121D', '#C20E1E', '#9B0E18', '#7A1016']
  }, {
    name: 'Leaf Green',
    base: '#77BB4A',
    hex: ['#F1F9EA', '#DEF0CC', '#C2E3A1', '#A2D375', '#8AC759', '#77BB4A', '#5BA63C', '#468A2E', '#356A24', '#2A521E']
  }, {
    name: 'Berry Blue',
    base: '#367895',
    hex: ['#EAF2F6', '#CFE0E9', '#A6C5D5', '#6F9DB6', '#4A86A2', '#367895', '#2E6A86', '#265A72', '#20485C', '#1A3947']
  }];
  var rampsRoot = document.getElementById('ramps');
  if (rampsRoot) {
    RAMPS.forEach(function (r) {
      var block = document.createElement('div');
      block.className = 'lr-block';
      block.innerHTML = '<div class="lr-name"><b>' + r.name + '</b><code>' + r.base + '</code></div>';
      var ramp = document.createElement('div');
      ramp.className = 'lr-ramp';
      r.hex.forEach(function (h) {
        var b = document.createElement('button');
        b.className = 'lr-sw';
        b.style.background = h;
        b.setAttribute('aria-label', 'Copy ' + h);
        b.dataset.hex = h;
        ramp.appendChild(b);
      });
      block.appendChild(ramp);
      rampsRoot.appendChild(block);
    });
    rampsRoot.addEventListener('click', function (e) {
      var sw = e.target.closest('.lr-sw');
      if (!sw) return;
      if (navigator.clipboard) navigator.clipboard.writeText(sw.dataset.hex);
      toast('Copied ' + sw.dataset.hex);
    });
  }

  /* ---------- Copy snippets ---------- */
  var SNIPS = {
    prompt: 'Using the Colaberry design system, create a [social post / flyer / slide / one-pager] at [size] for [topic]. Headline: [your headline]. Add a [call-to-action] and the logo. Warm and on-brand, no emoji — give me 3 options.',
    install: '<link rel="stylesheet" href="colaberry/styles.css">\n<scr' + 'ipt src="colaberry/_ds_bundle.js"></scr' + 'ipt>\n/* tokens: var(--brand-accent) · components: window.ColaberryDesignSystem_098454 */'
  };
  document.querySelectorAll('[data-snip]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (navigator.clipboard) navigator.clipboard.writeText(SNIPS[el.dataset.snip] || '');
      toast('Copied to clipboard');
    });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });

  /* ---------- Small interactions ---------- */
  document.querySelectorAll('.r-switch:not(#themeSwitch)').forEach(function (s) {
    s.addEventListener('click', function () {
      s.setAttribute('aria-checked', String(s.getAttribute('aria-checked') !== 'true'));
    });
  });
  document.querySelectorAll('.tw-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var aa = document.getElementById('twAa');
      if (aa) aa.style.fontWeight = b.dataset.w;
      document.querySelectorAll('.tw-btn').forEach(function (x) {
        x.classList.toggle('is-on', x === b);
      });
    });
  });
  var mplay = document.getElementById('mplay');
  function playMotion() {
    var stage = document.getElementById('mstage');
    if (!stage || !window.gsap) return;
    var chips = stage.querySelectorAll('.mo-chip'),
      check = stage.querySelector('.mo-check');
    if (RM) {
      gsap.fromTo([chips, check], {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.07,
        duration: 0.35,
        clearProps: 'opacity'
      });
      return;
    }
    gsap.timeline().fromTo(chips, {
      y: 15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.09,
      clearProps: 'all'
    }).fromTo(check, {
      scale: 0.4,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(2.8)',
      clearProps: 'all'
    }, '-=0.08');
  }
  if (mplay) mplay.addEventListener('click', playMotion);

  /* ---------- Gallery: drag, progress, arrows ---------- */
  var gal = document.getElementById('gal');
  if (gal) {
    var bar = document.getElementById('galBar');
    function upd() {
      var m = gal.scrollWidth - gal.clientWidth;
      if (bar) bar.style.transform = 'scaleX(' + (m > 0 ? gal.scrollLeft / m : 0) + ')';
    }
    gal.addEventListener('scroll', upd, {
      passive: true
    });
    window.addEventListener('resize', upd);
    upd();
    document.querySelectorAll('[data-gal]').forEach(function (b) {
      b.addEventListener('click', function () {
        gal.scrollBy({
          left: (b.dataset.gal === 'next' ? 1 : -1) * Math.round(gal.clientWidth * 0.72),
          behavior: RM ? 'auto' : 'smooth'
        });
      });
    });
    if (FINE) {
      var down = false,
        sx = 0,
        sl = 0,
        moved = false;
      gal.addEventListener('pointerdown', function (e) {
        if (e.pointerType !== 'mouse') return;
        down = true;
        moved = false;
        sx = e.clientX;
        sl = gal.scrollLeft;
        gal.classList.add('is-drag');
        gal.setPointerCapture(e.pointerId);
      });
      gal.addEventListener('pointermove', function (e) {
        if (!down) return;
        var dx = e.clientX - sx;
        if (Math.abs(dx) > 5) moved = true;
        gal.scrollLeft = sl - dx;
      });
      ['pointerup', 'pointercancel'].forEach(function (ev) {
        gal.addEventListener(ev, function () {
          down = false;
          gal.classList.remove('is-drag');
        });
      });
      gal.addEventListener('click', function (e) {
        if (moved) {
          e.preventDefault();
          e.stopPropagation();
          moved = false;
        }
      }, true);
    }
  }

  /* ---------- Word splitters ---------- */
  function splitWords(el, masked) {
    var spans = [];
    (function proc(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (ch) {
        if (ch.nodeType === 3) {
          var frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(function (t) {
            if (!t) return;
            if (/^\s+$/.test(t)) {
              frag.appendChild(document.createTextNode(' '));
              return;
            }
            var s;
            if (masked) {
              s = document.createElement('span');
              s.className = 'sw';
              var i = document.createElement('span');
              i.className = 'swi';
              i.textContent = t;
              s.appendChild(i);
              spans.push(i);
            } else {
              s = document.createElement('span');
              s.className = 'mw';
              s.textContent = t;
              spans.push(s);
            }
            frag.appendChild(s);
          });
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1 && ch.tagName !== 'BR') proc(ch);
      });
    })(el);
    return spans;
  }

  /* ---------- Final-state fallback ---------- */
  function staticFinalize() {
    document.querySelectorAll('.r-prog i').forEach(function (b) {
      b.style.width = (b.dataset.val || 70) + '%';
    });
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var n = parseFloat(el.dataset.count);
      el.textContent = (isNaN(n) ? el.dataset.count : n.toLocaleString('en-US')) + (el.dataset.suffix || '');
    });
  }

  /* ---------- FULL choreography ---------- */
  function startFull() {
    gsap.registerPlugin(ScrollTrigger);
    var EMPH = 'expo.out';
    gsap.timeline({
      defaults: {
        ease: EMPH
      }
    }).from('.hero__pill', {
      y: 20,
      opacity: 0,
      duration: 0.7
    }, 0.1).from('.hl__i', {
      yPercent: 114,
      duration: 1.15,
      stagger: 0.09
    }, 0.2).from('.hero__sub', {
      y: 24,
      opacity: 0,
      duration: 0.8
    }, '-=0.6').from('.hero__cta', {
      y: 24,
      opacity: 0,
      duration: 0.8
    }, '-=0.62').from('.hero__note', {
      opacity: 0,
      duration: 0.7
    }, '-=0.5').from('.hero__shape, .hero__hint, .hero__cue', {
      opacity: 0,
      duration: 0.8
    }, '-=0.4');
    gsap.to('.hero__in', {
      y: -70,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
    gsap.to('#gl', {
      opacity: 0.22,
      y: 70,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
    gsap.utils.toArray('.hero__h1 .hl').forEach(function (l, i) {
      gsap.to(l, {
        y: -22 * i,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    /* velocity-reactive marquee: skews with scroll speed, settles when you stop */
    var marq = document.querySelector('.marq');
    if (marq) {
      var skewTo = gsap.quickTo(marq, 'skewX', {
          duration: 0.4,
          ease: 'power2.out'
        }),
        skewT;
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: function (self) {
          skewTo(gsap.utils.clamp(-5, 5, self.getVelocity() / -300));
          clearTimeout(skewT);
          skewT = setTimeout(function () {
            skewTo(0);
          }, 140);
        }
      });
    }

    /* pinned token pipeline: horizontal scrub ≥960px, staggered stack below */
    var flowVp = document.querySelector('.fp-vp');
    if (flowVp) {
      var fTrack = flowVp.querySelector('.fp-track'),
        fFill = document.getElementById('fpFill'),
        fps = gsap.utils.toArray('.fp');
      if (window.innerWidth >= 960) {
        document.documentElement.classList.add('js-flow');
        var maxX = function () {
          return Math.max(0, fTrack.scrollWidth - flowVp.clientWidth);
        };
        var ftl = gsap.timeline({
          scrollTrigger: {
            trigger: flowVp,
            start: 'top top',
            end: function () {
              return '+=' + Math.round(maxX() + window.innerHeight * 0.2);
            },
            pin: true,
            scrub: 0.65,
            invalidateOnRefresh: true,
            onUpdate: function (self) {
              for (var i = 0; i < fps.length; i++) fps[i].classList.toggle('is-on', self.progress >= i / fps.length * 0.92);
            }
          }
        });
        ftl.to(fTrack, {
          x: function () {
            return -maxX();
          },
          ease: 'none'
        }, 0);
        if (fFill) ftl.fromTo(fFill, {
          width: '3%'
        }, {
          width: '100%',
          ease: 'none'
        }, 0);
      } else {
        fps.forEach(function (c) {
          gsap.from(c, {
            y: 44,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: c,
              start: 'top 88%',
              onEnter: function () {
                c.classList.add('is-on');
              }
            }
          });
        });
      }
    }

    /* principles: sticky stack — settled cards recede as the next arrives */
    var prs = gsap.utils.toArray('.pr-card');
    prs.forEach(function (c, i) {
      if (i === prs.length - 1) return;
      gsap.to(c, {
        scale: 0.955,
        opacity: 0.55,
        transformOrigin: 'center top',
        ease: 'none',
        scrollTrigger: {
          trigger: prs[i + 1],
          start: 'top 92%',
          end: 'top 30%',
          scrub: true
        }
      });
    });

    /* generic depth parallax: data-speed <1 lags, >1 leads */
    gsap.utils.toArray('[data-speed]').forEach(function (el) {
      var sp = parseFloat(el.dataset.speed) || 1;
      gsap.fromTo(el, {
        y: (1 - sp) * -90
      }, {
        y: (1 - sp) * 90,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
    document.querySelectorAll('[data-split]').forEach(function (h) {
      var words = splitWords(h, true);
      gsap.from(words, {
        yPercent: 112,
        duration: 0.9,
        stagger: 0.05,
        ease: EMPH,
        scrollTrigger: {
          trigger: h,
          start: 'top 86%'
        }
      });
    });
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      gsap.from(el, {
        y: 44,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 87%'
        }
      });
    });
    document.querySelectorAll('[data-reveal-group]').forEach(function (g) {
      gsap.from(g.children, {
        y: 44,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.09,
        scrollTrigger: {
          trigger: g,
          start: 'top 86%'
        }
      });
    });
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var end = parseFloat(el.dataset.count),
        suffix = el.dataset.suffix || '',
        obj = {
          v: 0
        };
      gsap.to(obj, {
        v: end,
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%'
        },
        onUpdate: function () {
          el.textContent = Math.round(obj.v).toLocaleString('en-US') + suffix;
        }
      });
    });
    document.querySelectorAll('.r-prog i').forEach(function (b) {
      gsap.to(b, {
        width: (b.dataset.val || 70) + '%',
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: b,
          start: 'top 93%'
        }
      });
    });
    document.querySelectorAll('.lr-ramp').forEach(function (r) {
      gsap.from(r.children, {
        scaleY: 0,
        transformOrigin: 'bottom',
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.04,
        scrollTrigger: {
          trigger: r,
          start: 'top 90%'
        }
      });
    });
    var mstage = document.getElementById('mstage');
    if (mstage) ScrollTrigger.create({
      trigger: mstage,
      start: 'top 88%',
      once: true,
      onEnter: playMotion
    });
    var gal2 = document.getElementById('gal');
    if (gal2) {
      gsap.from(gal2.children, {
        x: 90,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.07,
        scrollTrigger: {
          trigger: gal2,
          start: 'top 84%'
        }
      });
      gsap.fromTo(gal2, {
        x: 44
      }, {
        x: -44,
        ease: 'none',
        scrollTrigger: {
          trigger: '#work',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
    gsap.from('.cta__in', {
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta',
        start: 'top 84%'
      }
    });
    gsap.fromTo('.cta__glow', {
      yPercent: -26,
      xPercent: -6
    }, {
      yPercent: 26,
      xPercent: 6,
      ease: 'none',
      scrollTrigger: {
        trigger: '.cta',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
    gsap.from('.foot__in > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.foot',
        start: 'top 90%'
      }
    });
    if (FINE) document.querySelectorAll('.mag').forEach(function (el) {
      var qx = gsap.quickTo(el, 'x', {
        duration: 0.35,
        ease: 'power3'
      });
      var qy = gsap.quickTo(el, 'y', {
        duration: 0.35,
        ease: 'power3'
      });
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        qx((e.clientX - r.left - r.width / 2) * 0.2);
        qy((e.clientY - r.top - r.height / 2) * 0.3);
      });
      el.addEventListener('pointerleave', function () {
        qx(0);
        qy(0);
      });
    });
  }

  /* ---------- LITE (reduced motion) ---------- */
  function startLite() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero__in > *', {
      opacity: 0,
      duration: 0.6,
      stagger: 0.07
    });
    document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach(function (el) {
      gsap.from(el, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%'
        }
      });
    });
    gsap.utils.toArray('.fp, .pr-card').forEach(function (el) {
      gsap.from(el, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: 'top 92%'
        }
      });
    });
    staticFinalize();
  }

  /* ---------- Boot ---------- */
  var rafOk = false;
  requestAnimationFrame(function () {
    rafOk = true;
  });
  setTimeout(function () {
    if (window.gsap && window.ScrollTrigger && rafOk) {
      RM ? startLite() : startFull();
    } else staticFinalize();
  }, 250);
  var y = document.getElementById('yr');
  if (y) y.textContent = String(new Date().getFullYear());
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing.js", error: String((e && e.message) || e) }); }

// motion.js
try { (() => {
/* ============================================================
   Colaberry — motion.js
   Fail-safe reveal-on-scroll bootstrap for the cb motion layer.

   What it does
   ------------
   1. Adds <html class="cb-js"> so the [data-reveal] CSS arms.
      (Without this, all content stays visible — by design.)
   2. Reveals each [data-reveal] element when it scrolls into view
      by adding .is-in, then unobserves it.
   3. Safety nets: if IntersectionObserver is missing, or anything
      is still hidden after a timeout, everything is revealed.
   4. Re-scans on demand via window.ColaberryMotion.refresh() and
      automatically for nodes added later (lightweight MutationObserver).

   Usage — load ONCE, ideally in <head> (a normal blocking tag is
   fine; it's tiny) so cb-js is set before first paint and there is
   no flash of visible-then-hidden content:
     <script src="motion.js"></script>
   ============================================================ */
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  var d = document,
    root = d.documentElement;
  if (root.classList.contains('cb-js')) return; // already booted
  root.classList.add('cb-js');
  var REVEAL = '[data-reveal]';
  var io = null;
  function reveal(el) {
    el.classList.add('is-in');
    if (io) io.unobserve(el);
  }
  function revealAll() {
    var els = d.querySelectorAll(REVEAL);
    for (var i = 0; i < els.length; i++) els[i].classList.add('is-in');
  }
  function arm(el) {
    if (el.__cbArmed) return;
    el.__cbArmed = true;
    if (io) io.observe(el);else reveal(el); // no observer support → just show it
  }
  function scan() {
    var els = d.querySelectorAll(REVEAL);
    for (var i = 0; i < els.length; i++) arm(els[i]);
  }
  function start() {
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) reveal(entries[i].target);
        }
      }, {
        rootMargin: '0px 0px 12% 0px',
        threshold: 0.01
      });
    }
    scan();

    // Watch for elements injected after load (SPA views, async content).
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          var added = muts[i].addedNodes;
          for (var j = 0; j < added.length; j++) {
            var n = added[j];
            if (n.nodeType !== 1) continue;
            if (n.matches && n.matches(REVEAL)) arm(n);
            if (n.querySelectorAll) {
              var inner = n.querySelectorAll(REVEAL);
              for (var k = 0; k < inner.length; k++) arm(inner[k]);
            }
          }
        }
      });
      mo.observe(d.body, {
        childList: true,
        subtree: true
      });
    }

    // Ultimate safety net: nothing should ever stay hidden for long.
    setTimeout(revealAll, 2600);
  }
  window.ColaberryMotion = {
    refresh: scan,
    revealAll: revealAll
  };
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start);else start();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "motion.js", error: String((e && e.message) || e) }); }

// training-site/landing.js
try { (() => {
/* ============================================================
   Colaberry — Flagship landing interactions
   GSAP + ScrollTrigger + Lenis smooth scroll + Three.js hero
   field + custom cursor + magnetic buttons. Progressive: if a
   library is missing or reduced-motion is set, content stays
   visible and the page still works.
   ============================================================ */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch = window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches;
  var hasGSAP = !!window.gsap;
  if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ============================================================
     LENIS smooth scroll
     ============================================================ */
  var lenis = null;
  function initLenis() {
    if (reduce || !window.Lenis) return;
    lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true
    });
    window.__lenis = lenis;
    document.documentElement.classList.add('lenis');
    if (hasGSAP && window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) {
        lenis.raf(t * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      requestAnimationFrame(function raf(t) {
        lenis.raf(t);
        requestAnimationFrame(raf);
      });
    }
  }

  /* ============================================================
     CUSTOM CURSOR
     ============================================================ */
  function initCursor() {
    if (touch || reduce || !hasGSAP) return;
    var ring = document.querySelector('.cursor'),
      dot = document.querySelector('.cursor-dot');
    if (!ring) return;
    var xs = gsap.quickTo(ring, 'x', {
      duration: .4,
      ease: 'power3'
    });
    var ys = gsap.quickTo(ring, 'y', {
      duration: .4,
      ease: 'power3'
    });
    var xd = gsap.quickTo(dot, 'x', {
      duration: .1,
      ease: 'power3'
    });
    var yd = gsap.quickTo(dot, 'y', {
      duration: .1,
      ease: 'power3'
    });
    window.addEventListener('mousemove', function (e) {
      xs(e.clientX);
      ys(e.clientY);
      xd(e.clientX);
      yd(e.clientY);
    });
    document.querySelectorAll('a, button, .magnetic').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        ring.classList.add('is-hover');
      });
      el.addEventListener('mouseleave', function () {
        ring.classList.remove('is-hover');
      });
    });
  }

  /* ============================================================
     MAGNETIC BUTTONS
     ============================================================ */
  function initMagnetic() {
    if (touch || reduce || !hasGSAP) return;
    document.querySelectorAll('.btn-mag').forEach(function (btn) {
      var label = btn.querySelector('span') || btn;
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width / 2;
        var my = e.clientY - r.top - r.height / 2;
        gsap.to(btn, {
          x: mx * 0.3,
          y: my * 0.4,
          duration: .4,
          ease: 'power3'
        });
        gsap.to(label, {
          x: mx * 0.15,
          y: my * 0.2,
          duration: .4,
          ease: 'power3'
        });
      });
      btn.addEventListener('mouseleave', function () {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: .5,
          ease: 'elastic.out(1,0.4)'
        });
        gsap.to(label, {
          x: 0,
          y: 0,
          duration: .5,
          ease: 'elastic.out(1,0.4)'
        });
      });
    });
  }

  /* ============================================================
     THREE.JS HERO FIELD — animated point wave
     ============================================================ */
  var fields = [];
  function buildField(canvas, opts) {
    if (!window.THREE || !canvas) return null;
    opts = opts || {};
    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
      });
    } catch (e) {
      return null;
    }
    var dpr = Math.min(window.devicePixelRatio || 1, touch ? 1.5 : 2);
    renderer.setPixelRatio(dpr);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.set(0, 0, opts.camZ || 60);
    var gx = touch ? 40 : opts.gx || 64;
    var gy = touch ? 22 : opts.gy || 38;
    var sep = opts.sep || 2.0;
    var n = gx * gy;
    var positions = new Float32Array(n * 3);
    var colors = new Float32Array(n * 3);
    var cA = new THREE.Color(0xfb2832); // cherry
    var cB = new THREE.Color(0x367895); // teal/blue
    var cC = new THREE.Color(0xffffff);
    var i = 0;
    for (var ix = 0; ix < gx; ix++) {
      for (var iy = 0; iy < gy; iy++) {
        positions[i * 3] = (ix - gx / 2) * sep;
        positions[i * 3 + 1] = (iy - gy / 2) * sep;
        positions[i * 3 + 2] = 0;
        var t = ix / gx;
        var c = t < 0.5 ? cA.clone().lerp(cC, t * 2 * 0.6) : cC.clone().lerp(cB, (t - 0.5) * 2);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        i++;
      }
    }
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    var mat = new THREE.PointsMaterial({
      size: opts.size || 0.42,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    var pts = new THREE.Points(geo, mat);
    pts.rotation.x = -1.0;
    pts.position.y = -2;
    scene.add(pts);
    var mouse = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0
    };
    if (!touch) window.addEventListener('mousemove', function (e) {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = e.clientY / window.innerHeight - 0.5;
    });
    function resize() {
      var w = canvas.clientWidth,
        h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);
    var clock = new THREE.Clock();
    function frame() {
      var time = clock.getElapsedTime();
      var pos = geo.attributes.position.array;
      var k = 0;
      for (var ix = 0; ix < gx; ix++) {
        for (var iy = 0; iy < gy; iy++) {
          var x = (ix - gx / 2) * sep,
            y = (iy - gy / 2) * sep;
          pos[k * 3 + 2] = Math.sin(x * 0.3 + time * 0.9) * 1.6 + Math.cos(y * 0.35 + time * 0.7) * 1.6;
          k++;
        }
      }
      geo.attributes.position.needsUpdate = true;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      pts.rotation.z = mouse.x * 0.3;
      camera.position.x = mouse.x * 12;
      camera.position.y = -mouse.y * 8;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    return {
      frame: frame,
      resize: resize,
      renderOnce: function () {
        renderer.render(scene, camera);
      }
    };
  }
  function initFields() {
    var heroC = document.querySelector('.hero__canvas');
    var ctaC = document.querySelector('.fcta__canvas');
    var f1 = buildField(heroC, {
      size: 0.5
    });
    var f2 = buildField(ctaC, {
      size: 0.4,
      gx: 48,
      gy: 28,
      camZ: 55
    });
    if (f1) fields.push(f1);
    if (f2) fields.push(f2);
    if (reduce) {
      fields.forEach(function (f) {
        f.frame();
      });
      return;
    }
    function loop() {
      fields.forEach(function (f) {
        f.frame();
      });
      requestAnimationFrame(loop);
    }
    if (fields.length) loop();
  }

  /* ============================================================
     LOADER → reveal
     ============================================================ */
  function runLoader(done) {
    var loader = document.querySelector('.loader');
    var count = document.querySelector('.loader__count');
    var bar = document.querySelector('.loader__bar i');
    var heroStarted = false,
      loaderCleared = false;
    function startHero() {
      if (heroStarted) return;
      heroStarted = true;
      done();
    }
    function clearLoader() {
      if (loaderCleared) return;
      loaderCleared = true;
      if (loader) {
        loader.classList.add('is-done');
        loader.style.display = 'none';
      }
    }
    function reveal() {
      clearLoader();
      startHero();
    }
    // Wall-clock fail-safe: setTimeout uses a different clock than rAF, so this
    // fires even if the GSAP/rAF ticker never advances (background tab, throttle,
    // ticker stall). The page can never stay hidden behind the loader.
    var failsafe = setTimeout(reveal, reduce ? 700 : 3200);
    if (!loader || !hasGSAP) {
      clearTimeout(failsafe);
      reveal();
      return;
    }
    var obj = {
      v: 0
    };
    var tl = gsap.timeline({
      onComplete: function () {
        clearTimeout(failsafe);
        startHero(); // hero content reveals as the curtain lifts
        gsap.to(loader, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: clearLoader
        });
      }
    });
    tl.to(obj, {
      v: 100,
      duration: reduce ? 0.4 : 1.6,
      ease: 'power2.inOut',
      onUpdate: function () {
        var p = Math.round(obj.v);
        if (count) count.textContent = String(p).padStart(3, '0');
        if (bar) bar.style.width = p + '%';
      }
    });
    tl.to('.loader__brand', {
      y: -10,
      opacity: 0.0,
      duration: 0.4,
      ease: 'power2.in'
    }, '-=0.1');
  }

  /* ============================================================
     HERO reveal
     ============================================================ */
  function revealHero() {
    if (!hasGSAP || reduce) return; // reduced-motion: content already visible
    var tl = gsap.timeline({
      defaults: {
        ease: 'power4.out'
      }
    });
    tl.from('.hero__eyebrow', {
      y: 20,
      opacity: 0,
      duration: 0.6
    }).from('.hero h1 .hline', {
      y: 50,
      opacity: 0,
      duration: 0.95,
      stagger: 0.12
    }, '-=0.3').from('.hero__sub', {
      y: 24,
      opacity: 0,
      duration: 0.7
    }, '-=0.5').from('.hero__cta > *', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1
    }, '-=0.5').from('.hero__scroll', {
      opacity: 0,
      duration: 0.6
    }, '-=0.3');
  }

  /* ============================================================
     NAV behavior
     ============================================================ */
  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var last = 0;
    function onScroll() {
      var y = window.scrollY;
      nav.classList.toggle('solid', y > 40);
      if (y > 400 && y > last) nav.classList.add('hide');else nav.classList.remove('hide');
      last = y;
    }
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    var burger = document.querySelector('.nav__burger');
    var menu = document.querySelector('.mmenu');
    var close = document.querySelector('.mmenu__close');
    function setMenu(o) {
      if (menu) menu.classList.toggle('open', o);
      document.body.style.overflow = o ? 'hidden' : '';
    }
    if (burger) burger.addEventListener('click', function () {
      setMenu(true);
    });
    if (close) close.addEventListener('click', function () {
      setMenu(false);
    });
    if (menu) menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        setMenu(false);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* ============================================================
     SCROLL-DRIVEN: marquee, manifesto, stats, programs, parallax
     ============================================================ */
  function initScroll() {
    if (!hasGSAP || !window.ScrollTrigger) return;

    // Helper: format a stat's final value (used for both the animated count
    // and the reduced-motion / no-animation path).
    function statFinal(el) {
      var target = parseFloat(el.getAttribute('data-to'));
      var pre = el.getAttribute('data-pre') || '';
      var suf = el.getAttribute('data-suf') || '';
      var sep = el.getAttribute('data-sep') === '1';
      var s = sep ? target.toLocaleString('en-US') : String(target);
      el.innerHTML = pre + s + '<span class="u">' + suf + '</span>';
    }

    // REDUCED MOTION: skip all reveal/scrub/pin animations (they would hide or
    // freeze content if the ticker is stalled). Show everything immediately.
    if (reduce) {
      gsap.utils.toArray('.stat2__n').forEach(statFinal);
      return;
    }

    // generic heading reveals
    gsap.utils.toArray('[data-rise]').forEach(function (el) {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      });
    });

    // text marquees (continuous + scroll velocity)
    gsap.utils.toArray('.marq__track, .lmarq__track').forEach(function (track) {
      var dir = track.classList.contains('lmarq__track') ? 1 : -1;
      var tw = gsap.to(track, {
        xPercent: dir * -50,
        repeat: -1,
        duration: 22,
        ease: 'none'
      });
      ScrollTrigger.create({
        onUpdate: function (self) {
          tw.timeScale(1 + Math.min(Math.abs(self.getVelocity()) / 400, 4));
        }
      });
    });

    // manifesto words scrub
    var mwords = gsap.utils.toArray('.manifesto .w');
    if (mwords.length) {
      gsap.to(mwords, {
        color: '#0a0a0c',
        stagger: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.manifesto',
          start: 'top 70%',
          end: 'bottom 75%',
          scrub: true
        }
      });
    }

    // stat counters
    gsap.utils.toArray('.stat2__n').forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-to'));
      var pre = el.getAttribute('data-pre') || '';
      var suf = el.getAttribute('data-suf') || '';
      var sep = el.getAttribute('data-sep') === '1';
      var o = {
        v: 0
      };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: function () {
          gsap.to(o, {
            v: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: function () {
              var val = Math.round(o.v);
              var s = sep ? val.toLocaleString('en-US') : String(val);
              el.innerHTML = pre + s + '<span class="u">' + suf + '</span>';
            }
          });
        }
      });
    });

    // parallax images
    gsap.utils.toArray('.why__media img').forEach(function (img) {
      gsap.fromTo(img, {
        yPercent: -10,
        scale: 1.12
      }, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentNode,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // why text rise
    gsap.utils.toArray('.why__row .why__text').forEach(function (el) {
      gsap.from(el.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%'
        }
      });
    });

    // programs horizontal pin (desktop only)
    var mm = gsap.matchMedia();
    mm.add('(min-width: 1001px)', function () {
      var track = document.querySelector('.progx__track');
      var pin = document.querySelector('.progx__pin');
      if (!track || !pin) return;
      var amount = function () {
        return track.scrollWidth - window.innerWidth + 56;
      };
      gsap.to(track, {
        x: function () {
          return -amount();
        },
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: function () {
            return '+=' + amount();
          },
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    });

    // refresh after images load
    window.addEventListener('load', function () {
      ScrollTrigger.refresh();
    });
  }

  /* ============================================================
     BOOT
     ============================================================ */
  function boot() {
    initLenis();
    initNav();
    initCursor();
    initMagnetic();
    initFields();
    initScroll();
    revealHero(); // loader removed — hero reveals immediately on load
    // safety: if GSAP missing, ensure hero words visible
    if (!hasGSAP) document.querySelectorAll('.word__in').forEach(function (w) {
      w.style.transform = 'none';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);else boot();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "training-site/landing.js", error: String((e && e.message) || e) }); }

// training-site/site.js
try { (() => {
/* Colaberry Training Site — shared chrome + interactions.
   Injects the header and footer (single source across all pages),
   wires the mobile drawer, and highlights the active nav link. */
(function () {
  var LOGO = '../assets/logo/colaberry-horizontal.png';
  var LOGO_W = '../assets/logo/colaberry-horizontal-white.png';
  var APPLY = 'https://app.colaberry.com/account/login';

  // dropdown menus: [label, [[href, icon, text], ...]]
  var menus = [['Courses', [['data-analytics.html', 'ri-bar-chart-box-line', 'Data Analytics'], ['data-science.html', 'ri-flask-line', 'Data Science'], ['job-readiness.html', 'ri-briefcase-4-line', 'Job Readiness']]], ['About', [['our-story.html', 'ri-book-2-line', 'Our Story'], ['how-it-works.html', 'ri-route-line', 'How It Works'], ['mentorship.html', 'ri-user-star-line', 'Mentorship'], ['success-stories.html', 'ri-trophy-line', 'Success Stories'], ['reviews.html', 'ri-star-smile-line', 'Reviews'], ['contact.html', 'ri-mail-line', 'Contact Us']]], ['Resources', [['blog.html', 'ri-article-line', 'Blog'], ['events.html', 'ri-calendar-event-line', 'Events'], ['faq.html', 'ri-question-line', 'FAQs']]]];
  // plain links
  var links = [['pricing.html', 'Pricing'], ['hire-our-grads.html', 'Hire Our Grads']];
  var path = location.pathname.split('/').pop() || 'index.html';
  function act(href) {
    return href === path ? ' is-active' : '';
  }

  /* ---------- HEADER ---------- */
  var navHTML = menus.map(function (m) {
    var anyActive = m[1].some(function (i) {
      return i[0] === path;
    }) ? ' is-active' : '';
    var pop = m[1].map(function (i) {
      return '<a class="' + (i[0] === path ? 'is-active' : '') + '" href="' + i[0] + '"><span class="cb-i"><i class="' + i[1] + '"></i></span> ' + i[2] + '</a>';
    }).join('');
    return '<div class="hd__menu"><button class="hd__link' + anyActive + '" type="button">' + m[0] + ' <span class="cb-i"><i class="ri-arrow-down-s-line"></i></span></button><div class="hd__pop">' + pop + '</div></div>';
  }).join('') + links.map(function (l) {
    return '<a class="hd__link' + act(l[0]) + '" href="' + l[0] + '">' + l[1] + '</a>';
  }).join('');
  var header = '' + '<header class="hd"><div class="wrap hd__in">' + '<a class="hd__logo" href="index.html"><img src="' + LOGO + '" alt="Colaberry"></a>' + '<nav class="hd__nav" aria-label="Primary">' + navHTML + '</nav>' + '<div class="hd__spacer"></div>' + '<div class="hd__actions">' + '<a class="cb-btn cb-btn--ghost cb-btn--sm" href="' + APPLY + '">Log in</a>' + '<a class="cb-btn cb-btn--primary cb-btn--sm" href="' + APPLY + '">Apply Now</a>' + '<button class="iconbtn hd__burger" id="hdBurger" aria-label="Open menu" style="width:42px;height:42px;border:none;border-radius:50%;background:var(--surface-sunken);cursor:pointer;font-size:20px"><span class="cb-i"><i class="ri-menu-line"></i></span></button>' + '</div>' + '</div></header>';

  /* ---------- DRAWER ---------- */
  var drawerLinks = '<a class="d-link' + act('index.html') + '" href="index.html">Home</a>' + menus.map(function (m) {
    return '<div class="d-group">' + m[0] + '</div>' + m[1].map(function (i) {
      return '<a class="d-link' + act(i[0]) + '" href="' + i[0] + '">' + i[2] + '</a>';
    }).join('');
  }).join('') + '<div class="d-group">More</div>' + links.map(function (l) {
    return '<a class="d-link' + act(l[0]) + '" href="' + l[0] + '">' + l[1] + '</a>';
  }).join('');
  var drawer = '<div class="scrim" id="scrim"></div>' + '<aside class="drawer" id="drawer" aria-label="Mobile menu">' + '<div class="drawer__top"><img src="' + LOGO + '" alt="Colaberry"><button class="iconbtn" id="drawerClose" aria-label="Close" style="width:40px;height:40px;border:none;border-radius:50%;background:var(--surface-sunken);cursor:pointer;font-size:20px"><span class="cb-i"><i class="ri-close-line"></i></span></button></div>' + drawerLinks + '<a class="cb-btn cb-btn--primary cb-btn--full" style="margin-top:16px" href="' + APPLY + '">Apply Now</a>' + '</aside>';

  /* ---------- FOOTER ---------- */
  var footer = '' + '<footer class="ft"><div class="wrap">' + '<div class="ft__grid">' + '<div class="ft__logo"><img src="' + LOGO_W + '" alt="Colaberry">' + '<p class="muted" style="max-width:34ch;font-size:14px;margin:0">Colaberry School of Data and AI. Reskilling careers since 2012.</p>' + '<div class="ft__social">' + '<a href="https://www.facebook.com/colaberryschoolofdataanalytics/" aria-label="Facebook"><span class="cb-i"><i class="ri-facebook-fill"></i></span></a>' + '<a href="https://twitter.com/ColaberrySODA" aria-label="Twitter"><span class="cb-i"><i class="ri-twitter-x-fill"></i></span></a>' + '<a href="https://www.instagram.com/colaberryschool/" aria-label="Instagram"><span class="cb-i"><i class="ri-instagram-line"></i></span></a>' + '<a href="https://www.youtube.com/channel/UCb23caPCK7xW8roOkr_iKRA" aria-label="YouTube"><span class="cb-i"><i class="ri-youtube-fill"></i></span></a>' + '<a href="https://www.linkedin.com/company/colaberry-school-of-data-analytics/" aria-label="LinkedIn"><span class="cb-i"><i class="ri-linkedin-box-fill"></i></span></a>' + '</div>' + '</div>' + '<div><h5>Courses</h5><a href="data-analytics.html">Data Analytics</a><a href="data-science.html">Data Science</a><a href="job-readiness.html">Job Readiness</a></div>' + '<div><h5>Why Colaberry</h5><a href="our-story.html">Our Story</a><a href="how-it-works.html">How It Works</a><a href="mentorship.html">Mentorship</a><a href="success-stories.html">Success Stories</a><a href="reviews.html">Reviews</a></div>' + '<div><h5>Resources</h5><a href="blog.html">Blog</a><a href="events.html">Events</a><a href="pricing.html">Pricing</a><a href="faq.html">FAQs</a><a href="hire-our-grads.html">Hire Our Grads</a><a href="contact.html">Contact Us</a></div>' + '</div>' + '<div class="ft__bottom"><span>© 2026 · Colaberry School of Data and AI is operated by Colaberry Inc.</span><span class="links"><a href="#">Privacy</a><a href="#">Terms</a></span></div>' + '</div></footer>';

  /* ---------- MOUNT ---------- */
  var hMount = document.getElementById('site-header');
  var fMount = document.getElementById('site-footer');
  if (hMount) hMount.outerHTML = header + drawer;
  if (fMount) fMount.outerHTML = footer;
  function setDrawer(open) {
    var d = document.getElementById('drawer'),
      s = document.getElementById('scrim');
    if (!d) return;
    d.classList.toggle('is-open', open);
    s.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  var b = document.getElementById('hdBurger');
  if (b) b.addEventListener('click', function () {
    setDrawer(true);
  });
  var c = document.getElementById('drawerClose');
  if (c) c.addEventListener('click', function () {
    setDrawer(false);
  });
  var s = document.getElementById('scrim');
  if (s) s.addEventListener('click', function () {
    setDrawer(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setDrawer(false);
  });

  // Dropdowns: hover-intent on pointer devices (forgiving open/close so the
  // cursor can travel to the menu without it snapping shut) + click-to-toggle
  // for touch/keyboard. Pure-CSS :hover still works as a no-JS fallback.
  var closeTimer = null;
  function closeAll() {
    document.querySelectorAll('.hd__menu').forEach(function (m) {
      m.classList.remove('is-open');
    });
  }
  function openOnly(menu) {
    closeAll();
    menu.classList.add('is-open');
  }
  document.querySelectorAll('.hd__menu').forEach(function (menu) {
    var btn = menu.querySelector('.hd__link');
    // hover-intent
    menu.addEventListener('mouseenter', function () {
      clearTimeout(closeTimer);
      openOnly(menu);
    });
    menu.addEventListener('mouseleave', function () {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        menu.classList.remove('is-open');
      }, 260);
    });
    // click / tap toggles (and works without a pointer)
    if (btn) btn.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = menu.classList.contains('is-open');
      closeAll();
      if (!isOpen) menu.classList.add('is-open');
    });
  });
  // close when clicking elsewhere or pressing Escape
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.hd__menu')) closeAll();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "training-site/site.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/home.jsx
try { (() => {
/* Colaberry marketing site — Home view */
const {
  Button: HButton,
  Card: HCard,
  Badge: HBadge,
  Avatar: HAvatar
} = window.ColaberryDesignSystem_098454;
function Photo({
  label,
  tone = 'blue',
  tall = false,
  children
}) {
  const grad = {
    blue: 'linear-gradient(135deg, var(--blue-400), var(--blue-700))',
    green: 'linear-gradient(135deg, var(--green-400), var(--green-700))',
    red: 'linear-gradient(135deg, var(--red-400), var(--red-700))',
    mix: 'linear-gradient(135deg, var(--blue-500), var(--green-600))'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    className: "cbsite-photo",
    style: {
      background: grad,
      minHeight: tall ? 380 : 220
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "cbsite-photo__tag"
  }, /*#__PURE__*/React.createElement(I, {
    n: "image"
  }), label));
}
function HomeView({
  go
}) {
  const programs = [{
    tone: 'blue',
    tag: '12 weeks · Beginner-friendly',
    title: 'Data Analytics',
    desc: 'Master SQL, reporting and data storytelling with dashboards. No degree required.',
    icon: 'bar-chart-3'
  }, {
    tone: 'green',
    tag: '24 weeks · Intermediate',
    title: 'Data Science',
    desc: 'Python, machine learning and the statistics behind modern AI systems.',
    icon: 'brain-circuit'
  }, {
    tone: 'red',
    tag: 'Add-on · 1 year support',
    title: 'Career Accelerator',
    desc: 'Mentorship, interview prep and job coaching until you are hired.',
    icon: 'rocket'
  }];
  const steps = [{
    n: '01',
    icon: 'phone-call',
    h: 'Talk to admissions',
    p: 'No tests. Discuss your goals and flexible payment options.'
  }, {
    n: '02',
    icon: 'laptop',
    h: 'Learn by doing',
    p: 'Instructor-led, project-based lessons with real-world data.'
  }, {
    n: '03',
    icon: 'badge-check',
    h: 'Get hired',
    p: 'Build a portfolio, earn badges, and land a data role.'
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "cbsite-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-hero__copy"
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "green",
    dot: true
  }, "Texas Workforce Commission approved"), /*#__PURE__*/React.createElement("h1", null, "Future-proof your career in ", /*#__PURE__*/React.createElement("span", {
    className: "cb-grad"
  }, "data & AI")), /*#__PURE__*/React.createElement("p", null, "Colaberry turns ambition into a data career \u2014 through hands-on projects, mentorship, and a community built on tenacity. No degree required."), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-hero__cta"
  }, /*#__PURE__*/React.createElement(HButton, {
    size: "lg",
    onClick: () => go('enroll')
  }, "Apply now"), /*#__PURE__*/React.createElement(HButton, {
    size: "lg",
    variant: "outline",
    onClick: () => go('program'),
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right"
    })
  }, "See the program")), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-avatar-group"
  }, /*#__PURE__*/React.createElement(HAvatar, {
    name: "Mika Rivera",
    size: "sm"
  }), /*#__PURE__*/React.createElement(HAvatar, {
    name: "Owen Brooks",
    size: "sm"
  }), /*#__PURE__*/React.createElement(HAvatar, {
    name: "Ada Lovelace",
    size: "sm"
  }), /*#__PURE__*/React.createElement(HAvatar, {
    name: "Sam Okafor",
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "5,000+"), " careers changed since 2012"))), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-hero__media"
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Students collaborating",
    tone: "mix",
    tall: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-floatchip cbsite-floatchip--tl"
  }, /*#__PURE__*/React.createElement(I, {
    n: "trending-up"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "$74k"), /*#__PURE__*/React.createElement("span", null, "median starting salary"))), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-floatchip cbsite-floatchip--br"
  }, /*#__PURE__*/React.createElement(I, {
    n: "users"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "49"), /*#__PURE__*/React.createElement("span", null, "countries served")))))), /*#__PURE__*/React.createElement("section", {
    className: "cbsite-stats"
  }, [['5,000+', 'Graduates placed'], ['2012', 'Founded for veterans'], ['1:1', 'Mentor support'], ['12 wks', 'To job-ready']].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cbsite-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-stat__n"
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-stat__l"
  }, s[1])))), /*#__PURE__*/React.createElement("section", {
    className: "cbsite-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-section__head"
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "blue"
  }, "Programs"), /*#__PURE__*/React.createElement("h2", null, "Two proven paths into tech"), /*#__PURE__*/React.createElement("p", null, "Both bootcamps blend technical depth with the human skills employers actually hire for.")), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-prog"
  }, programs.map((p, i) => /*#__PURE__*/React.createElement(HCard, {
    key: i,
    hoverable: true,
    media: /*#__PURE__*/React.createElement("div", {
      className: "cbsite-prog__media",
      style: {
        ['--g']: `var(--${p.tone}-500)`
      }
    }, /*#__PURE__*/React.createElement(I, {
      n: p.icon
    }))
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: p.tone
  }, p.tag), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.desc), /*#__PURE__*/React.createElement(HButton, {
    variant: "link",
    onClick: () => go('program'),
    trailingIcon: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right"
    })
  }, "Course details"))))), /*#__PURE__*/React.createElement("section", {
    className: "cbsite-section cbsite-section--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-section__head"
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "green"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", null, "From day one to hired")), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cbsite-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-step__icon"
  }, /*#__PURE__*/React.createElement(I, {
    n: s.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "cbsite-step__n"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p))))), /*#__PURE__*/React.createElement("section", {
    className: "cbsite-quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-quote__mark"
  }, /*#__PURE__*/React.createElement(I, {
    n: "quote"
  })), /*#__PURE__*/React.createElement("blockquote", null, "I had no tech experience before Colaberry. I now lead the team of mentors serving trainees in over 49 countries. This program is a seed \u2014 you decide how far it grows."), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-quote__by"
  }, /*#__PURE__*/React.createElement(HAvatar, {
    name: "Mika Rivera",
    size: "lg",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Mika Rivera"), /*#__PURE__*/React.createElement("span", null, "Program Success Manager \xB7 Data Analytics grad")))), /*#__PURE__*/React.createElement("section", {
    className: "cbsite-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-cta__inner"
  }, /*#__PURE__*/React.createElement("h2", null, "Your data career starts with one conversation."), /*#__PURE__*/React.createElement("p", null, "Everyone with a high-school diploma or GED is welcome. Scholarships and flexible payment plans available."), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-cta__btns"
  }, /*#__PURE__*/React.createElement(HButton, {
    size: "lg",
    tone: "green",
    onClick: () => go('enroll')
  }, "Apply now"), /*#__PURE__*/React.createElement(HButton, {
    size: "lg",
    variant: "outline",
    onClick: () => go('enroll')
  }, "Download catalog")))));
}
Object.assign(window, {
  HomeView,
  Photo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/parts.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Colaberry marketing site — shared parts: Logo, Header, Footer, helpers.
   Exposes to window for the other script files. */
const {
  Button: CBButton,
  Avatar: CBAvatar,
  Badge: CBBadge
} = window.ColaberryDesignSystem_098454;

/* React-safe Lucide icon. React owns the <span>; Lucide mutates only the
   inner <i>→<svg>, so re-renders never touch the swapped node. Size = font-size
   (1em), color = currentColor — both driven by CSS/parent. */
function I({
  n,
  s,
  c,
  className = '',
  style
}) {
  const st = {
    fontSize: s ? s + 'px' : undefined,
    color: c,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", {
    className: 'cb-i ' + className,
    style: st,
    dangerouslySetInnerHTML: {
      __html: `<i data-lucide="${n}"></i>`
    }
  });
}
// Back-compat alias
function Icon({
  name,
  size,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(I, _extends({
    n: name,
    s: size,
    style: style
  }, rest));
}
function Logo({
  height = 34,
  variant = 'default'
}) {
  const src = variant === 'white' ? '../../assets/logo/colaberry-horizontal-white.png?v=2' : '../../assets/logo/colaberry-horizontal.png';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Colaberry",
    style: {
      height,
      display: 'block'
    }
  });
}
const NAV = [{
  label: 'Programs',
  view: 'program'
}, {
  label: 'Outcomes',
  view: 'home'
}, {
  label: 'Scholarships',
  view: 'home'
}, {
  label: 'About',
  view: 'home'
}];
function Header({
  go,
  current
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.cbsite-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 8);
    const target = el || window;
    target.addEventListener('scroll', onScroll);
    return () => target.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "cbsite-header",
    "data-scrolled": scrolled
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cbsite-logo",
    onClick: () => go('home')
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("nav", {
    className: "cbsite-nav"
  }, NAV.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "cbsite-nav__link",
    onClick: () => go(n.view)
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-header__actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cbsite-nav__link cbsite-nav__link--ghost",
    onClick: () => go('enroll')
  }, "Sign in"), /*#__PURE__*/React.createElement(CBButton, {
    size: "sm",
    onClick: () => go('enroll')
  }, "Apply now"))));
}
function Footer({
  go
}) {
  const cols = [{
    h: 'Programs',
    items: ['Data Analytics', 'Data Science', 'Intro Seminar', 'Career Accelerator']
  }, {
    h: 'School',
    items: ['About us', 'Outcomes', 'Mentors', 'Reviews']
  }, {
    h: 'Support',
    items: ['Scholarships', 'Payment options', 'FAQ', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "cbsite-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-footer__brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 32
  }), /*#__PURE__*/React.createElement("p", null, "Build amazing, local, diverse, and job-ready talent in Data Analytics & Data Science. Since 2012."), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-footer__loc"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), " Plano, TX"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), " Boston, MA"))), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-footer__cols"
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cbsite-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, c.h), c.items.map((it, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    onClick: () => go('home')
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-footer__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \xB7 Colaberry School of Data and AI is operated by Colaberry Inc. \xB7 Texas Workforce Commission approved"), /*#__PURE__*/React.createElement("span", {
    className: "cbsite-footer__legal"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home')
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home')
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home')
  }, "Accreditation"))));
}
Object.assign(window, {
  Icon,
  I,
  Logo,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/program-enroll.jsx
try { (() => {
/* Colaberry marketing site — Program detail + Enroll views */
const {
  Button: PButton,
  Card: PCard,
  Badge: PBadge,
  Input: PInput,
  Checkbox: PCheckbox
} = window.ColaberryDesignSystem_098454;
function ProgramView({
  go
}) {
  const [open, setOpen] = React.useState(0);
  const modules = [{
    h: 'Foundations of Data Analytics',
    d: 'How data drives decisions, the analyst workflow, and reading real datasets.',
    wk: 'Weeks 1–2'
  }, {
    h: 'SQL & SQL Server',
    d: 'Querying, joins, aggregation and building reporting tables with SSDT.',
    wk: 'Weeks 3–6'
  }, {
    h: 'Reporting with SSRS & SSIS',
    d: 'ETL pipelines, report architecture and automated delivery.',
    wk: 'Weeks 7–9'
  }, {
    h: 'Dashboards & Storytelling',
    d: 'Turn analysis into compelling dashboards and a portfolio project.',
    wk: 'Weeks 10–12'
  }];
  const faqs = [{
    q: 'Do I need a degree or experience?',
    a: 'No. Everyone with a high-school diploma or GED is welcome — there are no tests in admissions.'
  }, {
    q: 'Is it online or in person?',
    a: 'Both. Join live online from anywhere, or on campus in Plano, TX. Sessions are instructor-led.'
  }, {
    q: 'How do I pay for it?',
    a: 'Scholarships, military grants, loan options and Income Share Agreements are available to fit your situation.'
  }, {
    q: 'What happens after I finish?',
    a: 'The Career Accelerator adds mentorship, interview prep and job coaching with one year of on-the-job support.'
  }];
  const tools = ['SQL Server', 'SSRS', 'SSIS', 'Power BI', 'Excel', 'Git'];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-prog-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-prog-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-bc"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    }
  }, "Home"), " ", /*#__PURE__*/React.createElement(I, {
    n: "chevron-right"
  }), " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    }
  }, "Programs"), " ", /*#__PURE__*/React.createElement(I, {
    n: "chevron-right"
  }), " ", /*#__PURE__*/React.createElement("span", {
    "aria-current": "page"
  }, "Data Analytics")), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-prog-hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PBadge, {
    tone: "blue",
    dot: true
  }, "Now enrolling \xB7 Spring cohort"), /*#__PURE__*/React.createElement("h1", null, "Data Analytics Bootcamp"), /*#__PURE__*/React.createElement("p", null, "Become job-ready in 12 weeks. Learn the exact SQL, reporting and dashboard skills employers hire for \u2014 guided by industry mentors, start to finish."), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "clock"
  }), " 12 weeks"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "monitor"
  }), " Online or Plano, TX"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "signal"
  }), " Beginner-friendly"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I, {
    n: "globe"
  }), " 49 countries")), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-prog-hero__cta"
  }, /*#__PURE__*/React.createElement(PButton, {
    size: "lg",
    onClick: () => go('enroll')
  }, "Apply for this cohort"), /*#__PURE__*/React.createElement(PButton, {
    size: "lg",
    variant: "ghost",
    onClick: () => go('enroll'),
    leadingIcon: /*#__PURE__*/React.createElement(I, {
      n: "download"
    })
  }, "Syllabus"))), /*#__PURE__*/React.createElement(PCard, {
    elevation: "md",
    padded: true,
    className: "cbsite-pricecard"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbsite-pricecard__label"
  }, "Tuition from"), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-pricecard__price"
  }, "$1,999", /*#__PURE__*/React.createElement("small", null, "/ session")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I, {
    n: "check"
  }), /*#__PURE__*/React.createElement("span", null, "Live instructor-led classes")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I, {
    n: "check"
  }), /*#__PURE__*/React.createElement("span", null, "1:1 mentorship")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I, {
    n: "check"
  }), /*#__PURE__*/React.createElement("span", null, "Portfolio project & badge")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I, {
    n: "check"
  }), /*#__PURE__*/React.createElement("span", null, "Scholarships available"))), /*#__PURE__*/React.createElement(PButton, {
    fullWidth: true,
    onClick: () => go('enroll')
  }, "Apply now"), /*#__PURE__*/React.createElement("span", {
    className: "cbsite-pricecard__note"
  }, "Deferred & ISA payment options available"))))), /*#__PURE__*/React.createElement("section", {
    className: "cbsite-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-section__head cbsite-section__head--left"
  }, /*#__PURE__*/React.createElement(PBadge, {
    tone: "green"
  }, "Curriculum"), /*#__PURE__*/React.createElement("h2", null, "What you'll learn")), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-modules"
  }, modules.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'cbsite-module' + (open === i ? ' is-open' : '')
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cbsite-module__top",
    "aria-expanded": open === i,
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbsite-module__wk"
  }, m.wk), /*#__PURE__*/React.createElement("h3", null, m.h), /*#__PURE__*/React.createElement(I, {
    n: open === i ? 'minus' : 'plus'
  })), open === i && /*#__PURE__*/React.createElement("p", null, m.d)))), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-tools"
  }, /*#__PURE__*/React.createElement("span", null, "Tools you'll master"), /*#__PURE__*/React.createElement("div", null, tools.map((t, i) => /*#__PURE__*/React.createElement(PBadge, {
    key: i,
    outline: true
  }, t))))), /*#__PURE__*/React.createElement("section", {
    className: "cbsite-section cbsite-section--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-section__head cbsite-section__head--left"
  }, /*#__PURE__*/React.createElement(PBadge, {
    tone: "blue"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", null, "Questions, answered")), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-faq"
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "cbsite-faqitem"
  }, /*#__PURE__*/React.createElement("summary", null, f.q, /*#__PURE__*/React.createElement(I, {
    n: "plus"
  })), /*#__PURE__*/React.createElement("p", null, f.a))))), /*#__PURE__*/React.createElement("section", {
    className: "cbsite-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-cta__inner"
  }, /*#__PURE__*/React.createElement("h2", null, "Ready to start your data career?"), /*#__PURE__*/React.createElement("p", null, "Apply in minutes. Our admissions team will help you find the right path and payment plan."), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-cta__btns"
  }, /*#__PURE__*/React.createElement(PButton, {
    size: "lg",
    tone: "green",
    onClick: () => go('enroll')
  }, "Apply now")))));
}
function EnrollView({
  go
}) {
  const [program, setProgram] = React.useState('analytics');
  const [done, setDone] = React.useState(false);
  const progs = {
    analytics: {
      name: 'Data Analytics',
      price: '$1,999',
      tone: 'blue',
      len: '12 weeks'
    },
    science: {
      name: 'Data Science',
      price: '$4,500',
      tone: 'green',
      len: '24 weeks'
    }
  };
  const p = progs[program];
  if (done) {
    return /*#__PURE__*/React.createElement("main", {
      className: "cbsite-enroll"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cbsite-success"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cbsite-success__icon"
    }, /*#__PURE__*/React.createElement(I, {
      n: "check"
    })), /*#__PURE__*/React.createElement("h1", null, "You're on the list!"), /*#__PURE__*/React.createElement("p", null, "Thanks for applying to the ", /*#__PURE__*/React.createElement("strong", null, p.name), " program. An admissions advisor will reach out within one business day to talk goals and payment options."), /*#__PURE__*/React.createElement("div", {
      className: "cbsite-success__btns"
    }, /*#__PURE__*/React.createElement(PButton, {
      onClick: () => {
        setDone(false);
        go('home');
      }
    }, "Back to home"), /*#__PURE__*/React.createElement(PButton, {
      variant: "outline",
      onClick: () => go('program')
    }, "Explore the curriculum"))));
  }
  return /*#__PURE__*/React.createElement("main", {
    className: "cbsite-enroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbsite-enroll__grid"
  }, /*#__PURE__*/React.createElement("form", {
    className: "cbsite-form",
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Apply to Colaberry"), /*#__PURE__*/React.createElement("p", {
    className: "cbsite-form__sub"
  }, "No tests, no degree required. Takes about 2 minutes."), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-form__choice"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbsite-form__legend"
  }, "Choose your program"), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-choice"
  }, Object.entries(progs).map(([k, v]) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: k,
    className: 'cbsite-choice__opt' + (program === k ? ' is-sel' : ''),
    onClick: () => setProgram(k)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbsite-choice__check"
  }, /*#__PURE__*/React.createElement(I, {
    n: "check"
  })), /*#__PURE__*/React.createElement("strong", null, v.name), /*#__PURE__*/React.createElement("span", null, v.len, " \xB7 from ", v.price))))), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-form__row"
  }, /*#__PURE__*/React.createElement(PInput, {
    label: "First name",
    placeholder: "Ada",
    required: true
  }), /*#__PURE__*/React.createElement(PInput, {
    label: "Last name",
    placeholder: "Lovelace",
    required: true
  })), /*#__PURE__*/React.createElement(PInput, {
    label: "Email",
    type: "email",
    placeholder: "ada@email.com",
    required: true
  }), /*#__PURE__*/React.createElement(PInput, {
    label: "Phone",
    type: "tel",
    placeholder: "(972) 992-1024",
    helperText: "We'll only call about your application."
  }), /*#__PURE__*/React.createElement(PInput, {
    label: "Why do you want to learn data?",
    multiline: true,
    rows: 3,
    placeholder: "A sentence or two about your goals\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-form__checks"
  }, /*#__PURE__*/React.createElement(PCheckbox, {
    label: "I'd like to hear about scholarships and upcoming cohorts",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(PCheckbox, {
    label: "I agree to be contacted by Colaberry's admissions team",
    required: true
  })), /*#__PURE__*/React.createElement(PButton, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Submit application")), /*#__PURE__*/React.createElement("aside", {
    className: "cbsite-summary"
  }, /*#__PURE__*/React.createElement(PCard, {
    elevation: "md",
    padded: true
  }, /*#__PURE__*/React.createElement(PBadge, {
    tone: p.tone,
    dot: true
  }, "Selected program"), /*#__PURE__*/React.createElement("h3", null, p.name), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-summary__price"
  }, p.price, /*#__PURE__*/React.createElement("small", null, "from / session")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I, {
    n: "calendar"
  }), /*#__PURE__*/React.createElement("span", null, p.len, ", instructor-led")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I, {
    n: "users"
  }), /*#__PURE__*/React.createElement("span", null, "1:1 mentorship included")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I, {
    n: "award"
  }), /*#__PURE__*/React.createElement("span", null, "Verifiable digital badge")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I, {
    n: "shield-check"
  }), /*#__PURE__*/React.createElement("span", null, "1-year job support")))), /*#__PURE__*/React.createElement("div", {
    className: "cbsite-summary__trust"
  }, /*#__PURE__*/React.createElement(I, {
    n: "heart-handshake"
  }), /*#__PURE__*/React.createElement("p", null, "Built on inclusivity since 2012 \u2014 proudly supporting veterans and career-changers.")))));
}
Object.assign(window, {
  ProgramView,
  EnrollView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/program-enroll.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
