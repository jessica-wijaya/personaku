import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import networking from '../assets/networking.png'

const Manfaat = () => {
    return (
        <section className="w-full md:h-[775px]">
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left Side */}
                <div className="w-full md:w-1/2 px-5 md:pl-[128px] pt-[50px] md:pt-[51px] text-center md:text-left">
                    <h1 className="poppins-light text-[#828282] text-[18px] leading-normal">
                        MANFAAT KAMI
                    </h1>
                    <h2 className="poppins-semibold text-[32px] mt-2">
                        Manfaat komunitas akademik
                    </h2>
                    <h2 className="poppins-semibold text-[32px] text-[#1658f9]">
                        tanpa batas
                    </h2>
                    {/* Rectangles */}
                    <div className="w-full md:w-[556px] grid grid-cols-1 md:grid-cols-2 md:gap-[45px] gap-y-[20px] items-center mt-8">
                        <div className="w-full md:w-[271px] h-44 bg-white rounded-[14px] border-2 border-[#d9d9d9] flex flex-col gap-2.5 py-[21px] px-6 mx-auto">
                            <AiOutlineMail size={48} className="rounded-[18px] text-[#1658f9]" />
                            <p className="poppins-regular text-lg">Jaringan Dosen</p>
                            <p className="poppins-regular text-sm">
                                We use a customized application to be specifically designed
                            </p>
                        </div>
                        <div className="w-full md:w-[271px] h-44 bg-white rounded-[14px] border-2 border-[#d9d9d9] flex flex-col gap-2.5 py-[21px] px-6 mx-auto">
                            <AiOutlineMail size={48} className="rounded-[18px] text-[#1658f9]" />
                            <p className="poppins-regular text-lg">Jaringan Dosen</p>
                            <p className="poppins-regular text-sm">
                                We use a customized application to be specifically designed
                            </p>
                        </div>
                        <div className="w-full md:w-[271px] h-44 bg-white rounded-[14px] border-2 border-[#d9d9d9] flex flex-col gap-2.5 py-[21px] px-6 mx-auto">
                            <AiOutlineMail size={48} className="rounded-[18px] text-[#1658f9]" />
                            <p className="poppins-regular text-lg">Jaringan Dosen</p>
                            <p className="poppins-regular text-sm">
                                We use a customized application to be specifically designed
                            </p>
                        </div>
                        <div className="w-full md:w-[271px] h-44 bg-white rounded-[14px] border-2 border-[#d9d9d9] flex flex-col gap-2.5 py-[21px] px-6 mx-auto">
                            <AiOutlineMail size={48} className="rounded-[18px] text-[#1658f9]" />
                            <p className="poppins-regular text-lg">Jaringan Dosen</p>
                            <p className="poppins-regular text-sm">
                                We use a customized application to be specifically designed
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="hidden [@media(min-width:1100px)]:flex w-full [@media(min-width:1200px)]:w-1/2 justify-end [@media(min-width:1200px)]:mt-[185px] [@media(min-width:1200px)]:mr-[60px]">
                    <img src={networking} alt="Networking" className="w-[554px] h-auto" />
                </div>
            </div>
        </section>
    )
}

export default Manfaat
