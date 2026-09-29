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
    paths: [
      { n: '01', t: 'Working professionals', d: 'Use AI at work, starting now', href: 'working-professionals.html' },
      { n: '02', t: 'Beginners & career switchers', d: 'Start AI from the ground up', href: 'beginners-career-switchers.html' },
      { n: '03', t: 'Builders & founders', d: 'Turn your idea into a system', href: 'builders-founders.html' }
    ],
    aside: [
      { t: 'How it works', d: 'Learn, build, deploy', href: HOME + '#how' },
      { t: 'Anthropic certification', d: 'Earn a verifiable credential', href: HOME + '#partner' },
      { t: 'Graduate stories', d: 'Careers changed, in their words', href: HOME + '#reviews' }
    ],
    resources: [
      { k: 'Watch, read & listen', items: [
        { id: 'shorts', t: 'Shorts', d: 'Quick AI lessons in under 60 seconds', href: 'shorts.html' },
        { id: 'blog', t: 'Blog', d: 'Guides and field notes', href: 'blog.html' },
        { id: 'podcast', t: 'Podcast', d: 'Conversations with AI builders', href: 'podcasts.html' },
        { id: 'book', t: 'Trust Before Intelligence', d: 'The book by founder Ram Katamaraja', href: 'https://trustbeforeintelligence.ai/', ext: true }
      ] },
      { k: 'Get answers', items: [
        { id: 'knowledge', t: 'Knowledge Base', d: 'Concepts, terms and how-tos', href: LIVE + '/knowledge', ext: true },
        { id: 'faq', t: 'FAQ', d: 'Membership, pricing, schedule', href: 'faq.html' }
      ] }
    ],
    about: [
      { id: 'our-story', t: 'Our Story', d: 'Helping people build with AI since 2012', href: 'our-story.html' },
      { id: 'partner', t: 'Anthropic partnership', d: 'Member, Claude Partner Network', href: HOME + '#partner' },
      { id: 'contact', t: 'Contact', d: 'Talk to our admissions team', href: 'contact.html' }
    ],
    projects: { id: 'student-projects', t: 'Student Projects', href: 'student-projects.html' },
    events: { id: 'events', t: 'Events', href: 'events.html' }
  };
  var GROUP = { accelerator: 'programs', 'our-story': 'about', contact: 'about', blog: 'resources', podcast: 'resources', shorts: 'resources', faq: 'resources', events: 'events', 'student-projects': 'student-projects' }[page] || '';

  function spark(size) {
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" aria-hidden="true">'
      + '<g stroke="#fff" stroke-width="2.4" stroke-linecap="round">'
      + '<line x1="12" y1="4" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="20"/>'
      + '<line x1="4" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="20" y2="12"/>'
      + '<line x1="6.3" y1="6.3" x2="9.5" y2="9.5"/><line x1="14.5" y1="14.5" x2="17.7" y2="17.7"/>'
      + '<line x1="17.7" y1="6.3" x2="14.5" y2="9.5"/><line x1="9.5" y1="14.5" x2="6.3" y2="17.7"/></g></svg>';
  }
  function cur(id) { return id && id === page ? ' aria-current="page"' : ''; }
  function row(it) { return '<a class="snav__row" href="' + it.href + '"' + (it.ext ? ' data-ext' : '') + cur(it.id) + '><b>' + it.t + '</b><span>' + it.d + '</span></a>'; }
  function dd(id, label, panel) {
    return '<li class="snav__item" data-open="false"' + (GROUP === id ? ' data-current="true"' : '') + '>'
      + '<button class="snav__link" type="button" aria-expanded="false" aria-controls="snav-p-' + id + '">' + label + '<span class="snav__chev" aria-hidden="true"></span></button>'
      + '<div class="snav__panel" id="snav-p-' + id + '">' + panel + '</div></li>';
  }
  function plain(it) { return '<li class="snav__item"><a class="snav__link" href="' + it.href + '"' + (GROUP === it.id ? ' aria-current="page"' : '') + '>' + it.t + '</a></li>'; }
  function mlink(it) {
    return '<a href="' + it.href + '"' + cur(it.id) + '><span>' + it.t + (it.d ? '<small>' + it.d + '</small>' : '') + '</span>'
      + '<span class="cb-i"><i class="' + (it.ext ? 'ri-arrow-right-up-line' : 'ri-arrow-right-line') + '"></i></span></a>';
  }

  var programs = '<div class="snav__card snav__card--programs"><div class="snav__paths"><span class="snav__kicker">AI Systems Architect Accelerator</span>'
    + N.paths.map(function (p) { return '<a class="snav__path" href="' + p.href + '"><i>' + p.n + '</i><b>' + p.t + '</b><span>' + p.d + '</span></a>'; }).join('')
    + '</div><div class="snav__aside"><span class="snav__kicker">Inside the program</span>' + N.aside.map(row).join('')
    + '<div class="snav__price">Membership from <b>$149/month</b> · cancel anytime</div></div></div>';
  var resources = '<div class="snav__card snav__card--cols">' + N.resources.map(function (c) {
    return '<div><span class="snav__kicker">' + c.k + '</span>' + c.items.map(row).join('') + '</div>'; }).join('') + '</div>';
  var about = '<div class="snav__card">' + N.about.map(row).join('') + '</div>';
  var allRes = [].concat(N.resources[0].items, N.resources[1].items).map(function (it) { return { id: it.id, t: it.t, href: it.href, ext: it.ext }; });

  var NETWORK = [
    { t: 'AI Accelerator Program', href: HOME, current: true },
    { t: 'For Enterprise AI', href: 'https://enterprise.colaberry.ai/', ext: true },
    { t: 'Tech on Colaberry', href: 'https://colaberry.ai', ext: true }
  ];
  var VIBING = { id: 'ai-dev-wire', t: "What's Vibing", href: LIVE + '/ai-dev-wire' };
  var ubarHTML = '<div class="snav-ubar"><div class="snav-ubar__in">'
    + '<a class="snav-ubar__vibe" href="' + VIBING.href + '"><span class="snav-ubar__dot" aria-hidden="true"></span>' + VIBING.t + '<span class="snav-ubar__vibe-d">AI dev news</span><span class="cb-i"><i class="ri-arrow-right-line"></i></span></a>'
    + '<nav class="snav-ubar__sites" aria-label="Colaberry sites">' + NETWORK.map(function (n) {
      return '<a href="' + n.href + '"' + (n.current ? ' aria-current="true"' : ' target="_blank" rel="noopener"') + '>' + n.t
        + (n.ext ? '<span class="cb-i"><i class="ri-arrow-right-up-line"></i></span>' : '') + '</a>'; }).join('') + '</nav>'
    + '</div></div>';

  var navHTML = ubarHTML +
    '<header class="snav snav--ubar" id="siteNav" data-scrolled="false">'
    + '<div class="snav__in">'
    + '<div class="snav__brand"><a class="snav__logo" href="' + HOME + '" aria-label="Colaberry home"><img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry"></a>'
    + '<a class="snav-partner" href="' + HOME + '#partner" aria-label="Colaberry is an Anthropic Partner, member of the Claude Partner Network">'
    + '<span class="snav-partner__ic">' + spark(15) + '</span>'
    + '<span class="snav-partner__tx"><small>Member</small><b>Anthropic Partner</b></span></a></div>'
    + '<nav aria-label="Primary" style="margin:0 auto"><ul class="snav__links">'
    + dd('programs', 'Programs', programs) + plain(N.projects) + plain(N.events) + dd('resources', 'Resources', resources) + dd('about', 'About', about)
    + '</ul></nav>'
    + '<div class="snav__meta">'
    + '<a class="snav__login" href="' + LOGIN + '"><span class="cb-i"><i class="ri-login-box-line"></i></span>Log In</a>'
    + '<a class="snav__cta" href="' + START + '"><span class="snav__cta-l">Start learning free</span><span class="snav__cta-s">Start free</span><span class="cb-i"><i class="ri-arrow-right-line"></i></span></a>'
    + '<button class="snav__burger" id="siteBurger" aria-label="Open menu" aria-expanded="false"><span class="cb-i"><i class="ri-menu-line"></i></span></button>'
    + '</div></div></header>'
    + '<div class="snav-menu" id="siteMenu" data-open="false" role="dialog" aria-modal="true" aria-label="Menu">'
    + '<div class="snav-menu__top"><img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry">'
    + '<button class="snav-menu__close" id="siteMclose" aria-label="Close menu"><span class="cb-i"><i class="ri-close-line"></i></span></button></div>'
    + '<div class="snav-menu__body">'
    + '<nav class="snav-menu__group" aria-label="Programs"><h6>Programs</h6>' + N.paths.map(mlink).join('') + mlink({ t: 'How it works', href: HOME + '#how' }) + '</nav>'
    + '<nav class="snav-menu__group" aria-label="Explore"><h6>Explore</h6>' + mlink(N.projects) + mlink(N.events) + mlink(VIBING) + '</nav>'
    + '<nav class="snav-menu__group" aria-label="Resources"><h6>Resources</h6>' + allRes.map(mlink).join('') + '</nav>'
    + '<nav class="snav-menu__group" aria-label="About"><h6>About</h6>' + mlink({ id: 'our-story', t: 'Our Story', href: 'our-story.html' }) + mlink({ id: 'contact', t: 'Contact', href: 'contact.html' }) + '</nav>'
    + '<nav class="snav-menu__group" aria-label="Colaberry sites"><h6>More from Colaberry</h6>' + NETWORK.filter(function (n) { return n.ext; }).map(function (n) { return mlink({ t: n.t, href: n.href, ext: true }); }).join('') + '</nav>'
    + '<a class="snav-menu__partner" href="' + HOME + '#partner"><span class="snav-partner__ic">' + spark(17) + '</span>'
    + '<span><small>Claude Partner Network</small><b>Anthropic Partner</b></span></a>'
    + '</div>'
    + '<div class="snav-menu__foot"><a class="snav-menu__login" href="' + LOGIN + '">Log In</a><a class="snav-menu__cta" href="' + START + '">Start learning free</a></div>'
    + '</div>';

  var footHTML =
    '<footer class="aw-footer">'
    + '<div class="aw-footer__inner">'
    + '<div class="aw-footer__brand">'
    + '<img src="../assets/logo/colaberry-horizontal-white.png" alt="Colaberry" style="height:30px;display:block">'
    + '<p>Learn with Claude. Build through Colaberry. Deploy in the real world. Helping people move from AI consumer to AI builder since 2012.</p>'
    + '<div class="aw-social"><a href="https://www.youtube.com/@ColaberrySODA/shorts" target="_blank" rel="noopener" aria-label="Colaberry on YouTube"><span class="cb-i"><i class="ri-youtube-fill"></i></span></a>'
    + '<a href="https://www.instagram.com/colaberryschool/" target="_blank" rel="noopener" aria-label="Colaberry on Instagram"><span class="cb-i"><i class="ri-instagram-line"></i></span></a></div>'
    + '</div>'
    + '<div class="aw-footer__meta">'
    + '<span><span class="cb-i"><i class="ri-calendar-event-line"></i></span>Free Open House · live online</span>'
    + '<span><span class="cb-i"><i class="ri-ticket-2-line"></i></span>Membership · $149/month</span>'
    + '<span><span class="cb-i"><i class="ri-map-pin-line"></i></span>Plano, TX · Boston, MA</span>'
    + '</div>'
    + '</div>'
    + '<span class="aw-footer__word" aria-hidden="true">colaberry</span>'
    + '<div class="aw-footer__bar"><div>'
    + '<span>© 2026 · Colaberry School of Data and AI is operated by Colaberry Inc. · Texas Workforce Commission approved</span>'
    + '<span class="aw-footer__links">'
    + '<a href="' + HOME + '">Accelerator</a><a href="our-story.html">Our Story</a><a href="student-projects.html">Student Projects</a><a href="events.html">Events</a>'
    + '<a href="blog.html">Blog</a><a href="podcasts.html">Podcast</a><a href="shorts.html">Shorts</a><a href="faq.html">FAQ</a><a href="contact.html">Contact</a>'
    + '</span>'
    + '</div></div>'
    + '</footer>';

  // ---- inject (idempotent; clear any stale chrome from in-app navigation) ----
  document.querySelectorAll('#siteNav, .snav-menu, #siteMenu, body > .snav-ubar').forEach(function (e) { e.remove(); });
  document.querySelectorAll('body > .aw-footer').forEach(function (e) { e.remove(); });
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
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // ---- mobile drawer ----
  var menu = document.getElementById('siteMenu');
  function setMenu(open) { if (menu) menu.setAttribute('data-open', open ? 'true' : 'false'); document.body.style.overflow = open ? 'hidden' : ''; }
  var burger = document.getElementById('siteBurger');
  var mclose = document.getElementById('siteMclose');
  if (burger) burger.addEventListener('click', function () { setMenu(true); });
  if (mclose) mclose.addEventListener('click', function () { setMenu(false); });
  if (menu) menu.querySelectorAll('.snav-menu__body a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); closeAll(); } });

  // ---- desktop dropdowns ----
  var items = nav ? nav.querySelectorAll('.snav__item[data-open]') : [];
  function closeAll(except) { items.forEach(function (it) { if (it !== except) { it.setAttribute('data-open', 'false'); it.querySelector('button').setAttribute('aria-expanded', 'false'); } }); }
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
  document.addEventListener('click', function (e) { if (nav && !nav.contains(e.target)) closeAll(); });

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
        chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
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
