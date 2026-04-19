import Header from './components/Header'
import Hero from './components/Hero'
import Downloads from './components/Downloads'
import Features from './components/Features'
import Community from './components/Community'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <Hero />
      <Downloads />
      <Features />
      <Community />
      <Footer />
    </div>
  )
}

export default App