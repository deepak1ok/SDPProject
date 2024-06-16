import React from "react";
import NavBar from "../NavBar/NavBar";
import "../About/About.css";
import Footer from "../../SemiPages/Footer/Footer";
function About() {
  return (
    <>
      <NavBar></NavBar>
      <div className='membercontainer'>
        <div className='headerlinesmall'>Meet our members,</div>

        <div className='member'>
          <div className='member_container'>
            <div className='number one'> 1 </div>
            <div className='verticalline'>
              <div className='member_header'>Deepak Kumar</div>
              <div className='member_subtext'>
                <a href='https://github.com/deepak1ok'>Connect on Github</a>
                <div className='email'>Email dpkbj3445@gmail.com</div>
                <a href='https://www.linkedin.com/in/deepak10460/'>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='member'>
          <div className='member_container'>
            <div className='number two'>2</div>
            <div className='verticalline'>
              <div className='member_header'>Saswat Jyoti Das</div>
              <div className='member_subtext'>
                <a href='https://github.com/saswatdas121'>Connect on Github</a>
                <div className='email'>Email saswatdas121@gmail.com</div>
                <a href='#'>connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className='member'>
          <div className='member_container'>
            <div className='number two'>3</div>
            <div className='verticalline'>
              <div className='member_header'>Nandan Bharadwaj</div>
              <div className='member_subtext'>
                <a href='#'>Connect on Github</a>
                <div className='email'>Email : </div>
                <a href='#'>connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className='member'>
          <div className='member_container'>
            <div className='number two'>4</div>
            <div className='verticalline'>
              <div className='member_header'>Anubhav Sinha</div>
              <div className='member_subtext'>
                <a href='#'>Connect on Github</a>
                <div className='email'>Email : </div>
                <a href='#'>connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
