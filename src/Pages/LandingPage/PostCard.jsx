import React from "react";
import "../../styles/LandingPage/Post.css";
import Button from "../../commonComponents/LoginButton";
import { useAuth } from "../../utils/AuthContext";


function PostCard({ data }) {
    const { user, backendUrl } = useAuth();

    function formatMinInvestment(minInvestment) {
        if (minInvestment >= 1000000) {
            return false;
        } else {
            return `$${minInvestment.toLocaleString()}`;
        }
    }
    return (
        <div className="flex items-center justify-center">
            <div className="relative bg-white rounded-lg w-[90%] flex items-center justify-center">
                <div className="xl:w-[21rem] border border-gray-300 rounded-lg shadow-lg font-sans">
                    <div className="px-4 pt-6 text-center flex items-center justify-center flex-col">
                        <img src={data.image} alt="Company Logo" className="w-full h-36 xl:h-48 mb-4 rounded-lg" />
                        <h2 className="text-lg font-bold mb-2">Social Media Campaign</h2>
                        <div className="overflow-y-hidden h-[60px] xl:h-[80px]">
                            <p className="text-sm text-gray-600 text-justify">{data.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-[3rem]">
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</span>
                            <span className="block text-xs text-gray-600">Min Investment</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.feeStructure}%</span>
                            <span className="block text-xs text-gray-600">Management Fees</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.aum}</span>
                            <span className="block text-xs text-gray-600">Past Distribution</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.classType} </span>
                            <span className="block text-xs text-gray-600">Class Type</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.age}</span>
                            <span className="block text-xs text-gray-600">Company Age</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.historicalReturnRates}%</span>
                            <span className="block text-xs text-gray-600">Return Range</span>
                        </div>
                    </div>
                    <div className="absolute flex items-center justify-center inset-x-0 bottom-3">
                        <Button Text="Know More" link={`/post/${data.projectId}`} classname="border-[1px] border-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;