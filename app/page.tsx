import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import ProjectTypes from '@/components/ProjectTypes'
import Stats from '@/components/Stats'
import TechGraphics from '@/components/TechGraphics'
import References from '@/components/References'
import WhyUs from '@/components/WhyUs'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-dark-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <ProjectTypes />
      <Stats />
      <TechGraphics />
      <References />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  )
}
