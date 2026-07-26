import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import courses from '../data/courses.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const coursesActive = location.pathname.startsWith('/courses')
  const detailsRef = useRef(null)

  const closeAll = () => {
    setOpen(false)
    if (detailsRef.current) detailsRef.current.open = false
  }

  // Native <details> keeps its own open/closed state, which survives route
  // changes because Header never unmounts. Force it closed whenever the
  // route changes so the dropdown doesn't stay open on the next page.
  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand" onClick={closeAll}>
          <img src={logo} alt="UpLearn.io logo" />

        </Link>

        <nav className={`main-nav${open ? ' open' : ''}`}>
          <NavLink to="/" end onClick={closeAll} className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>

          <details className="nav-dropdown" ref={detailsRef}>
            <summary className={coursesActive ? 'active' : ''}>
              Courses
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="caret">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <ul className="dropdown-panel">
              {courses.map((course) => (
                <li key={course.slug}>
                  <NavLink
                    to={`/courses/${course.slug}`}
                    onClick={closeAll}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {course.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </details>

          <NavLink to="/about" onClick={closeAll} className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeAll} className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
