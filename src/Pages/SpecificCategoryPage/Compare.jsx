import React from 'react';
import Button from "../../commonComponents/LoginButton";
import { useLocation } from 'react-router-dom';
import data from "../../assets/companyData.json";
import { Helmet } from 'react-helmet-async';
import NavBar from "../../commonComponents/NavBar";
import Footer from "../../commonComponents/Footer";

function Compare() {
    const location = useLocation();

    const getQueryParams = () => {
        const searchParams = new URLSearchParams(location.search);
        const diff = searchParams.getAll('id');
        return diff;
    };
    const compareIds = getQueryParams();


    return (
        <div className="">
            <Helmet>
                <title> Companies Comparison</title>
                <meta name="description" content="Real Estate listed projects website" />
                <link rel="canonical" href="/rei-firms" />
            </Helmet>
            <div className="categoryMain">
                <NavBar />
                <div className="lg:h-[70vh] xl:h-[65vh] YesevaFont flex items-center justify-center relative flex-col">
                    <div className="flex flex-col justify-start items-center h-[90%] relative">
                        <p className="text-[4.5rem] uppercase"> Compare <span className="text-purple-600">Companies</span></p>
                        <p className="uppercase w-full flex items-center justify-center CerebriFont text-lg -mt-6">Choose a trusted partners to guide you through REal estate investment journey</p>
                    </div>
                </div>
                <div className="overflow-x-auto w-full py-8 -mt-[200px] lg:-mt-[270px] xl:-mt-[300px] mb-10">
                    <table className="min-w-full divide-y divide-gray-200 bg-white">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-100 text-center text-sm font-medium text-gray-500"></th>
                                {compareIds.map((item, index) => (
                                    <th key={index} className="px-6 py-3 bg-white text-center text-sm font-medium text-gray-500">
                                        <img src={data[item].image} alt={data[item].companyName} className="mx-auto w-44 h-28" />
                                        <div className="font-bold text-black text-xl CerebriFont mt-2 whitespace-nowrap">{data[item].companyName}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                { label: 'INVESTMENT OPPORTUNITIES', key: 'investmentTypes' },
                                { label: 'RISK TYPE', key: 'riskLevel' },
                                { label: 'INVESTOR ELIGIBILITY', key: 'investorEligibility' },
                                { label: 'CLASS TYPE', key: 'classType' },
                                { label: 'MANAGEMENT FEES', key: 'feeStructure' },
                                { label: 'MIN INVESTMENT', key: 'minInvestment' },
                                { label: '', key: "buttons" }
                            ].map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-500 bg-gray-100">{row.label}</td>
                                    {compareIds.map((item, colIndex) => (
                                        <td key={colIndex} className="px-6 py-4 text-center text-md font-medium text-black">
                                            {row.key !== 'buttons' && (
                                                <div className={row.key === 'minInvestment' ? "text-purple-600 text-2xl font-bold" : row.key === "investorEligibility" ? "w-[80%] mx-auto" : ""}>{row.key === "minInvestment" ? `$ ${data[item][row.key].toLocaleString()}` : `${data[item][row.key]}`}{row.key === 'feeStructure' ? "%" : ""}</div>
                                            )}
                                            {row.key == 'buttons' && (
                                                <Button Text="Know More" link={``} classname="Font2" />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Compare;
