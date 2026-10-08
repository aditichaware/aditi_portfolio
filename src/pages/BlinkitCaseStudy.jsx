import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import BackToTop from '../components/BackToTop.jsx'

const SECTIONS = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'evaluation', label: 'EVALUATION' },
  { id: 'analysis', label: 'ANALYSIS' },
  { id: 'solution', label: 'SOLUTION' },
]

export default function BlinkitCaseStudy() {
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
            {/* 1. OVERVIEW (blinkit1, blinkit2, blinkit3) */}
            <section id="overview" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit1.png"
                  alt="Blinkit Cognitive Ergonomics Case Study Cover"
                  className="w-full h-auto block select-none"
                  loading="eager"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit2.png"
                  alt="About the Project, Role, Duration, and Team"
                  className="w-full h-auto block select-none"
                  loading="eager"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit3.png"
                  alt="The Process - 01 Evaluate, 02 Test & Analyze, 03 Redesign"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 2. EVALUATION (blinkit4, blinkit5, blinkit6, blinkit7) */}
            <section id="evaluation" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit4.png"
                  alt="Phase 01: Evaluate Section Header"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit5.png"
                  alt="Heuristic Evaluation and Nielsen Usability Radar Chart"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit6.png"
                  alt="Selected Tasks for Evaluation"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit7.png"
                  alt="Hierarchical Task Analysis (HTA) Flowcharts"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 3. ANALYSIS (blinkit8, blinkit9, blinkit10, blinkit11) */}
            <section id="analysis" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit8.png"
                  alt="HTA Key Insights and Phase 02: Test & Analyze Section Header"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit9.png"
                  alt="Usability Testing, System Usability Scale (SUS), NASA-TLX, and Usability Metrics"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit10.png"
                  alt="Success Rate, Time-Based Efficiency, and User Behavior Observations"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit11.png"
                  alt="Hick's Law, Fitts's Law Quantitative Calculations, and Phase 03: Redesign Header"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 4. SOLUTION (blinkit12) */}
            <section id="solution" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/blinkit/blinkit12.png"
                  alt="7 Comprehensive Redesign Solutions with Insights, Impact, and Thank You"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* Bottom Navigation */}
            <ScrollReveal className="mt-14 sm:mt-20 pt-8 pb-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                to="/work/krushisetu"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#888888] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous: KrushiSetu</span>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#888888] hover:text-white transition-colors"
              >
                <span>All Projects</span>
              </Link>
              <Link
                to="/work/unibridge"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#CCCCCC] hover:text-white transition-colors"
              >
                <span>Next Project: UniBridge</span>
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
