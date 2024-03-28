import React from "react";
import Footer from "../../commonComponents/Footer";
import Tabs from "./ProfileTab";
import Profile from "./Profile";
import Activity from "./Activity";
import Questionnaire from "./Questionnaire";
import UserDataModal from "../../commonComponents/getUserDataModal";

const ProfilePage = () => {
  const tabs = [
    { title: "Profile", content: <Profile /> },
    { title: "Activity", content: <Activity /> },
    { title: "Questionnaire", content: <Questionnaire /> },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-300 to-pink-200">
      <div className="mb-[50px]">
        <Tabs tabs={tabs} />
      </div>
      <UserDataModal />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
