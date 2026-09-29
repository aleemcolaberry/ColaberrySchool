# Colaberry — Brand Guide

The short, practical guide to using the Colaberry brand. For the full interactive reference,
open **`design-system.html`**.

---

## The brand in one line
Colaberry helps people **future-proof their careers in data & AI** — warm, inclusive, and proven since 2012.

## Brand name usage
- **Public-facing name:** **Colaberry School of Data and AI** — use on the website, social media, ads, brochures, and all marketing materials. (Replaces "School of Data Science & Analytics".)
- **Legal entity:** **Colaberry Inc.** — use in official/regulatory documents: TWC Certificate of Approval (COA), catalog, enrollment agreements, refund policies, ETPL records, TWC forms.
- Where appropriate (website footer, admissions/enrollment pages, contact page), include verbatim: *"Colaberry School of Data and AI is operated by Colaberry Inc."*

## Design principles
Five beliefs that break ties when a decision is ambiguous:
1. **Inclusive by default** — accessibility, plain language, and generous touch targets are requirements, not extras.
2. **Warm, not loud** — soft shapes, gentle motion, friendly copy; confidence without hype.
3. **Clarity over decoration** — we teach data, so content and numbers lead; ornament earns its place.
4. **One system, many makers** — semantic tokens + reusable components let a marketer, a developer, and an AI agent produce the same brand.
5. **Consistent & constant** — the cherry accent never changes; foreground inverts with the background.

---

# Generating with Claude — how to prompt

This whole project is a **design system Claude can read**. When you start a chat with this project
attached (or invoke the `colaberry-design` skill), Claude already knows the colors, fonts, logo, voice,
components, and rules below — you don't have to re-explain them. You just describe what you want.

There are two kinds of people who use this, and the way you prompt is a little different for each.

## 👋 If you're on the Marketing team (non-technical)

You can ask in **plain English**. Claude will hand you a finished **HTML file you can preview and download** —
a social post, an event flyer, an email header, a one-pager, a slide, an ad. You never touch code.

**The recipe — answer these four things in your message:**
1. **What** you want (e.g. "an Instagram post", "a webinar flyer", "an email banner").
2. **Size** if it matters (e.g. "square 1080×1080", "story 1080×1920", "letter portrait", "16:9 slide").
3. **The words** — the headline, any subtext, the call-to-action.
4. **The vibe / which program** (e.g. "for the Data Analytics cohort", "celebratory", "urgent — enrollment closes Friday").

**Generic starter template** (fill in the brackets):

> *"Using the Colaberry design system, create a **[social post / flyer / email header / slide]** at
> **[size]** for **[topic]**. Headline: **[your headline]**. Add a **[call-to-action]** button and the
> logo. Keep it warm and on-brand, no emoji — and give me **3 options**."*

**More worked examples**

> *"Using the Colaberry design system, make a **square Instagram post (1080×1080)** announcing our
> **Spring Data Analytics cohort**. Headline: 'Your data career starts here.' Add a small
> 'Apply now' button and our cherry logo. Keep it warm and on-brand."*

> *"Make an **event flyer (letter, portrait)** for a free **Intro to Data Analytics webinar**,
> Thursday 7:30pm CST. Include the date/time, 'Register free', and the Colaberry logo. Give me
> **3 layout options** to choose from."*

> *"Design an **email header banner (1200×400)** for our scholarship announcement. Big text:
> 'Veterans: full-tuition scholarships open.' Use the cherry-red accent. No emoji."*

**Tips that make the result great**
- Ask for **options**: "give me 3 versions" — then tell Claude which one to refine.
- Name the **brand color** you want to lead with: cherry red (energy), leaf green (growth), berry blue (trust).
- Keep the **voice**: warm, encouraging, speak to "you", **no emoji**, lead with proof (5,000+ careers, since 2012).
- Want to tweak it? Just say so in plain words: "make the headline bigger", "use the green instead",
  "swap in this photo" (drag a photo in).
- To download what Claude made, use the **download / export** option on the file it gives you.

> 💡 You don't need to know hex codes, fonts, or "tokens." Claude pulls all of that from this system
> automatically. Your job is the **message and the format**.

## 🛠️ If you're a Developer

Claude can scaffold **production-ready, on-brand UI** because the tokens and components are machine-readable.

