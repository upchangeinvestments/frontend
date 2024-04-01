import React from "react";
import AboutUs from "./AboutUs";
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";

function AboutUsPage() {
  return (
    <div className="">
      <div className="categoryMain text-white">
        <Navbar />
        <div className="vsm:h-[45vh] lg:h-[85vh] flex items-center justify-center">
          <p className="uppercase text-white  vsm:text-4xl font-['Playfair-Display'] md:text-4xl lg:text-5xl mt-[-151px]">
            ABOUT US
          </p>
        </div>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
