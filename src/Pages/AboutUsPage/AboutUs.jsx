import React from 'react';
import Lipika_mam from "../../assets/LS_Photo.png"
import { ImQuotesLeft } from "react-icons/im";
import BlurBuilding from "../../assets/Building_blur-md.jpg"
import logo from "../../assets/logo2.png";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


function AboutUs() {

    return (
        <div className="overflow-x-hidden vsm:mb-12 md:mb-24">
            <div className="flex mx-auto mt-16 vsm:w-[90%] lg:w-[70%] xl:w-[50%]">
                <div className="bg-white/20 backdrop-blur-xl vsm:p-4 md:p-8 lg:p-6 xl:p-4 md:px-10 relative w-full">
                    <img className='w-32 rounded-full absolute -right-10 -top-10 bg-center' src={Lipika_mam} alt="Lipika Sharma" />
                    <div className="absolute -top-5 left-0"><ImQuotesLeft color='gray' size="50px" className='opacity-[0.2]' /></div>
                    <div className="text-2xl mt-4">Words from CEO</div>
                    <div className="flex items-center justify-center text-2xl vsm:mt-12 md:mt-0">
                        <img className='w-[40%]' src={logo} alt="Infinite Investments" />
                    </div>
                    <p className="flex items-center justify-center text-justify vsm:px-4 md:p-4 xl:px-8 md:mr-8 lg:mr-0">
                        Welcome to Lynkinfinite Investments, your gateway to a world of diverse and accessible real estate investment opportunities. Founded in 2024, Lynkinfinite is a cutting-edge platform designed to revolutionize the way investors approach real estate.
                        At Lynkinfinite, we recognize that the world of investing should be inclusive and available to everyone. Our platform eliminates the complexities typically associated with real estate investments by providing a centralized system that aggregates opportunities from various reputable firms. Our streamlined approach empowers investors to explore, evaluate, and compare multiple real estate investment options seamlessly. Whether you're looking to customize your investment range, choose preferred locations, or select reputable investment firms, Lynkinfinite offers the flexibility to tailor your strategy according to your specific preferences. We believe in breaking down barriers to make informed investment decisions accessible to all. Customize your Return on Investment (ROI) expectations and other parameters to align with your individual requirements.
                        is dedicated to empowering you to make well-informed decisions, maximizing your potential returns as you embark on your investment journey. Welcome to Lynkinfinite Investments – where your investment goals become possibilities, and the world of real estate investing is at your fingertips. Join us in reshaping the landscape of accessible and comprehensive investment solutions.
                    </p>
                </div>
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold text-center my-8 uppercase text-[#9747FF]">Modern Real Estate Investment solutions</h2>
            </div>
            <div className="flex flex-wrap gap-x-12 items-center justify-center w-full">
                <Card className="my-6 w-[250px] ">
                    <CardHeader className="relative flex items-center justify-center -mt-6">
                        <img className='w-[100%] h-[100%]'
                            src={BlurBuilding}
                            alt="card-image"
                        />
                        <p className='text-white absolute m-0 text-5xl CustomizeFontH'>VISION</p>
                    </CardHeader>
                    <CardBody>
                        <p className="py-4 h-60 text-base">
                            We envision a dynamic platform for seamless exploration and comparison of
                            diverse opportunities, empowering investors with robust analytics.
                        </p>
                    </CardBody>
                </Card>
                <Card className="my-6 w-[250px]">
                    <CardHeader className="relative flex items-center justify-center">
                        <img className='w-[100%] h-[100%]'
                            src={BlurBuilding}
                            alt="card-image"
                        />
                        <p className='text-white absolute m-0 text-5xl CustomizeFontH'>Mission</p>
                    </CardHeader>
                    <CardBody>
                        <p className="py-4 h-60 text-base">
                            To empower investors with the tools and information needed to make
                            informed real estate investment decisions, while facilitating collaboration
                            and growth within the real estate funding industry.
                        </p>
                    </CardBody>
                </Card>
                <Card className="my-6 w-[250px]">
                    <CardHeader className="relative flex items-center justify-center">
                        <img className='w-[100%] h-[100%]'
                            src={BlurBuilding}
                            alt="card-image"
                        />
                        <p className='text-white absolute m-0 text-5xl CustomizeFontH'>VALUES</p>
                    </CardHeader>
                    <CardBody>
                        <p className="py-4 h-60 text-base">
                            We are committed to empowering individuals
                            by simplifying real estate investing with transparency, fostering trust
                            through clear information, and propelling innovation to redefine the
                            investment experience.
                        </p>
                    </CardBody>
                </Card>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-16 lg:gap-x-12 xl:gap-x-4 vsm:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto">
                <div className='flex flex-col items-center justify-center mb-20 '>
                    <div className="max-w-[250px] h-[120px] bg-bottom">
                        <div className="relative flex items-center justify-center">
                            <img src={BlurBuilding} className="w-[100%] h-[100%] rounded-t-lg" alt="" />
                            <p className='text-white absolute m-0 text-5xl CustomizeFontH'>VISION</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-b-lg p-4 px-6 w-[250px]">
                        <p className="py-4 h-60 ">
                            We envision a dynamic platform for seamless exploration and comparison of
                            diverse opportunities, empowering investors with robust analytics.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-20 '>
                    <div className="max-w-[250px] h-[120px] bg-bottom">
                        <div className="relative flex items-center justify-center AboutCard">
                            <img src={BlurBuilding} className="w-[100%] h-[100%] rounded-t-lg" alt="" />
                            <p className='text-white absolute m-0 text-5xl CustomizeFontH'>Mission</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-b-lg p-4 px-6 w-[250px]">
                        <p className="py-4 h-60">
                            To empower investors with the tools and information needed to make
                            informed real estate investment decisions, while facilitating collaboration
                            and growth within the real estate funding industry.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-20 '>
                    <div className="max-w-[250px] h-[120px] bg-bottom">
                        <div className="relative flex items-center justify-center AboutCard">
                            <img src={BlurBuilding} className="w-[100%] h-[100%] rounded-t-lg" alt="" />
                            <p className='text-white absolute m-0 text-5xl CustomizeFontH'>Values</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-b-lg p-4 px-6 w-[250px]">
                        <p className='py-4 h-60'>We are committed to empowering individuals
                            by simplifying real estate investing with transparency, fostering trust
                            through clear information, and propelling innovation to redefine the
                            investment experience.
                        </p>
                    </div>
                </div>
            </div> */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 vsm:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
                <div className='rounded-lg p-4 bg-white/20 backdrop-blur-[50px] border-[1px] border-[#9747FF]'>
                    <h2 className="text-xl font-semibold mb-2 ">Vision</h2>
                    <p className="text-justify">
                        We envision a dynamic platform for seamless exploration and comparison of
                        diverse opportunities, empowering investors with robust analytics.
                    </p>
                </div>
                <div className="rounded-lg p-4 bg-white/20 backdrop-blur-[50px] border-[1px] border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2">Mission</h2>
                    <p className="text-justify">
                        To empower investors with the tools and information needed to make
                        informed real estate investment decisions, while facilitating collaboration
                        and growth within the real estate funding industry.
                    </p>
                </div>
                <div className="rounded-lg p-4 bg-white/20 backdrop-blur-[50px] border-[1px] border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2">Values</h2>
                    <p className='text-justify'>we are committed to empowering individuals by simplifying real estate investing with transparency, fostering trust through clear information, and propelling innovation to redefine the investment experience.</p>
                    {/* <div>
                        We are driven by the following values:
                        <br />
                        <span className="font-bold text-[#9747FF]"> <p>Comprehensive Search:</p> </span>
                        <p> Investors efficiently find real estate opportunities from diverse companies in one place. </p> <br />
                        <span className="font-bold text-[#9747FF]"> <p>Comparison Tools:</p> </span>
                        <p> Robust analytics enable investors to evaluate and compare investment options. </p> <br />
                        <span className="font-bold text-[#9747FF]">Network Building:</span>
                        <p>  Real estate funding companies gain visibility, expanding their network for project funding. </p> <br />
                    </div> */}
            {/* </div>
            </div >  */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 vsm:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
                <div className="p-4 AboutCard border border-1 border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2 ">Vision</h2>
                    <p className="">
                        We envision a dynamic platform for seamless exploration and comparison of
                        diverse opportunities, empowering investors with robust analytics.
                    </p>
                </div>
                <div className="p-4 AboutCard border border-1 border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2">Mission</h2>
                    <p className="">
                        To empower investors with the tools and information needed to make
                        informed real estate investment decisions, while facilitating collaboration
                        and growth within the real estate funding industry.
                    </p>
                </div>
                <div className="p-4 AboutCard border border-1 border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2">Values</h2>
                    <div>
                        We are driven by the following values:
                        <br />
                        <span className="font-bold text-[#9747FF]"> <p>Comprehensive Search:</p> </span>
                        <p> Investors efficiently find real estate opportunities from diverse companies in one place. </p> <br />
                        <span className="font-bold text-[#9747FF]"> <p>Comparison Tools:</p> </span>
                        <p> Robust analytics enable investors to evaluate and compare investment options. </p> <br />
                        <span className="font-bold text-[#9747FF]">Network Building:</span>
                        <p>  Real estate funding companies gain visibility, expanding their network for project funding. </p> <br />
                    </div>
                </div>
            </div> */}
        </div >

    )
}

export default AboutUs

