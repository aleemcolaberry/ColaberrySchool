# Deploying the Colaberry Design System

This repo is a **static, dependency-free site** — `index.html` (the landing page) and
`design-system.html` (the living docs) at the root, with CSS/JS/asset files beside them.
Everything is **self-hosted**: fonts (`assets/fonts/`), icon font, and all JS libraries
(React, Babel, GSAP, Lucide, three.js — `assets/vendor/`). Zero CDN requests, so the site
works offline and on locked-down networks. Host it anywhere that serves static files.
No build step required.

---

## 1 · Push it to GitHub

From the project folder (the one containing `index.html`):

```bash
git init
git add .
git commit -m "Colaberry Design System v1.0"
git branch -M main
git remote add origin https://github.com/<your-account>/colaberry-design-system.git
git push -u origin main
```

> Create the empty `colaberry-design-system` repo on GitHub first (no README/license —
> this repo already has them). Replace `<your-account>` with `colaberry` or your username.

If the remote already exists, just `git remote set-url origin <url>` instead of `add`.

---

## 2 · Turn on GitHub Pages (free hosting)

A workflow is already included at `.github/workflows/deploy.yml`. Once pushed:

1. Repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The "Deploy to GitHub Pages" action runs on every push to `main`.
4. Your site goes live at:
   `https://<your-account>.github.io/colaberry-design-system/`

The landing page is `index.html`; the docs are at `/design-system.html`.

> Prefer the classic Pages mode? Settings → Pages → Source: **Deploy from a branch** →
> `main` / `/ (root)`. The workflow path is recommended, though.

---

## 3 · Other one-click hosts (optional)

All work with zero configuration — point them at the repo and deploy:

| Host | How |
|---|---|
| **Netlify** | "Add new site → Import from Git" → pick the repo → leave build empty, publish dir `/` |
| **Vercel** | "Add New → Project" → import repo → Framework preset **Other**, output dir `/` |
| **Cloudflare Pages** | "Create application → Pages" → connect repo → no build command, output `/` |
| **Surge** | `npm i -g surge && surge .` |

---

## 4 · Use it as a dependency in another project

After it's on GitHub you can vendor it into an app:

```bash
# inside your app
git submodule add https://github.com/<your-account>/colaberry-design-system.git vendor/colaberry
```

```html
<link rel="stylesheet" href="/vendor/colaberry/styles.css">
<script src="/vendor/colaberry/_ds_bundle.js"></script>
```

Full integration steps (plain HTML, React/Vite/Next, tokens, dark mode) are in
[`IMPLEMENTATION.md`](IMPLEMENTATION.md).

---

## 5 · Cache-busting (already wired)

Every project-relative `.css` / `.js` / `.jsx` reference carries a `?v=<content-hash>`
stamp (including the `@import` chain inside `styles.css`), so browsers cache aggressively
but always pick up changed files. **After editing any CSS/JS, re-stamp before you push:**

```bash
npm run stamp   # = node _stamp-versions.mjs — idempotent, rewrites only what changed
```

Vendored libraries in `assets/vendor/` and font binaries are version-pinned by filename
and deliberately left unstamped.

> **One remaining external class:** content photos on the blog and training-site pages
> still hot-link Colaberry's own HubSpot (`training.colaberry.com/hubfs/…`) — first-party
> infrastructure, not a third-party CDN. Each carries an `onerror` fallback (brand
> placeholder, or the logo hides), so nothing looks broken offline. To make those pages
> fully self-contained, export the files from HubSpot into `assets/remote/` and swap the
> `src` attributes (find them with a search for `training.colaberry.com/hubfs`).

---

## 6 · Verify before you ship

- [ ] `index.html` opens locally (`npm start` → http://localhost:3000) with no console errors
- [ ] **Offline check**: DevTools → Network → "Offline" (after one load) or disconnect Wi-Fi — pages still render with correct fonts and icons; the Network panel shows zero requests to external domains
- [ ] `npm run stamp` was run after the last CSS/JS edit
- [ ] Logos load from `assets/logo/`
- [ ] Pages build succeeds (green check in the **Actions** tab)
- [ ] The live URL shows the landing page and `/design-system.html` shows the docs

That's it — your design system is live and shareable. 🎉
