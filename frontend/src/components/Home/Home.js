import React from "react";
import NavBar from "../NavBar/NavBar";
// import { Carousel } from "react-bootstrap";
// import image4 from "../../Images/BackgroundImg/image4.png";
// import image33 from "../../Images/BackgroundImg/image33.jpg";
// import image3 from "../../Images/BackgroundImg/image3.png";
// import image1 from "../../Images/BackgroundImg/image1.png";
import Footer from "../../SemiPages/Footer/Footer";
import Faq from "../../SemiPages/Faq/Faq";
import Banner from "../../SemiPages/Banner/Banner";
import Hero from "../../SemiPages/Hero/Hero";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Banner />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
