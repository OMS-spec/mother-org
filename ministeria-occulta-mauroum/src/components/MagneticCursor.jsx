import { useEffect, useRef } from 'react'

export default function MagneticCursor() {
  const dot = useRef(null)
  useEffect(() => {
    const el = dot.current
    let mx = 0, my = 0, x = 0, y = 0
    const move = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', move)
    let raf
    const loop = () => {
      x += (mx - x) * 0.15
      y += (my - y) * 0.15
      if (el) el.style.transform = `translate(${x - 6}px, ${y - 6}px)`
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])
  return (
    <div
      ref={dot}
      style={{
        position: 'fixed', top: 0, left: 0, width: 12, height: 12,
        borderRadius: '50%', background: '#111', zIndex: 9999,
        pointerEvents: 'none', mixBlendMode: 'difference',
        display: window.matchMedia('(pointer: fine)').matches ? 'block' : 'none',
      }}
    />
  )
}
