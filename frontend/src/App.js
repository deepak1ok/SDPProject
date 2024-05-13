import React from "react";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/SignUp";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Donate from "./components/Donate/Donate";
import NavBar from "./components/NavBar/NavBar";
import NeedyPeople from "./components/NeedyPeople/NeedyPeople";
import Partner from "./components/Partners/Partner.js";
import DeliveryAgents from "./components/DeliveryAgents/DeliveryAgents.js";

import DonationsHome from "./MainPages/Donations/Home.js";
import Location from "./MainPages/Donations/Location.js";
import Form from "./MainPages/Donations/Form.js";

// import DonationsHome from "./MainPages/Donations/view.js";
function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {user && <Route path='/main' exact element={<Main />} />}
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/donations' exact element={<Donate />} />

          <Route path='/needyPeople' exact element={<NeedyPeople />} />
          <Route path='/partners' exact element={<Partner />} />
          <Route path='/deliveryagents' exact element={<DeliveryAgents />} />

          <Route path='/create-donations' element={<Form />} />

          <Route path='/location' element={<Location></Location>} />
        </Routes>
        {/* {["/", "/about", "/contact", "/login", "/signup"].includes(
          window.location.pathname
        )} */}
      </BrowserRouter>
    </>
  );
}

export default App;
