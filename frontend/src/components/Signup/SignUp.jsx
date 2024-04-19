import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Logo from "../../Images/Logo/logo.png";
import Background from "../../Images/BackgroundImg/main-bg.png";
import "../Login/Login.css";
const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
      {/* <div>
        <div>
          <div>
            <h1>Welcome Back!</h1>
            <Link to='/login'>
              <button type='button'>Sign in</button>
            </Link>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <h1>FoodShare</h1>
              <h1>Create an account</h1>
              <input
                type='text'
                placeholder='User Name'
                name='username'
                onChange={handleChange}
                value={data.username}
                required
              />

              <input
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange}
                value={data.email}
                required
              />
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={data.password}
                required
              />
              {error && <div>{error}</div>}
              <button type='submit'>Sign Up</button> */}
      {/* ----- */}
      <div className='Outer'>
        <div className='cont1'>
          <div className='text-logo'>
            <span className='Logo_img'>
              <img src={Logo} alt='' />
            </span>
            <span className='text'>FoodShare</span>
          </div>
          <div className='para1'>Create Your account</div>
          <p className='para2'>
            <span>Already have an account?</span>

            <span className='signup_link'>
              <Link to='/login'>Sign In</Link>
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
            {error && <div>{error}</div>}
            <button className='signup' type='submit'>
              SignUp{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
