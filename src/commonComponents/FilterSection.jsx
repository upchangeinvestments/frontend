import FilterSubSection from "./FilterSubSection";
// import { Slider } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
// import { Range } from 'react-range';
import React, { useState } from "react";

function FilterSection() {
  const CategoryType = [
    "Residential",
    "Hotels",
    "Retail",
    "Warehouse & Storage",
    "Medical Facilites",
    "School",
    "Office",
    "Infrastructure",
  ];
  const LocationType = ["West", "Central", "South", "Midwest", "East"];
  const CompanyType = [
    "Diversified Healthcare Trust",
    "Angel Oak Mortgage, Inc.",
    "Tanger, Inc",
    "Modiv Industrial, Inc.",
    "Park Hotels & Resorts",
  ];
  const InvestmentRange = [
    "$100-$1K",
    "$1K-$10K",
    "$10K-$50K",
    "$50K-$100K",
    "$100K-$500K",
    "$500K-$1M",
    "$1M+",
  ];
  const HoldPeriod = [
    "0YRS-1YRS",
    "1YRS-2YRS",
    "2YRS-5YRS",
    "5YRS-7YRS",
    "7YRS-10YRS",
    "10YRS+",
  ];

  const [price, setPrice] = useState(0);
  const updateIrrValue = (event) => {
    let value = event.target.value;
    setPrice(value);
  };
  return (
    <div
      className="vsm:hidden md:block bg-white/20 backdrop-blur-sm rounded-lg lg:w-[22%] xl:w-[18%] p-2 pr-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex items-center justify-center text-2xl font-bold font-['Playfair-Display'] text-[#6e30a7]  mt-2">
        <p>
          <u>Filter Projects</u>
        </p>
      </div>
      <FilterSubSection
        list={CategoryType}
        title="Categories"
        inputType="checkbox"
      />
      <FilterSubSection
        list={InvestmentRange}
        title="Investment Range"
        inputType="radio"
      />
      <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center px-4 md:px-0 my-4 mx-2">
        <Tooltip
          content="Internal rate of return"
          placement="right"
          className="bg-white/50 p-1 px-3 text-black ml-2"
        >
          <div className="text-xl font-bold text-[#6e30a7]">Targeted IRR </div>
        </Tooltip>
        <div className="w-[75%] flex items-center justify-center gap-x-4 FilterSection">
          <p>0</p>
          <input
            type="range"
            name="priceIRR"
            min={0}
            max={100}
            value={price}
            onChange={updateIrrValue}
            step="1"
            className="w-full appearance-none bg-gray-200 h-2 rounded-full mt-2 outline-none focus:outline-none"
            style={{
              background: `linear-gradient(to right, #6e30a7 0%, #6e30a7 ${price}%, #CBD5E0 ${price}%, #CBD5E0 100%)`,
            }}
          />
          <p>{price}</p>
        </div>
      </div>
      <FilterSubSection
        list={HoldPeriod}
        title="Hold Period"
        inputType="radio"
      />
      <FilterSubSection
        list={LocationType}
        title="Locations"
        inputType="checkbox"
      />
      <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center px-4 md:px-0 my-4 mx-2">
        <div className="text-xl font-bold text-[#6e30a7]">Zip Code </div>
        <div className="font-['Asap'] w-[80%]">
          <input
            type="text"
            name=""
            className="w-full bg-gray-100 border py-2 px-4 rounded-md outline-none	border-1 border-[#6e30a7]"
          />
        </div>
      </div>
      <FilterSubSection
        list={CompanyType}
        title="Companies"
        inputType="checkbox"
      />
    </div>
  );
}

export default FilterSection;
