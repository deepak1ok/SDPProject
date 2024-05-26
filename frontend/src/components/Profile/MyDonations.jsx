import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import axios from 'axios'
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


function MyDonations() {
    const {user}=useContext(UserContext);
    const [donations,setDonations]=useState([]);


  useEffect(()=>
{
    const fetchDonations=async()=>
    {
        const res=await axios.get(`http://localhost:3000/api/donation/${user.email}`);

        setDonations(res.data.data);
        
    }
    fetchDonations();

},[]);

console.log(donations);
const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalData, setModalData] = useState(null);
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
    },
  }



  return (
    <div>
      <NavBar></NavBar>
      <h1 style={{textAlign:'center'}}>My Profile</h1>
      <div>Donor's Name: {user.fname} {user.lname}</div>
      <div>Donor's Email: {user.email}</div>
      <div style={{textAlign:'center',fontSize:'30px'}}>My Donations</div>
      <table style={ modalIsOpen ? { opacity:0.3} : {display : ''} } >
            <thead>
              <tr>
                {/* <th></th> */}
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>State</th>
                <th>Phone Number</th>
                <th>Donation Status</th>
                <th>View</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {donations && donations.map((item,index) => {
                return (
                  <>
                    <tr>
                      {/* <td></td> */}
                      <td>{item.firstName} {item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <td>{item.phoneNumber}</td>
                      <td>Not Donated</td>
                      <td>
                        <button onClick={()=>
                          {
                            setModalData(item.items);
                            setModalIsOpen(true);
                          }
                        }>
                      Food Items</button></td>
        
                      <td><Link>
                        Update
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
            <div style={{display:'flex',justifyContent:'center'}}>
              <h1 style={{marginTop:'0px'}}>Donation Food Items</h1>
            </div>
          
         
        <table>
          
        <thead>
          <tr>
                {/* <th></th> */}
                <th>Name </th>
                <th>Quantity</th>
                <th>Type of Food</th>
          </tr>
              
        </thead>
            <tbody>
              {modalData && modalData.map((item,index) => {
                return (
                  <>
                    <tr>
                      {/* <td></td> */}
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.typeOfFood}</td>
                    </tr>
                  </>
                    
                )})}
              </tbody>
         </table>
        
      </Modal>
      
    </div>
  )
}



export default MyDonations
