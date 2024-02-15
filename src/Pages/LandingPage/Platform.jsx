import React from 'react';
import "../../styles/LandingPage/Platform.css";
import HowItWorks from './HowItWorks';


const HowInvestmentWorks = () => {
    return (
        <div className="md:mx-12 lg:mx-12 xl:mx-24">
            <h1 className="flex justify-center CustomizeFontH w-full my-8 mx-auto vsm:text-2xl md:text-3xl">HOW INVESTMENT WORKS</h1>
            <div className="flex flex-col items-center justify-center w-[100%]">
                <div className="grid grid-cols-9 w-[60%]">
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl font-bold">2</div>
                    </div>
                    <div className="col-span-3 mx-8">
                        <div className="h-[50%]"></div>
                        <div className="border-t-2 border-black h-[50%]"></div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl font-bold">1</div>
                    </div>
                    <div className="col-span-3 mx-8">
                        <div className="h-[50%]"></div>
                        <div className="border-t-2 border-black h-[50%]"></div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl font-bold">3</div>
                    </div>
                </div>
                <div className="grid grid-cols-9 w-[60%] my-2">
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <div className="text-xl font-bold ">USERS</div>
                    </div>
                    <div className="col-span-3"></div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <div className="text-xl font-bold">UPCIN</div>
                    </div>
                    <div className="col-span-3"></div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <div className="text-xl font-bold text-nowrap">INVESTMENT FIRMS</div>
                    </div>

                </div>
            </div>
            <HowItWorks />
        </div>
    );
};

export default HowInvestmentWorks;
