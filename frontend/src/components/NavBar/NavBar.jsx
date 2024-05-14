import React from "react";
// import Button from "../Button/Button";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../Images/Logo/logo.png";
import { UserContext } from "../../Context/UserContext";
import Button from "../Button/Button";
import LogoutButton from "../Button/LogoutButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function NavBar() {
  const { user,setUser } = React.useContext(UserContext);
  const navigate=useNavigate();

  function handleLogout()
  {
      localStorage.removeItem('token');
      setUser(null);
      
      navigate('/')
  }
  return (
    <>
      <div className='navbar border-solid border-2' style={{height:'70px'}}>
      <div className='navbar-start'>
        <img src={Logo} alt="logo-img" style={{height:"60px",width:"80px"}}/>
        <Link to='/' className='btn btn-ghost text-2xl align-center'>
          FoodShare
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li className="text-2xl">
            {user && <Link to='/main'>Our Services</Link>}
          </li>
          <li className="text-2xl">
            <Link to='/about'>About Us</Link>
          </li>
          <li className="text-2xl">
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* { !user &&
       <div className='navbar-end'>
        <Button></Button>
      </div>} */}

      { !user &&
       <div className='navbar-end'>
        <Button></Button>
      </div>}

      {/* {user && <div className='navbar-end'>
          <LogoutButton></LogoutButton>
      </div>} */}

      {user && <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" >
        <div className="w-10 rounded-full" style={{height:'30px',width:'30px'}}>
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 ">
        <li>
          <Link className="justify-between text-2xl font-bold" to="/profile">
            Profile
          </Link>
        </li>
        <li><a className="text-2xl font-bold">Settings</a></li>
        <li><a className="text-2xl font-bold" onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
    }
    </div>
    </>
  );
}

export default NavBar;
