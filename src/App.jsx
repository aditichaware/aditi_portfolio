import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NexusCaseStudy from './pages/NexusCaseStudy.jsx'
import KrushiSetuCaseStudy from './pages/KrushiSetuCaseStudy.jsx'
import BlinkitCaseStudy from './pages/BlinkitCaseStudy.jsx'
import UniBridgeCaseStudy from './pages/UniBridgeCaseStudy.jsx'

function ScrollManager() {
  const location = useLocation()
  const prevPathnameRef = useRef(location.pathname)

  useEffect(() => {
    // Disable browser's automatic scroll restoration so SPA routing controls scrolling deterministically
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const isNewPage = prevPathnameRef.current !== location.pathname
    prevPathnameRef.current = location.pathname

    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      let timeoutId
      let retryCount = 0
      const maxRetries = 25

      if (isNewPage) {
        window.scrollTo(0, 0)
      }

      const performScroll = () => {
        const element = document.getElementById(targetId)
        if (element) {
          const yOffset = -16
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({
            top: Math.max(0, y),
            behavior: 'smooth',
          })
        } else if (retryCount < maxRetries) {
          retryCount++
          timeoutId = setTimeout(performScroll, 40)
        }
      }

      // Small delay to ensure destination component is mounted and painted
      timeoutId = setTimeout(performScroll, isNewPage ? 80 : 0)

      return () => clearTimeout(timeoutId)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1E1E1E] text-white font-sans selection:bg-sand-300 selection:text-charcoal-950">
      <ScrollManager />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/nexus" element={<NexusCaseStudy />} />
          <Route path="/work/krushisetu" element={<KrushiSetuCaseStudy />} />
          <Route path="/work/blinkit" element={<BlinkitCaseStudy />} />
          <Route path="/work/unibridge" element={<UniBridgeCaseStudy />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
