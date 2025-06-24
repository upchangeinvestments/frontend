import React, { useEffect } from "react";
import img2 from "../../assets/HowItWorks.png";
import Aos from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="grid vsm:grid-cols-1 md:grid-cols-2 vsm:mx-6 lg:mx-12 vsm:gap-8 lg:gap-20 vsm:mb-12">
      {/* data-aos="zoom-out-up" */}
      <div className="bg-white/20 backdrop-blur-sm rounded-lg flex flex-col justify-center items-center shadow-lg hover:shadow-xl pb-8 text-white"
        style={{
          backgroundImage: "linear-gradient(to right, #150D2B, #2A235A)"
        }}
      >
        <div className="my-4 text-2xl YesevaFont uppercase font-bold">
          What to expect?
        </div>
        <div className="flex flex-col font-['Playfair-Display'] items-center justify-center">
          <div className="w-[80%]">
            <p className="text-justify justify-self-center ">
              LynkInfinite Investments makes it easy for investors to access real estate investment companies through a simple integrated platform.
            </p>
          </div>
          <div className="w-[80%] mt-2 mb-6 flex items-center justify-center ">
            <img className="w-56" src={img2} alt="" />
          </div>
          <div className="w-[80%]">
            <p className="text-justify justify-self-center">
              Here you can tailor your investment strategy to align with your
              specific preferences, allowing for flexibility in choosing an
              investment range, preferred location, and selecting reputable
              investment companies. Customize your investment expectations and
              other parameters to suit your individual requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
