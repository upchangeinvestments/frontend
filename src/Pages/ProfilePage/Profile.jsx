import React, { useState } from "react";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  const [tabContent, setTabContent] = useState({
    data: <ProfileContent />,
    title: "PROFILE SECTION",
    linkId: "",
  });

  return (
    <div className="font-['Playfair-Display'] vsm:mt-[20px] vsm:ml-[10px] vsm:p-[16px] sm:w-[100%] sm:mt-[20px] sm:p-[18px]  sm:ml-[10px] md:mt-[40px] md:w-[85%] md:ml-[60px] lg:mt-[40px]  lg:ml-[100px]  lg:w-[70%] lg:p-[15px] xl:w-[70%]  bg-gradient-to-r from-purple-300 to-pink-200 backdrop-blur-xl rounded-lg shadow-md relative">
      {tabContent && (
        <div id={tabContent.linkId}>
          <h2 className="vsm:text-[20px] vsm:mt-[10px] sm:text-[20px] sm:mt-[12px] md:text-2xl md:mt-[15px]  lg:text-[22px]  lg:mt-[18px] xl:text-[25px] xl:mt-[20px] text-[#6e30a7]   font-bold text-center">
            {tabContent.title}
          </h2>
          <div className="">
            {tabContent.data}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
