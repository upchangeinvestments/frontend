import React from "react";
import "../styles/LandingPage/Post.css";
import bgImage from "../assets/login_BG.jpeg";

function Post({ data, type }) {
  return (
    <div className="vsm:w-64 sm:w-80 md:w-96 lg:w-full">
      <div className="vsm:flex vsm:flex-col lg:flex lg:flex-row mx-auto">
        {/* <div className="flex mx-auto px-4 "> */}
        <div className="flex">
          <img className="md:rounded-l-lg w-auto" src={data.image} alt="" />
        </div>
        <div className="bg-white shadow-md vsm:p-6 md:p-4 lg:w-1/2 xl:w-auto md:rounded-r-lg">
          <h3 className="vsm:text-base md:text-xl CustomizeFontH flex justify-center">
            {data.title}
          </h3>
          <p className="text-gray-600 mb-2">{data.location}</p>
          <p className="text-gray-700 text-xs	text-justify">
            {data.description.length > 75
              ? `${data.description.substring(0, 100)}... see more`
              : data.description}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-y-4 gap-x-4 vsm:text-xs sm:text-base md:text-base">
            <div className="w-auto">
              <div className="text-gray-600">Min Investment</div>
              <div className="font-bold vsm:text-base sm:text-lg ">$ 10K</div>
            </div>
            <div className="w-auto">
              <p className="text-gray-600">Hold period</p>
              <p className="font-bold vsm:text-base sm:text-lg">24 months</p>
            </div>
            <div className="w-auto">
              <div className="text-gray-600">Category type</div>
              <div className="font-bold vsm:text-base sm:text-lg">{`${type}`}</div>
            </div>
            <div className="w-auto">
              <p className="text-gray-600">Target IRR</p>
              <p className="font-bold vsm:text-base sm:text-lg">{data.IRR}</p>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center mb-4">
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
            <div className="flex overflow-x-scroll gap-x-2 ButtonSection">
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
                  Management Fees
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button
              style={{ backgroundImage: `url(${bgImage})` }}
              className={`bg-top whitespace-nowrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 rounded-md md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover`}
            >
              Know More{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
