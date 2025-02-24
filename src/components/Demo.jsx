import React from 'react'
import myVideo from '../assets/demovideo.mp4';

const Demo = () => {
    return (
        <div id="demo" className="w-full pt-[75px] pb-[30px] px-4 bg-white">
            <div className="max-w-[1175px] px-5 md:pl-[128px] md:pr-[131px] pt-[50px] md:pt-[131px] text-center lg:text-left">
                <h1 className="poppins-light text-[#828282] text-[18px]">
                    DEMO
                </h1>
                <h2 className="poppins-semibold text-[32px] mt-2">
                    Coba demo personaku sekarang!
                </h2>
            </div>

            <div className="max-w-[1175px] flex flex-col lg:flex-row gap-5 lg:gap-[164px] items-center mx-auto mt-[18px] px-4">
                {/* Steps */}
                <div className="text-left">
                    {/* Step One */}
                    <div className="relative w-[424px] flex flex-row items-center gap-[17px] bg-[#bfd2ff] rounded-[14px] border border-[#1658f9] p-4 mb-4">
                        <div className="relative flex justify-center items-center w-8 h-8 bg-[#1658f9] rounded-full flex-shrink-0">
                            <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                            <div className="absolute top-[125%] -translate-x-1/2 w-[2px] h-[70px] bg-[#1658f9]" />
                        </div>
                        <div className="flex flex-col">
                            <p>Step One</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                    </div>


                    {/* Step Two */}
                    <div className="relative w-[424px] flex flex-row items-center gap-[17px] p-4 mb-4">
                        <div className="flex justify-center items-center w-8 h-8 border border-[#1658f9] bg-white rounded-full flex-shrink-0">
                            <div className="w-3 h-3 bg-[#1658f9] rounded-full flex-shrink-0"></div>
                            <div className="absolute top-[75%] -translate-x-1/2 w-[2px] h-[70px] bg-[#d9d9d9]" />
                        </div>

                        <div className="flex flex-col">
                            <p>Step Two</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    {/* Step Three */}
                    <div className="relative w-[424px] flex flex-row items-center gap-[17px] p-4">
                        <div className="flex justify-center items-center w-8 h-8 border border-[#d9d9d9] bg-white rounded-full flex-shrink-0">
                            <div className="w-3 h-3 bg-[#d9d9d9] rounded-full flex-shrink-0"></div>
                        </div>
                        <div className="flex flex-col">
                            <p>Step Three</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>

                {/* Video */}
                <div className="text-right">
                    <video
                        src={myVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className=" w-300 lg:w-full h-full"
                    >
                        {/* Fallback text if browser doesn’t support the video */}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Demo
