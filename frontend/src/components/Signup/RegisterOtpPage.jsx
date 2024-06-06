import React from 'react'
import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

import Logo from "../../Images/Logo/logo.png";
import Background from "../../Images/BackgroundImg/main-bg.png";
import "../Login/Login.css";
import '../Signup/SignUp.css';

import { useLocation } from "react-router-dom";


function RegisterOtpPage() {

  const location = useLocation();

  console.log(location.state.password)

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [data,setData]=useState({
    email:location.state.email,
    password:location.state.password,
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/users/verify-otp";
      const res = await axios.post(url, data);
      navigate("/login",{ replace: true,state: { role: location.state.role }}  );

      console.log(res);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }


  };
  return (
       <div className='Outer'>
        <div className='cont1'>
          {/* <div className='text-logo'>
            <span className='Logo_img'>
              <img src={Logo} alt='' />
            </span>
            <span className='text'>FoodShare</span>
          </div> */}
          <div className='container'></div>
          <div className='para1'>Enter your OTP</div>
          <form onSubmit={handleSubmit}>
            <label>OTP</label>
            <br />
            <input
              type='number'
              placeholder='OTP'
              name='otp'
              onChange={handleChange}
              required
            />
            <br />
            {error && <div>{error}</div>}
            <button className='signup_btn' type='submit'>
              SignUp{" "}
            </button>
          </form>
        </div>
        <div className='cont2'>
          <img src={Background} alt='' />
        </div>
      </div>
   
  )
}

export default RegisterOtpPage;
