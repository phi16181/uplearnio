import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Testimonial from '../components/Testimonial.jsx'
import NetworkArt from '../components/NetworkArt.jsx'
import courses from '../data/courses.js'

const TESTIMONIALS = [
  {
    quote: "This program changed how I think about learning. Instead of just memorizing tools, I now know how to adapt and pivot when new technologies emerge. It's the best investment I've made in myself.",
    name: 'Aisha K.',
    role: 'Graduate Student',
    initials: 'AK',
    color: '#0ea5e9',
  },
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
            <span className="eyebrow">Learning That Lasts</span>
            <h1>
              We Teach People <span className="hero-accent">How to Learn.</span>
            </h1>
            <p className="lead">
              In a world where skills expire faster than ever, the ability to learn anything
              quickly isn&rsquo;t just valuable&mdash;it&rsquo;s essential. We help organizations
              and individuals build that capability.
            </p>
            <div className="hero-cta">

              <Link to="/about" className="btn btn-ghost">
                About Us
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <b>20+</b>
                <span>Years of Experience</span>
              </div>
              <div className="hero-stat">
                <b>5</b>
                <span>Courses and Programs</span>
              </div>
              <div className="hero-stat">
                <b>4+</b>
                <span>Focus Areas</span>
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
          <div className="featured-course">
            <div>
              <span className="eyebrow">Featured Course</span>
              <h2>Rapid Learning in the Age of Disruption</h2>
              <p style={{ marginTop: 16, color: 'var(--slate-400)' }}>
                Learn how to master new skills and technologies in weeks instead of months with
                our evidence-based course on rapid learning. In just four weeks, you&rsquo;ll build
                a personalized learning system while making real progress on a skill you actually
                need for your career.
              </p>
              <Link to="/courses/rapid-learning-in-the-age-of-disruption" className="btn btn-primary">
                More Information
              </Link>
            </div>
            <ul>
              <li>
                <span className="check-dot">&#10003;</span>
                Master the cognitive science behind how your brain actually learns and retains information
              </li>
              <li>
                <span className="check-dot">&#10003;</span>
                Develop strategic frameworks to identify high-leverage concepts and create efficient learning paths
              </li>
              <li>
                <span className="check-dot">&#10003;</span>
                Make demonstrable progress on a real technology or skill relevant to your career goals
              </li>
              <li>
                <span className="check-dot">&#10003;</span>
                Gain lifetime capability to adapt quickly as industries evolve and new technologies emerge
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Course Catalog</span>
            <h2>Our Courses</h2>
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
            <FeatureCard icon={<span>&#129504;</span>} title="Learning Sciences Focused">
              Our foundation is rooted in research-based learning science. We design methods and
              environments that improve retention, comprehension, and problem-solving skills so
              learners can apply knowledge in real-world settings.
            </FeatureCard>
            <FeatureCard icon={<span>&#9889;</span>} title="Technology-Enhanced Learning">
              From artificial intelligence to immersive simulations, we integrate the latest tools
              into the learning process. Technology is not the focus, but the enabler&mdash;helping
              learners access, practice, and master skills more efficiently.
            </FeatureCard>
            <FeatureCard icon={<span>&#129309;</span>} title="Human-Centered Design">
              We build experiences around accessibility, inclusion, and diverse learning needs.
              Every course, tool, or program prioritizes usability and equity, ensuring all
              learners have a pathway to succeed.
            </FeatureCard>
            <FeatureCard icon={<span>&#127919;</span>} title="Applied &amp; Experiential Learning">
              We emphasize hands-on projects, real-world scenarios, and reflective practice.
              Learners don&rsquo;t just study concepts&mdash;they apply them, solve problems, and
              build confidence in authentic contexts.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Testimonials</span>
            <h2>Trusted by Students and Professionals</h2>
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
            <span className="eyebrow">Contact Us</span>
            <h2>We&rsquo;d love to hear from you. Let&rsquo;s learn and grow together.</h2>
            <p>Your journey starts with one message. Send it today.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
