'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function SmoothScrollWithBounce({ children }) {
  const scrollContainerRef = useRef(null)
  const scrollY = useRef(0)
  const targetY = useRef(0)
  const rafId = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    const body = document.body
    const html = document.documentElement

    const setHeight = () => {
      const height = scrollContainer.getBoundingClientRect().height
      body.style.height = `${height}px`
    }

    setHeight()
    window.addEventListener('resize', setHeight)

    const onScroll = () => {
      targetY.current = window.scrollY
    }

    window.addEventListener('scroll', onScroll)

    const animate = () => {
      scrollY.current += (targetY.current - scrollY.current) * 0.1 // Easing

      // Overshoot effect using gsap spring
      gsap.to(scrollContainer, {
        y: -scrollY.current,
        ease: 'expo.out', // you can try elastic.out for more bounce
        duration: 0.6,
      })

      rafId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', setHeight)
    }
  }, [])

  return (
    <div
      ref={scrollContainerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
