import React from 'react'

const dataObject = [
    {
        title: "Categories",
        options: ["Residential", "Hotels", "Retail", "Warehouse & Storage", "Medical Facilites", "School", "Office", "Land & Infrastructure"],
        inputType: "checkbox",
    },
    {
        title: "Location",
        options: ["West", "Central", "South", "Midwest", "East"],
        inputType: "checkbox",
    },
    {
        title: "Companies",
        options: [
            "Diversified Healthcare Trust",
            "Angel Oak Mortgage, Inc.",
            "Tanger, Inc",
            "Modiv Industrial, Inc.",
            "Park Hotels & Resorts",
        ],
        inputType: "checkbox",
    },
    {
        title: "Investment Range",
        options: [
            "$100-$1K",
            "$1K-$10K",
            "$10K-$50K",
            "$50K-$100K",
            "$100K-$500K",
            "$500K-$1M",
            "$1M+",
        ],
        inputType: "radio",
    },
    {
        title: "Hold Period",
        options: [
            "2YRS-4YRS",
            "4YRS-6YRS",
            "6YRS-8YRS",
            "8YRS-9YRS",
            "9YRS-10YRS",
            "10YRS+",
        ],
        inputType: "checkbox",
    },
    {
        title: "Zip Code",
    },
    {
        title: "IRR",
    },
];

function MobileFilter({ openDrawer, passDataObject }) {
    return (
        <div className="relative vsm:block md:hidden my-4 bg-white/20 backdrop-blur-sm py-4">
            <div className="flex overflow-x-scroll gap-x-3 pr-4 pl-4">
                {dataObject.map((element, index) => (
                    <button
                        onClick={() => {
                            openDrawer(index);
                            passDataObject(dataObject[index]);
                        }}
                        key={index}
                        className="whitespace-nowrap inline-flex items-center justify-center vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 border border-transparent rounded-lg shadow-sm vsm:text-base lg:text-base xl:text-lg font-medium text-white bg-[#9747FF] hover:bg-[#8e47ec] bg-gradient-to-r from-purple-500 to-purple-700"
                    >
                        {element.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MobileFilter