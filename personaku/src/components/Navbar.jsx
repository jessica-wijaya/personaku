import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex items-center justify-between h-[87px] px-[7px] border-b-[0.5px] border-[#828282]'>
        {/* Logo */}
        <img
        className='md:ml-10 h-[90px] p-[27px_2px_36.254px_10px] flex-shrink-0'
        src={logo}
        alt="logo"
        />

        {/* Menu */}
        <ul className='hidden md:flex absolute left-[500px] w-[440px] justify-center space-x-6'>
            <li className="hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer">Home</li>
            <li className="hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer">Harga</li>
            <li className="hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer">Demo</li>
            <li className="hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer">Testimoni</li>
            <li className="hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer">FAQ</li>
        </ul>


        {/* Mobile Menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        
        <div className={`fixed top-0 left-0 w-[75%] h-full bg-white z-50 border-r-[0.5px] border-[#828282] ease-in-out duration-500 
            ${nav ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
        >
            <img
            className='h-[90px] p-[27px_2px_36.254px_10px] flex-shrink-0'
            src={logo}
            alt="logo"
            />
            <ul className='items-center'>
            <li className='pt-5 border-b-[0.5px] border-b-[#828282] pl-4 hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer'>Home</li>
            <li className='pt-5 border-b-[0.5px] border-b-[#828282] pl-4 hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer'>Harga</li>
            <li className='pt-5 border-b-[0.5px] border-b-[#828282] pl-4 hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer'>Demo</li>
            <li className='pt-5 border-b-[0.5px] border-b-[#828282] pl-4 hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer'>Testimoni</li>
            <li className='pt-5 border-b-[0.5px] border-b-[#828282] pl-4 hover:text-[#1658F9] transition-colors duration-300 ease-in-out cursor-pointer'>FAQ</li>  
            </ul>
        </div>

        {/*Right*/}
        <div className="hidden md:flex  absolute right-[57px] bottom-[17px]w-[190px] h-[45px] p-[7px 10px] items-center gap-[10px]">
        <Button variant="secondary" size="md">Daftar</Button>
        <Button variant="primary" size="md">Masuk</Button>
        </div>
    </div>
    )
}

export default Navbar
