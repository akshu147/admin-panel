import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../componant/Head'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";




const Viewsize = () => {
  return (
    <>
      <section className='w-full'>
      <div className="sticky top-0 z-[10] bg-[#313131] ">
        <Head />
        <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
          <span className='text-blue-500'>
            <Link to={'/'}>Home</Link>
          </span>{' '}
          / View Size
        </div>
        </div>

        <div className='p-[20px]'>
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              View Size
            </header>
            <div className='p-[15px] border-[4px] w-full overflow-auto'>
              <table className='w-[900px] rounded-[10px] overflow-hidden'>
                <tbody>
                <tr className='border-b-[1px] border-slate-500'>
                  <th className='text-left p-[10px] font-bold text-[18px] flex gap-[10px] items-center'><span>Delete</span><input type="checkbox" /></th>
                  <th className='text-left p-[10px] font-bold text-[18px]'>S.NO</th>
                  <th className='text-left p-[10px] font-bold text-[18px]'>Size Name</th>
                  <th className='text-left p-[10px] font-bold text-[18px]'>Action</th>
                  <th className='text-left p-[10px] font-bold text-[18px]'>Status</th>

                </tr>
                <tr>
                  <td className='p-[10px]'><input type="checkbox" /></td>
                  <td className='p-[10px]'>1</td>
                  <td className='p-[10px]'>s</td>
                  <td className='p-[10px] flex gap-[3px] items-center'><i className='text-red-500'><RiDeleteBin6Fill /></i><span>/</span><i className='text-yellow-400'><MdEditSquare /></i></td>
                  <td className='p-[10px]'>Display</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
      </section>
    </>
  )
}

export default Viewsize
