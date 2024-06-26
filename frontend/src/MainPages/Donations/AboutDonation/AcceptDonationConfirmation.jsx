import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AcceptDonationConfirmation() {
  const navigate = useNavigate();

  function handleClick1() {
    navigate("/");
  }

  function handleClick2() {
    navigate("/donationslist");
  }
  return (
    <>
      <NavBar></NavBar>
      <div className='flex flex-col item-center justify-content-center'>
        <h1
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bolder",
          }}
        >
          Thank you for accepting the donation
        </h1>
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            marginTop: "2em",
          }}
        >
          We will send a instant notification to the donor about the acceptance
          of the donation. Please Contact the donor for further details and
          pickup
        </div>
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          Thank You for you contribution.
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <button
              style={{ fontSize: "1.6em", width: "200px", height: "50px" }}
              className='btn btn-outline btn-success'
              onClick={handleClick1}
            >
              Home
            </button>
          </div>
          <div style={{ margin: "10px" }}>
            <button
              style={{ fontSize: "1.6em", width: "250px", height: "50px" }}
              className='btn btn-outline btn-info'
              onClick={handleClick2}
            >
              On Going Food Donation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcceptDonationConfirmation;
