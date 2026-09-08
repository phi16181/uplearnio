import { Link, Navigate, useParams } from 'react-router-dom'
import { LEAD_SLUG, getCourseBySlug, resolvePracticePath } from '../data/courses.js'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  // Practices were renamed and retired during the repositioning. Anything that
  // is not a current practice resolves to where it belongs now.
  if (!course) {
    return <Navigate to={resolvePracticePath(slug)} replace />
  }

  const {
    title,
    track,
    level,
    duration,
    metric,
    tagline,
    intro,
    builtAroundYou,
    reasons,
    outcomeIntro,
    outcomes,
    audience,
    engagement,
    deliverables,
    faqs,
    quote,
    closingEyebrow,
    closingTitle,
    closingBody,
  } = course

  const isLead = course.slug === LEAD_SLUG
  const ctaTo = isLead ? '/contact' : `/practices/${LEAD_SLUG}`
  const ctaLabel = isLead ? 'Request This Engagement' : 'Start With a Roadmap'

  return (
    <>
      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="container" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
          <div>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>{track} &middot; {duration}</span>
            <h1>{title}</h1>
            <p className="lead" style={{ margin: '20px auto 34px' }}>{tagline}</p>
            <p style={{ color: 'var(--slate-400)', maxWidth: 640, margin: '0 auto 34px' }}>{intro}</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <Link to={ctaTo} className="btn btn-primary">{ctaLabel}</Link>
              <Link to="/contact" className="btn btn-ghost">Talk to Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="engagement-facts">
            <div className="engagement-fact">
              <span>Built around you</span>
              <p>{builtAroundYou}</p>
            </div>
            <div className="engagement-fact-side">
              <div className="engagement-fact">
                <span>Measured against</span>
                <p>{metric}</p>
              </div>
              <div className="engagement-fact">
                <span>Fit</span>
                <p>{level}</p>
              </div>
              <div className="engagement-fact">
                <span>Duration</span>
                <p>{duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Why This Practice</span>
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

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Outcomes</span>
            <h2>What Your Team Walks Away With</h2>
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
            <Link to={ctaTo} className="btn btn-primary">{ctaLabel}</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Who This Is For</span>
            <h2>Built for Organizations That&hellip;</h2>
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

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">How It Runs</span>
            <h2>The Engagement, and What You Keep</h2>
          </div>
          <div className="grid-2">
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 18 }}>How the work runs</h3>
              <div className="stack-list">
                {engagement.map((item) => (
                  <div key={item} className="audience-item">
                    <span className="check-dot">&#10003;</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 18 }}>What your organization owns after</h3>
              <div className="stack-list">
                {deliverables.map((item) => (
                  <div key={item} className="audience-item">
                    <span className="check-dot">&#10003;</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
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
            <Link to={ctaTo} className="btn btn-primary">{ctaLabel}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
