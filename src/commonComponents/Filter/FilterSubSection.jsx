import React, { useState } from "react";
import Tooltip from '@mui/material/Tooltip';

function FilterSubSection({ list, title, inputType, updateFilters, filterType, getTooltipContent, clearFilter }) {
  const [showAll, setShowAll] = useState(true);

  const visibleItems = showAll ? list : list.slice(0, 3);
  const [checkedValues, setCheckedValues] = useState({});

  const handleInputChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedValues((prevValues) => ({ ...prevValues, [value]: true }));
    } else {
      setCheckedValues((prevValues) => ({ ...prevValues, [value]: false }));
    }
    // console.log("filter type: ", filterType);
    updateFilters(filterType, value, inputType, checked);
  };

  const handleClearFilter = (filterType) => {
    setCheckedValues({});
    clearFilter(filterType);
  };
  return (
    <div className="relative">
      <div className="flex flex-col w-full items-start justify-center px-4 md:px-0 my-4 mx-2">
        <div className="text-xl mb-2 font-bold text-[#6e30a7] font-['Playfair-Display']">
          {title}
        </div>
        <div className="flex flex-col gap-3 max-w-xs md:max-w-md font-['Playfair-Display']">
          {filterType === "locations" ? (   // this section is only to show ToolTip
            visibleItems.map((propertyType, index) => (
              <Tooltip title={getTooltipContent(propertyType)} arrow key={index}>
                <label className="flex flex-row gap-4 w-full items-center uppercase">
                  <input
                    name={inputType === "radio" ? "radioType" : propertyType}
                    type={inputType}
                    value={propertyType}
                    checked={checkedValues[propertyType] === true}
                    className="w-4 h-4 text-[#6e30a7]"
                    onChange={handleInputChange}
                  />
                  <div className="text-sm">{propertyType}</div>
                </label>
              </Tooltip>
            ))
          ) : (
            visibleItems.map((propertyType, index) => (
              <label key={index} className="flex flex-row gap-4 w-full items-center uppercase">
                <input
                  name={inputType === "radio" ? "radioType" : propertyType}
                  type={inputType}
                  value={propertyType}
                  checked={checkedValues[propertyType]}
                  className="w-4 h-4 text-[#6e30a7]"
                  onChange={handleInputChange}
                />
                <div className="text-sm">{propertyType}</div>
              </label>
            ))
          )}

        </div>
      </div>
      <Tooltip title="Clear filter" className="absolute top-2 right-0" onClick={() => handleClearFilter(filterType)}>
        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#6e30a7" d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" /></svg>
      </Tooltip>
      {/* <button className="bg-[#6e30a7] px-2 text-[#fff] rounded-lg" onClick={() => handleClearFilter(filterType)}>Clear filter</button> */}
    </div >
  );
}

export default FilterSubSection;
