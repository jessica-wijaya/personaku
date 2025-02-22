import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Button from './Button';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Handle the mobile menu toggle
  const handleNav = () => {
    setNav(!nav);
  };

  // Close the mobile menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setNav(false);
  };

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
        <li className='cursor-pointer hover:text-[#1658F9]'>
          <RouterLink to="/personaku/" smooth={true} duration={500} onClick={handleMenuItemClick}>Home</RouterLink>
        </li>
        <li className='cursor-pointer hover:text-[#1658F9]'>
          <HashLink smooth to="/personaku/#harga" duration={500} onClick={handleMenuItemClick}>Harga</HashLink>
        </li>
        <li className='cursor-pointer hover:text-[#1658F9]'>
          <Link to="demo" smooth={true} duration={500} onClick={handleMenuItemClick}>Demo</Link>
        </li>
        <li className='cursor-pointer hover:text-[#1658F9]'>
          <HashLink smooth to="/personaku/#testimoni" duration={500} onClick={handleMenuItemClick}>Testimoni</HashLink>
        </li>
        <li className='cursor-pointer hover:text-[#1658F9]'>
          <RouterLink to="/personaku/faq" smooth={true} duration={500} onClick={handleMenuItemClick}>FAQ</RouterLink>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-1/2 h-full bg-white z-50 transition-transform ${nav ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <img className="h-[60px] p-5" src={logo} alt="logo" />
        <ul className="space-y-5 text-lg pl-5 my-4">
          <li className='cursor-pointer hover:text-[#1658F9]'>
            <RouterLink to="/personaku/" smooth={true} duration={500} onClick={handleMenuItemClick}>Home</RouterLink>
          </li>
          <li className='cursor-pointer hover:text-[#1658F9]'>
            <HashLink smooth to="/personaku/#harga" duration={500} onClick={handleMenuItemClick}>Harga</HashLink>
          </li>
          <li className='cursor-pointer hover:text-[#1658F9]'>
            <Link to="demo" smooth={true} duration={500} onClick={handleMenuItemClick}>Demo</Link>
          </li>
          <li className='cursor-pointer hover:text-[#1658F9]'>
            <HashLink smooth to="/personaku/#testimoni" duration={500} onClick={handleMenuItemClick}>Testimoni</HashLink>
          </li>
          <li className='cursor-pointer hover:text-[#1658F9]'>
            <RouterLink to="/personaku/faq" smooth={true} duration={500} onClick={handleMenuItemClick}>FAQ</RouterLink>
          </li>
          <li>Daftar</li>
          <li>Masuk</li>
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
