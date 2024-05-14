import React, { useContext } from "react";
import { StepperContext } from "./Context/StepperContext";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function Submit() {
  const { userData,setUserData } = useContext(StepperContext);
  const {user,setUser}=useContext(UserContext);

  const navigate = useNavigate();

  async function submitDonation() {

    const res = await axios.post(
      "http://localhost:3000/api/donation/request",
      userData
    );

    console.log(userData);
    
    navigate("/")
    
  }

  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginTop: "4em",
            color: "#00a200",
            fontSize: "large",
          }}
        >
          Thank you for your donation! Click Submit to confirm.
        </div>
        <button
          style={{
            borderRadius: "25px",
            border: "1px solid black",
            padding: "10px 35px",
            marginTop: "2em",
            fontSize: "1.5em",
            backgroundColor: "#01a401",
            color: "white",
          }}
          onClick={submitDonation}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Submit;
