import React, { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageRequest() {
  const { id } = useParams();

  const [donationRequests, setDonationRequests] = useState([]);
  const [requestId, setRequestId] = useState([]);

  const getRequests = async () => {
    console.log(id);
    const request = await axios.get(
      `http://localhost:3000/api/donation/donationrequests/${id}`
    );

    console.log(request.data);

    setDonationRequests(request.data.data);
  };

  const handleDelete = async (e, id) => {
    console.log(requestId);

    const request = await axios.post(
      `http://localhost:3000/api/donation/deleterequest/${requestId}`
    );

    console.log(request);

    window.location.reload();
  };

  const click = (e, id) => {
    setRequestId(id);
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <>
      <NavBar></NavBar>

      <div>
        <h1 style={{ textAlign: "center", margin: "60px" }}>
          Manage Requests for this Donation
        </h1>
      </div>

      <div>
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
              <th>NGO Name</th>
              <th>NGO Email</th>
              <th>Phone Number</th>
              <th>Pickup Time</th>
              <th>Status</th>
              <th>Details</th>
              <th>Delete Request</th>
            </tr>
          </thead>
          {donationRequests.length !== 0 && (
            <tbody
              style={{
                backgroundColor: "#dbdb",
                color: "black",
                fontSize: "13px",
                textAlign: "center",
              }}
            >
              {donationRequests &&
                donationRequests.map((d, i) => (
                  <tr key={i}>
                    <td>{d.ngoId.ngoname}</td>
                    <td>{d.ngoId.email}</td>
                    <td>{d.ngoId.phonenumber}</td>
                    <td>
                      {new Date(d.pickupTime).toLocaleDateString()}-
                      {new Date(d.pickupTime).toLocaleTimeString()}
                    </td>
                    <td>{d.status}</td>
                    <td>
                      <Link to={`/aboutrequest/${d._id}`}>Details</Link>
                    </td>
                    {/* <td><button className="btn" onClick={(e)=>click(e,d._id)} >Delete</button></td> */}
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
          )}
        </table>

        <div>
          {donationRequests.length === 0 && (
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              No Request Availible
            </div>
          )}
        </div>
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
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <label className='modal-backdrop' htmlFor='my_modal_7'>
          Close
        </label>
      </div>
    </>
  );
}

export default ManageRequest;
