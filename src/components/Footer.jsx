import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../cou_logo.png'

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Therapies' },
    { id: 'why-choose', label: 'Why Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ]

  return (
    <footer className="bg-black text-white py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)'
        }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('home')}
              className="mb-6 cursor-pointer"
            >
              <img
                src={logo}
                alt="Couch 'N Cures Logo"
                loading="lazy"
                className="h-16 md:h-20 w-auto"
              />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-mustard-yellow mb-4 tracking-tight">
              Couch 'N Cures
            </h3>
            <p className="text-gray-400 font-body leading-relaxed text-base">
              Compassionate, affordable, and confidential mental health support 
              in Bangalore, India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-serif text-mustard-yellow mb-6 tracking-wide uppercase text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-mustard-yellow transition-colors font-body text-base duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-serif text-mustard-yellow mb-6 tracking-wide uppercase text-sm">
              Connect With Us
            </h4>
            <motion.a
              href="https://instagram.com/couchncure"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="inline-block text-gray-400 hover:text-mustard-yellow transition-colors text-3xl mb-4"
              aria-label="Instagram"
            >
              📷
            </motion.a>
            <p className="text-gray-400 font-body text-sm">
              Follow us on Instagram:{' '}
              <span className="text-mustard-yellow">@couchncure</span>
            </p>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 font-body text-sm"
            >
              &copy; {currentYear} Couch 'N Cures. All rights reserved.
            </motion.div>
            <div className="flex space-x-8 text-sm">
              <motion.button
                onClick={() => {
                  setShowTerms(false)
                  setShowPrivacy(!showPrivacy)
                }}
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-mustard-yellow transition-colors font-body duration-300"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                onClick={() => {
                  setShowPrivacy(false)
                  setShowTerms(!showTerms)
                }}
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-mustard-yellow transition-colors font-body duration-300"
              >
                Terms of Use
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {showPrivacy && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 p-8 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-mustard-yellow/10 text-gray-300 font-body text-sm leading-relaxed overflow-hidden"
              >
                <h5 className="font-serif text-mustard-yellow mb-4 text-lg">Privacy Policy</h5>
                <p className="mb-4">
                  At Couch 'N Cures, we are committed to protecting your privacy. All therapy 
                  sessions and personal information are kept strictly confidential. We do not 
                  share your information with third parties without your explicit consent, except 
                  as required by law.
                </p>
                <p className="mb-4">
                  Information collected through our website is used solely for the purpose of 
                  scheduling appointments and providing therapy services. We use secure methods 
                  to protect your data and ensure confidentiality at all times.
                </p>
                <p>
                  If you have any questions about our privacy practices, please contact us at 
                  themumblemind@gmail.com.
                </p>
                <motion.button
                  onClick={() => setShowPrivacy(false)}
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 text-mustard-yellow hover:text-mustard-light transition-colors font-body"
                >
                  Close
                </motion.button>
              </motion.div>
            )}

            {showTerms && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 p-8 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-mustard-yellow/10 text-gray-300 font-body text-sm leading-relaxed overflow-hidden"
              >
                <h5 className="font-serif text-mustard-yellow mb-4 text-lg">Terms of Use</h5>
                <p className="mb-4">
                  By using Couch 'N Cures services, you agree to the following terms:
                </p>
                <ul className="list-none space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-mustard-yellow mr-3">•</span>
                    <span>All therapy sessions are confidential and protected under professional counseling standards.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mustard-yellow mr-3">•</span>
                    <span>Payments are required as per the agreed schedule for your therapy package.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mustard-yellow mr-3">•</span>
                    <span>Please provide at least 24 hours notice for session cancellations or rescheduling.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mustard-yellow mr-3">•</span>
                    <span>Online sessions require a stable internet connection and a private, confidential space.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mustard-yellow mr-3">•</span>
                    <span>Therapy is a collaborative process, and your active participation is essential for positive outcomes.</span>
                  </li>
                </ul>
                <p>
                  These terms may be updated periodically. Continued use of our services 
                  constitutes acceptance of these terms.
                </p>
                <motion.button
                  onClick={() => setShowTerms(false)}
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 text-mustard-yellow hover:text-mustard-light transition-colors font-body"
                >
                  Close
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  )
}

export default Footer
