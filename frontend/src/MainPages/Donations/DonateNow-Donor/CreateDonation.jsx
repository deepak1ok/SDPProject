// import React, { useContext, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import Map from "./Location.js";
// import { UserContext } from "../../../Context/UserContext.js";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import NavBar from "../../../components/NavBar/NavBar.jsx";

// function CreateDonation() {
//   const formArray = ["Personal", "Donation", "Location", "Confirm"];

//   const navigate = useNavigate();
//   const [foodItem, setFoodItem] = useState([]);
//   const [formNo, setFormNo] = useState(1);
//   const { user, setUser } = useContext(UserContext);

//   const [state, setState] = useState({
//     email: "",
//     phonenumber: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     items: [],
//     lat: "",
//     lng: "",
//     donationStatus: false,
//     donorId: user._id,
//     date: new Date(),
//   });

//   const [name, setName] = useState("");
//   const [typeOfFood, setTypeOfFood] = useState("raw");
//   const [quantity, setQuantity] = useState(0);

//   const handleClick = (e) => {
//     if (name === "") {
//       toast.error("Please fillup the food item");
//       return;
//     }
//     setFoodItem([
//       ...foodItem,
//       {
//         name: name,
//         quantity: quantity,
//         typeOfFood: typeOfFood,
//       },
//     ]);

//     console.log(foodItem);
//   };

//   const inputHandle = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const next = () => {
//     if (
//       formNo === 1 &&
//       state.email &&
//       state.phonenumber &&
//       state.address &&
//       state.city &&
//       state.state &&
//       state.pincode
//     ) {
//       setFormNo(formNo + 1);
//     } else if (formNo === 2 && foodItem.length !== 0) {
//       setState({ ...state, items: foodItem });
//       setFormNo(formNo + 1);
//     } else if (formNo === 3 && state.lat && state.lng) {
//       console.log(state);

//       setFormNo(formNo + 1);
//     } else if (formNo === 4) {
//       console.log(state);

//       setFormNo(formNo + 1);
//     } else {
//       toast.error("Please fillup all input field");
//     }
//   };
//   const pre = () => {
//     setFormNo(formNo - 1);
//   };
//   const finalSubmit = async () => {
//     const res = await axios.post(
//       "http://localhost:3000/api/donation/request",
//       state
//     );

//     navigate("/");
//   };
//   return (
//     <>
//       <NavBar></NavBar>
//       <div className='w-screen h-screen flex justify-center items-center'>
//         <ToastContainer />
//         <div
//           className='card w-[370px] rounded-md shadow-md  p-5'
//           style={{ height: "500px", width: "700px", backgroundColor: "white" }}
//         >
//           <div className='mb-8 flex justify-center items-center'>
//             {formArray.map((v, i) => (
//               <>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <div
//                     className={`w-[35px] my-3 text-white rounded-full ${
//                       formNo - 1 === i ||
//                       formNo - 1 === i + 1 ||
//                       formNo === formArray.length
//                         ? "bg-blue-500"
//                         : "bg-slate-400"
//                     } h-[35px] flex justify-center items-center`}
//                   >
//                     {i + 1}
//                   </div>
//                   <div>{v}</div>
//                 </div>

