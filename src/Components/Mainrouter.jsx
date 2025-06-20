import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/UserLists'
import Userdetails from '../pages/Userdetails'
const Mainrouter = () => {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/user/:id' element={<Userdetails/>}/>
      </Routes>
    </div>
  )
}

export default Mainrouter;
