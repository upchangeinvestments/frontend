import React, { useState, useEffect } from "react";
import FilterSubSection from "./FilterSubSection";
// import InvestmentData from "../../assets/FilterData.json";
import companyData from "../../assets/companyData.json";
import Tooltip from '@mui/material/Tooltip';
import { MdOutlineInfo } from "react-icons/md";


function FilterSection({ sendFilteredData, setLoader }) {
  const ClassType = ["Class A", "Class B", "Class C"];
  const LocationType = ["West", "Central", "South", "Midwest", "East"];
  const InvestmentRange = ["$100-$1k", "$1k-$10k", "$10k-$50k", "$50k-$100k", "$100k-$500k", "$500k-$1M", "$1M+"];
  const CompanyAge = ["1YR-10YRS", "11YRS-20YRS", "21YRS-30YRS", "31YRS-40YRS", "41YRS-50YRS", "51YRS+"];
  const InvestorType = ['Accredited', 'Non-Accredited'];
  // const [showAllCompanies, setShowAllCompanies] = useState(false);
  const RiskLevel = ['High', 'Medium', 'Low'];

  const [mngFee, setMngFee] = useState(0);

  const [filters, setFilters] = useState({
    classType: [],
    investmentRange: [],
    managementFee: 0,
    companyAge: [],
    riskLevel: [],
    investorType: [],
    locations: [],
  });

  const [checkedValues, setCheckedValues] = useState({
    classType: [],
    investmentRange: "",
    companyAge: [],
    investorType: "",
    riskLevel: [],
    locations: []
  });


  const applyFilters = () => {
    setLoader(true);
    let filtered = companyData.filter(item => {
      return (
        (filters.classType.length === 0 || filters.classType.includes(item.classType)) &&
        (filters.riskLevel.length === 0 || filters.riskLevel.includes(item.riskLevel)) &&
        (filters.investmentRange.length === 0 ||
          item.minInvestment >= parseInt(filters.investmentRange.split('-')[0].replace("$", "").replace("k", "000").replace("M", "000000").replace("+", "")) &&
          (filters.investmentRange.split('-')[1] ? item.minInvestment <= parseInt(filters.investmentRange.split('-')[1].replace("$", "").replace("k", "000").replace("M", "000000").replace("+", "")) : true)
        ) &&
        (filters.managementFee == 0 || parseFloat(item.feeStructure) <= filters.managementFee) &&
        (filters.investorType.length === 0 || item.investorEligibility.includes(filters.investorType)) &&
        (filters.companyAge.length === 0 || filters.companyAge.some(period => {
          const [min, max] = period.split('-').map(x => parseInt(x.replace('YRS', '')));
          return item.age >= min && item.age <= max;
        })) &&
        (filters.locations.length === 0 || filters.locations.some(region => getTooltipContent(region).includes(item.state)))
      );
    });
    sendFilteredData(filtered, filters);

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
        setCheckedValues(prevValues => ({
          ...prevValues,
          [filterType]: [...prevValues[filterType], value]
        }));
      } else {
        setFilters(prevFilters => ({
          ...prevFilters,
          [filterType]: prevFilters[filterType].filter(item => item !== value)
        }));
        setCheckedValues(prevValues => ({
          ...prevValues,
          [filterType]: prevValues[filterType].filter(item => item !== value)
        }));
      }
    } else if (inputType === "radio") {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: value
      }));
      setCheckedValues(prevValues => ({
        ...prevValues,
        [filterType]: value
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: value
      }));
    }
  };

  const clearFilter = (filterType) => {
    if (filterType === "managementFee") {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: 0,
      }));
      setMngFee(0);
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: []
      }));
      setCheckedValues(prevValues => ({
        ...prevValues,
        [filterType]: []
      }));
    }
  };

  const clearAllFilters = () => {
    setFilters({
      classType: [],
      investmentRange: [],
      managementFee: 0,
      companyAge: [],
      locations: [],
      investorType: [],
      riskLevel: [],
    });
    setCheckedValues({
      classType: [],
      investmentRange: "",
      investorType: "",
      companyAge: [],
      locations: [],
      riskLevel: [],
    });
    setMngFee(0);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const updateMngFeeValue = (event) => {
    setMngFee(event.target.value);
    updateFilters("managementFee", event.target.value, "range");
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
      case "Class A":
        return "These are the highest-quality properties, typically brand new or recently renovated, located in prime locations. They have modern amenities, high-end finishes, and attract top-tier tenants. Class A properties generally offer the lowest risk and lowest cap rates but also tend to come with higher purchase prices."
      case "Class B":
        return "These properties are usually older (10-30 years), but well-maintained and located in desirable areas, although not as prime as Class A. They may have fewer amenities or slightly outdated finishes but still offer a solid return on investment. They often appeal to middle-income tenants and can provide opportunities for renovation or rent increases."
      case "Class C":
        return "These are older properties (typically 30+ years), often in less desirable or transitioning neighborhoods. They may require significant repairs or upgrades and are generally more affordable for tenants with lower incomes. Class C properties tend to have higher potential returns but also come with higher risks, such as increased vacancy rates and maintenance costs."
      default:
        return "";
    }
  };

  return (
    <div className="vsm:hidden md:block bg-white/20 backdrop-blur-sm rounded-b-lg lg:w-[22%] xl:w-[18%] lg:pr-6 mt-4 lg:-mt-4"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        backgroundBlendMode: "overlay"
      }}>
      <div className="border-[1px] border-t-0 border-l-0 border-gray-400 rounded-b-lg px-4">
        <div className="flex items-center justify-center text-lg font-bold YesevaFont text-[#6e30a7] ">
          <p className="uppercase underline whitespace-nowrap flex-shrink">Filter Companies</p>
        </div>
        <FilterSubSection
          list={InvestmentRange}
          title="Investment Range"
          inputType="radio"
          updateFilters={updateFilters}
          filterType="investmentRange"
          clearFilter={clearFilter}
          checkedValues={checkedValues.investmentRange}
        />
        <FilterSubSection
          list={InvestorType}
          title="Investor Type"
          inputType="radio"
          updateFilters={updateFilters}
          filterType="investorType"
          clearFilter={clearFilter}
          checkedValues={checkedValues.investorType}
        />
        <FilterSubSection
          list={ClassType}
          title="Class Type"
          inputType="checkbox"
          updateFilters={updateFilters}
          filterType="classType"
          getTooltipContent={getTooltipContent}
          clearFilter={clearFilter}
          checkedValues={checkedValues.classType}
        />
        <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center px-4 md:px-0 my-4 mx-2 relative">
          <div className="text-xl font-bold text-[#6e30a7]">Management Fee </div>
          <div className="w-[75%] flex items-center justify-between gap-x-4 FilterSection">
            <p className="mt-2">0</p>
            <input
              type="range"
              name="managementFee"
              min={0}
              max={3}
              value={mngFee}
              onChange={updateMngFeeValue}
              step="0.2"
              className="w-full appearance-none bg-gray-200 h-2 rounded-full mt-2 outline-none focus:outline-none"
              style={{
                background: `linear-gradient(to right, #6e30a7 0%, #6e30a7 ${(mngFee / 3) * 100}%, #CBD5E0 ${(mngFee / 3) * 100}%, #CBD5E0 100%)`,
              }} />
            <p className="mt-2">{mngFee == 0 ? 3 : mngFee}%</p>
          </div>
          <Tooltip title="Clear filter" className="absolute top-2 right-2" onClick={() => clearFilter("managementFee")}>
            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#6e30a7" d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" /></svg>
          </Tooltip>
        </div>
        {/* <button className="bg-[#6e30a7] px-2 text-[#fff] rounded-lg" onClick={() => clearFilter("managementFee")}>Clear filter</button> */}
        <FilterSubSection
          list={CompanyAge}
          title="Company Age"
          inputType="checkbox"
          updateFilters={updateFilters}
          filterType="companyAge"
          clearFilter={clearFilter}
          checkedValues={checkedValues.companyAge}
        />
        <div>
          <FilterSubSection
            list={RiskLevel}
            title="Risk Level"
            inputType="checkbox"
            updateFilters={updateFilters}
            filterType="riskLevel"
            getTooltipContent={getTooltipContent}
            clearFilter={clearFilter}
            checkedValues={checkedValues.riskLevel}
          />
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
            checkedValues={checkedValues.locations}
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button className="bg-[#6e30a7] px-4 py-2 text-[#fff] rounded-lg" onClick={applyFilters}>Apply Search</button>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button className="bg-[#6e30a7] px-4 py-2 text-[#fff] rounded-lg" onClick={clearAllFilters}>Clear All Filters</button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
