# UpLearn.io — React Rebuild

A fast, static React rebuild of uplearn.io (previously WordPress/Elementor), built with Vite.

## Why it's faster
- No WordPress/PHP/MySQL request cycle — this compiles to static HTML/JS/CSS served from a CDN.
- No page-builder (Elementor) runtime overhead or plugin bloat.
- Production JS bundle: ~263 KB (~83 KB gzipped). CSS: ~12 KB gzipped. No external fonts or heavy images — visuals are inline SVG/CSS.
- Client-side routing (React Router) means navigating between pages doesn't reload the whole document.

## Pages
- `/` — Home
- `/about` — About
- `/contact` — Contact
- `/courses/:slug` — Course landing pages, driven by `src/data/courses.js`

Course content (title, description, curriculum, FAQ, etc.) lives entirely in `src/data/courses.js` as a
plain array — add, remove, or edit a course by editing that file. Every course automatically gets a page,
a Header "Courses" dropdown entry, and a Footer link with no other code changes needed.

## Getting started
```
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## ⚠️ Logo — action needed
I could not download the actual logo file from uplearn.io (the sandbox this was built in has no network
access to your domain, and the browser extension wasn't connected). `src/assets/logo.svg` is currently a
placeholder mark so the header/footer aren't empty.

To finish: replace `src/assets/logo.svg` with your real logo file. If your real logo is a PNG/JPG instead
of SVG, drop it in `src/assets/` (e.g. `logo.png`) and update the two `import logo from '../assets/logo.svg'`
lines in `src/components/Header.jsx` and `src/components/Footer.jsx` to point at the new filename.

## Images
All other imagery (hero graphic, course card icons, testimonial avatars) was rebuilt as lightweight inline
SVG/CSS rather than re-hosting the original JPEGs — this keeps the site fast and avoids large image
downloads. Swap in real photos any time by adding files to `src/assets/` and importing them where needed.

## Deploying
This is a static site. `npm run build` outputs a `dist/` folder you can deploy to Netlify, Vercel,
Cloudflare Pages, GitHub Pages, or any static host/CDN. Configure your host to redirect all paths to
`index.html` (SPA fallback) so client-side routing works on refresh/direct links.
