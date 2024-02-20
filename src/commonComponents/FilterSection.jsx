import FilterSubSection from "./FilterSubSection";
import { Slider } from "@material-tailwind/react";


function FilterSection() {
    const CategoryType = ['Commercial Property', 'Rental Property', 'Single-Family Property', 'Multi-Family Property', 'Housing Property'];
    const LocationType = ["Dallas, Texas", "New York", "California", "Austin", "Seattle"];
    const CompanyType = ["Diversified Healthcare Trust", "Angel Oak Mortgage, Inc.", "Tanger, Inc", "Modiv Industrial, Inc.", "Park Hotels & Resorts"];
    const InvestmentRange = ["$100-$1K", "$1K-$10K", "$10K-$50K", "$50K-$100K", "$100K-$500K", "$500K-$1M", "$1M+"];
    const HoldPeriod = ["0Yrs-1Yrs", "1rs-2rs", "2rs-5rs", "5rs-7rs", "7rs-10Yrs", "10Yrs+"]

    return (
        <div className="bg-white/20 backdrop-blur-sm rounded-lg w-[20%] p-2" style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
            backgroundBlendMode: "overlay",
        }}>
            <FilterSubSection list={CategoryType} title="Category Type" inputType="checkbox" />
            <FilterSubSection list={LocationType} title="Location" inputType="checkbox" />
            <FilterSubSection list={InvestmentRange} title="Investment Range" inputType="radio" />
            <div className="flex flex-col w-full font-['Archive'] items-start justify-center px-4 md:px-0 my-4 mx-2">
                <div className="text-xl text-[rgba(151,_71,_255,_0.93)]">Zip Code </div>
                <div className="font-['Asap']">
                    <input type="text" name="" className="bg-gray-100 border py-2 px-4 rounded-md outline-none	border-1 border-[#9747FF]" />
                </div>
            </div>
            <div className="flex flex-col w-full font-['Archive'] items-start justify-center px-4 md:px-0 my-4 mx-2">
                <div className="text-xl text-[rgba(151,_71,_255,_0.93)]">IRR </div>
                <div className="w-[80%]">
                    <Slider className="color-[#9747FF]" defaultValue={0} style={{ color: "red" }} />
                </div>
            </div>
            <FilterSubSection list={HoldPeriod} title="Hold Period" inputType="radio" />
            <FilterSubSection list={CompanyType} title="Companies" inputType="checkbox" />
        </div>
    )
}

export default FilterSection