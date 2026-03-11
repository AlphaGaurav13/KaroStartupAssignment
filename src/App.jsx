import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import HowItWorks from "./HowItWorks"
import WhoCanApply from "./WhoCanApply"
import Investors from "./Investors"
import Startups from "./Startups"
import KaroStartup from "./KaroStartup"
import CTA from "./CTA"
import Footer from "./Footer"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <WhoCanApply />
      <Investors />
      <Startups />
      <KaroStartup />
      <CTA />
      <Footer />
    </div>
  )
}