import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import "../Donations/Donations.css";
import Dropdown from "../../components/city-state/Dropdown";
import { ToastContainer, toast } from "react-toastify";

function DonationList() {
  
  const [donationList, setDonationList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [state,setState]=useState({
    state:'',city:''
  });

  

  const getData = async () => {
    const data = await axios
      .get("http://localhost:3000/api/donation/donationlist")
      .then((res) => {
        console.log(res.data);
        setDonationList(res.data.donationLists);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // function handleDelete(id) {
  //   const confirm = window.confirm("Are you sure you want to Delete?");
  //   if (confirm) {
  //     axios
  //       .post("http://localhost:3000/api/donate/delete/" + id)
  //       .then((res) => {
  //         alert("Record Deleted Successfully!");
  //         getData();
  //       });
  //   }
  // }

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location = "/";
  // };



  console.log(donationList);

  // const filteredData = data.filter((item) =>
  //   searchProperties.some((prop) => {
  //     const propValue = getProperty(item, prop);
  //     if (propValue && typeof propValue === "string") {
  //       return propValue.toLowerCase().includes(searchTerm.toLowerCase());
  //     }
  //     return false;
  //   })
  // );

  // Helper function to access nested properties
  // function getProperty(obj, prop) {
  //   const propParts = prop.split(".");
  //   return propParts.reduce(
  //     (result, currentProp) => result && result[currentProp],
  //     obj
  //   );
  // }

  const handleClick=async ()=>
    {
      if(!state.city || !state.state)
        {
          toast.error('Please select city and state')
        }

        const result=await axios.get(`http://localhost:3000/api/donation/donationlist/${state.state}/${state.city}`)

        setDonationList(result.data.data)
    }

  return (
    <div>
      <ToastContainer className='toast-container_' />
      <div>
        <NavBar></NavBar>
      </div>
      <div style={{width:'100%',textAlign:'center',margin:'10px'}}>
      <Dropdown state={state} setState={setState}></Dropdown>
      </div>
      <div style={{textAlign:'center',margin:'40px'}}>
        <button className="btn btn-success" onClick={handleClick} style={{width:'80px'}}>Search</button>
      </div>
      <div>
        <h1 style={{textAlign:'center'}}>Food Donations List</h1>
        <br />
        <br />
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
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Donate Request Date</th>
              <th>City</th>
              <th>State</th>
              <th>Action</th>
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
            {donationList.map((d, i) => (
              <tr key={i}>
                <td>{d.donorId.fname}</td>
                <td>{d.donorId.lname}</td>
                <td>{d.address}</td>
                <td>{d.phonenumber}</td>
                <td>{d.donorId.email}</td>
                <td>{new Date(d.date).toLocaleDateString()}</td>
                <td>{d.city}</td>
                <td>{d.state}</td>
                <td>
                  <Link to={`aboutdonation/${d._id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DonationList;
