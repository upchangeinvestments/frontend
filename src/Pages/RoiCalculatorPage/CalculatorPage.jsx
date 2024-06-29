import React, { useState, useEffect } from 'react';
import companyData from "../../assets/companyData.json";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Button from "../../commonComponents/LoginButton";
import NavBar from "../../commonComponents/NavBar";
import Footer from "../../commonComponents/Footer";
import { useAuth } from "../../utils/AuthContext";
import { FaAngleDown } from "react-icons/fa6";
import DigitRoll from "digit-roll-react";


function formatMinInvestment(minInvestment) {
    if (minInvestment >= 1000000) {
        return false;
    } else {
        return `$ ${minInvestment.toLocaleString()}`;
    }
}

const ListedCompany = ({ company }) => {
    const { isAuth } = useAuth();

    return (
        <div className='rounded-xl w-full bg-gradient-to-r from-[#2A235A] to-[#150D2B] my-2  grid grid-cols-6 text-white p-4'>
            <div className='col-span-2 text-left'>{company.companyName}</div>
            <div className='col-span-3 text-center '>{formatMinInvestment(company.minInvestment) ? formatMinInvestment(company.minInvestment) : company.Investment}</div>
            <div className='col-span-1 text-right'><Button Text="Know More" link={isAuth ? "/rei-firms" : "/signin?isLogin=false"} target="_blank" /></div>
        </div>
    );
}

