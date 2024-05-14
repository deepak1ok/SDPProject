import React from "react";
import { useContext } from "react";
import { StepperContext } from "./Context/StepperContext";
import "../Donations/Personal.css";
function Personal() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    console.log(userData);
  };

  return (
    <div className='outer'>
      <div class='border-b border-gray-900/10 pb-12'>
        <div class='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div class='sm:col-span-3'>
            <label
              for='firstName'
              class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
            >
              First name
            </label>
            <div class='mt-2'>
              <input
                type='text'
                name='firstName'
                id='firstName'
                autocomplete='given-name'
                class='block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-22'
                onChange={handleChange}
                value={userData["firstName"]}
              />
            </div>
          </div>

          <div class='sm:col-span-3'>
            <label
              for='lastName'
              class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
            >
              Last name
            </label>
            <div class='mt-2'>
              <input
                type='text'
                name='lastName'
                id='lastName'
                autocomplete='family-name'
                class='block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  w-22'
                onChange={handleChange}
                value={userData["lastName"]}
              />
            </div>
          </div>

          <div class='sm:col-span-4'>
            <label
              for='email'
              class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
            >
              Email address
            </label>
            <div class='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autocomplete='email'
                class='block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-22'
                onChange={handleChange}
                value={userData["email"]}
              />
            </div>
          </div>

          <div class='sm:col-span-4'>
            <label
              for='phoneNumber'
              class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
            >
              Phone Number
            </label>
            <div class='mt-2'>
              <input
                id='phoneNumber'
                name='phoneNumber'
                type='number'
                autocomplete='number'
                class='block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-22'
                onChange={handleChange}
                value={userData["phoneNumber"]}
              />
            </div>
          </div>
          <div class='col-span-full'>
            <label
              for='address'
              class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
            >
              Street address
            </label>
            <div class='mt-2'>
              <input
                type='text'
                name='address'
                id='saddress'
                autocomplete='street-address'
                class='block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-22'
                onChange={handleChange}
                value={userData["address"]}
              />
            </div>
          </div>

          <div class='sm:col-span-2 sm:col-start-1'>
            <label
              for='city'
              class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
            >
              City
            </label>
            <div class='mt-2'>
              <input
                type='text'
                name='city'
                id='city'
                autocomplete='address-level2'
                class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                onChange={handleChange}
                value={userData["city"]}
              />
            </div>
          </div>

          <div class='sm:col-span-2'>
            <label
              for='state'
              class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
            >
              State / Province
            </label>
            <div class='mt-2'>
              <input
                type='text'
                name='state'
                id='state'
                autocomplete='address-level1'
                class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                onChange={handleChange}
                value={userData["state"]}
              />
            </div>
          </div>

          <div class='sm:col-span-2'>
            <label
              for='postalCode'
              class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
            >
              ZIP / Postal code
            </label>
            <div class='mt-2'>
              <input
                type='text'
                name='postalCode'
                id='postalCode'
                autocomplete='postal-code'
                class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                onChange={handleChange}
                value={userData["postalCode"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
