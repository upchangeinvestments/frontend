import React, { useState, useEffect } from "react";
import FilterSubSection from "./FilterSubSection";
import CategoryData from "../assets/FilterData.json"

function FilterSection({ sendDataToParent }) {
  const CategoryType = ["Residential", "Hotels", "Retail", "Warehouse & Storage", "Medical Facilites", "School", "Office", "Land & Infrastructure"];
  const LocationType = ["West", "Central", "South", "Midwest", "East"];
  const InvestmentRange = ["$100-$1k", "$1k-$10k", "$10k-$50k", "$50k-$100k", "$100k-$500k", "$500k-$1M", "$1M+"];
  const HoldPeriod = ["2YRS-4YRS", "4YRS-6YRS", "6YRS-8YRS", "8YRS-9YRS", "9YRS-10YRS", "10YRS+"];
  // const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [price, setPrice] = useState(0);

  const [filters, setFilters] = useState({
    category: [],
    investmentRange: [],
    targetedIRR: 0,
    holdPeriod: [],
    locations: [],
    zipCode: ""
  });

  const applyFilters = () => {
    let filtered = CategoryData.filter(item => {
      // console.log("filters: ", filters);
      return (
        (filters.category.length === 0 || filters.category.includes(item.category)) &&
        (filters.investmentRange.length === 0 || filters.investmentRange.includes(item.Investment)) &&
        (filters.targetedIRR === 0 || parseInt(item.IRR) >= filters.targetedIRR) &&
        (filters.holdPeriod.length === 0 || filters.holdPeriod.includes(item.Hold_period)) &&
        (filters.locations.length === 0 || filters.locations.some(region => getTooltipContent(region).includes(item.location))) &&
        (filters.zipCode === "" || item.zip_code.includes(filters.zipCode))
      );
    });
    sendDataToParent(filtered);
    console.log("filtered data: ", filtered);
  };

  const updateFilters = (filterType, value, inputType) => {
    // console.log('updateFilters called: ', filterType, value);
    // console.log(inputType);
    if (inputType === "checkbox") {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: [...prevFilters[filterType], value]
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: value
      }));
    }
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const updateIrrValue = (event) => {
    let value = event.target.value;
    setPrice(value);
    updateFilters("targetedIRR", value, "range");
  };
  

  const getTooltipContent = (location) => {
    switch (location) {
      case "West":
        return "California, Oregon, Washington, Nevada, Arizona, Idaho, Montana, Wyoming, Utah, Colorado, New Mexico, Alaska,Hawa";
      case "Central":
        return "Texas, Illinois, Colorado, Missouri ,Iowa, Kansas, Nebraska, South Dakota , North Dakota, Minnesota";
      case "South":
        return "Florida, Georgia, Louisiana, Mississippi, Alabama,South Carolina, North Carolina , Tennessee, Arkansas, Kentucky, Virginia ,West Virginia, Oklahoma";
      case "Midwest":
        return "Ohio, Michigan, Indiana, Wisconsin";
      case "East":
        return "New York, Pennsylvania, Massachusetts, Maine , New Hampshire, Vermont , Rhode Island, Connecticut , New Jersey , Delaware , Maryland";
      default:
        return "";
    }
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
        updateFilters={updateFilters}
        filterType="category"
      />
      <button className="bg-[#6e30a7] px-2 text-[#fff] rounded-lg">clear filter</button>
      <FilterSubSection
        list={InvestmentRange}
        title="Investment Range"
        inputType="radio"
        updateFilters={updateFilters}
        filterType="investmentRange"
      />
      <button className="bg-[#6e30a7] px-2 text-[#fff] rounded-lg">clear filter</button>

      <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center px-4 md:px-0 my-4 mx-2">
        <div className="text-xl font-bold text-[#6e30a7]">Targeted IRR </div>
        <div className="w-[75%] flex items-center justify-between gap-x-4 FilterSection">
          <p className="mt-2">0</p>
          <input
            type="range"
            name="priceIRR"
            min={0}
            max={50}
            value={price}
            onChange={updateIrrValue}
            step="5"
            className="w-full appearance-none bg-gray-200 h-2 rounded-full mt-2 outline-none focus:outline-none"
            style={{
              background: `linear-gradient(to right, #6e30a7 0%, #6e30a7 ${(price / 50) * 100}%, #CBD5E0 ${(price / 50) * 100}%, #CBD5E0 100%)`,
            }} />
          <p className="mt-2">{price == 0 ? 50 : price}</p>
        </div>
      </div>
      <button className="bg-[#6e30a7] px-2 text-[#fff] rounded-lg">clear filter</button>
      <FilterSubSection
        list={HoldPeriod}
        title="Hold Period"
        inputType="checkbox"
        updateFilters={updateFilters}
        filterType="holdPeriod"
      />
      <button className="bg-[#6e30a7] px-2 text-[#fff] rounded-lg">clear filter</button>

      <div>
        <FilterSubSection
          list={LocationType}
          title="Locations"
          inputType="checkbox"
          updateFilters={updateFilters}
          filterType="locations"
          getTooltipContent={getTooltipContent}
        />
      <button className="bg-[#6e30a7] px-2 text-[#fff] rounded-lg">clear filter</button>

      </div>
      <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center px-4 md:px-0 my-4 mx-2">
        <div className="text-xl font-bold text-[#6e30a7]">Zip Code </div>
        <div className="font-['Asap'] w-[80%]">
          <input
            type="text"
            name=""
            onChange={e => updateFilters("zipCode", e.target.value, "text")}
            className="w-full bg-gray-100 border py-2 px-4 rounded-md outline-none	border-1 border-[#6e30a7]"
          />
        </div>
      <button className="bg-[#6e30a7] px-2 text-[#fff] mt-4 rounded-lg">clear filter</button>

      </div>
      {/* <FilterSubSection
        list={CompanyType}
        title="Companies"
        inputType="checkbox"
        showAll={showAllCompanies}
        setShowAll={setShowAllCompanies}
      /> */}
    </div>
  );
}

export default FilterSection;
