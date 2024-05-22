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
    "Residential",
    "Rental",
    "Retail",
    "Medical Facilities",
    "Office",
  ];
  const LI2 = ["West", "Central", "South", "Midwest", "East"];
  const LI3 = [
    "$100-$1K",
    "$1K-$10K",
    "$10K-$50K",
    "$50K-$100K",
    "$100K-$500K",
  ];
  const LI4 = ["2Yrs-4Yrs", "4Yrs-6Yrs", "6Yrs-8Yrs", "8Yrs-10Yrs", "10Yrs+"];
  const LI5 = ["5%-10%", "10%-15%", "15%-20%", "20%-25%", "25%+"];
  // const LI6 = ["RealtyMogul", "Cadre", "Fundrise", "Yieldstreet", "DiversyFund"]

  const isIPad = () => {
    const userAgent = navigator.userAgent;
    const iPad9thGenRegex = /(iPad9,\sCPU\sOS\s15_\d like\sMac\sOS\sX)/;
    return userAgent.includes("iPad");
  };

  const ans = isIPad();

  return (
    <div className="mx-auto p-4">
      <div className="p-4">
        <h2 className="text-2xl md:text-3xl mb-2 font-semibold font-['Playfair-Display'] ">
          WHAT MAKES US <span className="text-[#6e30a7]">DIFFERENT</span>?
        </h2>
      </div>
      <div className={`px-4 vsm:grid vsm:gap-4 md:mx-24 lg:gap-[170px] xl:gap-[150px] lg:mx-20 xl:mx-40 lg:mt-[10px] lg:flex lg:items-center lg:justify-end xl:justify-center ${isIPad() ? "ml-[100px]" : ""}`}>
        <div className={`relative ${isIPad() ? 'h-[460px]' : ''} vsm:h-[410px] md:h-[420px] lg:h-[390px] lg:ml-[20px] xl:ml-[130px] xl:h-[400px] xl:mx-auto content-between`}>
          <div className={`whitespace-nowrap text-nowrap flex items-center justify-center text-2xl font-['Playfair-Display']  text-white ${isIPad() ? 'whitespace-nowrap text-nowrap' : ''}`}>
            NAVIGATE YOUR WEALTH
          </div>
          <div className="">
            <ReactCardCarousel
              autoplay={true}
              autoplay_speed={5000}
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
        <div className={`flex flex-col items-center justify-center vsm:bg-white/20 vsm:backdrop-blur-3xl lg:backdrop-blur-none lg:bg-transparent vsm:px-4 vsm:py-8 vsm:rounded-lg mb-12 xl:ml-[40px] ${navigator.userAgent.indexOf('iPad') > -1 ? '-mr-[20px]' : 'mr-0'}`}>
          <h2 className="text-2xl font-['Playfair-Display']">WHO ARE WE?</h2>
          <p className="text-center font-['Playfair-Display'] font-medium lg:w-[400px]  mt-2">
            <span className="flex items-start  justify-center">
              Welcome to the world of Lynkinfinite Investments:{" "}
            </span>
            We ​​provide a comprehensive suite of real estate investment
            opportunities sourced from reputable firms under one roof. Our
            aggregator platform facilitates seamless comparison, enabling
            investors to meticulously evaluate options. Tailor your strategy
            with precision, selecting from a range of investment parameters
            including location, firm credibility, ROI expectations and {ans} more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Unique;
