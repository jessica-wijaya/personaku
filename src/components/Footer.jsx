import React from "react";
import { Router, Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <div className="w-full border-t border-t-[#828282]">
      <div className="flex flex-col items-center gap-4 my-5">
        <ul className="flex space-x-6">
          <HashLink smooth to="/personaku/contact" duration={500}>
            <ScrollToTop />
            <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">
              Kontak
            </li>
          </HashLink>
          <ScrollToTop />
          <HashLink smooth to="/personaku/faq" duration={500}>
            <li className="hover:text-[#1658F9] cursor-pointer transition duration-300">
              FAQ
            </li>
          </HashLink>
          <HashLink smooth to="/personaku/#demo" duration={500}>
            <li className="hover:text-[rgb(22,88,249)] cursor-pointer transition duration-300">
              Demo
            </li>
          </HashLink>
        </ul>
        <p className="text-center">
          2025 © Personaku. All rights reserved. Crafted by Personaku
        </p>
        <img src={Logo} className="w-[150px] h-auto mt-1" />
      </div>
    </div>
  );
};

export default Footer;
