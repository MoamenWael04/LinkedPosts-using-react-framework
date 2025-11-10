import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import AuthLayout from './Layouts/AuthLayout'
import FeedPages from './Pages/FeedPages'
import PostDetails from './Pages/PostDetails'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ProtectedRoute from './Components/ProtectedRoute'
import AuthProtectedRoute from './Components/AuthProtectedRoute'






let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {index: true, element: <ProtectedRoute><FeedPages/></ProtectedRoute>},
      {path: 'post-details/:id', element: <ProtectedRoute><PostDetails/></ProtectedRoute>},
      {path: 'profile', element: <ProtectedRoute><Profile/></ProtectedRoute>},
    ]
  },
  {
    path: '/',
    element: <AuthLayout/>,
    children: [
      {path: 'login', element: <AuthProtectedRoute><Login/></AuthProtectedRoute>},
      {path: 'register', element: <AuthProtectedRoute><Register/></AuthProtectedRoute>}
    ]
  },
  {path: '*', element: <NotFound/>}
]);


function App() {
  

  return <>
      <RouterProvider router={router}/>
    </>
}

export default App
