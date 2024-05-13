import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";
import Logo from "../../Images/Logo/logo.png";
import Background from "../../Images/BackgroundImg/main-bg.png";
import "../Login/Login.css";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/users/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
    <>
      <div className='Outer'>
        <div className='cont1'>
          <div className='text-logo'>
            <span className='Logo_img'>
              <img src={Logo} alt='' />
            </span>
            <span className='text'>FoodShare</span>
          </div>
          <div className='para1'>Log in to Your account</div>
          <p className='para2'>
            <span>Don't have an account?</span>

            <span className='signup_link'>
              <Link to='/signup'>Sign Up</Link>
            </span>
          </p>
          <div className='btn'>
            <button>Google</button>
            <div className='para3'>
              <p></p>
              <div className='text'> Or with email and password </div>
              <p></p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
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
            {error && <div>{error}</div>}
            <button className='login' type='submit'>
              Login{" "}
            </button>
          </form>
        </div>
        <div className='cont2'>
          <img src={Background} alt='' />
        </div>
        {/* <div>
          <h1>New Here ?</h1>
          <Link to='/signup'>
            <button type='button'>Sign Up</button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Login;
