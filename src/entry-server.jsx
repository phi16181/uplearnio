import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'

// Build-time only. scripts/prerender.js calls this once per public route and
// writes the result into dist/, so crawlers and AI assistants get real markup
// instead of an empty <div id="root">.
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
