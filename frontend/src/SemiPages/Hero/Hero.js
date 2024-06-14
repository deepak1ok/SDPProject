import React from "react";
import { Link } from "react-router-dom";
import BgShape from "../../Images/hero/hero-bg.png";
import HeroCar from "../../Images/hero/main-bg.png";
import { useEffect, useState } from "react";
import "../Hero/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

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
                  className='hero-content__text__btns__learn-more flex items-center'
                  to='/About'
                >
                  Learn More &nbsp;
                  {/* <i className='fa-solid fa-angle-right'></i> */}
                  {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-hand-index-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046z' />
                  </svg> */}
                  <FontAwesomeIcon icon={faHandPointer} />
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
          {/* <i className='fa-solid fa-angle-up'></i> */}
          <FontAwesomeIcon icon={faHandPointer} />
        </div>
      </section>
    </>
  );
}

export default Hero;
