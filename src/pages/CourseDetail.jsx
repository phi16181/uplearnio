import { Link, useParams } from 'react-router-dom'
import { getCourseBySlug } from '../data/courses.js'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  if (!course) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Course Not Found</span>
          <h1 style={{ fontSize: 32, marginBottom: 16 }}>We couldn&rsquo;t find that course.</h1>
          <p style={{ color: 'var(--slate-500)', marginBottom: 28 }}>
            It may have moved. Browse our current courses or get in touch below.
          </p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    )
  }

  const {
    title,
    track,
    level,
    duration,
    tagline,
    intro,
    reasons,
    outcomeIntro,
    outcomes,
    audience,
    included,
    faqs,
    quote,
    closingEyebrow,
    closingTitle,
    closingBody,
  } = course

  return (
    <>
      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="container" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
          <div>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>{track} &middot; {level} &middot; {duration}</span>
            <h1>{title}</h1>
            <p className="lead" style={{ margin: '20px auto 34px' }}>{tagline}</p>
            <p style={{ color: 'var(--slate-400)', maxWidth: 640, margin: '0 auto 34px' }}>{intro}</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Get More Information</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Why This Course</span>
            <h2>What Makes This Different</h2>
          </div>
          <div className="reason-row">
            {reasons.map((r, i) => (
              <div key={r.title} className="feature-card reason-card">
                <div className="reason-number">{String(i + 1).padStart(2, '0')}</div>
                <h3>{r.title}</h3>
                <p style={{ color: 'var(--slate-500)', fontSize: 14.5 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Curriculum</span>
            <h2>What You&rsquo;ll Gain</h2>
            <p>
              <strong>Your Outcome:</strong> {outcomeIntro}
            </p>
          </div>
          <div className="outcome-grid">
            {outcomes.map((o) => (
              <div key={o.title} className="outcome-card">
                <h3 style={{ fontSize: 17, marginBottom: 10 }}>{o.title}</h3>
                <p style={{ color: 'var(--slate-500)', fontSize: 14.5 }}>{o.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/contact" className="btn btn-primary">Get More Information</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Who This Is For</span>
            <h2>Designed for Professionals Who&hellip;</h2>
          </div>
          <div className="audience-list">
            {audience.map((item) => (
              <div key={item} className="audience-item">
                <span className="check-dot">&#10003;</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">What&rsquo;s Included</span>
            <h2>Everything You Need to Succeed</h2>
          </div>
          <div className="included-list">
            {included.map((item) => (
              <div key={item} className="audience-item">
                <span className="check-dot">&#10003;</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {faqs.map((f) => (
              <div key={f.q} className="faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <blockquote className="quote-block">
            &ldquo;{quote}&rdquo;
            <cite>Ben Manning</cite>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <span className="eyebrow">{closingEyebrow}</span>
            <h2>{closingTitle}</h2>
            <p>{closingBody}</p>
            <Link to="/contact" className="btn btn-primary">Contact Us to Get Started</Link>
          </div>
        </div>
      </section>
    </>
  )
}
