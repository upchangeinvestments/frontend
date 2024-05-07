import React, { useState } from "react";
import NavBar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";


const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="aboutMain  font-['Playfair-Display'] text-white">
        <NavBar />
        <div className="h-[85vh] flex items-center justify-center">
          <p className="uppercase font-['Playfair-Display'] lg:text-5xl xl:text-6xl text-white vsm:text-4xl md:text-5xl lg:-mt-[350px] xl:-mt-[430px] mx-auto lg:ml-[60%]">
            Profile
          </p>
        </div>
        <div className="">
          <div className="flex vsm:mb-[130px] md:gap-[90px] lg:mb-[190px] xl:mb-[240px] p-2 lg:gap-[90px] absolute bottom-0 w-full vsm:gap-4 items-center justify-center ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 vsm:px-2 lg:px-4 vsm:text-sm msm:text-lg sm:text-xl md:text-2xl lg:text-[28px]  focus:outline-none ${activeTab === index
                  ? "border-b-2 border-[#6e30a7] text-[#6e30a7]"
                  : ""
                  }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gradient-to-r -mt-[130px] lg:-mt-[210px] xl:-mt-[250px] from-purple-300 to-pink-200 w-full z-[9999]">
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
