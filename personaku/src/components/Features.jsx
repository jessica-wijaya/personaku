import React from 'react';
import Button from './Button';

const Features = () => {
  return (
    <section className="relative w-full h-[828px] bg-[#fafbfc]">
      {/* Header */}
      <div className="relative w-full h-[828px] bg-[#fafbfc] px-5 md:pl-[128px] md:pr-5 pt-[50px] md:pt-[131px] text-center md:text-left">
            <p className="poppins-light text-[#828282] text-[18px] leading-normal">
                FITUR KAMI
            </p>
            <h1 className="poppins-semibold text-[32px] mt-2">
                Membangun Kualitas <br /> Personal Branding.
            </h1>
        </div>
        {/* Secondary Button (absolutely positioned) */}
      <div className="absolute top-[15px] md:top-[187px] right-[131px]">
        <Button variant="secondary" size="md">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Features;
