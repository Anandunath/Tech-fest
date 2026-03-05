import Hero from '@/components/Hero'
import About from '@/components/About'
import Workshops from '@/components/Workshops'
import Robowar from '@/components/Robowar'
import Schedule from '@/components/Schedule'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Hero />
      <About />
      <Workshops />
      <Robowar />
      <Schedule />
      <Footer />
    </main>
  )
}
