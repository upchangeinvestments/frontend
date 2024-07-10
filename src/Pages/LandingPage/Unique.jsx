import React from "react";
import "../../styles/LandingPage/LandingPage.css";
import Video from "../../assets/choiceVideo.mp4"

function Unique() {

  return (
    <div className="flex items-center w-[80%] flex-col mx-auto my-8">
      <h1 className="font-bold text-2xl whitespace-nowrap md:text-5xl YesevaFont flex flex-col items-center justify-center uppercase">
        <p>Discover the Power of</p>
        <p className="text-purple-600">Choice</p>
      </h1>
      <p className="font-['Playfair-Display'] text-xl md:text-2xl mt-4 text-justify md:text-center">We provide a comprehensive suite of reputable real estate investment firms under one roof. Our aggregator platform facilitates seamless comparison,
        enabling investors to meticulously evaluate their options. Tailor your investment strategy with precision by selecting from a range of parameters,
        including location, firm credibility, fees, and performance history. At Lynk Infinite Investments, we empower you to make informed decisions and choose
        the best real estate investment firm to meet your goals.
      </p>
      <div className="flex items-center justify-center w-[170%] md:w-[100%]">
        <video className="rounded-xl w-[90%]" src={Video} autoPlay playsInline loop muted></video>
      </div>
    </div>
  );
}

export default Unique;
