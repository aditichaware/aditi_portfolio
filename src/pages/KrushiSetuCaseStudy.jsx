import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import BackToTop from '../components/BackToTop.jsx'

const SECTIONS = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'problem', label: 'PROBLEM' },
  { id: 'process', label: 'PROCESS' },
  { id: 'solution', label: 'SOLUTION' },
]

export default function KrushiSetuCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Active section tracking with scroll position
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
      const yOffset = -55
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
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

      {/* Main Container - Maximum Viewport Dominance */}
      <div className="w-full max-w-[1720px] mx-auto px-2 sm:px-4 lg:px-6 py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 xl:gap-8">

          {/* Desktop Sticky Rail (Ultra-narrow 100-120px, no borders/dividers, blends into bg) */}
          <aside className="hidden lg:block w-[115px] shrink-0 sticky top-24 self-start pt-1">
            <Link
              to="/#work"
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
            {/* 1. OVERVIEW (krushisetu1.png) */}
            <section id="overview" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu1.png"
                  alt="Krushikendra Management - Overview, Context, and Team Metadata"
                  className="w-full h-auto block select-none"
                  loading="eager"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 2. PROBLEM (krushisetu2.png) */}
            <section id="problem" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu2.png"
                  alt="Season of Urgency, Context Chain, System Friction, and Problem Statement"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 3. PROCESS (krushisetu3.png, krushisetu4.png, krushisetu5.png) */}
            <section id="process" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu3.png"
                  alt="Grammar Layer Step 1 - User Stories and Object-Action-Attribute breakdown"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu4.png"
                  alt="Step 2: From complexity to structure - Sparse and Dense Object-Action Matrices"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu5.png"
                  alt="Step 3: What did compressed grammar tell us to build? Translating Actions into System Interactions and Volume Mapping"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 4. SOLUTION (krushisetu6.png, krushisetu7.png, krushisetu8.png) */}
            <section id="solution" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu6.png"
                  alt="The Outcome - Core Interface Screens: Home, Chat, Orders, Delivery, Review, Tracking"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu7.png"
                  alt="Flow Layer - Swimlane Diagrams, Breakpoint Mapping, User Flows, and Dashboard Evolution"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu8.png"
                  alt="Distributor Feedback, Future Gaps, and Credits"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* Bottom Navigation */}
            <ScrollReveal className="mt-14 sm:mt-20 pt-8 pb-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                to="/work/nexus"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#888888] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous: Deloitte / Nexus</span>
              </Link>
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#888888] hover:text-white transition-colors"
              >
                <span>All Projects</span>
              </Link>
              <Link
                to="/work/blinkit"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#CCCCCC] hover:text-white transition-colors"
              >
                <span>Next Project: Blinkit</span>
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
