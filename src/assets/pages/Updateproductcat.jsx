import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Head from '../componant/Head'
import Shoftmessagemodel from '../componant/Shoftmessagemodel'
import axios from 'axios'

const Updateproductcat = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL //env file url
  const nav = useNavigate()
  const [shoftmodel, setshoftmodel] = useState('-100%')
  const [categorydata, setcategorydata] = useState({})
  const param = useParams()

  const getcategorydetail = async()=>{
    try{
        const responce = await axios.get(`${apiUrl}/product/get-single-product-category/${param.id}`)
        setcategorydata(responce.data.data)
    }
    catch(err){
        console.log("Something went wrong")
        alert(err.message)
    }
  }
  useEffect(()=>{
    getcategorydetail()
  }, [])


  const updatecategory = async(e)=>{
    e.preventDefault()
    try{
        const responce = await axios.put(`${apiUrl}/product/update-product-category/${param.id}`, categorydata)
        setshoftmodel("50px")
        setTimeout(() => {
            nav("/product/view-product-cat")

        }, 2000);
        if(responce.status== 200){
        }
    }
    catch(err){
        console.log("Something went wrong!")
        console.log(err.message)
    }
  }

  

  return (
    <>
      <div
        style={{ right: shoftmodel }}
        className='bg-[#88bf882d] border w-[300px] text-center border-green-400 font-semibold p-4 text-white rounded-lg fixed bottom-10 right-10 z-20'
      >
        <Shoftmessagemodel message='Product category updated' />
        <p>Redirecting...</p>
      </div>
      <section className='w-full h-[100vh] overflow-auto'>
  <div className="sticky top-0 z-[10] bg-[#313131]">
    <Head />
    <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
      <span className='text-blue-500'>
        <Link to={'/'}>Home</Link>
      </span>{' '}
      / Update Product Category
    </div>
  </div>

  <div className='p-[20px]'>
    <div className='text-white rounded-[10px] opacity-80 border border-slate-500 overflow-hidden'>
      <header className='bg-slate-700 p-[10px_10px] font-semibold'>
        Update Product Category
      </header>

      {/* Form with onSubmit function */}
      <form 
        className='p-[20px]'
      >
        <p>Category Name</p>
        <input
          className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
          type='text'
          placeholder='Category Name'
          name='categoryName'
          value={categorydata.categoryName}
          onChange={(e) => setcategorydata({ ...categorydata, categoryName: e.target.value })}
          required
        />

        <p className='my-[15px]'>Category image</p>
        <input 
          type="file" 
          name='categoryImg' 
          className='w-full border border-slate-500 rounded-[8px] focus:shadow-[1px_1px_5px_white] transition-all duration-200' 
        />

        <p className='my-[15px]'>Category Description</p>
        <textarea 
          value={categorydata.categoryDec} 
          onChange={(e) => setcategorydata({ ...categorydata, categoryDec: e.target.value })} 
          placeholder='Description' 
          name='categoryDec' 
          className='p-[10px] rounded-[8px] border border-slate-500 w-[100%] sm:w-[70%] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
          required
        />

        {/* Status selection with checked attributes */}
        <div className='flex gap-[15px] my-[15px]'>
          <span>Status</span>
          <span>:</span>
          <span>
            <input 
              type="radio" 
              value="display" 
              name='status' 
              checked={categorydata.status === 'display'} 
              onChange={(e) => setcategorydata({ ...categorydata, status: e.target.value })}
              className='focus:bg-blue-600 focus:outline-none' 
            />
          </span>
          <span>Display</span>
          <span>
            <input 
              type="radio" 
              value="hide" 
              name='status' 
              checked={categorydata.status === 'hide'} 
              onChange={(e) => setcategorydata({ ...categorydata, status: e.target.value })}
              className='focus:bg-blue-600 focus:outline-none' 
            />
          </span>
          <span>Hide</span>
        </div>

        {/* Submit button */}
        <button type="submit" className='p-[8px_15px] rounded-[8px] bg-[#6261CC] cursor-pointer' onClick={updatecategory}>
          Update Category
        </button>
      </form>
    </div>
  </div>
</section>


      
    </>
  )
}

export default Updateproductcat
