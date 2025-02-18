import React from 'react';
import Button from './Button';
import { AiOutlineCheckCircle } from "react-icons/ai";

const Harga = () => {
  return (
    <section className="relative w-full bg-[#fafbfc]">
      {/* Header */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[131px] pt-[50px] md:pt-[131px] text-center">
        <h1 className="poppins-light text-[#828282] text-[18px] leading-normal">
          HARGA
        </h1>
        <h1 className="poppins-semibold text-[32px]">
          Pilih Paket Mu!
        </h1>
      </div>

      {/* Cards */}
      <div className="w-full py-4 px-4 sm:px-6 md:px-8 lg:px-[131px]">
        {/* 
          We remove the fixed max width on medium screens so that iPads 
          can display a wider layout. The max width is only applied at xl (≥1280px).
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[62px] items-center xl:max-w-[1440px] xl:mx-auto">
          
          {/* Card 1 */}
          <div className="group relative w-full md:max-w-[350px] h-auto md:h-[425px] bg-white 
                          rounded-[14px] border border-[#828282] shadow-xl hover:scale-105 duration-300 
                          px-6 pb-6">
           
            
          </div>

          {/* Card 2 */}
          <div className="group relative w-full lg:max-w-[350px] h-auto lg:h-[575px] bg-white 
                          rounded-[14px] border border-[#828282] shadow-xl hover:scale-105 duration-300 
                          px-6 pb-6">
            
            <div className="absolute top-4 right-4">
              <div className="w-[105px] h-[31px] bg-[#bfd2ff] rounded-xl text-xs text-[#1658f9] 
                              flex justify-center items-center">
                • Paling Laris
              </div>
            </div>

            <div className="flex flex-col gap-2.5 py-6 md:py-[89px]">
              <p className="poppins-medium text-2xl group-hover:text-[#1658f9]">
                Standard
              </p>
              <p className="text-[#828282] text-[15px] group-hover:text-[#1658f9]">
                Untuk pemula ambisius
              </p>
              <div className="w-[303px] h-8 relative mt-[46px] flex flex-row gap-4">
                <p className="text-4xl">Rp 50.000</p>
                <p className="text-[10px] text-[#828282]">
                  per user/month <br />
                  billed yearly
                </p>
              </div>
              <Button variant="primary" size="pricing" className="mt-[30px]">
                Mulai Sekarang
              </Button>
              <div className="flex flex-col mt-[26px] gap-[13px]">
                <p className="text-[10px]">Semua yang ada di basic, ditambah:</p>
                <div className="flex gap-2.5">
                  <AiOutlineCheckCircle className="w-[24px] h-[24px] text-[#bfd2ff]" />
                  <p>Fitur 1</p>
                </div>
                <div className="flex gap-2.5">
                  <AiOutlineCheckCircle className="w-[24px] h-[24px] text-[#bfd2ff]" />
                  <p>Fitur 2</p>
                </div>
                <div className="flex gap-2.5">
                  <AiOutlineCheckCircle className="w-[24px] h-[24px] text-[#bfd2ff]" />
                  <p>Fitur 3</p>
                </div>
                <div className="flex gap-2.5">
                  <AiOutlineCheckCircle className="w-[24px] h-[24px] text-[#bfd2ff]" />
                  <p>Fitur 4</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative w-full md:max-w-[350px] h-auto md:h-[425px] bg-white 
                          rounded-[14px] border border-[#828282] shadow-xl hover:scale-105 duration-300 
                          px-6 pb-6">
            
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default Harga;
