import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import WhyNexus from './pages/WhyNexus';
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>} />
    <Route path='/about' element={<WhyNexus/>} />
    <Route path='/service' element={<ServicePage/>} />
    <Route path='/contact' element={<ContactPage/>} />

  </Route>
    
  )
);

const App = () => {
  return <RouterProvider router={router}/>
} 

export default App