import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Testimonial from '../components/Testimonial.jsx'
import NetworkArt from '../components/NetworkArt.jsx'
import courses, { LEAD_SLUG } from '../data/courses.js'

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
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">On-Site AI Capability Building for Supply Chain</span>
            <h1>
              Generic AI training doesn&rsquo;t survive contact with{' '}
              <span className="hero-accent">your network.</span>
            </h1>
            <p className="lead">
              We build the curriculum on-site, around your workflows, your systems, and your
              data. Your planners, buyers, and site teams learn by doing their actual work
              differently. Then they keep doing it after we leave.
            </p>
            <div className="hero-cta">
              <Link to={`/practices/${LEAD_SLUG}`} className="btn btn-primary">
                Start With a Roadmap
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
                <b>1</b>
                <span>Industry We Work In</span>
              </div>
              <div className="hero-stat">
                <b>3</b>
                <span>Practice Areas</span>
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
          <div className="section-header center">
            <span className="eyebrow">Why UpLearn.io</span>
            <h2>What Makes Us Different</h2>
          </div>
          <div className="grid-4">
            <FeatureCard icon={<span>&#128666;</span>} title="Supply chain only">
              We work in one industry. Planning, sourcing, execution, logistics. Not a general
              practice with a supply chain slide.
            </FeatureCard>
            <FeatureCard icon={<span>&#128736;</span>} title="Taught by operators">
              Your instructors have run global supply chain and built the systems being taught.
              Not trainers who read the documentation last month.
            </FeatureCard>
            <FeatureCard icon={<span>&#128207;</span>} title="Measured against your numbers">
              Every engagement starts with a baseline and ends against a metric you already
              own &mdash; fill rate, cycle time, working capital, expedite spend. Most
              organizations cannot measure AI ROI at all. You will.
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
            <span className="eyebrow">Our Practices</span>
            <h2>Where to start, what to build, how to make it stick</h2>
            <p>
              Three practices. Most clients start with the roadmap, because it tells them which
              of the other two they need.
            </p>
          </div>
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
