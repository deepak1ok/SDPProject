import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import axios from "axios";
import cross_icon from "../assets/cross_icon.png";
import "./Donation.css";
import Modal from "react-modal";

function Donations() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [donations, setDonations] = useState([]);

  const [modalData, setModalData] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modelIsOpen1, setModalIsOpen1] = useState(false);

  const [requestId, setRequestId] = useState();

  const customStyles = {
    content: {
      top: "35%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "60%",
      transform: "translate(-40%, -10%)",
      zIndex: "1000",
    },
  };

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

  const handleRemove = async () => {
    console.log(requestId);

    const res = await axios.post(
      `http://localhost:3000/api/admin/removeDonation/${requestId}`
    );

    console.log(res);

    window.location.reload();
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
            <p>Food Details</p>
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
                      <td>
                        <button
                          onClick={() => {
                            setModalIsOpen(true);
                            setModalData(d.items);
                          }}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          Food Items
                        </button>
                      </td>
                      <p>{d.city}</p>
                      <p>{d.state}</p>
                      <p>{d.phonenumber}</p>
                      <p>{new Date(d.date).toLocaleDateString()}</p>
                      {/* <p>Remove</p> */}
                      <td>
                        <button
                          onClick={() => {
                            setModalIsOpen1(true);
                            setRequestId(d._id);
                          }}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          <img
                            src={cross_icon}
                            alt=''
                            className='listuser-remove-icon'
                          />
                        </button>
                      </td>
                    </div>
                    <hr />
                  </>
                );
              })}
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ marginTop: "0px" }}>Food Items</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table
              style={{ color: "black", textAlign: "center", width: "100%" }}
            >
              <thead>
                <tr>
                  {/* <th></th> */}
                  <th style={{ color: "black" }}>Name </th>
                  <th style={{ color: "black" }}>Quantity</th>
                  <th style={{ color: "black" }}>Type of Food</th>
                </tr>
              </thead>
              <tbody>
                {modalData &&
                  modalData.map((item, index) => {
                    return (
                      <>
                        <tr style={{ textAlign: "center" }}>
                          {/* <td></td> */}
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.typeOfFood}</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </Modal>

        <Modal
          isOpen={modelIsOpen1}
          onRequestClose={() => setModalIsOpen1(false)}
          style={customStyles}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ marginTop: "0px" }}>
              Do you want to remove this donation?
            </h1>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={handleRemove}>Remove</button>
          </div>
        </Modal>

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