**Hand Claude the contract in your prompt:**
- "**Link `styles.css`**" — it imports all tokens (color, type, spacing) + fonts.
- "**Use the design-system components**" — `Button, Badge, Card, Input, Checkbox, Avatar`, loaded from
  `_ds_bundle.js` and read off `window.ColaberryDesignSystem_098454`.
- "**Reference semantic tokens**, never raw hex" — `--surface-page`, `--text-strong`, `--brand-accent`, etc.
- "**Honor the accessibility rules** in BRAND.md" (`--text-brand` / green-800+ for body text, visible focus rings).

**Generic starter template** (fill in the brackets):

> *"Using the Colaberry design system, build **[a page / a section / a component]** — **[describe what
> it does]**. Use the `Button`, `Card`, `Badge`, `Input` components and semantic tokens, link
> `styles.css`, and support dark mode (`data-theme="dark"`)."*

**More worked examples**

> *"Using the Colaberry design system, build a **pricing section** for the Data Science program.
> Three plan cards using the `Card` and `Button` components, cherry-red primary CTA, link `styles.css`,
> use semantic tokens, support `data-theme="dark"`."*

> *"Recreate the **enrollment form** as a React component using `Input`, `Checkbox`, and `Button`
> from `window.ColaberryDesignSystem_098454`. Follow the form patterns in
> `ui_kits/marketing-website/`."*

> *"Give me a **starter HTML page** wired to this design system (fonts, tokens, dark-mode toggle)
> that I can drop a new feature into."*

**What to reuse**
- Foundations: `styles.css` → `tokens/*.css`. Components: `components/core/*` (props in each `.d.ts`,
  usage in each `.prompt.md`). Full screens to copy from: `ui_kits/marketing-website/`.
- Open `design-system.html` for the live token reference, WCAG audit, and the dev hand-off checklist.

## 📦 Hand-off cheat-sheet — what to give each person

| Hand this to… | What they need | Where they start |
|---|---|---|
| **Marketing / non-technical** | This project link (or the `colaberry-design` skill) + the prompt recipe above | Just describe the artifact — Claude returns a downloadable HTML file |
| **A designer** | `design-system.html` (the living guide) + `assets/logo/` | Skim the guide; reuse logos, colors, type |
| **A developer** | This whole project: `styles.css`, `components/core/`, `ui_kits/`, `BRAND.md` | Link `styles.css`, import the components, follow the rules here |
| **Anyone, anywhere** | `BRAND.md` (this file) — it's self-contained | Read the one-liner, voice, color, and logo rules |

**The golden rule for any prompt:** start with *"Using the Colaberry design system, …"* and describe the
outcome. The system supplies the rest.

---

## Logo

The mark is **two cherries on a shared stem forming the "C"** of Colaberry — growth, pairs, collaboration.
The wordmark sets **"olaberry"** in Quicksand with a green→blue gradient.

**Files** (`assets/logo/`): `colaberry-mark.png`, `colaberry-horizontal.png`, `colaberry-app-icon.png`,
each with `-white` / `-black` mono variants, plus a full `export/` set (favicons, app icons, OG cards).

**Inversion rule:** *foreground inverts with the background; the cherry red stays constant.*
- Light background → full-color or black mark.
- Dark / photo / cherry background → **white** mark.
- Never recolor the cherries, add gradients/shadows to the mark, or re-set the wordmark in another font.

**Clear space:** keep space equal to the cherry-mark height on all sides.
**Minimum size:** 120px wide (horizontal lockup), 24px (mark alone).

## Color

| Role | Token | Hex | Notes |
|---|---|---|---|
| Primary / accent | `--red-500` | `#FB2832` | Cherry. The constant. Accent + large text; use `--red-600/700` for body text. |
| Secondary | `--green-500` | `#77BB4A` | Leaf. Growth. Fill/accent; use `--green-800+` for body text (green-700 is large-text only), white text only on `--green-800+`. |
| Tertiary | `--blue-500` | `#367895` | Berry. Trust, links, wordmark. AA for white text. |
| Neutrals | `--neutral-0…1000` | `#FFF…#000` | Brand grays `#D8D8D8`, `#4A4A4A`, black. |

Always use **semantic tokens** (`--surface-page`, `--text-strong`, `--brand-accent`, `--border-default`)
rather than raw ramp values. Dark mode: set `data-theme="dark"` on `<html>`.

### Data visualization
For charts, use the dedicated palette — **never** raw brand ramps for series:
- **Categorical:** `--chart-1…8` in order (tuned for adjacent separation + color-blind safety).
- **Sequential:** `--seq-1…6` (single-hue berry blue, low→high).
- **Diverging:** `--div-neg-2 … --div-mid … --div-pos-2` (cherry ↔ leaf).
Both adapt in dark mode (brighter series). See the Color section of `design-system.html`.

