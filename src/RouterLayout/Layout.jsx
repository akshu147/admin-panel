import React from 'react'
import Left from '../assets/componant/Left'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='flex'>
    <Left/>
    <Outlet/>
    </div>
     

     
    </>
  )
}

export default Layout
