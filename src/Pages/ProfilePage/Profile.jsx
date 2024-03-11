import React, { useState } from "react";
import { MdOutlineEdit, MdOutlineFileUpload } from "react-icons/md";
import Sidebar from "./sidebar";

const Profile = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://cdn.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.webp"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [tabContent, setTabContent] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleIncomingData = (data) => {
    setTabContent(data);
  };

  return (
    <div className="w-[80%] mx-auto">
      <div>
        <Sidebar sendDataToProfile={handleIncomingData} />
      </div>
      <div className="bg-white/20 backdrop-blur-lg rounded shadow-md mx-auto m-4 p-4 relative w-full">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {isEditing ? (
              <div className="flex flex-col">
                <img
                  className="w-32 h-32 border rounded-full"
                  src={imageSrc}
                  alt=""
                />
                <input
                  type="file"
                  className="mt-4 "
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            ) : (
              <img
                src={imageSrc}
                alt="Profile"
                className="w-32 h-32 rounded-full"
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
              Start sharing to unlock you experience!
            </p>
          )}
        </div>
        {/* <div className="mt-4">
                <h3 className="text-lg font-bold">Your Contributions</h3>
                <p className="text-gray-600">0 trips, 0 photos, 0 reviews, 0 forums</p>
            </div> */}
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
      <div className="grid grid-cols-12 my-8 gap-8">
        <div className="bg-white/20 backdrop-blur-lg rounded-lg shadow-md p-4 col-span-9 xl:col-span-10">
          {tabContent}
        </div>
      </div>
    </div>
  );
};

export default Profile;
