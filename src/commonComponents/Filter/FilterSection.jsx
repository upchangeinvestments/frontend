import React, { useState, useEffect } from "react";
import FilterSubSection from "./FilterSubSection";
// import InvestmentData from "../../assets/FilterData.json";
import PropertyData from "../../assets/RMData.json";
import Tooltip from '@mui/material/Tooltip';

function FilterSection({ sendFilteredData, type, setLoader }) {
  const CategoryType = ["Residential", "Hotel", "Retail", "Warehouse & Storage", "Medical Facilities", "School", "Office", "Land & Infrastructure"];
  const LocationType = ["West", "Central", "South", "Midwest", "East"];
  const InvestmentRange = ["$100-$1k", "$1k-$10k", "$10k-$50k", "$50k-$100k", "$100k-$500k", "$500k-$1M", "$1M+"];
  const HoldPeriod = ["2YRS-4YRS", "4YRS-6YRS", "6YRS-8YRS", "8YRS-9YRS", "9YRS-10YRS", "10YRS+"];
  // const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [price, setPrice] = useState(0);
  const [zipCode, setZipCode] = useState("");

  const [filters, setFilters] = useState({
    category: [type],
    investmentRange: [],
    targetedIRR: 0,
    holdPeriod: [],
    locations: [],
    zipCode: ""
  });

  const applyFilters = () => {
    setLoader(true);
    let filtered = PropertyData.filter(item => {
      return (
        (filters.category.length === 0 || filters.category.includes(item.category)) &&
        (filters.investmentRange.length === 0 || filters.investmentRange.includes(item.Investment)) &&
        (filters.targetedIRR === 0 || parseInt(item.IRR) >= filters.targetedIRR) &&
        (filters.holdPeriod.length === 0 || filters.holdPeriod.includes(item.Hold_period)) &&
        (filters.locations.length === 0 || filters.locations.some(region => getTooltipContent(region).includes(item.location))) &&
        (filters.zipCode === "" || item.zip_code.includes(filters.zipCode))
      );
    });
    sendFilteredData(filtered);
    setTimeout(() => {
      setLoader(false);
    }, [800])
  };

  const updateFilters = (filterType, value, inputType, checked) => {
    if (inputType === "checkbox") {
      if (checked) {
        setFilters(prevFilters => ({
          ...prevFilters,
          [filterType]: [...prevFilters[filterType], value]
        }));
      } else {
        setFilters(prevFilters => ({
          ...prevFilters,
          [filterType]: prevFilters[filterType].filter(item => item !== value)
        }));
      }
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: value
      }));
    }
  };

  const clearFilter = (filterType) => {
    if (filterType === "targetedIRR") {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: 0,
      }));
      setPrice(0);
    } else if (filterType === 'zipCode') {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: ""
      }));
      setZipCode('');
    } else if (filterType === 'category') {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: [type]
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: []
      }));
    }
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const updateIrrValue = (event) => {
    setPrice(event.target.value);
    updateFilters("targetedIRR", event.target.value, "range");
  };

  const updateZipCodeValue = (event) => {
    setZipCode(event.target.value);
    updateFilters("zipCode", event.target.value, "text")
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
        clearFilter={clearFilter}
        applyFilters={applyFilters}
      />
      <FilterSubSection
        list={InvestmentRange}
        title="Investment Range"
        inputType="radio"
        updateFilters={updateFilters}
        filterType="investmentRange"
        clearFilter={clearFilter}
        applyFilters={applyFilters}
      />
      <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center px-4 md:px-0 my-4 mx-2 relative">
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
        <Tooltip title="Clear filter" className="absolute top-2 right-2" onClick={() => clearFilter("targetedIRR")}>
          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#6e30a7" d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" /></svg>
        </Tooltip>
      </div>
      {/* <button className="bg-[#6e30a7] px-2 text-[#fff] rounded-lg" onClick={() => clearFilter("targetedIRR")}>Clear filter</button> */}
      <FilterSubSection
        list={HoldPeriod}
        title="Hold Period"
        inputType="checkbox"
        updateFilters={updateFilters}
        filterType="holdPeriod"
        clearFilter={clearFilter}
        applyFilters={applyFilters}
      />
      <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center px-4 md:px-0 my-4 mx-2 relative">
        <div className="text-xl font-bold text-[#6e30a7]">Zip Code </div>
        <div className="font-['Asap'] w-[80%]">
          <input
            type="text"
            value={zipCode}
            onChange={updateZipCodeValue}
            className="w-full bg-gray-100 border py-2 px-4 rounded-md outline-none	border-1 border-[#6e30a7]"
          />
        </div>
        <Tooltip title="Clear filter" className="absolute top-2 right-2" onClick={() => clearFilter("zipCode")}>
          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#6e30a7" d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" /></svg>
        </Tooltip>
      </div>
      <div>
        <FilterSubSection
          list={LocationType}
          title="Locations"
          inputType="checkbox"
          updateFilters={updateFilters}
          filterType="locations"
          getTooltipContent={getTooltipContent}
          clearFilter={clearFilter}
          applyFilters={applyFilters}
        />

      </div>
      <div className="flex items-center justify-center mb-4">
        <button className="bg-[#6e30a7] px-4 py-2 text-[#fff] rounded-lg" onClick={applyFilters}>Apply Search</button>
      </div>
    </div>
  );
}

export default FilterSection;
