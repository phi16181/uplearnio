import { Link } from 'react-router-dom'

const PHASES = [
  {
    label: 'Phase One',
    title: 'On-site, in the operation',
    body: 'We sit with the teams doing the work. We map the workflows, look at the systems behind them, and find where decisions are slow, manual, or made on a spreadsheet nobody fully understands.',
  },
  {
    label: 'Phase Two',
    title: 'Baseline, prioritize, cost',
    body: 'We baseline the operating metrics that matter, rank the workflows worth changing first by value and feasibility, and cost the sequence. Then we read it back to your leadership team.',
  },
]

const DELIVERABLES = [
  'A capability baseline for the teams and workflows in scope',
  'A readiness verdict on the systems and data those workflows depend on',
  'A ranked shortlist of the workflows worth changing first',
  'A costed, sequenced roadmap with the practice and duration for each step',
  'A leadership readout you can take to a budget conversation',
]

const FIT = [
  'Operations leaders who have been told to "do something with AI" without a defensible place to start',
  'Organizations that ran AI training or a pilot and cannot point to what changed',
  'Teams weighing an automation or systems investment they cannot yet evaluate',
  'Functions under headcount pressure with multi-step manual decision processes',
  'Anyone who needs a scoped, costed plan before committing to a longer engagement',
]

export default function CapabilityAssessment() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Capability Assessment</span>
          <h1>
            A diagnostic that tells you where to start, and what it will cost.
          </h1>
          <p className="lead" style={{ margin: '20px auto 0', maxWidth: 680 }}>
            Fixed price, fixed scope, on-site. It baselines where your team actually is,
            identifies the workflows worth changing first, and produces a costed roadmap. It
            stands on its own, and it scopes everything that follows.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center', marginTop: 30 }}>
            <Link to="/contact" className="btn btn-primary">Request an Assessment</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">How It Runs</span>
            <h2>On your floor, in the actual work</h2>
            <p>
              No questionnaire, no maturity model. We assess your operation against the
              initiative you are actually trying to get done.
            </p>
          </div>
          <div className="grid-2">
            {PHASES.map((phase) => (
              <div key={phase.label} className="feature-card">
                <span className="eyebrow">{phase.label}</span>
                <h3>{phase.title}</h3>
                <p style={{ color: 'var(--slate-500)', fontSize: 14.5 }}>{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">What You Keep</span>
            <h2>The assessment is a deliverable, not a sales call</h2>
            <p>
              Everything below is yours when the assessment closes, whether or not you engage
              us for anything after it.
            </p>
          </div>
          <div className="included-list">
            {DELIVERABLES.map((item) => (
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
            <span className="eyebrow">Who This Is For</span>
            <h2>Built for Organizations That&hellip;</h2>
          </div>
          <div className="audience-list">
            {FIT.map((item) => (
              <div key={item} className="audience-item">
                <span className="check-dot">&#10003;</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <blockquote className="quote-block">
            &ldquo;Most organizations cannot measure the return on their AI spend at all. The
            assessment exists so the first thing you buy from us is a number you can defend.&rdquo;
            <cite>Ben Manning</cite>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <span className="eyebrow">Start Here</span>
            <h2>A costed plan, not a proposal.</h2>
            <p>
              Tell us what you are trying to get done and which teams own it. We will come back
              with scope, timing, and price.
            </p>
            <Link to="/contact" className="btn btn-primary">Request an Assessment</Link>
          </div>
        </div>
      </section>
    </>
  )
}
