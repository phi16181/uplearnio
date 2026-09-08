import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import courses from '../data/courses.js'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/capability-assessment', label: 'Capability Assessment' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src={logo} alt="UpLearn.io logo" />
              <span className="brand-name">UpLearn.io</span>
            </Link>
            <p className="footer-about">
              On-site AI capability building for operations teams. We build the curriculum
              around your workflows, your systems, and your data, then leave the capability
              behind.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61581394787873" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/uplearn-io/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.3 8.75h3.4V21H3.3V8.75Zm6.2 0h3.26v1.67h.05c.45-.86 1.56-1.77 3.22-1.77 3.45 0 4.08 2.27 4.08 5.22V21h-3.4v-6.02c0-1.44-.03-3.29-2-3.29-2.01 0-2.32 1.57-2.32 3.18V21H9.5V8.75Z"/></svg>
              </a>
              <a href="https://x.com/UpLearnio" target="_blank" rel="noreferrer" aria-label="Twitter / X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H21l-6.9 7.9L22.3 21h-6.8l-5.3-6.9L3.9 21H1.8l7.4-8.4L1.6 3h7l4.8 6.3L18.9 3Zm-1.2 16.2h1.9L7.4 4.7H5.4l12.3 14.5Z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Practices</h4>
            <ul>
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link to={`/practices/${course.slug}`}>{course.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="mailto:ben@uplearn.io">Email: ben@uplearn.io</a></li>
              <li>3060 Mercer University Dr, Atlanta, GA 30341</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} UpLearn.io. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}