## Typography

- **Roboto** — display (Bold) + body (Regular). H1 48 / H2 36 / H3 28 / H4 22 / body 18 / caption 14.
- **Roboto Mono** — code, metrics, tabular data.
- **Quicksand** — *logotype only*, never for UI.

## Iconography
The brand's standard icon set is **RemixIcon** (Apache-2.0, ~3,000 icons) — loaded automatically via
`styles.css` (no script needed). Prefer the **`-line`** style to match the soft 2px brand look; use
**`-fill`** for emphasis. Never use emoji.

Always wrap an icon in the **`.cb-i`** primitive — it guarantees a centered 1em box with no baseline
gap (color via `currentColor`, size via `font-size`):
```html
<span class="cb-i"><i class="ri-rocket-line"></i></span>
```
For a colored container, use **`.cb-icon-tile`** (resize with `--tile`) — never hand-roll
`place-items`/sizing, which is how alignment mistakes creep in:
```html
<span class="cb-icon-tile" style="background:var(--red-500)"><span class="cb-i"><i class="ri-award-line"></i></span></span>
```
Both utilities live in the base layer, so correct icon alignment is automatic everywhere. SVG sets
(e.g. Lucide) also work inside `.cb-i` if a project needs them. Browse icons at remixicon.com.

## Shape, space & motion
- 4px spacing grid. Rounded radii: 4 / 8 / 12 / 16 / 24 / 32 / pill.
- Pill buttons & badges. Cards: `--radius-xl`, soft shadow, optional colored top accent.
- Motion: `--ease-out` ~220ms; gentle, never showy.

## Motion
Motion is **functional, not decorative** — it confirms an action, guides the eye, or softens a change.
Principles: **purposeful · quick (140–360ms) · gentle (ease-out) · accessible**.

**Easing tokens** — `--ease-out` (default: enter, hover, expand) · `--ease-emphasized` (hero reveals,
big moments) · `--ease-spring` (confirmations only: a check, a toggle) · `--ease-in` (exits — accelerate
away) · `--ease-in-out` (things that move and return) · `--ease-standard` (Material-style neutral).
Never `linear` or hard bounces.

**Duration tokens** — `--dur-instant` 90ms (tick, ripple) · `--dur-fast` 140ms (hovers, toggles) ·
`--dur-base` 220ms (most transitions) · `--dur-slow` 360ms (entrances, overlays) · `--dur-slower` 560ms
(hero choreography). Duration scales with travel distance.

**Choreography tokens** — `--motion-rise` 14px / `--motion-rise-lg` 28px (fade-up travel) ·
`--stagger` 70ms / `--stagger-tight` 45ms (delay between sequenced items).

**Motion recipes** (reusable patterns — see the live Motion section):
- **Enter** — fade & rise: opacity 0→1 + translateY `--motion-rise`→0, `--dur-slow`, ease-out.
- **Sequence** — stagger children `--stagger` apart (lists, grids, hero lines).
- **Overlay** — scrim fades + panel scales 0.96→1, `--dur-slow`, emphasized.
- **Confirm** — spring pop: scale 0.6→1 with `--ease-spring` (checkmarks, toggles only).
- **Loading** — shimmer sweep (~1.4s loop) — the one allowed continuous motion.
- **Exit** — fade & fall: opacity 1→0 + slight translateY, `--dur-fast`, ease-in.

**Standard interactions**

| Interaction | What changes | Token |
|---|---|---|
| Hover — solid button | Fill steps one shade darker (red-500 → 600) | 140ms · ease-out |
| Hover — ghost / outline | Soft sunken background fills in | 140ms · ease-out |
| Hover — card (clickable) | Lifts 6px, shadow deepens (sm → lg) | 220ms · ease-out |
| Hover — link | Underline wipes in from the left | 220ms · ease-out |
| Press — button | Fill darkens again + `translateY(1px)` | 140ms · ease-out |
| Focus — any control | 3px berry-blue focus ring appears | instant |
| Enter — content / overlay | Fade up 12–14px, stagger ~70ms | 360ms · ease-out |

**Always** wrap non-essential motion so it collapses under `@media (prefers-reduced-motion: reduce)`.
No infinite/looping animation on real content. See the live **Motion** section of `design-system.html`.

