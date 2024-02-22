import React from 'react';
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css"
import Lipika_mam from "../../assets/LS_Photo.png"
import { ImQuotesLeft } from "react-icons/im";


function AboutUs() {
    return (
        <div className="overflow-x-hidden mb-24">
            <div className='aboutMain'>
                <Navbar />
                <div className="lg:h-[60vh] xl:h-[50vh] relative">
                    <div className="flex items-center justify-center">
                        <p className='text-white text-6xl lg:mt-[100px] xl:mt-[200px] font-[Asap]'>ABOUT US</p>
                    </div>
                    <div className='absolute bottom-0 left-0'>
                        <div className="bg-white/20 backdrop-blur-xl p-8 w-[100vw]">
                            <div className="flex items-center justify-center mx-auto w-[60%]">
                                <div className="flex basis-1/2 items-center justify-center">
                                    <h2 className="text-2xl font-semibold flex items-center justify-center">Company at a glance</h2>
                                </div>
                                <div className="basis-1/2 flex items-center justify-center text-white gap-x-16">
                                    <div className="">
                                        <p className="text-sm font-medium mb-2">Founded</p>
                                        <p className="text-lg">2024</p>
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-medium mb-2">Founder</p>
                                        <p className="text-lg">Lipika Sharma</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto mt-16 w-[50%]">
                <div className="bg-white/20 backdrop-blur-xl p-8 px-10 relative w-full">
                    <img className='w-32 rounded-full absolute -right-10 -top-10 bg-center' src={Lipika_mam} alt="Lipika Sharma" />
                    <div className="absolute -top-5 left-0"><ImQuotesLeft color='gray' size="50px" className='opacity-[0.2]' /></div>
                    <div className="text-2xl">Words from CEO</div>
                    <div className="flex items-center justify-center text-2xl"><p>LynkInfinite Investments</p></div>
                    <p className="text-justify mr-8">
                        Welcome to Lynkinfinite Investments, your gateway to a world of diverse and accessible real estate investment opportunities. Founded in 2024, Lynkinfinite is a cutting-edge platform designed to revolutionize the way investors approach real estate.
                        At Lynkinfinite, we recognize that the world of investing should be inclusive and available to everyone. Our platform eliminates the complexities typically associated with real estate investments by providing a centralized system that aggregates opportunities from various reputable firms. Our streamlined approach empowers investors to explore, evaluate, and compare multiple real estate investment options seamlessly. Whether you're looking to customize your investment range, choose preferred locations, or select reputable investment firms, Lynkinfinite offers the flexibility to tailor your strategy according to your specific preferences. We believe in breaking down barriers to make informed investment decisions accessible to all. Customize your Return on Investment (ROI) expectations and other parameters to align with your individual requirements.
                        is dedicated to empowering you to make well-informed decisions, maximizing your potential returns as you embark on your investment journey. Welcome to Lynkinfinite Investments – where your investment goals become possibilities, and the world of real estate investing is at your fingertips. Join us in reshaping the landscape of accessible and comprehensive investment solutions.
                    </p>
                </div>
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold text-center my-8">Modern Real Estate Investment solutions</h2>
            </div>
            <div className="flex items-center justify-center lg:w-[80%] xl:w-[60%] gap-x-8 mx-auto text-white">
                <div className="p-8 text-xl border border-1 border-[#9747FF] basis-1/3 AboutCard">
                    <div className="text-3xl font-semibold mb-10">Vision</div>
                    <div className="text-sm font-light"> <p>We envision a dynamic platform for seamless exploration and comparison of diverse opportunities, empowering investors with robust analytics.</p>
                    </div>
                </div>
                <div className="p-8 text-xl border border-1 border-[#9747FF] basis-1/3 AboutCard">
                    <div className="text-3xl font-semibold mb-10">Mission</div>
                    <div className="text-sm font-light">
                        <p>To empower investors with the tools and information needed to make informed real estate investment decisions, while facilitating collaboration and growth within the real estate funding industry.</p>
                    </div>
                </div>
                <div className="p-8 text-xl border border-1 border-[#9747FF] basis-1/3 AboutCard" >
                    <div className="text-3xl font-semibold mb-10">Values</div>
                    <div className="text-sm font-light">
                        <p>We are driven by the following values: </p><br />
                        <span className='font-bold text-[#9747FF]'><p>Comprehensive Search:</p></span>
                        <p>Investors efficiently find real estate opportunities from diverse companies in one place.</p><br />
                        <span className='font-bold text-[#9747FF]'><p>Comparison Tools:</p></span>
                        <p>Robust analytics enable investors to evaluate and compare investment options.</p> <br />
                        <span className='font-bold text-[#9747FF]'>Network Building:</span>
                        <p>Real estate funding companies gain visibility, expanding their network for project funding.</p><br />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs


// Lynkinfinite Investments
// 2: 24 AM
// we envision a dynamic platform for seamless exploration and comparison of diverse opportunities, empowering investors with robust analytics.