import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../../components/NavBar/NavBar";
import "./aboutdonation.css";

import Modal from 'react-modal';
import { UserContext } from "../../../Context/UserContext";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import Map from './Location.jsx'


function AboutDonation() {
  const { id } = useParams();

  const [value,setValue]=useState(0);

  const [data, setData] = useState({});

  const {user}=useContext(UserContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const [ngoData,setNgoData]=useState([]);

  const [items, setItems] = useState([]);

  const [pickupTime,setPickupTime]=useState('');

  const navigate=useNavigate();

  useEffect(() => {
    getData();
    getNgoData();
  }, []);

  const submitClick=async()=>
  {

    if(pickupTime==='')
      {
        alert("Please select pickup time");
        return;
      }

    console.log(pickupTime);

    console.log(items);

    let isAllZero=true;
    let requestAccept=true;
    let removeDonation=true;

     for(let i=0;i<items.length;i++)
      {
         if(parseInt(items[i].quantity)!==0)
          {
            isAllZero=false;
          }
          
      }

    if(items.length==0 || isAllZero)
      {
        alert("Please select atleast one item");
        return;
      }

      for(let i=0;i<data.items.length;i++)
      {
        if(parseInt(data.items[i].quantity)<parseInt(items[i].quantity))
          {
            requestAccept=false;
          }
      }

      console.log(requestAccept)

      if(!requestAccept)
        {
          alert("Please select quantity less than availible quantity");
          return;
        }

  
    let request={
      donationId:data._id,
      ngoId:user._id,
      donorId:data.donorId, 
      itemsRequested:items,
      pickupTime:pickupTime,
      status:"pending",
      lat:data.lat,
      lng:data.lng,
    }

    console.log(request);


    const res=await axios.post(`http://localhost:3000/api/donation/requestdonation`,{
      data:request,
    }).then((res)=>
    {
      console.log(res);
    }).catch((err)=>
    {
      console.log(err);
    })

    navigate('/acceptdonation');

    
  }

  

  async function getData() {

    console.log(user)

    const res = await axios.get(
      `http://localhost:3000/api/donation/aboutdonation/${id}`
    );
    
    

    setData(res.data.data);

    console.log(res.data.data);
  }

  async function getNgoData() {

    console.log(user);
    
    const res = await axios.get(
      `http://localhost:3000/api/ngo/aboutngo/${user._id}`
    );

    setNgoData(res.data.ngoData)

    setModalData(res.data.ngoData);

    console.log(res.data.ngoData)

  
  }
    const handleModal=()=>
      {
        setModalIsOpen(true);
        document.body.style.overflowY = "hidden";
      }

      const handleClick=()=>
        {
          setModalIsOpen(false);
          document.body.style.overflowY = "scroll";
        }

  const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '60%',
      transform: 'translate(-40%, -10%)',
      zIndex: '1000',
      height:'100%',
      overflowY:'auto',
      height:'500px'
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.5)",
      overflowY:"scroll",
    },
  }

  

  return (
    <>
      <NavBar></NavBar>
      {/* ---------------------------- */}

      <div style={{ padding: "12em" }}>
        <div className='px-4 sm:px-0'>
          <h3 className='text-base font-semibold leading-7 text-gray-900'>
            Donor Information
          </h3>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor name
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data && data.firstName} {data && data.lastName}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Address
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data && data.address}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor State
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data && data.state}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Phone Number
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data && data.phoneNumber}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Email
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data && data.email}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Pin Code
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data && data.postalCode}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Food Items
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                <pre>
                  Food items:{" "}
                  {data.items && data.items.length > 0
                    ? data.items[0].name
                    : ""}
                </pre>
                <pre>
                  Food Quantity:{" "}
                  {data.items && data.items.length > 0
                    ? data.items[0].quantity
                    : ""}
                </pre>
                <pre>
                  Type of Food:{" "}
                  {data.items && data.items.length > 0
                    ? data.items[0].typeOfFood
                    : ""}
                </pre>
              </dd>
            </div>
          </dl>
        </div>
        
        <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Location
              </dt>
        </div>
        
        <div style={ modalIsOpen ? { opacity:0.3} : {display : ''} }>{data.lat && data.lng && ngoData.lat && <Map lat={data.lat.$numberDecimal} lng={data.lng.$numberDecimal} ngoLat={ngoData.lat.$numberDecimal} ngoLng={ngoData.lng.$numberDecimal}></Map> }</div>
        
        <div>
          <button onClick={handleModal} className='donor-accept-btn'>
                      Request Donation
          </button>
        </div>
      </div>
                    
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false}style={customStyles}>
        {modalData && <div>
          <div style={{textAlign:'center',fontSize:'30px',fontWeight:'bolder'}}>Confirmation</div>
          <div><button onClick={handleClick}>Close X</button></div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <label>First Name</label>
              <input type="text" value={modalData.firstName} style={{width:'200px'}}  disabled />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" value={modalData.lastName} style={{width:'200px'}} disabled />
            </div>
            <div>
              <label>NGO Name</label>
              <input type="text" value={modalData.ngoName} style={{width:'200px'}} disabled />
            </div>
            <div>
              <label>Email</label>
              <input type="text" value={modalData.email} style={{width:'200px'}} disabled />
            </div>
            <div>
              <label>Address</label>
              <input type="text" value={modalData.address} style={{width:'200px'}} disabled />
            </div>
            <div>
              <label>State</label>
              <input type="text" value={modalData.state} style={{width:'200px'}} disabled />
            </div>
            <div>
              <label>City</label>
              <input type="text" value={modalData.city} style={{width:'200px'}} disabled />
            </div>
            
            <div>
              <label>PinCode</label>
              <input type="text" value={modalData.pinCode} style={{width:'200px'}} disabled />
            </div>
            <div>
              <label>PhoneNumber</label>
              <input type="text" value={modalData.phoneNumber} style={{width:'200px'}} disabled />
            </div>
           
          </div>

          <div style={{textAlign:'center',fontSize:'30px',fontWeight:'bolder'}}>Food Items</div>
  
                
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
              <th>Food Name</th>
              <th>Type of Food</th>
              <th>Availible Quantity</th>
              <th>Quantity you want</th>
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
            {data.items && data.items.map((d, i) => (
              <tr key={i}>
                <td>{d.name}</td>
                <td>{d.typeOfFood}</td>
                <td>{d.quantity}</td>
                <td><InputField name={d.name} typeOfFood={d.typeOfFood} quantity={d.quantity} items={items} setItems={setItems} index={i}></InputField></td>
              </tr>
                
            ))}
          </tbody>
        </table>

                </div>
                
                }

  <label for="pickup time">Pickup Date and Time</label>
  {data.date && <input type="datetime-local" id="pickup" name="pickup" min={`${data.date.substring(0,16)}`} value={pickupTime} onChange={(e)=>setPickupTime(e.target.value)}/>}
  
                <button className="btn btn-outline btn-success" onClick={submitClick}>Submit</button>
      </Modal>

      
      
      </>
  );
}

export default AboutDonation;