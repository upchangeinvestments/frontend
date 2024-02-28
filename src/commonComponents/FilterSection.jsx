import FilterSubSection from "./FilterSubSection";
// import { Slider } from "@material-tailwind/react";
import { Tooltip, Button } from "@material-tailwind/react";
// import { Range } from 'react-range';
import React, { useState } from 'react'


function FilterSection() {
    const CategoryType = ['Commercial Property', 'Rental Property', 'Single-Family Property', 'Multi-Family Property', 'Housing Property'];
    const LocationType = ["Dallas, Texas", "New York", "California", "Austin", "Seattle"];
    const CompanyType = ["Diversified Healthcare Trust", "Angel Oak Mortgage, Inc.", "Tanger, Inc", "Modiv Industrial, Inc.", "Park Hotels & Resorts"];
    const InvestmentRange = ["$100-$1K", "$1K-$10K", "$10K-$50K", "$50K-$100K", "$100K-$500K", "$500K-$1M", "$1M+"];
    const HoldPeriod = ["0YRS-1YRS", "1YRS-2YRS", "2YRS-5YRS", "5YRS-7YRS", "7YRS-10YRS", "10YRS+"]

    const [price, setPrice] = useState(0);
    const updateIrrValue = (event) => {
        let value = event.target.value;
        setPrice(value);
    };
    return (
        <div className="vsm:hidden md:block bg-white/20 backdrop-blur-sm rounded-lg lg:w-[22%] xl:w-[18%] p-2 pr-6" style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
            backgroundBlendMode: "overlay",
        }}>
            <FilterSubSection list={CategoryType} title="Categories" inputType="checkbox" />
            <FilterSubSection list={LocationType} title="Locations" inputType="checkbox" />
            <FilterSubSection list={InvestmentRange} title="Investment Range" inputType="radio" />
            <div className="flex flex-col w-full font-['Archive'] items-start justify-center px-4 md:px-0 my-4 mx-2">
                <div className="text-xl text-[rgba(151,_71,_255,_0.93)]">Zip Code </div>
                <div className="font-['Asap'] w-[80%]">
                    <input type="text" name="" className="w-full bg-gray-100 border py-2 px-4 rounded-md outline-none	border-1 border-[#9747FF]" />
                </div>
            </div>
            <div className="flex flex-col w-full font-['Archive'] items-start justify-center px-4 md:px-0 my-4 mx-2">
                <Tooltip content="Internal rate of return" placement="right" className="bg-white/50 p-1 px-3 text-black ml-2">
                    <div className="text-xl text-[rgba(151,_71,_255,_0.93)]">IRR </div>
                </Tooltip>
                <div className="w-[75%] flex items-center justify-center gap-x-4 FilterSection">
                    <p>{price}</p>
                    <input
                        type="range"
                        name="priceIRR"
                        min={0}
                        max={100}
                        value={price}
                        onChange={updateIrrValue}
                        step="1"
                        className="w-full appearance-none bg-gray-200 h-2 rounded-full mt-2 outline-none focus:outline-none"
                        style={{
                            background: `linear-gradient(to right, #9747FF 0%, #9747FF ${(price / 100) * 100}%, #CBD5E0 ${(price / 100) * 100}%, #CBD5E0 100%)`
                        }}
                    />

                </div>
            </div>
            <FilterSubSection list={HoldPeriod} title="Hold Period" inputType="radio" />
            <FilterSubSection list={CompanyType} title="Companies" inputType="checkbox" />
        </div>
    )
}

export default FilterSection