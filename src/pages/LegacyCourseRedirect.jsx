import { Navigate, useParams } from 'react-router-dom'
import { resolvePracticePath } from '../data/courses.js'

// The catalog moved from /courses/:slug to /practices/:slug, some practices
// were renamed, and three were retired. Every old link resolves here: to the
// current page where one exists, to the practice index where it does not.
export default function LegacyCourseRedirect() {
  const { slug } = useParams()
  return <Navigate to={resolvePracticePath(slug)} replace />
}
