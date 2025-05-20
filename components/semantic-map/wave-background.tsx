"use client"
import { motion } from "framer-motion"

interface WaveBackgroundProps {
  color?: string
  speed?: "slow" | "medium" | "fast"
  opacity?: number
  waveHeight?: number
}

export default function WaveBackground({
  color = "rgba(59, 130, 246, 0.1)", // Default blue color with low opacity
  speed = "medium",
  opacity = 0.5,
  waveHeight = 20,
}: WaveBackgroundProps) {
  // Convert speed to milliseconds
  const speedValue = speed === "slow" ? 25000 : speed === "fast" ? 15000 : 20000

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      {/* Wave 1 - Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ opacity }}
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: speedValue / 1000,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: waveHeight }}
        >
          <path d="M0 50C240 10 480 90 720 50C960 10 1200 90 1440 50V100H0V50Z" fill={color} />
        </svg>
      </motion.div>

      {/* Wave 2 - Bottom with offset */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ opacity: opacity * 0.7 }}
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: (speedValue / 1000) * 1.3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: waveHeight * 0.7 }}
        >
          <path d="M0 50C240 90 480 10 720 50C960 90 1200 10 1440 50V100H0V50Z" fill={color} />
        </svg>
      </motion.div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
    </div>
  )
}
