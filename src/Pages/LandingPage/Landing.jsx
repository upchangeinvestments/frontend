import React, { useEffect } from "react";
import ExploreMoreButton from "../../commonComponents/exploreMoreButton";
import Tagline from "./Tagline";
import Aos from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative vsm:h-[102vh] md:h-[95vh] lg:h-[90vh] w-full flex flex-col justify-center items-end Playfair-Display  vsm:flex vsm:flex-col vsm:items-center vsm:justify-center">
      <div
        className="absolute vsm:mx-auto md:right-20 md:top-32 lg:right-[12vw] lg:top-28 xl:right-[10vw] xl:top-32 2xl:top-72 2xl:right-60"
        data-aos="zoom-in-up"
      >
        {/* <div className="absolute vsm:mx-auto md:right-4 md:top-32 md:mr-12 lg:mr-[9vw] lg:top-28 xl:mr-36 xl:mt-20 2xl:mt-32 2xl:mr-72"> */}
        <div className="mb-4 font-bold vsm:text-4xl xl:text-5xl 2xl:text-6xl Font2 drop-shadow-lg	">
          Your Search Engine For
        </div>
        <div className="mb-8 text-white font-bold vsm:text-4xl xl:text-5xl 2xl:text-6xl Font2 drop-shadow-lg	">
          Real Estate Investments
        </div>
        <div className="flex justify-center">
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
