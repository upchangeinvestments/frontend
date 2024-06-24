import React, { useState, useEffect } from "react";
import "../../styles/LandingPage/Post.css";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../../commonComponents/LoginButton";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useAuth } from "../../utils/AuthContext";
import axios from "axios";
import Error from "../../utils/Error";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function Post({ data, starredPostIndices, FetchLikedPosts }) {
    const [likedPosts, setLikedPosts] = useState([]);
    const [isStarFilled, setIsStarFilled] = useState(false);
    const { user, backendUrl } = useAuth();

    const toggleStar = async () => {
        setIsStarFilled(!isStarFilled);
        try {
            const response = await axios.post(`${backendUrl}/profile/${user._id}/likedPost/${data.index}/${!isStarFilled}`);
            FetchLikedPosts();
        } catch (error) {
            if (error.response) {
                Error(error.response.data.message);
            } else if (error.request) {
                Error("Something went wrong! Please try again later.");
            } else {
                Error(error.message);
            }
        }
    };

    function formatMinInvestment(minInvestment) {
        if (minInvestment >= 1000000) {
            return false;
        } else {
            return `$${minInvestment.toLocaleString()}`;
        }
    }

    useEffect(() => {
        setLikedPosts(starredPostIndices);
        setIsStarFilled(starredPostIndices.includes(data.index))
    }, [starredPostIndices]);


    return (
        <div className="z-10 relative flex items-center justify-center">
            <div className="absolute bg-[#6e30a7] h-[300px] inset-x-0 -bottom-12 rounded-xl -z-[1]">
                <div className="absolute bottom-2 left-6 flex items-center justify-center gap-x-2 CompareInput">
                    <input type="checkbox" name="compare" className="rounded-md" />
                    <label htmlFor="compare" className="text-white text-lg ">Compare</label>
                </div>
            </div>
            <div className="relative bg-white rounded-lg w-[90%] flex items-center justify-center">
                <div className="xl:w-[21rem] border border-gray-300 rounded-lg shadow-lg font-sans">
                    <div className="px-4 pt-6 text-center flex items-center justify-center flex-col">
                        <img src={data.image} alt="Company Logo" className="w-full h-36 xl:h-48 mb-4 rounded-lg" />
                        <h2 className="text-lg font-bold mb-2">Social Media Campaign</h2>
                        <div className="overflow-y-hidden h-[60px] xl:h-[80px]">
                            <p className="text-sm text-gray-600 text-justify">{data.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
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
                    <div className="absolute flex items-center justify-center inset-x-0 -bottom-4">
                        <Button Text="Know More" link={`/post/${data.projectId}`} classname="border-[1px] border-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post