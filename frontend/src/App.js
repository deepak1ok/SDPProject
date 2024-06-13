import React, { useContext, useEffect } from "react";
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

// import {UserIcon, Bars3Icon} from "@heroicons/react/24/solid"

import DonationsHome from "./MainPages/Donations/DonationList.js";
import Location from "./MainPages/Donations/Location.js";
import Form from "./MainPages/Donations/Form.js";
import NGOForm from "./components/NeedyPeople/NGOForm.jsx";
import NGOPage from "./components/NeedyPeople/NGOPage.js";
import { UserContext } from "./Context/UserContext.js";
import Profile from "./components/Profile/Profile.jsx";
import DonationList from "./MainPages/Donations/DonationList.js";
import AboutDonation from "./MainPages/Donations/AboutDonation/AboutDonation.jsx";
import MyDonations from "./components/Profile/MyDonations.jsx";
import AcceptDonationConfirmation from "../src/MainPages/Donations/AboutDonation/AcceptDonationConfirmation.jsx";
import ManageRequest from "./MainPages/Donations/RequestManage/ManageRequest.jsx";
import AboutRequest from "./MainPages/Donations/RequestManage/AboutRequest.jsx";
import SubmitRequest from "./MainPages/Donations/RequestManage/SubmitRequest.js";
import RejectRequest from "./MainPages/Donations/RequestManage/RejectRequest.jsx";
import NGOProfile from "../src/components/Profile/NGOProfile.jsx";
import RegisterOtpPage from '../src/components/Signup/RegisterOtpPage.jsx'
import LinearStepper from "./MainPages/Donations/DonateNow-Donor/CreateDonation.jsx"
import CreateDonation from "./MainPages/Donations/DonateNow-Donor/CreateDonation.jsx";
import NGORegistration from "./components/Signup/NGORegistration/NGORegistration.jsx";
import Admin from '../src/components/Admin/Admin.jsx'
import Users from '../src/components/Admin/Users.jsx'
import Donations from '../src/components/Admin/Donations.jsx'
import NGO from "./components/Admin/NGO.jsx";


// import DonationsHome from "./MainPages/Donations/view.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/main' exact element={<Main />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/login' exact element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/donations' exact element={<Donate />} />

          {/* <Route path='/needyPeople' exact element={<NGOPage></NGOPage>} /> */}

          <Route path='/needyPeople' exact element={<NGORegistration></NGORegistration>} />


          <Route path='/partners' exact element={<Partner />} />
          <Route path='/deliveryagents' exact element={<DeliveryAgents />} />

          <Route path='/temp' element={<Form />} />

          <Route path='/ngoprofile' element={<NGOProfile></NGOProfile>} />

          <Route path='/admin/donations' element={<Donations></Donations>} />

          <Route path='/location' element={<Location></Location>} />

          <Route path='/admin/users' element={<Users></Users>} />

          <Route path='/admin/ngo' element={<NGO></NGO>} />

          <Route
            path='/donationslist'
            element={<DonationList></DonationList>}
          />

          <Route
            path='/donationslist/aboutdonation/:id'
            element={<AboutDonation></AboutDonation>}
          />

          <Route path='/profile' element={<MyDonations></MyDonations>} />

          <Route
            path='/acceptdonation'
            element={<AcceptDonationConfirmation></AcceptDonationConfirmation>}
          />
          <Route
            path='/profile/manage/:id'
            element={<ManageRequest></ManageRequest>}
          />

          <Route
            path='aboutrequest/:id'
            element={<AboutRequest></AboutRequest>}
          />

          <Route
            path='/submitrequest'
            element={<SubmitRequest></SubmitRequest>}
          />

          <Route path='/rejectrequest' element={<RejectRequest></RejectRequest>} />

          <Route path='/register-otp' element={<RegisterOtpPage></RegisterOtpPage>} />

          <Route path='/create-donations' element={<CreateDonation></CreateDonation>} />

          <Route path='/admin' element={<Admin></Admin>} />



          

        
        </Routes>
        {/* {["/", "/about", "/contact", "/login", "/signup"].includes(
          window.location.pathname
        )} */}
      </BrowserRouter>
    </>
  );
}

export default App;
