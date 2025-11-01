import React from 'react'
import { motion } from 'framer-motion'
import logo from '../cou_logo.png'
import heroImage from '../images/refrence7.jpg'

const Hero = () => {
  const handleWhatsAppBooking = () => {
    const phoneNumber = '7019322516'
    const message = encodeURIComponent('Hello! I would like to book a therapy session.')
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank')
  }

  const therapyTypes = [
    { name: 'Individual Therapy', icon: '👤' },
    { name: 'Family Therapy', icon: '👨‍👩‍👧‍👦' },
    { name: 'Couple Therapy', icon: '💑' },
    { name: 'Well-being Check-ins', icon: '💚' },
  ]

  return (
    <section id="home" className="relative min-h-screen bg-beige overflow-hidden pt-24">
      {/* Subtle background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-soft-teal/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-rose-light/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Large Headline - Centered on left */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-800 leading-tight">
              Empowering change through{' '}
              <span className="text-mustard-yellow">personalized therapy</span>  and{' '}
              <span className="text-mustard-yellow">counseling</span> ✨
            </h1>

            {/* Sub-text */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-body max-w-xl">
              Find the resources you need to face your current challenges with our expert team of licensed therapists and counselors in Bangalore and throughout India.
            </p>

            {/* Primary CTA */}
            <div className="pt-4">
              <motion.button
                onClick={handleWhatsAppBooking}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-8 py-4 rounded-full font-body text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Book a Session
                <span className="text-lg">→</span>
              </motion.button>
            </div>

            {/* Therapy Type Selection - Clean tabs style */}
            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-4 font-body">Looking for a specific type of therapy?</p>
              <div className="flex flex-wrap gap-3">
                {therapyTypes.map((type, index) => (
                  <motion.button
                    key={index}
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-mustard-yellow/30 group text-sm font-body"
                  >
                    <span className="text-xl">{type.icon}</span>
                    <span className="text-gray-700 group-hover:text-mustard-yellow transition-colors">
                      {type.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image with organic rounded shape */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Organic rounded image container */}
            <div 
              className="relative w-full h-[600px] rounded-[60px] overflow-hidden shadow-xl"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
              }}
            >
              {/* Hero Image */}
              <img
                src={heroImage}
                alt="Couch 'N Cures Therapy"
                className="w-full h-full object-cover"
              />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
