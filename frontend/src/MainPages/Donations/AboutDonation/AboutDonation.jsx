import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../../components/NavBar/NavBar";
import "./aboutdonation.css";
import Map from "./Map";

import { PaperClipIcon } from "@heroicons/react/20/solid";

function AboutDonation() {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get(
      `http://localhost:3000/api/donation/aboutdonation/${id}`
    );

    setData(res.data.data);

    console.log(res.data.data);
  }

  const handleButtonClick = () => {
    alert("Successfully accepted "); // Display alert message
  };
  return (
    <>
      <NavBar></NavBar>
      {/* ---------------------------- */}

      <div style={{ padding: "12em" }}>
        <div className='px-4 sm:px-0'>
          <h3 className='text-base font-semibold leading-7 text-gray-900'>
            Donor Information
          </h3>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor name
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data.firstName} {data.lastName}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Address
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data.address}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor State
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data.state}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Phone Number
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data.phoneNumber}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Email
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data.email}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Pin Code
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {data.postalCode}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Donor Food Items
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                <pre>
                  Food items:{" "}
                  {data.items && data.items.length > 0
                    ? data.items[0].name
                    : ""}
                </pre>
                <pre>
                  Food Quantity:{" "}
                  {data.items && data.items.length > 0
                    ? data.items[0].quantity
                    : ""}
                </pre>
                <pre>
                  Type of Food:{" "}
                  {data.items && data.items.length > 0
                    ? data.items[0].typeOfFood
                    : ""}
                </pre>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <button onClick={handleButtonClick} className='donor-accept-btn'>
            Accept
          </button>
        </div>
      </div>

      {/* ------------------------------- */}

      {/* <div className='container'>
        <div>
          <h1 style={{ textAlign: "center" }}>About Donation</h1>
        </div>
        <div>
          <div>
            Donor Name: {data.firstName} {data.lastName}
          </div>
          <div>Donor Address: {data.address}</div>
          <div>Donor State: {data.state}</div>
          <div>Donor Phone Number: {data.phoneNumber}</div>
          <div>Pin Code: {data.postalCode}</div>
          <div>Donor Email: {data.email}</div>
          <div>
            Donor Name: {data.firstName} {data.lastName}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default AboutDonation;
