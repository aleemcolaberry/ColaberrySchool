/* stamp-versions.mjs — cache-busting for the static site.
   Appends ?v=<content-hash> to every project-relative .css/.js/.jsx
   reference in HTML files, and to @import chains inside CSS, so browsers
   always fetch the latest version of a changed file while caching the rest.
   Idempotent — run it before every deploy:  node _stamp-versions.mjs
   (underscore prefix keeps it out of the design-system compiler)        */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, posix } from 'node:path';

const SKIP_DIRS = new Set(['.git', '.github', '.bundles', 'node_modules', 'scraps', 'templates', 'uploads']);
const IMMUTABLE = (p) => p.startsWith('assets/vendor/') || p.startsWith('assets/fonts/files/');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (!SKIP_DIRS.has(name)) walk(p, out); }
    else out.push(p.split('\\').join('/'));
  }
  return out;
}
const files = walk('.').map((p) => p.replace(/^\.\//, ''));
const hashes = new Map();
function h32(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(16).padStart(8, '0'); }
function hashOf(p) {
  if (!hashes.has(p)) { try { hashes.set(p, h32(readFileSync(p, 'utf8'))); } catch { hashes.set(p, null); } }
  return hashes.get(p);
}
const resolveRef = (fromFile, ref) => posix.normalize(posix.join(dirname(fromFile), ref));

// 1) CSS @import chains, deepest first so parent hashes include child stamps
const cssFiles = files.filter((p) => p.endsWith('.css') && !IMMUTABLE(p));
const IMP = /@import\s+url\('([^']+?\.css)(?:\?v=[0-9a-f]+)?'\);/g;
const depth = (p, seen = new Set()) => {
  if (seen.has(p)) return 0; seen.add(p);
  let css; try { css = readFileSync(p, 'utf8'); } catch { return 0; }
  let d = 0; for (const m of css.matchAll(IMP)) d = Math.max(d, 1 + depth(resolveRef(p, m[1]), seen));
  return d;
};
for (const p of cssFiles.slice().sort((a, b) => depth(a) - depth(b))) {
  let css; try { css = readFileSync(p, 'utf8'); } catch { continue; }
  const next = css.replace(IMP, (all, ref) => {
    const h = hashOf(resolveRef(p, ref));
    return h ? `@import url('${ref}?v=${h}');` : all;
  });
  if (next !== css) { writeFileSync(p, next); hashes.delete(p); }
}
// 2) HTML references
const REF = /\b(href|src)="([^"?#]+\.(?:css|js|jsx))(\?[^"]*)?"/g;
let stamped = 0;
for (const p of files.filter((f) => f.endsWith('.html'))) {
  let html; try { html = readFileSync(p, 'utf8'); } catch { continue; }
  const next = html.replace(REF, (all, attr, ref) => {
    if (/^(https?:)?\/\//.test(ref) || ref.startsWith('data:')) return all;
    const t = resolveRef(p, ref);
    if (IMMUTABLE(t)) return all; // vendored libs & font binaries are version-pinned by name
    const h = hashOf(t);
    return h ? `${attr}="${ref}?v=${h}"` : all;
  });
  if (next !== html) { writeFileSync(p, next); stamped++; }
}
console.log(`stamp-versions: ${stamped} HTML file(s) updated, ${hashes.size} assets hashed.`);
