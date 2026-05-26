import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogoCloud } from './components/LogoCloud'
import { FeatureGrid } from './components/FeatureGrid'
import { ProcessWorkflow } from './components/ProcessWorkflow'
import { Stats } from './components/Stats'
import { AlternatingFeatures } from './components/AlternatingFeatures'
import { Integrations } from './components/Integrations'
import { Testimonials } from './components/Testimonials'
import { BottomCTA } from './components/BottomCTA'
import { Footer } from './components/Footer'
import './App.css'

/** Sentico 餐厅 AI 落地页主应用 */
function App() {
  return (
    <div className="landing">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <FeatureGrid />
        <ProcessWorkflow />
        <Stats />
        <AlternatingFeatures />
        <Integrations />
        <Testimonials />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
