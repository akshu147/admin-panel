import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Head from '../componant/Head'
import axios from 'axios'
import Shoftmessagemodel from '../componant/Shoftmessagemodel'

const Addsize = e => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL //env file url
  const [shoftmodel, setshoftmodel] = useState('-100%')

  const nav = useNavigate()
  const addsize = async e => {
    e.preventDefault()
    const data = {
      size: e.target.size.value,
      status: e.target.status.value
    }
    // console.log(data)
    try {
      const responce = await axios.post(`${apiUrl}/size/add-size`, data)
      if (responce.status == 200) {
        setshoftmodel('50px')
        setTimeout(() => {
          nav("/size/view-size"); // Redirect after 2 seconds
        }, 2000);
      }
    } catch (err) {
      if (err.status == 400) alert('Size already exists!')
    }
  }

  return (
    <>
      <div
        style={{ right: shoftmodel }}
        className='bg-[#88bf882d] border w-[300px] text-center border-green-400 font-semibold p-4 text-white rounded-lg fixed top-10 right-10 z-20'
      >
        <Shoftmessagemodel message='Size Added' />
        <p>Redirecting...</p>
        
      </div>
      <section className='w-full h-[100vh] overflow-auto'>
        <div className='sticky top-0 z-[10] bg-[#313131] '>
          <Head />
          <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
            <span className='text-blue-500'>
              <Link to={'/'}>Home</Link>
            </span>{' '}
            / Dashboard
          </div>
        </div>

        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              Add Size
            </header>
            <form action='' className='p-[20px]' onSubmit={addsize}>
              <p>Size Name</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Add Size'
                name='size'
              />
              <div className='flex gap-[15px] my-[15px]'>
                <span>Status</span>
                <span>:</span>
                <span>
                  <input
                    type='radio'
                    name='status'
                    value='display'
                    className='focus:bg-blue-600 focus:outline-none'
                  />
                </span>
                <span>Dispaly</span>
                <span>
                  <input
                    type='radio'
                    name='status'
                    value='hide'
                    className='focus:bg-blue-600 focus:outline-none'
                  />
                </span>
                <span>Hide</span>
              </div>
              <button className='p-[8px_15px] rounded-[8px] bg-[#6261CC] cursor-pointer'>
                Add Size
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Addsize
