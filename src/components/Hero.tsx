'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#00f0ff', '#7b2fff', '#00ff88']
    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.3
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 8
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.shadowBlur = 0

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(123,47,255,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-jetbrains-mono text-neon-blue text-sm tracking-[0.3em] uppercase mb-4 block">
            ECE Department Presents
          </span>
        </motion.div>

        <motion.h1
          className="font-space-grotesk font-bold text-6xl md:text-8xl lg:text-9xl leading-none mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="text-gradient-blue-violet">EC TECH</span>
          <br />
          <span className="text-white">FEST 2026</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[#94a3b8] font-space-grotesk mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Where Innovation Meets Electronics
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-[#64748b] max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Join the ECE department&apos;s flagship technology festival — two days of cutting-edge competitions, hands-on workshops, and groundbreaking innovation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.a
            href="#about"
            className="px-8 py-4 rounded-lg font-space-grotesk font-semibold text-lg text-[#0a0a0f] bg-neon-blue neon-glow-blue transition-all duration-300"
            style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Register Now
          </motion.a>
          <motion.a
            href="#schedule"
            className="px-8 py-4 rounded-lg font-space-grotesk font-semibold text-lg text-neon-blue border border-neon-blue/40 hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View Schedule
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-6 flex gap-8 justify-center text-[#94a3b8]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <span className="font-jetbrains-mono text-sm">
            <span className="text-neon-blue">March 28-29</span> · 2026
          </span>
          <span className="font-jetbrains-mono text-sm">
            <span className="text-neon-violet">ECE Department</span> · Main Campus
          </span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-blue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} />
      </motion.div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff40; }
          50% { box-shadow: 0 0 20px #00f0ff, 0 0 40px #00f0ff60, 0 0 60px #00f0ff20; }
        }
      `}</style>
    </section>
  )
}
