import React from "react";
import NavBar from "../../commonComponents/NavBar";
import Footer from "../../commonComponents/Footer";
import "../../styles/CategoryPage/categoryPage.css";
import Terms from "./Terms";
import { Helmet } from 'react-helmet-async';

function Termsandconditions() {
  return (
    <div className="">
      <Helmet>
        <title>Terms and Condition</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/terms" />
      </Helmet>
      <div className="contactMain text-black">
        <NavBar />
        <div className="h-[65vh] flex items-center justify-center">
          <p className="uppercase font-['Playfair-Display'] font-bold lg:text-4xl xl:text-5xl vsm:text-4xl md:text-5xl lg:-mt-[300px] xl:-mt-[430px] mx-auto">
            Terms and Conditions
          </p>
        </div>
      </div>
      <Terms />
      <Footer />
    </div>
  );
}

export default Termsandconditions;
