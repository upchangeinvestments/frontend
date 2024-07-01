import React, { useState } from "react";
import "../../styles/CategoryPage/categoryPage.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="aboutMain font-['Poppins']">
        <div className="mt-4">
          <div className="flex vsm:mb-[130px] md:gap-[90px] lg:gap-[90px] lg:mb-[190px] xl:mb-[240px] p-2 w-[90%] vsm:gap-4 items-center justify-center ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`text-purple-600 whitespace-nowrap  focus:outline-none ${activeTab === index
                  ? "bg-[#8C52FF] text-white font-semibold rounded-xl py-2 px-6" : ""}`}
                onClick={() => setActiveTab(index)}>
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col -mt-[130px] lg:-mt-[210px] xl:-mt-[250px] w-full z-[9999]">
        <div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`mb-4 ${activeTab === index ? "block" : "hidden"}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tabs;
