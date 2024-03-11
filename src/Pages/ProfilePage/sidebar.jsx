import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from "../../assets/logo2.png";

const tabs = [
  { title: "TERMS & CONDITIONS", content: "content1" },
  { title: "PRIVACY POLICY", content: "content2" },
  { title: "ABOUT", content: "content3" },
  { title: "LOGOUT", content: "content4" },
];
const Sidebar = ({ sendDataToProfile }) => {
  const [isActive, setIsActive] = useState(0);

  const handleContent = (i) => {
    sendDataToProfile(tabs[i].content);
    setIsActive(i);
  };

  return (
    <div>
      <div className="flex flex-col items-start bg-gradient-to-r from-pink-200  to-purple-300 h-[500px] w-[280px] mt-8 ml-12 backdrop-blur-lg rounded-lg shadow-md p-4 col-span-3 xl:col-span-2">
        <ul className="flex flex-col  space-y-2 w-full">
          <div className="my-4 ml-8 mb-12 w-48">
            <img src={logo} alt="" />
          </div>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`p-4 ${
                isActive === index
                  ? "bg-purple-500 rounded-lg text-white w-full"
                  : ""
              }`}
              onClick={() => handleContent(index)}
            >
              <div className="flex items-center justify-between">
                <p> {tab.title}</p>
                <MdKeyboardArrowRight />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
