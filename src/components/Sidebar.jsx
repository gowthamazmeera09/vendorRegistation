import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
            <li><Link to="Addfirm">Add firm</Link></li>
            <li><Link to="Addproduct">Add Product</Link></li>
            <li><Link to="Allproducts">All Products</Link></li>
            <li><Link to="Userdetails">user details</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar;