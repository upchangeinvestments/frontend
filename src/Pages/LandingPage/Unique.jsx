import React from 'react';
import FilterCard from './FilterCard';
import ReactCardCarousel from "react-card-carousel";

function Unique() {
    const Headings = ["Category Type", "Location", "Investment Range", "Investment Hold Period", "ROI Percent", "Company"]
    const LI1 = ["Commerical Property", "Rental Property", "Single-House Property", "Multi-House Property", "Housing Property"]
    const LI2 = ["Texas", "New York", "California", "Massachusetts", "Colorado"]
    const LI3 = ["$100-$1K", "$1K-$10K", "$10K-$50K", "$50K-$100K", "$100K-$500K"]
    const LI4 = ["0Yrs-1Yrs", "1rs-2rs", "2rs-5rs", "5rs-7rs", "7rs+"]
    const LI5 = ["0%-2%", "2%-5%", "5%-7%", "7%-10%", "10%+"]
    const LI6 = ["RealtyMogul", "Cadre", "Fundrise", "Yieldstreet", "DiversyFund"]

    return (
        <div className="mx-auto p-4">
            <div className="p-4">
                <h2 className="text-2xl md:text-3xl mb-2 CustomizeFontH">WHAT MAKES US <span className='text-[#9747FF]'>DIFFERENT</span>?</h2>
            </div>
            <div className="px-4 vsm:grid vsm:gap-4 lg:gap-x-8 vsm:mx-4 md:mx-24 lg:flex">
                <div className="lg:w-[50%] flex flex-col items-center justify-center lg:-mt-12 text-white">
                    <h2 className="text-2xl CustomizeFontH">WHO ARE WE?</h2>
                    <p className='text-justify mt-2 lg:pl-16'>
                        <span className='flex items-start justify-center'>Welcome to the world of Lynkinfinite Investments: </span>
                        where we provide a comprehensive perspective on a diverse array of real estate investment opportunities sourced from various firms. Our platform establishes a streamlined system that empowers investors to conveniently evaluate and compare multiple investment options in one place. With Lynkinfinite, you can tailor your investment strategy to align with your specific preferences, offering flexibility in choosing an investment range, preferred location, selecting reputable investment firms and much more. Customize your Return on Investment (ROI) expectations and other parameters to suit your individual requirements.
                        We believe in empowering you to make well-informed decisions, maximizing your potential returns as you embark on your investment journey.
                    </p>
                </div>
                <div className='relative vsm:h-[410px] lg:h-[390px] lg:mx-[70px] xl:h-[400px] xl:mx-auto'>
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
                            <div>
                                <FilterCard heading={`Filter by ${Headings[5]}`} items={LI6} />
                            </div>
                        </ReactCardCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Unique;
