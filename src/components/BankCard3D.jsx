import { useRef, useState, useCallback } from 'react'

export default function BankCard3D({
  children,
  tiltLimit = 11,
  scale = 1.01,
  perspective = 1600,
  spotlight = true,
}) {
  const cardRef = useRef(null)
  const [cardStyle, setCardStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    transition: 'transform 0.25s ease-out',
    willChange: 'transform',
  })
  const [glowStyle, setGlowStyle] = useState({ opacity: 0, transition: 'opacity 0.3s ease-out' })

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rotateX = ((y - cy) / cy) * -tiltLimit
      const rotateY = ((x - cx) / cx) * tiltLimit

      setCardStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
      })

      if (spotlight) {
        const px = (x / rect.width) * 100
        const py = (y / rect.height) * 100
        setGlowStyle({
          opacity: 1,
          background: `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.12) 0%, transparent 68%)`,
          transition: 'opacity 0.5s ease-out',
        })
      }
    },
    [tiltLimit, scale, perspective, spotlight],
  )

  const handleMouseLeave = useCallback(() => {
    setCardStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
      transition: 'transform 0.3s ease-out',
      willChange: 'transform',
    })
    setGlowStyle(prev => ({ ...prev, opacity: 0, transition: 'opacity 0.4s ease-out' }))
  }, [perspective])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
    >
      <div style={{ ...cardStyle }}>
        {children}
        {spotlight && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              pointerEvents: 'none',
              ...glowStyle,
            }}
          />
        )}
      </div>
    </div>
  )
}
