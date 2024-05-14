import React,{useContext,useState} from 'react'
import { StepperContext } from './Context/StepperContext';
import axios from 'axios'
import {useNavigate } from 'react-router-dom';

function EmailCheck() {
    const {userData,setUserData}=useContext(StepperContext);
    const navigate=useNavigate()

    const [email,setEmail]=useState();

    const handleChange=async (e)=>
    {
      setEmail(e.target.value);
    }
    const handleSubmit=async(e)=>
    {
        console.log(email)
        const res=await axios.post("http://localhost:3000/api/ngo/checkEmail",{email:email});
        setUserData({...userData,email:email});

       if(!res.data.status)
       {
              alert('Email already exists')
              navigate('/login',{state:{role:'ngo'}})
       }
       else
       {
             alert('Email doesnt exist')
         
       }
    }
  return (
    <div>
      Enter your Email
      <input type="text" name="email" value={userData['email']} onChange={handleChange}required/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default EmailCheck
