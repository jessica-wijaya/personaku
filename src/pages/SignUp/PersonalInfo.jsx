import React from "react";
import UploadProfile from "./UploadProfile";

const PersonalInfo = ({ formData, setFormData, errors }) => {
  const getBorderClass = (fieldName) =>
    errors && errors[fieldName] ? "border-red-500" : "border-[#D9D9D9]";

  return (
    <div id="personalinfo-container" className="my-4">
      <UploadProfile formData={formData} setFormData={setFormData} />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Nama Depan */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            Nama Depan <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="namaDepan"
            required
            value={formData.namaDepan}
            onChange={(event) =>
              setFormData({ ...formData, namaDepan: event.target.value })
            }
            className={`field w-full h-[50px] bg-transparent border ${getBorderClass(
              "namaDepan"
            )} rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[12px] md:text-[16px]`}
          />
          {errors?.namaDepan && (
            <p className="text-red-500 text-xs mt-1">{errors.namaDepan}</p>
          )}
        </div>
        {/* Nama Belakang */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            Nama Belakang
          </label>
          <input
            type="text"
            id="namaBelakang"
            value={formData.namaBelakang}
            onChange={(event) =>
              setFormData({ ...formData, namaBelakang: event.target.value })
            }
            className="field w-full h-[50px] bg-transparent border border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[11px] md:text-[16px]"
          />
        </div>
        {/* Gelar Depan */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            Gelar Depan
          </label>
          <input
            type="text"
            id="gelarDepan"
            value={formData.gelarDepan}
            onChange={(event) =>
              setFormData({ ...formData, gelarDepan: event.target.value })
            }
            className="field w-full h-[50px] bg-transparent border border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[11px] md:text-[16px]"
          />
        </div>
        {/* Gelar Belakang */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            Gelar Belakang <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="gelarBelakang"
            required
            value={formData.gelarBelakang}
            onChange={(event) =>
              setFormData({ ...formData, gelarBelakang: event.target.value })
            }
            className={`field w-full h-[50px] bg-transparent border ${getBorderClass(
              "gelarBelakang"
            )} rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[11px] md:text-[16px]`}
          />
          {errors?.gelarBelakang && (
            <p className="text-red-500 text-xs mt-1">{errors.gelarBelakang}</p>
          )}
        </div>
        {/* Jabatan Fungsional */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            Jabatan Fungsional <span className="text-red-500">*</span>
          </label>
          <select
            id="jabatan"
            required
            value={formData.jabatan}
            onChange={(event) =>
              setFormData({ ...formData, jabatan: event.target.value })
            }
            className={`field w-full h-[50px] bg-transparent border ${getBorderClass(
              "jabatan"
            )} rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[12px] text-[11px] md:text-[16px]`}
          >
            <option value="">Jabatan Anda</option>
            <option value="test">Test</option>
          </select>
          {errors?.jabatan && (
            <p className="text-red-500 text-xs mt-1">{errors.jabatan}</p>
          )}
        </div>
        {/* NIDN */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            NIDN <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nidn"
            required
            value={formData.nidn}
            onChange={(event) =>
              setFormData({ ...formData, nidn: event.target.value })
            }
            className={`field w-full h-[50px] bg-transparent border ${getBorderClass(
              "nidn"
            )} rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[11px] md:text-[16px]`}
          />
          {errors?.nidn && (
            <p className="text-red-500 text-xs mt-1">{errors.nidn}</p>
          )}
        </div>
        {/* Mengajar di Perguruan Tinggi */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            Mengajar di Perguruan Tinggi <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="perguruan"
            required
            value={formData.perguruan}
            onChange={(event) =>
              setFormData({ ...formData, perguruan: event.target.value })
            }
            className={`field w-full h-[50px] bg-transparent border ${getBorderClass(
              "perguruan"
            )} rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[11px] md:text-[16px]`}
          />
          {errors?.perguruan && (
            <p className="text-red-500 text-xs mt-1">{errors.perguruan}</p>
          )}
        </div>
        {/* Fakultas */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            Fakultas <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fakultas"
            required
            value={formData.fakultas}
            onChange={(event) =>
              setFormData({ ...formData, fakultas: event.target.value })
            }
            className={`field w-full h-[50px] bg-transparent border ${getBorderClass(
              "fakultas"
            )} rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[11px] md:text-[16px]`}
          />
          {errors?.fakultas && (
            <p className="text-red-500 text-xs mt-1">{errors.fakultas}</p>
          )}
        </div>
        {/* Program Studi */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            Program Studi <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="program"
            required
            value={formData.program}
            onChange={(event) =>
              setFormData({ ...formData, program: event.target.value })
            }
            className={`field w-full h-[50px] bg-transparent border ${getBorderClass(
              "program"
            )} rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[11px] md:text-[16px]`}
          />
          {errors?.program && (
            <p className="text-red-500 text-xs mt-1">{errors.program}</p>
          )}
        </div>
        {/* Gelar (Tipe Gelar) */}
        <div className="mb-4">
          <label className="block mb-2 text-[11px] md:text-[16px]">
            Gelar <span className="text-red-500">*</span>
          </label>
          <select
            id="tipeGelar"
            required
            value={formData.tipeGelar}
            onChange={(event) =>
              setFormData({ ...formData, tipeGelar: event.target.value })
            }
            className={`field w-full h-[50px] bg-transparent border ${getBorderClass(
              "tipeGelar"
            )} text-[12px] rounded-[6px] py-[15px] px-[15px] mt-[8px]`}
          >
            <option value="">Gelar Anda</option>
            <option value="diploma">Diploma</option>
            <option value="s1">S1</option>
            <option value="s2">S2</option>
            <option value="s3">S3</option>
          </select>
          {errors?.tipeGelar && (
            <p className="text-red-500 text-xs mt-1">{errors.tipeGelar}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
