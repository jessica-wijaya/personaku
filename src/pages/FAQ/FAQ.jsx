import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Button from "../../components/Button";

const faqData = [
  {
    question: "Apa itu Personaku?",
    answer: "Personaku adalah platform yang ...",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Anda dapat mendaftar dengan mengklik tombol 'Daftar' di halaman utama kami dan mengikuti langkah pendaftaran.",
  },
  {
    question: "Bagaimana cara menghubungi dukungan?",
    answer:
      "Jika Anda membutuhkan bantuan, silakan hubungi tim kami melalui contact form di web kami.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 text-gray-700">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div id="faq" className="w-full mt-[87px] p-4 mb-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="poppins-bold text-3xl md:text-3xl leading-snug text-center">
          FAQ
        </h1>
        <p className="mb-8 text-center">
          Berikut adalah beberapa pertanyaan yang sering diajukan.
        </p>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg mb-4">Tidak menemukan apa yang Anda cari?</p>
          <Button size="hero">
            <HashLink smooth to="/personaku/contact" duration={500}>
              Hubungi Kami
            </HashLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
