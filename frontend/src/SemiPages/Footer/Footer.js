import React from "react";
import "../Footer/Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='footer-content'>
            <ul className='footer-content__1'>
              <li>
                <span>FoodShare</span>
              </li>
              <li>
                Join the FoodShare community today and help us fight hunger and
                malnutrition and beyond. Together, we can make a difference!
              </li>
              <li>
                <a href='tel:123456789'>
                  <i className='fa-solid fa-phone'></i> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href='mailto: 
                  info@saubhagya.com'
                >
                  <i className='fa-solid fa-envelope'></i>
                  &nbsp; info@foodshare.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target='_blank'
                  rel='noreferrer'
                  href='https://jephunneh.com/'
                ></a>
              </li>
            </ul>

            <ul className='footer-content__2'>
              <li>Quick Links</li>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/About'>About</a>
              </li>
              <li>
                <a href='/needypeople'>Needy People</a>
              </li>
              <li>
                <a href='#home'>Donators</a>
              </li>
              <li>
                <a href='#home'>Partners</a>
              </li>
              <li>
                <a href='#home'>Delivery Agents</a>
              </li>
            </ul>

            <ul className='footer-content__2'>
              <li>Contact</li>
              <li>
                <a href='/Contact'>Inquiries</a>
              </li>
            </ul>

            <ul className='footer-content__2'>
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type='email' placeholder='Enter Email Address'></input>
              </li>
              <li>
                <button className='submit-email'>Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
