import React,{useContext} from 'react'
import { StepperContext } from './Context/StepperContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Submit() {
    const {userData}=useContext(StepperContext);
    const navigate=useNavigate();

    async function submitDonation()
    {
        const res=await axios.post("http://localhost:3000/api/ngo/create",userData);

        navigate('/login',{state:{
            role:'ngo'
        
        }})
    }
  
  return (
    <>
    <div>
      You are registered as NGO
    </div>
    <button onClick={submitDonation}>
        Submit
    </button>
    </>
  )
}

export default Submit
