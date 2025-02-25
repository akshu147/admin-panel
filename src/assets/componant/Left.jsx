'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../images/Stark_Industries_-_Infobox_Logo.png'
import { SiSpeedypage } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { HiOutlineColorSwatch } from 'react-icons/hi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { TECollapse } from 'tw-elements-react'
import { FaRegCircle } from 'react-icons/fa'
import { SiZend } from 'react-icons/si'
import { BiCategoryAlt } from 'react-icons/bi'
import { FaCartFlatbedSuitcase } from 'react-icons/fa6'
import { AiOutlineProduct } from 'react-icons/ai'
import { MdHistoryEdu } from 'react-icons/md'
import { MdOutlineBorderColor } from 'react-icons/md'
import { FaFileShield } from "react-icons/fa6";
import { MyContext } from '../../context/Context'


const Left = () => {
  const [activeElement, setActiveElement] = useState('')
  const [position, setposition] = useState("relative")
  

  const handleClick = value => {
    if (value === activeElement) {
      setActiveElement('')
    } else {
      setActiveElement(value)
    }
  }
  const contextdata = useContext(MyContext)
  useEffect(() => {
    const changewidth = () => {
      const leftwidth = window.innerWidth;
      if (leftwidth <= 400) {
        setposition("absolute");
      } else {
        setposition("sticky");
      }
    };
  
    // Run the function initially to set the correct position
    changewidth();
  
    // Add the event listener
    window.addEventListener("resize", changewidth);
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", changewidth);
    };
  }, []);
  
  

  const hideleft = ()=> {
  contextdata.setshow("-100%")
  }


 
 
 
  return (
    <section style={{width:contextdata.width, position:position, left:contextdata.show}} className=' bg-[#313131] z-20 border-r-[1px] border-slate-500 h-[100vh] border  overflow-auto left-section text-white transition-all duration-200'>
      {/* Logo Section */}
      <figure className='border-b-[1px] border-slate-500 p-[10px_20px] sticky top-0 bg-[#313131] z-10'>
        <img src={logo} alt='Logo' />
      </figure>
     
      {/* Navigation List */}
      <ul>
        <Link to={'/'}>
          <li onClick={hideleft} className='hover:bg-slate-700 rounded-[10px] font-semibold m-[7px] opacity-80 hover:opacity-100 p-[10px_20px] flex items-center gap-[10px]'>
            <SiSpeedypage />
            Dashboard
          </li>
        </Link>
        <Link to={'/color'}>
          <li onClick={hideleft}  className='hover:bg-slate-700 rounded-[10px] font-semibold m-[7px] opacity-80 hover:opacity-100 p-[10px_20px] flex items-center gap-[10px]'>
            <HiOutlineColorSwatch />
            Colors
          </li>
        </Link>
        <Link to={'/profile'}>
          <li onClick={hideleft} className='hover:bg-slate-700 rounded-[10px] font-semibold m-[7px] opacity-80 hover:opacity-100 p-[10px_20px] flex items-center gap-[10px]'>
            <MdOutlineManageAccounts />
            Profile
          </li>
        </Link>
      </ul>

      {/* Title */}
      <div className='text-center font-semibold opacity-80'>
        Ecommerce Components
      </div>

      <ul className='pt-[10px]'>
        <li
          id='accordionExample'
          className='m-[6px] rounded-[10px] hover:bg-[#34383A] opacity-80 hover:opacity-100'
        >
          <div>
            <h2 className='mb-0' id='headingOne'>
              <button
                className={`${
                  activeElement === 'element1' && `text-primary`
                } group relative flex w-full items-center px-5 py-2 text-left text-base transition`}
                type='button'
                onClick={() => handleClick('element1')}
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                <i className='pe-[10px]'>
                  <SiZend />
                </i>
                Size
                <span
                  className={`${
                    activeElement === 'element1'
                      ? `rotate-[-180deg]`
                      : `rotate-0`
                  } ml-auto shrink-0 fill-[#336dec] border border-slate-700 p-[3px] rounded-[8px] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1'
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse show={activeElement === 'element1'} className='!mt-0'>
              <div className='px-5 py-4'>
                <ul className='list-circle list-inside'>
                  <Link to={'size/add-size'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>Add Size</span>
                    </li>
                  </Link>
                  <Link to={'size/view-size'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px] mt-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>View Size</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </TECollapse>
          </div>
        </li>

        <li
          id='accordionExample'
          className='m-[6px] rounded-[10px] hover:bg-[#34383A] opacity-80 hover:opacity-100'
        >
          <div>
            <h2 className='mb-0' id='headingOne'>
              <button
                className={`${
                  activeElement === 'element2' && `text-primary`
                } group relative flex w-full items-center px-5 py-2 text-left text-base transition`}
                type='button'
                onClick={() => handleClick('element2')}
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                <i className='pe-[10px]'>
                  <BiCategoryAlt />
                </i>
                Parent Category
                <span
                  className={`${
                    activeElement === 'element2'
                      ? `rotate-[-180deg]`
                      : `rotate-0`
                  } ml-auto shrink-0 fill-[#336dec] border border-slate-700 p-[3px] rounded-[8px] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1'
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse show={activeElement === 'element2'} className='!mt-0'>
              <div className='px-5 py-4'>
                <ul className='list-circle list-inside'>
                  <Link to={'/parent/add-category'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>Add Category</span>
                    </li>
                  </Link>
                  <Link to={'/parent/view-category'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px] mt-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>View Category</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </TECollapse>
          </div>
        </li>

        <li
          id='accordionExample'
          className='m-[6px] rounded-[10px] hover:bg-[#34383A] opacity-80 hover:opacity-100'
        >
          <div>
            <h2 className='mb-0' id='headingOne'>
              <button
                className={`${
                  activeElement === 'element3' && `text-primary`
                } group relative flex w-full items-center px-5 py-2 text-left text-base transition`}
                type='button'
                onClick={() => handleClick('element3')}
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                <i className='pe-[10px]'>
                  <FaCartFlatbedSuitcase />
                </i>
                Product Category
                <span
                  className={`${
                    activeElement === 'element3'
                      ? `rotate-[-180deg]`
                      : `rotate-0`
                  } ml-auto shrink-0 fill-[#336dec] border border-slate-700 p-[3px] rounded-[8px] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1'
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse show={activeElement === 'element3'} className='!mt-0'>
              <div className='px-5 py-4'>
                <ul className='list-circle list-inside'>
                  <Link to={'/product/add-product-cat'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>Add Product Category</span>
                    </li>
                  </Link>
                  <Link to={'/product/view-product-cat'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px] mt-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>view Product Category</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </TECollapse>
          </div>
        </li>

        <li
          id='accordionExample'
          className='m-[6px] rounded-[10px] hover:bg-[#34383A] opacity-80 hover:opacity-100'
        >
          <div>
            <h2 className='mb-0' id='headingOne'>
              <button
                className={`${
                  activeElement === 'element3' && `text-primary`
                } group relative flex w-full items-center px-5 py-2 text-left text-base transition`}
                type='button'
                onClick={() => handleClick('element4')}
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                <i className='pe-[10px]'>
                  <AiOutlineProduct />
                </i>
                Products
                <span
                  className={`${
                    activeElement === 'element4'
                      ? `rotate-[-180deg]`
                      : `rotate-0`
                  } ml-auto shrink-0 fill-[#336dec] border border-slate-700 p-[3px] rounded-[8px] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1'
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse show={activeElement === 'element4'} className='!mt-0'>
              <div className='px-5 py-4'>
                <ul className='list-circle list-inside'>
                  <Link to={'/product/product-detail'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>Products Details</span>
                    </li>
                  </Link>
                  <Link to={'/product-items'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px] mt-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>Product Items</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </TECollapse>
          </div>
        </li>

        <li
          id='accordionExample'
          className='m-[6px] rounded-[10px] hover:bg-[#34383A] opacity-80 hover:opacity-100'
        >
          <div>
            <h2 className='mb-0' id='headingOne'>
              <button
                className={`${
                  activeElement === 'element3' && `text-primary`
                } group relative flex w-full items-center px-5 py-2 text-left text-base transition`}
                type='button'
                onClick={() => handleClick('element5')}
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                <i className='pe-[10px]'>
                  <MdHistoryEdu />
                </i>
                Story
                <span
                  className={`${
                    activeElement === 'element5'
                      ? `rotate-[-180deg]`
                      : `rotate-0`
                  } ml-auto shrink-0 fill-[#336dec] border border-slate-700 p-[3px] rounded-[8px] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1'
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse show={activeElement === 'element5'} className='!mt-0'>
              <div className='px-5 py-4'>
                <ul className='list-circle list-inside'>
                  <Link to={'/story/story-detail'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>Story Details</span>
                    </li>
                  </Link>
                  <Link to={'/story/story-view'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px] mt-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>Story View</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </TECollapse>
          </div>
        </li>

        <Link to={'/orders'}>
          <li
            id='accordionExample'
            className='m-[6px] rounded-[10px] hover:bg-[#34383A] opacity-80 hover:opacity-100 px-5 py-2 flex items-center gap-[10px]'
            onClick={hideleft}
          >
            <i>
              <MdOutlineBorderColor />
            </i>
            Orders
          </li>
        </Link>


        <li
          id='accordionExample'
          className='m-[6px] rounded-[10px] hover:bg-[#34383A] opacity-80 hover:opacity-100'
        >
          <div>
            <h2 className='mb-0' id='headingOne'>
              <button
                className={`${
                  activeElement === 'element3' && `text-primary`
                } group relative flex w-full items-center px-5 py-2 text-left text-base transition`}
                type='button'
                onClick={() => handleClick('element6')}
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                <i className='pe-[10px]'>
                  <MdHistoryEdu />
                </i>
                Slider
                <span
                  className={`${
                    activeElement === 'element6'
                      ? `rotate-[-180deg]`
                      : `rotate-0`
                  } ml-auto shrink-0 fill-[#336dec] border border-slate-700 p-[3px] rounded-[8px] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1'
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse show={activeElement === 'element6'} className='!mt-0'>
              <div className='px-5 py-4'>
                <ul className='list-circle list-inside'>
                  <Link to={'/slider/slider-detail'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>Slider Details</span>
                    </li>
                  </Link>
                  <Link to={'/slider/slider-view'}>
                    {' '}
                    <li onClick={hideleft} className='px-[10px] flex items-center gap-[10px] mt-[10px]'>
                      <i className='text-[5px]'>
                        <FaRegCircle />
                      </i>
                      <span>Slider View</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </TECollapse>
          </div>
        </li>

        <Link to={'terms$conditions'}>
          <li
            id='accordionExample'
            className='m-[6px] rounded-[10px] hover:bg-[#34383A] opacity-80 hover:opacity-100 px-5 py-2 flex items-center gap-[10px]'
            onClick={hideleft}
          >
            <i>
            <FaFileShield />
            </i>
            Terms $ Conditions
          </li>
        </Link>


      </ul>
    </section>
  )
}

export default Left
