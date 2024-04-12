import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from '../pages/Home/Home'


const LayoutRouter = () => {
  return (
    <div>
         <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
              </Routes>
         </BrowserRouter>
    </div>
  )
}

export default LayoutRouter