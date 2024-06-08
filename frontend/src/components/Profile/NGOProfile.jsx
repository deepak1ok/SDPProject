import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function NGOProfile() {
  const { user, setUser } = useContext(UserContext);
  const [ngoRequests, setNgoRequests] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const [requestId, setRequestId] = useState([]);
  const [ngoDetails, setNgoDetails] = useState({});

  const ngoRequest = async () => {
    const res = await axios.get(
      `http://localhost:3000/api/ngo/ngorequests/${user._id}`
    );

    setNgoRequests(res.data.data);

    console.log(res);
  };

  const aboutNgo = async () => {
    const res = await axios.get(
      `http://localhost:3000/api/ngo/aboutngo/${user._id}`
    );

    console.log(res.data.ngoData);

    setNgoDetails(res.data.ngoData);
  };

  const handleDelete = async () => {
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
    ngoRequest();
    aboutNgo();
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <div style={{ padding: "12em" }}>
        <div className='px-4 sm:px-0'>
          <h3 className='text-base font-semibold leading-7 text-gray-900'>
            NGO Information
          </h3>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Ngo Name
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.ngoname}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Address
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.address}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor State
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.state}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Phone Number
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.phonenumber}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Email
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.email}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Pin Code
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.pincode}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Total Campaigns
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.totalcampaigns}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Total Feeds
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.totalfeeds}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Total Adults
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.adults}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Total Childrens
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {ngoDetails && ngoDetails.childrens}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className='px-4 sm:px-0 my-6'>
        <h3
          className='text-base font-semibold leading-7 text-gray-900'
          style={{ textAlign: "center" }}
        >
          Requests Made by you
        </h3>
      </div>
      <div>
        <table style={modalIsOpen ? { opacity: 0.3 } : { display: "" }}>
          <thead>
            <tr
              style={{
                backgroundColor: "#24a19b",
                color: "white",
                fontSize: "15px",
              }}
            >
              <th>Item Requested</th>
              <th>Status</th>
              <th>About Donation</th>
              <th>Delete Request</th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: "#dbdb",
              color: "black",
              fontSize: "13px",
              textAlign: "center",
            }}
          ></tbody>

          <tbody
            style={{
              backgroundColor: "#dbdb",
              color: "black",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            {ngoRequests &&
              ngoRequests.map((d, i) => (
                <tr key={i}>
                  <td>
                    <button
                      onClick={() => {
                        setModalData(d.itemsRequested);
                        setModalIsOpen(true);
                      }}
                    >
                      Food Items
                    </button>
                  </td>
                  <td>{d.status}</td>
                  {/* <td><button className="btn" onClick={(e)=>click(e,d._id)} >Delete</button></td> */}
                  <td>
                    <Link
                      to={`/donationslist/aboutdonation/${d.donationId._id}`}
                    >
                      About Donation
                    </Link>
                  </td>
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

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ marginTop: "0px" }}>Donation Food Items</h1>
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
              {modalData &&
                modalData.map((item, index) => {
                  return (
                    <>
                      <tr>
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
        </Modal>

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
      </div>
    </>
  );
}

export default NGOProfile;
