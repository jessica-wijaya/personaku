import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import KTP from "./KTP";

const Daftar = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    picture: "",
    namaDepan: "",
    namaBelakang: "",
    gelarDepan: "",
    gelarBelakang: "",
    jabatan: "",
    nidn: "",
    perguruan: "",
    fakultas: "",
    program: "",
    tipeGelar: "",
    id: "",
  });

  const [errors, setErrors] = useState({});

  const FormTitles = ["Personal Info", "Upload KTP", "Coba Demo"];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      );
    } else if (page === 1) {
      return (
        <KTP formData={formData} setFormData={setFormData} errors={errors} />
      );
    }
  };

  const handleNext = () => {
    if (page === 0) {
      let newErrors = {};

      if (!formData.namaDepan) newErrors.namaDepan = "Nama Depan is required";
      if (!formData.gelarBelakang)
        newErrors.gelarBelakang = "Gelar Belakang is required";
      if (!formData.jabatan)
        newErrors.jabatan = "Jabatan Fungsional is required";
      if (!formData.nidn) newErrors.nidn = "NIDN is required";
      if (!formData.perguruan)
        newErrors.perguruan = "Mengajar di Perguruan Tinggi is required";
      if (!formData.fakultas) newErrors.fakultas = "Fakultas is required";
      if (!formData.program) newErrors.program = "Program Studi is required";
      if (!formData.tipeGelar) newErrors.tipeGelar = "Gelar is required";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      } else {
        setErrors({});
      }
    } else if (page === 1) {
      let newErrors = {};
      if (!formData.id) {
        newErrors.id = "KTP is required";
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      } else {
        setErrors({});
      }
    }

    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleSubmit = () => {
    if (!formData.id) {
      setErrors({ id: "KTP is required" });
      return;
    }
    console.log("Submitted Data: ", formData);
    alert("Successfully submitted");
    setPage(page + 1);
  };

  const progress = `${(page / (FormTitles.length - 1)) * 100}%`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white mt-[87px] py-5">
      <div id="form-container" className="max-w-[800px] md:w-[800px] rounded-lg p-8 bg-white">
        {/* progress bar */}
        <div className="relative flex justify-between items-center mb-10">
          <div className="absolute w-full h-2 bg-[#D9D9D9] rounded-full top-5 transform -translate-y-1/2"></div>
          <div
            className="absolute h-2 bg-[#1658f9] rounded-full top-5 transform -translate-y-1/2 transition-all duration-300"
            style={{ width: progress }}
          ></div>
          {FormTitles.map((title, index) => (
            <div key={index} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                ${page >= index ? "border-[#1658f9]" : "border-[#D9D9D9]"} 
                ${
                  page === index
                    ? "bg-[#1658f9] text-white"
                    : "bg-white text-gray-500"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-xs mt-1 text-center">{title}</span>
            </div>
          ))}
        </div>
        <div id="header" className="text-center mb-4">
          <h1 className="text-2xl">{FormTitles[page]}</h1>
        </div>
        <div id="body">{PageDisplay()}</div>
        <div id="footer" className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="px-4 py-2 bg-[#bfd2ff] text-[#1658f9] rounded-[14px] hover:bg-[#E6EEFF] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Kembali
          </button>
          {page === 1 ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-[#1658f9] text-white rounded-[14px] hover:bg-[#0F4AD0] cursor-pointer"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[#1658f9] text-white rounded-[14px] hover:bg-[#0F4AD0] cursor-pointer"
            >
              Berikut
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Daftar;
