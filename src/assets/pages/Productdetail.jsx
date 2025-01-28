import React from 'react'
import Head from '../componant/Head'
import { Link } from 'react-router-dom'

const Productdetail = () => {
  return (
    <>
      <section className='w-full h-[100vh] overflow-auto'>
        <div className='sticky top-0 z-[10] bg-[#313131] '>
          <Head />
          <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
            <span className='text-blue-500'>
              <Link to={'/'}>Home</Link>
            </span>{' '}
            / Add Product
          </div>
        </div>

        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              Add Product
            </header>
            <form action='' className='p-[20px]'>
              <p>Product Name</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Product Name'
              />
              <p className='my-[15px]'>Product Description</p>
              <textarea
                placeholder='Description'
                className='p-[10px] rounded-[8px] border border-slate-500 w-[100%] sm:w-[70%] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
              />
              <p className='my-[15px]'>Short Description</p>
              <textarea
                placeholder='Description'
                className='p-[10px] rounded-[8px] border border-slate-500 w-[100%] sm:w-[70%] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
              />

              <p className='my-[15px]'>Product image</p>
              <input
                type='file'
                className='w-full border border-slate-500 rounded-[8px] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
              />
              <p className='my-[15px]'>Image Animation</p>
              <input
                type='file'
                className='w-full border border-slate-500 rounded-[8px] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
              />
              <p className='my-[15px]'>Image Gallary</p>
              <input
                type='file'
                multiple
                className='w-full border border-slate-500 rounded-[8px] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
              />

              <div className='flex justify-between gap-[20px] p-[10px] mt-[10px]'>
                <div className='w-[50%]'>
                  <p>Product Name</p>
                  <input
                    className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                    type='text'
                    placeholder='Product Name'
                  />
                </div>
                <div className='w-[50%]'>
                  <p>Product Name</p>
                  <input
                    className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                    type='text'
                    placeholder='Product Name'
                  />
                </div>
              </div>

              <p>--Select Parent Category--</p>
              <select
                name=''
                id=''
                className='border mt-[15px] w-full p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200 '
              >
                <option value='--Select Parent Category--'>
                  --Select Parent Category--
                </option>
                <option value="Mans's">Man's</option>
                <option value="Women's">Women's</option>
              </select>

              <p className='mt-[15px]'>--Select Product Category--</p>
              <select
                name=''
                id=''
                className='border mt-[15px] w-full p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200 '
              >
                <option className='' value='--Select Parent Category--'>
                  --Select Product Category--
                </option>
                <option value="Mans's">Tshirt</option>
                <option value="Women's">Shirt</option>
              </select>

              <p className='my-[15px]'>Category Description</p>
              <textarea
                placeholder='Description'
                className='p-[10px] rounded-[8px] border border-slate-500 w-[100%] sm:w-[70%] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
              />

              <div className='flex justify-between gap-[10px] p-[10px]'>
                <div className='w-[50%]'>
                  <p className='mt-[15px]'>--Select Product Category--</p>
                  <select
                    name=''
                    id=''
                    className='border mt-[15px] w-full p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200 '
                  >
                    <option value='--Select Parent Category--'>
                      --Select Parent Category--
                    </option>
                    <option value="Mans's">Man's</option>
                    <option value="Women's">Women's</option>
                  </select>
                </div>
                <div className='w-[50%]'>
                  <p className='mt-[15px]'>--Select Product Category--</p>
                  <select
                    name=''
                    id=''
                    className='border mt-[15px] w-full p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200 '
                  >
                    <option value='--Select Parent Category--'>
                      --Select Parent Category--
                    </option>
                    <option value="Mans's">Man's</option>
                    <option value="Women's">Women's</option>
                  </select>
                </div>
              </div>
              <div className='flex justify-between gap-[10px] p-[10px]'>
                <div className='w-[50%]'>
                  <p className='mt-[15px]'>--Select Product Category--</p>
                  <select
                    name=''
                    id=''
                    className='bg-transparent border mt-[15px] w-full p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200 '
                  >
                    <option value='--Select Parent Category--'>
                      --Select Parent Category--
                    </option>
                    <option value="Mans's">Man's</option>
                    <option value="Women's">Women's</option>
                  </select>
                </div>
                <div className='w-[50%]'>
                  <p className='mt-[15px]'>--Select Product Category--</p>
                  <select
                    name=''
                    id=''
                    className='border mt-[15px] w-full p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200 '
                  >
                    <option value='--Select Parent Category--'>
                      --Select Parent Category--
                    </option>
                    <option className='bg-transparent' value="Mans's">Man's</option>
                    <option value="Women's">Women's</option>
                  </select>
                </div>
              </div>

              <div className='flex gap-[15px] my-[15px]'>
                <span>Status</span>
                <span>:</span>
                <span>
                  <input
                    type='radio'
                    name='status'
                    className='focus:bg-blue-600 focus:outline-none'
                  />
                </span>
                <span>Dispaly</span>
                <span>
                  <input
                    type='radio'
                    name='status'
                    className='focus:bg-blue-600 focus:outline-none'
                  />
                </span>
                <span>Hide</span>
              </div>
              <button className='p-[8px_15px] rounded-[8px] bg-[#6261CC] cursor-pointer'>
                Add Product
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Productdetail
