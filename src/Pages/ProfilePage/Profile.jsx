import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";
import MobileSidebar from "./mobileSidebar";
import { useAuth } from "../../utils/AuthContext";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, backendUrl, setUser } = useAuth();
  const [tabContent, setTabContent] = useState({
    data: <ProfileContent />,
    title: "PROFILE SECTION",
    linkId: "",
  });

  const handleIncomingData = (data, title, linkId) => {
    setTabContent({ data, title, linkId });
  };

  const sidebarHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="grid font-['Playfair-Display'] grid-cols-12">
      <div className="md:hidden" onClick={sidebarHandler}>
        <svg
          className="h-6 w-6 vsm:mt-[15px] vsm:ml-[8px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {sidebarOpen && (
          <div className="mobile-filter-drawer">
            <MobileSidebar
              handleIncomingData={handleIncomingData}
              open={sidebarOpen}
            />
          </div>
        )}
      </div>
      <div className="hidden md:block vsm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 ">
        <Sidebar sendDataToProfile={handleIncomingData} />
      </div>
      <div className="vsm:col-span-10  md:col-span-9 lg:col-span-8 xl:col-span-7">
        <div className="vsm:p-[10px] vsm:ml-[10px] vsm:mt-[45px]  sm:w-[100%] sm:mt-[45px] sm:ml-[10px] sm:p-[15px] md:mt-[50px] md:ml-[60px] md:p-[20px] md:w-[85%] lg:mt-[50px] lg:ml-[100px] lg:w-[70%] lg:p-4 xl:w-[70%] xl:p-[20px]  bg-gradient-to-r from-purple-300 to-pink-200 rounded-lg shadow-md  relative">
          <div className="flex items-center">
            <div className="">
              {user.image ? (
                <div>
                  <img
                    src={user.image}
                    alt="user"
                    className="border border-gray-200 p-0.5 vsm:w-[60px] vsm:h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full"
                  />
                </div>
              ) : (
                <FaUserCircle
                  variant="circular"
                  size="100px"
                  alt="user"
                  className="border border-gray-900 p-0.5 vsm:w-[60px] vsm:h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full"
                />
              )}
            </div>
            <div className="vsm:ml-3 sm:ml-4 md:ml-8 lg:ml-8 mt-6 grid grid-rows-2 gap-y-4">
              <h2 className="vsm:text-3xl md:text-4xl xl:text-5xl text-purple-800  font-bold">
                Welcome!
              </h2>
              <p className="vsm:text-lg md:text-2xl font-semibold ml-2">{user.name}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[#6e30a7] vsm:text-[13px] vsm:pt-[15px] msm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]">
              Embark on Your Investment Journey: Let's Discover Your Preferences Together!
            </p>
          </div>
        </div>
        <div className="grid col-span-9">
          <div className="vsm:mt-[20px] vsm:ml-[10px] vsm:p-[16px] sm:w-[100%] sm:mt-[20px] sm:p-[18px]  sm:ml-[10px] md:mt-[40px] md:w-[85%] md:ml-[60px] lg:mt-[40px]  lg:ml-[100px]  lg:w-[70%] lg:p-[15px] xl:w-[70%]  bg-gradient-to-r from-purple-300 to-pink-200 backdrop-blur-xl rounded-lg shadow-md relative">
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
