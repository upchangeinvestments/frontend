import React, { useEffect, useState } from "react";
import "../../styles/CategoryPage/categoryPage.css";

const Tabs = ({ tabs, activeIndex }) => {

  const [activeTab, setActiveTab] = useState(activeIndex);
  useEffect(() => {
    setActiveTab(activeIndex)
  }, [activeIndex])

  return (
    <div className="w-[100%]">
      <div className="aboutMain font-['Poppins'] overflow-x-scroll lg:overflow-x-hidden">
        <div className="mt-4 ">
          <div className="flex gap-8 md:gap-[90px] lg:gap-[90px] p-2 w-[90%] items-center justify-start">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`text-black whitespace-nowrap  focus:outline-none ${activeTab === index
                  ? "shadow-lg bg-gradient-to-br from-[#1f0036] to-[#3b0a72] text-white font-semibold rounded-xl py-2 px-6" : ""}`}
                onClick={() => setActiveTab(index)}>
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:-mt-[30px]">
        {tabs.map((tab, index) => (
          <div key={index} className={`mb-4 w-[100%] lg:w-[90%] flex items-center justify-center lg:justify-start ${activeTab === index ? "block" : "hidden"}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tabs;
