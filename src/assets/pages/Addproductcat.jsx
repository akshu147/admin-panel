import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Head from '../componant/Head'
import axios from 'axios'
import Shoftmessagemodel from '../componant/Shoftmessagemodel'

const Addproductcat = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL //env file url
  const nav = useNavigate()
  const [shoftmodel, setshoftmodel] = useState('-100%')

  const addproductcat = async(e)=> {
    e.preventDefault()
    try {
      const data = e.target;
      const responce = await axios.post(`${apiUrl}/product/add-product-category`, data)
      if (responce.status == 200) {
        setshoftmodel('50px')
        setTimeout(() => {
          nav("/product/view-product-cat") // Redirect after 2 seconds
        }, 2000)
      }
    }
    catch(err) {
      console.log("Something went wrong!")
    }
  }

  return (
    <>
      <div
        style={{ right: shoftmodel }}
        className='bg-[#88bf882d] border w-[300px] text-center border-green-400 font-semibold p-4 text-white rounded-lg fixed bottom-10 right-10 z-20'
      >
        <Shoftmessagemodel message='Product category added' />
        <p>Redirecting...</p>
      </div>
    <section className='w-full h-[100vh] overflow-auto'>
        <div className="sticky top-0 z-[10] bg-[#313131] ">
        <Head />
        <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
          <span className='text-blue-500'>
            <Link to={'/'}>Home</Link>
          </span>{' '}
          / Add Product Category
        </div>
        </div>
      



        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              Add Product Category
            </header>
            <form action='' className='p-[20px]' onSubmit={addproductcat}>
              <p>Category Name</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Category Name'
                name='categoryName'
              />
              <p className='my-[15px]'>Category image</p>
              <input type="file" name='categoryImg' className='w-full border border-slate-500 rounded-[8px] focus:shadow-[1px_1px_5px_white] transition-all duration-200' />
              <p className='my-[15px]'>Category Description</p>
              <textarea placeholder='Description' name='categoryDec' className='p-[10px] rounded-[8px] border border-slate-500 w-[100%] sm:w-[70%] focus:shadow-[1px_1px_5px_white] transition-all duration-200'/>


              <div className='flex gap-[15px] my-[15px]'>
                <span>Status</span>
                <span>:</span>
                <span><input type="radio" value={"display"} name='status' className='focus:bg-blue-600 focus:outline-none' /></span>
                <span>Dispaly</span>
                <span><input type="radio" value={"hide"} name='status' className='focus:bg-blue-600 focus:outline-none' /></span>
                <span>Hide</span>
              </div>
              <button className='p-[8px_15px] rounded-[8px] bg-[#6261CC] cursor-pointer'>Add Category</button>
            </form>
          </div>
        </div>
       
      </section>

      
    </>
  )
}

export default Addproductcat
