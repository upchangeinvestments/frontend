import React from 'react'

function FilterSubSection(props) {
    return (
        <div>
            <div className="flex flex-col w-full font-['Archive'] items-start justify-center px-4 md:px-0 my-4 mx-2">
                <div className="text-xl text-[rgba(151,_71,_255,_0.93)]">{props.title}</div>
                <div className="flex flex-col gap-3 max-w-xs md:max-w-md font-['Asap']">
                    {props.list.map((propertyType, index) => (
                        <label key={index} className="flex flex-row gap-4 w-full items-center">
                            <input
                                name={props.inputType === "radio" ? "radioType" : propertyType}
                                type={props.inputType}
                                value={propertyType}
                                className="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <div className="text-sm">{propertyType}</div>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterSubSection