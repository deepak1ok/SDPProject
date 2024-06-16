import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import axios from "axios";
import cross_icon from "../assets/cross_icon.png";
import "./Donation.css";
function Donations() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    allDonations();
  }, []);

  const allDonations = async () => {
    const res = await axios.get("http://localhost:3000/api/admin/alldonations");
    setDonations(res.data.result);
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <SideBar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />

        <div className='listdonation'>
          <h1>All Donation List</h1>
          <div className='listdonation-format-main'>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Email</p>
            <p>Address</p>
            <p>City</p>
            <p>State</p>
            <p>Phone Number</p>
            <p>Donate Request Date</p>
            <p>Remove</p>
          </div>
          <div className='listdonation-alldonation'>
            <hr />
            {donations &&
              donations.map((d, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className='listdonation-format-main listdonation-format'
                    >
                      <p>{d.donorId.fname}</p>
                      <p>{d.donorId.lname}</p>
                      <p>{d.donorId.email}</p>
                      <p>{d.address}</p>
                      <p>{d.city}</p>
                      <p>{d.state}</p>
                      <p>{d.phonenumber}</p>
                      <p>{new Date(d.date).toLocaleDateString()}</p>
                      {/* <p>Remove</p> */}
                      <img
                        src={cross_icon}
                        alt=''
                        className='listdonation-remove-icon'
                      />
                    </div>
                    <hr />
                  </>
                );
              })}
          </div>
        </div>

        {/* <div style={{width:'100%',border:'2px solid black'}}>
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
      </div> */}
      </div>
    </>
  );
}

export default Donations;
