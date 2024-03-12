import React, { useState } from "react";
import { MdOutlineEdit, MdOutlineFileUpload } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./sidebar";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [tabContent, setTabContent] = useState("");

  const handleIncomingData = (data) => {
    setTabContent(data);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <Sidebar sendDataToProfile={handleIncomingData} />
      </div>
      <div className="col-span-9">
        <div className="bg-gradient-to-r from-gray-200  to-purple-300 rounded-lg shadow-md mt-8 w-[96%] p-4 relative">
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
                  {/* <input
                    type="file"
                    className="mt-4 "
                    accept="image/*"
                    onChange={handleImageChange}
                  /> */}
                </div>
              ) : (
                <FaUserCircle
                  variant="circular"
                  size="6x"
                  alt="user"
                  className="border border-gray-900 p-0.5 rounded-full w-32 h-32"
                />
              )}
            </div>
            <div className="ml-8">
              <h2 className="text-xl font-bold flex flex-start">User Name</h2>
              <p className="text-gray-600">User ID</p>
              {isEditing ? (
                <input
                  type="text"
                  className="w-full border rounded py-1 px-2 mt-2 bg-[#e4e4e7] outline-none"
                  placeholder="location"
                />
              ) : (
                <p className="text-gray-600">User Location</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            {isEditing ? (
              <textarea
                className="w-full border rounded py-1 px-2 bg-[#e4e4e7] outline-none"
                placeholder="Add your bio"
                rows="4"
              />
            ) : (
              <p className="text-gray-600">
                Start sharing to unlock your experience!
              </p>
            )}
          </div>
          <div className="mt-4 ">
            {isEditing ? (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded absolute top-8 right-8 flex items-center justify-center"
              >
                <span className="mr-2">
                  <MdOutlineEdit size="20px" />
                </span>
                Edit Profile
              </button>
            )}
          </div>
        </div>
        <div className="grid col-span-9 w-[96%] mt-6 ">
          <div className="bg-gradient-to-r from-gray-200  to-purple-400  rounded-lg shadow-md p-4 col-span-9 xl:col-span-10">
            {tabContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
