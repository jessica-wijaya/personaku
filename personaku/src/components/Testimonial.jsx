import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6';
import { testimonialData } from './TestimonialData';
import Button from './Button';

const Testimonial = () => {

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const breakpointsResponsive = {
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '@1.50': {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }

    const handleSwiperEvents = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    }

    return (
        <div id="testimoni" className='w-full h-200 space-y-2 relative lg:px-24 md:px-16 sm:px-7 px-4 flex items-center justify-center flex-col my-[75px]'>
            <p className='text-[#828282] text-lg'>Testimonial</p>
            <h2 className="text-[32px] text-black poppins-semibold">
                Dipercaya oleh 1000+ dosen
            </h2>
            <div className="w-full flex items-center justify-center">

                {/* Custom buttons */}
                <div className="flex items-center gap-6">
                    <button className={`custom-prev text-white bg-[#1658F9] hover:bg-blue-700 p-2 rounded-full z-10 ${isBeginning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={isBeginning}
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    <button className={`custom-next text-white bg-[#1658F9] hover:bg-blue-700 p-2 rounded-full z-10 ${isEnd ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={isEnd}
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>

            </div>

            <div className="w-full py-2">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    breakpoints={breakpointsResponsive}
                    onSlideChange={(swiper) => handleSwiperEvents(swiper)}
                    onInit={(swiper) => handleSwiperEvents(swiper)}
                    modules={[Navigation]}
                    className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
                >
                    {testimonialData.map((item) => (
                        <SwiperSlide key={item.id}>

                            <div className="w-full h-[200px] p-6 space-y-10 group rounded-xl border border-[#828282]">
                                <p className="text-black text-base font-normal">
                                    {item.desc}
                                </p>

                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src={item.img} alt={item.name} className="w-12 h-12 object-center object-cover rounded-full border" />

                                        <div className="space-y-1">
                                            <p className=" text-base font-semibold">
                                                {item.name}
                                            </p>
                                            <p className=" text-xs font-normal italic">
                                                {item.role} of Company {item.company}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 bg-yellow-500/5 rounded-full px-2 py-1">
                                        <FaStar className='text-yellow-600 text-sm' />
                                        <p className="text-xs text-yellow-600">
                                            {item.rating}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <h2 className='text-center text-[32px] text-black poppins-semibold mt-20'>Mulai buat portfolio yang memikat sekarang!</h2>
            <p className='text-[#828282] text-lg text-center'>Bangun bersama <span className="text-[#1658f9]">Personaku</span> untuk membuat portfolio anda</p>
            <Button variant='primary' className='mt-5'>Langganan Sekarang!</Button>
        </div>
    )
}

export default Testimonial