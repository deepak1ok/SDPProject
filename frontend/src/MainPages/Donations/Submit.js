import React, { useContext } from "react";
import { StepperContext } from "./Context/StepperContext";
import axios from "axios";

function Submit() {
  const { userData } = useContext(StepperContext);

  async function submitDonation() {
    const res = await axios.post(
      "http://localhost:3000/api/donation/request",
      userData
    );

    console.log(userData);
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
          Thank you for your donation
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
