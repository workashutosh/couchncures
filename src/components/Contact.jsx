import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const handleWhatsAppBooking = () => {
    const phoneNumber = '7019322516'
    const message = encodeURIComponent('Hello! I would like to book a therapy session.')
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank')
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:themumblemind@gmail.com'
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917019322516'
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-soft-pink relative overflow-hidden">
      {/* Curved background divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-soft-pink" style={{
        borderRadius: '0 0 50% 50%',
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)'
      }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-800 mb-6 tracking-tight leading-tight">
            Get In <span className="text-mustard-yellow">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
            We're here to support you. Reach out to book a session or ask any questions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-8 w-full max-w-4xl"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3 tracking-tight">
                  Email
                </h3>
                <button
                  onClick={handleEmailClick}
                  className="text-gray-600 hover:text-mustard-yellow transition-colors font-body text-lg"
                >
                  themumblemind@gmail.com
                </button>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3 tracking-tight">
                  Phone / WhatsApp
                </h3>
                <button
                  onClick={handlePhoneClick}
                  className="text-gray-600 hover:text-mustard-yellow transition-colors font-body text-lg"
                >
                  +91 7019322516
                </button>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3 tracking-tight">
                  Location
                </h3>
                <p className="text-gray-600 font-body text-lg">Bangalore, India</p>
              </div>
            </motion.div>
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={handleWhatsAppBooking}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-8 py-4 rounded-full font-body text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
            >
              Book a Session
              <span className="text-lg">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
