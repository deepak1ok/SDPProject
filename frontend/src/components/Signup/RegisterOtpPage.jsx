import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Logo from "../../Images/Logo/logo.png";
import Background from "../../Images/BackgroundImg/main-bg.png";
import "../Login/Login.css";
import "../Signup/SignUp.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLocation } from "react-router-dom";

function RegisterOtpPage() {
  const location = useLocation();

  console.log(location.state.phonenumber);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: location.state.email,
    password: location.state.password,
    phonenumber: location.state.phonenumber,
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    console.log(data);

    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/users/verify-otp";
      const res = await axios.post(url, { data: data, role: "donor" });
      navigate("/login", {
        replace: true,
        state: { role: location.state.role },
      });

      console.log(res);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
  };
  const customStyle = {
    border: "2px solid orange",
    padding: "1em 2em",
    marginLeft: "1em",
    backgroundColor: "brown",
    color: "white",
    fontSize: "13px",
    borderRadius: "10px",
  };
  return (
    <>
    <ToastContainer className='toast-container_' />
    <div className='Outer'>
      <div className='cont1'>
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
          <button style={customStyle} className='signup_btn' type='submit'>
            SignUp{" "}
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default RegisterOtpPage;
