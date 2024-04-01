import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";
import MobileSidebar from "./mobileSidebar";
import { useAuth } from "../../utils/AuthContext";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const [tabContent, setTabContent] = useState({
    data: user,
    title: "ABOUT",
    linkId: "",
  });

  const handleIncomingData = (data, title, linkId) => {
    setTabContent({ data, title, linkId });
  };
  const sidebarHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  let date = new Date(user.createdAt);
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getUTCDate().toString().padStart(2, "0");
  let month = monthNames[date.getUTCMonth()];
  let year = date.getUTCFullYear().toString();
  const dateOfJoined = `${day} ${month} ${year}`;

  date = new Date(user.dob);
  day = date.getUTCDate().toString().padStart(2, "0");
  month = monthNames[date.getUTCMonth()];
  year = date.getUTCFullYear().toString();
  const DOB = `${day} ${month} ${year}`;

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
      <div className="hidden md:block vsm:col-span-2 md:col-span-3 lg:col-span-3">
        <Sidebar sendDataToProfile={handleIncomingData} />
      </div>
      <div className="vsm:col-span-10  md:col-span-9 lg:col-span-9">
        <div className="vsm:p-[10px] vsm:ml-[10px] vsm:mt-[45px]  sm:w-[100%] sm:mt-[45px] sm:ml-[10px] sm:p-[15px] md:mt-[50px] md:ml-[60px] md:p-[20px] md:w-[85%] lg:mt-[50px] lg:ml-[100px] lg:w-[80%] lg:p-4 xl:w-[80%] xl:p-[20px] xl:ml-[100px] bg-[#f1f1f8] rounded-lg shadow-md  relative">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {user.image ? (
                <div>
                  <img
                    src={user.image}
                    alt="user"
                    className="border border-gray-900 p-0.5 vsm:w-[60px] vsm:h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full"
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
            <div className=" vsm:ml-3 sm:ml-4  md:ml-8 lg:ml-8">
              <h2 className="vsm:text-[14px] sm:text-[15px] text-purple-800 md:text-[17px] lg:text-[19px] xl:text-[23px]  font-bold flex flex-start">
                Welcome {user.name}
              </h2>
              <p className="text-purple-500 vsm:text-[11px] sm:text-[12px] md:text-[12px] lg:text-[15px] xl:text-[18px]">
                Email address: {user.email}
              </p>
              {isEditing ? (
                <input
                  type="text"
                  className="w-full border rounded py-1 px-2 mt-2 bg-purple-200 outline-none"
                  placeholder="location"
                />
              ) : (
                <p className="text-purple-500 vsm:text-[11px] sm:text-[12px] md:text-[12px] lg:text-[15px] xl:text-[18px]">
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
              <p className="text-purple-500 vsm:text-[11px] vsm:pt-[15px] sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[18px]">
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
                className="bg-[#6e30a7] hover:bg-purple-600 text-white font-bold vsm:text-[10px] vsm:px-[4px] vsm:py-[3px] vsm:mt-[40px] sm:text-[12px] sm:px-[5px] sm:ml-[20px] md:px-[5px] md:py-[5px] lg:text-[18px]   lg:py-2 lg:px-4 rounded absolute top-8 right-8 flex items-center justify-center"
              >
                <span className="mr-2">
                  <MdOutlineEdit
                    className="vsm:size-[13px] sm:size-[12px] lg:size-[18px]"
                    size="20px"
                  />
                </span>
                Edit Profile
              </button>
            )}
          </div>
        </div>
        <div className="grid col-span-9">
          <div className="vsm:mt-[20px] vsm:ml-[10px] vsm:p-[16px] sm:w-[100%] sm:mt-[20px] sm:p-[18px]  sm:ml-[10px] md:mt-[40px] md:w-[85%] md:ml-[60px] lg:mt-[40px]  lg:ml-[100px]  lg:w-[80%] lg:p-[15px]  bg-[#f1f1f8] rounded-lg shadow-md relative">
            {tabContent && (
              <div id={tabContent.linkId}>
                <h2 className="vsm:text-[18px] vsm:mt-[10px] sm:text-[20px] sm:mt-[12px] md:text-lg md:mt-[15px]  lg:text-[22px]  lg:mt-[18px] xl:text-[25px] xl:mt-[20px] text-[#6e30a7]  font-bold text-center">
                  {tabContent.title}
                </h2>
                <div className="vsm:text-[15px] text-black vsm:mt-[10px] sm:mt-[12px] sm:text-[14px] md:p-[15px] lg:p-[15px] md:text-[15px] lg:text-[16px] lg:mt-[15px] xl:text-[18px] xl:mt-[15px] text-pretty items-center text-left ">
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        <td className="pr-6">Name: </td>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <td className="pr-6">Email address: </td>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <td className="pr-6">Location: </td>
                        <td>{user.location}</td>
                      </tr>
                      <tr>
                        <td className="pr-6">Date of birth: </td>
                        <td>{DOB}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="">Member since {dateOfJoined}</div>
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
