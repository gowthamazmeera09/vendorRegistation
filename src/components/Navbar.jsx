import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>
        <div className='left-header'>
            <Link to="/">gowtham</Link>
        </div>
        <div className='right-header'>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
        </div>

    </div>
  )
}

export default Navbar