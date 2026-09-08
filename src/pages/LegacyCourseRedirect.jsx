import { Navigate, useParams } from 'react-router-dom'
import { getRedirectForSlug } from '../data/courses.js'

// The catalog moved from /courses/:slug to /practices/:slug during the
// repositioning, and four slugs were renamed at the same time. Both hops
// happen here so links already in circulation keep resolving.
export default function LegacyCourseRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/practices/${getRedirectForSlug(slug) ?? slug}`} replace />
}
