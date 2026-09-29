/* Colaberry Learn — iconography, single source of truth.
   Rules: Remix Icon LINE variants only (one 24px grid, uniform stroke).
   Fills are reserved for brand logos (Google/LinkedIn) and active toggle
   states (bookmark -> saved). Every status/state maps to ONE icon here:
   change it once and it changes on every page. Static badges opt in with
   data-status="key"; dynamic renders (charts.js) call cbStatusIcon(key). */
window.CB_STATUS_ICON = {
  done:   'ri-checkbox-circle-line', /* graded / complete / submitted / on track */
  active: 'ri-play-circle-line',     /* current / in progress / wrapping up */
  review: 'ri-eye-line',             /* in review */
  due:    'ri-alarm-line',           /* due soon / deadline */
  today:  'ri-calendar-event-line',  /* scheduled / happening today */
  live:   'ri-live-line',            /* live session / live cohort */
  mentor: 'ri-user-star-line',       /* 1:1 / mentor session */
  match:  'ri-focus-2-line',         /* job match strength */
  locked: 'ri-lock-line'             /* locked module */
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
