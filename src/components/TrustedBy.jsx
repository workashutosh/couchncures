import React from 'react'
import { motion } from 'framer-motion'

const TrustedBy = () => {
  const directories = [
    { name: 'Psychology Today', logo: '🧠' },
    { name: 'therapytribe', logo: '💬' },
    { name: 'GoodTherapy', logo: '✓' },
    { name: 'theravive', logo: '🌿' },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-6 font-body">We're Featured Across Multiple Directories</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {directories.map((directory, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className="text-3xl md:text-4xl mb-2">{directory.logo}</div>
                <span className="text-sm text-gray-600 font-body">{directory.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBy

