import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../Images/Logo/logo.png";
import Background from "../../Images/BackgroundImg/main-bg.png";
import "../Login/Login.css";
import '../Signup/SignUp.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLocation } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    // username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    phonenumber:""
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
  
    if(!data.fname || !data.lname || !data.email || !data.password || !data.phonenumber){
      toast.error("Please fill all the fields")
      return;
    }
    
    if(data.phonenumber.length!==10){
        toast.error("Phone number should be of 10 digits")
        return;
      }

      if(data.password.length<=6){
        toast.error("Password should be greater than 6 characters")
        return;
      }

      console.log("done")
  
     try {
      const url = "http://localhost:3000/api/users/send-otp";
      const res = await axios.post(url, data);

      navigate("/register-otp", { state: { role: location.state.role,email:data.email,password:data.password,phonenumber:data.phonenumber}});
      
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        toast.error(error.response.data.message)
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
      <ToastContainer className='toast-container_' />
      <div className='Outer_'>
        <div className='cont1_' style={{ width: "70rem" }}>
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
            <div className='row_1'>
              <div style={{ textAlign: "left" }}>
                <label>First Name</label>
                <br />
                <input
                  type='text'
                  name='fname'
                  onChange={handleChange}
                  value={data.fname}
                  
                />
              </div>
              {/* <br /> */}
              <div style={{ textAlign: "left" }}>
                <label>Last Name</label>
                <br />
                <input
                  type='text'
                  name='lname'
                  onChange={handleChange}
                  value={data.lname}
                  
                />
              </div>
            </div>
            <div className='row_2'>
              <div style={{ textAlign: "left" }}>
                <label>Email Address</label>
                <br />
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  value={data.email}
                  
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <label>Role</label>
                <br />
                <input
                  type='text'
                  disabled={true}
                  value={location.state.role}
                />
              </div>
            </div>

            <div className='row_2'>
              <div style={{ textAlign: "left" }}>
                <label>Password</label>
                <br />
                <input
                type='password'
                name='password'
                onChange={handleChange}
                value={data.password}
                
               />
              <br />
             
              </div>

              <div style={{ textAlign: "left" }}>

              <label>Phone Number</label>
                <input
                type='number'
                id="phone"
                name='phonenumber'
                onChange={handleChange}
                value={data.phonenumber}
               />

              </div>

              
            </div>
            <button style={buttonStyle} className='signup_btn' type='submit'>
              SignUp{" "}
            </button>
          </form>
        </div>
        {/* <div className='cont2'>
          <img src={Background} alt='' />
        </div> */}
      </div>
    </>
  );
};

export default Signup;