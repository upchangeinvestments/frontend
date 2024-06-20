import React from "react";
import Footer from "../../commonComponents/Footer";
import Tabs from "./ProfileTab";
import Profile from "./Profile";
import Activity from "./Activity";
import Questionnaire from "./Questionnaire";
import AccreditedInvestor from "./AccreditedInvestor";
import UserDataModal from "../../commonComponents/getUserDataModal";
import { Helmet } from 'react-helmet-async';

const ProfilePage = () => {
  const tabs = [
    { title: "Profile", content: <Profile /> },
    { title: "Saved Projects", content: <Activity /> },
    { title: "Accredited Investor", content: <AccreditedInvestor /> },
    { title: "Questionnaire", content: <Questionnaire /> },
  ];

  return (
    <div className="">
      <Helmet>
        <title>Profile page</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/profile" />
      </Helmet>
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
