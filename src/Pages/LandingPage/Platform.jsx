import React from "react";
import "../../styles/LandingPage/Platform.css";
import HowItWorks from "./HowItWorks";
import Explore from "./Explore";

const HowInvestmentWorks = () => {
  return (
    <div id="HowItWorks" className="md:mx-12 lg:mx-12 xl:mx-24">
      <h1 className="flex justify-center font-semibold font-['Playfair-Display'] w-full mt-8 mb-6 mx-auto vsm:text-2xl md:text-3xl">
        HOW PLATFORM WORKS
      </h1>
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between gap-[150px]">
          {/* <img src="https://i.postimg.cc/kGzKLnSc/image1.png" alt="" /> */}

          <div className="h-full w-full ">
            <img className="bg-white/20 backdrop-blur-xl rounded-lg" src="https://i.postimg.cc/C14NnWHN/40151ff3-f6bf-4aa0-8162-f374736a537c-removebg-preview.png" alt="" />
          </div>
          <div className="text-center w-[80%]">
            <p className=" font-['Playfair-Display']">
              <span className="text-2xl font-bold">What is an Aggregator System?{" "}</span><br></br>
              <span className="text-justify">
                Lynkinfinite Investments utilizes an aggregator system to consolidate real estate investment opportunities from various reputable firms into a single, centralized platform. This system streamlines the process for users, allowing them to easily explore, compare, and select tailored investment options in one convenient location.
              </span>
            </p>
          </div>
        </div>
      </div>
      <Explore />
      <HowItWorks />
    </div >
  );
};

export default HowInvestmentWorks;
