import React, { useState } from "react";
import LoginButton from "./LoginButton";
import "../styles/LandingPage/Post.css";
import { FaRegStar, FaStar } from "react-icons/fa6";

const RealEstateCard = (props) => {
  const [firstStarActive, setFirstStarActive] = useState(true);

  const toggleStars = () => {
    setFirstStarActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col  items-center justify-center relative mb-20">
      <div className="absolute vsm:top-[150px] vsm:items-center  bg-gradient-to-r justify-center from-[#6e30a7] to-purple-300 text-white px-2 py-1 text-lg font-medium rounded-md z-10">
        Upcoming Project
      </div>
      <div className="w-72 bg-bottom blur-[3px] relative">
        {firstStarActive ? (
          <FaRegStar
            onClick={toggleStars}
            className="absolute  right-0 mt-2 mr-2 text-yellow-500 text-2xl"
          />
        ) : (
          <FaStar
            onClick={toggleStars}
            className="absolute  right-0 mt-2 mr-2 text-yellow-500 text-2xl"
          />
        )}
        <img
          className="rounded-t-lg object-cover w-full h-32"
          src={props.data.image}
          alt=""
        />
      </div>
      <div className="bg-white shadow-md blur-[3px] rounded-b-lg p-4 px-6 w-72 mt-0">
        <div className="flex items-center  justify-center">
          <div className="text-base font-bold font-['Playfair-Display']">
            {props.data.title}
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <p>{props.data.location}</p>
        </div>
        <div className="text-gray-600 my-2 text-sm text-justify">
          {props.data.description}
        </div>
        <div className="flex-nowrap">
          <p>
            Targeted IRR: <span className="font-bold">{props.data.IRR}</span>
          </p>
        </div>
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
        <div className="flex justify-center items-center mt-4">
          <LoginButton Text="Know more" link="#" className="text-base" />
        </div>
      </div>
    </div>
  );
};

export default RealEstateCard;
