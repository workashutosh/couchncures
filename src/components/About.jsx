import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const values = [
    {
      icon: '💝',
      title: 'Compassionate Care',
      description: 'Every interaction is grounded in kindness, empathy, and genuine understanding. We create a warm, safe space where you can express yourself freely without judgment or fear.',
    },
    {
      icon: '🤝',
      title: 'Real Connection',
      description: 'Beyond therapy techniques, we believe in authentic human connection. You\'ll find a real person who truly cares about your wellbeing and is committed to your healing journey.',
    },
    {
      icon: '💡',
      title: 'Evidence-Based Approach',
      description: 'Our methods are rooted in proven therapeutic practices, combining professional expertise with personalized care tailored to your unique needs and circumstances.',
    },
    {
      icon: '💚',
      title: 'Affordable Access',
      description: 'We believe mental health support should be accessible to everyone. Our flexible pricing and packages ensure quality care without financial stress or burden.',
    },
  ]

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Curved background with soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-teal via-mint-cream to-cream" style={{
        borderRadius: '0 0 100px 100px',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
      }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-800 mb-6 tracking-tight leading-tight">
            Our <span className="text-mustard-yellow">Approach</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 font-body leading-relaxed mb-6">
            At Couch 'N Cures, we believe that healing begins with feeling safe, understood, and truly cared for. 
            Our approach is not just about therapy—it's about creating a sanctuary where your emotional wellbeing 
            can flourish.
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-body leading-relaxed">
            We combine professional therapeutic expertise with genuine human warmth, ensuring that every session 
            feels like a conversation with someone who truly sees you and wants to support your journey to wellness.
          </p>
        </motion.div>

        {/* Value cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.15 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto mb-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4 tracking-tight">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Quote - Large Serif Typography with Curved Background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div 
            className="relative bg-gradient-to-br from-soft-teal via-cream to-mint-cream p-16 md:p-20 rounded-[60px] shadow-2xl overflow-hidden"
            style={{
              borderRadius: '40% 60% 50% 40% / 60% 30% 70% 40%'
            }}
          >
            <blockquote className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 italic leading-relaxed text-center">
              "Healing is not about being fixed—it's about being understood, accepted, and supported 
              on your journey to becoming the best version of yourself."
            </blockquote>
            <p className="text-center mt-8 text-gray-600 font-body text-lg">
              — Couch 'N Cures Philosophy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
