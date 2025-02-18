import React from 'react'
import Button from './Button'

const Ending = () => {
  return (
    <div className='w-full py-[100px] px-4 bg-white'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h2 className='text-[32px] text-black poppins-semibold'>Mulai buat portfolio yang memikat sekarang!</h2>
            <p className='text-[#828282] text-lg'>Bangun bersama <span className="text-[#1658f9]">Personaku</span> untuk membuat portfolio anda</p>
            <Button variant='primary' className='mt-5'>Langganan Sekarang!</Button>
       </div>
    </div>
  )
}

export default Ending
