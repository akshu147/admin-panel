import React from 'react'
import Head from '../componant/Head'
import { Link } from 'react-router-dom'
import { LuFacebook } from 'react-icons/lu'
import img from '../images/rdj.jpg'
import { FaInstagram } from 'react-icons/fa'
import { RiYoutubeLine } from 'react-icons/ri'
import { FaXTwitter } from 'react-icons/fa6'

const Profile = () => {
  return (
    <>
      <section className='w-full h-[100vh] overflow-auto'>
        <div className="sticky top-0 bg-[#313131] z-10">
          <Head />
          <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80'>
            <span className='text-blue-500'>
              <Link to={'/'}>Home</Link>
            </span>{' '}
            / Profile
          </div>
        </div>

        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              Prifile
            </header>
            <form action='' className='p-[20px]'>
              <p>Name</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Name'
                value={'akshay jangid'}
              />
              <p className='mb-[15px]'>Social Links</p>
              <div>
                <div className='flex items-center gap-[10px]'>
                  <i className='text-[20px]'>
                    <LuFacebook />
                  </i>
                  <input
                    className='block border w-[50%] my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                    type='url'
                    placeholder='Facebook'
                  />
                </div>
                <div className='flex items-center gap-[10px]'>
                  <i className='text-[20px]'>
                    <FaInstagram />
                  </i>
                  <input
                    className='block border w-[50%] my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                    type='url'
                    placeholder='Facebook'
                  />
                </div>
                <div className='flex items-center gap-[10px]'>
                  <i className='text-[20px]'>
                    <RiYoutubeLine />
                  </i>
                  <input
                    className='block border w-[50%] my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                    type='url'
                    placeholder='Facebook'
                  />
                </div>
                <div className='flex items-center gap-[10px]'>
                  <i className='text-[20px]'>
                    <FaXTwitter />
                  </i>
                  <input
                    className='block border w-[50%] my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                    type='url'
                    placeholder='Facebook'
                  />
                </div>
              </div>
              <p className='mb-[15px]'>Logo</p>
              <img width={'50px'} src={img} alt='' />
              <p className='my-[15px]'>Sub Logo</p>
              <img width={'50px'} src={img} alt='' />
              <p className='my-[15px]'>Password</p>
              <input
                className='block border w-[50%] my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='password'
                placeholder='password'
              />
              <button className='p-[8px_15px] rounded-[8px] bg-[#6261CC]'>
                Update
              </button>
            </form>
          </div>

          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden mt-[20px]'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              Email Authentication
            </header>
            <form action='' className='p-[20px]'>
              <p>Email</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Email'
                value={'sumsajangid2002@gmail.com'}
              />
              <p className='mb-[15px]'>OTP</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='OTP'
              />

              <button className='p-[8px_15px] rounded-[8px] bg-[#6261CC]'>
                Update Email
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