//                 {i !== formArray.length - 1 && (
//                   <>
//                     <div
//                       className={`w-[85px] h-[2px] ${
//                         formNo === i + 2 || formNo === formArray.length
//                           ? "bg-blue-500"
//                           : "bg-slate-400"
//                       }`}
//                     ></div>
//                   </>
//                 )}
//               </>
//             ))}
//           </div>
//           {formNo === 1 && (
//             <>
//               <div className='flex flex-row m-auto'>
//                 <div className='flex flex-col mb-2'>
//                   <label htmlFor='name'>Email</label>
//                   <input
//                     value={state.name}
//                     onChange={inputHandle}
//                     className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
//                     type='text'
//                     name='email'
//                     placeholder='email'
//                     id='name'
//                     style={{ width: "200px" }}
//                   />
//                 </div>
//                 <div className='flex flex-col mb-2'>
//                   <label htmlFor='dept'>Phone Number</label>
//                   <input
//                     value={state.phonenumber}
//                     onChange={inputHandle}
//                     className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
//                     type='number'
//                     name='phonenumber'
//                     placeholder='phonenumber'
//                     id='dept'
//                     style={{ width: "200px" }}
//                     max={999999999}
//                     min={6000000000}
//                   />
//                 </div>
//               </div>
//               <div className='flex flex-row m-auto'>
//                 <div className='flex flex-col mb-2'>
//                   <label htmlFor='batch'>State</label>
//                   <input
//                     value={state.state}
//                     onChange={inputHandle}
//                     className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
//                     type='text'
//                     name='state'
//                     placeholder='state'
//                     style={{ width: "200px" }}
//                   />
//                 </div>
//                 <div className='flex flex-col mb-2'>
//                   <label htmlFor='batch'>City</label>
//                   <input
//                     value={state.city}
//                     onChange={inputHandle}
//                     className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
//                     type='text'
//                     name='city'
//                     placeholder='city'
//                     style={{ width: "200px" }}
//                   />
//                 </div>
//               </div>

//               <div className='flex flex-row m-auto'>
//                 <div className='flex flex-col mb-2'>
//                   <label htmlFor='name'>Address</label>
//                   <input
//                     value={state.address}
//                     onChange={inputHandle}
//                     className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
//                     type='text'
//                     name='address'
//                     placeholder='address'
//                     id='name'
//                     style={{ width: "200px" }}
//                   />
//                 </div>
//                 <div className='flex flex-col mb-2'>
//                   <label htmlFor='dept'>Pincode</label>
//                   <input
//                     value={state.pincode}
//                     onChange={inputHandle}
//                     className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
//                     type='text'
//                     name='pincode'
//                     placeholder='pincode'
//                     id='dept'
//                     style={{ width: "200px" }}
//                   />
//                 </div>
//               </div>

//               <div className='mt-4 flex justify-center items-center'>
//                 <button
//                   onClick={next}
//                   className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}

//           {formNo === 2 && (
//             <>
//               <div className=' grid grid-cols-3 gap-4'>
//                 <div style={{ marginTop: "40px" }}>
//                   <label
//                     for='FoodItem'
//                     class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
//                   >
//                     Food Item
//                   </label>
//                   <div>
//                     <input
//                       type='text'
//                       name='name'
//                       id='FoodItem'
//                       autocomplete='given-name'
//                       class='block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-42'
//                       onChange={(e) => setName(e.target.value)}
//                       value={name}
//                     />
//                   </div>
//                 </div>

//                 <div style={{ marginTop: "40px" }}>
//                   <label
//                     for='number'
//                     class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
//                   >
//                     Quantity
//                   </label>
//                   <div>
//                     <input
//                       id='Quantity'
//                       name='quantity'
//                       type='number'
//                       autocomplete='number'
//                       class='block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-42'
//                       min='1'
//                       max='5'
//                       onChange={(e) => setQuantity(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 <div style={{ marginTop: "40px" }}>
//                   <label
//                     for='number'
//                     class='block text-sm font-medium leading-6 text-gray-900 text-2xl'
//                   >
//                     Type of Food
//                   </label>
//                   <div>
//                     <select
//                       name='typeOfFood'
//                       id='typeOfFood'
//                       onChange={(e) => setTypeOfFood(e.target.value)}
//                       className='block rounded-md bg-white my-2 border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 '
//                     >
//                       <option value='raw'>Raw Food</option>
//                       <option value='cooked'>Cooked Food</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div style={{ marginTop: "60px" }}>
//                   <button
//                     style={{
//                       border: "1px solid black",
//                       padding: "3px 25px",
//                       backgroundColor: "brown",
//                       borderRadius: "6px",
//                       color: "aliceblue",
//                     }}
//                     onClick={handleClick}
//                   >
//                     Add
//                   </button>
//                 </div>

