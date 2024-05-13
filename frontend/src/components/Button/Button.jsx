import React from "react";
import { Link } from "react-router-dom";


function Button() {
  return (
    <>
      <Link to='/login' >
        <button className='btn btn-outline btn-info w-44 text-xl mx-1'  style={{height:'50px'}}>
          Login <i className='fa fa-child' style={{ fontSize: "24px" }}></i>
        </button>
      </Link>
      <Link to='/signup'>
        <button className='btn btn-outline btn-accent w-44 mx-1 text-xl' style={{height:'50px'}}>
          Signup
          <i className='fa fa-handshake-o' style={{ fontSize: "18px" }}></i>
        </button>
      </Link>
    </>
  );
}

export default Button;
