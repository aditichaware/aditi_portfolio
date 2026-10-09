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
              className={`relative ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '60ms' } : undefined}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image1.png"
                  alt="Community and teaching"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Column 2: Left Mid Stack (Childhood 2005 & Painting Moon) */}
          <div className="w-[18%] sm:w-[18.5%] flex-shrink-0 flex flex-col gap-2 sm:gap-2.5 md:gap-3 self-center">
            {/* Top: 2005 Childhood Painting */}
            <div
              className={`relative ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '180ms' } : undefined}
            >
              <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image2.png"
                  alt="Childhood painting"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* Bottom: Moon Canvas Painting */}
            <div
              className={`relative ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '300ms' } : undefined}
            >
              <div className="relative aspect-[4/3.7] w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image3.png"
                  alt="Moon painting on canvas"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Column 3: Center Dominant Hero Portrait (Aditi at the beach) */}
          <div className="w-[30%] sm:w-[31%] flex-shrink-0 self-center">
            <div
              className={`relative ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '820ms' } : undefined}
            >
              <div className="relative aspect-[10/16] w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                <img
                  src="/images/hero/portfolio_image4.png"
                  alt="Aditi Chaware"
                  className="w-full h-full object-cover object-center select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Column 4: Right Mid Stack (Dance & Library Bookshelf) */}
          <div className="w-[18%] sm:w-[18.5%] flex-shrink-0 flex flex-col gap-2 sm:gap-2.5 md:gap-3 self-center">
            {/* Top: Traditional Dance */}
            <div
              className={`relative ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '420ms' } : undefined}
            >
              <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image5.png"
                  alt="Dance performance"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* Bottom: Library Research */}
            <div
              className={`relative ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '540ms' } : undefined}
            >
              <div className="relative aspect-[4/3.8] w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image6.png"
                  alt="Research in library"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Column 5: Far-right Wing (Camera photography) */}
          <div className="w-[15%] sm:w-[15.5%] flex-shrink-0 self-center">
            <div
              className={`relative ${shouldAnimate ? 'hero-photo-stagger' : ''}`}
              style={shouldAnimate ? { animationDelay: '660ms' } : undefined}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg">
                <img
                  src="/images/hero/portfolio_image7.png"
                  alt="Observing through camera"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
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
