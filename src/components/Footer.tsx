'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, Cpu } from 'lucide-react'

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#', color: '#e1306c' },
  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter / X', href: '#', color: '#1da1f2' },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#', color: '#0077b5' },
  { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', href: '#', color: '#ff0000' },
]

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Robowar', href: '#robowar' },
  { label: 'Schedule', href: '#schedule' },
]

export default function Footer() {
  return (
    <footer className="bg-[#12121a] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <div className="font-space-grotesk font-bold text-white text-lg leading-none">EC Tech Fest</div>
                <div className="font-jetbrains-mono text-neon-blue text-xs">2026</div>
              </div>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed mb-4">
              The annual technology festival of the Department of Electronics and Communication Engineering, bringing together the brightest minds in tech.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:ectechfest@ece.edu"
                className="flex items-center gap-2 text-[#94a3b8] text-sm hover:text-neon-blue transition-colors"
              >
                <Mail className="w-4 h-4" />
                ectechfest@ece.edu
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-[#94a3b8] text-sm hover:text-neon-blue transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space-grotesk font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] text-sm hover:text-neon-blue transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-neon-blue">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-space-grotesk font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-3 text-[#94a3b8] text-sm group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <div
                    className="w-9 h-9 rounded-lg bg-[#1a1a2e] border border-white/5 flex items-center justify-center transition-all duration-200"
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.borderColor = social.color
                      el.style.background = `${social.color}15`
                      el.style.color = social.color
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.borderColor = ''
                      el.style.background = ''
                      el.style.color = ''
                    }}
                  >
                    {social.icon}
                  </div>
                  <span className="group-hover:text-white transition-colors">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748b] text-sm font-jetbrains-mono">
            © 2026 EC Tech Fest · Department of Electronics &amp; Communication Engineering
          </p>
          <p className="text-[#64748b] text-xs">Crafted with passion by the ECE Department</p>
        </div>
      </div>
    </footer>
  )
}
