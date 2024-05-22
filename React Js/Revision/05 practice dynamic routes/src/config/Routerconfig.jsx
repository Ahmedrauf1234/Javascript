import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home/Home'
import About from '../screens/About/About'
import Contact from '../screens/contact/Contact'
import Navbar from '../components/Navbar'
import Product from '../screens/product/Product'
import Singleproduct from '../screens/singleproduct/Singleproduct'

const Routerconfig = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='Product' element={<Product/>}/>
        <Route path='singleProduct/:id' element={<Singleproduct/>}/>



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routerconfig