//                 <div className='mt-4 flex justify-center items-center'>
//                   <button
//                     onClick={next}
//                     className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   marginTop: "10px",
//                   fontSize: "15px",
//                   textAlign: "center",
//                 }}
//               >
//                 List of Items
//               </div>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Food Items</th>
//                     <th>Quantity</th>
//                     <th>Type of Food</th>
//                     <th>Remove</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {foodItem.map((item, index) => {
//                     return (
//                       <>
//                         <tr key={index}>
//                           {/* <td></td> */}
//                           <td>{item.name}</td>
//                           <td>{item.quantity}</td>
//                           <td>{item.typeOfFood}</td>
//                           <td>
//                             <button >
//                               <FontAwesomeIcon
//                                 icon={faTimes}
//                                 size='lg'
//                                 color='red'
//                                 cursor='pointer'
//                               />
//                             </button>
//                           </td>
//                         </tr>

//                       </>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </>
//           )}

//           {formNo === 3 && (
//             <div>
//               <Map state={state} setState={setState}></Map>

//               <button
//                 onClick={next}
//                 className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'
//               >
//                 Next
//               </button>
//             </div>
//           )}
//           {formNo === 4 && (
//             <div>
//               <div
//                 style={{
//                   textAlign: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     marginTop: "4em",
//                     color: "#00a200",
//                     fontSize: "large",
//                   }}
//                 >
//                   Thank you for your donation! Click Submit to confirm.
//                 </div>
//               </div>

//               <button
//                 onClick={finalSubmit}
//                 className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'
//               >
//                 Submit
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default CreateDonation;

import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Map from "./Location.js";
import { UserContext } from "../../../Context/UserContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar.jsx";
import "./CreateDonation.css"; // Import the CSS file

