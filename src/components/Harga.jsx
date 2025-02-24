import React from 'react';
import Button from './Button';
import FlipCard from './FlipCard';
import { AiOutlineCheckCircle } from "react-icons/ai";

const Harga = () => {
    return (
        <div id="harga" className="w-full pt-[75px] pb-[30px] px-4 bg-white">
            <div className="flex flex-col items-center justify-center">
                <p className="text-[#828282] text-lg">HARGA</p>
                <h2 className="text-[32px] text-black poppins-semibold">Pilih Paket Mu!</h2>
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-1.5">
                {/* Card 1 */}
                <FlipCard
                    frontContent={
                        <>
                            <h2 className="text-2xl item poppins-medium px-6 md:pt-[89px]">Demo</h2>
                            <p className="text-[15px] text-[#828282] poppins-medium px-6">Untuk pemula ambisius</p>
                            <p className="text-3xl poppins-medium mx-6 mt-[46px]">Rp 0</p>
                            <div className="flex justify-center">
                                <Button variant="secondary" className="lg:w-[300px] my-6 px-6 py-3">
                                    Mulai Sekarang
                                </Button>
                            </div>
                            <p className="mx-8 poppins-medium text-[#828282] text-[10px]">
                                Semua yang ada di basic, ditambah:
                            </p>
                            <div className="m-[13px] mx-8">
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 1</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 2</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 3</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 4</p>
                                </div>
                            </div>
                        </>
                    }
                    backContent={
                        <>
                            <h2 className="text-2xl item poppins-medium px-6 md:pt-[89px]">Demo</h2>
                            <p className="text-[15px] text-[#828282] poppins-medium px-6">
                                Paket Demo cocok untuk Anda yang ingin mencoba layanan kami tanpa biaya. Termasuk fitur dasar dan akses ke komunitas eksklusif.
                            </p>
                            <div className="m-[13px] mx-8">
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 1</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 2</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 3</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 4</p>
                                </div>
                            </div>
                        </>
                    }
                />

                {/* Card 2 */}
                <FlipCard
                    frontContent={
                        <>
                            <div className="relative w-full">
                                <div className="absolute top-4 right-4 z-100">
                                    <p className="w-[105px] h-[31px] bg-[#bfd2ff] rounded-xl text-xs text-[#1658f9] flex justify-center items-center">
                                        • Paling Laris
                                    </p>
                                </div>
                                <h2 className="text-2xl item poppins-medium px-6 md:pt-[89px]">Standard</h2>
                            </div>
                            <p className="text-[15px] text-[#828282] poppins-medium px-6">Untuk pemula ambisius</p>
                            <div className="flex items-center mt-[46px]">
                                <p className="text-3xl poppins-medium mx-6">Rp 50.000</p>
                                <p className="text-[10px] text-[#828282] poppins-medium">
                                    per user/month<br />billed yearly
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Button variant="primary" className="lg:w-[300px] my-6 px-6 py-3">
                                    Mulai Sekarang
                                </Button>
                            </div>
                            <p className="mx-8 poppins-medium text-[#828282] text-[10px]">
                                Semua yang ada di basic, ditambah:
                            </p>
                            <div className="m-[13px] mx-8 flex flex-col gap-2">
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 1</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 2</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 3</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 4</p>
                                </div>
                            </div>
                        </>
                    }
                    backContent={
                        <>
                            <h2 className="text-2xl item poppins-medium px-6 md:pt-[89px]">Standard</h2>
                            <p className="text-[15px] text-[#828282] poppins-medium px-6">
                                Paket Standard menawarkan fitur yang lebih lengkap dengan harga terjangkau. Ideal untuk bisnis kecil dan individu.
                            </p>
                            <div className="m-[13px] mx-8">
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 1</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 2</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 3</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 4</p>
                                </div>
                            </div>
                        </>
                    }
                />

                {/* Card 3 */}
                <FlipCard
                    frontContent={
                        <>
                            <h2 className="text-2xl item poppins-medium px-6 md:pt-[89px]">Mantab</h2>
                            <p className="text-[15px] text-[#828282] poppins-medium px-6">Untuk pemula ambisius</p>
                            <p className="text-3xl poppins-medium mx-6 mt-[46px]">Rp 70.000</p>
                            <div className="flex justify-center">
                                <Button variant="secondary" className="lg:w-[300px] my-6 px-6 py-3">
                                    Mulai Sekarang
                                </Button>
                            </div>
                            <p className="mx-8 poppins-medium text-[#828282] text-[10px]">
                                Semua yang ada di basic, ditambah:
                            </p>
                            <div className="m-[13px] mx-8 flex flex-col gap-2">
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 1</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 2</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 3</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 4</p>
                                </div>
                            </div>
                        </>
                    }
                    backContent={
                        <>
                            <h2 className="text-2xl item poppins-medium px-6 md:pt-[89px]">Mantab</h2>
                            <p className="text-[15px] text-[#828282] poppins-medium px-6">
                                Paket Mantab menyediakan fitur premium dan dukungan 24/7 untuk Anda yang membutuhkan kapasitas dan kinerja tinggi. Solusi terbaik untuk meningkatkan produktivitas.
                            </p>
                            <div className="m-[13px] mx-8">
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 1</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 2</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 3</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <AiOutlineCheckCircle className="w-6 h-6 text-[#bfd2ff]" />
                                    <p>Fitur 4</p>
                                </div>
                            </div>
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default Harga;
