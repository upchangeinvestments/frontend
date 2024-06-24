import React, { useState, useEffect } from 'react';
import companyData from "../../assets/companyData.json";
import { Helmet } from 'react-helmet-async';
import Button from "../../commonComponents/LoginButton";
import NavBar from "../../commonComponents/NavBar";
import Footer from "../../commonComponents/Footer";
import { useAuth } from "../../utils/AuthContext";

function formatMinInvestment(minInvestment) {
    if (minInvestment >= 1000000) {
        return false;
    } else {
        return `$${minInvestment.toLocaleString()}`;
    }
}

const ListedCompany = ({ company }) => {
    console.log("data; ", company)
    const { isAuth } = useAuth();

    return (
        <div className='rounded-xl w-full bg-gradient-to-r from-[#2A235A] to-[#150D2B] my-2  grid grid-cols-8 text-white p-4'>
            <div className='col-span-2 text-left'>{company.companyName}</div>
            <div className='col-span-5 text-center'>{formatMinInvestment(company.minInvestment) ? formatMinInvestment(company.minInvestment) : company.Investment}</div>
            <div className='col-span-1 text-right'><Button Text={isAuth ? "Know More" : "Login"} link={isAuth ? "/rei-firms" : "/signin?isLogin=false"} target="_blank" /></div>
        </div>
    );
}

const ROICalculator = () => {
    const [investment, setInvestment] = useState(0);
    const [returnedAmount, setReturnedAmount] = useState(0);
    const [duration, setDuration] = useState(1);
    const [showData, setShowData] = useState([]);
    const [roi, setRoi] = useState(0);
    const [annualizedROI, setAnnualizedROI] = useState(0);

    function calculateAnnualizedROI(invested, duration) {
        if (invested === 0 || duration <= 0) return 0;

        const annualizedROI = Math.pow(1 + roi, 1 / duration) - 1;
        setAnnualizedROI(annualizedROI * 100)
    }

    useEffect(() => {
        if (investment > 0) {
            const newRoi = (((returnedAmount - investment) / investment) * 100).toFixed(2);
            setRoi(newRoi);
            const filteredData = companyData.filter((data) => {
                const minReturnRate = parseFloat(data.historicalReturnRates.split('-')[0]);
                return newRoi >= minReturnRate;
            });
            const sortedData = filteredData.sort((a, b) => a.minInvestment - b.minInvestment);
            const topFiveData = sortedData.slice(0, 5);
            console.log("data: ", topFiveData)
            calculateAnnualizedROI(investment, duration);
            setShowData(topFiveData);
        } else {
            setRoi(0);
            setShowData([]);
        }
    }, [investment, returnedAmount, duration]);

    const handleNumberChange = (value, setFunction) => {
        // Remove any non-numeric characters from the input value
        const numericValue = Number(value.replace(/[^0-9]/g, ''));
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 1000000) {
            setFunction(numericValue);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Project</title>
                <meta name="description" content="Real Estate listed projects website" />
                <link rel="canonical" href="/post/:postId" />
            </Helmet>
            <div className="flex flex-col items-center justify-center">
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
                        <p className='uppercase'>explore your future return on investments </p>
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
                                            onChange={(e) => handleNumberChange(e.target.value, setInvestment)}
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
                                    Returned Amount
                                    <div className="relative  text-2xl">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                                        <input
                                            type="text"
                                            value={returnedAmount.toLocaleString()}
                                            onChange={(e) => handleNumberChange(e.target.value, setReturnedAmount)}
                                            className="p-2 pl-8 pr-2 w-full bg-gradient-to-r from-[#2A235A] to-[#150D2B] text-white"
                                            style={{ borderRadius: '8px' }}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    name="returnedAmount"
                                    min={0}
                                    max={1000000}
                                    value={returnedAmount}
                                    onChange={(e) => setReturnedAmount(Number(e.target.value))}
                                    step="100"
                                    className="w-full appearance-none bg-gray-200 h-2 rounded-full mt-2 outline-none focus:outline-none"
                                    style={{
                                        background: `linear-gradient(to right, #6e30a7 0%, #6e30a7 ${(returnedAmount / 1000000) * 100}%, #CBD5E0 ${(returnedAmount / 1000000) * 100}%, #CBD5E0 100%)`,
                                    }} />
                            </div>
                            <div className="mb-6">
                                <div className="text-left flex flex-col">
                                    Investment Duration (Years)
                                    <div className="text-2xl">
                                        <input
                                            type="text"
                                            value={duration.toLocaleString()}
                                            onChange={(e) => handleNumberChange(e.target.value, setDuration)}
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
                    <div className='col-span-1'>
                        <p className='text-left'>Level of Risk:</p>
                        <div className='grid grid-cols-3 bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-xl my-2 text-white p-2 text-center'>
                            <p className='col-span-1'>Low </p>
                            <p className='col-span-1'>Medium</p>
                            <p className='col-span-1'>High</p>
                        </div>
                        <div className='my-2 bg-gradient-to-r from-[#2A235A] to-[#150D2B] text-white flex flex-col items-center justify-center h-full text-center'>
                            <div className=' my-2'>
                                <p className='uppercase'>Investment Amount</p>
                            </div>
                            <div className='my-2'>
                                <p className='uppercase'>return on investment (roi)</p>
                                <p>{roi}</p>
                            </div>
                            <div className='my-2'>
                                <p className='uppercase'>annualized ROI</p>
                                <p>{annualizedROI.toFixed(2)}</p>
                            </div>
                            <Button Text="Know More" link="" target="_blank" />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col w-full'>
                    <p className='text-left'>Leading Companies to Enhance Your Investment Goals</p>
                    <div className=''>
                        {showData.map((data, id) => (
                            <div key={id}>
                                <ListedCompany company={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="max-w-xl mx-auto my-10 p-6 border border-gray-300 rounded-lg bg-white shadow-lg text-center">
                <h1 className="text-2xl font-semibold mb-6">ROI Calculator</h1>
                <div className="mt-4">
                    <h2 className="text-xl font-bold">ROI: {roi}%</h2>
                    <h2 className="text-xl font-bold">Annualized ROI: {annualizedROI.toFixed(2)}%</h2>
                </div>
            </div> */}
            <Footer />
        </div>
    );
};

export default ROICalculator;
