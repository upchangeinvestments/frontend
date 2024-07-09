import React, { useEffect } from "react";
import "../../styles/LandingPage/LandingPage.css";
import BackgroundVideo from "../../assets/bgVideo.mp4"

function LandingPage() {
  const words = ["Investments", "Opportunites", "Firms", "Investments", "Opportunites", "Firms", "Investments"];

  return (
    <div className={`relative vsm:h-[40vh] md:h-[95vh] ${navigator.userAgent.indexOf('iPad') > -1 ? 'lg:h-[85vh]' : 'lg:h-[90vh]'} w-full flex flex-col justify-center items-center Playfair-Display `}>
      <div className="md:hidden -mt-[50px] w-[120%] h-[100%]">
        <video className="video h-[110%]" autoPlay playsInline muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hidden md:flex items-center justify-center -mt-[150px]">
        <video className="" autoPlay playsInline muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default LandingPage;
