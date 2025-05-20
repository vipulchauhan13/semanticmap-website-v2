"use client"

import { useEffect, useRef } from "react"

interface MinimalBackgroundProps {
  intensity?: "low" | "medium" | "high"
  color?: "blue" | "purple" | "mixed"
}

export default function MinimalBackground({ intensity = "medium", color = "mixed" }: MinimalBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Set up the canvas animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Configure particles based on intensity
    const particleCount = intensity === "low" ? 20 : intensity === "medium" ? 35 : 50

    // Configure colors based on color prop
    const getColor = () => {
      if (color === "blue") return `rgba(59, 130, 246, ${Math.random() * 0.15 + 0.05})`
      if (color === "purple") return `rgba(139, 92, 246, ${Math.random() * 0.15 + 0.05})`

      // Mixed colors
      const colors = [
        `rgba(59, 130, 246, ${Math.random() * 0.15 + 0.05})`, // blue
        `rgba(139, 92, 246, ${Math.random() * 0.15 + 0.05})`, // purple
        `rgba(99, 102, 241, ${Math.random() * 0.15 + 0.05})`, // indigo
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Create particles
    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      opacity: number
      opacitySpeed: number
    }[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: getColor(),
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        opacitySpeed: Math.random() * 0.01,
      })
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${particle.opacity})`)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Update opacity for subtle pulsing
        particle.opacity += particle.opacitySpeed
        if (particle.opacity > 0.7 || particle.opacity < 0.2) {
          particle.opacitySpeed = -particle.opacitySpeed
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Draw subtle gradient connections between nearby particles
      if (intensity !== "low") {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            const maxDistance = intensity === "medium" ? 150 : 200

            if (distance < maxDistance) {
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)

              const opacity = (1 - distance / maxDistance) * 0.15
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [intensity, color])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90"></div>

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_0%,_rgba(0,0,0,0)_70%)]"></div>

      {/* Canvas for animated particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Optional subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
    </div>
  )
}
