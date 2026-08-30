import { useEffect, useRef } from 'react'

// Separación entre puntos y su radio, en píxeles CSS.
const SPACING = 22
const DOT_RADIUS = 1.1

/**
 * Campo de puntos animado que ondula suavemente, como un tejido que se mece.
 * Se dibuja en <canvas> para poder animar cientos de puntos sin sobrecargar el DOM.
 * Respeta prefers-reduced-motion: si el usuario lo pide, se dibuja un solo frame estático.
 */
export default function HeroWaveBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let cols = 0
    let rows = 0
    let animationId = null
    let time = 0

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.parentElement.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(width / SPACING) + 1
      rows = Math.ceil(height / SPACING) + 1
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * SPACING
          const baseY = r * SPACING
          const wave =
            Math.sin(r * 0.18 + time * 0.6 + c * 0.06) * 10 +
            Math.sin(c * 0.12 - time * 0.4) * 5
          const x = baseX + wave
          const shade =
            0.16 +
            0.22 * (0.5 + 0.5 * Math.sin(r * 0.2 + c * 0.15 + time * 0.6))
          ctx.beginPath()
          ctx.arc(x, baseY, DOT_RADIUS, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(27, 21, 18, ${shade.toFixed(3)})`
          ctx.fill()
        }
      }
    }

    function loop() {
      time += speed
      draw()
      animationId = requestAnimationFrame(loop)
    }

    resize()
    draw()

    // Si el sistema pide "reducir movimiento", seguimos animando pero mucho
    // más lento y sutil en vez de apagar el movimiento por completo — así
    // nunca se ve completamente estático.
    const speed = prefersReducedMotion ? 0.004 : 0.016
    animationId = requestAnimationFrame(loop)

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_95%_90%_at_50%_45%,black_55%,transparent_100%)]"
    />
  )
}
