import React, { useState, useEffect } from "react";
import "../../styles/LandingPage/Post.css";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../../commonComponents/LoginButton";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useAuth } from "../../utils/AuthContext";
import axios from "axios";
import Error from "../../utils/Error";

function Post({ data, blur, starredPostIndices, FetchLikedPosts }) {
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
  }, [starredPostIndices])

  const isEven = data.index % 2 === 0;

  return (
    <div className="font-['Playfair-Display']">
      <div className={`relative hidden xl:block xl:mx-6 rounded-lg bg-white shadow-md shadow-black-300 p-4 ${blur === 'blur' ? 'blur-[4px]' : 'blur-none'}`}>
        <div className="absolute top-0 -left-4 bg-gradient-to-r justify-center from-[#6e30a7] to-purple-300 text-white px-2 py-1 text-lg font-medium rounded-md z-10">
          Sample Project
        </div>
        <div onClick={toggleStar}>
          {(likedPosts.includes(data.index) || isStarFilled) ? (
            <FaStar className="absolute right-0 mr-6  text-yellow-500 text-2xl" />
          ) : (
            <FaRegStar className="absolute right-0  mr-6 text-yellow-500 text-2xl" />
          )}
        </div>
        <h3 className="vsm:text-base md:text-xl font-['Playfair-Display'] font-bold flex justify-center px-2 pb-1">
          {data.title}
        </h3>
        <div className="grid grid-cols-2 ">
          {" "}
          {/* for xl screens only*/}
          <div>
            <div>
              <img className="xl:max-h-[130px] w-[100%]" src={data.image} alt="Property" />
            </div>
            <div className="">
              <div className="flex items-center">
                <div className="progress-section">
                  <div className="task-progress flex items-center justify-center">
                    <progress
                      className="progress progress1"
                      max="100"
                      value={data.funded}
                    ></progress>
                    <p className="text-xs text-nowrap ml-2">{data.funded}% Funded</p>
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
                <div className="font-bold text-base uppercase">{formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</div>
              </div>
              <div className="flex items-center justify-center flex-col">
                <p className="text-gray-600 text-sm">Hold period</p>
                <p className="font-bold text-base">{data.Hold_period} YEARS</p>
              </div>
              <div className="flex items-center justify-center flex-col">
                <div className="text-gray-600 text-sm">Category type</div>
                <div className="font-bold text-base capitalize">{data.category.split(" ").length > 1 ? `${data.category.split(" ").slice(0, 1)} ...` : `${data.category}`}</div>
              </div>
              <div className="flex items-center justify-center flex-col">
                <p className="text-gray-600 text-sm">Target IRR</p>
                <p className="font-bold text-base">{data.IRR}%</p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Button Text="Know More" link={`/post/${data.projectId}`} />
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center">
                            <Button Text="Know More" link="#" />
                </div> */}
      </div>
      {/* for vsm to lg screens */}
      <div
        className={`relative shadow-md shadow-black-300 xl:hidden vsm:flex vsm:flex-col vsm:my-4 lg:my-0 md:flex ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
          } xl:flex-row items-center justify-center ${blur === 'blur' ? 'blur-[4px]' : 'blur-none'}`}
      >
        <div className="absolute top-0 -left-4 bg-gradient-to-r justify-center from-[#6e30a7] to-purple-300 text-white px-2 py-1 text-lg font-medium rounded-md z-10">
          Sample Project
        </div>
        <div className="flex">
          <img
            className={`vsm:w-[300px] vsm:h-[200px] md:h-[360px] md:w-[300px] lg:w-auto vsm:rounded-t-lg lg:rounded-none ${isEven ? "lg:rounded-r-lg" : "lg:rounded-l-lg"
              } xl:rounded-none xl:rounded-l-lg`}
            src={data.image}
            alt="Property" />
        </div>
        <div className={`relative bg-white vsm:w-[300px] md:w-[300px] lg:h-[360px] vsm:p-6 md:p-4 lg:w-1/2 vsm:rounded-b-lg lg:rounded-none ${isEven ? "lg:rounded-l-lg" : "lg:rounded-r-lg"}  xl:rounded-none xl:rounded-r-lg`}>
          <h3 className="vsm:text-lg md:text-xl flex justify-center font-bold">
            {data.title}
          </h3>
          <p className="text-gray-600 mb-2 flex items-center gap-1">
            <span>
              <IoLocationSharp />
            </span>
            {data.location}
          </p>
          <p className="text-gray-700 text-xs	text-justify">
            {data.description.length > 75
              ? `${data.description.substring(0, 100)}... see more`
              : data.description}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-y-2 gap-x-2">
            <div className="w-auto mx-auto">
              <div className="text-gray-600  text-sm">Min Investment</div>
              <div className="font-bold vsm:text-base sm:text-lg uppercase">{formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</div>
            </div>
            <div className="w-auto mx-auto">
              <p className="text-gray-600  text-sm">Hold period</p>
              <p className="font-bold vsm:text-base sm:text-lg">{data.Hold_period} YEARS</p>
            </div>
            <div className="w-auto mx-auto">
              <div className="text-gray-600  text-sm">Category type</div>
              <div className="font-bold vsm:text-base sm:text-lg capitalize">{data.category.split(" ").length > 1 ? `${data.category.split(" ").slice(0, 1)} ...` : `${data.category}`}</div>
            </div>
            <div className="w-auto mx-auto">
              <p className="text-gray-600  text-sm">Target IRR</p>
              <p className="font-bold vsm:text-base sm:text-lg">{data.IRR}%</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[80%] flex items-center">
              <div className={`progress-section ${navigator.userAgent.indexOf('iPad') > -1 ? 'py-[2px]' : 'py-[5px]'}`}>
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
          </div>
          <div className={`mt-2 ${navigator.userAgent.indexOf('iPad') > -1 ? 'mb-2' : 'mb-0'}`}>
            <div className="flex overflow-x-scroll gap-x-2 ButtonSection">
              <div className="border-slate-400 border rounded-lg ">
                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	whitespace-nowrap">
                  Documents
                </button>
              </div>
              <div className="border-slate-400 border rounded-lg ">
                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	 whitespace-nowrap">
                  IRA eligibilty
                </button>
              </div>
              <div className="border-slate-400 border rounded-lg ">
                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	 whitespace-nowrap">
                  Listed Company
                </button>
              </div>
              <div className="border-slate-400 border rounded-lg ">
                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	 whitespace-nowrap">
                  Terms
                </button>
              </div>
              <div className="border-slate-400 border rounded-lg ">
                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	 whitespace-nowrap">
                  Management Fees
                </button>
              </div>
            </div>
          </div>
          <div className={`flex items-center justify-center ${navigator.userAgent.indexOf('iPhone') > -1 ? 'mt-3' : navigator.userAgent.indexOf('iPad') > -1 ? 'iPadMargin' : 'mt-0'}`}>
            <Button Text="Know More" link={`/post/${data.projectId}`} />
            {/* <button className="bg-[#9747FF] text-white px-4 py-2 rounded-md hover:bg-purple-600">Know More </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
