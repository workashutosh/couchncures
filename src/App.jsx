import React, { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

const TrustedBy = lazy(() => import('./components/TrustedBy'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const WhyChoose = lazy(() => import('./components/WhyChoose'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-beige antialiased">
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <TrustedBy />
        <About />
        <Services />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
