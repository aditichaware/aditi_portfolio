import React, { useState, useEffect } from 'react'

// Keep track so entrance animation runs only once per session
let hasHeroAnimatedSession = false

export default function Hero() {
  const [shouldAnimate, setShouldAnimate] = useState(() => !hasHeroAnimatedSession)

  useEffect(() => {
    if (hasHeroAnimatedSession) return

    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) {
        hasHeroAnimatedSession = true
        setShouldAnimate(false)
        return
      }
    }

    hasHeroAnimatedSession = true
  }, [])

  return (
    <section className="w-full bg-[#1E1E1E] text-white pt-10 sm:pt-14 md:pt-16 pb-20 md:pb-28">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header Titles */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h1 className="text-3xl sm:text-[40px] md:text-[46px] font-bold tracking-tight text-white mb-2.5">
            Hi! I’m Aditi.
          </h1>
          <p className="font-handwriting italic text-2xl sm:text-3xl md:text-[34px] text-[#EDEDED] font-normal">
            Making, noticing & creating since 2005.
          </p>
        </div>

        {/* 5-Column Photo Collage */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 max-w-[980px] mx-auto">
          
          {/* Column 1: Far-left Wing (Teaching kids) */}
          <div className="w-[15%] sm:w-[15.5%] flex-shrink-0 self-center">
            <div
              className={`relative hero-photo-wrapper ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '60ms' } : undefined}
            >
              {/* Layer 1: Background Doodles (Behind photo) */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-0 overflow-visible">
                {/* Broad Soft Peach Highlighter Stroke */}
                <svg className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-8 w-32 sm:w-44 h-12 text-[#FED7AA] opacity-80" viewBox="0 0 140 40" fill="none">
                  <path d="M5 22 Q 40 8 75 24 T 135 18" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Layer 2: Tilted Photo */}
              <div className="relative z-10 aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-1 shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image1.png"
                  alt="Community and teaching"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Layer 3: Foreground Doodles & Handwritten Annotation */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20 overflow-visible">
                {/* Handwritten Annotation + Underline */}
                <div className="hero-doodle-text absolute -top-10 -left-6 sm:-top-14 sm:-left-8 flex flex-col items-start select-none z-30">
                  <span className="font-handwriting italic text-[#FEF08A] text-xl sm:text-2xl md:text-3xl lg:text-[34px] whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] -rotate-4">
                    little moments
                  </span>
                  <svg className="w-24 sm:w-36 h-5 sm:h-7 text-[#FFD8BE] -mt-1 ml-1" viewBox="0 0 100 16" fill="none">
                    <path d="M3 10 Q 30 2 60 10 T 97 8" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Large Pastel Pink Heart */}
                <svg className="absolute -top-7 -right-7 sm:-top-9 sm:-right-9 w-12 h-12 sm:w-16 sm:h-16 text-[#FBCFE8] rotate-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" viewBox="0 0 40 40" fill="none">
                  <path d="M20 34 C 20 34 6 23 6 13.5 C 6 7.5 11 4 16.5 7 C 18.5 8 20 10 20 10 C 20 10 21.5 8 23.5 7 C 29 4 34 7.5 34 13.5 C 34 23 20 34 20 34 Z" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Oversized Cream Sparkle Star */}
                <svg className="absolute -bottom-7 -right-7 sm:-bottom-9 sm:-right-9 w-11 h-11 sm:w-14 sm:h-14 text-[#FFFBEB] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2 Q 16 16 2 16 Q 16 16 16 30 Q 16 16 30 16 Q 16 16 16 2 Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: Left Mid Stack (Childhood 2005 & Painting Moon) */}
          <div className="w-[18%] sm:w-[18.5%] flex-shrink-0 flex flex-col gap-2 sm:gap-2.5 md:gap-3 self-center">
            {/* Top: 2005 Childhood Painting */}
            <div
              className={`relative hero-photo-wrapper ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '180ms' } : undefined}
            >
              {/* Layer 1: Background Loop Squiggle */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-0 overflow-visible">
                <svg className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-12 w-32 sm:w-44 h-14 sm:h-20 text-[#FEF08A] rotate-6 opacity-85" viewBox="0 0 120 60" fill="none">
                  <path d="M8 35 C 30 55, 55 12, 75 38 C 90 52, 108 24, 112 30" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Layer 2: Tilted Photo */}
              <div className="relative z-10 aspect-[4/3.4] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-2 shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image2.png"
                  alt="Childhood painting"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Layer 3: Foreground Doodles & Annotation */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20 overflow-visible">
                <span className="hero-doodle-text absolute -top-10 -left-6 sm:-top-14 sm:-left-8 font-handwriting italic text-[#FED7AA] text-xl sm:text-2xl md:text-3xl lg:text-[34px] whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] -rotate-3 select-none">
                  making things
                </span>
                {/* Oversized Lavender Sparkle Star */}
                <svg className="absolute -top-7 -right-7 sm:-top-10 sm:-right-10 w-12 h-12 sm:w-16 sm:h-16 text-[#E9D5FF] rotate-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2 Q 16 16 2 16 Q 16 16 16 30 Q 16 16 30 16 Q 16 16 16 2 Z" fill="currentColor" />
                </svg>
                {/* Loose Cream Circle Scribble */}
                <svg className="absolute -top-5 -left-7 w-14 h-14 sm:w-18 sm:h-18 text-[#FFFBEB] -rotate-12 opacity-80" viewBox="0 0 45 45" fill="none">
                  <path d="M22 6 C 34 6, 40 16, 38 28 C 36 38, 24 42, 14 38 C 6 34, 4 22, 10 12 C 14 6, 26 4, 34 8" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Bottom: Moon Canvas Painting */}
            <div
              className={`relative hero-photo-wrapper ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '300ms' } : undefined}
            >
              {/* Layer 1: Background Wave Stroke */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-0 overflow-visible">
                <svg className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-12 w-32 sm:w-44 h-12 sm:h-16 text-[#E9D5FF] -rotate-6 opacity-85" viewBox="0 0 130 50" fill="none">
                  <path d="M6 25 Q 35 6 68 28 T 124 20" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Layer 2: Tilted Photo */}
              <div className="relative z-10 aspect-[4/3.7] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-3 shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image3.png"
                  alt="Moon painting on canvas"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Layer 3: Foreground Doodles & Annotation */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20 overflow-visible">
                <span className="hero-doodle-text absolute -bottom-10 -left-6 sm:-bottom-14 sm:-left-8 font-handwriting italic text-[#FFF8E7] text-xl sm:text-2xl md:text-3xl lg:text-[34px] whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] rotate-3 select-none">
                  just noticing
                </span>
                {/* Oversized Butter Yellow Moon Sparkle Star */}
                <svg className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-12 h-12 sm:w-16 sm:h-16 text-[#FEF08A] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2 Q 16 16 2 16 Q 16 16 16 30 Q 16 16 30 16 Q 16 16 16 2 Z" fill="currentColor" />
                </svg>
                {/* Soft Peach Sparkle Accent */}
                <svg className="absolute -top-5 -right-6 w-9 h-9 sm:w-11 sm:h-11 text-[#FED7AA]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 3: Center Dominant Hero Portrait (Aditi at the beach) */}
          <div className="w-[30%] sm:w-[31%] flex-shrink-0 self-center">
            <div
              className={`relative hero-photo-wrapper ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '820ms' } : undefined}
            >
              {/* Layer 1: Background Large Lavender Squiggle */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-0 overflow-visible">
                <svg className="absolute -bottom-10 -right-12 sm:-bottom-14 sm:-right-16 md:-bottom-16 md:-right-20 w-40 sm:w-56 md:w-68 h-16 sm:h-24 text-[#E9D5FF] rotate-6 opacity-90" viewBox="0 0 160 70" fill="none">
                  <path d="M8 38 C 35 62, 65 14, 98 42 C 122 62, 145 28, 154 36" stroke="currentColor" strokeWidth="4.8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Layer 2: Center Tilted Photo */}
              <div className="relative z-10 aspect-[10/16] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-4 shadow-xl">
                <img
                  src="/images/hero/portfolio_image4.png"
                  alt="Aditi Chaware"
                  className="w-full h-full object-cover object-center select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Layer 3: Foreground Expressive Doodles & Annotation */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20 overflow-visible">
                {/* Handwritten Annotation + Large Curving Arrow Pointing to Subject */}
                <div className="hero-doodle-text absolute -top-12 -left-6 sm:-top-16 sm:-left-10 md:-top-20 md:-left-14 flex flex-col items-start select-none z-30">
                  <span className="font-handwriting italic text-[#FFF8E7] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] -rotate-4">
                    always curious
                  </span>
                  {/* Large Sweeping Hand-drawn Arrow */}
                  <svg className="w-24 h-16 sm:w-32 sm:h-22 md:w-40 md:h-26 text-[#FEF08A] overflow-visible -mt-2 sm:-mt-3 ml-8 sm:ml-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" viewBox="0 0 90 60" fill="none">
                    <path d="M8 12 C 30 10, 60 22, 72 45" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" />
                    <path d="M56 42 L 74 48 L 76 32" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Oversized Soft Peach Sparkle Star */}
                <svg className="absolute -top-10 -right-8 sm:-top-14 sm:-right-12 md:-top-16 md:-right-16 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#FED7AA] rotate-15 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]" viewBox="0 0 40 40" fill="none">
                  <path d="M20 2 Q 20 20 2 20 Q 20 20 20 38 Q 20 20 38 20 Q 20 20 20 2 Z" fill="currentColor" />
                </svg>
                {/* Large Pastel Pink Hand-Drawn Heart */}
                <svg className="absolute -bottom-8 -left-8 sm:-bottom-11 sm:-left-11 w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 text-[#FBCFE8] -rotate-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]" viewBox="0 0 40 40" fill="none">
                  <path d="M20 35 C 20 35 6 24 6 14 C 6 8 11 4.5 16.5 7.5 C 18.5 8.5 20 11 20 11 C 20 11 21.5 8.5 23.5 7.5 C 29 4.5 34 8 34 14 C 34 24 20 35 20 35 Z" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 4: Right Mid Stack (Dance & Library Bookshelf) */}
          <div className="w-[18%] sm:w-[18.5%] flex-shrink-0 flex flex-col gap-2 sm:gap-2.5 md:gap-3 self-center">
            {/* Top: Traditional Dance */}
            <div
              className={`relative hero-photo-wrapper ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '420ms' } : undefined}
            >
              {/* Layer 1: Background Ribbon Squiggle */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-0 overflow-visible">
                <svg className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-12 w-32 sm:w-44 h-14 sm:h-20 text-[#E9D5FF] -rotate-6 opacity-85" viewBox="0 0 120 60" fill="none">
                  <path d="M8 35 C 30 55, 55 12, 75 38 C 90 52, 108 24, 112 30" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Layer 2: Tilted Photo */}
              <div className="relative z-10 aspect-[4/3.4] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-5 shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image5.png"
                  alt="Dance performance"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Layer 3: Foreground Doodles & Annotation */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20 overflow-visible">
                <span className="hero-doodle-text absolute -top-10 -right-6 sm:-top-14 sm:-right-8 font-handwriting italic text-[#FBCFE8] text-xl sm:text-2xl md:text-3xl lg:text-[34px] whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] rotate-4 select-none">
                  in my element
                </span>
                {/* Oversized Butter Yellow Sparkle Star */}
                <svg className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-12 h-12 sm:w-16 sm:h-16 text-[#FEF08A] -rotate-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2 Q 16 16 2 16 Q 16 16 16 30 Q 16 16 30 16 Q 16 16 16 2 Z" fill="currentColor" />
                </svg>
                {/* Soft Peach Accent Star */}
                <svg className="absolute -bottom-5 -right-5 w-9 h-9 sm:w-11 sm:h-11 text-[#FED7AA]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Bottom: Library Research */}
            <div
              className={`relative hero-photo-wrapper ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '540ms' } : undefined}
            >
              {/* Layer 1: Background Cream Highlighter Stroke */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-0 overflow-visible">
                <svg className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 w-32 sm:w-44 h-12 text-[#FFFBEB] opacity-80" viewBox="0 0 140 40" fill="none">
                  <path d="M5 22 Q 40 8 75 24 T 135 18" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Layer 2: Tilted Photo */}
              <div className="relative z-10 aspect-[4/3.8] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-6 shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image6.png"
                  alt="Research in library"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Layer 3: Foreground Doodles & Annotation */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20 overflow-visible">
                {/* Handwritten Annotation + Broad Underline */}
                <div className="hero-doodle-text absolute -bottom-10 -right-6 sm:-bottom-14 sm:-right-8 flex flex-col items-end select-none">
                  <span className="font-handwriting italic text-[#FED7AA] text-xl sm:text-2xl md:text-3xl lg:text-[34px] whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] -rotate-3">
                    seeking stories
                  </span>
                  <svg className="w-24 sm:w-36 h-5 sm:h-7 text-[#FFFBEB] -mt-1 mr-1" viewBox="0 0 100 16" fill="none">
                    <path d="M3 10 Q 30 2 60 10 T 97 8" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Oversized Lavender Sparkle Star */}
                <svg className="absolute -top-7 -right-7 sm:-top-10 sm:-right-10 w-12 h-12 sm:w-16 sm:h-16 text-[#E9D5FF] rotate-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2 Q 16 16 2 16 Q 16 16 16 30 Q 16 16 30 16 Q 16 16 16 2 Z" fill="currentColor" />
                </svg>
                {/* Pastel Pink Curly Bracket */}
                <svg className="absolute -top-5 -left-6 w-9 h-12 text-[#FBCFE8] -rotate-6" viewBox="0 0 30 40" fill="none">
                  <path d="M22 4 C 14 4, 12 12, 12 16 C 12 19, 6 20, 4 20 C 6 20, 12 21, 12 24 C 12 28, 14 36, 22 36" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 5: Far-right Wing (Camera photography) */}
          <div className="w-[15%] sm:w-[15.5%] flex-shrink-0 self-center">
            <div
              className={`relative hero-photo-wrapper ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '660ms' } : undefined}
            >
              {/* Layer 1: Background Soft Peach Stroke */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-0 overflow-visible">
                <svg className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 w-32 sm:w-44 h-12 text-[#FED7AA] opacity-80" viewBox="0 0 140 40" fill="none">
                  <path d="M5 22 Q 40 8 75 24 T 135 18" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Layer 2: Tilted Photo */}
              <div className="relative z-10 aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-7 shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image7.png"
                  alt="Observing through camera"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Layer 3: Foreground Doodles & Annotation */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20 overflow-visible">
                <span className="hero-doodle-text absolute -top-10 -right-6 sm:-top-14 sm:-right-8 font-handwriting italic text-[#FEF08A] text-xl sm:text-2xl md:text-3xl lg:text-[34px] whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] rotate-4 select-none">
                  framing life
                </span>
                {/* Large Viewfinder Focus Corners in Cream */}
                <svg className="absolute -top-7 -left-7 sm:-top-9 sm:-left-9 w-12 h-12 sm:w-16 sm:h-16 text-[#FFFBEB] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" viewBox="0 0 36 36" fill="none">
                  <path d="M6 22 L 6 6 L 22 6" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="absolute -bottom-7 -right-7 sm:-bottom-9 sm:-right-9 w-12 h-12 sm:w-16 sm:h-16 text-[#FFFBEB] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" viewBox="0 0 36 36" fill="none">
                  <path d="M30 14 L 30 30 L 14 30" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Oversized Pastel Pink Star */}
                <svg className="absolute -bottom-7 -left-7 sm:-bottom-9 sm:-left-9 w-11 h-11 sm:w-14 sm:h-14 text-[#FBCFE8] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2 Q 16 16 2 16 Q 16 16 16 30 Q 16 16 30 16 Q 16 16 16 2 Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Bio Text Below Collage */}
        <div className="mt-12 sm:mt-14 md:mt-16 text-center">
          <p className="text-[#E0E0E0] text-base sm:text-lg md:text-[20px] font-normal leading-relaxed max-w-[580px] mx-auto px-4">
            I’m a UX designer who enjoys understanding problems,<br className="hidden sm:inline" /> exploring ideas, and making things simpler.
          </p>
        </div>

      </div>
    </section>
  )
}
