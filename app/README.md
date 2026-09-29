# Colaberry Learn — reference application

A complete, multi-page application built **entirely on the Colaberry design system** as a
working reference and stress test. Every page links `components.css` (the one-link, no-build
path) and composes the system's tokens, utilities, motion layer, and CSS-only components.

## Pages & flow

| Page | File | What it demonstrates |
|---|---|---|
| Landing | `index.html` | Sticky nav (with theme toggle), hero + live SVG chart, scroll reveals, program/pricing cards, stat band, CTA panel |
| Registration | `register.html` | Split brand panel, multi-field form, step indicator, select/textarea/checkbox, social auth |
| Thank you | `thank-you.html` | Success state (spring-pop), application ID, numbered next-steps timeline |
| Login | `login.html` | Dark brand panel, form, remember-me, social auth |
| Dashboard | `dashboard.html` | Hash-routed app shell (`#/view/id`): 7 views — Overview (KPIs, charts), Courses, Assignments (+ deep-linked detail), Schedule, Job board, Mentor, Settings. Refresh/back/forward restore the exact screen; unknown routes fall back to Overview. |
| Legal | `legal.html` | Terms & privacy — destination for the form legal links |

Flow: **Landing → Apply → Thank you → Login → Dashboard** (all linked with relative `<a>` hrefs).

## Navigation & state

- Dashboard routing is hash-based (`#/assignments/a-capstone`), so browser back/forward and
  refresh Just Work; the last route is also persisted (`cb-route`) as a fallback when the
  page opens without a hash. Invalid views/ids degrade to the nearest list.
- Deep links everywhere: notifications → the due assignment, table rows → detail, courses ⇄
  assignments, pricing cards → `register.html?track=…` (preselects the track), footer → section
  anchors. The register form keeps a draft in `localStorage` across refreshes.
- The landing nav highlights the section in view (scrollspy).

## What it uses from the system

- **One-link styling:** `../components.css` (tokens + base + motion + utilities + all 20 components). No React, no build.
- **Components:** `cb-btn`, `cb-card`, `cb-badge`, `cb-input`, `cb-ta`, `cb-check`, `cb-avatar`, `cb-table`.
- **Utilities:** `cb-container`, `cb-grid` (auto-fit), `cb-stack`, `cb-cluster`, `cb-row`, `cb-scroll`, `cb-panel`, `cb-sr-only`, `cb-skip-link`.
- **Motion:** `data-reveal` (+ `../motion.js`), `cb-anim--rise/scale/pop`, `cb-stagger`, `cb-delay-*`, `cb-hover-lift/grow/glow` — all reduced-motion safe.
- **Charts:** SVG/CSS driven by the `--chart-N` tokens, so the dark-mode toggle re-themes them automatically.

## App-only files (not part of the design system)

- `app.css` — page composition (nav, hero, auth split, dashboard shell, chart primitives). Tokens only, no raw hex.
- `theme.js` — shared theme layer, loaded in `<head>` on EVERY page: applies the persisted light/dark theme before first paint, swaps `-black`/`-white` logo art (`data-logo-swap`), wires any `[data-theme-toggle]` button. One toggle anywhere themes the whole app.
- `charts.js` — vanilla JS: line/donut/bar animation, mobile drawer.

## Button color semantics

Positive/confirm actions (apply, submit, log in, resume) use `cb-btn--confirm` — leaf green
with an ink label (≥7:1). Destructive actions use `cb-btn--danger` — cherry red, white label.
Neutral/alternative actions stay muted (`--outline` / `--ghost`). All pairings pass WCAG AA
in both themes; the full pairing table lives in `tokens/colors.css`.

## Notes

- The dashboard sidebar collapses below 1024px into a slide-in drawer (hamburger in the topbar).
- Icons use RemixIcon (loaded via a direct `<link>` per page for robustness). Screenshot/PPTX
  capture tools can't embed icon webfonts, so icons may appear as boxes **in exports only** — they
  render correctly in any real browser.
- Forms are demo-wired (any input proceeds); swap the `submit` handlers for a real backend.

## Iconography

Remix Icon 4.6, **line variants only** (one 24px grid, uniform stroke). Fills
are reserved for brand logos (Google, LinkedIn) and active toggle states
(bookmark → saved).

- **Status icons live in one place: `icons.js`** (`CB_STATUS_ICON`). Static
  badges opt in with `data-status="done|active|review|due|today|live|mentor|match|locked"`;
  dynamic badges (charts.js) render through the same map via `cbStatusIcon(key)`.
- **CTA vocabulary** (leading icon = meaning, used identically on every page):
  apply `ri-edit-box-line` · submit `ri-send-plane-line` · log in
  `ri-login-box-line` · log out `ri-logout-box-r-line` · back
  `ri-arrow-left-line` · resume/continue lesson `ri-play-circle-line` ·
  syllabus `ri-book-open-line` · message/talk `ri-chat-1-line` · book session
  `ri-calendar-line` · email action `ri-mail-send-line` · export
  `ri-download-2-line` · save toggle `ri-bookmark-line/-fill` · save changes
  `ri-save-line` · email confirmation `ri-mail-check-line`.

## Toasts (feedback)

`toast.js` — `cbToast(message, { tone, title, duration })`. Tones (icon +
color defined once in the file): success, warning, error, info. Toasts stack
(max 4), auto-dismiss (errors linger), pause on hover/focus, have a dismiss
button, use status tokens (theme-aware), and announce via role=status/alert.
Every user action gives feedback: form validation errors, reset/resend email
confirmations, profile & preference saves, job save/unsave, proposal submit.

## Error handling & layering

- `guard.js` (all pages): global `error`/`unhandledrejection` net → friendly
  toast (or self-contained banner if toasts aren't loaded); `cbSetFieldError`
  inline validation (aria-invalid + describedby); `cbConfirm` alert-dialog.
- Inline validation on login, register, and dashboard profile: empty,
  malformed email, and malformed phone are rejected with a message under the
  field; toast summarises; focus moves to the first invalid field.
- Dashboard view renders are wrapped: a failure shows a recoverable
  "Reload / Go to Overview" card, never a blank page. Chart, donut, and
  table init are isolated so one failure can't take down the rest.
- Escape / outside-click close the TOP-MOST layer first:
  confirm dialog (capture phase) → notifications popover → mobile drawer.
- Unsaved profile edits: leaving the page prompts "Discard unsaved changes?"
  (in-app hash navigation keeps edits, so it only prompts on real exits) plus
  a beforeunload guard for refresh/close.
