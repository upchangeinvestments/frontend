import React, { useEffect, useState } from "react";
import "../../styles/LandingPage/LandingPage.css";
import BackgroundVideo from "../../assets/bgVideo.mp4"

function LandingPage() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setTimeout(() => setKey(prev => prev + 1), 100);
  }, []);

  return (
    <div className={`relative vsm:h-[40vh] md:h-[95vh] ${navigator.userAgent.indexOf('iPad') > -1 ? 'lg:h-[85vh]' : 'lg:h-[90vh]'} w-full flex flex-col justify-center items-center Playfair-Display `}>
      <div className="lg:hidden -mt-[50px] md:-mt-[180px] w-[150%] md:w-[130%] h-[100%]">
        {/* <video className="video h-[110%]" autoPlay playsInline muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video> */}
        <video key={key} src={BackgroundVideo} autoPlay playsInline muted></video>
      </div>
      <div className="hidden lg:flex items-center justify-center -mt-[150px]">
        <video key={key} src={BackgroundVideo} autoPlay playsInline defaultMuted muted></video>
        {/* <video className="" autoPlay playsInline muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video> */}
      </div>
    </div>
  );
}

export default LandingPage;
