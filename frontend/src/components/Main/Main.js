import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Admin from "../../Images/usermain/admin.png";
import Donations from "../../Images/usermain/donations.png";
import NeedyPeople from "../../Images/usermain/needypeople.png";
import DonatorPartner from "../../Images/usermain/Donator-Partner.png";
import DeliveryAgent from "../../Images/usermain/Delivery-Agent.png";

import "../Main/Main.css";
import NavBar from "../NavBar/NavBar";
const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className='org_container'>
          <div className='card'>
            <Link to='/needyPeople' onClick={Image}>
              <img src={NeedyPeople} alt='' />
            </Link>
            <h3>Needy People</h3>
          </div>

          <div className='card'>
            <Link to='/donations' onClick={Image}>
              <img src={Donations} alt='' />
            </Link>
            <h3>Donations</h3>
          </div>

          <div className='card'>
            <Link to='/donation-partner' onClick={Image}>
              <img src={DonatorPartner} alt='' />
            </Link>
            <h3>Donator Partner</h3>
          </div>

          <div className='card'>
            <Link to='/food-delivery' onClick={Image}>
              <img src={DeliveryAgent} alt='' />
            </Link>
            <h3>Delivery Agent</h3>
          </div>

          <div className='card'>
            <Link to='/reports-&-inquiries' onClick={Image}>
              <img src={Admin} alt='' />
            </Link>
            <h3>Reports & Inquiries</h3>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <h1>Main page</h1>
    //   <Link to='/'>
    //     <button type='button'>Logout</button>
    //   </Link>
    // </div>
  );
};

export default Main;
