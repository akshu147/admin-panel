import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Head from '../componant/Head'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdEditSquare } from 'react-icons/md'
import Swal from 'sweetalert2'
import axios from 'axios'

const Viewsize = () => {
  const nav = useNavigate()
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [allsize, setallsize] = useState([])
  const [selectedsize, setselectedsize] = useState([])
  const [selectAll, setSelectAll] = useState(false) // State for "Select All"

  const getsize = async () => {
    try {
      const response = await axios.get(`${apiUrl}/size/show-size`)
      setallsize(response.data.data ?? [])
    } catch (error) {
      console.error('Error fetching sizes:', error)
    }
  }

  useEffect(() => {
    getsize()
  }, [selectedsize])

  // Handle Individual Checkbox
  const handleCheckboxChange = e => {
    const { value, checked } = e.target
    if (checked) {
      setselectedsize(prev => [...prev, value])
    } else {
      setselectedsize(prev => prev.filter(item => item !== value))
    }
  }

  // Handle "Select All" Checkbox
  const handleSelectAll = e => {
    const checked = e.target.checked
    setSelectAll(checked)
    if (checked) {
      setselectedsize(allsize.map(item => item._id)) // Select all
    } else {
      setselectedsize([]) // Deselect all
    }
  }

  const deleteone = async (id) => {
    try {
      const responce = await axios.delete(`${apiUrl}/size/deletesize-one/${id}`)
      if (responce.status == 200)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully deleted size',
          showConfirmButton: false,
          timer: 1500
        })
      getsize()
    } catch (err) {
      console.log('something wentwrong', err)
    }
  }

  const deletemultiple = async () => {
    try {
      const responce = await axios.delete(`${apiUrl}/size/delete-allsize`, {
        data: selectedsize
      })
      console.log(responce)
    } catch (err) {
      if (err.status == 404)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sorry There is no sizes availeble'
        })
    }
    getsize()
    setselectedsize("")

  }
  console.log(selectedsize)

  return (
    <section className='w-full h-[100vh] overflow-auto'>
      <div className='sticky top-0 z-[10] bg-[#313131]'>
        <Head />
        <div className='border-b border-slate-600 text-white p-[10px_20px] opacity-80'>
          <span className='text-blue-500'>
            <Link to='/'>Home</Link>
          </span>{' '}
          / View Size
        </div>
      </div>

      <div className='p-5'>
        <div className='text-white rounded-2xl opacity-80 border border-slate-500 overflow-hidden'>
          <header className='bg-slate-700 p-3 font-semibold'>View Size</header>
          <div className='p-4 w-full overflow-auto'>
            <table className='w-[900px] rounded-lg overflow-hidden'>
              <thead>
                <tr className='border-b border-slate-500'>
                  <th className='text-left p-3 font-bold text-lg flex gap-2 items-center'>
                
                    <input
                      type='checkbox'
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className='text-left p-3 font-bold text-lg'>S.NO</th>
                  <th className='text-left p-3 font-bold text-lg'>Size Name</th>
                  <th className='text-left p-3 font-bold text-lg'>Action</th>
                  <th className='text-left p-3 font-bold text-lg'>Status</th>
                </tr>
              </thead>
              <tbody>
                {allsize.length > 0 ? (
                  allsize.map((value, index) => (
                    <tr key={value._id} className='border-b border-slate-500'>
                      <td className='p-3'>
                        <input
                          type='checkbox'
                          name='deleteid'
                          value={value._id}
                          checked={selectedsize.includes(value._id)}
                          onChange={handleCheckboxChange}
                        />
                      </td>
                      <td className='p-3'>{index + 1}</td>
                      <td className='p-3'>{value.size}</td>
                      <td className='p-3 flex gap-3 items-center'>
                        <i
                          className='text-red-500 cursor-pointer'
                          onClick={() => deleteone(value._id)}
                        >
                          <RiDeleteBin6Fill />
                        </i>
                        <span>/</span>
                        <i
                          className='text-yellow-400 cursor-pointer'
                          onClick={() => nav(`/size/update-size/${value._id}`)}
                        >
                          <MdEditSquare />
                        </i>
                      </td>
                      <td className='p-3'>{value.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='5' className='p-3 text-center text-gray-400'>
                      No sizes available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {selectedsize.length > 0 && (
              <button
                onClick={deletemultiple}
                className='mt-4 p-2 bg-red-500 text-white rounded-md cursor-pointer'
              >
                Delete Selected ({selectedsize.length})
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Viewsize
