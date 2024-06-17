import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import axios from "axios";
import Modal from "react-modal";
import cross_icon from "../assets/cross_icon.png";

function NGO() {
  const [id, setId] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalData, setModalData] = useState(null);

  const [requestId,setRequestId]=useState();

  const [modalIsOpen1, setModalIsOpen1] = useState(false);

  const [requestId1,setRequestId1]=useState();


  useEffect(() => {
    allNgo();
  }, []);

  const allNgo = async () => {
    const res = await axios.get("http://localhost:3000/api/admin/allngo");
    setNgoInfo(res.data.result);

    console.log(res.data.result);
  };

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [ngoInfo, setNgoInfo] = useState([]);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

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


  const handleClick=async()=>
    {
      if(!requestId)
        {
          return;
        }

         console.log(requestId)
      const res = await axios.post(
        `http://localhost:3000/api/admin/removengo/${requestId}`
      );
      
      console.log(res);
  
      window.location.reload();
    }

  const click = (e, id) => {
    setId(id);
  };
  return (
    <>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <SideBar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <div style={{}}>
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
                <th>Name of NGO</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>City</th>
                <th>State</th>
                {/* <th>Pincode</th> */}
                <th>Remove NGO</th>
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
              {ngoInfo.map((d, i) => (
                <tr key={i}>
                  <td>{d.ngoname}</td>
                  <td>{d.email}</td>
                  <td>{d.email}</td>
                  <td>{d.city}</td>
                  <td>{d.state}</td>
                  {/* <td>{d.pincode}</td> */}
                  
                  
                  <td>
                  <button
                        onClick={() => {
                          setModalIsOpen(true);
                          setRequestId(d._id);
                        }}

                        style={{ backgroundColor: "transparent", border: "none" }}
                      >
                         <img
                        src={cross_icon}
                        alt=''
                        className='listuser-remove-icon'
                      />
                      </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ marginTop: "0px" }}>Do you want to remove this ngo?</h1>
        </div>
        <div style={{textAlign:'center'}} >
          <button onClick={handleClick}>Remove</button>
        </div>
      </Modal>

      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={() => setModalIsOpen1(false)}
        style={customStyles}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ marginTop: "0px" }}>Food Items</h1>
        </div>
        <div style={{textAlign:'center'}} >
          <button onClick={handleClick}>Remove</button>
        </div>
      </Modal>
      </div>
    </>
  );
}

export default NGO;
