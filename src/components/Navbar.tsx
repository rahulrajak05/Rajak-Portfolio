import { useEffect, useState } from 'react'

export default function Navbar() {

  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  
  
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
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-white/10">
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
                  isActive ? 'text-primary' : 'text-gray-600 dark:text-white/80 hover:text-primary'
                }`}
              >
                {l.label}
              </a>
            )
          })}
        </nav>

        
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-white/10">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {links.map((l) => {
              const isActive = activeSection === l.href.slice(1)
              return (
                <a 
                  key={l.href} 
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                    isActive ? 'text-primary bg-primary/10' : 'text-gray-600 dark:text-white/80 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5'
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
