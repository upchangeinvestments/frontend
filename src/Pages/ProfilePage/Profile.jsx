import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";
import MobileSidebar from "./mobileSidebar";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [tabContent, setTabContent] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleIncomingData = (data, title) => {
    setTabContent({ data, title });
  };
  const sidebarHandler = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="grid grid-cols-12">
      <div className="md:hidden" onClick={sidebarHandler}>
        <svg
          className="h-6 w-6"
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
        {sidebarOpen && (<div className="mobile-filter-drawer"><MobileSidebar handleIncomingData={handleIncomingData} open={sidebarOpen} /></div>)}
      </div>
      <div className="hidden md:block col-span-3">
        <Sidebar sendDataToProfile={handleIncomingData} />
      </div>
      <div className="col-span-9">
        <div className="md:mt-[50px] md:ml-[60px] md:p-[20px] md:w-[85%] lg:mt-[50px] lg:ml-[100px] lg:w-[80%] lg:p-4 xl:w-[80%] xl:p-[20px] xl:ml-[100px] bg-gradient-to-r from-purple-300 to-pink-200 rounded-lg shadow-md  relative">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {isEditing ? (
                <div className="flex flex-col">
                  <FaUserCircle
                    variant="circular"
                    size="6x"
                    alt="user"
                    className="border border-gray-900 p-0.5 rounded-full w-32 h-32"
                  />
                </div>
              ) : (
                <FaUserCircle
                  variant="circular"
                  size="6x"
                  alt="user"
                  className="border border-gray-900 p-0.5 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[150px] rounded-full w-32 h-32"
                />
              )}
            </div>
            <div className="ml-8">
              <h2 className="md:text-[17px] lg:text-[19px] xl:text-[23px]  font-bold flex flex-start">
                User Name
              </h2>
              <p className="text-gray-600 md:text-[12px] lg:text-[15px] xl:text-[18px]">
                User ID
              </p>
              {isEditing ? (
                <input
                  type="text"
                  className="w-full border rounded py-1 px-2 mt-2 bg-purple-200 outline-none"
                  placeholder="location"
                />
              ) : (
                <p className="text-gray-600 md:text-[12px] lg:text-[15px] xl:text-[18px]">
                  User Location
                </p>
              )}
            </div>
          </div>
          <div className="mt-4">
            {isEditing ? (
              <textarea
                className="w-full border rounded py-1 px-2 bg-purple-200 outline-none"
                placeholder="Add your bio"
                rows="4"
              />
            ) : (
              <p className="text-gray-600 md:text-[13px] lg:text-[15px] xl:text-[18px]">
                Start sharing to unlock your experience!
              </p>
            )}
          </div>
          <div className="mt-4 ">
            {isEditing ? (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold lg:py-2 lg:px-4 rounded"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold md:px-[5px] md:py-[5px]   lg:py-2 lg:px-4 rounded absolute top-8 right-8 flex items-center justify-center"
              >
                <span className="mr-2">
                  <MdOutlineEdit size="20px" />
                </span>
                Edit Profile
              </button>
            )}
          </div>
        </div>
        <div className="grid col-span-9">
          <div className="md:mt-[40px] md:w-[85%] md:ml-[60px] lg:mt-[40px]  lg:ml-[100px]  lg:w-[80%] lg:p-[15px]  bg-gradient-to-r from-pink-200 to-purple-300 rounded-lg shadow-md relative">
            {tabContent && (
              <>
                <h2 className="md:text-lg md:mt-[15px]  lg:text-[22px]  lg:mt-[18px] xl:text-[25px] xl:mt-[20px] text-purple-600  font-bold text-center">
                  {tabContent.title}
                </h2>
                <div className="md:p-[15px] lg:p-[15px] md:text-[15px] lg:text-[16px] lg:mt-[15px] xl:text-[18px] xl:mt-[15px] text-pretty items-center text-left ">
                  {tabContent.data}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
