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
    updateFilters(filterType, value, inputType, checked);
  };

  const handleClearFilter = (filterType) => {
    setCheckedValues({});
    clearFilter(filterType);
  };
  return (
    <div>
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
                    checked={checkedValues[propertyType]}
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
      <button className="bg-[#6e30a7] px-2 text-[#fff] rounded-lg" onClick={() => handleClearFilter(filterType)}>Clear filter</button>
    </div >
  );
}

export default FilterSubSection;
