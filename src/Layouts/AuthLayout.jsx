import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function AuthLayout() {
  return <>
  <div className="bg-gray-200 min-h-screen flex justify-center items-center bg-grey-200">
      <Outlet/>
   
  </div>
   <Footer/>                        
  
  </>
}
