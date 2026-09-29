# Colaberry DS — project instructions

## Responsive ground rules (apply to every page, component, and template)

Every live page must be clean at **390px, 768px, and 1280px+** — no horizontal
scrollbar, no clipped text, at any width in between.

1. **Never let `white-space: nowrap` meet a flexible container.** Nowrap is
   only for short mono chips/dates/nav links that are hidden or wrapped on
   mobile. Any button/pill with sentence-length labels must wrap on small
   screens (`.pgbtn` and `.cb-btn` already do this ≤640px/≤480px — keep it).
2. **Flex rows of links/chips/buttons always get `flex-wrap: wrap`** plus a
   row gap (e.g. `gap: 8px 22px`). The footer `.aw-footer__links` bug was
   exactly this.
3. **Grid columns use `minmax(0, …)` or `auto-fit/minmax()`**, never bare
   `1fr 1fr` with unshrinkable content. Add `min-width: 0` to flex/grid
   children that contain text (`.cb-min0` utility exists).
4. **No fixed pixel widths on content containers.** Use `max-width` +
   `width: 100%`, and `clamp()` for type (already the norm: headings use
   `clamp(min, vw, max)`).
5. **Two-column heroes/sections must stack** under ~900px with a media query;
   side cards become full-width (`minmax(320px, 420px)` columns need a
   stacking breakpoint).
6. **`overflow: hidden` on a section hides bugs, it doesn't fix them.**
   Before shipping, probe for children whose rect extends past the viewport
   (see `scraps/rwd-harness.html` — load any page at 390/768 and run
   `probe(id)` / `probeClipped(id)`).
7. **Base layer (tokens/base.css) is the safety net** — media, iframes and
   form controls are capped at `max-width: 100%`, body has
   `overflow-wrap: break-word`. Don't undo these; don't rely on them either.
8. **Touch targets ≥ 44px** on mobile; body text ≥ 14px, fine print ≥ 12px.
9. **Marquees and off-canvas drawers** must be clipped by an
   `overflow: hidden` parent (marquee) or `visibility: hidden` +
   transform (drawer) so they never create horizontal scroll.
10. **Test after every layout change**: open `scraps/rwd-harness.html`,
    `loadBoth('../<page>.html')`, then `probe('a')`/`probe('b')` must both
    return zero offenders.
