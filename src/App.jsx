import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import AboutDoctor from './components/AboutDoctor'
import Reviews from './components/Reviews'
import ClinicInfo from './components/ClinicInfo'
import Footer from './components/Footer'
import FloatingWA from './components/FloatingWA'

export default function App() {
  return (
    <div style={{ background: '#FDF8F5', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <AboutDoctor />
        <Reviews />
        <ClinicInfo />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  )
}
