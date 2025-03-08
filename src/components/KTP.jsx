import React, { useState } from "react";
import ktpsample from "../assets/ktp.png";
import pasporsample from "../assets/paspor.png";

const KTP = ({ formData, setFormData, errors }) => {
  const [file, setFile] = useState(null);

  function handleChange(e) {
    if (e.target.files && e.target.files[0]) {
      const fileName = e.target.files[0].name.toLowerCase();
      const allowedExtensions = [".jpg", ".jpeg", ".png"];
      const isAllowed = allowedExtensions.some((ext) => fileName.endsWith(ext));
      if (!isAllowed) {
        alert("Only JPG, JPEG, and PNG files are allowed.");
        return;
      }
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      setFile(fileUrl);
      // Update parent's state with the new file URL under the key "id"
      setFormData({ ...formData, id: fileUrl });
    }
  }

  // Helper to return a border class depending on whether there's an error.
  const getBorderClass = () =>
    errors && errors.id ? "border-red-500" : "border-[#D9D9D9]";

  return (
    <div id="ktp-container" className="my-4">
      <div className={`flex flex-col items-center justify-center p-4`}>
        <h2 className="mb-4">Silahkan upload KTP/Paspor anda</h2>
        {!formData.id && (
          <div className="flex items-center max-w-[500px]">
            <img
              src={ktpsample}
              className={`mb-4 w-[500px] h-auto border ${getBorderClass()}`}
              alt="KTP Sample"
            />
          </div>
        )}
        {formData.id && (
          <img
            src={formData.id}
            className={`mb-4 w-[500px] h-auto border ${getBorderClass("id")}`}
            alt="Uploaded KTP"
          />
        )}
        <label className="cursor-pointer inline-block text-center px-4 py-2 bg-[#1658f9] text-white rounded-[14px]">
          Upload KTP
          <input
            type="file"
            onChange={handleChange}
            className="hidden"
            required
          />
        </label>
        {errors?.id && <p className="text-red-500 text-xs mt-2">{errors.id}</p>}
      </div>
    </div>
  );
};

export default KTP;
