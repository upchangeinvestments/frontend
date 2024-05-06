import React, { useState } from "react";
import "../../styles/LandingPage/Post.css";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../../commonComponents/LoginButton";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useAuth } from "../../utils/AuthContext";
import axios from "axios";
import Error from "../../utils/Error";

function StarredPosts({ data, updatePosts }) {
    const [isStarFilled, setIsStarFilled] = useState(true);
    const { user, backendUrl } = useAuth();
    // console.log("data inde: ", data);
    const toggleStar = async () => {
        setIsStarFilled(false);
        try {
            const response = await axios.post(`${backendUrl}/profile/${user._id}/likedPost/${data.index}/false`);
            const updatedPosts = response.data.updatedPosts.map((likedPost) => likedPost.postId);
            // console.log("response:", updatedPosts);
            updatePosts(response.data.updatedPosts)
        } catch (error) {
        }
    };

    return (
        <div className={`relative xl:mx-6 rounded-lg bg-white shadow-md shadow-black-300 p-4 font-['Playfair-Display']`}>
            <div className="absolute top-0 -left-4 bg-gradient-to-r justify-center from-[#6e30a7] to-purple-300 text-white px-2 py-1 text-lg font-medium rounded-md z-10">
                Sample Project
            </div>
            <div onClick={toggleStar}>
                {isStarFilled ? (
                    <FaStar className="absolute right-0 mr-6 text-yellow-500 text-2xl" />
                ) : (
                    <FaRegStar className="absolute right-0  mr-6 text-yellow-500 text-2xl" />
                )}
            </div>
            <h3 className="vsm:text-base md:text-xl font-['Playfair-Display'] font-bold flex justify-center px-2 pb-1">
                {data.title}
            </h3>
            <div className="grid grid-cols-2 ">
                <div>
                    <div>
                        <img className="max-h-[130px] w-[100%]" src={data.image} alt="Property" />
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <div className="progress-section">
                                <div className="task-progress flex items-center justify-center">
                                    <progress
                                        className="progress progress1"
                                        max="100"
                                        value="57"
                                    ></progress>
                                    <p className="text-xs text-nowrap ml-2">57% Funded</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-y-3 gap-x-2 text-base">
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">
                                    Documents
                                </button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">
                                    IRA eligibilty
                                </button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">
                                    Terms
                                </button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">
                                    Listed Company
                                </button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">
                                    Management Fees
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="text-gray-600 mb-2 px-4 flex items-center gap-1">
                        <span>
                            <IoLocationSharp />
                        </span>
                        {data.location}
                    </p>
                    <p className="text-gray-700 md:text-xs xl:text-base	px-4">
                        {data.description.length > 85
                            ? `${data.description.substring(0, 85)}...`
                            : data.description}
                    </p>
                    <div className="p-2 grid grid-cols-2 gap-y-2 gap-x-2 vsm:text-xs sm:text-base md:text-base mx-auto mt-2">
                        <div className="flex items-center justify-center flex-col">
                            <div className="text-gray-600 text-sm">Min Investment</div>
                            <div className="font-bold text-base ">{data.Investment}</div>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <p className="text-gray-600 text-sm">Hold period</p>
                            <p className="font-bold text-base">{data.Hold_period}</p>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <div className="text-gray-600 text-sm">Category type</div>
                            <div className="font-bold text-base capitalize">{`${data.category}`}</div>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <p className="text-gray-600 text-sm">Target IRR</p>
                            <p className="font-bold text-base">{data.IRR}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <Button Text="Know More" link="/post" />
                        {/* <button className="bg-[#9747FF] text-white px-4 py-2 rounded-md hover:bg-purple-600">Know More </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarredPosts;
