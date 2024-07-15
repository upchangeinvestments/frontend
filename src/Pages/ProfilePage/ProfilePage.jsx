import React, { useState } from "react";
import Footer from "../../commonComponents/Footer";
import Tabs from "./ProfileTab";
import Profile from "./Profile";
import Activity from "./Activity";
import Questionnaire from "./Questionnaire";
import AccreditedInvestor from "./AccreditedInvestor";
import UserDataModal from "../../commonComponents/getUserDataModal";
import { Helmet } from 'react-helmet-async';
import NavBar from "../../commonComponents/NavBar";
import Sidebar from "./Sidebar";
import MobileSidebar from "./mobileSidebar";
import { useAuth } from "../../utils/AuthContext";

const ProfilePage = () => {
  const { user } = useAuth();

  const tabs = [
    { title: "My Profile", content: <Profile />, activeIndex: 0 },
    { title: "Saved Companies", content: <Activity />, activeIndex: 1 },
    { title: "Investor Status", content: <AccreditedInvestor />, activeIndex: 2 },
    { title: "Questionnaire", content: <Questionnaire />, activeIndex: 3 },

  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [tabContent, setTabContent] = useState({
    content: <Profile />,
    title: "My Profile",
    linkId: "",
    activeIndex: 0
  });
  const handleIncomingData = (content, title, linkId, activeIndex) => {
    setTabContent({ content, title, linkId, activeIndex });
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
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="grid col-span-1">
            <div className="hidden lg:flex mt-[10%]">
              <Sidebar sendDataToProfile={handleIncomingData} />
            </div>
          </div>
          <div className="lg:grid lg:col-span-3">
            <div className="flex items-start justify-center relative flex-col w-full">
              <div className="flex justify-center lg:justify-start items-center h-[90%] relative w-full">
                <p className="YesevaFont text-[3.5rem] md:text-[4.5rem] text-purple-600 uppercase text-shadow-xl"> Profile </p>
              </div>
              <div className="w-[90%] mx-auto lg:mx-0 p-[15px] md:p-[20px] lg:p-4 xl:p-[20px] rounded-lg shadow-xl relative gradient-bg">
                <div className="flex items-center p-2 font-['Poppins']">
                  <div className="vsm:ml-3 sm:ml-4 md:ml-8 lg:ml-8">
                    <p className="text-2xl text-white font-semibold">{user.name}</p>
                    <p className="text-white md:w-[50%]">Unlock the power of passive investing: Answer a few question to become a Accredited Investor </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-start gap-x-4 ml-4 whitespace-nowrap flex-col md:flex-row gap-y-4">
                  <div className={user.AccreditedInvestor ? "border-2 rounded-xl border-white text-white font-semibold p-2 px-4" : "p-2 px-4 rounded-xl bg-white text-purple-600 font-semibold"}>
                    <p className="uppercase">Non-accredited</p>
                  </div>
                  <div className={user.AccreditedInvestor ? "p-2 rounded-xl bg-white text-purple-600 font-semibold px-4" : "p-2 px-4 border-2 rounded-xl border-white text-white font-semibold"}>
                    <p className="uppercase">accredited</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden relative" onClick={sidebarHandler}>
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
            <div className="w-full">
              {["My Profile", "Investor Status", "Questionnaire", "Saved Companies"].includes(tabContent.title) ? (
                <Tabs tabs={tabs} activeIndex={tabContent.activeIndex} />
              ) : (
                <div className="mt-8 w-[90%] mx-auto lg:mx-0 flex items-center justiify-center lg:justify-start flex-col">
                  <p className="text-2xl font-bold text-center YesevaFont mb-2">{tabContent.title}</p>
                  <div className="flex items-center justify-center lg:items-start lg:justify-start">
                    {tabContent.content}
                  </div>
                </div>
              )}
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
