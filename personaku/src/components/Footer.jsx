import React from 'react'
import { Router, Link as RouterLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='w-full border-t border-t-[#828282]'>
            <div className="flex flex-col items-center gap-4 my-5">
                <ul className="flex space-x-6">
                    <RouterLink to="/contact">
                        <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">Kontak</li>
                    </RouterLink>
                    <RouterLink to="/faq">
                        <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">FAQ</li>
                    </RouterLink>
                    <li className="hover:text-[rgb(22,88,249)] cursor-pointer transition duration-300">Demo</li>
                </ul>
                <p className='text-center'>2025 © Personaku. All rights reserved. Crafted by Personaku</p>
                <img src={Logo} className='w-[150px] h-auto mt-1' />
            </div>
        </div>

    )
}

export default Footer
