import { Navigate, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CapabilityAssessment from './pages/CapabilityAssessment.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import LegacyCourseRedirect from './pages/LegacyCourseRedirect.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

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
          <Route path="/capability-assessment" element={<CapabilityAssessment />} />
          <Route path="/practices/:slug" element={<CourseDetail />} />
          <Route path="/courses/:slug" element={<LegacyCourseRedirect />} />
          <Route path="/courses" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
