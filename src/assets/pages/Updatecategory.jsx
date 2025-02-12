import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Head from '../componant/Head'
import axios from 'axios'
import Shoftmessagemodel from '../componant/Shoftmessagemodel'

const Updatecategory = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL //env file url
  const [shoftmodel, setshoftmodel] = useState('-100%')
  const [categories, setcategories] = useState({})
  const nav = useNavigate()
  const updateid = useParams()
  const getcategory = async(e)=> {
    try {
        const response = await axios.get(`${apiUrl}/category/get-category/${updateid.id}`)
        setcategories(response.data.data)

    }
    catch(err) {
        console.log("somethilng wetnet sadfas", err)
    }
  }
  useEffect(()=>{
    getcategory()
  },[])
  console.log(categories)

  const  updatecategory = async(e)=> {
    e.preventDefault()
    try {
        const responce = await axios.put(`${apiUrl}/category/update-category/${updateid.id}`,categories)
        if (responce.status == 200) {
            setshoftmodel('50px')
            setTimeout(() => {
              nav("/parent/view-category") // Redirect after 2 seconds
            }, 2000)
          }
    }
    catch(err){
        console.log(err)
    }
  }


  return (
    <>
      <div
        style={{ right: shoftmodel }}
        className='bg-[#88bf882d] border w-[300px] text-center border-green-400 font-semibold p-4 text-white rounded-lg fixed top-10 right-10 z-20'
      >
        <Shoftmessagemodel message='Category Updated' />
        <p>Redirecting...</p>
      </div>
      <section className='w-full h-[100vh] overflow-auto'>
        <div className='sticky top-0 z-[10] bg-[#313131] '>
          <Head />
          <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
            <span className='text-blue-500'>
              <Link to={'/'}>Home</Link>
            </span>{' '}
            / Update Category
          </div>
        </div>
        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              Update Category
            </header>
            <form action='' className='p-[20px]'>
              <p>Category Name</p>
              <input
                className='block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200'
                type='text'
                placeholder='Add Category'
                name='categoryname'
                value={categories.categoryname}
                onChange={(e) => setcategories({ ...categories, categoryname: e.target.value })}
              />
              <p className='my-[15px]'>Category image</p>
              <input
                type='file'
                name='categoryimg'
                className='w-full border border-slate-500 rounded-[8px] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
              />
              <p className='my-[15px]'>Category Description</p>
              <textarea
                name='description'
                placeholder='Description'
                value={categories.description}
                onChange={(e) => setcategories({ ...categories, description: e.target.value })}
                className='p-[10px] rounded-[8px] border border-slate-500 w-[100%] sm:w-[70%] focus:shadow-[1px_1px_5px_white] transition-all duration-200'
              />

              <div className='flex gap-[15px] my-[15px]'>
                <span>Status</span>
                <span>:</span>
                <span>
                  <input
                    type='radio'
                    value={'display'}
                    name='status'
                    className='focus:bg-blue-600 focus:outline-none'
                    checked={categories.status === 'display'}
                    onChange={(e)=>{setcategories({...categories, status:e.target.value})}}
                  />
                </span>
                <span>Dispaly</span>
                <span>
                  <input
                    type='radio'
                    value={'hide'}
                    name='status'
                    checked={categories.status ==="hide"}
                    onChange={(e)=>{setcategories({...categories, status:e.target.value})}}
                    className='focus:bg-blue-600 focus:outline-none'
                  />
                </span>
                <span>Hide</span>
              </div>
              <button className='p-[8px_15px] rounded-[8px] bg-[#6261CC] cursor-pointer' onClick={updatecategory}>
                Update Category
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Updatecategory
