import React from "react";
import icon from "../assets/whatsapp.png";

const Whatsapp = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white w-[93px] h-[222px] flex flex-col items-center rounded-[18px] z-200">
      <button className="w-full h-full cursor-pointer hover:underline flex flex-col items-center">
        <img src={icon} className="w-[54px] h-auto mt-4" alt="WhatsApp Icon" />
        <p className="rotate-270 mt-15 mb-4">WhatsApp</p>
      </button>
    </div>
  );
};

export default Whatsapp;
