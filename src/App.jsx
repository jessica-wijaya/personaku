import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Features from "./components/Features";
import Manfaat from "./components/Manfaat";
import Demo from "./components/Demo";
import Harga from "./components/Harga";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Whatsapp from "./components/Whatsapp";
import Daftar from "./components/Daftar";
import Masuk from "./components/Masuk";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Main page content */}
        <Routes>
          <Route
            path="/personaku/"
            element={
              <div>
                <Hero />
                <Video />
                <Features />
                <Manfaat />
                <Demo />
                <Harga />
                <Testimonial />
                <Whatsapp />
              </div>
            }
          />

          <Route path="/personaku/faq" element={<FAQ />} />
          <Route path="/personaku/contact" element={<Contact />} />
          <Route path="/personaku/daftar" element={<Daftar />} />
          <Route path="/personaku/masuk" element={<Masuk />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
