import React from 'react';
import LoginButton from "./LoginButton";
import "../styles/LandingPage/Post.css";

const RealEstateCard = (props) => {
    console.log(props.data)
    return (
        <div className='flex flex-col items-center justify-center mb-20 '>
            <div className="w-72 h-32 bg-bottom">
                <img className="rounded-t-lg " src={props.data.image} alt="" />
            </div>
            <div className="bg-white shadow-md rounded-b-lg p-4 px-6 w-72">
                <div className="flex items-center justify-center">
                    <div className="text-lg CustomizeFontH">{props.data.title}</div>
                </div>
                <div className="flex gap-1 items-center">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                    <p>{props.data.location}</p>
                </div>
                <div className="text-gray-600 my-2 text-sm text-justify">{props.data.description}</div>
                <div className="flex-nowrap">
                    <p>
                        Targeted IRR: <span className='font-bold'>{props.data.IRR}</span>
                    </p>
                </div>
                <div className="progress-section">
                    <div className="task-progress flex items-center justify-center">
                        <progress className="progress progress1" max="100" value="57"></progress>
                        <p className="text-xs text-nowrap ml-2">57% Funded</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <LoginButton Text="Know more" link="#" className="text-base" />
                    {/* <button className="bg-[#9747FF] text-white py-2 px-4 rounded-lg  hover:bg-purple-600">Know more...</button> */}
                </div>
            </div>
        </div>
    );
};

export default RealEstateCard;