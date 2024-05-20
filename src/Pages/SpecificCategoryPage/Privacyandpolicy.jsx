import React from "react";
import NavBar from "../../commonComponents/NavBar";
import Footer from "../../commonComponents/Footer";
import "../../styles/CategoryPage/categoryPage.css";
import Privacy from "./Privacy";
import { Helmet } from 'react-helmet-async';

function Privacyandpolicy() {
  return (
    <div className="">
      <Helmet>
        <title>Privacy Policy</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/privacy" />
      </Helmet>
      <div className="contactMain text-white">
        <NavBar />
        <div className="h-[85vh] flex items-center justify-center">
          <p className="uppercase font-['Playfair-Display'] lg:text-4xl xl:text-5xl text-white vsm:text-4xl md:text-5xl lg:-mt-[350px] xl:-mt-[430px] mx-auto lg:ml-[60%]">
            Privacy and Policy
          </p>
        </div>
      </div>
      <Privacy />
      <Footer />
    </div>
  );
}
export default Privacyandpolicy;