function CreateDonation() {
  const formArray = ["Personal", "Donation", "Location", "Confirm"];

  const navigate = useNavigate();
  const [foodItem, setFoodItem] = useState([]);
  const [formNo, setFormNo] = useState(1);
  const { user, setUser } = useContext(UserContext);

  const [state, setState] = useState({
    email: user.email,
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    items: [],
    lat: "",
    lng: "",
    donationStatus: false,
    donorId: user._id,
    date: new Date(),
  });

  const [name, setName] = useState("");
  const [typeOfFood, setTypeOfFood] = useState("raw");
  const [quantity, setQuantity] = useState(0);

  const handleClick = (e) => {
    if (name === "") {
      toast.error("Please fill up the food item");
      return;
    }
    setFoodItem([
      ...foodItem,
      {
        name: name,
        quantity: quantity,
        typeOfFood: typeOfFood,
      },
    ]);
    setName("");
    setQuantity(0);
    setTypeOfFood("raw");
  };

  const handleDelete = (index) => {
    setFoodItem(foodItem.filter((_, i) => i !== index));
  };

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (
      formNo === 1 &&
      state.email &&
      state.phonenumber &&
      state.address &&
      state.city &&
      state.state &&
      state.pincode
    ) {
      setFormNo(formNo + 1);
    } else if (formNo === 2 && foodItem.length !== 0) {
      setState({ ...state, items: foodItem });
      setFormNo(formNo + 1);
    } else if (formNo === 3 && state.lat && state.lng) {
      console.log(state);
      setFormNo(formNo + 1);
    } else if (formNo === 4) {
      console.log(state);
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fill up all input fields");
    }
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  const finalSubmit = async () => {
    const res = await axios.post(
      "http://localhost:3000/api/donation/request",
      state
    );
    navigate("/");
  };

  return (
    <>
      <NavBar></NavBar>
      <div className='container_'>
        <ToastContainer className='toast-container_' />
        <div className='card_'>
          <div className='form-steps_'>
            {formArray.map((v, i) => (
              <React.Fragment key={i}>
                <div className='form-step_'>
                  <div
                    className={`step-number_ ${
                      formNo - 1 === i ||
                      formNo - 1 === i + 1 ||
                      formNo === formArray.length
                        ? "active"
                        : ""
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div>{v}</div>
                </div>

                {i !== formArray.length - 1 && (
                  <div
                    className={`step-connector_ ${
                      formNo === i + 2 || formNo === formArray.length
                        ? "active"
                        : ""
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
          {formNo === 1 && (
            <>
              <div className='form-grid_'>
                <div className='form-group_'>
                  <label htmlFor='email'>Email</label>
                  <input
                    value={state.email}
                    onChange={inputHandle}
                    type='text'
                    name='email'
                    placeholder='Email'
                    id='email'
                    disabled
                  />
                </div>
                <div className='form-group_'>
                  <label htmlFor='phonenumber'>Phone Number</label>
                  <input
                    value={state.phonenumber}
                    onChange={inputHandle}
                    type='number'
                    name='phonenumber'
                    placeholder='Phone Number'
                    id='phonenumber'
                  />
                </div>
                <div className='form-group_'>
                  <label htmlFor='state'>State</label>
                  <input
                    value={state.state}
                    onChange={inputHandle}
                    type='text'
                    name='state'
                    placeholder='State'
                    id='state'
                  />
                </div>
                <div className='form-group_'>
                  <label htmlFor='city'>City</label>
                  <input
                    value={state.city}
                    onChange={inputHandle}
                    type='text'
                    name='city'
                    placeholder='City'
                    id='city'
                  />
                </div>
                <div className='form-group_'>
                  <label htmlFor='address'>Address</label>
                  <input
                    value={state.address}
                    onChange={inputHandle}
                    type='text'
                    name='address'
                    placeholder='Address'
                    id='address'
                  />
                </div>
                <div className='form-group_'>
                  <label htmlFor='pincode'>Pincode</label>
                  <input
                    value={state.pincode}
                    onChange={inputHandle}
                    type='text'
                    name='pincode'
                    placeholder='Pincode'
                    id='pincode'
                  />
                </div>
              </div>
              <div className='button-group_'>
                <button onClick={next} className='button_ next-button_'>
                  Next
                </button>
              </div>
            </>
          )}

          {formNo === 2 && (
            <>
              <div className='form-grid_'>
                <div className='form-group_'>
                  <label htmlFor='FoodItem'>Food Item</label>
                  <input
                    type='text'
                    name='name'
                    id='FoodItem'
                    autoComplete='given-name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className='form-group_'>
                  <label htmlFor='Quantity'>Quantity</label>
                  <input
                    id='Quantity'
                    name='quantity'
                    type='number'
                    autoComplete='number'
                    min='1'
                    max='5'
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                  />
                </div>
                <div className='form-group_'>
                  <label htmlFor='typeOfFood'>Type of Food</label>
                  <select
                    name='typeOfFood'
                    id='typeOfFood'
                    onChange={(e) => setTypeOfFood(e.target.value)}
                    value={typeOfFood}
                  >
                    <option value='raw'>Raw Food</option>
                    <option value='cooked'>Cooked Food</option>
                  </select>
                </div>
                <div className='form-group_'>
                  <button onClick={handleClick} className='button_ add-button_'>
                    Add
                  </button>
                </div>
              </div>
              <div className='item-list_'>
                <h3>List of Items</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Food Items</th>
                      <th>Quantity</th>
                      <th>Type of Food</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodItem.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.typeOfFood}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(index)}
                            className='delete-button_'
                          >
                            <FontAwesomeIcon
                              icon={faTimes}
                              size='lg'
                              color='red'
                              cursor='pointer'
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='button-group_'>
                <button onClick={next} className='button_ next-button_'>
                  Next
                </button>
              </div>
            </>
          )}

          {formNo === 3 && (
            <div>
              <Map state={state} setState={setState}></Map>

              <div className='button-group_'>
                <button onClick={next} className='button_ next-button_'>
                  Next
                </button>
              </div>
            </div>
          )}

          {formNo === 4 && (
            <div className='confirmation_'>
              <div className='confirmation-message_'>
                <h3>Thank you for your donation!</h3>
                <p>Click Submit to confirm.</p>
              </div>
              <div className='button-group_'>
                <button
                  onClick={finalSubmit}
                  className='button_ submit-button_'
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


export default CreateDonation;
