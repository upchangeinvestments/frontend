import React, { useState, useEffect } from "react";
import "../../styles/LandingPage/Post.css";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../../commonComponents/LoginButton";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useAuth } from "../../utils/AuthContext";
import axios from "axios";
import Error from "../../utils/Error";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


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
      <div className={`relative hidden xl:block xl:mx-6 rounded-lg bg-white shadow-md shadow-black-300 p-4 ${blur === 'blur' ? 'blur-[4px]' : 'blur-none'} h-[100%] border-2 border-purple-600`}>
        <div onClick={toggleStar}>
          {(likedPosts.includes(data.index) || isStarFilled) ? (
            <FaStar className="absolute right-0 mr-6  text-yellow-500 text-2xl" />
          ) : (
            <FaRegStar className="absolute right-0  mr-6 text-yellow-500 text-2xl" />
          )}
        </div>
        <h3 className="vsm:text-base md:text-xl YesevaFont font-bold flex justify-center px-2 pb-1">
          {data.companyName}
        </h3>
        <div className="grid grid-cols-2 h-[150px]">
          {" "}
          {/* for xl screens only*/}
          <div>
            <div className="flex justify-end">
              <img className="xl:max-h-[150px] w-[90%] rounded-lg" src={data.image} alt="Property" />
            </div>
          </div>
          <div className="h-[100%] overflow-y-hidden relative">
            <p className="text-gray-600 px-2 flex items-center gap-1">
              <span>
                <IoLocationSharp />
              </span>
              {data.location}
            </p>
            <div className="h-[80%]">
              <p className="text-gray-700 md:text-xs xl:text-base	px-4 ">
                {data.description}
              </p>
            </div>
            <div className="text blue flex items-center justify-center">
              <p>
                Read more <span><MdOutlineKeyboardArrowRight size="10px" /></span>
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 grid grid-cols-3 gap-y-2 gap-x-2 vsm:text-xs sm:text-base md:text-base mx-auto mt-2">
          <div className="flex items-center justify-center flex-col">
            <div className="text-gray-600 text-sm text-center">Min Investment</div>
            <div className="font-bold text-base uppercase text-center">{formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-gray-600 text-sm text-center">Class Type</p>
            <p className="font-bold text-base text-center"> {data.classType} </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="text-gray-600 text-sm text-center">Category type</div>
            <div className="font-bold text-base text-center capitalize">{data.investmentTypes}</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-gray-600 text-sm text-center">Return Range</p>
            <p className="font-bold text-base text-center">{data.historicalReturnRates}</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-gray-600 text-sm text-center">Company Age</p>
            <p className="font-bold text-base text-center">{data.age} Years</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-gray-600 text-sm text-center">Past distribution</p>
            <p className="font-bold text-base text-center">{data.aum}</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <Button Text="Know More" link={`/post/${data.projectId}`} />
        </div>
      </div>

      {/* for vsm to lg screens */}
      <div className={`relative shadow-md shadow-black-300 xl:hidden vsm:flex vsm:flex-col vsm:my-4 lg:my-0 md:flex ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
        } xl:flex-row items-center justify-center ${blur === 'blur' ? 'blur-[4px]' : 'blur-none'} h-[100%] iPadPostSize`}
      >
        <div className={`absolute top-2 ${isEven ? '-right-4' : '-left-4'} bg-gradient-to-r justify-center from-[#6e30a7] to-purple-300 text-white px-2 py-1 text-lg font-medium rounded-md z-10`}>
          Sample Project
        </div>
        <div className="flex">
          <img
            className={`vsm:w-[300px] vsm:h-[200px] md:h-[330px] md:w-[300px] lg:w-auto vsm:rounded-t-lg lg:rounded-none ${isEven ? "lg:rounded-r-lg" : "lg:rounded-l-lg"
              } xl:rounded-none xl:rounded-l-lg`}
            src={data.image}
            alt="Property" />
        </div>
        <div className={`relative bg-white vsm:w-[300px] md:w-[300px] lg:h-[330px] vsm:p-6 md:p-4 lg:w-1/2 vsm:rounded-b-lg lg:rounded-none ${isEven ? "lg:rounded-l-lg" : "lg:rounded-r-lg"}  xl:rounded-none xl:rounded-r-lg`}>
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
              <div className="text-gray-600 text-sm text-center">Min Investment</div>
              <div className="font-bold vsm:text-base sm:text-lg uppercase text-center">{formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</div>
            </div>
            <div className="w-auto mx-auto">
              <p className="text-gray-600 text-sm text-center">Class Type</p>
              <p className="font-bold vsm:text-base sm:text-lg text-center">Class {data.classType}</p>
            </div>
            <div className="w-auto mx-auto">
              <div className="text-gray-600 text-sm text-center">Category type</div>
              <div className="font-bold vsm:text-base sm:text-lg capitalize text-center">{data.category}</div>
            </div>
            <div className="w-auto mx-auto">
              <p className="text-gray-600 text-sm text-center">LynkInfinite Rating</p>
              <p className="font-bold vsm:text-base sm:text-lg text-center">{data.CompanyRating}</p>
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
          <div className={`flex items-center justify-center ipad-margin-top ${navigator.userAgent.indexOf('iPhone') > -1 ? 'mt-2' : ''} `}>
            <Button Text="Know More" link={`/post/${data.projectId}`} />
            {/* <button className="bg-[#9747FF] text-white px-4 py-2 rounded-md hover:bg-purple-600">Know More </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
