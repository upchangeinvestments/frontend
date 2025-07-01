import React from 'react';

const dataObject = [
    {
        title: "Investment Range",
        options: ["$100-$1k", "$1k-$10k", "$10k-$50k", "$50k-$100k", "$100k-$500k", "$500k-$1M", "$1M+"],
        inputType: "radio",
    },
    {
        title: "Investor Type",
        options: ['Accredited', 'Non-Accredited'],
        inputType: "radio",
    },
    {
        title: "Class Type",
        options: ["Class A", "Class B", "Class C"],
        inputType: "checkbox",
    },
    {
        title: "Management Fee",
    },
    {
        title: "Company Age",
        options: ["1YR-10YRS", "11YRS-20YRS", "21YRS-30YRS", "31YRS-40YRS", "41YRS-50YRS", "51YRS+"],
        inputType: "checkbox",
    },
    {
        title: "Risk Level",
        options: ['High', 'Medium', 'Low'],
        inputType: "checkbox",
    },
    {
        title: "Location",
        options: ["West", "Central", "South", "Midwest", "East"],
        inputType: "checkbox",
    },
];


function MobileFilter({ openDrawer, passDataObject }) {

    return (
        <div className="relative vsm:block md:hidden my-4 font-['Playfair-Display']">
            <div className="flex overflow-x-scroll gap-x-3 pr-4 pl-4 bg-white/20 backdrop-blur-sm py-4">
                {dataObject.map((element, index) => (
                    <button key={index}
                        onClick={() => {
                            openDrawer(index);
                            passDataObject(dataObject[index]);
                        }}
                        className="whitespace-nowrap inline-flex items-center justify-center vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 border border-transparent rounded-lg shadow-sm vsm:text-base lg:text-base xl:text-lg font-medium text-white bg-[#6e30a7] hover:bg-[#8e47ec] bg-gradient-to-r from-purple-500 to-purple-700"  >
                        {element.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MobileFilter