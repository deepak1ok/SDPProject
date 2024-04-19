import React from "react";
import "../Banner/Banner.css";
function Banner() {
  return (
    <>
      <section className='banner-section'>
        <div className='container'>
          <div className='banner-content'>
            <div className='banner-content__text'>
              <h2>
                Join the FoodShare community today and help us fight hunger and
                malnutrition in Sri Lanka and beyond.
              </h2>
              <p>
                Together, we can make a difference. With <span>Foodshare,</span>{" "}
                you can help feed those who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
