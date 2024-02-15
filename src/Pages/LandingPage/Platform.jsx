import React from 'react';
import "../../styles/LandingPage/Platform.css";
import HowItWorks from './HowItWorks';

const HowInvestmentWorks = () => {
    return (
        <div className="md:mx-12 lg:mx-12 xl:mx-24">
            <h1 className="flex justify-center CustomizeFontH w-full my-8 mx-auto vsm:text-2xl md:text-3xl">HOW INVESTMENT WORKS</h1>
            <HowItWorks />
            <div className="flex flex-col items-center justify-center vsm:hidden md:block">
                <div className="flex flex-row justify-center mb-8 items-start">
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <h2 className="text-xl CustomizeFontH mb-4 text-[#9747FF] border-t border-[#9747FF] w-2/3 mx-auto">USERS</h2>
                        <p className="mb-4 w-3/4 mx-auto text-justify	">You will get real estate properties updates from trusted firms.</p>
                        <div className="bg-[url('https://i.postimg.cc/zH3z6Yhc/users.png')] md:w-[55%] bg-cover">
                            <img className="left_image" src="https://i.postimg.cc/zH3z6Yhc/users.png" alt="" />
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <h2 className="text-xl CustomizeFontH mb-4 text-[#9747FF] border-t border-[#9747FF] w-5/6 mx-auto">UPCHANGE INVESTMENTS</h2>
                        <p className="mb-4 w-3/4 mx-auto text-justify	">We provide benefits to our users and firms.</p>
                        <div className="flex justify-center items-center md:h-20 lg:h-40 xl:h-44" >
                            <img className="w-[65%]" src="https://i.postimg.cc/k5YW45LC/footer-Logo.jpg" alt="" />
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <h2 className="text-xl CustomizeFontH mb-4 text-[#9747FF] border-t border-[#9747FF] w-2/3 mx-auto">FIRMS</h2>
                        <p className="mb-4 w-3/4 mx-auto text-justify	">Get your posts viewed by the right and interested audience.</p>
                        <div className="bg-[url('https://i.postimg.cc/FdTFTHYS/firms.png')] md:w-[40%] lg:w-[45%] xl:w-[35%] bg-cover">
                            <img className="right_image" src="https://i.postimg.cc/FdTFTHYS/firms.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* Add any additional image or graphics here */}
            </div>
        </div>
    );
};

export default HowInvestmentWorks;