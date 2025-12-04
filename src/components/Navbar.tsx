import { useEffect, useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  
  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'workshops', 'contact']
      const scrollY = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#workshops', label: 'Program' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gray-900/95 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-primary">Rahul Kumar Rajak</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {links.map((l) => {
            const isActive = activeSection === l.href.slice(1)
            return (
              <a 
                key={l.href} 
                href={l.href} 
                className={`text-sm transition-colors ${
                  isActive ? 'text-primary' : 'text-white/80 hover:text-primary'
                }`}
              >
                {l.label}
              </a>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-md text-white/80 hover:text-primary hover:bg-white/5 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden bg-gray-900 border-t border-white/10">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {links.map((l) => {
              const isActive = activeSection === l.href.slice(1)
              return (
                <a 
                  key={l.href} 
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                    isActive ? 'text-primary bg-primary/10' : 'text-white/80 hover:text-primary hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
