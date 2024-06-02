import React from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'





function AcceptDonationConfirmation() {

    const navigate = useNavigate();

    function handleClick1()
{
    navigate('/');
}

function handleClick2()
{
    navigate('/donationslist');
}
  return (
    <div>
      <NavBar></NavBar>
      <h1 style={{textAlign:'center',fontSize:'30px',fontWeight:'bolder'}}>Thank you for accepting the donation</h1>
      <div style={{textAlign:'center',fontSize:'20px'}}>
        We will send a instant notification to the donor about the acceptance of the donation.
        Please Contact the donor for further details and pickup
      </div>
      <div style={{textAlign:'center',fontSize:'20px'}}>
        Thank You for you contribution.
      </div>
      <div>
        <button onClick={handleClick1}>Home</button>
      </div>
      <div>
        <button onClick={handleClick2}>On Going Food Donation</button>
      </div>
    </div>
  )
}

export default AcceptDonationConfirmation
