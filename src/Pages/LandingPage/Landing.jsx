import React, { useEffect } from "react";
import ExploreMoreButton from "../../commonComponents/exploreMoreButton";
import Tagline from "./Tagline";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../styles/LandingPage/LandingPage.css";
import { useAuth } from "../../utils/AuthContext";
import BackgroundVideo from "../../assets/bgVideo.mp4"

function LandingPage() {
  const words = ["Investments", "Opportunites", "Firms", "Investments", "Opportunites", "Firms", "Investments"];
  const { isAuth } = useAuth();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={`relative vsm:h-[85vh] md:h-[95vh] ${navigator.userAgent.indexOf('iPad') > -1 ? 'lg:h-[85vh]' : 'lg:h-[90vh]'} w-full flex flex-col justify-center items-center Playfair-Display `}>
      <div className="mainBgVideo">
        <video className='' autoPlay muted playsInline>
          <source src={BackgroundVideo} type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default LandingPage;
