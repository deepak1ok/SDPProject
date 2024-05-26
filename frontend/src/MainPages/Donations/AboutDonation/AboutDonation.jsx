import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import NavBar from '../../../components/NavBar/NavBar';
import './aboutdonation.css'
import Map from './Map'

function AboutDonation() {
    
 const { id } = useParams();

 const [data,setData]=useState({})

 useEffect(()=>
{
    getData();
},[])

async function getData()
{
    const res=await axios.get(`http://localhost:3000/api/donation/aboutdonation/${id}`);

    setData(res.data.data);

    console.log(res.data.data)
}
  return (
    <>
    <NavBar></NavBar>
    <div className="container">
    <div>
      <h1 style={{textAlign:'center'}}>About Donation</h1>
    </div>
    <div>
    <div>
        Donor Name: {data.firstName} {data.lastName}
    </div>
    <div>
        Donor Address: {data.address}
    </div>
    <div>
        Donor State: {data.state}
    </div>
    <div>
        Donor Phone Number: {data.phoneNumber}
    </div>
    <div>
        Pin Code: {data.postalCode} 
    </div>
    <div>
        Donor Email: {data.email}
    </div>
    <div>
        Donor Name: {data.firstName} {data.lastName}
    </div>
    <div>
        Donor Location
        {data.items[0].name}
    </div>
    </div>
    </div>
    </>
  )
}

export default AboutDonation
