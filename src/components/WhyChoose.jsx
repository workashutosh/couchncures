import React from 'react'
import { motion } from 'framer-motion'

const WhyChoose = () => {
  const reasons = [
    {
      icon: '🏠',
      title: 'Comfort of Home',
      description: 'Attend sessions from your safe space, eliminating the stress of travel and allowing you to feel more relaxed and open during therapy.',
    },
    {
      icon: '🔒',
      title: 'Complete Confidentiality',
      description: 'Your privacy is our utmost priority. Every conversation remains strictly confidential, protected by professional ethical standards.',
    },
    {
      icon: '📅',
      title: 'Flexible Scheduling',
      description: 'We work around your schedule, offering sessions at times that fit your life, making therapy more accessible and convenient.',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. Our affordable packages start at just ₹999, with clear pricing that respects your budget.',
    },
    {
      icon: '💬',
      title: 'Easy Booking',
      description: 'Book your session instantly through WhatsApp—simple, quick, and stress-free. Our team responds promptly to confirm your appointment.',
    },
    {
      icon: '🌟',
      title: 'Personalized Care',
      description: 'Every individual is unique, and so is our approach. We tailor our therapy methods to match your specific needs and goals.',
    },
  ]

  return (
    <section id="why-choose" className="py-24 md:py-32 bg-gradient-to-b from-white via-cream to-white relative overflow-hidden">
      {/* Curved section divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-soft-teal to-white" style={{
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
            Why <span className="text-mustard-yellow">Choose Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
            We understand that choosing a therapist is a deeply personal decision. Here's what makes 
            Couch 'N Cures a trusted choice for your mental health journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-5">{reason.icon}</div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4 tracking-tight">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
