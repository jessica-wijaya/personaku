import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => setIsFlipped(!isFlipped);

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front Side */}
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-[14px] hover:scale-105 duration-300 h-[450px] lg:h-[550px] border border-[#DEE8FF]">
                <div className="flex-grow">
                    {frontContent}
                </div>
                <button
                    onClick={handleFlip}
                    className="text-[#1658F9] cursor-pointer hover:underline"
                >
                    Lihat detail spesifikasi →
                </button>
            </div>

            {/* Back Side */}
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-[14px] hover:scale-105 duration-300 h-[450px] lg:h-[550px] border border-[#DEE8FF]">
                <div className="flex-grow">
                    {backContent}
                </div>
                <button
                    onClick={handleFlip}
                    className="text-[#1658F9] cursor-pointer hover:underline"
                >
                    Kembali
                </button>
            </div>
        </ReactCardFlip>
    );
};

export default FlipCard;
