import React, { useContext, useEffect, useState } from 'react'
import { BsMenuButtonFill } from "react-icons/bs";
import rdj from "../images/rdj.jpg"
import { MyContext } from '../../context/Context';
import { MdOutlinePrecisionManufacturing } from "react-icons/md";






const Head = () => {
  const contextdata = useContext(MyContext)
  const {width, setwidth} = contextdata
  const changewidth = ()=> {
    if(width === 300) {
      setwidth(0)
    }
    else{
      setwidth(300)
    }
  }
  const [winwidth, setwinwidth ] = useState(0)
  useEffect(()=> {
      const getwidth = ()=> {
        const winwidth = window.innerWidth
        setwinwidth(winwidth)
      }
      getwidth()
      window.addEventListener("resize", getwidth)
  }, [])
 

  return (
    <>
    <header className='border-b-[1px] border-slate-600 text-white opacity-80 p-[8px_20px] flex justify-between'>
      <div className='flex items-center text-[19] gap-[15px]'>
        {
          (winwidth <= 400) ?    <i className='cursor-pointer border border-slate-500 rounded-[8px] p-[6px]' onClick={()=> {contextdata.setshow("0%")}}><MdOutlinePrecisionManufacturing /></i>
          :
          <i className='cursor-pointer border border-slate-500 rounded-[8px] p-[6px]' onClick={changewidth}><BsMenuButtonFill /></i>
     

        }
       
        <span className='font-semibold'>Dashboard</span>
      </div>
      <img className='rounded-[40%] cursor-pointer' width={"40px"} src={rdj} alt="" />
    </header>
   
      
    </>
  )
}

export default Head
