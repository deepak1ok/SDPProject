import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../Images/Logo/logo.png";
import Background from "../../Images/BackgroundImg/main-bg.png";
import "../Login/Login.css";
import '../Signup/SignUp.css';

import { useLocation } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    // username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [otp,setOtp]=useState('')

  const [otpStatus,setOtpStatus]=useState(false);  

  const location = useLocation();
  console.log(location.state);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleClick = () => {
    navigate("/login", { state: { role: location.state.role} });
  };

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    // try {
    //   const url = "http://localhost:3000/api/users";
    //   const res = await axios.post(url, data);
    //   navigate("/login", { state: { role: location.state.role } });
    //   console.log(res);
    // } catch (error) {
    //   if (
    //     error.response &&
    //     error.response.status >= 400 &&
    //     error.response.status <= 500
    //   ) {
    //     setError(error.response.data.message);
    //   }
    // }

     try {
      const url = "http://localhost:3000/api/users/send-otp";
      const res = await axios.post(url, data);

      navigate("/register-otp", { state: { role: location.state.role,email:data.email,password:data.password}});
      
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

  const buttonStyle = {
    border: "2px solid #ef6d1e",
    backgroundColor: "#ef9712",
    padding: "10px 20px",
    color: "white",
    borderRadius: "10px",
    marginLeft: "10px",
    fontSize: "12px",
  };

  return (
    <>
      <div className='Outer'>
        <div className='cont1'>
          <div className='text-logo'>
            <span className='Logo_img'>
              <img src={Logo} alt='' />
            </span>
            <span className='text_'>FoodShare</span>
          </div>
          <div className='container'></div>
          <div className='para1'>Create Your account</div>
          <p className='para2'>
            <span>Already have an account?</span>

            <span className='signup_link'>
              <button onClick={handleClick}>Sign In</button>
            </span>
          </p>

          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <br />
            <input
              type='text'
              placeholder='First Name'
              name='fname'
              onChange={handleChange}
              value={data.fname}
              required
            />
            <br />
            <label>Last Name</label>
            <br />
            <input
              type='text'
              placeholder='Last Name'
              name='lname'
              onChange={handleChange}
              value={data.lname}
              required
            />
            <br />
            <label>Email Address</label>
            <br />
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              value={data.email}
              required
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleChange}
              value={data.password}
              required
            />
            <br />
            {/* <label for="cars">Role</label>
              <select id="cars" name="role" onChange={handleChange} value={data.role}>
                  <option value="donor">Donor</option>
                  <option value="ngo">NGO</option>
                </select> */}

            <label>Role</label>
            <br />
            <input type='text' disabled={true} value={location.state.role} />
            {error && <div>{error}</div>}
            <button style={buttonStyle} className='signup_btn' type='submit'>
              SignUp{" "}
            </button>
          </form>
        </div>
        <div className='cont2'>
          <img src={Background} alt='' />
        </div>
      </div>
    </>
  );
};

export default Signup;