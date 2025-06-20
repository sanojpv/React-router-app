import React from 'react'
import { Link } from 'react-router-dom'
import { PiUserListDuotone } from "react-icons/pi";
const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 via-blue-400 to-blue-100 min-h-screen">
     <div>
      <h1 className='font-bold text-6xl  flex justify-center items-center p-4 text-shadow-md text-shadow-white pt-10 lg:pt-30'>Welcome to React Router App</h1>
      <p className=' flex justify-center items-center text-white mt-4 px-3  text-3xl lg:pt-10'>This is a demonstration of React Router functionality.</p>
      <p className='flex justify-center text-gray-300'>click below ⇩</p>
     </div>
     
      <div className='flex justify-center items-center  mt-7'>
        <Link to='/user' ><button className='flex items-center justify-center gap-3 px-2 py-2  rounded -sm bg-violet-800 text-2xl text-white  md:bg-violet-800 text-2xl text-white  font-bold lg:w-50 lg:bg-violet-800 text-2xl text-white '><PiUserListDuotone />User Lists
          </button></Link>
      </div>
    </div>
  )
}

export default Home

