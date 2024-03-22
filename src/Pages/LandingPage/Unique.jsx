import React from "react";
import FilterCard from "./FilterCard";
import ReactCardCarousel from "react-card-carousel";

function Unique() {
  const Headings = [
    "Category Type",
    "Location",
    "Investment Range",
    "Investment Hold Period",
    "ROI Percent",
  ];
  const LI1 = [
    "Commerical Property",
    "Rental Property",
    "Single-House Property",
    "Multi-House Property",
    "Housing Property",
  ];
  const LI2 = ["West", "Central", "South", "Midwest", "East"];
  const LI3 = [
    "$100-$1K",
    "$1K-$10K",
    "$10K-$50K",
    "$50K-$100K",
    "$100K-$500K",
  ];
  const LI4 = ["0Yrs-1Yrs", "1rs-2rs", "2rs-5rs", "5rs-7rs", "7rs+"];
  const LI5 = ["0%-2%", "2%-5%", "5%-7%", "7%-10%", "10%+"];
  // const LI6 = ["RealtyMogul", "Cadre", "Fundrise", "Yieldstreet", "DiversyFund"]

  return (
    <div className="mx-auto p-4">
      <div className="p-4">
        <h2 className="text-2xl md:text-3xl mb-2 font-['Playfair-Display'] ">
          WHAT MAKES US <span className="text-[#6e30a7]">DIFFERENT</span>?
        </h2>
      </div>
      <div className="px-4 vsm:grid vsm:gap-4 lg:gap-x-40 vsm:mx-4 md:mx-24 lg:mx-20 xl:mx-24 lg:mt-[10px] lg:flex">
        <div className="relative vsm:h-[410px] lg:h-[390px] lg:ml-[150px] xl:ml-[200px] xl:h-[400px] xl:mx-auto">
          <div className="nowrap text-nowrap flex items-center justify-center text-2xl font-['Playfair-Display']  text-white">
            NAVIGATE YOUR WEALTH
          </div>
          <div className="">
            <ReactCardCarousel
              autoplay={true}
              autoplay_speed={5000}
              cl1assName="mt-36"
            >
              <div>
                <FilterCard heading={`Filter by ${Headings[0]}`} items={LI1} />
              </div>
              <div>
                <FilterCard heading={`Filter by ${Headings[1]}`} items={LI2} />
              </div>
              <div>
                <FilterCard heading={`Filter by ${Headings[2]}`} items={LI3} />
              </div>
              <div>
                <FilterCard heading={`Filter by ${Headings[3]}`} items={LI4} />
              </div>
              <div>
                <FilterCard heading={`Filter by ${Headings[4]}`} items={LI5} />
              </div>
              {/* <div>
                                <FilterCard heading={`Filter by ${Headings[5]}`} items={LI6} />
                            </div> */}
            </ReactCardCarousel>
          </div>
        </div>
        <div className="lg:w-[50%] flex flex-col items-center justify-center lg:-mt-12 lg:ml-[20px] xl:ml-[40px]">
          <h2 className="text-2xl font-['Playfair-Display']">WHO ARE WE?</h2>
          <p className="text-center font-['Playfair-Display'] font-medium  mt-2">
            <span className="flex items-start  justify-center">
              Welcome to the world of Lynkinfinite Investments:{" "}
            </span>
            We ​​provide a comprehensive suite of real estate investment
            opportunities sourced from reputable firms under one roof. Our
            aggregator platform facilitates seamless comparison, enabling
            investors to meticulously evaluate options. Tailor your strategy
            with precision, selecting from a range of investment parameters
            including location, firm credibility, ROI expectations and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Unique;
