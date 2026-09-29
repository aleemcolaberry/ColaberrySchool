/* Colaberry Training Site — shared chrome + interactions.
   Injects the header and footer (single source across all pages),
   wires the mobile drawer, and highlights the active nav link. */
(function () {
  var LOGO = '../assets/logo/colaberry-horizontal.png';
  var LOGO_W = '../assets/logo/colaberry-horizontal-white.png';
  var APPLY = 'https://app.colaberry.com/account/login';

  // dropdown menus: [label, [[href, icon, text], ...]]
  var menus = [
    ['Courses', [
      ['data-analytics.html', 'ri-bar-chart-box-line', 'Data Analytics'],
      ['data-science.html', 'ri-flask-line', 'Data Science'],
      ['job-readiness.html', 'ri-briefcase-4-line', 'Job Readiness']
    ]],
    ['About', [
      ['our-story.html', 'ri-book-2-line', 'Our Story'],
      ['how-it-works.html', 'ri-route-line', 'How It Works'],
      ['mentorship.html', 'ri-user-star-line', 'Mentorship'],
      ['success-stories.html', 'ri-trophy-line', 'Success Stories'],
      ['reviews.html', 'ri-star-smile-line', 'Reviews'],
      ['contact.html', 'ri-mail-line', 'Contact Us']
    ]],
    ['Resources', [
      ['blog.html', 'ri-article-line', 'Blog'],
      ['events.html', 'ri-calendar-event-line', 'Events'],
      ['faq.html', 'ri-question-line', 'FAQs']
    ]]
  ];
  // plain links
  var links = [
    ['pricing.html', 'Pricing'],
    ['hire-our-grads.html', 'Hire Our Grads']
  ];

  var path = location.pathname.split('/').pop() || 'index.html';
  function act(href) { return href === path ? ' is-active' : ''; }

  /* ---------- HEADER ---------- */
  var navHTML = menus.map(function (m) {
    var anyActive = m[1].some(function (i) { return i[0] === path; }) ? ' is-active' : '';
    var pop = m[1].map(function (i) {
      return '<a class="' + (i[0] === path ? 'is-active' : '') + '" href="' + i[0] + '"><span class="cb-i"><i class="' + i[1] + '"></i></span> ' + i[2] + '</a>';
    }).join('');
    return '<div class="hd__menu"><button class="hd__link' + anyActive + '" type="button">' + m[0] +
      ' <span class="cb-i"><i class="ri-arrow-down-s-line"></i></span></button><div class="hd__pop">' + pop + '</div></div>';
  }).join('') +
  links.map(function (l) { return '<a class="hd__link' + act(l[0]) + '" href="' + l[0] + '">' + l[1] + '</a>'; }).join('');

  var header = '' +
    '<header class="hd"><div class="wrap hd__in">' +
      '<a class="hd__logo" href="index.html"><img src="' + LOGO + '" alt="Colaberry"></a>' +
      '<nav class="hd__nav" aria-label="Primary">' + navHTML + '</nav>' +
      '<div class="hd__spacer"></div>' +
      '<div class="hd__actions">' +
        '<a class="cb-btn cb-btn--ghost cb-btn--sm" href="' + APPLY + '">Log in</a>' +
        '<a class="cb-btn cb-btn--primary cb-btn--sm" href="' + APPLY + '">Apply Now</a>' +
        '<button class="iconbtn hd__burger" id="hdBurger" aria-label="Open menu" style="width:42px;height:42px;border:none;border-radius:50%;background:var(--surface-sunken);cursor:pointer;font-size:20px"><span class="cb-i"><i class="ri-menu-line"></i></span></button>' +
      '</div>' +
    '</div></header>';

  /* ---------- DRAWER ---------- */
  var drawerLinks = '<a class="d-link' + act('index.html') + '" href="index.html">Home</a>' +
    menus.map(function (m) {
      return '<div class="d-group">' + m[0] + '</div>' +
        m[1].map(function (i) { return '<a class="d-link' + act(i[0]) + '" href="' + i[0] + '">' + i[2] + '</a>'; }).join('');
    }).join('') +
    '<div class="d-group">More</div>' +
    links.map(function (l) { return '<a class="d-link' + act(l[0]) + '" href="' + l[0] + '">' + l[1] + '</a>'; }).join('');

  var drawer = '<div class="scrim" id="scrim"></div>' +
    '<aside class="drawer" id="drawer" aria-label="Mobile menu">' +
      '<div class="drawer__top"><img src="' + LOGO + '" alt="Colaberry"><button class="iconbtn" id="drawerClose" aria-label="Close" style="width:40px;height:40px;border:none;border-radius:50%;background:var(--surface-sunken);cursor:pointer;font-size:20px"><span class="cb-i"><i class="ri-close-line"></i></span></button></div>' +
      drawerLinks +
      '<a class="cb-btn cb-btn--primary cb-btn--full" style="margin-top:16px" href="' + APPLY + '">Apply Now</a>' +
    '</aside>';

  /* ---------- FOOTER ---------- */
  var footer = '' +
    '<footer class="ft"><div class="wrap">' +
      '<div class="ft__grid">' +
        '<div class="ft__logo"><img src="' + LOGO_W + '" alt="Colaberry">' +
          '<p class="muted" style="max-width:34ch;font-size:14px;margin:0">Colaberry School of Data and AI. Reskilling careers since 2012.</p>' +
          '<div class="ft__social">' +
            '<a href="https://www.facebook.com/colaberryschoolofdataanalytics/" aria-label="Facebook"><span class="cb-i"><i class="ri-facebook-fill"></i></span></a>' +
            '<a href="https://twitter.com/ColaberrySODA" aria-label="Twitter"><span class="cb-i"><i class="ri-twitter-x-fill"></i></span></a>' +
            '<a href="https://www.instagram.com/colaberryschool/" aria-label="Instagram"><span class="cb-i"><i class="ri-instagram-line"></i></span></a>' +
            '<a href="https://www.youtube.com/channel/UCb23caPCK7xW8roOkr_iKRA" aria-label="YouTube"><span class="cb-i"><i class="ri-youtube-fill"></i></span></a>' +
            '<a href="https://www.linkedin.com/company/colaberry-school-of-data-analytics/" aria-label="LinkedIn"><span class="cb-i"><i class="ri-linkedin-box-fill"></i></span></a>' +
          '</div>' +
        '</div>' +
        '<div><h5>Courses</h5><a href="data-analytics.html">Data Analytics</a><a href="data-science.html">Data Science</a><a href="job-readiness.html">Job Readiness</a></div>' +
        '<div><h5>Why Colaberry</h5><a href="our-story.html">Our Story</a><a href="how-it-works.html">How It Works</a><a href="mentorship.html">Mentorship</a><a href="success-stories.html">Success Stories</a><a href="reviews.html">Reviews</a></div>' +
        '<div><h5>Resources</h5><a href="blog.html">Blog</a><a href="events.html">Events</a><a href="pricing.html">Pricing</a><a href="faq.html">FAQs</a><a href="hire-our-grads.html">Hire Our Grads</a><a href="contact.html">Contact Us</a></div>' +
      '</div>' +
      '<div class="ft__bottom"><span>© 2026 · Colaberry School of Data and AI is operated by Colaberry Inc.</span><span class="links"><a href="#">Privacy</a><a href="#">Terms</a></span></div>' +
    '</div></footer>';

  /* ---------- MOUNT ---------- */
  var hMount = document.getElementById('site-header');
  var fMount = document.getElementById('site-footer');
  if (hMount) hMount.outerHTML = header + drawer;
  if (fMount) fMount.outerHTML = footer;

  function setDrawer(open) {
    var d = document.getElementById('drawer'), s = document.getElementById('scrim');
    if (!d) return;
    d.classList.toggle('is-open', open); s.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  var b = document.getElementById('hdBurger'); if (b) b.addEventListener('click', function () { setDrawer(true); });
  var c = document.getElementById('drawerClose'); if (c) c.addEventListener('click', function () { setDrawer(false); });
  var s = document.getElementById('scrim'); if (s) s.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });

  // Dropdowns: hover-intent on pointer devices (forgiving open/close so the
  // cursor can travel to the menu without it snapping shut) + click-to-toggle
  // for touch/keyboard. Pure-CSS :hover still works as a no-JS fallback.
  var closeTimer = null;
  function closeAll() { document.querySelectorAll('.hd__menu').forEach(function (m) { m.classList.remove('is-open'); }); }
  function openOnly(menu) { closeAll(); menu.classList.add('is-open'); }

  document.querySelectorAll('.hd__menu').forEach(function (menu) {
    var btn = menu.querySelector('.hd__link');
    // hover-intent
    menu.addEventListener('mouseenter', function () { clearTimeout(closeTimer); openOnly(menu); });
    menu.addEventListener('mouseleave', function () {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () { menu.classList.remove('is-open'); }, 260);
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
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });
})();
