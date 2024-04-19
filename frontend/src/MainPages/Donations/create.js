import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Donations/Donations.css";

function Create() {
  const [inputData, setInputData] = useState({
    name: "",
    organizationname: "",
    address: "",
    phone: "",
    email: "",
    mealtype: "",
    foodname: "",
    quantity: "",
    additionaldonateitems: "",
    pickupdate: "",
    needy_people_organization: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const [needyPeopleOrgData, setNeedyPeopleOrgData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
    // Retrieve stored form data when component mounts
    const storedFormData = JSON.parse(sessionStorage.getItem("formData"));
    if (storedFormData) {
      setInputData(storedFormData);
    }
  }, []);

  useEffect(() => {
    // Store form data in sessionStorage whenever it changes
    sessionStorage.setItem("formData", JSON.stringify(inputData));
  }, [inputData]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/needypeople");
      setNeedyPeopleOrgData(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        await axios.post("http://localhost:3000/api/donate/store", inputData);
        alert("Food Donation Added Successfully!");
        navigate("/donations");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!inputData.name) {
      valid = false;
      errors.name = "Please enter your name";
    }

    if (!inputData.organizationname) {
      valid = false;
      errors.organizationname = "Please enter organization name";
    }

    if (!inputData.address) {
      valid = false;
      errors.address = "Please enter your address";
    }

    if (!inputData.phone) {
      valid = false;
      errors.phone = "Please enter your phone number";
    } else if (!/^\d{10}$/.test(inputData.phone)) {
      valid = false;
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!inputData.email) {
      valid = false;
      errors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
      valid = false;
      errors.email = "Please enter a valid email address";
    }

    if (!inputData.mealtype) {
      valid = false;
      errors.mealtype = "Please enter the meal type";
    }

    if (!inputData.foodname) {
      valid = false;
      errors.foodname = "Please enter the food donating";
    }

    if (!inputData.quantity) {
      valid = false;
      errors.quantity = "Please enter the food quantity";
    } else if (!/^\d+$/.test(inputData.quantity)) {
      valid = false;
      errors.quantity = "Please enter a valid quantity";
    }

    if (!inputData.additionaldonateitems) {
      valid = false;
      errors.additionaldonateitems = "Please enter additional donate items";
    }

    if (!inputData.pickupdate) {
      valid = false;
      errors.pickupdate = "Please enter the donate date";
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(inputData.pickupdate);

      if (selectedDate < currentDate) {
        valid = false;
        errors.pickupdate = "Donate date must be in the future";
      }
    }

    if (!inputData.needy_people_organization) {
      valid = false;
      errors.needy_people_organization =
        "Please select a needy people organization";
    }

    setErrors(errors);
    return valid;
  };

  return (
    <div className='signup_container'>
      <div className='signup_form_container'>
        <div className='left'>
          <h1>FoodShare</h1>
          <Link to='/view-needy-people/:id'>
            <button type='button' className='white_btn'>
              Needy People
            </button>
          </Link>
          <br />
          <Link to='/donations'>
            <button type='button' className='white_btn'>
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className='right'>
        <form className='form_container' onSubmit={handleSubmit}>
          <h1>Add New Food Donation</h1>
          <br />

          <label>
            <h3>Name</h3>
          </label>
          <input
            type='text'
            name='name'
            placeholder='Name of the Donator'
            className='input name red'
            value={inputData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className='error_message red'>{errors.name}</p>}

          <label>
            <h3>Organization Name</h3>
          </label>
          <input
            type='text'
            name='organizationname'
            placeholder='Organization name'
            className='input organizationname red'
            value={inputData.organizationname}
            onChange={handleInputChange}
          />
          {errors.organizationname && (
            <p className='error_message red'>{errors.organizationname}</p>
          )}

          <label>
            <h3>Address</h3>
          </label>
          <input
            type='text'
            name='address'
            placeholder='Enter your address'
            className='input address red'
            value={inputData.address}
            onChange={handleInputChange}
          />
          {errors.address && (
            <p className='error_message red'>{errors.address}</p>
          )}

          <label>
            <h3>Phone</h3>
          </label>
          <input
            type='tel'
            name='phone'
            placeholder='0112100100'
            className='input phone red'
            value={inputData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p className='error_message red'>{errors.phone}</p>}

          <label>
            <h3>Email</h3>
          </label>
          <input
            type='email'
            name='email'
            placeholder='Organization email address'
            className='input email red'
            value={inputData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className='error_message red'>{errors.email}</p>}

          <label>
            <h3>Meal Type</h3>
          </label>
          <input
            type='text'
            name='mealtype'
            placeholder='Enter the meal type'
            className='input mealtype red'
            value={inputData.mealtype}
            onChange={handleInputChange}
          />
          {errors.mealtype && (
            <p className='error_message red'>{errors.mealtype}</p>
          )}

          <label>
            <h3>Food</h3>
          </label>
          <input
            type='text'
            name='foodname'
            placeholder='Enter the food donating'
            className='input foodname red'
            value={inputData.foodname}
            onChange={handleInputChange}
          />
          {errors.foodname && (
            <p className='error_message red'>{errors.foodname}</p>
          )}

          <label>
            <h3>Quantity</h3>
          </label>
          <input
            type='number'
            name='quantity'
            placeholder='Enter food quantity'
            className='input quantity red'
            value={inputData.quantity}
            onChange={handleInputChange}
          />
          {errors.quantity && (
            <p className='error_message styles.red'>{errors.quantity}</p>
          )}

          <label>
            <h3>Additional Donate Items</h3>
          </label>
          <input
            type='text'
            name='additionaldonateitems'
            placeholder='Enter additional donate items'
            className='input additionaldonateitems red'
            value={inputData.additionaldonateitems}
            onChange={handleInputChange}
          />
          {errors.additionaldonateitems && (
            <p className='error_message red'>{errors.additionaldonateitems}</p>
          )}

          <label>
            <h3>Donate Date</h3>
          </label>
          <input
            type='date'
            name='pickupdate'
            placeholder='pickupdate'
            className='input pickupdate red'
            value={inputData.pickupdate}
            onChange={handleInputChange}
          />
          {errors.pickupdate && (
            <p className='error_message red'>{errors.pickupdate}</p>
          )}

          <label>
            <h3>Needy People Organization</h3>
          </label>
          <select
            name='needy_people_organization'
            className='input needy_people_organization red'
            value={inputData.needy_people_organization}
            onChange={handleInputChange}
          >
            <option value=''>Select Needy People Organization</option>
            {Array.isArray(needyPeopleOrgData) &&
              needyPeopleOrgData.map((org) => (
                <option key={org._id} value={org._id}>
                  {org.organization_name}
                </option>
              ))}
          </select>
          {errors.needy_people_organization && (
            <p className='error_message red'>
              {errors.needy_people_organization}
            </p>
          )}

          <button type='submit' className='green_btn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
