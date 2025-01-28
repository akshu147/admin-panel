import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../componant/Head'

const Addsize = () => {
  return (
    <>
      <section className='w-full h-[100vh] overflow-auto'>
        <div className="sticky top-0 z-[10] bg-[#313131] ">
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
            <form action='' className='p-[20px]'>
              <p>Size Name</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Add Size'
              />
              <div className='flex gap-[15px] my-[15px]'>
                <span>Status</span>
                <span>:</span>
                <span><input type="radio" name='status' className='focus:bg-blue-600 focus:outline-none' /></span>
                <span>Dispaly</span>
                <span><input type="radio" name='status' className='focus:bg-blue-600 focus:outline-none' /></span>
                <span>Hide</span>
              </div>
              <button className='p-[8px_15px] rounded-[8px] bg-[#6261CC] cursor-pointer'>Add Size</button>
            </form>
          </div>
        </div>
       
      </section>
      
    </>
  )
}

export default Addsize
