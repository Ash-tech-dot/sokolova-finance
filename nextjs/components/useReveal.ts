'use client'

import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        obs.unobserve(el)
      }
    }, { threshold })
    // set initial hidden state
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    el.style.transition = 'opacity 0.75s ease, transform 0.75s ease'
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return ref
}
