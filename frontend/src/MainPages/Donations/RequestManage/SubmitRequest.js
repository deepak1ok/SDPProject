import React from "react";
import NavBar from "../../../components/NavBar/NavBar";

function SubmitRequest() {
  return (
    <>
      <NavBar></NavBar>

      <div
        style={{
          padding: "12em",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <div className='px-4 sm:px-0'>
          <h3 className='text-base font-semibold leading-7 text-gray-900'>
            Congragulations!!!!
          </h3>
        </div>
        <div
          className='mt-6 border-t border-gray-100 text-2xl'
          style={{ textAlign: "center" }}
        >
          You have accepted the request.Please contact the respective NGO for
          pickup and further coordination.
        </div>
      </div>
    </>
  );
}

export default SubmitRequest;
