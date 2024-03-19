import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <h1>Main page</h1>
      <Link to='/'>
        <button type='button'>Logout</button>
      </Link>
    </div>
  );
};

export default Main;
