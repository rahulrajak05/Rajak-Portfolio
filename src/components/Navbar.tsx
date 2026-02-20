import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  
  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about','education', 'skills', 'projects', 'experience' , 'workshops', 'contact']
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
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#workshops', label: 'Program' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur bg-gray-900/95 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a 
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-bold text-primary"
        >
          Rahul Kumar Rajak
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {links.map((l, index) => {
            const isActive = activeSection === l.href.slice(1)
            return (
              <motion.a 
                key={l.href} 
                href={l.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm transition-colors relative ${
                  isActive ? 'text-primary' : 'text-white/80 hover:text-primary'
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.button>
        
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2 space-y-1">
              {links.map((l, index) => {
                const isActive = activeSection === l.href.slice(1)
                return (
                  <motion.a 
                    key={l.href} 
                    href={l.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => setMobileOpen(false)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                      isActive ? 'text-primary bg-primary/10' : 'text-white/80 hover:text-primary hover:bg-white/5'
                    }`}
                  >
                    {l.label}
                  </motion.a>
                )
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
