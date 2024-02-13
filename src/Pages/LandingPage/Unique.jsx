import React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
import FilterCard from './FilterCard';
import ReactCardCarousel from "react-card-carousel";

function Unique() {
    const getArcLabel = (params) => {
        return `${(params.value)}%`;
    };
    const Headings = ["Category Type", "Location", "Investment Range", "Investment Hold Period", "ROI Percent"]
    const LI1 = ["Commerical Property", "Rental Property", "Single-House Property", "Multi-House Property", "Housing Property"]
    const LI2 = ["Texas", "New York", "California", "Massachusetts", "Colorado"]
    const LI3 = ["$100-$1K", "$1K-$10K", "$10K-$50K", "$50K-$100K", "$100K-$500K"]
    const LI4 = ["0Yrs-1Yrs", "1rs-2rs", "2rs-5rs", "5rs-7rs", "7rs+"]
    const LI5 = ["0%-2%", "2%-5%", "5%-7%", "7%-10%", "10%+"]

    return (
        <div className="mx-auto p-4">
            <div className="p-4">
                <h2 className="text-2xl md:text-3xl mb-2 CustomizeFontH">WHAT MAKES US <span className='text-[#9747FF]'>DIFFERENT</span>?</h2>
                {/* <div className="flex items-center justify-around">
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-xl font-semibold">2,000</p>
                        <p className="">Active Users</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <p className="text-xl font-semibold">50+</p>
                        <p className="">Properties</p>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-xl font-semibold">$2.5M</p>
                        <p className="">Portfolio Value</p>
                    </div>
                </div> */}
            </div>
            <div className="px-4 vsm:grid vsm:gap-4 lg:gap-x-8 vsm:mx-4 md:mx-24 lg:flex">
                <div className="lg:w-[50%] flex flex-col items-center justify-center lg:-mt-12">
                    <h2 className="text-2xl CustomizeFontH">WHO ARE WE?</h2>
                    <p className='text-justify'>
                        UpChange Investment offers a comprehensive perspective on a diverse
                        array of real estate investment opportunities, sourced from various
                        firms. It establishes a streamlined system that enables investors to
                        conveniently evaluate and compare m ultiple investment options on a
                        single platform. This platform empowers investors to make
                        well-informed decisions when allocating their capital, thereby
                        maximizing their potential returns.
                    </p>
                </div>
                <div className='relative vsm:h-[67vh] md:h-[70vh] lg:mx-[7vw] lg:h-[63vh] 2xl:h-[40vh]'>
                    <div className='nowrap text-nowrap flex items-center justify-center text-2xl CustomizeFontH'>
                        NAVIGATE YOUR WEALTH
                    </div>
                    <div className="">
                        <ReactCardCarousel autoplay={true} autoplay_speed={5000} cl1assName="mt-36">
                            <div>
                                <FilterCard heading={`Filter by ${Headings[0]}`} items={LI1} />
                            </div>
                            <div>
                                <FilterCard heading={`Filter by ${Headings[1]}`} items={LI2} />
                            </div>
                            <div>
                                <FilterCard heading={`Filter by ${Headings[2]}`} items={LI3} />
                            </div>
                            <div>
                                <FilterCard heading={`Filter by ${Headings[3]}`} items={LI4} />
                            </div>
                            <div>
                                <FilterCard heading={`Filter by ${Headings[4]}`} items={LI5} />
                            </div>
                        </ReactCardCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Unique;
