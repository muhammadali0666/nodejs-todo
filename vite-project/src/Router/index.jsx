import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Active } from '../pages/Active'
import { Complete } from '../pages/Complete/complete'
import { Home } from '../pages/Home/home'

export const RoutWrapper = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/complete' element={<Complete/>}/>
        <Route path='/active' element={<Active/>} />
      </Routes>
    </div>
  )
}
