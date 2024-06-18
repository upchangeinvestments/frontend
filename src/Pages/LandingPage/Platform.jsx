import React from "react";
import "../../styles/LandingPage/Platform.css";
import HowItWorks from "./HowItWorks";
import Explore from "./Explore";

const HowInvestmentWorks = () => {
  return (
    <div id="HowItWorks" className="md:mx-12 lg:mx-12 xl:mx-24 ">
      <div className="vsm:bg-white/20 vsm:backdrop-blur-3xl md:backdrop-blur-none md:bg-transparent vsm:py-4 vsm:mx-6 rounded-lg">
        <h1 className="flex justify-center font-semibold font-['Playfair-Display'] w-full mt-8 mb-6 mx-auto vsm:text-2xl md:text-3xl">
          HOW PLATFORM WORKS
        </h1>
        <div className="vsm:w-[80%] md:w-[100%] mx-auto">
          <div className="md:flex items-center justify-between">
            {/* <img src="https://i.postimg.cc/kGzKLnSc/image1.png" alt="" /> */}

            <div className="vsm:h-full vsm:w-[100%] md:w-[400px] basis-1/2 ">
              {/* <img className="bg-white/20 backdrop-blur-xl rounded-lg" src="https://i.postimg.cc/C14NnWHN/40151ff3-f6bf-4aa0-8162-f374736a537c-removebg-preview.png" alt="" /> */}
              <img className="bg-white/20 backdrop-blur-xl rounded-lg" src="https://i.postimg.cc/XJjjqRMq/lynkinv-removebg1.png" alt="" />
            </div>
            <div className="vsm:mt-[30px] vsm:w-[100%] md:w-[40%]">
              <p className="flex flex-col items-center justify-center vsm:text-lg text-center">
                <span className="vsm:text-2xl font-medium">What is an Aggregator System?{" "}</span><br></br>
                Lynkinfinite Investments utilizes an aggregator system to consolidate real estate investment firms into a single, centralized platform.
                This system streamlines the process for users, allowing them to easily explore, compare, and analyze various reputable companies, enabling
                them to select the best tailored investment opportunities all in one convenient platform.
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