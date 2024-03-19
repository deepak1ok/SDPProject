import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <>
      <Link to='/login'>
        <button className='btn btn-outline btn-info w-24 mx-1'>
          Login <i className='fa fa-child' style={{ fontSize: "24px" }}></i>
        </button>
      </Link>
      <Link to='/signup'>
        <button className='btn btn-outline btn-accent w-28 mx-1'>
          Signup
          <i className='fa fa-handshake-o' style={{ fontSize: "18px" }}></i>
        </button>
      </Link>
    </>
  );
}

export default Button;
