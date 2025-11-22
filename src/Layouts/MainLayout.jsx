import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function MainLayout() {
  return <>
  <Navbar/>
  <div className='bg-linear-to-br from-blue-400 to-purple-400'>
    <Outlet/>
  </div>
  <Footer/>
  
  </>
}
