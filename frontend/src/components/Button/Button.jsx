import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";


function Button() {

  const navigate=useNavigate();

  const handleClick=()=>
  {
    navigate('/login',{state:{
      role:'ngo'
    }});
  }

  const handleClickDonor=()=>
  {
    navigate('/login',{state:{
      role:'donor'
    }});
  }

  return (
    <>
      <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Hover</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><button onClick={()=>handleClick()}>Get Started with NGO</button></li>
    <li><button onClick={()=>handleClickDonor()}>Get Started with Donor</button></li>
  </ul>
</div>
    </>
  );
}

export default Button;
