import { useRef, useState, useCallback } from 'react'

export default function BankCard3D({
  children,
  back,
  tiltLimit = 11,
  scale = 1.01,
  perspective = 1600,
  spotlight = true,
}) {
  const cardRef = useRef(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [tiltTransform, setTiltTransform] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    transition: 'transform 0.25s ease-out',
  })
  const [glowStyle, setGlowStyle] = useState({ opacity: 0, transition: 'opacity 0.3s ease-out' })

  const handleMouseMove = useCallback(
    (e) => {
      if (isFlipped) return
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rotateX = ((y - cy) / cy) * -tiltLimit
      const rotateY = ((x - cx) / cx) * tiltLimit

      setTiltTransform({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: 'transform 0.15s ease-out',
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
    [isFlipped, tiltLimit, scale, perspective, spotlight],
  )

  const handleMouseLeave = useCallback(() => {
    if (isFlipped) return
    setTiltTransform({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
      transition: 'transform 0.3s ease-out',
    })
    setGlowStyle(prev => ({ ...prev, opacity: 0, transition: 'opacity 0.4s ease-out' }))
  }, [isFlipped, perspective])

  const handleClick = useCallback(() => {
    if (isFlipped) {
      // Returning to front — slow and smooth
      setTiltTransform({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: 'transform 0.5s ease', // ← настрой здесь тайминг возврата
      })
    } else {
      // Going to back — quick tilt reset before flip
      setTiltTransform({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: 'transform 0.15s ease-out',
      })
    }
    setIsFlipped(prev => !prev)
    setGlowStyle(prev => ({ ...prev, opacity: 0, transition: 'opacity 0.2s ease-out' }))
  }, [isFlipped, perspective])

  const flipperStyle = {
    position: 'relative',
    transform: isFlipped
      ? `perspective(${perspective}px) rotateY(180deg)`
      : tiltTransform.transform,
    transition: isFlipped ? 'transform 0.5s ease' : tiltTransform.transition,
    willChange: 'transform',
    transformStyle: 'preserve-3d',
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
    >
      <div style={flipperStyle}>
        {/* Front face */}
        <div style={{ backfaceVisibility: 'hidden', position: 'relative', willChange: 'transform' }}>
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

        {/* Back face */}
        {back && (
          <div
            style={{
              backfaceVisibility: 'hidden',
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'rotateY(180deg)',
              willChange: 'transform',
            }}
          >
            {back}
          </div>
        )}
      </div>
    </div>
  )
}
