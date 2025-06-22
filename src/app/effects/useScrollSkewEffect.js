// hooks/useScrollSkewEffect.js
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function useScrollSkewEffect(lenis, targetRef) {
  const skew = useRef(0)
  const rafId = useRef(null)

  useEffect(() => {
    if (!lenis || !targetRef?.current) return

    const target = targetRef.current
    const quickSetter = gsap.quickSetter(target, 'skewY', 'deg')

    let lastVelocity = 0

    const updateSkew = () => {
      // Lerp toward zero for smooth reset
      // skew.current *= 0.8
      skew.current *= 0.85 // try 0.85 for slower spring back


      // Apply skew
      quickSetter(skew.current)

      rafId.current = requestAnimationFrame(updateSkew)
    }

    const onScroll = ({ velocity }) => {
      // Store last velocity (spring entry point)
      const maxSkew = 16
      skew.current = Math.max(Math.min(velocity * 0.10, maxSkew), -maxSkew)

    }

    lenis.on('scroll', onScroll)
    updateSkew() // Start loop

    return () => {
      lenis.off('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [lenis, targetRef])
}
