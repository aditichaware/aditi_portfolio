import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NexusCaseStudy from './pages/NexusCaseStudy.jsx'
import KrushiSetuCaseStudy from './pages/KrushiSetuCaseStudy.jsx'
import BlinkitCaseStudy from './pages/BlinkitCaseStudy.jsx'
import UniBridgeCaseStudy from './pages/UniBridgeCaseStudy.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1E1E1E] text-white font-sans selection:bg-sand-300 selection:text-charcoal-950">
      <ScrollToTop />
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
