import React, { useState } from 'react';
import { Drawer } from "@material-tailwind/react";

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
            <div className="flex items-center justify-start CustomizeFontH">
                <div className="text-xl text-[rgba(151,_71,_255,_0.93)]">{title}</div>
            </div>
            <div className="flex flex-col gap-3 max-w-xs md:max-w-md font-['Asap']">
                {options &&
                    options.map((propertyType, index) => (
                        <label key={index} className="flex flex-row gap-4 w-full items-center">
                            <input
                                name={inputType === "radio" ? "radioType" : propertyType}
                                type={inputType}
                                value={propertyType}
                                className="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <div className="text-base">{propertyType}</div>
                        </label>
                    ))
                }
                {Index === 5 && <div className="flex flex-col w-full font-['Archive'] items-start justify-center my-4">
                    <div className="font-['Asap'] w-[80%]">
                        <input type="text" name="" className="w-full bg-gray-100 border py-2 px-4 rounded-md outline-none	border-1 border-[#9747FF]" />
                    </div>
                </div>}

                {Index === 6 &&
                    <div className="flex flex-col w-full font-['Archive'] items-start justify-center my-4">
                        <div className="w-[80%]">
                            <p>{price}</p>
                            <input type="range" name="priceIRR" min={0} max={100} value={price} onChange={updateIrrValue} step="1" className="w-full mt-4" />
                        </div>
                    </div>
                }
            </div >
        </Drawer >
    )
}

export default MobileFilterDrawer;
