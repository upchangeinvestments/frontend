import React, { useEffect } from "react";
import ExploreMoreButton from "../../commonComponents/exploreMoreButton";
import Tagline from "./Tagline";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../styles/LandingPage/LandingPage.css";
import { useAuth } from "../../utils/AuthContext"

function LandingPage() {
  const words = ["Investments", "Opportunites", "Firms", "Investments", "Opportunites", "Firms", "Investments"];
  const { isAuth } = useAuth();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={`relative vsm:h-[85vh] md:h-[95vh] ${navigator.userAgent.indexOf('iPad') > -1 ? 'lg:h-[85vh]' : 'lg:h-[90vh]'} w-full flex flex-col justify-center items-center Playfair-Display `}>
      <div className="relative flex items-center justify-center lg:ml-[50%] lg:-mt-[270px]" data-aos="zoom-in-up">
        <div className="font-bold vsm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl drop-shadow-lg font-['Playfair-Display'] ">
          <div className="mb-2">
            Centralized Platform For
          </div>
          <div className="mb-6 text-white vsm:h-[1.2em] overflow-y-hidden flex items-center justify-center gap-x-2">
            <div className="relative ">
              <p className=""> Real Estate</p>
            </div>
            <div className="scroller -z-[1]">
              <span className="text-white">
                {words[0]}
                <br />
                {words[1]}
                <br />
                {words[2]}
                <br />
                {words[3]}
                <br />
                {words[4]}
                <br />
                {words[5]}
                <br />
                {words[6]}
              </span>
            </div>
          </div>
          <div className="flex item-center justify-center">
            <ExploreMoreButton Link={isAuth ? "/category" : "/signin?isLogin=false"} className="" Text="Explore More" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 vsm:bottom-6 md:bottom-10">
        <Tagline />
      </div>
    </div>
  );
}

export default LandingPage;
