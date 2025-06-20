import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-400'>
      <nav className='flex justify-between items-center py-3'>
        <div className='text-3xl pl-3 font-serif text-white'>
            {/* app heading */}
        <h2>React Router App</h2>
        </div>
        <div className=' mr-6 space-x-4'>
         <NavLink to='/' className={({isActive})=>isActive?"text-black-500 text-lg font-bold border-2 border-white bg-white  rounded-sm px-1":"text-white hover:text-lg "} >Home</NavLink>
         <NavLink to='/about' className={({isActive})=>isActive?"text-black-500 text-lg font-bold border-2 border-white bg-white  rounded-sm px-1":"text-white hover:text-lg "}>About</NavLink>
         <NavLink to='/user' className={({isActive})=>isActive?"text-black-500 text-lg font-bold border-2 border-white bg-white  rounded-sm px-1":"text-white hover:text-lg "}>User</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
