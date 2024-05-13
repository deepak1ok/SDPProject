import React,{useContext} from 'react'
import { StepperContext } from './Context/StepperContext'
import axios from 'axios'

function Submit() {
    const {userData}=useContext(StepperContext);

    async function submitDonation()
    {
        const res=await axios.post("http://localhost:3000/api/donation/request",userData);
        
        console.log(userData)
    }
  
  return (
    <>
    <div>
      Thank you for your donation
    </div>
    <button onClick={submitDonation}>
        Submit
    </button>
    </>
  )
}

export default Submit
