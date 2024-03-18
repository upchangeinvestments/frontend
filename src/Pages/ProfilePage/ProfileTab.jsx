import React, { useState } from "react";
import NavBar from "../../commonComponents/NavBar";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="aboutMain text-white">
        <NavBar />
        <div className="h-[49vh] flex items-center justify-center">
          <p className="uppercase text-white font-bold vsm:text-2xl md:text-5xl mt-[12px]">
            Profile{" "}
          </p>
        </div>
        <div className="">
          <div className="flex bg-white/20 backdrop-blur-xl p-2 absolute bottom-0 w-full vsm:gap-4 items-center justify-center ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 vsm:px-2 lg:px-4 vsm:text-md sm:text-xl focus:outline-none ${
                  activeTab === index
                    ? "border-b-2 border-purple-500 text-purple-700"
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
      <div className="flex flex-col w-full">
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
