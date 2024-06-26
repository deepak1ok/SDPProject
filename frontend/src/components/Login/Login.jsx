import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";
import Logo from "../../Images/Logo/logo.png";
import Background from "../../Images/BackgroundImg/main-bg.png";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLocation } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { data, setUser } = useContext(UserContext);
  const location = useLocation();

  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
  };

  const handleClick = () => {
    if (location.state.role === "donor")
      navigate("/signup", { state: { role: location.state.role } });
    else navigate("/needyPeople", { state: { role: location.state.role } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)
    try {
    let url;

    if (location.state.role === "donor") {
      url = "http://localhost:3000/api/users/auth";
    } else {
      url = "http://localhost:3000/api/users/ngologin";
    }

    const res = await axios.post(url, formData);

    console.log(res);

    localStorage.setItem("token", JSON.stringify(res.data));

    setUser(res.data);

    navigate("/",{replace:true});

    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message)
        toast.error(error.response.data.message);
      }
    }

  };

  return (
    <>
    <ToastContainer className='toast-container_' />
      <div className='Outer'>
        <div className='cont1'>
          <div className='text-logo'>
            <span className='Logo_img'>
              <img src={Logo} alt='' />
            </span>
            <span className='text_'>FoodShare</span>
          </div>
          <div className='para1'>Log in to Your account</div>
          <p className='para2'>
            <span>Don't have an account?</span>

            <span className='signup_link'>
              <button onClick={handleClick}>Sign Up</button>
            </span>
          </p>
          {/* <div className='btn_google'>
            <button>Google</button>
            <div className='para3'>
              <p></p>
              <div className='text_'> Or with email and password </div>
              <p></p>
            </div>
          </div> */}
          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <br />
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              value={formData.email}
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
              value={formData.password}
              required
            />
            <br />
            <button className='login' type='submit'>
              Login{" "}
            </button>
          </form>
        </div>
        {/* <div className='cont2'>
          <img src={Background} alt='' />
        </div> */}
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
