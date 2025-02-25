import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdEditSquare } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import axios, { all } from 'axios'
import Swal from 'sweetalert2'
import Head from '../componant/Head'

const Viewcategory = () => {
  const [allcategory, setallcategory] = useState([])
  const [imageurl, setimageurl] = useState('')
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [selectedid, setselectedid] = useState([])
  const nav = useNavigate()

  const showcategory = async () => {
    try {
      const responce = await axios.get(`${apiUrl}/category/getcategory`)
      setallcategory(responce?.data?.data || [])
      setimageurl(responce?.data?.pathname || '')
    } catch (err) {
      console.error('Error fetching categories:', err)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while fetching categories!'
      })
    }
  }

  useEffect(() => {
    showcategory()
  }, [])

  console.log(allcategory)

  // ✅ Delete with Confirmation
  const singledelete = async id => {
    try {
      const responce = await axios.delete(
        `${apiUrl}/category/delete-category/${id}`
      )
      if (responce.status == 200)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully deleted size',
          showConfirmButton: false,
          timer: 1500
        })
        showcategory()

    } catch (err) {
      console.log('something went wrong')
    }

   
  }

  const hendlesingleselectd = e => {
    const { checked, value } = e.target
    if (checked) {
      setselectedid([...selectedid, value])
    } else {
      setselectedid(selectedid.filter(id => id !== value))
    }
    console.log(checked, value)
  }

  const selectall = e => {
    const { checked } = e.target
    const allid = allcategory.map(value => value._id)

    if (checked) {
      setselectedid(allid)
    } else {
      setselectedid([])
    }
    return allid
  }
  const allid = allcategory.map(value => value._id)

  const deleteall = async () => {
    try {
      const responce = await axios.post(
        `${apiUrl}/category/delete-allcategory`,
        selectedid
      )
      if (responce.status == 200)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully deleted category!',
          showConfirmButton: false,
          timer: 1500
        })
      showcategory()
      setselectedid([])
    } catch (err) {
      console.log('something went wrong')
    }
  }

  return (
    <>
      <section className='w-full overflow-auto h-[100vh]'>
        <div className='sticky top-0 z-[10] bg-[#313131] '>
          <Head />
          <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
            <span className='text-blue-500'>
              <Link to={'/'}>Home</Link>
            </span>{' '}
            / View Category
          </div>
        </div>

        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px] font-semibold'>
              View Category
            </header>
            <div className='p-[15px]'>
              <table className='w-full rounded-[10px] overflow-hidden'>
                <thead>
                  <tr className='border-b-[1px] border-slate-500'>
                    <th className='text-center p-[10px] font-bold text-[18px]'>
                      <input
                        type='checkbox'
                        onChange={selectall}
                        checked={allid.length === selectedid.length}
                      />
                    </th>
                    <th className='text-center p-[10px] font-bold text-[18px]'>
                      S.NO
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Category Name
                    </th>
                    <th className='text-center p-[10px] font-bold text-[18px]'>
                      Image
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Description
                    </th>
                    <th className='text-center p-[10px] font-bold text-[18px]'>
                      Action
                    </th>
                    <th className='text-center p-[10px] font-bold text-[18px]'>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allcategory.length === 0 ? (
                    <tr>
                      <td
                        colSpan='7'
                        className='opacity-50 text-center p-[10px]'
                      >
                        No Category Available
                      </td>
                    </tr>
                  ) : (
                    allcategory.map((value, index) => (
                      <tr
                        key={value._id}
                        className='border-b-[1px] border-slate-500'
                      >
                        <td className='text-center p-[10px]'>
                          <input
                            onChange={hendlesingleselectd}
                            checked={selectedid.includes(value._id)}
                            type='checkbox'
                            value={value._id}
                          />
                        </td>
                        <td className='text-center p-[10px]'>{index + 1}</td>
                        <td className='p-[10px]'>{value.categoryname}</td>
                        <td className='text-center p-[10px]'>
                          <img
                            width={'30px'}
                            src={
                              imageurl
                                ? `${imageurl}/${value.categoryimg}`
                                : value.categoryimg
                            }
                            alt=''
                          />
                        </td>
                        <td className='p-[10px]'>{value.description}</td>
                        <td className='text-center p-[10px] flex justify-center gap-[5px]'>
                          <i
                            className='text-red-500 cursor-pointer'
                            onClick={() => singledelete(value._id)}
                          >
                            <RiDeleteBin6Fill />
                          </i>
                          <span>/</span>
                          <i
                            className='text-yellow-400 cursor-pointer'
                            onClick={() =>
                              nav(`/category/update-category/${value._id}`)
                            }
                          >
                            <MdEditSquare />
                          </i>
                        </td>
                        <td className='text-center p-[10px]'>{value.status}</td>
                      </tr>
                    ))
                  )}
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

export default Viewcategory
