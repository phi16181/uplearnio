// Renders every public route to static HTML after `vite build`, so the site
// serves real content to crawlers and AI assistants rather than an empty shell.
// Hosting still needs an SPA fallback for anything not listed here.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import courses, { SLUG_REDIRECTS } from '../src/data/courses.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')

const SITE_NAME = 'UpLearn.io'

const ROUTES = [
  {
    url: '/',
    title: `${SITE_NAME} — On-Site AI Capability Building`,
    description:
      'Generic AI training does not survive contact with your operation. We build the curriculum on-site, around your workflows, your systems, and your data, then leave the capability behind.',
  },
  {
    url: '/capability-assessment',
    title: `Capability Assessment — ${SITE_NAME}`,
    description:
      'A two-week on-site diagnostic that baselines where your team is, identifies the workflows worth changing first, and produces a costed roadmap.',
  },
  {
    url: '/about',
    title: `About — ${SITE_NAME}`,
    description:
      'A learning sciences company that works on-site with operations teams. We do not just train your teams. We teach them how to train themselves.',
  },
  {
    url: '/contact',
    title: `Contact — ${SITE_NAME}`,
    description: 'Talk to us about an on-site capability assessment for your operations team.',
  },
  ...courses.map((course) => ({
    url: `/practices/${course.slug}`,
    title: `${course.title} — ${SITE_NAME}`,
    description: course.tagline,
  })),
]

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function applyMeta(html, { title, description }) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(title)}</title>`)
    .replace(
      /<meta name="description" content="[\s\S]*?"\s*\/?>/,
      `<meta name="description" content="${escapeAttribute(description)}" />`,
    )
}

const { render } = await import(path.join(root, 'dist-ssr', 'entry-server.js'))
const template = await readFile(path.join(distDir, 'index.html'), 'utf8')

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find the root container in dist/index.html')
}

for (const route of ROUTES) {
  const html = applyMeta(template, route).replace(
    '<div id="root"></div>',
    `<div id="root">${render(route.url)}</div>`,
  )

  const outFile =
    route.url === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.url.slice(1), 'index.html')

  await mkdir(path.dirname(outFile), { recursive: true })
  await writeFile(outFile, html)
  console.log(`prerendered ${route.url}`)
}

// The catalog used to live at /courses/:slug and four slugs were renamed with
// it. A host-level 301 is the right answer where you can configure one; these
// stubs are what a plain static host serves in the meantime. They deliberately
// skip the app bundle, so a crawler follows the canonical link and a browser
// never hydrates the wrong markup.
const LEGACY_SLUGS = [
  ...Object.keys(SLUG_REDIRECTS),
  ...courses.map((course) => course.slug).filter((slug) => !(slug in SLUG_REDIRECTS)),
]

for (const legacySlug of LEGACY_SLUGS) {
  const target = `/practices/${SLUG_REDIRECTS[legacySlug] ?? legacySlug}`
  const stub = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="robots" content="noindex" />
    <meta http-equiv="refresh" content="0; url=${escapeAttribute(target)}" />
    <link rel="canonical" href="${escapeAttribute(target)}" />
    <title>Moved — ${SITE_NAME}</title>
  </head>
  <body>
    <p>This page has moved to <a href="${escapeAttribute(target)}">${escapeAttribute(target)}</a>.</p>
  </body>
</html>
`

  const outFile = path.join(distDir, 'courses', legacySlug, 'index.html')
  await mkdir(path.dirname(outFile), { recursive: true })
  await writeFile(outFile, stub)
  console.log(`redirect stub /courses/${legacySlug} -> ${target}`)
}

console.log(`prerender: wrote ${ROUTES.length} routes and ${LEGACY_SLUGS.length} redirect stubs`)
