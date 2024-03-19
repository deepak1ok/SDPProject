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
          <Route path='/donate' exact element={<Donate />} />
        </Routes>
      </BrowserRouter>

      {/* {["/", "/about", "/contact", "/login", "/signup"].includes(
        window.location.pathname
      ) && <Navbar />} */}
    </>
  );
}

export default App;
