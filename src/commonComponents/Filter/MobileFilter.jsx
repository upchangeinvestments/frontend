import React from 'react';

const dataObject = [
    {
        title: "Categories",
        options: ["Residential", "Hotel", "Retail", "Warehouse & Storage", "Medical Facilities", "Mobile Home Parks", "Office", "Land & Infrastructure"],
        inputType: "checkbox",
    },
    {
        title: "Location",
        options: ["West", "Central", "South", "Midwest", "East"],
        inputType: "checkbox",
    },
    {
        title: "Investment Range",
        options: ["$100-$1k", "$1k-$10k", "$10k-$50k", "$50k-$100k", "$100k-$500k", "$500k-$1M", "$1M+"],
        inputType: "radio",
    },
    {
        title: "Hold Period",
        options: ["2YRS-4YRS", "4YRS-6YRS", "6YRS-8YRS", "8YRS-9YRS", "9YRS-10YRS", "10YRS+"],
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
        <div className="relative vsm:block md:hidden my-4 font-['Playfair-Display'] bg-white/20 backdrop-blur-sm py-4">
            <div className="flex overflow-x-scroll gap-x-3 pr-4 pl-4">
                {dataObject.map((element, index) => (
                    <button
                        onClick={() => {
                            openDrawer(index);
                            passDataObject(dataObject[index]);
                        }}
                        key={index}
                        className="whitespace-nowrap inline-flex items-center justify-center vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 border border-transparent rounded-lg shadow-sm vsm:text-base lg:text-base xl:text-lg font-medium text-white bg-[#6e30a7] hover:bg-[#8e47ec] bg-gradient-to-r from-purple-500 to-purple-700"
                    >
                        {element.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MobileFilter