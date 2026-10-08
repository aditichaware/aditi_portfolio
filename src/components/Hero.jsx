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
              {/* Tilted Photo */}
              <div className="aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-1 shadow-md">
                <img
                  src="/images/hero/portfolio_image1.png"
                  alt="Community and teaching"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Hand-drawn Doodles & Annotation Overlay */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20">
                {/* Handwritten Annotation */}
                <span className="hero-doodle-text absolute -top-6 -left-3 sm:-top-7 sm:-left-4 font-handwriting italic text-[#FEF08A] text-sm sm:text-base md:text-lg whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] -rotate-3 select-none">
                  little moments
                </span>
                {/* Underline Squiggle */}
                <svg className="hero-doodle-text absolute -top-1 -left-2 w-16 h-3 text-[#FFD8BE]" viewBox="0 0 60 12" fill="none">
                  <path d="M2 7 Q 15 2 30 7 T 58 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {/* Hand-drawn Pink Heart */}
                <svg className="absolute -top-3 -right-3 w-7 h-7 text-[#FBCFE8] rotate-12" viewBox="0 0 32 32" fill="none">
                  <path d="M16 26 C 16 26 5 18 5 10.5 C 5 6 9 3 13.5 5.5 C 15 6.5 16 8 16 8 C 16 8 17 6.5 18.5 5.5 C 23 3 27 6 27 10.5 C 27 18 16 26 16 26 Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Butter Yellow Sparkle Star */}
                <svg className="absolute -bottom-2.5 -right-2 w-5 h-5 text-[#FEF08A]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z" fill="currentColor" />
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
              <div className="aspect-[4/3.4] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-2 shadow-md">
                <img
                  src="/images/hero/portfolio_image2.png"
                  alt="Childhood painting"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Hand-drawn Doodles & Annotation Overlay */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20">
                <span className="hero-doodle-text absolute -top-6 -left-2 sm:-top-7 sm:-left-3 font-handwriting italic text-[#FFD8BE] text-sm sm:text-base md:text-lg whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] -rotate-2 select-none">
                  making things
                </span>
                {/* Lavender Sparkle Star */}
                <svg className="absolute -top-3 -right-2.5 w-6 h-6 text-[#E0C3FC]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z" fill="currentColor" />
                </svg>
                {/* Butter Yellow Loop Squiggle */}
                <svg className="absolute -bottom-3 -right-3 w-9 h-6 text-[#FEF08A] rotate-6" viewBox="0 0 45 25" fill="none">
                  <path d="M4 16 C 12 24, 20 6, 28 17 C 34 23, 40 12, 42 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Bottom: Moon Canvas Painting */}
            <div
              className={`relative hero-photo-wrapper ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '300ms' } : undefined}
            >
              <div className="aspect-[4/3.7] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-3 shadow-md">
                <img
                  src="/images/hero/portfolio_image3.png"
                  alt="Moon painting on canvas"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Hand-drawn Doodles & Annotation Overlay */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20">
                <span className="hero-doodle-text absolute -bottom-6 -left-2 sm:-bottom-7 sm:-left-3 font-handwriting italic text-[#FFFBEB] text-sm sm:text-base md:text-lg whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] rotate-2 select-none">
                  just noticing
                </span>
                {/* Butter Yellow Sparkle Star */}
                <svg className="absolute -top-3 -left-3 w-6 h-6 text-[#FEF08A]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z" fill="currentColor" />
                </svg>
                {/* Soft Lavender Brush Stroke */}
                <svg className="absolute -bottom-2 -right-2 w-12 h-5 text-[#E0C3FC] -rotate-3" viewBox="0 0 50 18" fill="none">
                  <path d="M3 9 Q 15 2 27 11 T 47 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
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
              <div className="aspect-[10/16] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-4 shadow-lg">
                <img
                  src="/images/hero/portfolio_image4.png"
                  alt="Aditi Chaware"
                  className="w-full h-full object-cover object-center select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Hand-drawn Doodles & Annotation Overlay */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20">
                {/* Handwritten Annotation + Curving Arrow pointing toward Aditi */}
                <div className="hero-doodle-text absolute -top-8 -left-3 sm:-top-10 sm:-left-5 md:-top-11 md:-left-6 flex flex-col items-start select-none z-30">
                  <span className="font-handwriting italic text-[#FFF8E7] text-lg sm:text-2xl md:text-[27px] whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] -rotate-3">
                    always curious
                  </span>
                  {/* Hand-drawn arrow pointing subtly toward subject */}
                  <svg className="w-14 h-10 sm:w-16 sm:h-12 text-[#FEF08A] overflow-visible -mt-1 sm:-mt-1.5 ml-5 sm:ml-7" viewBox="0 0 60 45" fill="none">
                    <path d="M6 8 C 20 6, 40 16, 48 33" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M38 31 L 49 35 L 51 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Soft Peach Sparkle Star */}
                <svg className="absolute -top-4 -right-3.5 sm:-top-5 sm:-right-4 w-8 h-8 sm:w-9 sm:h-9 text-[#FFD8BE] rotate-12" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2 Q 16 16 2 16 Q 16 16 16 30 Q 16 16 30 16 Q 16 16 16 2 Z" fill="currentColor" />
                </svg>
                {/* Pastel Pink Sketchy Heart */}
                <svg className="absolute -bottom-3 -left-3 w-7 h-7 text-[#FFD1DC] -rotate-12" viewBox="0 0 32 32" fill="none">
                  <path d="M16 26 C 16 26 5 18 5 10.5 C 5 6 9 3 13.5 5.5 C 15 6.5 16 8 16 8 C 16 8 17 6.5 18.5 5.5 C 23 3 27 6 27 10.5 C 27 18 16 26 16 26 Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Lavender Playful Squiggle */}
                <svg className="absolute -bottom-3 -right-3 w-11 h-7 text-[#E0C3FC] rotate-6" viewBox="0 0 45 25" fill="none">
                  <path d="M3 15 C 13 24, 23 6, 31 17 C 37 23, 41 14, 43 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
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
              <div className="aspect-[4/3.4] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-5 shadow-md">
                <img
                  src="/images/hero/portfolio_image5.png"
                  alt="Dance performance"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Hand-drawn Doodles & Annotation Overlay */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20">
                <span className="hero-doodle-text absolute -top-6 -right-2 sm:-top-7 sm:-right-3 font-handwriting italic text-[#FFD1DC] text-sm sm:text-base md:text-lg whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] rotate-3 select-none">
                  in my element
                </span>
                {/* Butter Yellow Sparkle Star */}
                <svg className="absolute -top-3 -left-2.5 w-6 h-6 text-[#FEF08A]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z" fill="currentColor" />
                </svg>
                {/* Lavender Ribbon Loop */}
                <svg className="absolute -bottom-3 -left-2 w-9 h-6 text-[#E0C3FC] -rotate-6" viewBox="0 0 40 25" fill="none">
                  <path d="M3 14 C 11 22, 19 6, 27 16 C 33 22, 37 14, 38 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Bottom: Library Research */}
            <div
              className={`relative hero-photo-wrapper ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '540ms' } : undefined}
            >
              <div className="aspect-[4/3.8] w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-6 shadow-md">
                <img
                  src="/images/hero/portfolio_image6.png"
                  alt="Research in library"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Hand-drawn Doodles & Annotation Overlay */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20">
                <span className="hero-doodle-text absolute -bottom-6 -right-2 sm:-bottom-7 sm:-right-3 font-handwriting italic text-[#FFD8BE] text-sm sm:text-base md:text-lg whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] -rotate-2 select-none">
                  seeking stories
                </span>
                {/* Lavender Sparkle Star */}
                <svg className="absolute -top-3 -right-2.5 w-6 h-6 text-[#E0C3FC]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z" fill="currentColor" />
                </svg>
                {/* Cream Underline Stroke */}
                <svg className="hero-doodle-text absolute -bottom-1 -right-1 w-16 h-3 text-[#FFFBEB]" viewBox="0 0 60 12" fill="none">
                  <path d="M2 6 Q 16 11 32 5 T 58 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
              <div className="aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl hero-photo-tilt hero-photo-tilt-7 shadow-md">
                <img
                  src="/images/hero/portfolio_image7.png"
                  alt="Observing through camera"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Hand-drawn Doodles & Annotation Overlay */}
              <div className="hero-doodle-overlay absolute inset-0 pointer-events-none z-20">
                <span className="hero-doodle-text absolute -top-6 -right-3 sm:-top-7 sm:-right-4 font-handwriting italic text-[#FEF08A] text-sm sm:text-base md:text-lg whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] rotate-3 select-none">
                  framing life
                </span>
                {/* Viewfinder Focus Corners in Cream */}
                <svg className="absolute -top-3 -left-3 w-6 h-6 text-[#FFFBEB]" viewBox="0 0 24 24" fill="none">
                  <path d="M4 14 L 4 4 L 14 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="absolute -bottom-3 -right-3 w-6 h-6 text-[#FFFBEB]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 10 L 20 20 L 10 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Pastel Pink Tiny Star */}
                <svg className="absolute -bottom-2 -left-2 w-5 h-5 text-[#FFD1DC]" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2 Q 10 10 2 10 Q 10 10 10 18 Q 10 10 18 10 Q 10 10 10 2 Z" fill="currentColor" />
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
