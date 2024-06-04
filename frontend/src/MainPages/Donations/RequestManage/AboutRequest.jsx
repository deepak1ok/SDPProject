import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../../components/NavBar/NavBar'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Map from './Location.jsx'

function AboutRequest() {
    const {id}=useParams();
    const [request,setRequest]=useState({});
    const navigate=useNavigate();


    const [status,setStatus]=useState(null)

    const [checkValid,setCheckValid]=useState(false);


    async function aboutRequest()
    {
        const res=await axios.get(`http://localhost:3000/api/donation/aboutrequest/${id}`);

        setRequest(res.data.data);

        console.log(res.data)
        setCheckValid(res.data.checkValid);
        setStatus(res.data.data.status);
    }

    const handleClick=async ()=>
        {
            const res=await axios.post(`http://localhost:3000/api/donation/acceptdonation/${id}`);

            console.log(res);

            navigate('/submitRequest')
        }

      const handleReject=async()=>
        {
            const res=await axios.post(`http://localhost:3000/api/donation/rejectrequest/${id}`);

            console.log(res);

            navigate('/rejectrequest')
        }

    useEffect(()=>
    {   
        aboutRequest();
       
    },[])
  return (
    <div>
      <NavBar></NavBar>
      <div style={{ padding: "12em" }}>
        <div className='px-4 sm:px-0'>
          <h3 className='text-base font-semibold leading-7 text-gray-900' style={{textAlign:'center'}}>
           NGO Information
          </h3>
        </div>
        <div className='px-4 sm:px-0 my-6'>
          <h3 className='text-base leading-7 text-gray-900' style={{fontSize:'20px'}}>
           This NGO are requesting for the following items.The Details shown below: 
          </h3>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
               Ngo Name
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.ngoName} 
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Address
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.address}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor State
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.state}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Phone Number
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.phoneNumber}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Email
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.email}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Pin Code
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.pinCode}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Total Campaigns
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.totalCampaigns}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Total Feeds
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.totalFeeds}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Total Adults
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.adults}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Total Childrens
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {request.ngoId && request.ngoId.childrens}
              </dd>
            </div>
          </dl>
        </div>
            

        <div>
            <h2 style={{textAlign:'center',fontSize:'20px'}}>Requested Item</h2>
        </div>

        <table
            style={{
            borderCollapse: "flex",
            width: "100%",
            marginBottom: "30px",
            fontWeight: "600",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#24a19b",
                color: "white",
                fontSize: "15px",
              }}
            >
              <th>Food Items</th>
              <th>Type of Food</th>
              <th>Quantity NGO want</th>
              <th>Quantity you have</th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: "#dbdb",
              color: "black",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            {request.itemsRequested && request.itemsRequested.map((d, i) => (
              <tr key={i}>
                <td>{d.name}</td>
                <td>{d.typeOfFood}</td>
                <td>{d.quantity}</td>
                <td>{request.donationId.items[i].quantity}</td>
              </tr>
                
            ))}
          </tbody>
        </table>
      <div>
        {/* { lat && lng && ngoLat && ngoLng && <Map lat={lat} lng={lng} ngoLat={ngoLat} ngoLng={ngoLng}></Map> } */}
        

      {status==="Rejected" && <div className='mt-6 border-t border-gray-100 text-2xl' style={{textAlign:'center'}}>
        <span className='font-semibold my-3'> Status of this Request:</span> You have rejected the request.Check out other requests.
            </div>}

        {status==="Accepted" && <div className='mt-6 border-t border-gray-100 text-2xl' style={{textAlign:'center'}}>
        <span className='font-semibold my-3'> Status of this Request:</span>You have accepted the request.Please contact the respective NGO for pickup and further coordination.
            </div>}
        
      {checkValid && status==="pending" ? <>
      <div style={{textAlign:'center'}}>
       <button className="btn btn-success" onClick={handleClick}>Accept</button>
       <button className="btn btn-error" onClick={handleReject}>Reject</button>
      </div>
      
      </>:<>
            {status!=="Accepted" && status!=="Rejected" && <><div className='mt-6 border-t border-gray-100 text-2xl' style={{textAlign:'center'}}>
        <span className='font-semibold my-3'> Status of this Request:</span> The request is not valid as the items requested are not available.Kindly reject the request.
            </div>
            <div className='text-center'>
            <button className="btn btn-error " onClick={handleReject}>Reject</button>
            </div></>}
      </>}
        
      </div>
        </div>
        
        </div>
      
    
  )
}

export default AboutRequest
