import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import axios from "axios";

function NGO() {
  const [id, setId] = useState("");
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

  const handleRemove = async (e, id) => {
    const res = await axios.post("http://localhost:3000/api/admin/removengo", {
      id: id,
    });

    console.log(res);

    window.location.reload();
  };

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
        <div style={{ width: "100%", border: "2px solid black" }}>
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
                <th>Pincode</th>
                <th>About</th>
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
                  <td>{d.pincode}</td>
                  <td>About</td>
                  <td>
                    <label
                      htmlFor='my_modal_7'
                      className='btn'
                      onClick={(e) => click(e, d._id)}
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <input type='checkbox' id='my_modal_7' className='modal-toggle' />
        <div className='modal' role='dialog'>
          <div className='modal-box' style={{ backgroundColor: "#ffd489" }}>
            <h3 className='text-lg font-bold'>Hello!</h3>
            <p className='py-4'>Do you want to delete this request</p>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                padding: "4px 8px",
              }}
              onClick={(e) => handleRemove(e, id)}
            >
              Delete
            </button>
          </div>
          <label className='modal-backdrop' htmlFor='my_modal_7'>
            Close
          </label>
        </div>
      </div>
    </>
  );
}

export default NGO;
