'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Users, BookOpen } from 'lucide-react'

interface StatProps {
  end: number
  suffix: string
  label: string
}

function AnimatedStat({ end, suffix, label }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <div ref={ref} className="text-center">
      <div className="font-space-grotesk font-bold text-4xl md:text-5xl text-neon-blue">
        {count}{suffix}
      </div>
      <div className="text-[#94a3b8] mt-1 font-medium">{label}</div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: <Lightbulb className="w-6 h-6 text-neon-blue" />,
      title: 'Innovation Hub',
      desc: 'A platform where brilliant minds converge to ideate, prototype and showcase groundbreaking electronics projects.',
    },
    {
      icon: <Users className="w-6 h-6 text-neon-violet" />,
      title: 'Expert Mentors',
      desc: 'Learn directly from industry veterans and leading professors who are shaping the future of electronics and communication.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-neon-green" />,
      title: 'Hands-on Learning',
      desc: 'Gain practical experience through immersive workshops on drones, PCB design, 3D printing, and more.',
    },
  ]

  return (
    <section id="about" className="py-24 px-4 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-jetbrains-mono text-neon-blue text-sm tracking-widest uppercase mb-3 block">Our Story</span>
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            About <span className="text-gradient-blue-violet">EC Tech Fest</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto leading-relaxed">
            EC Tech Fest is the annual flagship technology festival organized by the Department of Electronics and Communication Engineering.
            We bring together students, faculty, and industry experts to celebrate innovation, foster learning, and inspire the next generation of engineers.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 rounded-2xl glassmorphism"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedStat end={500} suffix="+" label="Participants" />
          <AnimatedStat end={10} suffix="+" label="Events" />
          <AnimatedStat end={3} suffix="" label="Workshops" />
          <AnimatedStat end={2} suffix="" label="Days" />
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glassmorphism rounded-2xl p-6 hover:border-neon-blue/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#0a0a0f] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="font-space-grotesk font-semibold text-xl text-white mb-2">{f.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
