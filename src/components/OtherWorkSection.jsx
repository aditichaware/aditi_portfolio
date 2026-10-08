import React, { useRef, useEffect } from 'react'
import ScrollReveal from './ScrollReveal.jsx'

export default function OtherWorkSection() {
  const projects = [
    {
      title: 'Understanding Emotional Connection to AI Chatbots',
      imageSrc: '/images/other_work/portfolio_extra1.png',
      link: 'https://drive.google.com/file/d/1aTBdkdGDK4nvsTl1PMGnRa8N7yeqqKPr/view?usp=sharing',
    },
    {
      title: 'Samsung Hackathon 2025 - HEY EVA!',
      imageSrc: '/images/other_work/portfolio_extra2.png',
      link: 'https://www.behance.net/gallery/244027267/Eva-Agentic-AI-Companion-Design-%28Samsung-Hackathon%29',
    },
    {
      title: 'IPL Infographics & Tournament Analytics',
      imageSrc: '/images/other_work/portfolio_extra3.png',
      link: 'https://www.behance.net/gallery/231655563/Information-Visualization-Indian-premiere-league',
    },
    {
      title: 'Krea: Kriya + Creativity',
      imageSrc: '/images/other_work/portfolio_extra4.png',
      link: 'https://www.figma.com/proto/JefcoB85cnDyb9UzzptgDc/krea?node-id=1-71&viewport=332%2C-21%2C0.02&t=6EAV5fBcsB9buLfU-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1',
    },
    {
      title: 'PulseBlend: Music & Colours',
      imageSrc: '/images/other_work/portfolio_extra5.png',
      link: 'https://www.figma.com/proto/Wm6pjwfjOd9u5CyNV7H5dp/tangible-design?node-id=1-13&viewport=149%2C53%2C0.11&t=1OZdl3D93Ct3qeoe-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1',
    },
  ]

  // Quadruple items to give abundant buffer for infinite bi-directional dragging & wrap
  const marqueeItems = [...projects, ...projects, ...projects, ...projects]

  const trackRef = useRef(null)
  const firstCardRef = useRef(null)
  const nextSetCardRef = useRef(null)

  const singleSetWidthRef = useRef(0)
  const positionRef = useRef(0)
  const isDraggingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const velocityRef = useRef(0)
  const resumeTimeRef = useRef(0)

  // Drag tracking refs
  const startXRef = useRef(0)
  const lastXRef = useRef(0)
  const hasDraggedRef = useRef(false)

  // Measure the exact rendered width of 1 complete set of 5 cards + gaps
  const measureSetWidth = () => {
    if (firstCardRef.current && nextSetCardRef.current) {
      const width = nextSetCardRef.current.offsetLeft - firstCardRef.current.offsetLeft
      if (width > 0) {
        const oldWidth = singleSetWidthRef.current
        singleSetWidthRef.current = width
        // Initialize position to middle set on first measurement
        if (oldWidth === 0) {
          positionRef.current = -1.5 * width
          if (trackRef.current) {
            trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
          }
        }
      }
    }
  }

  useEffect(() => {
    measureSetWidth()
    window.addEventListener('resize', measureSetWidth)
    return () => window.removeEventListener('resize', measureSetWidth)
  }, [])

  // Animation frame loop for smooth auto-scroll, inertia decay, and seamless wrapping
  useEffect(() => {
    let animationFrameId
    let lastTime = performance.now()

    const loop = (currentTime) => {
      const deltaTime = Math.min(currentTime - lastTime, 50)
      lastTime = currentTime

      const setWidth = singleSetWidthRef.current

      if (setWidth > 0) {
        // Inertia momentum decay after drag release
        if (!isDraggingRef.current && Math.abs(velocityRef.current) > 0.05) {
          positionRef.current += velocityRef.current * (deltaTime / 16.67)
          velocityRef.current *= Math.pow(0.92, deltaTime / 16.67)
          if (Math.abs(velocityRef.current) <= 0.05) {
            velocityRef.current = 0
          }
        }

        // Auto-scroll when not hovering, not dragging, and resume delay has elapsed
        const now = Date.now()
        const canAutoScroll =
          !isDraggingRef.current &&
          !isHoveredRef.current &&
          Math.abs(velocityRef.current) <= 0.05 &&
          now >= resumeTimeRef.current

        if (canAutoScroll) {
          // Editorial calm scroll speed (~38px / second)
          const autoSpeed = 0.65 * (deltaTime / 16.67)
          positionRef.current -= autoSpeed
        }

        // Seamless infinite boundary wrap in both directions
        while (positionRef.current <= -2.5 * setWidth) {
          positionRef.current += setWidth
        }
        while (positionRef.current > -0.5 * setWidth) {
          positionRef.current -= setWidth
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
        }
      } else {
        measureSetWidth()
      }

      animationFrameId = requestAnimationFrame(loop)
    }

    animationFrameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  // Desktop & mobile pointer drag handlers
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return

    isDraggingRef.current = true
    startXRef.current = e.clientX
    lastXRef.current = e.clientX
    hasDraggedRef.current = false
    velocityRef.current = 0

    document.body.classList.add('is-carousel-dragging')

    const onPointerMove = (moveEvent) => {
      if (!isDraggingRef.current) return

      const deltaX = moveEvent.clientX - lastXRef.current
      lastXRef.current = moveEvent.clientX

      // Distinguish dragging from clicking: 6px movement threshold
      if (Math.abs(moveEvent.clientX - startXRef.current) > 6) {
        hasDraggedRef.current = true
      }

      positionRef.current += deltaX
      velocityRef.current = deltaX

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
      }
    }

    const onPointerUp = (upEvent) => {
      isDraggingRef.current = false
      document.body.classList.remove('is-carousel-dragging')

      // Short delay before automatic scrolling resumes
      resumeTimeRef.current = Date.now() + 850

      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)

      // Let onClickCapture execute first, then reset drag flag
      setTimeout(() => {
        hasDraggedRef.current = false
      }, 80)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
  }

  // Hover handlers to pause auto-movement
  const handleMouseEnter = () => {
    isHoveredRef.current = true
    velocityRef.current = 0
  }

  const handleMouseLeave = () => {
    isHoveredRef.current = false
    resumeTimeRef.current = Date.now() + 600
  }

  // Intercept card click if user was dragging
  const handleCardClick = (e) => {
    if (hasDraggedRef.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section className="bg-[#F6F5F1] text-charcoal-900 pt-8 sm:pt-12 md:pt-14 pb-24 sm:pb-28 md:pb-32 overflow-hidden">
      {/* Title */}
      <ScrollReveal className="max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 mb-8 sm:mb-10">
        <h2 className="font-handwriting italic text-2xl sm:text-3xl md:text-[34px] text-[#1A1A1A] font-normal">
          Here’s what else I’ve been working on
        </h2>
      </ScrollReveal>

      {/* Draggable Infinite Carousel Track */}
      <ScrollReveal>
        <div 
          className="w-full overflow-hidden carousel-draggable-container select-none"
          onPointerDown={handlePointerDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={trackRef}
            className="carousel-track flex items-start gap-4 sm:gap-5 md:gap-6 pl-5 sm:pl-8 lg:pl-12"
          >
            {marqueeItems.map((item, idx) => (
              <a
                key={idx}
                ref={idx === 0 ? firstCardRef : idx === projects.length ? nextSetCardRef : null}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-project-card="true"
                onClickCapture={handleCardClick}
                className="group relative block flex-shrink-0 w-[310px] sm:w-[420px] md:w-[480px] lg:w-[530px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 select-none"
                title={item.title}
                aria-label={item.title}
              >
                {/* Image Frame */}
                <div className="w-full aspect-[1515/852] rounded-2xl md:rounded-[22px] overflow-hidden shadow-sm border border-black/5 bg-[#141517] transition-transform duration-300 group-hover:scale-[1.01]">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    loading="lazy"
                    draggable={false}
                  />
                </div>

                {/* Single-line Editorial Caption */}
                <div className="mt-2.5 sm:mt-3 px-1 text-left">
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#222222] tracking-tight truncate whitespace-nowrap overflow-hidden text-ellipsis transition-colors group-hover:text-black">
                    {item.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

