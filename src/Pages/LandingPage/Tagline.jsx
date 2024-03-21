import React from "react";
// import "../../styles/Tagline.css";

function Tagline() {
  const words = ["OPPORTUNITIES", "INVESTMENTS", "PROJECTS", "COMPANIES"];

  return (
    <div className="flex md:flex-row vsm:flex-col w-full md:gap-8 items-center justify-center text-3xl	text-nowrap overflow-y-hidden">
      <div className="font-['Playfair-Display'] ">
        ONE <span className="text-white">PLATFORM</span>
      </div>
      <div className="flex flex-row items-center justify-start vsm:w-[24rem] vsm:h-[1em] vsm:overflow-y-hidden vsm:ml-[20px] md:ml-0">
        <div className="">
          {" "}
          <p className="font-['Playfair-Display'] ">ENDLESS</p>
        </div>
        <div className="scroller ">
          <span className="text-left font-['Playfair-Display']  ml-2 text-white">
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
    </div>
  );
}

export default Tagline;
