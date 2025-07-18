import React, { useState, useEffect } from "react";
import "../../styles/LandingPage/Post.css";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../../commonComponents/LoginButton";
import { BsPinAngleFill, BsPinAngle } from "react-icons/bs";
import { useAuth } from "../../utils/AuthContext";
import axios from "axios";
import Error from "../../utils/Error";
import SuccessMessage from "../../utils/successToast";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Post({ data, starredPostIndices, FetchLikedPosts, onPostSelect, selectedPosts }) {
    const [likedPosts, setLikedPosts] = useState([]);
    const [isStarFilled, setIsStarFilled] = useState(false);
    const { isGuest, user, backendUrl } = useAuth();
    const [isSelected, setIsSelected] = useState(false);

    const handleCheckboxChange = () => {
        const newIsSelected = !isSelected;
        setIsSelected(newIsSelected);
        onPostSelect(data, newIsSelected);
    };

    const togglePin = async () => {
        if (isGuest) {
            return Error("Please sign in to save the selected company to your profile.");
        }
        try {
            setIsStarFilled(!isStarFilled);
            const response = await axios.post(`${backendUrl}/profile/${user._id}/likedPost/${data.projectId}/${!isStarFilled}`);
            FetchLikedPosts();
            if (response.data && response.data.message) {
                SuccessMessage(response.data.message);
            }
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
        setIsStarFilled(starredPostIndices.includes(data.projectId));

        if (!selectedPosts.some(post => post.projectId === data.projectId)) {
            setIsSelected(false);
        }

    }, [starredPostIndices, selectedPosts, data.projectId]);

    return (
        <div className="z-10 relative flex items-center justify-center font-['Playfair-Display']">
            <div className="absolute bg-[#6e30a7] h-[300px] inset-x-0 -bottom-12 rounded-xl -z-[1]">
                <div className="absolute bottom-2 left-6 flex items-center justify-center gap-x-2 CompareInput">
                    <input type="checkbox" name="compare" className="rounded-md" checked={isSelected} onChange={handleCheckboxChange} disabled={!isSelected && selectedPosts.length >= 3} />
                    <label htmlFor="compare" className="text-white text-lg ">Compare</label>
                </div>
                <div className="absolute bottom-4 right-4" onClick={togglePin}>
                    {isStarFilled && <BsPinAngleFill color="white" size="17px" />}
                    {!isStarFilled && <BsPinAngle color="white" size="17px" />}
                </div>
            </div>
            <div className="relative bg-white rounded-lg w-[90%] flex items-center justify-center">
                <div className="xl:w-[21rem] border border-gray-300 rounded-lg shadow-lg font-['Playfair-Display']">
                    <div className="pt-6 text-center flex items-center justify-center flex-col">
                        <div className="w-full h-36 xl:h-48 flex items-center justify-center px-4 " >
                            <img src={data.image} alt="Company Logo" className={data.projectId === 0 ? 'w-full h-28 xl:h-40 mb-4 rounded-lg' : 'w-full h-36 xl:h-48 mb-4 rounded-lg'} />
                        </div>
                        <h2 className="text-lg md:text-base lg:text-lg font-bold mb-2 whitespace-nowrap">{data.companyName}</h2>
                        <div className="overflow-y-hidden h-[60px] xl:h-[80px]">
                            <p className="text-sm text-gray-600 text-justify px-4">{data.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-1/2 p-1 text-center">
                            <span className="block text-lg font-bold text-purple-700">{formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</span>
                            <span className="block text-xs text-gray-600">Min Investment</span>
                        </div>
                        <div className="w-1/2 p-1 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.feeStructure}%</span>
                            <span className="block text-xs text-gray-600">Management Fees</span>
                        </div>
                        <div className="w-1/2 p-1 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.aum}</span>
                            <span className="block text-xs text-gray-600">Past Distribution</span>
                        </div>
                        <div className="w-1/2 p-1 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.classType} </span>
                            <span className="block text-xs text-gray-600">Class Type</span>
                        </div>
                        <div className="w-1/2 p-1 text-center">
                            <span className="block text-lg font-bold text-purple-700">{data.age} years</span>
                            <span className="block text-xs text-gray-600">Company Age</span>
                        </div>
                        <div className="w-1/2 p-1 text-center">
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