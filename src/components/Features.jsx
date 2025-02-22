import React from 'react';
import Button from './Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";

const Features = () => {
  return (
    <div id="fitur" className="relative w-full md:h-[828px] bg-[#fafbfc]">
      {/* Header */}
      <div className="w-full px-5 md:pl-[128px] md:pr-[131px] pt-[50px] md:pt-[131px] text-center md:text-left">
        <h1 className="poppins-light text-[#828282] text-[18px] leading-normal">
          FITUR KAMI
        </h1>
        {/* Text */}
        <div className="mt-2 flex flex-col md:flex-row items-center justify-between">
          <h1 className="poppins-semibold text-[32px]">
            Membangun Kualitas <br /> Personal Branding.
          </h1>
          <RouterLink to="/personaku/contact">
            <Button variant="secondary" size="hero" className="mt-4 md:mt-0">
              Contact Us
            </Button>
          </RouterLink>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full py-4 px-4 md:px-[131px]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[62px] items-center">
          {/* Card 1 */}
          <div className="group relative w-full md:max-w-[350px] h-full md:h-[425px] bg-white rounded-[14px] border border-[#828282] shadow-xl hover:scale-105 duration-300 px-6 pb-6">
            <AiOutlineFund className='w-[45px] h-auto pt-5 group-hover:text-[#1658f9]' />
            <div className="flex flex-col gap-2.5 py-6 lg:py-20">
              <p className="poppins-medium text-[16px] group-hover:text-[#1658f9]">
                Template Menarik
              </p>
              <p className="text-[#828282] text-[12px] group-hover:text-[#1658f9]">
                Pilih dari berbagai template portofolio yang elegan dan responsif sesuai dengan gaya dan kebutuhan Anda.
              </p>
            </div>
            {/* Button positioned at the bottom (28px from bottom) on desktop */}
            <button className="w-[30px] lg:w-[45px] h-[30px] lg:h-[45px] rounded-full border border-[#828282] flex items-center justify-center cursor-pointer group-hover:text-[#1658f9] hover:bg-[#1658f9] hover:text-white duration-300
                               md:absolute md:bottom-[28px] md:left-[38px]">
              <AiOutlineArrowRight className="rotate-[315deg] text-current" />
            </button>
          </div>
          {/* Card 2 */}
          <div className="group relative w-full md:max-w-[350px] h-full md:h-[425px] bg-white rounded-[14px] border border-[#828282] shadow-xl hover:scale-105 duration-300 px-6 pb-6">
            <AiOutlineUsergroupAdd className='w-[45px] h-auto pt-5 group-hover:text-[#1658f9]' />
            <div className="flex flex-col gap-2.5 py-6 lg:py-20">
              <p className="poppins-medium text-[16px] group-hover:text-[#1658f9]">
                Template Menarik
              </p>
              <p className="text-[#828282] text-[12px] group-hover:text-[#1658f9]">
                Pilih dari berbagai template portofolio yang elegan dan responsif sesuai dengan gaya dan kebutuhan Anda.
              </p>
            </div>
            <button className="w-[30px] lg:w-[45px] h-[30px] lg:h-[45px] rounded-full border border-[#828282] flex items-center justify-center cursor-pointer group-hover:text-[#1658f9] hover:bg-[#1658f9] hover:text-white duration-300
                               md:absolute md:bottom-[28px] md:left-[38px]">
              <AiOutlineArrowRight className="rotate-[315deg] text-current" />
            </button>
          </div>
          {/* Card 3 */}
          <div className="group relative w-full md:max-w-[350px] h-full md:h-[425px] bg-white rounded-[14px] border border-[#828282] shadow-xl hover:scale-105 duration-300 px-6 pb-6">
            <AiOutlineGlobal className='w-[45px] h-auto pt-5 group-hover:text-[#1658f9]' />
            <div className="flex flex-col gap-2.5 py-6 lg:py-20">
              <p className="poppins-medium text-[16px] group-hover:text-[#1658f9]">
                Template Menarik
              </p>
              <p className="text-[#828282] text-[12px] group-hover:text-[#1658f9]">
                Pilih dari berbagai template portofolio yang elegan dan responsif sesuai dengan gaya dan kebutuhan Anda.
              </p>
            </div>
            <button className="w-[30px] lg:w-[45px] h-[30px] lg:h-[45px] rounded-full border border-[#828282] flex items-center justify-center cursor-pointer group-hover:text-[#1658f9] hover:bg-[#1658f9] hover:text-white duration-300
                               md:absolute md:bottom-[28px] md:left-[38px]">
              <AiOutlineArrowRight className="rotate-[315deg] text-current" />
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Features;
