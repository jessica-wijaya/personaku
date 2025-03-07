import React from "react";
import UploadProfile from "./UploadProfile";

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div id="personalinfo-container" className="my-4">
      <UploadProfile formData={formData} setFormData={setFormData} />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <label className="block mb-2 text-sm">
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
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Nama Belakang</label>
          <input
            type="text"
            id="namaBelakang"
            value={formData.namaBelakang}
            onChange={(event) =>
              setFormData({ ...formData, namaBelakang: event.target.value })
            }
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Gelar Depan</label>
          <input
            type="text"
            id="gelarDepan"
            value={formData.gelarDepan}
            onChange={(event) =>
              setFormData({ ...formData, gelarDepan: event.target.value })
            }
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">
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
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">
            Jabatan Fungsional <span className="text-red-500">*</span>
          </label>
          <select
            id="jabatan"
            required
            value={formData.jabatan}
            onChange={(event) =>
              setFormData({ ...formData, jabatan: event.target.value })
            }
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          >
            <option value="">Masukkan Jabatan Anda</option>
            <option value="test">Test</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">
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
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">
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
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">
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
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">
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
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">
            Gelar <span className="text-red-500">*</span>
          </label>
          <select
            id="tipeGelar"
            required
            value={formData.tipeGelar}
            onChange={(event) =>
              setFormData({ ...formData, tipeGelar: event.target.value })
            }
            className="field w-full h-[60px] text-sm bg-transparent border border-[#D9D9D9] rounded-[6px] py-[10px] px-[15px] mt-[8px]"
          >
            <option value="">Pilih Gelar Anda</option>
            <option value="diploma">Diploma</option>
            <option value="s1">S1</option>
            <option value="s2">S2</option>
            <option value="s3">S3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
