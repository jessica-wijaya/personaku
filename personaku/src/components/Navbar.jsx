import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Button from './Button';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Track the current active link (use whichever initial value makes sense).
  const [activeLink, setActiveLink] = useState('#home');

  const handleNav = () => {
    setNav(!nav);
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Harga', href: '#harga' },
    { label: 'Demo', href: '#demo' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="flex items-center justify-between h-[87px] px-5 md:px-10 border-b border-[#828282]">
      {/* Logo */}
      <img
        className="h-[90px] p-[27px_2px_36.254px_10px] ml-[5px] mt-[15px] flex-shrink-0"
        src={logo}
        alt="logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className={`
              cursor-pointer duration-300
              ${activeLink === item.href ? 'text-[#1658F9]' : 'text-black'}
              hover:text-[#1658F9]
            `}
            onClick={() => setActiveLink(item.href)}
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-1/2 h-full bg-white z-50 transition-transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <img className="h-[60px] p-5" src={logo} alt="logo" />
        <ul className="space-y-5 text-lg pl-5 my-4">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className={`
                cursor-pointer transition duration-300
                ${activeLink === item.href ? 'text-[#1658F9]' : 'text-black'}
                hover:text-[#1658F9]
              `}
              onClick={() => {
                setActiveLink(item.href);
              }}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons (Desktop Only) */}
      <div className="hidden md:flex space-x-4 mr-[5px]">
        <Button variant="secondary" size="navbar">Daftar</Button>
        <Button variant="primary" size="navbar">Masuk</Button>
      </div>
    </nav>
  );
};

export default Navbar;
