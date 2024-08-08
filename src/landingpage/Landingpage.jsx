import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Landingpage() {
  
  
  


  return (
    <>
    <Navbar />
    <Outlet />
    

    </>
  )
}

export default Landingpage;