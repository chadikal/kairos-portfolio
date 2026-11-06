import assert from 'node:assert/strict';

const origin = process.env.SMOKE_ORIGIN || 'http://127.0.0.1:3000';
const response = await fetch(origin);
assert.equal(response.status, 200, 'Homepage must return HTTP 200');
const html = await response.text();
assert.match(html, /<title>KAIROS \| Interface Tech/);
assert.match(html, /<html[^>]+lang="en"/);
assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, 'Exactly one h1');
for (const id of ['main', 'home', 'work', 'services', 'about', 'contact']) {
  assert.ok(html.includes(`id="${id}"`), `Missing section: ${id}`);
}
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'DOM IDs must be unique');
const anchorTargets = [...html.matchAll(/href="#([^"]*)"/g)].map(
  (match) => match[1],
);
for (const target of anchorTargets) {
  assert.ok(ids.includes(target), `Broken anchor: #${target}`);
}
assert.match(html, /aria-controls="primary-navigation"/);
assert.match(html, /aria-expanded="false"/);
assert.match(html, /Skip to content/);
assert.match(html, /Techblade/);
assert.match(html, /Bon Marché/);
assert.match(html, /Project imagery to be added/);
assert.match(html, /Details coming soon/);
assert.doesNotMatch(
  html,
  /href="(?:#|mailto:|https?:\/\/(?:instagram|github)\.com\/?)(?:"|>)/,
  'No dead or fabricated contact destinations',
);
assert.match(html, /property="og:image"/);
assert.match(html, /name="twitter:card" content="summary_large_image"/);
assert.match(html, /name="robots" content="noindex, nofollow"/);
assert.doesNotMatch(
  html,
  /�|Ã©|â†/,
  'Content must not contain encoding corruption',
);
const images = [...html.matchAll(/<img\s[^>]*>/g)].map((match) => match[0]);
assert.ok(images.length >= 2);
for (const img of images) {
  assert.match(
    img,
    /\balt="[^"]+"/,
    'Brand images need useful alternative text',
  );
  assert.match(img, /\bwidth="\d+"/);
  assert.match(img, /\bheight="\d+"/);
}
const paths = ['/icon.png', '/apple-icon.png', '/opengraph-image.jpeg'];
for (const img of images) {
  const src = img.match(/\ssrc="([^"]+)"/)?.[1];
  if (src) paths.push(src.replaceAll('&amp;', '&'));
}
const stylesheetPaths = [
  ...html.matchAll(/<link[^>]+href="([^"]+\.css[^\"]*)"[^>]*>/g),
].map((match) => match[1]);
assert.ok(stylesheetPaths.length > 0, 'Compiled stylesheet must be present');
let styles = '';
for (const path of stylesheetPaths) {
  const result = await fetch(new URL(path.replaceAll('&amp;', '&'), origin));
  assert.equal(result.status, 200);
  styles += await result.text();
}
for (const rule of [
  'prefers-reduced-motion',
  'forced-colors',
  'focus-visible',
  'grid-template-columns',
]) {
  assert.ok(styles.includes(rule), `Missing compiled CSS behavior: ${rule}`);
}
const fontPaths = [...html.matchAll(/href="([^\"]+\.woff2[^\"]*)"/g)].map(
  (match) => match[1],
);
assert.ok(fontPaths.length > 0, 'Self-hosted font preload must be present');
paths.push(...fontPaths);
for (const path of new Set(paths)) {
  const asset = await fetch(new URL(path, origin));
  assert.equal(asset.status, 200, `Asset request failed: ${path}`);
  assert.ok((await asset.arrayBuffer()).byteLength > 0);
}
const missing = await fetch(new URL('/missing-page-smoke-check', origin));
assert.equal(missing.status, 404, 'Unknown pages must return HTTP 404');
console.log(
  `Production smoke checks passed: sections, ${anchorTargets.length} anchor destinations, metadata, encoded content, CSS behaviors, responsive image responses, icons, fonts, and 404.`,
);
console.log(
  'This does not verify layout, JavaScript interactions, contrast, keyboard operation, or screen-reader behavior in a browser.',
);
