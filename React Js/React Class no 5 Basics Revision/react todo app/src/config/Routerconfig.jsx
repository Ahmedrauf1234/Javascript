import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import About from '../screens/About'
import Contacts from '../screens/Contacts'
import Navbar from '../components/Navbar'

const Routerconfig = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contacts' element={<Contacts/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routerconfig