const ROICalculator = () => {
    const [investment, setInvestment] = useState(0);
    const [roiPercentage, setRoiPercentage] = useState(9);
    const [duration, setDuration] = useState(1);
    const [showData, setShowData] = useState([]);
    const [roi, setRoi] = useState(0);
    const [showArrow, setShowArrow] = useState(false);

    const { isAuth } = useAuth();

    useEffect(() => {
        if (investment > 0) {
            const roiDecimal = roiPercentage / 100;
            const roi = investment * roiDecimal * duration;
            setRoi(roi);

            const filteredData = companyData.filter((data) => {
                return investment >= data.minInvestment;
            });
            const sortedData = filteredData.sort((a, b) => b.minInvestment - a.minInvestment);
            const topFiveData = sortedData.slice(0, 5);

            // Calculate return amount based on ROI

            setShowData(topFiveData);

            setShowArrow(true);
            setTimeout(() => setShowArrow(false), 8000);
        } else {
            setRoi(0);
            setShowData([]);
        }

    }, [investment, roiPercentage, duration]);

    const handleNumberChange = (value, setFunction, maxValue) => {
        // Remove any non-numeric characters from the input value
        const numericValue = Number(value.replace(/[^0-9]/g, ''));
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= maxValue) {
            setFunction(numericValue);
        }
    };
    const handleRoiChange = (value) => {
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue)) {
            setRoiPercentage(parsedValue);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Project</title>
                <meta name="description" content="Real Estate listed projects website" />
                <link rel="canonical" href="/post/:postId" />
            </Helmet>
            <div className="flex flex-col items-center justify-center relative">
                <div className="w-[100%]">
                    <NavBar />
                    <div className="YesevaFont flex items-center justify-center relative">
                        <div className="flex justify-center items-start relative">
                            <div className="relative uppercase flex flex-col">
                                <p className="text-[4.5rem] text-purple-600"> Wealth Calculator</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vsm:w-[90%] lg:w-[80%] 2xl:max-w-7xl my-4 relative grid grid-cols-3">
                    <div className='col-span-2'>
                        <p className='uppercase text-lg'>explore your future return on investments </p>
                        <p className='text-[#A26CF6] w-[80%]'>Discover the potential of your real estate investments with our ROI
                            Calculator! Designed to empower investors to visualize their wealth growth
                            clearly and effortlessly. Dive in and uncover the possibilities for capital
                            gains. Start exploring now and watch your wealth thrive!
                        </p>
                        <div className='my-4 Calculator w-[70%]'>
                            <div className="mb-6">
                                <div className="text-left flex flex-col ">
                                    Investment Amount
                                    <div className="relative text-2xl">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                                        <input
                                            type="text"
                                            value={investment.toLocaleString()}
                                            onChange={(e) => handleNumberChange(e.target.value, setInvestment, 100000)}
                                            className="p-2 pl-8 pr-2 w-full bg-gradient-to-r from-[#2A235A] to-[#150D2B] text-white"
                                            style={{ borderRadius: '8px' }}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    name="investment"
                                    min={0}
                                    max={100000}
                                    value={investment}
                                    onChange={(e) => setInvestment(Number(e.target.value))}
                                    step="500"
                                    className="w-full appearance-none bg-gray-200 h-2 rounded-full outline-none focus:outline-none"
                                    style={{
                                        background: `linear-gradient(to right, #6e30a7 0%, #6e30a7 ${(investment / 100000) * 100}%, #CBD5E0 ${(investment / 100000) * 100}%, #CBD5E0 100%)`,
                                    }} />
                            </div>
                            <div className="mb-6">
                                <div className="text-left flex flex-col">
                                    Return On Investment Percentage (ROI %)
                                    <div className="text-2xl">
                                        <input
                                            type="text"
                                            step="0.1"
                                            value={roiPercentage}
                                            onChange={(e) => handleRoiChange(parseFloat(e.target.value))}
                                            className="p-2 pl-8 pr-2 w-full bg-gradient-to-r from-[#2A235A] to-[#150D2B] text-white"
                                            style={{ borderRadius: '8px' }}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    name="Return On Investment"
                                    min={9}
                                    max={100}
                                    value={roiPercentage}
                                    onChange={(e) => handleRoiChange(parseFloat(e.target.value))}
                                    step="1"
                                    className="w-full appearance-none bg-gray-200 h-2 rounded-full mt-2 outline-none focus:outline-none"
                                    style={{
                                        background: `linear-gradient(to right, #6e30a7 ${(roiPercentage - 9) / (100 - 9) * 100}%, #6e30a7 ${(roiPercentage - 9) / (100 - 9) * 100}%, #CBD5E0 ${(roiPercentage - 9) / (100 - 9) * 100}%, #CBD5E0 100%)`,
                                    }} />
                            </div>
                            <div className="mb-6">
                                <div className="text-left flex flex-col">
                                    Investment Duration (Years)
                                    <div className="text-2xl">
                                        <input
                                            type="text"
                                            value={duration.toLocaleString()}
                                            onChange={(e) => handleNumberChange(e.target.value, setDuration, 50)}
                                            className="p-2 pl-8 pr-2 w-full bg-gradient-to-r from-[#2A235A] to-[#150D2B] text-white"
                                            style={{ borderRadius: '8px' }}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    name="duration"
                                    min={1}
                                    max={50}
                                    value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                    step="1"
                                    className="w-full appearance-none bg-gray-200 h-2 rounded-full mt-2 outline-none focus:outline-none"
                                    style={{
                                        background: `linear-gradient(to right, #6e30a7 0%, #6e30a7 ${(duration / 50) * 100}%, #CBD5E0 ${(duration / 50) * 100}%, #CBD5E0 100%)`,
                                    }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 h-[90%]'>
                        <div className='my-2 bg-gradient-to-r from-[#2A235A] to-[#150D2B] text-white flex flex-col items-center justify-center h-full text-center'>
                            <div className="flex flex-col items-center justify-center my-4">
                                <p className='uppercase CerebriFont text-xl flex-shrink overflow-hidden text-ellipsis'>Investment Amount</p>
                                <div className='text-3xl flex items-center justify-center gap-x-4 roller'>
                                    <span className=' CerebriFont mt-1'>USD </span> <DigitRoll num={investment} length={investment.toString().length} divider="," delay="1" className="border-0" />
                                </div>
                            </div>
                            <div className='roller my-4'>
                                <p className='uppercase text-xl CerebriFont'>roi Percentage</p>
                                <div className='text-3xl flex items-center justify-center gap-x-1'>
                                    <DigitRoll num={roiPercentage} length={roiPercentage.toString().length} delay="1" className="border-0" /><span className='font-thin '>% </span>
                                </div>
                            </div>
                            <div className='my-2'>
                                <p className='uppercase text-xl CerebriFont'>Total Investment Returns</p>
                                <p className='text-2xl'> USD {roi.toFixed(2)}</p>
                            </div>
                            <div className='mt-8'>
                                <Button Text="Explore Opportunities" link={isAuth ? "/rei-firms" : "/signin?isLogin=false"} target="_blank" />
                            </div>
                        </div>
                    </div>
                </div>
                {showArrow && (
                    <div className='sticky bottom-0 rounded-full p-2 z-[99] animate-bounce w-full mx-auto'>
                        <div className=' ml-20'><p className='whitespace-nowrap text-center'>Scroll down</p> <FaAngleDown size={20} className='w-full mx-auto' /></div>
                    </div>
                )}
                {showData.length > 0 && (
                    <div className='flex items-center justify-center flex-col my-4'>
                        <p className='text-left text-xl font-["Poppins"] font-semibold'>Leading Companies to Enhance Your Investment Goals</p>
                        {isAuth ? (
                            <div className=''>
                                <div className='rounded-xl w-full bg-gradient-to-r from-[#2A235A] to-[#150D2B] my-2  grid grid-cols-6 text-white p-4 font-extrabold text-xl'>
                                    <div className='col-span-2 text-left'>Company</div>
                                    <div className='col-span-3 text-center'>Minimum Investment</div>
                                    <div className='col-span-1 text-right'></div>
                                </div>
                                {showData.map((data, id) => (
                                    <div key={id}>
                                        <ListedCompany company={data} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='w-[70%] '>
                                <Link to="/signin?=isLogin=false"><img className='cursor-default' src="https://i.postimg.cc/HkxBRpCb/blur-data.jpg" alt="" /></Link>
                            </div>
                        )}
                        {!isAuth && (
                            <div className='w-full flex flex-col items-center text-center justify-start gap-y-4 mb-6 vsm:w-[90%] lg:w-[80%] 2xl:max-w-7xl my-4 mx-auto'>
                                <p className='text-xl'>Explore MORE investment opportunities by signing in on our platform </p>
                                <Button Text="Sign in" link="/signin?isLogin=false" classname="h-12 w-40 uppercase" />
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ROICalculator;
