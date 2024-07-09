import React from "react";
import "../../styles/LandingPage/Platform.css";
import HowItWorks from "./HowItWorks";
import Explore from "./Explore";
import HowItWorksImage from "../../assets/HowItWorks.png"

const HowInvestmentWorks = () => {
  return (
    <div id="HowItWorks" className="md:mx-12 lg:mx-12 xl:mx-24 ">
      <div className="vsm:bg-white/20 vsm:backdrop-blur-3xl md:backdrop-blur-none md:bg-transparent vsm:py-4 vsm:mx-6 rounded-lg">
        <h1 className="flex justify-center font-semibold YesevaFont w-full mt-2 vsm:text-2xl md:text-3xl">
          HOW <span className="text-purple-600">&nbsp;PLATFORM&nbsp;</span> WORKS
        </h1>
        <div className="w-[100%] mx-auto">
          <div className="md:flex items-center justify-between">
            <div className="vsm:h-full vsm:w-[100%] md:w-[400px] basis-2/3 ">
              {/* <img className="bg-white/20 backdrop-blur-xl rounded-lg" src="https://i.postimg.cc/C14NnWHN/40151ff3-f6bf-4aa0-8162-f374736a537c-removebg-preview.png" alt="" /> */}
              <img className="bg-white/20 backdrop-blur-xl rounded-lg" src="https://i.postimg.cc/L6KDskQQ/aggregator.jpg" alt="" />
            </div>
            <div className="vsm:mt-[30px] vsm:w-[100%] md:w-[40%]">
              <p className="flex flex-col items-center justify-center vsm:text-lg text-center w-full ">
                <span className="vsm:text-2xl font-bold ">What is an <span className="text-purple-600">Aggregator System</span> ?{" "}</span><br></br>
                Lynkinfinite Investments utilizes an aggregator system to consolidate real estate investment companies into a single, centralized platform.
                This system streamlines the process for users, allowing them to easily explore, compare, and analyze various reputable companies, enabling
                them to select the best tailored investment companies all in one convenient platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Explore />
      <HowItWorks />
    </div>
  );
};

export default HowInvestmentWorks;