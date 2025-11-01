import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const handleWhatsAppBooking = () => {
    const phoneNumber = '7019322516'
    const message = encodeURIComponent('Hello! I would like to book a therapy session.')
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank')
  }

  const testimonials = [
    {
      name: 'Priya M.',
      location: 'Bangalore',
      text: 'Couch \'N Cures helped me navigate through a difficult period of anxiety. The compassionate approach and genuine care made all the difference. I feel more empowered now, and I\'ve learned tools to manage my anxiety that I use every day. The online format made it so convenient, and I always felt heard and understood.',
      rating: 5,
      service: 'Individual Therapy',
    },
    {
      name: 'Rahul S.',
      location: 'Bangalore',
      text: 'The therapy sessions provided me with tools to manage my stress better. The counselor understood my situation and provided practical solutions. I appreciate how affordable the sessions are—therapy finally feels accessible. Highly recommend to anyone who\'s been hesitant to start!',
      rating: 5,
      service: 'Individual Therapy',
    },
    {
      name: 'Anita K.',
      location: 'Bangalore',
      text: 'As a couple, we struggled with communication. The couples therapy sessions helped us rebuild trust and connect on a deeper level. Our therapist was patient, understanding, and really helped us see things from each other\'s perspective. We\'re grateful for this journey and our relationship has transformed.',
      rating: 5,
      service: 'Couples Therapy',
    },
    {
      name: 'Sanjay R.',
      location: 'Bangalore',
      text: 'The affordable packages made therapy accessible for me. The consistent support has been invaluable in my healing journey. I\'ve been able to work through trauma and anxiety in a safe, non-judgmental space. Thank you, Couch \'N Cures, for making mental health care affordable and compassionate.',
      rating: 5,
      service: 'Mental Health Package',
    },
    {
      name: 'Meera K.',
      location: 'Bangalore',
      text: 'I was skeptical about online therapy, but Couch \'N Cures changed my mind completely. The sessions feel as personal and warm as in-person therapy. My therapist is wonderful, and I\'ve made incredible progress. The flexibility of online sessions fits perfectly with my busy schedule.',
      rating: 5,
      service: 'Individual Therapy',
    },
    {
      name: 'Vikram & Shreya',
      location: 'Bangalore',
      text: 'Couples therapy saved our relationship. We were on the verge of separating, but our therapist helped us rediscover why we fell in love. The sessions gave us practical tools for communication and understanding. Now we feel stronger and more connected than ever before.',
      rating: 5,
      service: 'Couples Therapy',
    },
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-br from-sage-green via-mint-cream to-cream relative overflow-hidden">
      {/* Curved section divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-sage-green" style={{
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
            What Our <span className="text-mustard-yellow">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
            Genuine feedback from those who've walked this journey with us. Each story is a testament 
            to the power of compassionate, accessible mental health care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-body">
                  {testimonial.service}
                </span>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed font-body mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center pt-6 border-t border-gray-100">
                <div className="w-1 h-12 bg-mustard-yellow/40 mr-4"></div>
                <div>
                  <p className="text-gray-800 font-body font-medium mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm font-body">
                    {testimonial.location}
                  </p>
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

export default Testimonials
