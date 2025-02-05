import React from 'react';
import stikes from '../assets/stikes.png'
import ukws from '../assets/ukws.png'
import umy from '../assets/umy.png'
import unimugo from '../assets/unimugo.png'


const Hero = () => {
  return (
    <div className="relative ;eft w-full max-w-[1440px] h-[591px] mx-auto px-10 flex flex-col justify-center">
      {/* Headline */}
      <h1 className="hidden md:flex w-full max-w-[649px] text-black text-5xl font-bold poppins-bold leading-[65px] ml-10">
        Membangun jalinan <br /> komunitas penelitian
      </h1>

      {/* Subheading */}
      <h2 className="hidden md:flex max-w-[1055px] mt-6 text-[#828282] text-2xl font-medium leading-[50px] ml-10">
        Selamat datang di jaringan komunitas akademik, tempat untuk mempererat<br />
        kerjasama dalam menjalankan Tri Dharma Perguruan Tinggi di seluruh Indonesia.
      </h2>

      {/* Logos Section */}
      <div className="w-[412px] h-[60px] left-[953px] top-[413px] absolute justify-start items-end gap-6 inline-flex">
        <img className="w-[85.47px] h-20" src={umy} alt="umy"/>
        <img className="w-20 h-20" src={unimugo} alt="unimugo"/>
        <img className="w-[94.49px] h-20" src={stikes} alt="stikes"/>
        <img className="w-20 h-20" src={ukws} alt="ukws"/>
        </div>

        {/* Mobile Headline */}
        <div className="md:hidden">
            <h1 className="w-full max-w-[649px] text-black text-5xl font-bold poppins-bold leading-[65px]">
            Membangun jalinan <br /> komunitas penelitian
            </h1>
            <h2 className="max-w-[1055px] mt-6 text-[#828282] text-lg font-medium leading-[50px]">
            Selamat datang di jaringan komunitas akademik, tempat untuk mempererat 
            kerjasama dalam menjalankan Tri Dharma Perguruan Tinggi di seluruh Indonesia.
            </h2>
            <div className="mt-10 flex items-center gap-6 ml-10">
                <img className="w-[85px] h-[80px]" src={umy} alt="umy" />
                <img className="w-[80px] h-[80px]" src={unimugo} alt="unimugo" />
                <img className="w-[94px] h-[80px]" src={stikes} alt="stikes" />
                <img className="w-[80px] h-[80px]" src={ukws} alt="ukws" />
            </div>
        </div>
    </div>
  );
};

export default Hero;
