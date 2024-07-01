import React, { useState } from "react";
import Footer from "../../commonComponents/Footer";
import Tabs from "./ProfileTab";
import Profile from "./Profile";
import Activity from "./Activity";
import { FaUserCircle } from "react-icons/fa";
import Questionnaire from "./Questionnaire";
import AccreditedInvestor from "./AccreditedInvestor";
import UserDataModal from "../../commonComponents/getUserDataModal";
import { Helmet } from 'react-helmet-async';
import NavBar from "../../commonComponents/NavBar";
import Sidebar from "./Sidebar";
import MobileSidebar from "./mobileSidebar";
import ProfileContent from "./ProfileContent";
import { useAuth } from "../../utils/AuthContext";

const ProfilePage = () => {
  const { user, backendUrl, setUser } = useAuth();
  const tabs = [
    { title: "Profile", content: <Profile /> },
    { title: "Saved Projects", content: <Activity /> },
    { title: "Accredited Investor", content: <AccreditedInvestor /> },
    { title: "Questionnaire", content: <Questionnaire /> },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <div className="">
      <Helmet>
        <title>Profile page</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/profile" />
      </Helmet>
      <div className="categoryMain">
        <NavBar />
        <div className="grid grid-cols-4">
          <div className="grid col-span-1 mt-0 overscroll-y-none">
            <Sidebar sendDataToProfile={handleIncomingData} />
            <div className="md:hidden relative" onClick={sidebarHandler}>
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
          </div>
          <div className="grid col-span-3">
            <div className="YesevaFont flex items-start justify-center relative flex-col">
              <div className="flex flex-col justify-start items-center h-[90%] relative">
                <p className="text-[4.5rem] text-purple-600 uppercase "> Profile </p>
              </div>
              <div className="w-[90%] sm:p-[15px] md:p-[20px] lg:p-4 xl:p-[20px] bg-gradient-to-r from-purple-300 to-pink-200 rounded-lg shadow-md relative">
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
            </div>
            <div className="flex flex-col items-center justify-center">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </div>
      <UserDataModal />
      <Footer />
    </div>
  );
};

export default ProfilePage;
