import React, { useEffect, useRef, useState } from 'react'

/**
 * Reusable IntersectionObserver hook for subtle one-time scroll reveal
 */
export function useScrollReveal({
  threshold = 0,
  rootMargin = '0px 0px -40px 0px',
  disabled = false,
} = {}) {
  const ref = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    if (disabled) {
      setIsRevealed(true)
      return
    }

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true)
      return
    }

    const node = ref.current
    if (!node) return

    // Fallback if IntersectionObserver is not available
    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [threshold, rootMargin, disabled])

  return [ref, isRevealed]
}

/**
 * Global ScrollReveal component
 * Applies subtle opacity (0 -> 1) and translateY (12px -> 0) over 600ms ease-out
 * Fires only once per element and respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  className = '',
  as: Component = 'div',
  delay = 0,
  threshold = 0,
  rootMargin = '0px 0px -40px 0px',
  disabled = false,
  style = {},
  ...rest
}) {
  const [ref, isRevealed] = useScrollReveal({ threshold, rootMargin, disabled })

  const combinedStyle = {
    ...style,
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  }

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${isRevealed ? 'is-revealed' : ''} ${className}`.trim()}
      style={combinedStyle}
      {...rest}
    >
      {children}
    </Component>
  )
}
