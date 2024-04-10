import React, { useEffect } from "react";
import ExploreMoreButton from "../../commonComponents/exploreMoreButton";
import Tagline from "./Tagline";
import Aos from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  const words = ["Investments", "Opportunites", "Investments", "Opportunites"];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative vsm:h-[102vh] md:h-[95vh] lg:h-[90vh] w-full flex flex-col justify-center items-end Playfair-Display  vsm:flex vsm:flex-col vsm:items-center vsm:justify-center">
      <div
        className="absolute vsm:ml-[227px]   md:right-[-200px] md:top-32 lg:right-[-200px] lg:top-28 xl:-right-[1vw] xl:top-32 2xl:top-72 2xl:right-60"
        data-aos="zoom-in-up"
      >
        {/* <div className="absolute vsm:mx-auto md:right-4 md:top-32 md:mr-12 lg:mr-[9vw] lg:top-28 xl:mr-36 xl:mt-20 2xl:mt-32 2xl:mr-72"> */}
        <div className="mb-4 font-bold vsm:text-3xl xl:text-4xl 2xl:text-5xl drop-shadow-lg	">
          Centralized Platform For
        </div>
        <div className="mb-8 text-white font-bold vsm:text-3xl xl:text-4xl 2xl:text-5xl drop-shadow-lg vsm:w-[37rem] vsm:h-[1.2em] vsm:overflow-y-hidden">
          <div className="">
            <p className="font-['Playfair-Display'] "> Real Estate</p>
          </div>
          <div className="scroller">
            <span className="text-left font-['Playfair-Display']  vsm:-ml-[135px] xl:-ml-[110px] text-white">
              {words[0]}
              <br />
              {words[1]}
              <br />
              {words[2]}
              <br />
              {words[3]}
            </span>
          </div>
        </div>
        <div className="flex ">
          <ExploreMoreButton className="" Text="Explore More" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6">
        <Tagline />
      </div>
    </div>
  );
}

export default LandingPage;
