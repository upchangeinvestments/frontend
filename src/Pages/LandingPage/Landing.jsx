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
    <div className="relative vsm:h-[85vh] md:h-[95vh] lg:h-[90vh] w-full flex flex-col justify-center items-end Playfair-Display  vsm:flex vsm:flex-col vsm:items-center vsm:justify-center">
      <div className="absolute vsm:ml-[227px] vsm:top-[138px]  md:right-[-200px] md:top-32 lg:right-[-200px] lg:top-28 xl:-right-[1vw] xl:top-32 2xl:top-72 2xl:right-60"
        data-aos="zoom-in-up"
      >
        <div className="vsm:ml-[85px] md:ml-0 font-bold vsm:text-2xl xl:text-4xl 2xl:text-5xl drop-shadow-lg font-['Playfair-Display'] ">
          <div className="mb-4">
            Centralized Platform For
          </div>
          <div className="mb-8 text-white vsm:w-[37rem] vsm:h-[1.2em] vsm:overflow-y-hidden">
            <div className="">
              <p className=""> Real Estate</p>
            </div>
            <div className="scroller">
              <span className="text-left vsm:-ml-[167px] xl:-ml-[110px] text-white">
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
          <div className="flex ml-[45px]">
            <ExploreMoreButton className="" Text="Explore More" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0  bottom-6">
        <Tagline />
      </div>
    </div>
  );
}

export default LandingPage;
