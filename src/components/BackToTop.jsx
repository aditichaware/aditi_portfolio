import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * Reusable BackToTop button for case-study pages.
 * - Minimal small circle with simple upward arrow icon.
 * - Appears after scrolling 350px down.
 * - Smoothly scrolls to the top of the page when clicked.
 * - Disappears when returned to the top.
 * - Fully keyboard accessible and high performance.
 */
export default function BackToTop({ threshold = 350 }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Check initial position on mount
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
      className={`group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#252525]/90 hover:bg-[#323232] active:bg-[#3c3c3c] text-[#C2C2C2] hover:text-white border border-white/10 shadow-lg shadow-black/40 backdrop-blur-sm cursor-pointer transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#1E1E1E] ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-2.5 scale-95 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2] transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  )
}
