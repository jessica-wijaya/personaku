import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/LandingPage/Hero";
import Video from "./pages/LandingPage/Video"
import Features from "./pages/LandingPage/Features";
import Manfaat from "./pages/LandingPage/Manfaat";
import Demo from "./pages/LandingPage/Demo";
import Harga from "./pages/LandingPage/Harga";
import Footer from "./components/Footer";
import Testimonial from "./pages/LandingPage/Testimonial";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Whatsapp from "./components/Whatsapp";
import Daftar from "./pages/SignUp/Daftar";
import Masuk from "./pages/SignUp/Masuk";

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
