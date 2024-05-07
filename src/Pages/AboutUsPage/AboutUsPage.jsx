import React from "react";
import AboutUs from "./AboutUs";
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";

function AboutUsPage() {
  return (
    <div className="">
      <div className="hidden lg:block">
        <div className="categoryMain">
          <Navbar />
          <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
            <p className="uppercase font-['Playfair-Display'] lg:text-5xl xl:text-6xl text-white vsm:text-4xl md:text-5xl lg:-mt-[350px] xl:-mt-[430px] mx-auto ml-[60%]">
              ABOUT US
            </p>
          </div>
        </div>
        <AboutUs />
        <div className="">
          <Footer />
        </div>
      </div>
      {/* below code is for vms to md size screens */}
      <div className="lg:hidden">
        <div className="categoryMain text-white">
          <Navbar />
          <div className="vsm:h-[55vh] flex items-center justify-center">
            <p className="uppercase text-white font-['Playfair-Display'] text-5xl -mt-[25px]">
              ABOUT US
            </p>
          </div>
        </div>
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;
