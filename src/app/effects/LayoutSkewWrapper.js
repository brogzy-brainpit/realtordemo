'use client'
import { useRef, useEffect } from 'react'
import { useLenis } from './LenisProvider'
import useScrollSkewEffect from './useScrollSkewEffect'

export default function LayoutSkewWrapper({ children }) {
  const wrapperRef = useRef()
  const lenis = useLenis()

  useScrollSkewEffect(lenis, wrapperRef)

  return (
    <div
      ref={wrapperRef}
      style={{ willChange: 'transform' }}
      className="min-h-screen"
    >
      {children}
    </div>
  )
}


