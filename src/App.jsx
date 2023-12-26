import { useState } from 'react'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import Login from './components/login/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} >
      <Route path='/home' element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
)


const App = ( ) => {



  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
