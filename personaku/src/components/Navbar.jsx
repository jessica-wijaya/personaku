import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Button from './Button';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex items-center justify-between h-[87px] px-5 md:px-10 border-b border-[#828282]">
      {/* Logo */}
    <img className='h-[90px] p-[27px_2px_36.254px_10px] ml-[5px] mt-[15px] flex-shrink-0'
    src={logo} alt="logo" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">Home</li>
        <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">Harga</li>
        <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">Demo</li>
        <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">Testimoni</li>
        <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">FAQ</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white z-50 transition-transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <img className="h-[60px] p-5" src={logo} alt="logo" />
        <ul className="space-y-4 text-lg pl-5">
          <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">Home</li>
          <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">Harga</li>
          <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">Demo</li>
          <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">Testimoni</li>
          <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">FAQ</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4 mr-[5px]">
        <Button variant="secondary" size="navbar">Daftar</Button>
        <Button variant="primary" size="navbar">Masuk</Button>
      </div>
    </nav>
  );
};

export default Navbar;
