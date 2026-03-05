'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Shield, Trophy, AlertTriangle } from 'lucide-react'

const weightClasses = [
  { name: 'Featherweight', weight: 'Up to 5 kg', prize: '₹5,000', color: '#ff6b35' },
  { name: 'Lightweight', weight: '5 – 15 kg', prize: '₹10,000', color: '#ff3030' },
  { name: 'Heavyweight', weight: '15 – 30 kg', prize: '₹20,000', color: '#ff0000' },
]

const rules = [
  'Bots must be entirely student-built',
  'No flammable liquids or explosives permitted',
  'Remote control range minimum 10 meters',
  'Match duration: 3 minutes per round',
  'Damage points + immobilization scoring',
  'Safety inspection mandatory before entry',
]

export default function Robowar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="robowar" className="py-24 px-4 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,48,48,0.06) 0%, transparent 70%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="font-jetbrains-mono text-red-400 text-xs tracking-widest uppercase">Flagship Event</span>
          </div>

          <h2
            className="font-space-grotesk font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-4 glitch-text"
            data-text="ROBOWAR 2026"
          >
            <span className="text-white">ROBO</span>
            <span style={{ color: '#ff3030', textShadow: '0 0 20px #ff303080, 0 0 40px #ff303040' }}>WAR</span>
            <br />
            <span className="text-4xl md:text-5xl font-bold" style={{ color: '#ff6b35' }}>
              2026
            </span>
          </h2>

          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto mt-4">
            The ultimate robot combat championship. Build your war machine, enter the arena, and fight for glory. Only the most resilient bots survive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Arena Specs */}
          <motion.div
            className="rounded-2xl p-6 border border-red-500/20 bg-red-950/10 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at top left, rgba(255,48,48,0.08) 0%, transparent 60%)' }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-red-400" />
                <h3 className="font-space-grotesk font-bold text-2xl text-white">Arena Specifications</h3>
              </div>
              <div className="space-y-3">
                {[
                  ['Arena Size', '8m × 8m Combat Zone'],
                  ['Surface', 'Steel Plate Floor'],
                  ['Hazards', 'Kinetic Hammers + Pit'],
                  ['Walls', 'Polycarbonate + Steel Cage'],
                  ['Lighting', 'High-Intensity LED Array'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-[#94a3b8] font-jetbrains-mono text-sm">{k}</span>
                    <span className="text-white font-semibold text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Rules */}
          <motion.div
            className="rounded-2xl p-6 border border-orange-500/20 bg-orange-950/10 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, rgba(255,107,53,0.08) 0%, transparent 60%)' }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-orange-400" />
                <h3 className="font-space-grotesk font-bold text-2xl text-white">Rules Highlights</h3>
              </div>
              <ul className="space-y-3">
                {rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-jetbrains-mono text-xs text-red-400 mt-0.5 shrink-0">0{i + 1}</span>
                    <span className="text-[#94a3b8] text-sm">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Weight Classes */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <h3 className="font-space-grotesk font-bold text-2xl text-white">Weight Classes &amp; Prizes</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {weightClasses.map((wc, i) => (
              <motion.div
                key={wc.name}
                className="rounded-xl p-5 border text-center relative overflow-hidden group"
                style={{ borderColor: `${wc.color}30`, background: `${wc.color}08` }}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${wc.color}15 0%, transparent 70%)` }}
                />
                <div className="relative z-10">
                  <div className="font-space-grotesk font-bold text-xl text-white mb-1">{wc.name}</div>
                  <div className="font-jetbrains-mono text-sm text-[#94a3b8] mb-3">{wc.weight}</div>
                  <div className="font-space-grotesk font-black text-3xl" style={{ color: wc.color }}>
                    {wc.prize}
                  </div>
                  <div className="text-xs text-[#64748b] mt-1">Prize Pool</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-space-grotesk font-bold text-xl text-white"
            style={{
              background: 'linear-gradient(135deg, #ff3030, #ff6b35)',
              boxShadow: '0 0 20px rgba(255,48,48,0.4), 0 0 40px rgba(255,48,48,0.2)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255,48,48,0.6), 0 0 60px rgba(255,48,48,0.3)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Zap className="w-5 h-5" />
            Enter the Arena
          </motion.a>
          <p className="text-[#64748b] text-sm mt-3 font-jetbrains-mono">Registration closes March 20, 2026</p>
        </motion.div>
      </div>

      <style>{`
        .glitch-text {
          position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          opacity: 0;
        }
        @keyframes glitch-top {
          0%, 90%, 100% { opacity: 0; transform: translateX(0); }
          91% { opacity: 0.7; transform: translateX(-3px); clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%); color: #ff3030; }
          93% { opacity: 0.7; transform: translateX(3px); }
          95% { opacity: 0; }
        }
        .glitch-text:hover::before {
          animation: glitch-top 0.5s steps(1) infinite;
        }
      `}</style>
    </section>
  )
}
