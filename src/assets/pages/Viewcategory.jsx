import React from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdEditSquare } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Head from '../componant/Head'

const Viewcategory = () => {
  return (
    <>
      <section className='w-full'>
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
          <div className='text-white rounded-[10px] opacity-80 border  border-slate-500 overflow-hidden'>
            <header className='bg-slate-700 p-[10px_10px]  font-semibold'>
              View Category
            </header>
            <div className='p-[15px]'>
              <table className='w-full rounded-[10px] overflow-hidden'>
                <tbody>
                  <tr className='border-b-[1px] border-slate-500'>
                    <th className='text-left p-[10px] font-bold text-[18px] flex gap-[10px] items-center'>
                      <span>Delete</span>
                      <input type='checkbox' />
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
                  <tr className>
                    <td className='p-[10px]'>
                      <input type='checkbox' />
                    </td>
                    <td className='p-[10px]'>1</td>
                    <td className='p-[10px]'>s</td>
                    <td className='p-[10px]'>
                      <img
                        width={'30px'}
                        src='data:image/jpeg;base64,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'
                        alt=''
                      />
                    </td>
                    <td className='p-[10px]'>adfklasdfsdfasdfas</td>
                    <td className='p-[10px] flex gap-[3px] items-center'>
                      <i className='text-red-500'>
                        <RiDeleteBin6Fill />
                      </i>
                      <span>/</span>
                      <i className='text-yellow-400'>
                        <MdEditSquare />
                      </i>
                    </td>
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

export default Viewcategory
