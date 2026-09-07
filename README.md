# UpLearn.io

A fast, prerendered React site for uplearn.io (previously WordPress/Elementor), built with Vite.

UpLearn.io is positioned as an on-site AI capability-building practice for operations teams:
the curriculum is assembled on-site around a client's workflows, systems, and data, and every
engagement is measured against an operating metric the client already owns.

## Why it's fast
- No WordPress/PHP/MySQL request cycle — this compiles to static HTML/JS/CSS served from a CDN.
- No page-builder (Elementor) runtime overhead or plugin bloat.
- No external fonts or heavy images — visuals are inline SVG/CSS.
- Every public route is prerendered to static HTML at build time, then hydrated, so crawlers
  and AI assistants get real content and users still get client-side routing after first paint.

## Pages
- `/` — Home
- `/capability-assessment` — The two-week diagnostic that scopes every other engagement
- `/about` — About
- `/contact` — Contact
- `/practices/:slug` — Practice landing pages, driven by `src/data/courses.js`
- `/courses/:slug` — Redirects to `/practices/:slug`, remapping renamed slugs on the way

## Practice content

Everything on a practice page lives in `src/data/courses.js` as a plain array. Add, remove, or
edit a practice by editing that file; each one automatically gets a page, a Header "Practices"
dropdown entry, a Footer link, and a prerendered route with no other code changes.

Per-entry fields:

| Field | Purpose |
|---|---|
| `slug`, `title`, `track`, `gradient` | Identity, taxonomy, and card styling |
| `level` | Organizational readiness — who this fits, not learner level |
| `duration` | A concrete tailored range, e.g. `"10–16 weeks, tailored"` |
| `metric` | The operating metric the engagement is measured against |
| `builtAroundYou` | How the engagement is customized to the client. Required on every entry |
| `engagement` | How the work actually runs: on-site cadence, participants, structure |
| `deliverables` | Artifacts the client organization owns afterward — never access, never membership |
| `tagline`, `intro`, `reasons`, `outcomeIntro`, `outcomes`, `audience`, `faqs` | Page body |
| `quote`, `closingEyebrow`, `closingTitle`, `closingBody` | Pull quote and closing CTA |

`FEATURED_SLUGS` controls which two practices lead the homepage. `SLUG_REDIRECTS` maps
pre-repositioning slugs to their current ones.

## Getting started
```
npm install
npm run dev            # local dev server
npm run build          # client build + SSR build + prerender -> dist/
npm run build:client   # client build only, no prerender
npm run preview        # preview the production build locally
```

`npm run build` runs three steps: a client build, an SSR build of `src/entry-server.jsx` into
`dist-ssr/`, and `scripts/prerender.js`, which renders each public route and writes
`dist/<route>/index.html` with a route-specific `<title>` and meta description. New public
routes need an entry in the `ROUTES` array in that script (practice pages are generated from
`src/data/courses.js` automatically).

## Deploying
This is a static site. `npm run build` outputs a `dist/` folder you can deploy to Netlify,
Vercel, Cloudflare Pages, GitHub Pages, or any static host/CDN. Prerendered routes are served
as real files; still configure an SPA fallback to `index.html` for anything not prerendered
(such as `/courses/:slug` redirect links) so client-side routing works on direct hits.

## Images
Imagery beyond the logo and founder photo is inline SVG/CSS rather than re-hosted JPEGs, which
keeps the site fast. Swap in real photos any time by adding files to `src/assets/` and importing
them where needed.
