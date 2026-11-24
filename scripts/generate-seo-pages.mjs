import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routeMetadata, SITE_URL } from '../src/seoConfig.js';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(projectRoot, 'dist');
const template = await readFile(join(distRoot, 'index.html'), 'utf8');

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

function replaceMeta(html, selector, value) {
  const escaped = escapeHtml(value);
  const attribute = selector.startsWith('og:') ? 'property' : 'name';
  const pattern = new RegExp(`<meta ${attribute}="${selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" content="[^"]*" \\/>`);
  return html.replace(pattern, `<meta ${attribute}="${selector}" content="${escaped}" />`);
}

for (const [route, metadata] of Object.entries(routeMetadata)) {
  if (route === '/') continue;
  const canonical = `${SITE_URL}${route}`;
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(metadata.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);

  html = replaceMeta(html, 'description', metadata.description);
  html = replaceMeta(html, 'og:title', metadata.title);
  html = replaceMeta(html, 'og:description', metadata.description);
  html = replaceMeta(html, 'og:type', metadata.type);
  html = replaceMeta(html, 'og:url', canonical);
  html = replaceMeta(html, 'twitter:title', metadata.title);
  html = replaceMeta(html, 'twitter:description', metadata.description);

  const outputPath = join(distRoot, route.slice(1), 'index.html');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

console.log(`Generated ${Object.keys(routeMetadata).length - 1} route-specific SEO pages.`);

