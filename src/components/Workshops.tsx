'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Radio, CircuitBoard, Box, Clock, Users as UsersIcon, ChevronRight } from 'lucide-react'

const workshops = [
  {
    icon: <Radio className="w-8 h-8" />,
    title: 'Drone Technology',
    tagline: 'Build. Fly. Innovate.',
    description:
      'Dive deep into the world of unmanned aerial vehicles. Learn drone architecture, flight controllers, sensor integration, and autonomous navigation systems from industry experts.',
    duration: '6 Hours',
    seats: '30 Seats',
    fee: '₹299',
    color: '#00f0ff',
    topics: ['Flight Controllers', 'Sensor Fusion', 'Autonomous Navigation', 'Hardware Assembly'],
  },
  {
    icon: <CircuitBoard className="w-8 h-8" />,
    title: 'PCB Designing',
    tagline: 'Design. Prototype. Deploy.',
    description:
      'Master the art of printed circuit board design using industry-standard EDA tools. From schematic capture to Gerber file generation, learn the complete PCB workflow.',
    duration: '5 Hours',
    seats: '25 Seats',
    fee: '₹249',
    color: '#7b2fff',
    topics: ['KiCad / EasyEDA', 'Schematic Capture', 'PCB Layout', 'Design for Manufacturing'],
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: '3D Printing',
    tagline: 'Model. Print. Create.',
    description:
      'Explore additive manufacturing from CAD modeling to final print. Learn slicing software, material selection, print settings optimization, and post-processing techniques.',
    duration: '5 Hours',
    seats: '20 Seats',
    fee: '₹249',
    color: '#00ff88',
    topics: ['CAD Modeling', 'Slicing Software', 'Material Selection', 'Post Processing'],
  },
]

export default function Workshops() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="workshops" className="py-24 px-4 bg-[#12121a] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 10%, #12121a 90%, #0a0a0f 100%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-jetbrains-mono text-neon-violet text-sm tracking-widest uppercase mb-3 block">Skill Up</span>
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="text-white">Hands-on </span>
            <span className="text-gradient-blue-violet">Workshops</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Immersive, expert-led workshops designed to give you real-world skills you can apply immediately.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              className="group relative glassmorphism rounded-2xl p-6 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Glow background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${w.color}12 0%, transparent 60%)` }}
              />

              {/* Top border glow */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${w.color}, transparent)` }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${w.color}15`, color: w.color }}
                >
                  {w.icon}
                </div>

                <span
                  className="font-jetbrains-mono text-xs tracking-widest uppercase mb-1 block"
                  style={{ color: w.color }}
                >
                  {w.tagline}
                </span>
                <h3 className="font-space-grotesk font-bold text-2xl text-white mb-3">{w.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{w.description}</p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {w.topics.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md font-jetbrains-mono"
                      style={{ background: `${w.color}12`, color: w.color, border: `1px solid ${w.color}30` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1 text-[#94a3b8] text-xs">
                      <Clock className="w-3 h-3" /> {w.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[#94a3b8] text-xs">
                      <UsersIcon className="w-3 h-3" /> {w.seats}
                    </span>
                  </div>
                  <span className="font-space-grotesk font-bold text-lg" style={{ color: w.color }}>
                    {w.fee}
                  </span>
                </div>

                <button
                  className="mt-4 w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{ background: `${w.color}20`, color: w.color, border: `1px solid ${w.color}40` }}
                >
                  Register for Workshop <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
