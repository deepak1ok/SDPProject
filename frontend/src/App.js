import React, { useContext,useEffect } from "react";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/SignUp";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Donate from "./components/Donate/Donate";
import NavBar from "./components/NavBar/NavBar";
import Partner from "./components/Partners/Partner.js";
import DeliveryAgents from "./components/DeliveryAgents/DeliveryAgents.js";

import DonationsHome from "./MainPages/Donations/DonationList.js";
import Location from "./MainPages/Donations/Location.js";
import Form from "./MainPages/Donations/Form.js";
import NGOForm from "./components/NeedyPeople/NGOForm.jsx";
import NGOPage from "./components/NeedyPeople/NGOPage.js";
import { UserContext } from "./Context/UserContext.js";
import Profile from "./components/Profile/Profile.jsx";
import DonationList from "./MainPages/Donations/DonationList.js";
import AboutDonation from "./MainPages/Donations/AboutDonation/AboutDonation.jsx";

// import DonationsHome from "./MainPages/Donations/view.js";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/main' exact element={<Main />} />
          <Route path='/signup' exact element={<Signup/>} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/donations' exact element={<Donate />} />

          <Route path='/needyPeople' exact element={<NGOPage></NGOPage>} />
          <Route path='/partners' exact element={<Partner />} />
          <Route path='/deliveryagents' exact element={<DeliveryAgents />} />

          <Route path='/create-donations' element={<Form />} />

          <Route path='/location' element={<Location></Location>} />

          <Route path='/profile' element={<Profile></Profile>} />
          <Route path='/donationslist' element={<DonationList></DonationList>} />

          <Route path='/donationslist/aboutdonation/:id' element={<AboutDonation></AboutDonation>} />
          

        
        </Routes>
        {/* {["/", "/about", "/contact", "/login", "/signup"].includes(
          window.location.pathname
        )} */}
      </BrowserRouter>
    </>
  );
}

export default App;
