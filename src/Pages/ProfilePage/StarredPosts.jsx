import React, { useState } from "react";
import "../../styles/LandingPage/Post.css";
import Button from "../../commonComponents/LoginButton";
import { BsPinAngleFill, BsPinAngle } from "react-icons/bs";
import { useAuth } from "../../utils/AuthContext";
import axios from "axios";
import Error from "../../utils/Error";

function StarredPosts({ data, updatePosts }) {
    const [isStarFilled, setIsStarFilled] = useState(true);
    const { user, backendUrl } = useAuth();

    const togglePin = async () => {
        setIsStarFilled(!isStarFilled);
        try {
            const response = await axios.post(`${backendUrl}/profile/${user._id}/likedPost/${data.index}/${!isStarFilled}`);
            const updatedPosts = response.data.updatedPosts.map((likedPost) => likedPost.postId);
            // console.log("response:", updatedPosts);
            updatePosts(response.data.updatedPosts)
        } catch (error) {
        }
    };

    function formatMinInvestment(minInvestment) {
        if (minInvestment >= 1000000) {
            return false;
        } else {
            return `$${minInvestment.toLocaleString()}`;
        }
    }

    return (
        <div className="grid col-span-1 w-[90%] mx-auto">
            <div className="relative bg-white rounded-lg flex items-center justify-center">
                <div className="xl:w-[21rem] rounded-lg shadow-lg font-sans border-2 border-purple-600">
                    <div className="px-4 pt-2 text-center flex items-center justify-center flex-col">
                        <img src={data.image} alt="Company Logo" className="w-full h-32 rounded-lg" />
                        <h2 className="text-lg font-bold whitespace-nowrap text-ellipsis ">{data.companyName}</h2>
                        <div className="overflow-y-hidden h-[40px]">
                            <p className="text-sm text-gray-600 text-justify">{data.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-[3rem]">
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</span>
                            <span className="block text-xs text-gray-600 whitespace-nowrap">Min Investment</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.feeStructure}%</span>
                            <span className="block text-xs text-gray-600 whitespace-nowrap">Management Fees</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.aum}</span>
                            <span className="block text-xs text-gray-600 whitespace-nowrap">Past Distribution</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.classType} </span>
                            <span className="block text-xs text-gray-600 whitespace-nowrap">Class Type</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.age} years</span>
                            <span className="block text-xs text-gray-600 whitespace-nowrap">Company Age</span>
                        </div>
                        <div className="w-1/2 p-2 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.historicalReturnRates}%</span>
                            <span className="block text-xs text-gray-600 whitespace-nowrap">Return Range</span>
                        </div>
                    </div>
                    <div className="absolute flex items-center justify-center inset-x-0 bottom-3">
                        <Button Text="Know More" link={`/post/${data.projectId}`} classname="border-[1px] border-gray-400" />
                    </div>
                    <div className="absolute bottom-4 right-4" onClick={togglePin}>
                        {isStarFilled && <BsPinAngleFill color="black" size="17px" />}
                        {!isStarFilled && <BsPinAngle color="black" size="17px" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarredPosts;
