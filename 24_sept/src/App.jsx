import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Reviews from './Pages/Reviews'
import Specifications from './Pages/Specifications'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} >
          <Route path='reviews' element={<Reviews />} />
          <Route path='specifications' element={<Specifications />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App
