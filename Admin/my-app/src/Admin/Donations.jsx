
import React,{useState,useEffect} from 'react'
import SideBar from './SideBar'
import Header from './Header'
import axios from 'axios';

function Donations() {

    
const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
const [donations,setDonations]=useState([]);

useEffect(()=>
{
    allDonations();
},[]);

const allDonations=async()=>
    {
        const res=await axios.get('http://localhost:3000/api/admin/alldonations');
        setDonations(res.data.result);
    }

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>
    
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div style={{width:'100%',border:'2px solid black'}}>
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Phone Number</th>
              <th>Donate Request Date</th>
              <th>Remove</th>
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
            {donations && donations.map((d, i) => (
              <tr key={i}>
                <td>{d.donorId.fname}</td>
                <td>{d.donorId.lname}</td>
                <td>{d.donorId.email}</td>
                <td>{d.address}</td>
                <td>{d.city}</td>
                <td>{d.state}</td>
                <td>{d.phonenumber}</td>
                <td>{new Date(d.date).toLocaleDateString()}</td>
                <td>Remove</td>
                
                
                

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    </>
  )
}

export default Donations
