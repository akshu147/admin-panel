"use"
import React from 'react'
import Head from '../componant/Head'
import { Link } from 'react-router-dom'

const Deshboard = () => {
  return (
    <>
    <section className='w-full h-[100vh] overflow-auto'>
        <div className="sticky top-0 z-[10] bg-[#313131] ">
        <Head />
        <div className='border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80 '>
          <span className='text-blue-500'>
            <Link to={'/'}>Home</Link>
          </span>{' '}
          / Dashboard
        </div>
        </div>
         

         <div className="p-[50px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque quam eum rerum dolore corporis animi, quasi quas illum cupiditate commodi vero aut similique earum incidunt architecto eos exercitationem neque quo. Enim tempore aspernatur, incidunt dicta, praesentium nemo, dolorem facere eaque ullam iusto reprehenderit nesciunt velit doloremque maxime quos suscipit. Ea, excepturi quod magnam unde saepe voluptatibus commodi voluptates autem delectus natus sed beatae iusto aut mollitia voluptas! Nihil repellendus nostrum, earum velit id dolorem suscipit dolorum quidem rerum dolor porro recusandae provident. Porro iste dolor consequuntur modi nostrum non repudiandae. Vero, a. Qui amet inventore consectetur, magni minima quaerat?</div>
         
      



    
      </section>
      

     
      
    </>
  )
}

export default Deshboard
