import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from "../../assets/logo2.png";

const tabs = [
  { title: "ABOUT", content: "content 1" },
  {
    title: "TERMS & CONDITIONS",
    content: `
Lynkinfinite Investments.com (the “Website”) is a website operated by Quadro Partners, Inc. (“Lynkinfinite Investments Web Host”). By accessing the Website, the pages contained on it, and the information and material contained or described herein (together the “Information”), you acknowledge your agreement to be bound by, and understanding and acceptance of, these Terms and Conditions of Use, our Privacy Policy and our User Confidentiality Policy.
`,
  },
  {
    title: "PRIVACY POLICY",
    content: `
We value your privacy at Lynkinfinite Investments.com. Our Privacy Policy outlines how we collect, use, and protect your personal information when you use our website. By accessing our website, you consent to our Privacy Policy.
`,
  },
  { title: "LOGOUT", content: "content 4" },
];

const Sidebar = ({ sendDataToProfile }) => {
  const [isActive, setIsActive] = useState(0);

  const handleContent = (i) => {
    sendDataToProfile(tabs[i].content, tabs[i].title);
    setIsActive(i);
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-gradient-to-r from-pink-200 to-purple-300 h-[500px] w-[280px] mt-[50px] ml-[80px] backdrop-blur-lg rounded-lg shadow-md p-4 col-span-3 xl:col-span-2">
        <ul className="flex flex-col space-y-2 w-full">
          <div className="my-4 ml-8 mb-12 w-48">
            <img src={logo} alt="" />
          </div>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`p-4 ${isActive === index
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
