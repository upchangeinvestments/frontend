import React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
import SimpleCard from './SimpleCard';
import ReactCardCarousel from "react-card-carousel";

function Unique() {
    const getArcLabel = (params) => {
        return `${(params.value)}%`;
    };
    const Headings = ["Category Type", "Location", "Investment Range"]
    const LI1 = ["Commerical Property", "Rental Property", "Single-House Property", "Multi-House Property", "Housing Property"]
    const LI2 = ["Texas", "New York", "California", "Massachusetts", "Colorado", "Seattle"]
    const LI3 = ["$100-$1K", "$1K-$10K", "$10K-$50K", "$50K-$100K", "$100K-$500K"]

    return (
        <div className="mx-auto p-4 md:mb-[30vh] lg:mb-0">
            <div className="p-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">WHAT MAKES US DIFFERENT?</h2>
                <div className="flex items-center justify-around">
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
                </div>
            </div>
            <div className="px-4 vsm:grid vsm:grid-rows-2 vsm:gap-4 md:gap-x-6 vsm:mx-4 md:mx-24 lg:flex">
                <div className="lg:w-[50%]">
                    <h2 className="text-2xl font-semibold">WHO ARE WE?</h2>
                    <p className='text-justify'>
                        UpChange Investment offers a comprehensive perspective on a diverse
                        array of real estate investment opportunities, sourced from various
                        firms. It establishes a streamlined system that enables investors to
                        conveniently evaluate and compare multiple investment options on a
                        single platform. This platform empowers investors to make
                        well-informed decisions when allocating their capital, thereby
                        maximizing their potential returns.
                    </p>
                </div>
                <div className='h-full relative md:mt-[15vh] lg:mx-[23vw] lg:my-[25vh]'>
                    <ReactCardCarousel autoplay={true} autoplay_speed={5000} cl1assName="absolute ">
                        <div>
                            <SimpleCard heading={Headings[0]} items={LI1} />
                        </div>
                        <div>
                            <SimpleCard heading={Headings[1]} items={LI2} />
                        </div>
                        <div>
                            <SimpleCard heading={Headings[2]} items={LI3} />
                        </div>
                    </ReactCardCarousel>
                </div>
            </div>
        </div>
    );
}

export default Unique;
