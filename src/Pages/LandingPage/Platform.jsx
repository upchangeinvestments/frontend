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
      <div className="w-[60%] mx-auto">
      <div className="flex items-center justify-between">
        {/* <img src="https://i.postimg.cc/kGzKLnSc/image1.png" alt="" /> */}
      
         <div className="h-full w-full basis-1/2 ">
         <img className="bg-white/20 backdrop-blur-xl rounded-lg" src="https://i.postimg.cc/C14NnWHN/40151ff3-f6bf-4aa0-8162-f374736a537c-removebg-preview.png" alt="" />
         </div>
        <div className="text-center w-[60%]">
        <p className="">
          <span>What is an Aggregator System?{" "}</span><br></br>
          Lynkinfinite Investments utilizes an aggregator system to consolidate real estate investment opportunities from various reputable firms into a single, centralized platform. This system streamlines the process for users, allowing them to easily explore, compare, and select tailored investment options in one convenient location.</p>
        </div>
      </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center w-[100%]">
        <div className="grid grid-cols-9 vsm:w-[80%] md:w-[70%] lg:w-[60%]">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="h-16 w-16 bg-purple-200 backdrop-blur-sm rounded-full flex items-center justify-center text-xl font-bold">
              2
            </div>
          </div>
          <div className="col-span-3 mx-8">
            <div className="arrow rightArrow -my-1">
              <span></span>
              <span></span>
              <span></span>
              <span className="md:hidden"></span>
              <span className="md:hidden"></span>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="h-16 w-16 bg-purple-200 backdrop-blur-sm rounded-full flex items-center justify-center text-xl font-bold">
              1
            </div>
          </div>
          <div className="col-span-3 flex justify-end mx-8">
            <div className="arrow leftArrow -my-1">
              <span></span>
              <span></span>
              <span></span>
              <span className="md:hidden"></span>
              <span className="md:hidden"></span>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="h-16 w-16 bg-purple-200 backdrop-blur-sm rounded-full flex items-center justify-center text-xl font-bold">
              3
            </div>
          </div>
        </div>
        <div className="grid grid-cols-9 vsm:w-[80%] md:w-[70%] lg:w-[60%] my-2 ">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="text-xl font-bold text-center">
              Investment Firms
            </div>
          </div>
          <div className="col-span-3"></div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="text-xl font-bold text-center">
              LynkInfinite Investment
            </div>
          </div>
          <div className="col-span-3"></div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="text-xl font-bold sm:text-wrap md:text-nowrap text-center">
              Users
            </div>
          </div>
        </div>
      </div> */}
      <Explore />
      <HowItWorks />
    </div>
  );
};

export default HowInvestmentWorks;
