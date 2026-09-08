import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard.jsx'
import courses, { LEAD_SLUG } from '../data/courses.js'

const LADDER = [
  { question: 'Where do we invest?', position: 'Front door' },
  { question: 'Build the top item.', position: 'Core delivery' },
  { question: 'Make it stick, and prepare for the next one.', position: 'Retention' },
]

export default function Practices() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Practices</span>
          <h1>Three practices. Most clients start with the roadmap.</h1>
          <p>
            Each engagement scopes the next. You can enter at any level, but the roadmap is
            the one that tells you which of the other two you actually need.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {courses.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">The Ladder</span>
            <h2>How the three fit together</h2>
          </div>
          <div className="ladder">
            {courses.map((course, i) => (
              <Link key={course.slug} to={`/practices/${course.slug}`} className="ladder-step">
                <span className="ladder-position">{LADDER[i].position}</span>
                <h3>{course.title}</h3>
                <p>{LADDER[i].question}</p>
                <span className="ladder-metric">{course.metric}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <span className="eyebrow">Start Here</span>
            <h2>Start with a roadmap.</h2>
            <p>
              We assess where AI actually pays in your network, whether your data can support
              it, and what to fund first. You leave with a costed, sequenced plan you can
              defend to finance &mdash; and a clear view of which of our other practices, if
              any, you need.
            </p>
            <Link to={`/practices/${LEAD_SLUG}`} className="btn btn-primary">
              See the Roadmap Practice
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
