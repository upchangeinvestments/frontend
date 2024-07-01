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
    { title: "My Profile", content: <Profile /> },
    { title: "Saved Companies", content: <Activity /> },
    { title: "Investor Status", content: <AccreditedInvestor /> },
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
            <div className="flex items-start justify-center relative flex-col">
              <div className="flex flex-col justify-start items-center h-[90%] relative">
                <p className="YesevaFont text-[4.5rem] text-purple-600 uppercase "> Profile </p>
              </div>
              <div className="w-[90%] sm:p-[15px] md:p-[20px] lg:p-4 xl:p-[20px] rounded-lg shadow-md relative" style={{ "background": "linear-gradient(135deg, #8851BC 0%, #FFFFFF 95%, #FFFFFF 100%" }}>
                <div className="flex items-center p-2 font-['Poppins']">
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
                        color="white"
                        alt="user"
                        className="border border-gray-900 p-0.5 vsm:w-[60px] vsm:h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full"
                      />
                    )}
                  </div>
                  <div className="vsm:ml-3 sm:ml-4 md:ml-8 lg:ml-8">
                    <p className="text-2xl text-white font-semibold">{user.name}</p>
                    <p className="text-white w-[50%]">Unlock the power of passive investing: Answer a few question to become a Accredited Investor </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-start gap-x-4 ml-4">
                  <div className={user.AccreditedInvestor ? "border-2 rounded-xl border-white text-white font-semibold p-2 px-4" : "px-4 p-2 rounded-xl bg-white text-purple-600 font-semibold"}>
                    <p className="uppercase">Non-accredited</p>
                  </div>
                  <div className={user.AccreditedInvestor ? "p-2 rounded-xl bg-white text-purple-600 font-semibold px-4" : "px-4 border-2 rounded-xl border-white text-white font-semibold p-2"}>
                    <p className="uppercase">accredited</p>
                  </div>
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
