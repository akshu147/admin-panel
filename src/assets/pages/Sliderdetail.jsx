import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Head from '../componant/Head';
import Shoftmessagemodel from '../componant/Shoftmessagemodel';

const Sliderdetail = () => {
  const [shoftmodel, setshoftmodel] = useState('-100%');
  const nav = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL; // env file URL

  const addslider = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const response = await axios.post(`${apiUrl}/slider/add-slider`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      console.log(response);
      if (response.status === 200) {
        setshoftmodel('50px');
        setTimeout(() => {
          nav('/slider/slider-view'); // Redirect after 2 seconds
        }, 2000);
      }
    } catch (err) {
      console.log('Failed to add slider:', err);
    }
  };

  return (
    <>
      <div
        style={{ right: shoftmodel }}
        className='bg-[#88bf882d] border w-[300px] text-center border-green-400 font-semibold p-4 text-white rounded-lg fixed bottom-[20px] right-10 z-20'
      >
        <Shoftmessagemodel message='Slider Added' />
        <p>Redirecting...</p>
      </div>
      <section className='w-full h-[100vh] overflow-auto'>
        <div className='sticky top-0 z-[10] bg-[#313131] '>
          <Head />
          <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
            <span className='text-blue-500'>
              <Link to={'/'}>Home</Link>
            </span> / Slider Detail
          </div>
        </div>

        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px] font-semibold'>
              Add Slider
            </header>
            <form className='p-[20px]' onSubmit={addslider}>
              <p>Slider Name</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Slider Name'
                name='slidername'
                required
              />
              <p>Heading</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Heading'
                name='heading'
                required
              />
              <p>Sub Heading</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Sub Heading'
                name='subheading'
                required
              />
              <p className='my-[15px]'>Slider image</p>
              <input
                type='file'
                name='sliderimg'
                className='w-full border border-slate-500 rounded-[8px] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                required
              />

              <div className='flex gap-[15px] my-[15px]'>
                <span>Status</span>
                <span>:</span>
                <label className='ml-2'>
                  <input type='radio' value='display' name='status' required /> Display
                </label>
                <label className='ml-2'>
                  <input type='radio' value='hide' name='status' required /> Hide
                </label>
              </div>
              <button className='p-[8px_15px] rounded-[8px] bg-[#6261CC] cursor-pointer text-white'>
                Add Slider
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sliderdetail;
