import React, { useState } from "react";
import NavBar from "../../commonComponents/NavBar";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="contactMain  font-['Playfair-Display'] text-white">
        <NavBar />
        <div className="h-[49vh] flex items-center justify-center">
          <p className="uppercase text-white font-medium vsm:text-2xl md:text-5xl mt-[-200px]">
            Profile{" "}
          </p>
        </div>
        <div className="">
          <div className="flex mb-[100px]  p-2 lg:gap-[90px] absolute bottom-0 w-full vsm:gap-4 items-center justify-center ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 vsm:px-2 lg:px-4  vsm:text-md sm:text-xl md:text-2xl lg:text-[28px]  focus:outline-none ${activeTab === index
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
      <div className="flex flex-col bg-gradient-to-r mt-[-100px] from-purple-300 to-pink-200  w-full">
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
