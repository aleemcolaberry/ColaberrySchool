/* Unified site navigation — React component (home + landing pages).
   Mirrors the vanilla nav in site-chrome.js exactly (.snav markup, v2 IA).
   IA: Programs ▾ · Student Projects · Events · Resources ▾ · About ▾  |  Partner · Log In · Start free */
const SITE_HOME = 'accelerator.html';
const SITE_LIVE = 'https://training.colaberry.com';
const SITE_START = SITE_LIVE + '/start-free';
const SITE_LOGIN = 'https://enterprise.colaberry.ai/portal/login';
const SITE_NAV = {
  paths: [
    { n: '01', t: 'Working professionals', d: 'Use AI at work, starting now', href: 'working-professionals.html' },
    { n: '02', t: 'Beginners & career switchers', d: 'Start AI from the ground up', href: 'beginners-career-switchers.html' },
    { n: '03', t: 'Builders & founders', d: 'Turn your idea into a system', href: 'builders-founders.html' },
  ],
  programsAside: [
    { t: 'How it works', d: 'Learn, build, deploy', href: SITE_HOME + '#how' },
    { t: 'Anthropic certification', d: 'Earn a verifiable credential', href: SITE_HOME + '#partner' },
    { t: 'Graduate stories', d: 'Careers changed, in their words', href: SITE_HOME + '#reviews' },
  ],
  resources: [
    { k: 'Watch, read & listen', items: [
      { id: 'shorts', t: 'Shorts', d: 'Quick AI lessons in under 60 seconds', href: 'shorts.html' },
      { id: 'blog', t: 'Blog', d: 'Guides and field notes', href: 'blog.html' },
      { id: 'podcast', t: 'Podcast', d: 'Conversations with AI builders', href: 'podcasts.html' },
      { id: 'book', t: 'Trust Before Intelligence', d: 'The book by founder Ram Katamaraja', href: 'https://trustbeforeintelligence.ai/', ext: true },
    ] },
    { k: 'Get answers', items: [
      { id: 'knowledge', t: 'Knowledge Base', d: 'Concepts, terms and how-tos', href: SITE_LIVE + '/knowledge', ext: true },
      { id: 'faq', t: 'FAQ', d: 'Membership, pricing, schedule', href: 'faq.html' },
    ] },
  ],
  about: [
    { id: 'our-story', t: 'Our Story', d: 'Helping people build with AI since 2012', href: 'our-story.html' },
    { id: 'partner', t: 'Anthropic partnership', d: 'Member, Claude Partner Network', href: SITE_HOME + '#partner' },
    { id: 'contact', t: 'Contact', d: 'Talk to our admissions team', href: 'contact.html' },
  ],
  projects: { id: 'student-projects', t: 'Student Projects', href: 'student-projects.html' },
  events: { id: 'events', t: 'Events', href: 'events.html' },
};
/* Primary CTA: if the page has its own lead form (home + audience pages), scroll to it
   and focus the first field instead of leaving the page. Otherwise go to /start-free. */
