import React from "react";
import AboutUs from "./AboutUs";
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";

function AboutUsPage() {
  return (
    <div className="">
      <div className="aboutMain text-white">
        <Navbar />
        <div className="h-[24vh] flex items-center justify-center">
          <p className="uppercase text-white font-bold vsm:text-2xl md:text-5xl mt-[12px]">
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
