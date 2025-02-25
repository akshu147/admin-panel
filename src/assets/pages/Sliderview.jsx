import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdEditSquare } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Head from '../componant/Head'
import axios from 'axios'
import Swal from 'sweetalert2'

const Sliderview = () => {
  const nav = useNavigate()
  const apiUrl = import.meta.env.VITE_API_BASE_URL //env file url
  const [allslider, setallslider] = useState([])
  const [imgpath, setimgpath] = useState('')
  const [selectedslider, setselectedslider] = useState([])

  const showslider = async () => {
    try {
      const responce = await axios.get(`${apiUrl}/slider/get-slider`)
      setallslider(responce.data.data)
      setimgpath(responce.data.path)
    } catch (err) {
      console.log('Something went wrong!', err.message)
    }
  }
  useEffect(() => {
    showslider()
  }, [])

  const deleteone = async id => {
    try {
      const responce = await axios.delete(
        `${apiUrl}/slider/delete-slider/${id}`
      )
      if (responce.status == 200)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully deleted slider',
          showConfirmButton: false,
          timer: 1500
        })
      showslider()
    } catch (err) {
      console.log('something wentwrong')
    }
  }

  const hendleselect = e => {
    const { checked, value } = e.target
    if (checked) {
      setselectedslider([...selectedslider, value])
    } else {
      setselectedslider(selectedslider.filter(item => item !== value))
    }
  }

  const allid = allslider.map(value => value._id)

  const allselect = e => {
    const { checked } = e.target
    if (checked) {
      setselectedslider(allid)
    } else {
      setselectedslider([])
    }
  }

  const deletemultiple = async () => {
    try {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!'
        }).then(async result => {
          if (result.isConfirmed) {
            try {
              const responce = await axios.post(
                `${apiUrl}/slider/delete-allslider`,
                selectedslider
              )

              if (responce.status === 200) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Successfully deleted category!',
                  showConfirmButton: false,
                  timer: 1500
                })
                showslider()
                setselectedslider([])
              }
            } catch (err) {
              console.error('Error deleting category:', err)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while deleting category!'
              })
            }
          }
        })
      
    } catch (err) {
      console.log('something went wrong')
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
            / View Slider
          </div>
        </div>

        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              Out Story's
            </header>
            <div className='p-[15px]'>
              <table className='w-full rounded-[10px] overflow-hidden'>
                <tbody>
                  <tr className='border-b-[1px] border-slate-500'>
                    <th className='text-left p-[10px] font-bold text-[18px] flex gap-[10px] items-center'>
                      <span>Delete</span>
                      <input
                        type='checkbox'
                        onChange={allselect}
                        checked={allid.length == selectedslider.length}
                      />
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      S.NO
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Slider Name
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Heading
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Sub Heading
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Slider Image
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Action
                    </th>
                    <th className='text-left p-[10px] font-bold text-[18px]'>
                      Status
                    </th>
                  </tr>
                  {allslider.map((value, index) => (
                    <tr className>
                      <td className='p-[10px]'>
                        <input
                          type='checkbox'
                          onChange={hendleselect}
                          value={value._id}
                          checked={selectedslider.includes(value._id)}
                        />
                      </td>
                      <td className='p-[10px]'>{index}</td>
                      <td className='p-[10px]'>{value.slidername}</td>
                      <td className='p-[10px]'>{value.heading}</td>
                      <td className='p-[10px]'>{value.subheading}</td>
                      <td className='p-[10px]'>
                        <img
                          width={'30px'}
                          src={`${imgpath}/${value.sliderimg}`}
                          alt=''
                        />
                      </td>
                      <td className='p-[10px] flex gap-[3px] items-center'>
                        <i className='text-red-500'>
                          <RiDeleteBin6Fill
                            className='cursor-pointer'
                            onClick={() => deleteone(value._id)}
                          />
                        </i>
                        <span>/</span>
                        <i className='text-yellow-400 cursor-pointer' onClick={()=>{nav(`/slider/update-detail/${value._id}`)}}>
                          <MdEditSquare />
                        </i>
                      </td>
                      <td className='p-[10px]'>{value.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {selectedslider.length > 0 && (
                <button
                  onClick={deletemultiple}
                  className='mt-4 p-2 bg-red-500 text-white rounded-md cursor-pointer'
                >
                  Delete Selected ({selectedslider.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sliderview
