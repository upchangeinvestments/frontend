import React from "react";
// import "../../styles/Tagline.css";

function Tagline() {
  // const words = ["INVESTMENTS", "COMPANIES", "INVESTMENTS", "COMPANIES"];

  return (
    <div>
    <div className="lg:flex  vsm:flex-col vsm:hidden  md:flex-row v md:w-full  md:gap-2 items-center justify-center text-3xl	text-nowrap overflow-y-hidden">
      <div className="font-['Playfair-Display']  ">
      Explore your next Investment:  <span className="text-white"> Infinite opportunities</span>
      </div>
      <div className="flex flex-row items-center justify-start vsm:w-[26rem] vsm:h-[1em] vsm:overflow-y-hidden vsm:ml-[20px] md:ml-0">
        <div className="">
        under one <span className="text-white">convenient platform.</span>
        </div>

        {/* <div className="scroller ">
          <span className="text-left font-['Playfair-Display']  ml-2 text-white">
            {words[0]}
            <br />
            {words[1]}
            <br />
            {words[2]}
            <br />
            {words[3]}
          </span>
        </div> */}
      </div>
    </div>
    <div className="vsm:flex  vsm:flex-col lg:hidden items-center justify-center vsm:text-3xl md:text-4xl">
      <div className="font-['Playfair-Display']  ">
      Explore your next Investment: 
      </div>
      <div>
      <span className="text-white"> Infinite opportunities </span>under
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="">
         one <span className="text-white">convenient platform.</span>
        </div>

        {/* <div className="scroller ">
          <span className="text-left font-['Playfair-Display']  ml-2 text-white">
            {words[0]}
            <br />
            {words[1]}
            <br />
            {words[2]}
            <br />
            {words[3]}
          </span>
        </div> */}
      </div>
    </div>   
    </div>
  );
}

export default Tagline;