function siteStartClick(e) {
  const f = document.querySelector('.lead-card__form');
  if (!f) return;
  e.preventDefault();
  const card = f.closest('.lead-card') || f;
  const y = card.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: Math.max(0, y), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  const inp = f.querySelector('input:not([type=hidden]):not([tabindex="-1"])');
  if (inp) setTimeout(() => inp.focus({ preventScroll: true }), 450);
}
function SiteCta() {
  return (
    <a className="snav__cta" href={SITE_START} onClick={siteStartClick}>
      <span className="snav__cta-l">Start learning free</span><span className="snav__cta-s">Start free</span>
      <span className="cb-i"><i data-lucide="arrow-right" /></span>
    </a>
  );
}
const SITE_VIBING = { id: 'ai-dev-wire', t: "What's Vibing", href: SITE_LIVE + '/ai-dev-wire' };
const SITE_NETWORK = [
  { t: 'AI Accelerator Program', href: SITE_HOME, current: true },
  { t: 'For Enterprise AI', href: 'https://enterprise.colaberry.ai/', ext: true },
  { t: 'Tech on Colaberry', href: 'https://colaberry.ai', ext: true },
];
/* Utility bar scrolls away; the fixed main row follows it up (--ubar-y). */
function siteUbarSync() { document.documentElement.style.setProperty('--ubar-y', Math.max(0, 36 - window.scrollY) + 'px'); }
function SiteUtilityBar() {
  return (
    <div className="snav-ubar">
      <div className="snav-ubar__in">
        <a className="snav-ubar__vibe" href={SITE_VIBING.href}><span className="snav-ubar__dot" aria-hidden="true"></span>{SITE_VIBING.t}<span className="snav-ubar__vibe-d">AI dev news</span><span className="cb-i"><i data-lucide="arrow-right" /></span></a>
        <nav className="snav-ubar__sites" aria-label="Colaberry sites">
          {SITE_NETWORK.map((s) => (
            <a key={s.t} href={s.href} aria-current={s.current ? 'true' : undefined} {...(s.ext ? { target: '_blank', rel: 'noopener' } : {})}>
              {s.t}{s.ext && <span className="cb-i"><i data-lucide="arrow-up-right" /></span>}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
const SITE_GROUP_OF = { accelerator: 'programs', 'our-story': 'about', contact: 'about', blog: 'resources', podcast: 'resources', shorts: 'resources', faq: 'resources', events: 'events', 'student-projects': 'student-projects' };

function SiteSpark({ s = 15, color = '#fff' }) {
  const rays = [];
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    const inner = i % 2 === 0 ? 3.4 : 4.4;
    const outer = i % 2 === 0 ? 10.4 : 8.6;
    rays.push(<line key={i} x1={12 + Math.cos(a) * inner} y1={12 + Math.sin(a) * inner}
      x2={12 + Math.cos(a) * outer} y2={12 + Math.sin(a) * outer} stroke={color} strokeWidth="2.4" strokeLinecap="round" />);
  }
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">{rays}</svg>;
}

function SitePartner({ link = true }) {
  const inner = (
    <React.Fragment>
      <span className="snav-partner__ic"><SiteSpark s={15} color="#fff" /></span>
      <span className="snav-partner__tx"><small>Member</small><b>Anthropic Partner</b></span>
    </React.Fragment>
  );
  const label = 'Colaberry is an Anthropic Partner, member of the Claude Partner Network';
  if (!link) return <span className="snav-partner" aria-label={label}>{inner}</span>;
  return <a className="snav-partner" href={SITE_HOME + '#partner'} aria-label={label}>{inner}</a>;
}

function SiteRow({ it, active }) {
  return (
    <a className="snav__row" href={it.href} data-ext={it.ext ? '' : undefined} aria-current={it.id && it.id === active ? 'page' : undefined}>
      <b>{it.t}</b><span>{it.d}</span>
    </a>
  );
}

function SiteNav({ active = '', campaign = false }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = React.useState('');
  const navRef = React.useRef(null);
  React.useEffect(() => {
    document.querySelectorAll('#siteNav, #siteMenu, .snav-ubar').forEach((e) => { if (!e.closest('#root')) e.remove(); });
    const onScroll = () => { setScrolled(window.scrollY > 8); if (!campaign) siteUbarSync(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const onDoc = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setMenu(''); };
    const onKey = (e) => { if (e.key === 'Escape') setMenu(''); };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey); };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
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
    return (
      <header className="snav" data-scrolled={scrolled}>
        <div className="snav__in">
          <div className="snav__brand">
            <a className="snav__logo" href="#top" aria-label="Back to top"><img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry" /></a>
            <SitePartner link={false} />
          </div>
          <div className="snav__meta snav__meta--campaign" style={{ marginLeft: 'auto' }}>
            <a className="snav__login" href={SITE_LOGIN}><span className="cb-i"><i data-lucide="log-in" /></span>Log In</a>
            <SiteCta />
          </div>
        </div>
      </header>
    );
  }

  const group = SITE_GROUP_OF[active] || '';
  const N = SITE_NAV;
  const dd = (id, label, panel) => (
    <li className="snav__item" data-open={menu === id} data-current={group === id ? 'true' : undefined}
      onKeyDown={(e) => { if (e.key === 'Escape') setMenu(''); }}>
      <button className="snav__link" type="button" aria-expanded={menu === id} aria-controls={'snav-p-' + id}
        onClick={() => setMenu(menu === id ? '' : id)}>{label}<span className="snav__chev" aria-hidden="true"></span></button>
      <div className="snav__panel" id={'snav-p-' + id}>{panel}</div>
    </li>
  );
  const plain = (it) => (
    <li className="snav__item"><a className="snav__link" href={it.href} aria-current={group === it.id ? 'page' : undefined}>{it.t}</a></li>
  );
  const close = () => setOpen(false);
  const mlink = (it, key) => (
    <a key={key || it.t} href={it.href} aria-current={it.id && it.id === active ? 'page' : undefined} onClick={close}>
      <span>{it.t}{it.d && <small>{it.d}</small>}</span><span className="cb-i"><i data-lucide={it.ext ? 'arrow-up-right' : 'arrow-right'} /></span>
    </a>
  );

  return (
    <React.Fragment>
      <SiteUtilityBar />
      <header className="snav snav--ubar" data-scrolled={scrolled} ref={navRef}>
        <div className="snav__in">
          <div className="snav__brand">
            <a className="snav__logo" href={SITE_HOME} aria-label="Colaberry home"><img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry" /></a>
            <SitePartner />
          </div>
          <nav aria-label="Primary" style={{ margin: '0 auto' }}>
            <ul className="snav__links">
              {dd('programs', 'Programs', (
                <div className="snav__card snav__card--programs">
                  <div className="snav__paths">
                    <span className="snav__kicker">AI Systems Architect Accelerator</span>
                    {N.paths.map((p) => (
                      <a className="snav__path" key={p.n} href={p.href}><i>{p.n}</i><b>{p.t}</b><span>{p.d}</span></a>
                    ))}
                  </div>
                  <div className="snav__aside">
                    <span className="snav__kicker">Inside the program</span>
                    {N.programsAside.map((it) => <SiteRow key={it.t} it={it} active={active} />)}
                    <div className="snav__price">Membership from <b>$149/month</b> · cancel anytime</div>
                  </div>
                </div>
              ))}
              {plain(N.projects)}
              {plain(N.events)}
              {dd('resources', 'Resources', (
                <div className="snav__card snav__card--cols">
                  {N.resources.map((c) => (
                    <div key={c.k}><span className="snav__kicker">{c.k}</span>{c.items.map((it) => <SiteRow key={it.t} it={it} active={active} />)}</div>
                  ))}
                </div>
              ))}
              {dd('about', 'About', (
                <div className="snav__card">{N.about.map((it) => <SiteRow key={it.t} it={it} active={active} />)}</div>
              ))}
            </ul>
          </nav>
          <div className="snav__meta">
            <a className="snav__login" href={SITE_LOGIN}><span className="cb-i"><i data-lucide="log-in" /></span>Log In</a>
            <SiteCta />
            <button className="snav__burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><span className="cb-i"><i data-lucide="menu" /></span></button>
          </div>
        </div>
      </header>

      <div className="snav-menu" data-open={open} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="snav-menu__top">
          <img src="../assets/logo/colaberry-horizontal.png" alt="Colaberry" />
          <button className="snav-menu__close" aria-label="Close menu" onClick={close}><span className="cb-i"><i data-lucide="x" /></span></button>
        </div>
        <div className="snav-menu__body">
          <nav className="snav-menu__group" aria-label="Programs">
            <h6>Programs</h6>
            {N.paths.map((p) => mlink(p, p.n))}
            {mlink({ t: 'How it works', href: SITE_HOME + '#how' })}
          </nav>
          <nav className="snav-menu__group" aria-label="Explore">
            <h6>Explore</h6>
            {mlink(N.projects)}{mlink(N.events)}{mlink(SITE_VIBING)}
          </nav>
          <nav className="snav-menu__group" aria-label="Resources">
            <h6>Resources</h6>
            {N.resources.flatMap((c) => c.items).map((it) => mlink({ ...it, d: undefined }))}
          </nav>
          <nav className="snav-menu__group" aria-label="About">
            <h6>About</h6>
            {mlink({ id: 'our-story', t: 'Our Story', href: 'our-story.html' })}
            {mlink({ id: 'contact', t: 'Contact', href: 'contact.html' })}
          </nav>
          <nav className="snav-menu__group" aria-label="Colaberry sites">
            <h6>More from Colaberry</h6>
            {SITE_NETWORK.filter((s) => s.ext).map((s) => mlink({ t: s.t, href: s.href, ext: true }))}
          </nav>
          <a className="snav-menu__partner" href={SITE_HOME + '#partner'} onClick={close}>
            <span className="snav-partner__ic"><SiteSpark s={17} color="#fff" /></span>
            <span><small>Claude Partner Network</small><b>Anthropic Partner</b></span>
          </a>
        </div>
        <div className="snav-menu__foot">
          <a className="snav-menu__login" href={SITE_LOGIN}>Log In</a>
          <a className="snav-menu__cta" href={SITE_START} onClick={(e) => { close(); siteStartClick(e); }}>Start learning free</a>
        </div>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { SiteNav, SitePartner });
