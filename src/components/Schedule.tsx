'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'

interface ScheduleEvent {
  time: string
  title: string
  description: string
  location: string
  category: string
  categoryColor: string
  day: number
}

const events: ScheduleEvent[] = [
  {
    time: '9:00 AM',
    title: 'Inauguration Ceremony',
    description: 'Official opening ceremony with distinguished guests, faculty, and keynote address.',
    location: 'Main Auditorium',
    category: 'Ceremony',
    categoryColor: '#00f0ff',
    day: 1,
  },
  {
    time: '10:30 AM',
    title: 'Robowar Qualifiers',
    description: 'Preliminary rounds of the robot combat championship. Top bots advance to Day 2 finals.',
    location: 'Combat Arena',
    category: 'Competition',
    categoryColor: '#ff3030',
    day: 1,
  },
  {
    time: '2:00 PM',
    title: 'PCB Designing Workshop',
    description: 'Hands-on PCB design workshop using EDA tools. Limited to 25 participants.',
    location: 'Electronics Lab',
    category: 'Workshop',
    categoryColor: '#7b2fff',
    day: 1,
  },
  {
    time: '4:00 PM',
    title: 'Tech Quiz',
    description: 'Inter-college electronics and technology quiz with exciting prizes for winners.',
    location: 'Seminar Hall',
    category: 'Competition',
    categoryColor: '#ff6b35',
    day: 1,
  },
  {
    time: '7:00 PM',
    title: 'Cultural Night',
    description: 'An evening of music, performances, and networking with food stalls.',
    location: 'Open Air Stage',
    category: 'Cultural',
    categoryColor: '#00ff88',
    day: 1,
  },
  {
    time: '9:00 AM',
    title: 'Drone Technology Workshop',
    description: 'Build and fly your own drone. Learn flight controller programming and sensor integration.',
    location: 'Drone Field',
    category: 'Workshop',
    categoryColor: '#7b2fff',
    day: 2,
  },
  {
    time: '11:00 AM',
    title: 'Robowar Finals',
    description: 'Championship battles across all weight classes. The ultimate bot combat showdown.',
    location: 'Combat Arena',
    category: 'Competition',
    categoryColor: '#ff3030',
    day: 2,
  },
  {
    time: '2:00 PM',
    title: '3D Printing Workshop',
    description: 'Learn CAD modeling and additive manufacturing. Take home your 3D-printed creation.',
    location: 'Fabrication Lab',
    category: 'Workshop',
    categoryColor: '#00ff88',
    day: 2,
  },
  {
    time: '3:30 PM',
    title: 'Project Expo',
    description: 'Student showcase of innovative electronics projects. Vote for your favourite innovation.',
    location: 'Exhibition Hall',
    category: 'Expo',
    categoryColor: '#00f0ff',
    day: 2,
  },
  {
    time: '6:00 PM',
    title: 'Valedictory & Prize Distribution',
    description: 'Closing ceremony, prize distribution, and recognition of all participants.',
    location: 'Main Auditorium',
    category: 'Ceremony',
    categoryColor: '#00f0ff',
    day: 2,
  },
]

function TimelineItem({
  event,
  index,
  inView,
}: {
  event: ScheduleEvent
  index: number
  inView: boolean
}) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      className={`flex items-start gap-4 md:gap-0 mb-8 relative ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
        <div
          className="glassmorphism rounded-xl p-5 transition-all duration-300 group"
          style={{ borderColor: `${event.categoryColor}20` }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${event.categoryColor}40`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `${event.categoryColor}20`
          }}
        >
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
            <span
              className="font-jetbrains-mono text-xs px-2 py-0.5 rounded-full"
              style={{
                background: `${event.categoryColor}15`,
                color: event.categoryColor,
                border: `1px solid ${event.categoryColor}30`,
              }}
            >
              {event.category}
            </span>
          </div>
          <div className="font-jetbrains-mono text-sm mb-1" style={{ color: event.categoryColor }}>
            {event.time}
          </div>
          <h4 className="font-space-grotesk font-bold text-lg text-white mb-2">{event.title}</h4>
          <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">{event.description}</p>
          <div className={`flex items-center gap-1 text-[#64748b] text-xs ${isLeft ? 'md:justify-end' : ''}`}>
            <MapPin className="w-3 h-3" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      {/* Center dot */}
      <div className="hidden md:flex w-2/12 justify-center items-start pt-5">
        <div className="relative">
          <div
            className="w-4 h-4 rounded-full border-2 z-10 relative"
            style={{
              borderColor: event.categoryColor,
              background: '#0a0a0f',
              boxShadow: `0 0 8px ${event.categoryColor}`,
            }}
          />
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-5/12" />

      {/* Mobile dot */}
      <div className="md:hidden flex flex-col items-center pt-5 shrink-0">
        <div
          className="w-3 h-3 rounded-full border-2"
          style={{
            borderColor: event.categoryColor,
            background: '#0a0a0f',
            boxShadow: `0 0 6px ${event.categoryColor}`,
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Schedule() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const day1 = events.filter((e) => e.day === 1)
  const day2 = events.filter((e) => e.day === 2)

  return (
    <section id="schedule" className="py-24 px-4 bg-[#12121a] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 10%, #12121a 90%, #0a0a0f 100%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-jetbrains-mono text-neon-blue text-sm tracking-widest uppercase mb-3 block">
            March 28 – 29, 2026
          </span>
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="text-white">Event </span>
            <span className="text-gradient-blue-violet">Schedule</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Two packed days of competition, learning, and celebration.
          </p>
        </motion.div>

        {/* Day 1 */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-blue/30" />
            <div className="px-6 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5">
              <span className="font-space-grotesk font-bold text-neon-blue">Day 1 · March 28</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-blue/30" />
          </div>
          <div className="relative">
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(180deg, transparent, #00f0ff40, transparent)' }}
            />
            {day1.map((event, i) => (
              <TimelineItem key={event.title} event={event} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>

        {/* Day 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-violet/30" />
            <div className="px-6 py-2 rounded-full border border-neon-violet/30 bg-neon-violet/5">
              <span className="font-space-grotesk font-bold text-neon-violet">Day 2 · March 29</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-violet/30" />
          </div>
          <div className="relative">
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(180deg, transparent, #7b2fff40, transparent)' }}
            />
            {day2.map((event, i) => (
              <TimelineItem key={event.title} event={event} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
