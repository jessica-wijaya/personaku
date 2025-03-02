import * as React from 'react';

const Daftar = () => {


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-[87px]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl poppins-medium mb-6 text-center">Personal Information</h2>
        <form>
          <div className='mb-4'>
            <label className='block mb-2'>Nama Depan</label>
            <input 
            type="text" 
            id="namaDepan"
            placeholder='John'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Nama Belakang</label>
            <input 
            type="text" 
            id="namaBelakang"
            placeholder='Doe'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Gelar Depan</label>
            <input 
            type="text" 
            id="gelarDepan"
            placeholder='Doe'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Gelar Belakang</label>
            <input 
            type="text" 
            id="gelarBelakang"
            placeholder='Doe'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Jabatan Fungsional</label>
            <select 
            id="jabatan"
            placeholder='Doe'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px] text-[#28"
            >
              <option>Masukkan Jabatan Anda</option>
              <option>Test</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>NIDN</label>
            <input 
            type="text" 
            id="nidn"
            placeholder='Doe'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Mengajar di Perguruan Tinggi</label>
            <input 
            type="text" 
            id="perguruanTinggi"
            placeholder='Doe'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Fakultas</label>
            <input 
            type="text" 
            id="fakultas"
            placeholder='Doe'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Program Studi</label>
            <input 
            type="text" 
            id="program"
            placeholder='Doe'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Gelar</label>
            <select
            id="gelar"
            placeholder='Doe'
            className="field w-full h-[50px] bg-transparent border-1 border-[#D9D9D9] rounded-[6px] py-[15px] px-[15px] mt-[8px]"
            >
              <option value="">Pilih Gelar Anda</option>
              <option value="diploma">Diploma</option>
              <option value="s1">S1</option>
              <option value="s2">S2</option>
              <option value="s3">S3</option>
            
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="profilePicture" className="block text-gray-700 mb-2">
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              className="w-full"
            />
            
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Daftar;