### Motion utility layer (`tokens/motion.css` + `motion.js`)

Ships in `styles.css` — don't hand-roll entrances or scroll reveals; they're the #1 source of
content stranded at `opacity:0`. The layer is **fail-safe: content is always visible without JS**,
and every utility collapses under reduced motion.

- **Entrance (no JS):** `cb-anim cb-anim--rise` (also `--fade / --scale / --slide-l/-r / --pop`),
  tune with `--fast/--slow/--emph`, sequence with `cb-delay-1…6`, or wrap a group in `cb-stagger`.
- **Reveal on scroll:** add `data-reveal` (or `="scale|left|right|fade"`) and include
  `<script src="motion.js"></script>` once in `<head>`. It sets `html.cb-js`, reveals each element
  on intersection, watches for injected nodes, and has a timeout safety net. **Without the script
  every `[data-reveal]` element simply stays visible** — nothing is ever lost. Stagger a group by
  setting `--i: 0,1,2…` per child.
- **Hover (pointer-gated, reduced-motion safe):** `cb-hover-lift`, `cb-hover-grow`, `cb-hover-glow`,
  `cb-press`.
- **Loading (only allowed looping motion):** `cb-spin`, `cb-pulse`, `cb-bar` (indeterminate).

### App utilities (`tokens/utilities.css`)
Layout/interaction primitives for building detailed apps: `cb-container`, `cb-stack`, `cb-cluster`,
`cb-row`/`cb-grow`, `cb-grid` (auto-fit, set `--min`), `cb-shell` (sidebar app shell), `cb-sticky`,
`cb-scroll`, `cb-divider`, `cb-panel`, plus `cb-sr-only` / `cb-skip-link`. Use **`cb-interactive`**
for any clickable row/cell/nav-item — its hover uses `--surface-hover` (guaranteed visible in light
**and** dark; `surface-card→surface-page` can be a no-op).

## Voice
Warm + credible. Sentence case. Speak to **"you."** Lead with proof (5,000+ careers, since 2012).
Friendly action CTAs ("Apply now", "Enroll today"). **No emoji** in product/web. Reinforce inclusivity
(no degree/tests required, scholarships, veterans support).

## Accessibility (WCAG 2.2)
- Body text on white: `--neutral-800` (14.2:1) or `--text-muted` (5.3:1).
- Links: `--blue-600` (6.0:1). Green text: `--green-800+` (6.5:1; green-700 is 4.3:1 — large text only).
- Cherry red and leaf green are **accent / large-text** colors — don't use raw red-500/green-500 for small body text.
- Interactive brand-colored text (links, breadcrumb hover) uses `--text-brand` / `--text-brand-hover`
  (red-600/700, ≥4.5:1) — never raw red-500 (~3.9:1, fails AA for normal text).
- Hover **must not lower** contrast: solid fills step darker, hover surfaces use `--surface-hover`
  (visible in both themes), and control borders use green-600+ on hover (green-500 is only ~2.2:1).
- White button text passes on cherry (3.9:1) and green-600 (3.0:1) at large/bold sizes (our buttons are 20px bold).
- Focus: visible 3px berry-blue ring on every interactive element.

## Don'ts
- No emoji in the system. · No bluish-purple gradients. · No recoloring the mark. · No Inter/Arial substitutes
  for Roboto in final work. · No small body text in raw cherry/leaf.

## Platform theme payload (multi-brand ecosystem)
On the Refactored.ai multi-brand platform this brand is **`colaberry-training`** (the school / open-enrollment segment). The machine-loadable theme for `brands.metadata` lives at **`brand-profile/colaberry-training.brand.json`** — the full bg/fg/accent/line/status contract in light **and** dark with measured WCAG ratios (all gates pass: fg 14.2/15.1, fg-muted 5.3/9.2, button label 4.7, accent-on-bg 4.7/4.0). The table-based email sender identity (header / button / footer + legal block for `sender_profiles`) is `brand-profile/email-sender-profile.html`; support address `admissions@colaberry.com`. Rules that survive translation: platform `accent` = red-600 `#E5121D`, never raw cherry; dark-mode red *text* uses red-300; fonts are all open-license ($0 typeface budget).

## Fonts & licensing
Roboto, Roboto Mono — Apache-2.0. Quicksand — SIL OFL-1.1. **Self-hosted** in `assets/fonts/`
(no CDN, works offline); see `assets/fonts/LICENSES.md`.
