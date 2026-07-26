import { Link } from 'react-router-dom'

export default function CourseCard({ slug, track, title, level, duration, gradient }) {
  return (
    <Link to={`/courses/${slug}`} className="course-card">
      <div className="course-card-media" style={{ background: gradient }}>
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
          <path d="M4 6.5 12 3l8 3.5-8 3.5-8-3.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7 9v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V9" stroke="white" strokeWidth="1.5" />
          <path d="M20 7v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="course-card-body">
        <div className="course-track">{track}</div>
        <h3>{title}</h3>
        <div className="course-meta">
          <span>{level}</span>
          <span>&middot;</span>
          <span>{duration}</span>
        </div>
      </div>
    </Link>
  )
}
