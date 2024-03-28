import React from "react";
import NavBar from "../../commonComponents/NavBar";
import Footer from "../../commonComponents/Footer";
import "../../styles/CategoryPage/categoryPage.css";
import Terms from "./Terms";

function Termsandconditions() {
  return (
    <div className="">
      <div className="contactMain text-white">
        <NavBar />
        <div className="h-[24vh] flex items-center justify-center">
          <p className="uppercase text-white  vsm:text-4xl font-['Playfair-Display'] md:text-4xl lg:text-5xl mt-[12px]">
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
