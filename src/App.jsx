import { Navigate, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Practices from './pages/Practices.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import LegacyCourseRedirect from './pages/LegacyCourseRedirect.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { LEAD_SLUG } from './data/courses.js'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practices" element={<Practices />} />
          <Route path="/practices/:slug" element={<CourseDetail />} />
          <Route path="/courses/:slug" element={<LegacyCourseRedirect />} />
          <Route path="/courses" element={<Navigate to="/practices" replace />} />
          {/* The capability assessment became the Supply Chain AI Roadmap practice. */}
          <Route
            path="/capability-assessment"
            element={<Navigate to={`/practices/${LEAD_SLUG}`} replace />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
