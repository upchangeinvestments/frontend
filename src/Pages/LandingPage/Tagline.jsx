import React from "react";
// import "../../styles/Tagline.css";

function Tagline() {
  // const words = ["INVESTMENTS", "COMPANIES", "INVESTMENTS", "COMPANIES"];

  return (
    <div>
      <div className="lg:flex vsm:flex-col vsm:hidden lg:text-[26px] md:flex-row v md:w-full  md:gap-2 items-center justify-center xl:text-3xl text-nowrap font-['Playfair-Display']">
        <div className="">
          Explore your next Investment:  <span className="text-white"> Infinite opportunities</span>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="">
            under one <span className="text-white">convenient platform.</span>
          </div>
        </div>
      </div>
      <div className="vsm:flex vsm:flex-col lg:hidden items-center justify-center vsm:text-2xl md:text-3xl">
        <div className="">
          Explore your next Investment:
        </div>
        <div>
          <span className="text-white"> Infinite opportunities </span>under
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="">
            one <span className="text-white">convenient platform.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tagline;
