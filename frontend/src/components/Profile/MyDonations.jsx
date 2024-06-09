import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function MyDonations() {
  const { user } = useContext(UserContext);
  const [donations, setDonations] = useState([]);

  console.log(user);

  const [requestId, setRequestId] = useState({});

  const handleDelete = async () => {
    const res = await axios.post(
      `http://localhost:3000/api/donation/deletedonation/${requestId}`
    );
    console.log(res);

    window.location.reload();
  };

  useEffect(() => {
    const fetchDonations = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/donation/${user._id}`
      );

      console.log(res.data.data);

      setDonations(res.data.data);
    };
    fetchDonations();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
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

  return (
    <div>
      <NavBar></NavBar>
      <div style={{ padding: "12em" }}>
        <div className='px-4 sm:px-0'>
          <h3 className='text-base font-semibold leading-7 text-gray-900'>
            My Profile
          </h3>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Name:
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {user && user.fname} {user && user.lname}
              </dd>
            </div>
          </dl>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Email:
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {user && user.email}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: "30px" }}>My Donations</div>
      <table style={modalIsOpen ? { opacity: 0.3 } : { display: "" }}>
        <thead>
          <tr>
            {/* <th></th> */}
            <th>Donation Post Date</th>
            <th>Donation Status</th>
            <th>View Requests</th>
            <th>Food Items</th>
            <th>Delete </th>
          </tr>
        </thead>
        <tbody>
          {donations &&
            donations.map((item, index) => {
              return (
                <>
                  <tr>
                    {/* <td></td> */}
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td>
                      {item.donationStatus === "false"
                        ? "Not Donated"
                        : "Donated"}
                    </td>
                    <td>
                      <Link to={`/profile/manage/${item._id}`}>Manage</Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setModalData(item.items);
                          setModalIsOpen(true);
                        }}
                      >
                        Food Items
                      </button>
                    </td>
                    <td>
                      <label
                        htmlFor='my_modal_7'
                        className='btn'
                        onClick={(e) => setRequestId(item._id)}
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>

      <input type='checkbox' id='my_modal_7' className='modal-toggle' />
      <div className='modal' role='dialog'>
        <div className='modal-box' style={{ backgroundColor: "#ffd489" }}>
          <h3 className='text-lg font-bold'>Confirmation!</h3>
          <p className='py-4'>Do you want to delete this donation?</p>
          <button
            onClick={handleDelete}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              padding: "4px 8px",
            }}
          >
            Delete
          </button>
        </div>
        <label className='modal-backdrop' htmlFor='my_modal_7'>
          Close
        </label>
      </div>

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
    </div>
  );
}

export default MyDonations;
