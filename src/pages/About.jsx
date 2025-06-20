import React from 'react'
import { Link } from 'react-router-dom'
import { HiHome } from "react-icons/hi2";
import { PiUserListDuotone } from "react-icons/pi";
const About = () => {
  return (
    <div className='bg-gradient-to-b from-blue-800 via-blue-400 to-blue-100 min-h-screen'>
    
    <div className='text-3xl font-bold flex justify-center text-white p-4'>
      <p>About This App</p>
    </div>
    <div className='border-5 rounded-sm border-white mx-5 shadow-lg shadow-slate-950'>

    <h2 className='text-3xl font-bold p-7'>  Purpose & Overview</h2>
     <p className='px-7 font-bold mb-4'>
This React application serves as a comprehensive demonstration of React Router capabilities, showcasing modern web development practices and routing patterns. It demonstrates how to build a multi-page single-page application (SPA) with seamless navigation and dynamic content loading.

The application includes essential features such as parameterized routes, active navigation highlighting, and responsive design principles to create an optimal user experience across different devices.
     </p>
    <div className='flex justify-center gap-4 p-6'>
       <Link to='/user' ><button className='flex items-center justify-center gap-3 px-2 py-2  rounded -sm bg-violet-800 text-2xl text-white  md:bg-violet-800 text-2xl text-white  font-bold lg:w-50 lg:bg-violet-800 text-2xl text-white'><PiUserListDuotone />User Lists
          </button></Link>
        <Link to="/"><button className='flex items-center justify-center gap-3 px-2 py-2  rounded-sm bg-violet-800 text-2xl text-white  md:bg-violet-800 md:text-2xl  font-bold lg:w-50 lg:bg-violet-800 '><HiHome />
        Home</button></Link>
    </div>
    </div>
    </div>
  )
}

export default About
