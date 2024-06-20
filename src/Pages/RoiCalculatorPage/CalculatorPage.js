import React, { useState, useEffect } from 'react';
import companyData from "../../assets/companyData.json";

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
            calculateAnnualizedROI(investment, duration);
            setShowData(filteredData);
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
            <div className="max-w-xl mx-auto my-10 p-6 border border-gray-300 rounded-lg bg-white shadow-lg text-center">
                <h1 className="text-2xl font-semibold mb-6">ROI Calculator</h1>
                <div className="mb-6">
                    <div className="text-left flex items-center">Investment Amount:
                        <div className="relative ml-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                            <input
                                type="text"
                                value={investment.toLocaleString()}
                                onChange={(e) => handleNumberChange(e.target.value, setInvestment)}
                                className="pl-6 pr-2 py-1 w-full border-b-2 border-transparent focus:border-purple-500 outline-none"
                            />
                        </div>
                    </div>
                    <input
                        type="range"
                        name="investment"
                        min={500}
                        max={1000000}
                        value={investment}
                        onChange={(e) => setInvestment(Number(e.target.value))}
                        step="100"
                        className="w-full appearance-none bg-gray-200 h-2 rounded-full mt-2 outline-none focus:outline-none"
                        style={{
                            background: `linear-gradient(to right, #6e30a7 0%, #6e30a7 ${(investment / 1000000) * 100}%, #CBD5E0 ${(investment / 1000000) * 100}%, #CBD5E0 100%)`,
                        }} />
                </div>
                <div className="mb-6">
                    <div className="text-left flex items-center">returnedAmount Amount:
                        <div className="relative ml-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                            <input
                                type="text"
                                value={returnedAmount.toLocaleString()}
                                onChange={(e) => handleNumberChange(e.target.value, setReturnedAmount)}
                                className="pl-6 pr-2 py-1 w-full border-b-2 border-transparent focus:border-purple-500 outline-none"
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
                    <div className="text-left flex items-center">Investment Duration (Years):
                        <div className="">
                            <input
                                type="text"
                                value={duration.toLocaleString()}
                                onChange={(e) => handleNumberChange(e.target.value, setDuration)}
                                className="pl-2 pr-2 py-1 w-full border-b-2 border-transparent focus:border-purple-500 outline-none"
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
                <div className="mt-4">
                    <h2 className="text-xl font-bold">ROI: {roi}%</h2>
                    <h2 className="text-xl font-bold">Annualized ROI: {annualizedROI.toFixed(2)}%</h2>
                </div>
            </div>

        </div>
    );
};

export default ROICalculator;
