/* Colaberry Learn — dashboard charts.
   Vanilla JS. Charts are drawn with the design system's --chart-N
   tokens so they stay on-brand and theme-aware. Reduced-motion safe.
   Theme boot + toggle lives in theme.js (shared by every app page). */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };

  /* ---------- MOBILE DRAWER ---------- */
  var drawer = $('#drawer'), scrim = $('#scrim');
  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('is-open', open);
    scrim.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  var burger = $('#burger'); if (burger) burger.addEventListener('click', function () { setDrawer(true); });
  var dClose = $('#drawerClose'); if (dClose) dClose.addEventListener('click', function () { setDrawer(false); });
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });
  if (drawer) drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setDrawer(false); });

  /* ---------- LINE CHART ---------- */
  var W = 640, H = 240, PAD_L = 10, PAD_R = 10, TOP = 20, BOT = 24;
  var data = {
    progress: [8, 14, 21, 27, 34, 42, 50, 57, 61, 64, 66, 68],
    hours:    [6, 9, 7, 11, 10, 13, 9, 14, 12, 15, 13, 16],
    grades:   [72, 75, 78, 76, 82, 84, 83, 88, 86, 90, 89, 91],
    cohort: {
      progress: [7, 13, 19, 25, 31, 38, 45, 51, 56, 58, 60, 62],
      hours:    [7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      grades:   [70, 72, 74, 75, 77, 79, 80, 82, 83, 84, 85, 86]
    }
  };

  function maxOf(series) {
    var m = 0;
    series.forEach(function (a) { a.forEach(function (v) { if (v > m) m = v; }); });
    return m <= 100 ? 100 : Math.ceil(m / 10) * 10;
  }
  function pts(arr, max) {
    var n = arr.length, span = W - PAD_L - PAD_R, innerH = H - TOP - BOT;
    return arr.map(function (v, i) {
      var x = PAD_L + (span * i) / (n - 1);
      var y = TOP + innerH * (1 - v / max);
      return [x, y];
    });
  }
  function lineD(p) { return p.map(function (q, i) { return (i ? 'L' : 'M') + q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '); }
  function areaD(p) { return lineD(p) + ' L' + p[p.length - 1][0].toFixed(1) + ',' + (H - BOT) + ' L' + p[0][0].toFixed(1) + ',' + (H - BOT) + ' Z'; }

  var gridG = $('#grid'), areaPath = $('#areaPath'), linePath = $('#linePath');
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
      ln.setAttribute('x1', PAD_L); ln.setAttribute('x2', W - PAD_R);
      ln.setAttribute('y1', y); ln.setAttribute('y2', y);
      gridG.appendChild(ln);
    }
  }

  function render(series, animate) {
    if (!linePath) return;
    var max = maxOf([data[series], data.cohort[series]]);
    drawGrid(max);
    var p = pts(data[series], max), c = pts(data.cohort[series], max);
    areaPath.setAttribute('d', areaD(p));
    linePath.setAttribute('d', lineD(p));
    cohortPath.setAttribute('d', lineD(c));
    if (animate && !reduce) {
      var len = linePath.getTotalLength();
      linePath.style.transition = 'none';
      linePath.style.strokeDasharray = len; linePath.style.strokeDashoffset = len;
      areaPath.style.opacity = 0;
      // force reflow
      void linePath.getBoundingClientRect();
      linePath.style.transition = 'stroke-dashoffset .9s var(--ease-out)';
      linePath.style.strokeDashoffset = 0;
      areaPath.style.transition = 'opacity .9s ease'; areaPath.style.opacity = 1;
    }
  }

  if (linePath) {
    var series = 'progress';
    try { series = localStorage.getItem('cb-series') || 'progress'; } catch (e) {}
    if (!data[series]) series = 'progress';
    var seg = $('#seg');
    if (seg) {
      [].forEach.call(seg.children, function (c) { c.classList.toggle('is-active', c.getAttribute('data-series') === series); });
      seg.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        [].forEach.call(seg.children, function (c) { c.classList.remove('is-active'); });
        b.classList.add('is-active');
        try { localStorage.setItem('cb-series', b.getAttribute('data-series')); } catch (e2) {}
        render(b.getAttribute('data-series'), true);
      });
    }
    try { render(series, true); } catch (err) { console.error('[cb] line chart failed:', err); }
  }

  /* ---------- DONUT ---------- */
  var arc = $('#donutArc');
  if (arc) try {
    var dash = parseFloat(arc.getAttribute('stroke-dasharray'));
    var pct = parseFloat(arc.getAttribute('data-pct'));
    var target = dash * (1 - pct / 100);
    if (reduce) { arc.style.strokeDashoffset = target; }
    else {
      arc.style.transition = 'stroke-dashoffset 1.1s var(--ease-out)';
      setTimeout(function () { arc.style.strokeDashoffset = target; }, 200);
    }
  } catch (err) { console.error('[cb] donut failed:', err); }

  /* ---------- SKILL TRACKS + BARS ---------- */
  function fill() {
    document.querySelectorAll('.track > i[data-w]').forEach(function (el) {
      el.style.width = el.getAttribute('data-w') + '%';
    });
    document.querySelectorAll('#bars [data-h]').forEach(function (el) {
      el.style.height = el.getAttribute('data-h') + '%';
    });
  }
  if (reduce) fill(); else setTimeout(fill, 250);

  /* ---------- ROUTER (#/view or #/view/id) ----------
     Hash-based so browser back/forward and refresh restore the exact
     screen + open detail; unknown routes fall back safely. */
  var VIEWS = ['overview', 'courses', 'assignments', 'schedule', 'jobs', 'mentor', 'settings'];
  var TITLES = { overview: 'Overview', courses: 'My courses', assignments: 'Assignments', schedule: 'Schedule', jobs: 'Job board', mentor: 'Mentor', settings: 'Settings' };
  var COURSES = {
    'c-foundations': { name: 'Foundations', weeks: 'Weeks 1–6', pct: 100, blurb: 'Python, SQL, statistics and the analyst mindset — the base every later module builds on.', assignment: 'a-sql', modules: [['done', 'Python essentials'], ['done', 'SQL & relational modeling'], ['done', 'Statistics for analysts'], ['done', 'Capstone: EDA notebook']] },
    'c-viz': { name: 'Data Visualization', weeks: 'Weeks 7–10', pct: 85, blurb: 'From chart grammar to executive dashboards that drive decisions.', assignment: 'a-dash', modules: [['done', 'Chart grammar & perception'], ['done', 'Tableau workflows'], ['done', 'Dashboard design'], ['current', 'Storytelling with data']] },
    'c-ml': { name: 'Machine Learning', weeks: 'Weeks 11–16', pct: 74, blurb: 'Supervised learning end to end: framing, features, evaluation, deployment basics.', assignment: 'a-churn', modules: [['done', 'Regression & classification'], ['done', 'Feature engineering'], ['current', 'Model evaluation'], ['locked', 'MLOps basics']] },
    'c-genai': { name: 'LLMs & GenAI', weeks: 'Weeks 17–24', pct: 60, blurb: 'Transformers, prompting, retrieval-augmented systems, and your production capstone.', assignment: 'a-capstone', modules: [['done', 'Transformer foundations'], ['done', 'Prompt engineering'], ['current', 'RAG systems (lesson 4.2)'], ['locked', 'LLM capstone build']] }
  };
  var ASSIGN_ORDER = ['a-capstone', 'a-churn', 'a-dash', 'a-sql', 'a-eda'];
  var ASSIGNMENTS = {
    'a-capstone': { t: 'LLM capstone — proposal', m: 'GenAI', due: 'Jun 28', badge: ['warning', 'Due soon', 'due'], icon: ['ri-file-code-line', 'var(--chart-2)'], score: null, course: 'c-genai', desc: 'One page: problem statement, dataset, retrieval strategy, and how you will evaluate answer quality.', action: 'Submit proposal' },
    'a-churn': { t: 'Churn model evaluation', m: 'Machine Learning', due: 'Jun 24', badge: ['blue', 'In review', 'review'], icon: ['ri-bar-chart-box-line', 'var(--chart-4)'], score: null, course: 'c-ml', desc: 'Compare three classifiers on the telecom churn set and justify the metric you optimize.' },
    'a-dash': { t: 'Sales analytics dashboard', m: 'Data Viz', due: 'Jun 17', badge: ['green', 'Graded', 'done'], icon: ['ri-dashboard-line', 'var(--chart-1)'], score: 92, course: 'c-viz', desc: 'Executive dashboard on the retail sales dataset.', feedback: 'Strong layout hierarchy. Push annotations further on the regional view.' },
    'a-sql': { t: 'SQL window functions lab', m: 'SQL', due: 'Jun 12', badge: ['green', 'Graded', 'done'], icon: ['ri-database-2-line', 'var(--chart-3)'], score: 96, course: 'c-foundations', desc: 'Ranking, running totals, and cohort windows over the orders schema.', feedback: 'Clean window-function work — textbook partitioning.' },
    'a-eda': { t: 'Pandas EDA notebook', m: 'Foundations', due: 'Jun 5', badge: ['green', 'Graded', 'done'], icon: ['ri-function-line', 'var(--chart-3)'], score: 88, course: 'c-foundations', desc: 'Open-ended exploration of the NYC listings dataset.', feedback: 'Good hygiene. Go deeper on outlier rationale next time.' }
  };
  function badgeHTML(b) { return '<span class="cb-badge cb-badge--' + b[0] + '">' + (b[2] ? window.cbStatusIcon(b[2]) : '') + b[1] + '</span>'; }

  var rowsHost = $('#assignRows');
  try {
  if (rowsHost) rowsHost.innerHTML = ASSIGN_ORDER.map(function (id) {
    var a = ASSIGNMENTS[id];
    return '<tr data-assignment="' + id + '"><td><div class="who"><span class="cb-i" style="color:' + a.icon[1] + ';font-size:18px"><i class="' + a.icon[0] + '"></i></span> ' + a.t + '</div></td><td class="muted">' + a.m + '</td><td class="muted">' + a.due + '</td><td>' + badgeHTML(a.badge) + '</td><td class="num">' + (a.score != null ? '<b>' + a.score + '</b>' : '<span class="muted">—</span>') + '</td></tr>';
  }).join('');
  } catch (err) { console.error('[cb] assignments table failed:', err); if (window.cbToast) window.cbToast('The assignments list failed to load. Reload to try again.', { tone: 'error' }); }

  var aDetail = $('#assignmentDetail'), aList = $('#assignmentListCard');
  function renderAssignmentDetail(r) {
    if (!aDetail) return;
    var show = r.view === 'assignments' && r.id;
    if (aList) aList.style.display = show ? 'none' : '';
    if (!show) { aDetail.innerHTML = ''; return; }
    var a = ASSIGNMENTS[r.id];
    aDetail.innerHTML =
      '<section class="cb-card cb-card--pad">' +
      '<a class="cb-btn cb-btn--link" style="align-self:flex-start;margin:-4px 0 12px -6px" href="#/assignments"><span class="cb-i"><i class="ri-arrow-left-line"></i></span> All assignments</a>' +
      '<div class="cb-cluster" style="gap:8px">' + badgeHTML(a.badge) + '<span class="cb-badge cb-badge--outline">' + a.m + '</span></div>' +
      '<h2 style="font-size:var(--fs-h3);margin:14px 0 8px">' + a.t + '</h2>' +
      '<p class="muted" style="margin:0;max-width:60ch">' + a.desc + '</p>' +
      '<div class="cb-cluster" style="gap:28px;margin:18px 0 0">' +
      '<div><div class="muted" style="font-size:12px;text-transform:uppercase;letter-spacing:.04em">Due</div><b style="color:var(--text-strong)">' + a.due + '</b></div>' +
      (a.score != null ? '<div><div class="muted" style="font-size:12px;text-transform:uppercase;letter-spacing:.04em">Score</div><b style="color:var(--text-strong)">' + a.score + ' / 100</b></div>' : '') +
      '</div>' +
      (a.feedback ? '<blockquote style="margin:18px 0 0;padding:12px 16px;border-left:3px solid var(--status-success);background:var(--status-success-bg);border-radius:0 var(--radius-md) var(--radius-md) 0;color:var(--status-success-fg);font-size:14px">“' + a.feedback + '” — mentor feedback</blockquote>' : '') +
      (a.action ? '<div style="margin-top:20px"><button class="cb-btn cb-btn--confirm cb-btn--sm" id="assignAction"><span class="cb-i"><i class="ri-send-plane-line"></i></span> ' + a.action + '</button></div>' : '') +
      '<p class="muted" style="font-size:13px;margin:20px 0 0">Part of <a href="#/courses/' + a.course + '">' + COURSES[a.course].name + '</a></p>' +
      '</section>';
    var act = $('#assignAction');
    if (act) act.addEventListener('click', function () {
      act.outerHTML = '<span class="cb-badge cb-badge--green">' + window.cbStatusIcon('done') + 'Submitted — in review</span>';
      window.cbToast('Your mentor will review it before grading.', { tone: 'success', title: 'Proposal submitted' });
    });
  }

  var cDetail = $('#courseDetail'), cGrid = $('#courseGrid');
  var MOD_ICON = { done: ['ri-checkbox-circle-line', 'var(--status-success)'], current: ['ri-play-circle-line', 'var(--text-brand)'], locked: ['ri-lock-line', 'var(--text-subtle)'] };
  function renderCourseDetail(r) {
    if (!cDetail) return;
    var show = r.view === 'courses' && r.id;
    if (cGrid) cGrid.style.display = show ? 'none' : '';
    if (!show) { cDetail.innerHTML = ''; return; }
    var c = COURSES[r.id];
    cDetail.innerHTML =
      '<section class="cb-card cb-card--pad">' +
      '<a class="cb-btn cb-btn--link" style="align-self:flex-start;margin:-4px 0 12px -6px" href="#/courses"><span class="cb-i"><i class="ri-arrow-left-line"></i></span> All courses</a>' +
      '<div class="cb-cluster cb-cluster--between"><h2 style="font-size:var(--fs-h3);margin:0">' + c.name + '</h2><span class="cb-badge cb-badge--outline">' + c.weeks + '</span></div>' +
      '<p class="muted" style="margin:8px 0 16px;max-width:60ch">' + c.blurb + '</p>' +
      '<div class="cb-prog" style="max-width:420px"><div class="cb-prog__head"><span class="cb-prog__label">Progress</span><span class="cb-prog__val">' + c.pct + '%</span></div><div class="cb-prog__track"><div class="cb-prog__bar green" style="width:' + c.pct + '%"></div></div></div>' +
      '<div style="margin-top:16px">' + c.modules.map(function (m) {
        var ic = MOD_ICON[m[0]];
        return '<div class="module module--' + m[0] + '"><span class="cb-i" style="color:' + ic[1] + ';font-size:17px"><i class="' + ic[0] + '"></i></span> ' + m[1] + '</div>';
      }).join('') + '</div>' +
      (c.assignment ? '<p class="muted" style="font-size:14px;margin:18px 0 0">Related assignment: <a href="#/assignments/' + c.assignment + '">' + ASSIGNMENTS[c.assignment].t + '</a></p>' : '') +
      '</section>';
  }

  /* Recoverable error state: a failed view render never leaves a blank page. */
  function renderFail(err) {
    console.error('[cb] view render failed:', err);
    var body = document.querySelector('.dash__body');
    if (!body) return;
    body.innerHTML =
      '<section class="cb-card cb-card--pad" role="alert" style="text-align:center;max-width:520px;margin:48px auto;align-items:center">' +
      '<span class="cb-i" style="font-size:40px;color:var(--status-danger)"><i class="ri-error-warning-line"></i></span>' +
      '<h2 style="font-size:var(--fs-h3);margin:14px 0 6px">This screen hit a snag</h2>' +
      '<p class="muted" style="margin:0 0 20px">Your data is safe. Reload to pick up where you left off.</p>' +
      '<div class="cb-cluster" style="justify-content:center">' +
      '<button class="cb-btn cb-btn--confirm cb-btn--sm" onclick="location.reload()"><span class="cb-i"><i class="ri-restart-line"></i></span> Reload</button>' +
      '<button class="cb-btn cb-btn--outline cb-btn--sm" onclick="location.hash=\'#/overview\';location.reload()">Go to Overview</button>' +
      '</div></section>';
  }

  function parseHash() {
    var m = (location.hash || '').match(/^#\/([a-z-]+)(?:\/([\w-]+))?$/);
    return m ? { view: m[1], id: m[2] || null } : null;
  }
  function validate(r) {
    if (!r || VIEWS.indexOf(r.view) === -1) return null;
    if (r.id && r.view === 'assignments' && !ASSIGNMENTS[r.id]) return { view: 'assignments', id: null };
    if (r.id && r.view === 'courses' && !COURSES[r.id]) return { view: 'courses', id: null };
    if (r.id && r.view !== 'assignments' && r.view !== 'courses') return { view: r.view, id: null };
    return r;
  }
  function route() {
    var r = validate(parseHash());
    if (!r) {
      try { r = validate(JSON.parse(localStorage.getItem('cb-route'))); } catch (e) {}
      if (!r) r = { view: 'overview', id: null };
      location.replace('#/' + r.view + (r.id ? '/' + r.id : ''));
      return; /* hashchange re-enters with the canonical route */
    }
    try {
    document.querySelectorAll('.view').forEach(function (v) { v.classList.toggle('is-active', v.getAttribute('data-view') === r.view); });
    document.querySelectorAll('[data-nav]').forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('data-nav') === r.view); });
    renderAssignmentDetail(r); renderCourseDetail(r);
    document.title = TITLES[r.view] + ' — Colaberry Learn';
    try { localStorage.setItem('cb-route', JSON.stringify(r)); } catch (e) {}
    if (pop) pop.classList.remove('is-open');
    window.scrollTo(0, 0);
    } catch (err) { renderFail(err); }
  }
  window.addEventListener('hashchange', route);

  /* ---------- INTERACTIONS ---------- */
  document.addEventListener('click', function (e) {
    var tr = e.target.closest && e.target.closest('tr[data-assignment]');
    if (tr) location.hash = '#/assignments/' + tr.getAttribute('data-assignment');
  });
  var pop = $('#notifPop'), popBtn = $('#notifBtn');
  if (popBtn) {
    popBtn.addEventListener('click', function (e) { e.stopPropagation(); pop.classList.toggle('is-open'); });
    document.addEventListener('click', function (e) { if (!pop.contains(e.target)) pop.classList.remove('is-open'); });
  }
  var ex = $('#exportBtn');
  if (ex) ex.addEventListener('click', function () { window.print(); });
  var savedJobs = [];
  try { savedJobs = JSON.parse(localStorage.getItem('cb-saved-jobs') || '[]'); } catch (e) {}
  document.querySelectorAll('[data-save-job]').forEach(function (b) {
    var id = b.getAttribute('data-save-job');
    function paint() { b.innerHTML = savedJobs.indexOf(id) !== -1 ? '<span class="cb-i"><i class="ri-bookmark-fill"></i></span> Saved' : '<span class="cb-i"><i class="ri-bookmark-line"></i></span> Save'; }
    paint();
    b.addEventListener('click', function () {
      var i = savedJobs.indexOf(id);
      if (i === -1) savedJobs.push(id); else savedJobs.splice(i, 1);
      try { localStorage.setItem('cb-saved-jobs', JSON.stringify(savedJobs)); } catch (e) {}
      paint();
      window.cbToast(i === -1 ? 'Job saved to your shortlist.' : 'Job removed from your shortlist.', { tone: i === -1 ? 'success' : 'info' });
    });
  });
  [['prefEmail', 'cb-pref-email'], ['prefDigest', 'cb-pref-digest']].forEach(function (p) {
    var el = document.getElementById(p[0]); if (!el) return;
    try { var v = localStorage.getItem(p[1]); if (v !== null) el.checked = v === '1'; } catch (e) {}
    el.addEventListener('change', function () {
      try { localStorage.setItem(p[1], el.checked ? '1' : '0'); } catch (e) {}
      window.cbToast(el.checked ? 'Notifications on \u2014 preference saved.' : 'Notifications off \u2014 preference saved.', { tone: 'success' });
    });
  });
  var sp = $('#saveProfile'), pName = $('#setName'), pEmail = $('#setEmail');
  var profileSaved = { name: pName ? pName.value : '', email: pEmail ? pEmail.value : '' };
  function profileDirty() { return !!(pName && pEmail) && (pName.value !== profileSaved.name || pEmail.value !== profileSaved.email); }
  [pName, pEmail].forEach(function (el) { if (el) el.addEventListener('input', function () { window.cbSetFieldError(el, ''); }); });
  if (sp) sp.addEventListener('click', function () {
    var bad = [];
    if (!pName.value.trim()) { window.cbSetFieldError(pName, 'Name can\u2019t be empty.'); bad.push(pName); }
    if (!pEmail.value.trim()) { window.cbSetFieldError(pEmail, 'Email can\u2019t be empty.'); bad.push(pEmail); }
    else if (!window.cbEmailOk(pEmail.value.trim())) { window.cbSetFieldError(pEmail, 'Enter a valid email like ada@colaberry.com.'); bad.push(pEmail); }
    if (bad.length) { window.cbToast('Fix the highlighted fields to save.', { tone: 'error', title: 'Profile not saved' }); bad[0].focus(); return; }
    profileSaved = { name: pName.value, email: pEmail.value };
    window.cbToast('Profile changes saved.', { tone: 'success' });
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
      confirmLabel: 'Discard changes', cancelLabel: 'Keep editing', danger: true
    }, function () {
      pName.value = profileSaved.name; pEmail.value = profileSaved.email;
      window.cbSetFieldError(pName, ''); window.cbSetFieldError(pEmail, '');
      location.href = href;
    });
  }, true);
  window.addEventListener('beforeunload', function (e) { if (profileDirty()) { e.preventDefault(); e.returnValue = ''; } });
  /* Demo search: honest feedback instead of silence */
  var search = document.querySelector('.topbar__search input');
  if (search) search.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && search.value.trim()) window.cbToast('Search is coming soon in this demo.', { tone: 'info' });
  });
  document.querySelectorAll('input[data-theme-radio]').forEach(function (rd) {
    rd.addEventListener('change', function () { if (window.cbApplyTheme) window.cbApplyTheme(rd.value); });
  });

  /* Layered Escape: top-most first \u2014 confirm dialog (guard.js, capture
     phase) \u2192 notifications popover \u2192 mobile drawer. One layer per press. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (pop && pop.classList.contains('is-open')) { pop.classList.remove('is-open'); if (popBtn) popBtn.focus(); return; }
    if (drawer && drawer.classList.contains('is-open')) setDrawer(false);
  });

  route();
})();
