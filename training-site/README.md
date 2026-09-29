# Colaberry Training Site

A rebuild of **training.colaberry.com** on the Colaberry design system — a complete, linked
multi-page site. The home (`index.html`) is a flagship, awwwards-grade immersive landing;
every other page is a clean, fast content page sharing one header/footer.

## Flagship landing (`index.html`)

An immersive, motion-led home built with **GSAP + ScrollTrigger**, **Lenis** smooth scroll, and
a **Three.js** animated particle wave in the hero and final CTA. Features: a counting preloader,
split-line hero reveal, custom cursor + magnetic buttons (desktop), an infinite marquee that
reacts to scroll velocity, a scrub-colored manifesto, animated stat counters, a pinned
horizontal programs gallery, parallax feature images, and a big testimonial.

- **Mobile-friendly:** the horizontal pin collapses to a vertical stack < 1000px, the nav becomes
  a full-screen drawer, the custom cursor is disabled on touch, and the Three.js field drops its
  particle count + pixel ratio. All motion is **reduced-motion safe** and content stays visible if
  a library fails to load.
- `home-classic.html` is the earlier standard home, kept as an alternate (linked in the footer).
- Files: `landing.css`, `landing.js` (libraries load from CDN).

## Pages (16)

| Page | File |
|---|---|
| Home (flagship) | `index.html` |
| Home (classic) | `home-classic.html` |
| Data Analytics | `data-analytics.html` |
| Data Science | `data-science.html` |
| Job Readiness | `job-readiness.html` |
| How It Works | `how-it-works.html` |
| Our Story | `our-story.html` |
| Mentorship | `mentorship.html` |
| Success Stories | `success-stories.html` |
| Reviews | `reviews.html` |
| Pricing | `pricing.html` |
| Blog | `blog.html` |
| Events | `events.html` |
| FAQ | `faq.html` |
| Hire Our Grads | `hire-our-grads.html` |
| Contact | `contact.html` |

## Built on the design system

- **One-link styling:** every page links `../components.css` (tokens + base + motion + utilities +
  all 20 CSS-only components). Plus `site.css` for page composition. No React, no build.
- **Motion:** `data-reveal` scroll reveals (`../motion.js`) + `cb-anim`/`cb-hover-lift`, reduced-motion safe.
- **Shared chrome:** `site.js` injects the header (with Courses dropdown), mobile drawer, and footer
  on every page from a single source, and highlights the active nav link.

## Images

Imagery is referenced directly from Colaberry's HubSpot CDN (`training.colaberry.com/hubfs/…`),
so the pages mirror the live site's photography. These load in any browser. Note: screenshot/PPTX
export tools can't embed remote images or the RemixIcon webfont, so exports may show placeholders —
everything renders correctly in a real browser.

## Notes

- Apply / Log in buttons point to the real Colaberry login (`app.colaberry.com`).
- The contact form is demo-wired (shows a success message); connect it to a backend to go live.
- Content is sourced from the live site (Home, Data Analytics, How It Works fetched verbatim);
  Data Science curriculum, Success Stories, and Our Story use representative on-brand copy.
