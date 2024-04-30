import React, { useState } from 'react';
import { Drawer } from "@material-tailwind/react";
import Tooltip from '@mui/material/Tooltip';

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

function MobileFilterDrawer({ open, closeDrawer, data, Index }) {
    const [price, setPrice] = useState(0);

    const updateIrrValue = (event) => {
        let value = event.target.value;
        setPrice(value);
    };

    const { title, options, inputType } = data || {};
    return (
        <Drawer open={open} className="p-4 fixed left-0 top-0 z-50 bg-white/20 backdrop-blur-xl text-xl " >
            <div variant="text" className="w-full flex justify-end" color="blue-gray" onClick={() => closeDrawer()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div className="flex items-center justify-start font-['Playfair-Display'] mb-4">
                <div className="text-xl text-[#6e30a7]">{title}</div>
            </div>
            <div className="flex flex-col gap-3 max-w-xs md:max-w-md font-['Playfair-Display']">
                {options &&
                    options.map((propertyType, index) => (
                        <label key={index} className="flex flex-row gap-4 w-full items-center">
                            <input
                                name={inputType === "radio" ? "radioType" : propertyType}
                                type={inputType}
                                value={propertyType}
                                className="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <Tooltip key={propertyType} title={getTooltipContent(propertyType)}>
                                <div className="text-base">{propertyType}</div>
                            </Tooltip>
                        </label>
                    ))
                }
                {Index === 4 && <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center my-4">
                    <div className="font-['Asap'] w-[80%]">
                        <input type="text" className="w-full bg-gray-100 border py-2 px-4 rounded-md outline-none border-1 border-[#6e30a7]" />
                    </div>
                </div>}

                {Index === 5 &&
                    <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center my-4">
                        <div className="flex items-center">
                            <p className='text-[#6e30a7]'>0</p>
                            <div className="flex-grow mx-4 FilterSection">
                                <input type="range" name="priceIRR" min={0} max={50} value={price} onChange={updateIrrValue} step="5" className="w-full appearance-none bg-gray-200 h-2 rounded-full outline-none focus:outline-none"
                                    style={{ background: `linear-gradient(to right, #6e30a7 0%, #6e30a7 ${(price / 50) * 100}%, #CBD5E0 ${(price / 50) * 100}%, #CBD5E0 100%)`, }} />
                            </div>
                            <p className='text-[#6e30a7]'>{price}</p>
                        </div>
                    </div>
                }
            </div >
        </Drawer >
    )
}

export default MobileFilterDrawer;
