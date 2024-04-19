import React from "react";
// import Button from "../Button/Button";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../Images/Logo/logo.png";

function NavBar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className='mobile-navbar__close'>
            <i class='fa-solid fa-bars'></i>
          </div>
          <ul className='mobile-navbar__links'>
            <li>
              <Link onClick={openNav} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/needyPeople'>
                Needy People
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/donate'>
                Donations
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/partners'>
                Partners
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/deliveryagents'>
                Delivery Agents
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className='navbar'>
          <div className='navbar__img'>
            <Link
              to='/'
              onClick={() => window.scrollTo(0, 0)}
              className='btn btn-ghost text-xl align-center'
            >
              <div className='text-logo'>
                <span className='Logo_img'>
                  <img src={Logo} alt='' />
                </span>
                <span className='text'>FoodShare</span>
              </div>
            </Link>
          </div>
          <ul className='navbar__links'>
            <li>
              <Link className='home-link' to='/'>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className='about-link' to='/about'>
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className='needypeople-link' to='/needyPeople'>
                Needy People
              </Link>
            </li>
            <li>
              {" "}
              <Link className='donators-link' to='/donate'>
                Donations
              </Link>
            </li>
            <li>
              {" "}
              <Link className='partners-link' to='/partners'>
                Partners
              </Link>
            </li>
            <li>
              {" "}
              <Link className='deliveryagents-link' to='/deliveryagents'>
                Delivery Agents
              </Link>
            </li>
            <li>
              {" "}
              <Link className='contact-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
          <div className='navbar__buttons'>
            <Link className='navbar__buttons__sign-in' to='/login'>
              Sign In
            </Link>
            <Link className='navbar__buttons__register' to='/signup'>
              Register
            </Link>
          </div>
          {/* mobile */}
          <div className='mobile-hamb' onClick={openNav}>
            <i className='fa-solid fa-bars'></i>
          </div>
        </div>
      </nav>
    </>
    /* <div className='navbar border-solid border-2 border-black'>
      <div className='navbar-start'>
        <Link to='/' className='btn btn-ghost text-xl align-center'>
          FoodShare
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/donate'>Donate Now</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Button></Button>
      </div>
    </div> */
  );
}

export default NavBar;
