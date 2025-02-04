import React, { useState } from 'react'
import Head from '../componant/Head'
import { Link } from 'react-router-dom'

import ColorPicker from 'react-pick-color'
import axios from 'axios'

const Color = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL //env file url
  const [color, setColor] = useState('#fff')
  const addColor = async e => {
    e.preventDefault()
    const colordata = {
      colorcode:e.target.color.value
    }
    try {
      const responce = await axios.post(
        `${apiUrl}/color/add-color`,
        colordata
      )
      if (responce.status === 200) console.log(responce)
    } catch (err) {
      console.log(err)
    }
  }
  
  
 

  return (
    <>
      <section className='w-full h-[100vh]'>
        <div className='sticky top-0 bg-[#313131] z-10'>
          <Head />
          <div className='border-b-[1px]  sticky top-0 text-white p-[10px_20px] opacity-80'>
            <span className='text-blue-500'>
              <Link to={'/'}>Home</Link>
            </span>{' '}
            / Colors
          </div>
        </div>

        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              Add colors
            </header>
            <form action='' className='p-[20px]' onSubmit={addColor}>
              <p>Color Name</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Add Colors'
                value={color}
                name='color'
              />
              <p className='mb-[15px]'>Color picker</p>
              <ColorPicker
                color={color}
                onChange={color => setColor(color.hex)}
              />

              <button className='p-[8px_15px] mt-[15px] rounded-[8px] bg-[#6261CC] cursor-pointer'>
                Select Color
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Color
