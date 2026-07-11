import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Founder from './components/Founder.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Packages from './components/Packages.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Founder />
        <Services />
        <Process />
        <Packages />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
