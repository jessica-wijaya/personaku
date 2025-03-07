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

  const FormTitles = ["Personal Info", "Upload KTP"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <KTP formData={formData} setFormData={setFormData} />;
    }
  };

  const handleNext = () => {
    // Validate required fields on page 0
    if (page === 0) {
      if (
        !formData.namaDepan ||
        !formData.gelarBelakang ||
        !formData.jabatan ||
        !formData.nidn ||
        !formData.perguruan ||
        !formData.fakultas ||
        !formData.program ||
        !formData.tipeGelar
      ) {
        alert("Please fill out all required fields.");
        return;
      }
    }
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleSubmit = () => {
    if (!formData.id) {
      alert("Please upload your KTP image.");
      return;
    }
    console.log("Submitted Data: ", formData);
    alert("Successfully submitted");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 mt-[87px] py-5">
      <div
        id="form-container"
        className="w-[600px] shadow-lg rounded-lg p-8 bg-white"
      >
        <div id="header" className="text-center">
          <h1 className="text-2xl">{FormTitles[page]}</h1>
        </div>
        <div id="body">{PageDisplay()}</div>
        <div id="footer" className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="px-4 py-2 bg-[#bfd2ff] text-[#1658f9] rounded-[14px] hover:bg-[#E6EEFF] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          {page === FormTitles.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!formData.id}
              className="px-4 py-2 bg-[#1658f9] text-white rounded-[14px] hover:bg-[#0F4AD0] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[#1658f9] text-white rounded-[14px] hover:bg-[#0F4AD0] cursor-pointer"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Daftar;
