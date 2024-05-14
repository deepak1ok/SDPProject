import React from "react";
import { Link } from "react-router-dom";
import BgShape from "../../Images/hero/hero-bg.png";
import HeroCar from "../../Images/hero/main-bg.png";
import { useEffect, useState } from "react";
import "../Hero/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id='home' className='hero-section'>
        <div className='container'>
          <img className='bg-shape' src={BgShape} alt='bg-shape' />
          <img src={HeroCar} alt='car-img' className='hero-content__car-img' />
          <div className='hero-content'>
            <div className='hero-content__text'>
              <h1>
                <span>FoodShare</span>
              </h1>
              <h1>
                Fight against <span>hunger</span> and <span>malnutrition</span>{" "}
                in India
              </h1>
              <p>With FoodShare, donating food has never been easier.</p>
              <div className='hero-content__text__btns'>
                <Link
                  className='hero-content__text__btns__learn-more'
                  to='/About'
                >
                  Learn More &nbsp; <i className='fa-solid fa-angle-right'></i>
                </Link>
              </div>
            </div>

            {/* img */}
            {/* <img
              src={HeroCar}
              alt='car-img'
              className='hero-content__car-img'
            /> */}
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className='fa-solid fa-angle-up'></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
