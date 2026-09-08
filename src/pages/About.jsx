import { Link } from 'react-router-dom'
import profilePhoto from "../assets/profile.jpg";
import { LEAD_SLUG } from '../data/courses.js';


export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>About Us</span>
          <h1>
            We&rsquo;re a learning sciences company that works on-site with supply chain
            organizations, built on two convictions: that rapid adaptation is the essential
            skill of our era, and that meaningful work should be accessible to everyone.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div>
              <h2 style={{ fontSize: 26, marginBottom: 16 }}>
                As technology accelerates, the most valuable skill won&rsquo;t be mastering a
                single tool&mdash;it will be the ability to pivot and acquire new skills quickly.
                Learning how to learn is the best investment you can make.
              </h2>
            </div>
            <div className="founder-card">
              <div className="founder-photo">BM</div>
              <h3 style={{ fontSize: 18, marginBottom: 4 }}>Benjamin Manning</h3>
              <p style={{ color: 'var(--slate-500)', fontSize: 14 }}>Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Who Teaches This</span>
            <h2>Taught by someone who has run the operation</h2>
            <p>
              Big 4 firms staff industrial engagements with people who have never been in a
              distribution center. Every engagement here is led by an operator.
            </p>
          </div>
          <div className="grid-3">
            <div className="feature-card">
              <h3>Global supply chain operations</h3>
              <p>
                Leadership across planning, sourcing, execution, and logistics &mdash; the
                same functions these engagements are built around. The assessment work is done
                by someone who has carried the operating metrics being discussed, not by a
                consultant applying a maturity model to an industry they have read about.
              </p>
            </div>
            <div className="feature-card">
              <h3>Systems built, not just taught</h3>
              <p>
                Three engineering degrees and thirty years as a practicing software and systems
                engineer. The architecture, integration, and governance work in the agentic
                practice is work our founder has shipped, including the failure modes.
              </p>
            </div>
            <div className="feature-card">
              <h3>Georgia Tech, and two decades of learning science</h3>
              <p>
                Instructor affiliation with Georgia Tech and teaching experience at three
                Research I universities. The Story-Centered Curriculum method behind every
                engagement comes from twenty years of applying learning science research, not
                from a course design template.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header center">
            <h2>Let Numbers Talk</h2>
          </div>
          <div className="stats-row">
            <div className="stat-block">
              <b>20+</b>
              <span>Years of Experience</span>
            </div>
            <div className="stat-block">
              <b>3</b>
              <span>Practice Areas</span>
            </div>
            <div className="stat-block">
              <b>1</b>
              <span>Industry We Work In</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Our Vision</span>
              <p style={{ color: 'var(--slate-600)', marginBottom: 14 }}>
                Stop hiring for skills you could build internally. The talent you need is
                usually already on your payroll. We embed with your supply chain team on-site,
                restructure how the work gets done, and leave the capability behind.
              </p>
              <p style={{ color: 'var(--slate-600)', marginBottom: 14 }}>
                Our Story-Centered Curriculum, refined over 20 years of learning science
                application, places your employees inside authentic professional scenarios where
                they actively solve complex problems under the guidance of practicing industry
                experts.
              </p>
              <p style={{ color: 'var(--slate-600)' }}>
                The ROI is straightforward: capable teams make better decisions faster, and
                upskilling existing employees costs a fraction of recruiting, hiring, and
                onboarding specialized talent. Every engagement is measured against an operating
                metric you already own.
              </p>
            </div>
            <div>
              <span className="eyebrow">Our Mission</span>
              <p style={{ color: 'var(--slate-600)', marginBottom: 14, fontWeight: 600 }}>
                We don&rsquo;t just train your teams. We teach them how to train themselves.
              </p>
              <p style={{ color: 'var(--slate-600)', marginBottom: 14 }}>
                In a landscape where technical skills have a 2&ndash;3 year half-life, the real
                competitive advantage isn&rsquo;t what your employees know&mdash;it&rsquo;s how
                quickly they can learn what they&rsquo;ll need to know next.
              </p>
              <p style={{ color: 'var(--slate-600)', marginBottom: 14 }}>
                Our programs embed metacognitive skill development into every learning experience.
                Through Story-Centered Curriculum refined over 20 years, your teams tackle
                authentic workplace challenges while simultaneously learning:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'How to deconstruct complex problems into learnable components',
                  'Which learning strategies work for different types of skills',
                  'How to seek, evaluate, and apply new information effectively',
                  'How experts actually think through ambiguous situations',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--slate-600)' }}>
                    <span className="check-dot" style={{ background: 'rgba(56,189,248,0.14)', color: 'var(--sky-400)' }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="story-block">
            <div className="story-photo">
              <img
                src={profilePhoto}
                alt="Benjamin Manning"
                className="story-photo-img"
              />
            </div>
            <div>
              <h2 style={{ fontSize: 28, marginBottom: 18 }}>
                Out of Tragedy Comes a New Beginning
              </h2>
              <p style={{ color: 'var(--slate-600)', marginBottom: 14 }}>
                Our founder and CEO sustained a Spinal Cord Injury (SCI) in an automobile accident
                in high school that left him paralyzed from the chest down and confined to a
                wheelchair without the use of his hands.
              </p>
              <p style={{ color: 'var(--slate-600)' }}>
                Since 1993 and with the support of an awesome family, he completed three
                engineering degrees, worked as a practicing software and system engineer for 30
                years and taught at three different Research I level universities.
              </p>
            </div>
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
              it, and what to fund first. You leave with a costed, sequenced plan you can defend
              to finance &mdash; and a clear view of which of our other practices, if any, you
              need.
            </p>
            <Link to={`/practices/${LEAD_SLUG}`} className="btn btn-primary">
              Start With a Roadmap
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
