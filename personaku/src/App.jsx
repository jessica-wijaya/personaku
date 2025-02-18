import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Video from './components/Video'
import Features from './components/Features'
import Manfaat from './components/Manfaat'
import Demo from './components/Demo'
import Harga from './components/Harga'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import Ending from './components/Ending'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <Features />
      <Manfaat />
      <Harga />
      <Testimonial />
      <Ending />
      <Footer />
    </div>
  )
}

export default App
