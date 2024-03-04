import React from 'react';
import Footer from "../../commonComponents/Footer"
import Tabs from "./ProfileTab"
import Profile from "./Profile"
import Activity from "./Activity"
import Questionnaire from "./Questionnaire"

const ProfilePage = () => {
    const tabs = [
        { title: 'Profile', content: <Profile /> },
        { title: 'Activity', content: <Activity /> },
        { title: 'Questionnaire', content: <Questionnaire /> },
    ];

    return (
        <div className="">
            <div className="">
                <Tabs tabs={tabs} />
            </div>
            <div className="mt-[100px]">
                <Footer />
            </div>
        </div>
    );
};

export default ProfilePage;
