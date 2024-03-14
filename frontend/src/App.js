import React from "react";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/index";
import Login from "./components/Login/index";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      {/* <p>hello</p> */}
      <BrowserRouter>
        <Routes>
          {user && <Route path='/main' exact element={<Main />} />}
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* {["/", "/about", "/contact", "/login", "/signup"].includes(
        window.location.pathname
      ) && <Navbar />} */}
    </>
  );
}

export default App;
