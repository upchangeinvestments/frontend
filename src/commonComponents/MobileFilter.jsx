import React from 'react';
import {
    Drawer,
} from "@material-tailwind/react";

function MobileFilter({ open, closeDrawer, data }) {
    const { title, options, inputType } = data || {};
    return (
        <Drawer open={open} className="p-4 fixed left-0 top-0 z-50 bg-white/20 backdrop-blur-xl  text-xl" >
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
            <form className="flex flex-col gap-3 max-w-xs md:max-w-md font-['Asap']">
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
                    ))}
            </form>
        </Drawer>
    )
}

export default MobileFilter;