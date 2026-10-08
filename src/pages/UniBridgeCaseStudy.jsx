import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import BackToTop from '../components/BackToTop.jsx'

const SECTIONS = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'research', label: 'RESEARCH' },
  { id: 'problem', label: 'PROBLEM' },
  { id: 'solution', label: 'SOLUTION' },
  { id: 'blueprint', label: 'BLUEPRINT' },
]

export default function UniBridgeCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      const sectionElements = SECTIONS.map((s) => document.getElementById(s.id))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i]
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -50
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      {/* Mobile Sticky Navigation (compact 48px, horizontally scrollable) */}
      <div className="lg:hidden sticky top-0 z-30 bg-[#1E1E1E]/95 backdrop-blur-md border-b border-white/10 px-4 h-12 flex items-center">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-2 w-full">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap text-[11px] tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#888888] font-normal hover:text-[#CCCCCC]'
                }`}
              >
                {section.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Container - Expansive width, minimal margins */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-7 xl:gap-8">
          
          {/* Desktop Sticky Rail (Narrow 115px, no borders/dividers, blends into bg) */}
          <aside className="hidden lg:block w-[115px] shrink-0 sticky top-24 self-start pt-1">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase text-[#6B6B6B] hover:text-white transition-colors mb-7 font-medium"
            >
              <ArrowLeft className="w-2.5 h-2.5" />
              <span>All Work</span>
            </Link>

            {/* Seamless navigation list without container borders or dividers */}
            <div className="space-y-4">
              {SECTIONS.map((section) => {
                const isActive = activeSection === section.id
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group flex items-center gap-2 text-left cursor-pointer transition-colors duration-150 py-0.5 w-full"
                  >
                    {/* Subtle vertical indicator on active item */}
                    <span
                      className={`w-[2px] rounded-full transition-all duration-200 ${
                        isActive
                          ? 'h-3.5 bg-white opacity-90'
                          : 'h-0 bg-transparent opacity-0 group-hover:h-2 group-hover:bg-white/40 group-hover:opacity-100'
                      }`}
                    />
                    <span
                      className={`text-[11px] tracking-[0.14em] uppercase transition-colors duration-150 ${
                        isActive
                          ? 'text-white font-medium'
                          : 'text-[#6B6B6B] hover:text-[#B5B5B5] font-normal'
                      }`}
                    >
                      {section.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </aside>

          {/* Case Study PNG Content (Dominant element, unconstrained width, high fidelity) */}
          <main className="flex-1 min-w-0">
            {/* 1. OVERVIEW (unibridge1, unibridge2) */}
            <section id="overview" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/unibridge/unibridge1.png"
                  alt="Study Abroad Student Journey - Cover, About, Service Definition, and Services Offered"
                  className="w-full h-auto block select-none"
                  loading="eager"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/unibridge/unibridge2.png"
                  alt="Why USA Study Destination and 01 Competitor Analysis Secondary Research"
                  className="w-full h-auto block select-none"
                  loading="eager"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 2. RESEARCH (unibridge3) */}
            <section id="research" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/unibridge/unibridge3.png"
                  alt="02 Primary Research with 8 Participants, User Quotes, and 6 Research Insights"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 3. PROBLEM (unibridge4, unibridge5) */}
            <section id="problem" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/unibridge/unibridge4.png"
                  alt="03 User Persona Aarav Mehta and 04 Journey Mapping 9 Stages"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/unibridge/unibridge5.png"
                  alt="05 Value Flow Diagram, 06 Value Equation, and Conclusion of AS-IS Service"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 4. SOLUTION (unibridge6, unibridge7, unibridge8) */}
            <section id="solution" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/unibridge/unibridge6.png"
                  alt="TO - BE Service, 07 Design Brief, 08 Ideation, and Introducing UniBridge Platform"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/unibridge/unibridge7.png"
                  alt="How We Achieved Design Goals, 09 Service Conceptualization, and 10 Value Flow"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/unibridge/unibridge8.png"
                  alt="11 Service Conceptualization Based on Value Creation and 12 Value Flow"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 5. BLUEPRINT (unibridge9) */}
            <section id="blueprint" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/unibridge/unibridge9.png"
                  alt="13 Value Equation, 14 Service Blueprint 8 Stages, 15 Service Recovery, and Thank You"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* Bottom Navigation */}
            <ScrollReveal className="mt-14 sm:mt-20 pt-8 pb-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                to="/work/blinkit"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#888888] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous: Blinkit</span>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#888888] hover:text-white transition-colors"
              >
                <span>All Projects</span>
              </Link>
              <Link
                to="/work/nexus"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#CCCCCC] hover:text-white transition-colors"
              >
                <span>Next Project: Deloitte / Nexus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </ScrollReveal>
          </main>
        </div>
      </div>
      <BackToTop />
    </div>
  )
}
