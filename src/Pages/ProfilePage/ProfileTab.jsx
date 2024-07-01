import React, { useState } from "react";
import "../../styles/CategoryPage/categoryPage.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="aboutMain font-['Playfair-Display']">
        <div className="mt-4">
          <div className="flex vsm:mb-[130px] md:gap-[90px] lg:gap-[90px] lg:mb-[190px] xl:mb-[240px] p-2 w-full vsm:gap-4 items-center justify-center ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 vsm:px-2 lg:px-4 text-xl text-purple-600  focus:outline-none ${activeTab === index
                  ? "border-b-2 border-[#6e30a7] text-[#6e30a7]" : ""}`}
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
