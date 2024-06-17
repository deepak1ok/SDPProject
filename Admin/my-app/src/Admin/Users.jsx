import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import axios from "axios";
import cross_icon from "../assets/cross_icon.png";
import "./User.css";
import Modal from "react-modal";

function Users() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [users, setUsers] = useState([]);

  const [modalData, setModalData] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [requestId,setRequestId]=useState();
  
  const handleClick=async()=>
    {
      if(!requestId)
        {
          return;
        }

         console.log(requestId)
      const res = await axios.post(
        `http://localhost:3000/api/admin/removeuser/${requestId}`
      );
      
      console.log(res);
  
      window.location.reload();
    }

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

  const handleDelete = async () => {
    const res = await axios.post(
      `http://localhost:3000/api/donation/deletedonation/${requestId}`
    );
    console.log(res);

    window.location.reload();
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const allUsers = async () => {
    const res = await axios.get("http://localhost:3000/api/admin/allusers");

    setUsers(res.data.data);
  };

  const removeUser = async (e, id) => {
    const res = await axios.post("http://localhost:3000/api/admin/removeuser", {
      id: id,
    });

    console.log(res);
  };

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <SideBar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        {/* <div style={{ width: "100%", border: "2px solid black" }}>
          <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead
                class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <tr>
                  <th scope='col' class='px-6 py-10'>
                    Product name
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Color
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Category
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Price
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                    scope='row'
                    class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class='px-6 py-4'>Silver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                  <td class='px-6 py-4'>
                    <a
                      href='#'
                      class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                    scope='row'
                    class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    Microsoft Surface Pro
                  </th>
                  <td class='px-6 py-4'>White</td>
                  <td class='px-6 py-4'>Laptop PC</td>
                  <td class='px-6 py-4'>$1999</td>
                  <td class='px-6 py-4'>
                    <a
                      href='#'
                      class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class='bg-white dark:bg-gray-800'>
                  <th
                    scope='row'
                    class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    Magic Mouse 2
                  </th>
                  <td class='px-6 py-4'>Black</td>
                  <td class='px-6 py-4'>Accessories</td>
                  <td class='px-6 py-4'>$99</td>
                  <td class='px-6 py-4'>
                    <a
                      href='#'
                      class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

        <div className='listuser'>
          <h1>All User List</h1>

          <div className='listuser-format-main'>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Email</p>
            <p>Phone Number</p>
            <p>Remove</p>
          </div>
          <div className='listuser-alluser'>
            <hr />
            {users &&
              users.map((d, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className='listuser-format-main listuser-format'
                    >
                      <p>{d.fname}</p>
                      <p>{d.lname}</p>
                      <p>{d.email}</p>
                      <p>{d.phonenumber}</p>
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
                      </button>
                     
                    </div>
                    <hr />
                  </>
                );
              })}
          </div>
        </div>

      
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ marginTop: "0px" }}>Do you want to remove this user?</h1>
        </div>
        <div style={{textAlign:'center'}}>
          <button onClick={handleClick}>Remove</button>
        </div>
      </Modal>
    </>
  );
}

export default Users;
