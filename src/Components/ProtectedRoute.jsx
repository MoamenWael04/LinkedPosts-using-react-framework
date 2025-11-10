import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from '../assets/Context/AuthContext';

export default function ProtectedRoute({children}) {
    // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') != null );
    let { isLoggedIn}=useContext(authContext)
  
    return isLoggedIn ? children : <Navigate to={'/login'}/>
}
