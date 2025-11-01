import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleWhatsAppBooking = () => {
    const phoneNumber = '7019322516'
    const message = encodeURIComponent('Hello! I would like to book a therapy session.')
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank')
  }

  const faqs = [
    {
      question: 'Is therapy confidential?',
      answer: 'Yes, absolutely. Everything discussed in sessions remains completely private and protected. We maintain strict confidentiality standards to ensure your privacy and trust. All sessions are conducted in a secure, private online environment, and your information is never shared without your explicit consent, except as required by law.',
    },
    {
      question: 'Is therapy affordable?',
      answer: 'Yes, we believe mental health support should be accessible to everyone. We offer monthly packages and flexible rates to make therapy affordable. Our mental health packages start at ₹999, and we work with clients to find payment options that fit their budget. We also offer payment plans for those who need them. Quality therapy shouldn\'t be a luxury.',
    },
    {
      question: 'How does online therapy work?',
      answer: 'Online therapy works just like in-person therapy, but from the comfort of your own space. Sessions are held over secure video calls and offer the same level of warmth, connection, and professionalism as in-person therapy. You can attend from your home, office, or any private space where you feel comfortable. All you need is a stable internet connection and a quiet, private space. Our platform is easy to use and completely secure.',
    },
    {
      question: 'How do I book a session?',
      answer: 'Booking a session is easy and quick. You can book directly through WhatsApp by clicking the "Begin Your Journey" or "Book Session" button on our website. Alternatively, you can contact us at 7019322516 or email us at themumblemind@gmail.com. We respond promptly to all inquiries and will help you find a time that works best for you.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept payments via UPI, GPay, or direct bank transfer. We can discuss payment options during your booking process. For package deals, we offer flexible payment plans to make therapy more accessible. All transactions are secure and handled with complete confidentiality.',
    },
    {
      question: 'How long are therapy sessions?',
      answer: 'Individual therapy sessions are 45 minutes, couples therapy is 60 minutes, and well-being check-ins are 30 minutes. However, we understand that everyone\'s needs are different, so we can adjust session lengths based on your needs during booking. The duration is always discussed and agreed upon before your first session.',
    },
    {
      question: 'What can I expect in my first session?',
      answer: 'Your first session is all about getting to know you and understanding what brings you to therapy. We\'ll discuss your concerns, goals, and what you hope to achieve. This is also a time for you to ask questions and see if we\'re a good fit. There\'s no pressure—we want you to feel completely comfortable. The first session sets the foundation for your healing journey.',
    },
    {
      question: 'How many sessions will I need?',
      answer: 'The number of sessions needed varies from person to person, depending on your unique situation and goals. Some people find relief in just a few sessions, while others benefit from longer-term therapy. We\'ll work together to determine what\'s best for you. Many clients find our package deals helpful for consistent support, and you can always adjust based on your progress.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Curved section divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-sage-green to-white" style={{
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
            Frequently Asked <span className="text-mustard-yellow">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
            We understand that starting therapy can feel overwhelming, and you likely have many questions. 
            Here are answers to some common questions to help you feel more comfortable and informed.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ x: 4 }}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center group"
              >
                <span className="font-serif text-gray-800 text-lg md:text-xl tracking-tight pr-8 group-hover:text-mustard-yellow transition-colors">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-mustard-yellow text-xl flex-shrink-0"
                >
                  ▼
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 leading-relaxed font-body text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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

export default FAQ
