import React, { useState } from 'react';
import Button from './Button';
const Masuk = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    alert('Login successful!');
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white mt-[87px] py-5 px-4'>
      <div className='w-full max-w-md '>
        <h1 className='text-2xl text-center mb-6'>Masuk</h1>
        <form onSubmit={handleLogin} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1658f9]'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1658f9]'
            />
          </div>
          <Button
            type='submit'
            className='w-full bg-[#1658f9] text-white py-2 rounded-md hover:bg-[#0F4AD0] transition duration-200'
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Masuk;
