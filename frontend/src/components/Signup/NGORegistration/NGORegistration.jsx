import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Map from "./Location.js";
import { UserContext } from "../../../Context/UserContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBar.jsx";
import "./NGORegistration.css";

function NGORegistration() {
  const formArray = [
    "Email",
    "OTP",
    "Password",
    "NGO Info",
    "Location",
    "Confirm",
  ];

  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const [state, setState] = useState({
    email: "",
    ngoname: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    lat: "",
    lng: "",
    description: "",
    childrens: "",
    adults: "",
    totalfeeds: "",
    numberofvolunteers: "",
    totalcampaigns: "",
    password: "",
  });

  const submit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/ngo/create",
        state
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    navigate("/login", {
      state: {
        role: "ngo",
      },
    });
  };

  const handleOtp = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const [formNo, setFormNo] = useState(1);

  const emailCheck = async () => {
    //console.log(state.email);
    const res = await axios.post("http://localhost:3000/api/ngo/checkEmail", {
      email: state.email,
    });
    if (!res.data.status) {
      alert("Email already exists");
      navigate("/login", { state: { role: "ngo" } });
    } else {
      alert("Email doesnt exist");
      setFormNo(formNo + 1);
    }
  };

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = async () => {
    if (formNo === 1 && state.email) {
      emailCheck();

      const url = "http://localhost:3000/api/users/send-otp";
      const res = await axios.post(url, { email: state.email, role: "ngo" });

      setFormNo(formNo + 1);
    } else if (
      formNo === 2 &&
      otp.first &&
      otp.second &&
      otp.third &&
      otp.fourth
    ) {
      try {
        let tempOtp = otp.first + otp.second + otp.third + otp.fourth;

        const url = "http://localhost:3000/api/users/verify-otp";
        const res = await axios.post(url, {
          tempOtp: tempOtp,
          email: state.email,
          role: "ngo",
        });

        setFormNo(formNo + 1);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          toast.error("Invalid OTP");
        }
      }
    } else if (formNo == 3 && state.password) {
      setFormNo(formNo + 1);
    } else if (
      formNo === 4 &&
      state.ngoname &&
      state.address &&
      state.city &&
      state.state &&
      state.pincode &&
      state.description &&
      state.childrens &&
      state.adults &&
      state.totalfeeds &&
      state.numberofvolunteers
    ) {
      setFormNo(formNo + 1);
    } else if (formNo === 5 && state.lat && state.lng) {
      console.log(state);

      submit();

      setFormNo(formNo + 1);
    } else if (formNo === 6) {
      console.log(state);

      setFormNo(formNo + 1);
    } else {
      toast.error("Please fillup all input field");
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  return (
    <>
      <NavBar></NavBar>
      <div className=' flex justify-center items-center container_'>
        <ToastContainer className='toast-container_' />
        <div className='card_'>
          <div className='flex justify-center items-center'>
            {formArray.map((v, i) => (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className={`w-[35px] text-white rounded-full ${
                      formNo - 1 === i ||
                      formNo > i ||
                      formNo === formArray.length
                        ? "bg-blue-500"
                        : "bg-slate-400"
                    } h-[35px] flex justify-center items-center`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div
                      style={{
                        margin: "5px",
                        width: "60px",
                        textAlign: "center",
                      }}
                    >
                      {v}
                    </div>
                  </div>
                </div>

                {i !== formArray.length - 1 && (
                  <>
                    <div
                      className={`w-[85px] h-[2px] ${
                        formNo === i + 2 || formNo === formArray.length
                          ? "bg-blue-500"
                          : "bg-slate-400"
                      }`}
                    ></div>
                  </>
                )}
              </>
            ))}
          </div>
          {formNo === 1 && (
            <>
              <div className='form_ form1_email'>
                <div className='flex flex-col mb-2'>
                  <label htmlFor='name'>Email</label>
                  <input
                    value={state.email}
                    onChange={inputHandle}
                    className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                    type='text'
                    name='email'
                    placeholder='email'
                    id='name'
                    style={{ width: "200px" }}
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
              <div class='form_otp form_'>
                <div class='container mx-auto'>
                  <div class='max-w-sm mx-auto md:max-w-lg'>
                    <div class='w-full'>
                      <div class='bg-white py-3 rounded text-center'>
                        <h1 class='text-4xl font-bold'>OTP Verification</h1>
                        <div class='flex flex-col mt-4'>
                          <span>Enter the OTP you received at</span>
                          <span class='font-bold'></span>
                        </div>

                        <div
                          id='otp'
                          class='flex flex-row justify-center text-center px-2 mt-5'
                        >
                          <input
                            class='m-2 border h-20 w-20 text-center form-control rounded'
                            type='text'
                            id='first'
                            name='first'
                            maxlength='1'
                            onChange={handleOtp}
                          />
                          <input
                            class='m-2 border h-20 w-20 text-center form-control rounded'
                            type='text'
                            id='second'
                            name='second'
                            maxlength='1'
                            onChange={handleOtp}
                          />
                          <input
                            class='m-2 border h-20 w-20 text-center form-control rounded'
                            type='text'
                            id='third'
                            name='third'
                            maxlength='1'
                            onChange={handleOtp}
                          />
                          <input
                            class='m-2 border h-20 w-20 text-center form-control rounded'
                            type='text'
                            id='fourth'
                            name='fourth'
                            maxlength='1'
                            onChange={handleOtp}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='button-group_'>
                      <button onClick={next} className='button_ next-button_'>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </>
          )}

          {formNo === 3 && (
            <>
              <div style={{ fontSize: "20px", margin: "2em 10px 10px 10px" }}>
                Set your Password
              </div>
              <div className='flex flex-row form_'>
                <div className='flex flex-col mb-2'>
                  <label htmlFor='name'>Email</label>
                  <input
                    value={state.email}
                    onChange={inputHandle}
                    className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                    type='text'
                    name='email'
                    placeholder='email'
                    id='email'
                    style={{ width: "200px" }}
                    disabled
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label htmlFor='name'>Password</label>
                  <input
                    value={state.password}
                    onChange={inputHandle}
                    className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                    type='text'
                    name='password'
                    id='password'
                    style={{ width: "200px" }}
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

          {formNo === 4 && (
            <>
              <div className='form_'>
                <div className='flex flex-row '>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='name'>Name of NGO</label>
                    <input
                      value={state.ngoname}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='ngoname'
                      id='name'
                      style={{ width: "200px" }}
                    />
                  </div>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='dept'>Phone Number</label>
                    <input
                      value={state.phonenumber}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='number'
                      name='phonenumber'
                      id='dept'
                      style={{ width: "200px" }}
                    />
                  </div>
                </div>

                <div className='flex flex-row'>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='batch'>State</label>
                    <input
                      value={state.state}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='state'
                      style={{ width: "200px" }}
                    />
                  </div>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='batch'>City</label>
                    <input
                      value={state.city}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='city'
                      style={{ width: "200px" }}
                    />
                  </div>
                </div>

                <div className='flex flex-row'>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='name'>Address</label>
                    <input
                      value={state.address}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='address'
                      id='name'
                      style={{ width: "200px" }}
                    />
                  </div>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='dept'>Pincode</label>
                    <input
                      value={state.pincode}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='pincode'
                      id='dept'
                      style={{ width: "200px" }}
                    />
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='name'>Number of Volunteers</label>
                    <input
                      value={state.numberofvolunteers}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='numberofvolunteers'
                      id='name'
                      style={{ width: "200px" }}
                    />
                  </div>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='name'>Total Campaigns</label>
                    <input
                      value={state.totalcampaigns}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='totalcampaigns'
                      id='name'
                      style={{ width: "200px" }}
                    />
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='dept'>Total Feeds</label>
                    <input
                      value={state.totalfeeds}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='totalfeeds'
                      id='dept'
                      style={{ width: "200px" }}
                    />
                  </div>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='name'>Total Adults</label>
                    <input
                      value={state.adults}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='adults'
                      id='name'
                      style={{ width: "200px" }}
                    />
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='dept'>Total Childrens</label>
                    <input
                      value={state.childrens}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='childrens'
                      id='dept'
                      style={{ width: "200px" }}
                    />
                  </div>
                  <div className='flex flex-col flex-col_'>
                    <label htmlFor='name'>About Your NGO</label>
                    <input
                      value={state.description}
                      onChange={inputHandle}
                      className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                      type='text'
                      name='description'
                      id='description'
                      style={{ width: "200px" }}
                    />
                  </div>
                </div>
              </div>

              <div className='button-group_'>
                <button onClick={next} className='button_ next-button_'>
                  Next
                </button>
              </div>
            </>
          )}

          {formNo === 5 && (
            <div>
              <Map state={state} setState={setState}></Map>
              <div className='button-group_'>
                <button onClick={next} className='button_ next-button_'>
                  Next
                </button>
              </div>
            </div>
          )}
          {formNo === 6 && (
            <div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1>Congragulations!!</h1>
                <div
                  style={{
                    marginTop: "4em",
                    color: "#00a200",
                    fontSize: "large",
                  }}
                >
                  You have registered yourself as a NGO. Feel free to login and
                  start your journey with us.
                </div>
              </div>
              <div className='button-group_'>
                <button onClick={handleClick} className='button_ next-button_'>
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NGORegistration;
