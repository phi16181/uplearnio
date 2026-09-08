import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Testimonial from '../components/Testimonial.jsx'
import NetworkArt from '../components/NetworkArt.jsx'
import courses, { getFeaturedCourses } from '../data/courses.js'

const TESTIMONIALS = [
  {
    quote: 'Our team walked away with not just technical skills, but the confidence to apply them immediately. The balance between theory and real-world application was exactly what we needed.',
    name: 'Michael T.',
    role: 'Director of Analytics, Fortune 500 Company',
    initials: 'MT',
    color: '#14b8a6',
  },
  {
    quote: 'Partnering with this team elevated our curriculum. Their expertise in AI and learning sciences helped us deliver an innovative program that students found engaging and practical.',
    name: 'Dr. Greg S.',
    role: 'Dean of Continuing Education',
    initials: 'GS',
    color: '#6366f1',
  },
  {
    quote: "This program changed how I think about learning. Instead of just memorizing tools, I now know how to adapt and pivot when new technologies emerge. It's the best investment I've made in myself.",
    name: 'Aisha K.',
    role: 'Graduate Student',
    initials: 'AK',
    color: '#0ea5e9',
  },
  {
    quote: 'What I appreciated most about the coursework was how applied it was. Instead of just theory, I was working on hands-on projects that I could immediately connect to my career goals.',
    name: 'James W.',
    role: 'Early-Career Data Analyst',
    initials: 'JW',
    color: '#f97316',
  },
]

export default function Home() {
  const featured = getFeaturedCourses()

  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">On-Site AI Capability Building</span>
            <h1>
              Generic AI training doesn&rsquo;t survive contact with{' '}
              <span className="hero-accent">your operation.</span>
            </h1>
            <p className="lead">
              We build the curriculum on-site, around your workflows, your systems, and your
              data. Your team learns by doing their actual work differently. Then they keep
              doing it after we leave.
            </p>
            <div className="hero-cta">
              <Link to="/capability-assessment" className="btn btn-primary">
                Request a Capability Assessment
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Talk to Us
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <b>20+</b>
                <span>Years of Experience</span>
              </div>
              <div className="hero-stat">
                <b>5</b>
                <span>Practice Areas</span>
              </div>
              <div className="hero-stat">
                <b>100%</b>
                <span>Built on Your Data</span>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <NetworkArt />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Where Most Engagements Start</span>
            <h2>Two practices lead the work</h2>
            <p>
              One builds the capacity to absorb whatever technology arrives next. The other puts
              working AI inside the workflows your operation already runs on.
            </p>
          </div>
          <div className="featured-stack">
            {featured.map((course) => (
              <div key={course.slug} className="featured-course">
                <div>
                  <span className="eyebrow">{course.track} &middot; {course.duration}</span>
                  <h2>{course.title}</h2>
                  <p style={{ marginTop: 16, color: 'var(--slate-400)' }}>{course.tagline}</p>
                  <p style={{ marginTop: 14, color: 'var(--slate-400)', fontSize: 14.5 }}>
                    <strong style={{ color: 'var(--teal-400)' }}>Measured against:</strong>{' '}
                    {course.metric}
                  </p>
                  <Link to={`/practices/${course.slug}`} className="btn btn-primary">
                    See How It Works
                  </Link>
                </div>
                <ul>
                  {course.outcomes.map((o) => (
                    <li key={o.title}>
                      <span className="check-dot">&#10003;</span>
                      <span>
                        <strong>{o.title}.</strong> {o.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Practice Areas</span>
            <h2>Our Practices</h2>
            <p>
              Named practices with a stated method. The curriculum inside each one is assembled
              on-site, around the work your team is already accountable for.
            </p>
          </div>
          <div className="grid-3">
            {courses.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Why UpLearn.io</span>
            <h2>What Makes Us Different</h2>
          </div>
          <div className="grid-4">
            <FeatureCard icon={<span>&#128202;</span>} title="Built on your data">
              No sample datasets, no generic case studies. We work from your systems, your
              constraints, and the problems your team is already stuck on.
            </FeatureCard>
            <FeatureCard icon={<span>&#128736;</span>} title="Taught by operators">
              Your instructors have run global supply chain operations and built the systems
              being taught. Not trainers who read the documentation last month.
            </FeatureCard>
            <FeatureCard icon={<span>&#128207;</span>} title="Measured against your numbers">
              Every engagement starts with a baseline and ends against an operating metric you
              already own. Most organizations cannot measure AI ROI at all. You will.
            </FeatureCard>
            <FeatureCard icon={<span>&#129309;</span>} title="Designed to be handed off">
              The goal is a team that does not need us next year. We build the internal
              capability and the practice that sustains it.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Our Vision</span>
              <h2 style={{ fontSize: 26, marginBottom: 16 }}>
                Stop hiring for skills you could build internally.
              </h2>
              <p style={{ color: 'var(--slate-600)' }}>
                The talent you need is usually already on your payroll. What&rsquo;s missing is a
                way to build capability fast enough to keep up, and a reason for it to stick. We
                embed with your team, restructure how the work gets done, and leave the
                capability behind.
              </p>
            </div>
            <div>
              <span className="eyebrow">Our Mission</span>
              <h2 style={{ fontSize: 26, marginBottom: 16 }}>
                We don&rsquo;t just train your teams. We teach them how to train themselves.
              </h2>
              <p style={{ color: 'var(--slate-600)' }}>
                Technical skills have a two-to-three year half-life. Any program that only
                transfers today&rsquo;s tools is depreciating the day it ends. We build the
                underlying capability to absorb whatever comes next, using scenario-based
                instruction refined over two decades of learning science research.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Testimonials</span>
            <h2>What teams say</h2>
          </div>
          <div className="grid-4">
            {TESTIMONIALS.map((t) => (
              <Testimonial key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-band">
            <span className="eyebrow">Capability Assessment</span>
            <h2>Start with a capability assessment.</h2>
            <p>
              A diagnostic that baselines where your team is, identifies the workflows worth
              changing first, and produces a costed roadmap. It stands on its own, and it scopes
              everything that follows.
            </p>
            <Link to="/capability-assessment" className="btn btn-primary">
              See What&rsquo;s Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
