import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../cou_logo.png'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Therapies' },
    { id: 'why-choose', label: 'Why Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ]


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with text */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src={logo}
              alt="Couch 'N Cures Logo"
              className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="text-xl md:text-2xl font-serif text-mustard-yellow tracking-wide">
                Couch 'N Cures
              </div>
              <div className="text-xs text-gray-500 font-body uppercase tracking-wider">
                Online Therapy Space
              </div>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                className={`text-sm tracking-wide font-light transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-mustard-yellow' : 'text-gray-700 hover:text-mustard-yellow'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-6 pb-4 space-y-4 border-t border-gray-200 pt-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-sm tracking-wide text-gray-700 hover:text-mustard-yellow transition-colors w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
