import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `vite preview` applies an SPA fallback before looking for nested index.html
// files, which would serve the home page for every prerendered route and make
// the preview lie about what a static host actually returns. Resolve the
// prerendered file first; unknown paths still fall through to the SPA fallback.
function servePrerendered() {
  return {
    name: 'serve-prerendered',
    configurePreviewServer(server) {
      const outDir = path.resolve(import.meta.dirname, 'dist')
      server.middlewares.use((req, _res, next) => {
        const pathname = req.url.split('?')[0]
        if (pathname !== '/' && !path.extname(pathname)) {
          const candidate = path.join(outDir, pathname, 'index.html')
          if (candidate.startsWith(outDir) && fs.existsSync(candidate)) {
            req.url = path.posix.join(pathname, 'index.html')
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), servePrerendered()],
})
