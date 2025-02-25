import React, { useEffect, useState } from 'react'
import Head from '../componant/Head'
import { Link, useNavigate } from 'react-router-dom'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdEditSquare } from 'react-icons/md'
import axios from 'axios'
import Swal from 'sweetalert2'


const Viewproductcat = () => {
  const nav = useNavigate()
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [allcategory, setallcategory] = useState([])
  const [imagepath, setimagepath] = useState("")
  const [selectedid, setselectedid] = useState([])

  const showcategory = async()=> {
    try {
      const responce = await axios.get(`${apiUrl}/product/get-product-category`)
      console.log(responce)
      setallcategory(responce.data.data)
      setimagepath(responce.data.imagepath)
    }
    catch(err){
    console.log("Something went wront!")
    }
  }
  useEffect(()=> {
    showcategory()
  }, [])
  
  const deleteonecat = async(id)=> {
    try {
      const responce = await axios.delete(`${apiUrl}/product/delete-product-category/${id}`)
        if (responce.status == 200)
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully deleted size',
                showConfirmButton: false,
                timer: 1500
              })
      showcategory()
    }
    catch(err) {
      alert("something went wrong")
    }
  }


  //multidelete option
  const oldids = allcategory.map((value)=> value._id)

  const handleselect = (e)=>{
    const {value, checked} = e.target;
    if(checked){
      setselectedid([...selectedid, value])
    }
    else{
      setselectedid(selectedid.filter(item => item !== value))
    }
  } 

  const selectall = (e)=>{
    const {value, checked} = e.target 
    if(checked){
      setselectedid(oldids)
    }
    else{
      setselectedid([])
    }

  }

  const deleteall = async()=> {
    try {
      const responce = await axios.post(`${apiUrl}/product/delete-all-product-category`,selectedid)
      console.log(responce)
      showcategory()
    }
    catch(err) {
      console.log("i love yo")
    }
  }




  return (
    <>
      <section className='w-full h-[100vh] overflow-auto'>
        <div className='sticky top-0 z-[10] bg-[#313131] '>
          <Head />
          <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
            <span className='text-blue-500'>
              <Link to={'/'}>Home</Link>
            </span>{' '}
            / View Product Category
          </div>
        </div>

        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              View Product Category
            </header>
            <div className='p-[15px]'>
              <table className='w-full rounded-[10px] overflow-hidden'>
                <tbody>
                  <tr className='border-b-[1px] border-slate-500'>
                    <th className='text-left p-[10px] font-bold text-[18px] flex gap-[10px] items-center'>
                      <span>Delete</span>
                      <input type='checkbox' onClick={selectall} checked={oldids.length === selectedid.length} />
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      S.NO
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Category Name
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Image
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Description
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Action
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Status
                    </th>
                  </tr>
                  {
                    allcategory.map((value, index)=> (
                      <tr className>
                      <td className='p-[10px]'>
                        <input type='checkbox' value={value._id} checked={selectedid.includes(value._id)} onChange={handleselect} />
                      </td>
                      <td className='p-[10px]'>{index}</td>
                      <td className='p-[10px]'>{value.categoryName}</td>
                      <td className='p-[10px]'>
                        <img
                          width={'30px'}
                          src={`${imagepath}/${value.categoryImg}`}  alt=''
                        />
                      </td>
                      <td className='p-[10px]'>{value.categoryDec}</td>
                      <td className='p-[10px] flex gap-[3px] items-center'>
                        <i className='text-red-500 cursor-pointer' onClick={()=>deleteonecat(value._id)}>
                          <RiDeleteBin6Fill />
                        </i>
                        <span>/</span>
                        <i className='text-yellow-400 cursor-pointer' onClick={()=> {nav(`/update-product-cat/${value._id}`)}}>
                          <MdEditSquare />
                        </i>
                      </td>
                      <td className='p-[10px]'>{value.status}</td>
                    </tr>
                    ))
                  }
                
                </tbody>
              </table>
              {selectedid.length > 0 && (
                <button
                  onClick={deleteall}
                  className='mt-4 p-2 bg-red-500 text-white rounded-md cursor-pointer'
                >
                  Delete Selected ({selectedid.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Viewproductcat
