import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMenuItemClick = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (nav) {
        setNav(false);
      }
      if (window.scrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nav]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between h-[87px] px-5 md:px-10 border-b border-[#DEE8F9] transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <img
          className="h-[90px] p-[27px_2px_36.254px_10px] ml-[5px] mt-[15px] flex-shrink-0"
          src={logo}
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer hover:text-[#1658F9]">
            <RouterLink to="/personaku/" smooth={true} duration={500}>
              Home
            </RouterLink>
          </li>
          <li className="cursor-pointer hover:text-[#1658F9]">
            <HashLink smooth to="/personaku/#harga" duration={500}>
              Harga
            </HashLink>
          </li>
          <li className="cursor-pointer hover:text-[#1658F9]">
            <HashLink smooth to="/personaku/#demo" duration={500}>
              Demo
            </HashLink>
          </li>
          <li className="cursor-pointer hover:text-[#1658F9]">
            <HashLink smooth to="/personaku/#testimoni" duration={500}>
              Testimoni
            </HashLink>
          </li>
          <li className="cursor-pointer hover:text-[#1658F9]">
            <RouterLink to="/personaku/faq" smooth={true} duration={500}>
              FAQ
            </RouterLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Buttons (Desktop Only) */}
        <div className="hidden md:flex space-x-4 mr-[5px]">
          <Button variant="secondary" size="navbar">
            <RouterLink to="/personaku/daftar" smooth={true} duration={500}>
              Daftar
            </RouterLink>
          </Button>
          <Button variant="primary" size="navbar">
            Masuk
          </Button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden fixed top-[87px] left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out transform ${
            nav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <ul className="flex flex-col p-4">
            <li className="py-2 border-b border-[#DEE8F9]">
              <RouterLink
                to="/personaku/"
                smooth={true}
                duration={500}
                onClick={handleMenuItemClick}
              >
                Home
              </RouterLink>
            </li>
            <li className="py-2 border-b border-[#DEE8F9]">
              <HashLink
                smooth
                to="/personaku/#harga"
                duration={500}
                onClick={handleMenuItemClick}
              >
                Harga
              </HashLink>
            </li>
            <li className="py-2 border-b border-[#DEE8F9]">
              <HashLink
                smooth
                to="/personaku/#demo"
                duration={500}
                onClick={handleMenuItemClick}
              >
                Demo
              </HashLink>
            </li>
            <li className="py-2 border-b border-[#DEE8F9]">
              <HashLink
                smooth
                to="/personaku/#testimoni"
                duration={500}
                onClick={handleMenuItemClick}
              >
                Testimoni
              </HashLink>
            </li>
            <li className="py-2 border-b border-[#DEE8F9]">
              <RouterLink
                to="/personaku/faq"
                smooth={true}
                duration={500}
                onClick={handleMenuItemClick}
              >
                FAQ
              </RouterLink>
            </li>
            <li className="py-2 border-b border-[#DEE8F9]">
              <RouterLink
                to="/personaku/daftar"
                smooth={true}
                duration={500}
                onClick={handleMenuItemClick}
              >
                Daftar
              </RouterLink>
            </li>
            <li className="py-2">
              <RouterLink
                to="/personaku/masuk"
                smooth={true}
                duration={500}
                onClick={handleMenuItemClick}
              >
                Masuk
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
