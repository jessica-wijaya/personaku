import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Video from './components/Video'
import Features from './components/Features'
import Manfaat from './components/Manfaat'
import Demo from './components/Demo'
import Harga from './components/Harga'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        
        {/* Define main page content */}
        <Routes>
          <Route path="/" element={
            <div>
              <Hero />
              <Video />
              <Features />
              <Manfaat />
              <Demo />
              <Harga />
              <Testimonial />
            </div>
          } />

          <Route path="/faq" element={<FAQ />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
