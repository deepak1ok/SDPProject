import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar border-solid border-2 border-black">
  <div className="navbar-start">
    <Link to="/"className="btn btn-ghost text-xl align-center">FoodShare</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to="/donate">Donate Now</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li> 
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <Button></Button>
  </div>
</div>
    
  )
}

export default NavBar
