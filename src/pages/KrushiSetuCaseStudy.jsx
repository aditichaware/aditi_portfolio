import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import BackToTop from '../components/BackToTop.jsx'

const SECTIONS = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'problem', label: 'PROBLEM' },
  { id: 'process', label: 'PROCESS' },
  { id: 'solution', label: 'SOLUTION' },
]

const SEQUENCE_4_SLIDES = [
  {
    src: '/images/work/krushisetu/krushisetu4.png',
    title: 'Step 2: From complexity to structure',
    shortLabel: 'Overview',
    hasDrawnBack: false,
    hasDrawnNext: true,
  },
  {
    src: '/images/work/krushisetu/krushisetu4_1.png',
    title: 'The sparse matrix (837 relationships)',
    shortLabel: 'Sparse Matrix',
    hasDrawnBack: true,
    hasDrawnNext: true,
  },
  {
    src: '/images/work/krushisetu/krushisetu4_2.png',
    title: 'The dense matrix (39 relationships)',
    shortLabel: 'Dense Matrix',
    hasDrawnBack: true,
    hasDrawnNext: false,
  },
]

const SEQUENCE_5_SLIDES = [
  {
    src: '/images/work/krushisetu/krushisetu5.png',
    title: 'Step 3: What did compressed grammar tell us to build?',
    shortLabel: 'Process Flow',
    hasDrawnBack: false,
    hasDrawnNext: true,
  },
  {
    src: '/images/work/krushisetu/krushisetu5_1.png',
    title: 'Translating Actions into System Interactions',
    shortLabel: 'Action Translation',
    hasDrawnBack: true,
    hasDrawnNext: true,
  },
  {
    src: '/images/work/krushisetu/krushisetu5_2.png',
    title: 'Volume Mapping (Volume × Frequency)',
    shortLabel: 'Volume Mapping',
    hasDrawnBack: true,
    hasDrawnNext: true,
  },
  {
    src: '/images/work/krushisetu/krushisetu5_3.png',
    title: 'Distributor-Centered System',
    shortLabel: 'Distributor Focus',
    hasDrawnBack: true,
    hasDrawnNext: false,
  },
]

