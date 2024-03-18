import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/home/Home'
import Register from '../../screens/register/Register'
import Login from '../../screens/login/Login'
import ResponsiveAppBar from '../../components/Navbar'
import Protectedroutes from './Protectedroutes'

const Routerconfig = () => {
  return (
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
        <Route path='/' element={<Protectedroutes component={<Home/>}/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfig