import React, { useState } from "react";
import Tooltip from '@mui/material/Tooltip';

function FilterSubSection({ list, title, inputType, updateFilters, filterType, getTooltipContent }) {
  const [showAll, setShowAll] = useState(true);

  const visibleItems = showAll ? list : list.slice(0, 3);

  return (
    <div>
      <div className="flex flex-col w-full items-start justify-center px-4 md:px-0 my-4 mx-2">
        <div className="text-xl mb-2 font-bold text-[#6e30a7] font-['Playfair-Display']">
          {title}
        </div>
        <div className="flex flex-col gap-3 max-w-xs md:max-w-md font-['Playfair-Display']">
          {filterType === "locations" ? (   // this code is only to show ToolTip
            visibleItems.map((propertyType, index) => (
              <Tooltip title={getTooltipContent(propertyType)} arrow >
                <label key={index} className="flex flex-row gap-4 w-full items-center uppercase">
                  <input
                    name={inputType === "radio" ? "radioType" : propertyType}
                    type={inputType}
                    value={propertyType}
                    className="w-4 h-4 text-[#6e30a7]"
                    onChange={e => updateFilters(filterType, e.target.value, inputType)}
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
                  className="w-4 h-4 text-[#6e30a7]"
                  onChange={e => updateFilters(filterType, e.target.value, inputType)}
                />
                <div className="text-sm">{propertyType}</div>
              </label>
            ))
          )}

        </div>
      </div>
    </div >
  );
}

export default FilterSubSection;
