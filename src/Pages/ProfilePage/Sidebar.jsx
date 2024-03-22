import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from "../../assets/logo2.png";

const tabs = [
  { title: "ABOUT", content: "content 1", linkId: "" },
  {
    title: "TERMS & CONDITIONS",
    content: `
Lynkinfinite Investments.com (the “Website”) is a website operated by Quadro Partners, Inc. (“Lynkinfinite Investments Web Host”). By accessing the Website, the pages contained on it, and the information and material contained or described herein (together the “Information”), you acknowledge your agreement to be bound by, and understanding and acceptance of, these Terms and Conditions of Use, our Privacy Policy and our User Confidentiality Policy.
`,
    linkId: "terms",
  },
  {
    title: "PRIVACY POLICY",
    content: `
We value your privacy at Lynkinfinite Investments.com. Our Privacy Policy outlines how we collect, use, and protect your personal information when you use our website. By accessing our website, you consent to our Privacy Policy.
`,
    linkId: "privacy-policy",
  },
  { title: "LOGOUT", content: "content 4", linkId: "" },
];

const Sidebar = ({ sendDataToProfile }) => {
  const [isActive, setIsActive] = useState(0);

  const handleContent = (i) => {
    sendDataToProfile(tabs[i].content, tabs[i].title, tabs[i].linkId);
    setIsActive(i);
  };

  return (
    <div>
      <div className="vsm:h-[100vh] md:w-[200px] md:h-[400px] md:mt-[50px] md:ml-[20px] lg:h-[550px] lg:w-[280px] lg:mt-[50px] lg:ml-[40px] xl:col-span-3 xl:w-[320px] xl:ml-[60px] xl:h-[600px] flex flex-col items-center bg-gradient-to-r from-[#6e30a7] to-purple-300  backdrop-blur-lg md:rounded-lg lg:rounded-lg shadow-md p-4 col-span-3 ">
        <ul className="flex flex-col space-y-2 w-full">
          <div className="vsm:w-[180px] vsm:ml-[30px] vsm:mb-[50px] sm:w-[200px] sm:ml-[30px] sm:mb-[50px] md:w-[150px] md:ml-[5px] md:mb-[40px] lg:mx-[20px] lg:mt-[20px] lg:mb-[80px] lg:w-[200px] xl:w-[230px]">
            <img src={logo} alt="" />
          </div>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`vsm:p-[10px] sm:p-[10px] md:p-[10px] lg:p-[15px] md:text-[15px] lg:text-[17px] xl:text-[18px] xl:p-[17px] ${
                isActive === index ? " bg-white  rounded-lg  w-full" : ""
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
