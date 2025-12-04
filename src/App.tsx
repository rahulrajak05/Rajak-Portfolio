import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Outreach from './components/Outreach'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Outreach />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
