import React, { useContext, useState } from 'react'
import {Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem,  Button} from "@heroui/react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../assets/Context/AuthContext';


export default function Navbar() {
  let { isLoggedIn, setIsLoggedIn } = useContext(authContext)
  const navigate = useNavigate();
  function logOut(){
    localStorage.removeItem('token');
    setIsLoggedIn(null)
    navigate('/login')
  }
  return (
    <HeroNavbar className='bg-purple-800 opacity-75 '>
      <NavbarBrand>
        <p className="font-bold  text-gray-200 "><Link to={"/"}>Linked-Posts</Link></p>
      </NavbarBrand>

      <NavbarContent justify="end">
        {
          isLoggedIn ? 
          <>
          <NavbarItem className='cursor-pointer  text-gray-200 ' onClick={logOut}>
          Log Out
          </NavbarItem>
          </> :
         <>
         <NavbarItem className='cursor-pointer  text-gray-200 '>
          <NavLink to={'register'}>
            Sign Up
          </NavLink>
         </NavbarItem>
         <NavbarItem className='cursor-pointer  text-gray-200 '>
          <NavLink to={'login'}>
            Log In
          </NavLink>
         </NavbarItem>
        </>
        }
        

      </NavbarContent>
    </HeroNavbar>
  )
}
