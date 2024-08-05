import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function Landingpage() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Landingpage;