export default function KrushiSetuCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview')
  const [seq4Index, setSeq4Index] = useState(0)
  const [seq5Index, setSeq5Index] = useState(0)

  // Preload sequence slides to avoid flash during transitions
  useEffect(() => {
    window.scrollTo(0, 0)
    const preloadImages = [
      ...SEQUENCE_4_SLIDES.map((s) => s.src),
      ...SEQUENCE_5_SLIDES.map((s) => s.src),
    ]
    preloadImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  // Active section tracking with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
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

  const scrollToElement = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -60
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Sequence 4 Navigation Handlers
  const handleSeq4Next = () => {
    if (seq4Index < SEQUENCE_4_SLIDES.length - 1) {
      setSeq4Index((prev) => prev + 1)
    } else {
      // Transition from Sequence 4 end -> Sequence 5 start
      setSeq5Index(0)
      scrollToElement('sequence-5')
    }
  }

  const handleSeq4Back = () => {
    if (seq4Index > 0) {
      setSeq4Index((prev) => prev - 1)
    } else {
      // Back from first slide of Sequence 4 -> krushisetu3.png
      scrollToElement('krushisetu3')
    }
  }

  // Sequence 5 Navigation Handlers
  const handleSeq5Next = () => {
    if (seq5Index < SEQUENCE_5_SLIDES.length - 1) {
      setSeq5Index((prev) => prev + 1)
    } else {
      // Transition from Sequence 5 end -> krushisetu6.png
      scrollToElement('krushisetu6')
    }
  }

  const handleSeq5Back = () => {
    if (seq5Index > 0) {
      setSeq5Index((prev) => prev - 1)
    } else {
      // Back from first slide of Sequence 5 -> Sequence 4's last slide (krushisetu4_2.png)
      setSeq4Index(2)
      scrollToElement('sequence-4')
    }
  }

  const currentSeq4 = SEQUENCE_4_SLIDES[seq4Index]
  const currentSeq5 = SEQUENCE_5_SLIDES[seq5Index]

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

            {/* 3. PROCESS (krushisetu3, Sequence 4, Sequence 5, krushisetu6, krushisetu7) */}
            <section id="process" className="scroll-mt-16">
              {/* Step 1: User Stories */}
              <ScrollReveal id="krushisetu3" className="scroll-mt-20">
                <img
                  src="/images/work/krushisetu/krushisetu3.png"
                  alt="Grammar Layer Step 1 - User Stories and Object-Action-Attribute breakdown"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>

              {/* Sequence 4: Step 2 - Object-Action Matrix Interactive Sequence */}
              <ScrollReveal id="sequence-4" className="my-6 lg:my-8 scroll-mt-20">
                <div className="relative w-full rounded-2xl overflow-hidden bg-[#181818] shadow-2xl border border-white/5">
                  <img
                    key={currentSeq4.src}
                    src={currentSeq4.src}
                    alt={currentSeq4.title}
                    className="w-full h-auto block select-none transition-opacity duration-200"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Hotspot: Native 'Page back' button on the PNG */}
                  <button
                    onClick={handleSeq4Back}
                    title={
                      seq4Index === 0
                        ? 'Back to Step 1: User Stories'
                        : 'Previous slide: ' + SEQUENCE_4_SLIDES[seq4Index - 1]?.shortLabel
                    }
                    aria-label="Previous slide"
                    className="absolute left-[4.8%] bottom-[4.2%] w-[12.5%] h-[7.5%] min-w-[70px] min-h-[32px] rounded-2xl cursor-pointer opacity-0 hover:opacity-100 transition-opacity bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#0E5E4F] flex items-center justify-center"
                  />

                  {/* Hotspot: Native 'Page next' button on the PNG */}
                  <button
                    onClick={handleSeq4Next}
                    title={
                      seq4Index < SEQUENCE_4_SLIDES.length - 1
                        ? 'Next slide: ' + SEQUENCE_4_SLIDES[seq4Index + 1]?.shortLabel
                        : 'Next: Step 3 (Sequence 5)'
                    }
                    aria-label="Next slide"
                    className="absolute right-[4.8%] bottom-[4.2%] w-[12.5%] h-[7.5%] min-w-[70px] min-h-[32px] rounded-2xl cursor-pointer opacity-0 hover:opacity-100 transition-opacity bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#0E5E4F] flex items-center justify-center"
                  />
                </div>

                {/* Accessible interactive navigation bar directly under Sequence 4 */}
                <div className="mt-2.5 px-3 py-2 bg-[#171717] border border-white/5 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
                  <button
                    onClick={handleSeq4Back}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#999999] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>
                      {seq4Index === 0
                        ? '← Step 1: User Stories'
                        : `← ${SEQUENCE_4_SLIDES[seq4Index - 1].shortLabel}`}
                    </span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#888888] font-mono uppercase tracking-wider">
                      Slide {seq4Index + 1} of {SEQUENCE_4_SLIDES.length}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {SEQUENCE_4_SLIDES.map((slide, i) => (
                        <button
                          key={slide.src}
                          onClick={() => setSeq4Index(i)}
                          title={slide.title}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            i === seq4Index
                              ? 'w-6 bg-[#0E5E4F]'
                              : 'w-2 bg-white/20 hover:bg-white/40'
                          }`}
                          aria-label={`Jump to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSeq4Next}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#E0E0E0] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span>
                      {seq4Index < SEQUENCE_4_SLIDES.length - 1
                        ? `${SEQUENCE_4_SLIDES[seq4Index + 1].shortLabel} →`
                        : 'Next: Step 3 →'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </ScrollReveal>

              {/* Sequence 5: Step 3 - System Interactions Interactive Sequence */}
              <ScrollReveal id="sequence-5" className="my-6 lg:my-8 scroll-mt-20">
                <div className="relative w-full rounded-2xl overflow-hidden bg-[#181818] shadow-2xl border border-white/5">
                  <img
                    key={currentSeq5.src}
                    src={currentSeq5.src}
                    alt={currentSeq5.title}
                    className="w-full h-auto block select-none transition-opacity duration-200"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Hotspot: Native 'Page back' button on the PNG */}
                  <button
                    onClick={handleSeq5Back}
                    title={
                      seq5Index === 0
                        ? 'Back to Step 2: Dense Matrix'
                        : 'Previous slide: ' + SEQUENCE_5_SLIDES[seq5Index - 1]?.shortLabel
                    }
                    aria-label="Previous slide"
                    className="absolute left-[4.8%] bottom-[4.2%] w-[12.5%] h-[7.5%] min-w-[70px] min-h-[32px] rounded-2xl cursor-pointer opacity-0 hover:opacity-100 transition-opacity bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#0E5E4F] flex items-center justify-center"
                  />

                  {/* Hotspot: Native 'Page next' button on the PNG */}
                  <button
                    onClick={handleSeq5Next}
                    title={
                      seq5Index < SEQUENCE_5_SLIDES.length - 1
                        ? 'Next slide: ' + SEQUENCE_5_SLIDES[seq5Index + 1]?.shortLabel
                        : 'Next: Visualisation Layer'
                    }
                    aria-label="Next slide"
                    className="absolute right-[4.8%] bottom-[4.2%] w-[12.5%] h-[7.5%] min-w-[70px] min-h-[32px] rounded-2xl cursor-pointer opacity-0 hover:opacity-100 transition-opacity bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#0E5E4F] flex items-center justify-center"
                  />
                </div>

                {/* Accessible interactive navigation bar directly under Sequence 5 */}
                <div className="mt-2.5 px-3 py-2 bg-[#171717] border border-white/5 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
                  <button
                    onClick={handleSeq5Back}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#999999] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>
                      {seq5Index === 0
                        ? '← Step 2: Dense Matrix'
                        : `← ${SEQUENCE_5_SLIDES[seq5Index - 1].shortLabel}`}
                    </span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#888888] font-mono uppercase tracking-wider">
                      Slide {seq5Index + 1} of {SEQUENCE_5_SLIDES.length}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {SEQUENCE_5_SLIDES.map((slide, i) => (
                        <button
                          key={slide.src}
                          onClick={() => setSeq5Index(i)}
                          title={slide.title}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            i === seq5Index
                              ? 'w-6 bg-[#0E5E4F]'
                              : 'w-2 bg-white/20 hover:bg-white/40'
                          }`}
                          aria-label={`Jump to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSeq5Next}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#E0E0E0] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span>
                      {seq5Index < SEQUENCE_5_SLIDES.length - 1
                        ? `${SEQUENCE_5_SLIDES[seq5Index + 1].shortLabel} →`
                        : 'Next: Visualisation Layer →'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </ScrollReveal>

              {/* Visualisation Layer */}
              <ScrollReveal id="krushisetu6" className="scroll-mt-20">
                <img
                  src="/images/work/krushisetu/krushisetu6.png"
                  alt="Visualisation Layer - Principles, Wireframes, Semantic Grid, Archetypes, and Design System"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>

              {/* Flow Layer & Dashboard Evolution */}
              <ScrollReveal id="krushisetu7" className="scroll-mt-20">
                <img
                  src="/images/work/krushisetu/krushisetu7.png"
                  alt="Flow Layer - Swimlane Diagrams, Breakpoint Mapping, User Flows, and Dashboard Evolution"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </section>

            {/* 4. SOLUTION (krushisetu8.png, krushisetu9.png) */}
            <section id="solution" className="scroll-mt-16">
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu8.png"
                  alt="The Outcome - Core Interface Screens: Home, Chat, Orders, Delivery, Review, Tracking"
                  className="w-full h-auto block select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
              <ScrollReveal>
                <img
                  src="/images/work/krushisetu/krushisetu9.png"
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
                to="/"
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
