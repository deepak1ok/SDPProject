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
import { useLocation } from "react-router-dom";

function NavBar() {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className='navbar border-solid border-2'>
        <div className='navbar-start'>
          <img
            src={Logo}
            alt='logo-img'
            style={{ height: "60px", width: "80px" }}
          />
          <Link to='/' className='btn btn-ghost text-2xl align-center'>
            FoodShare
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li className='text-2xl'>{!user && <Link to='/'>Home </Link>}</li>
            <li className='text-2xl'>
              {user && <Link to='/donations'>Donate Now</Link>}
            </li>

            <li className='text-2xl'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='text-2xl'>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        {!user && (
          <div className='navbar-end'>
            <Button></Button>
          </div>
        )}

        {user && (
          <>
            <div className='navbar-end'>
              <span style={{ userSelect: "none" }}>
                {user.role === "donor" && user.fname + " " + user.lname}
                {user.role === "ngo" && user.fname}
              </span>
              <LogoutButton></LogoutButton>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default NavBar;
