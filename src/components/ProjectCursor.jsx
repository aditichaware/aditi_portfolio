import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight } from 'lucide-react'

/**
 * Reusable ProjectCursor component for homepage project cards & Extra Works carousel.
 * 
 * - Visual treatment: Compact pill container with #1E1E1E background, white text and arrow.
 * - Fully rounded pill (rounded-full), no border, no shadow.
 * - True cursor replacement: sits exactly at pointer position with zero lag or magnetic trailing.
 * - Scoped to elements marked with [data-project-card].
 * - Completely transparent to clicks (pointer-events: none).
 * - Automatically disabled on touch / mobile devices via (hover: hover) & (pointer: fine).
 */
export default function ProjectCursor({
  className = "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] text-white border-0 shadow-none font-sans font-semibold text-[11px] sm:text-[12px] tracking-[0.14em] uppercase whitespace-nowrap select-none",
  text = "VIEW",
}) {
  const [enabled, setEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const isVisibleRef = useRef(false)

  // Keep ref synchronized with state to avoid stale closures in event handlers
  useEffect(() => {
    isVisibleRef.current = isVisible
  }, [isVisible])

  // Detect pointer capability: only enable on non-touch desktop devices with fine hover pointer
  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mediaQuery.matches)

    const handleMediaChange = (e) => {
      setEnabled(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  // Manage zero-lag pointer tracking and card hover detection
  useEffect(() => {
    if (!enabled) return

    let lastX = -100
    let lastY = -100

    // Direct synchronous transform update to ensure 0ms lag
    const updatePosition = (x, y) => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    }

    // Toggle visibility only when crossing boundaries into/out of a project card
    const checkHover = (target) => {
      if (!target) {
        if (isVisibleRef.current) setIsVisible(false)
        return
      }

      const isOverCard = !!target.closest('[data-project-card]')
      if (isOverCard !== isVisibleRef.current) {
        setIsVisible(isOverCard)
      }
    }

    const handlePointerMove = (e) => {
      lastX = e.clientX
      lastY = e.clientY
      updatePosition(lastX, lastY)
      checkHover(e.target)
    }

    const handleScroll = () => {
      if (lastX >= 0 && lastY >= 0) {
        const el = document.elementFromPoint(lastX, lastY)
        checkHover(el)
      }
    }

    const handleMouseLeave = () => {
      if (isVisibleRef.current) {
        setIsVisible(false)
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [enabled])

  if (!enabled || typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-50 pointer-events-none select-none"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        willChange: 'transform',
      }}
    >
      {/* Sits exactly at pointer position (centered) */}
      <div style={{ transform: 'translate(-50%, -50%)' }}>
        <div
          className={`${className} transition-all duration-200 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transformOrigin: 'center center' }}
        >
          <span className="leading-none">{text}</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
        </div>
      </div>
    </div>,
    document.body
  )
}
