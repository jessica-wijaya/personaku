import React from 'react'
import Button from './Button';

const Contact = () => {
    return (
        <div className='w-full h-auto px-5 md:px-10 py-25'>
            {/* Use flex-row on medium screens and above, and stack in a column on mobile */}
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-8'>
                {/* Left Section: Contact form and description */}
                <div className='flex flex-col justify-center items-start min-h-100 mx-auto'>
                    <div className='w-[350px] lg:w-[600px]'>
                        <h1 className='poppins-bold text-[30px] text-left'>Get in touch!</h1>
                        <p>
                            Apabila Anda memiliki pertanyaan, memerlukan bantuan, atau ingin mendapatkan informasi lebih lanjut mengenai layanan dan produk kami,
                            jangan ragu untuk menghubungi kami.
                        </p>
                    </div>
                    <form className='max-w-[600px] w-full bg-white rounded-[8px]'>
                        <div className='input-box mt-[20px]'>
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="field w-full h-[50px] bg-transparent border-2 border-[#828282] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
                                placeholder='Enter your name'
                                required
                            />
                        </div>
                        <div className='input-box mt-[20px]'>
                            <label>Email Address</label>
                            <input
                                type="email"
                                className="field w-full h-[50px] bg-transparent border-2 border-[#828282] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
                                placeholder='Enter your email'
                                required
                            />
                        </div>
                        <div className='input-box mt-[20px]'>
                            <label>Your Inquiry</label>
                            <textarea
                                name=""
                                id=""
                                className="w-full h-[200px] resize-none bg-transparent border-2 border-[#828282] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
                                placeholder='Enter your message'
                                required
                            ></textarea>
                        </div>
                        <div className='flex justify-center mt-[25px]'>
                            <Button variant='primary' className='w-full'>Send Message</Button>
                        </div>
                    </form>
                </div>

                {/* Right Section: Contact Details */}
                <div className='flex flex-col items-center lg:items-end mt-10 mx-auto'>
                    <h2 className='poppins-bold text-[24px]'>Contact Details</h2>
                    <p className='mt-4'>Instagram: <span className='font-medium'>@yourinstagram</span></p>
                    <p className='mt-2'>Email: <span className='font-medium'>example@example.com</span></p>
                    <p className='mt-2'>Phone: <span className='font-medium'>+62 123 4567</span></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
