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
        <div className="h-[85vh] flex items-center justify-center">
          <p className="uppercase font-['Playfair-Display'] lg:text-4xl xl:text-5xl text-white vsm:text-4xl md:text-5xl lg:-mt-[350px] xl:-mt-[430px] mx-auto ml-[60%]">
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
