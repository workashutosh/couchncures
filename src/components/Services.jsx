import React from 'react'
import { motion } from 'framer-motion'
import individualImg from '../images/refrence7.jpg'
import couplesImg from '../images/refrence3.jpg'
import familyImg from '../images/refrence4.jpg'
import packagesImg from '../images/refrence5.jpg'

const Services = () => {
  const handleWhatsAppBooking = () => {
    const phoneNumber = '7019322516'
    const message = encodeURIComponent('Hello! I would like to book a therapy session.')
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank')
  }

  const services = [
    {
      title: 'Individual Therapy',
      subtitle: 'Personal Growth Journey',
      duration: '45 minutes',
      description: 'Personalized one-on-one sessions to address anxiety, depression, relationship conflicts, emotional burnout and more.',
      price: 'Starting at ₹999/session',
      image: individualImg,
    },
    {
      title: 'Couples Therapy',
      subtitle: 'Deepened Partnership Understanding',
      duration: '60 minutes',
      description: 'For partners looking to rebuild trust, improve communication, and strengthen emotional intimacy.',
      price: 'Starting at ₹1,499/session',
      image: couplesImg,
    },
    {
      title: 'Family Therapy',
      subtitle: 'Strengthened Family Bonds',
      duration: '60 minutes',
      description: 'Build stronger connections within your family unit through guided sessions that help everyone communicate and understand each other better.',
      price: 'Starting at ₹1,499/session',
      image: familyImg,
    },
    {
      title: 'Mental Health Packages',
      subtitle: 'Affordable Ongoing Support',
      duration: 'Flexible',
      description: 'Affordable therapy plans starting at ₹999, designed for individuals who want consistent emotional support but are financially constrained.',
      price: 'Packages starting at ₹999',
      image: packagesImg,
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Curved section divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-soft-teal to-transparent" style={{
        borderRadius: '0 0 50% 50%',
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)'
      }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-800 mb-6 tracking-tight leading-tight">
            Our <span className="text-mustard-yellow">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
            Comprehensive mental health support tailored to your unique needs and circumstances. 
            We offer a variety of therapeutic approaches to ensure you find the perfect fit for your journey.
          </p>
        </motion.div>

        {/* Therapy Type Cards with Images */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image with rounded top corners */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <span className="text-xs text-gray-600 font-body">{service.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-mustard-yellow font-body mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed font-body mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-xl font-serif text-gray-800 font-semibold">
                    {service.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
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
    </section>
  )
}

export default Services
