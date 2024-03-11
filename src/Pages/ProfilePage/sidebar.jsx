import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from "../../assets/logo2.png";

const tabs = [
  { title: "Terms & Conditions", content: "content1" },
  { title: "Privacy Policy", content: "content2" },
  { title: "About", content: "content3" },
  { title: "Logout", content: "content4" },
];
const Sidebar = ({ sendDataToProfile }) => {
  const [isActive, setIsActive] = useState(0);

  const handleContent = (i) => {
    sendDataToProfile(tabs[i].content);
    setIsActive(i);
  };

  return (
    <div>
      <div className="flex flex-col items-start bg-white/20 h-[700px] backdrop-blur-lg rounded-lg shadow-md p-4 col-span-3 xl:col-span-2">
        <ul className="flex flex-col  space-y-2 w-full">
          <div className="my-4 ml-12 w-48">
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
