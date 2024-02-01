import { Fragment } from 'react';
import "../../styles/LandingPage.css";
import NavBar from "../../common/NavBar";
import Landing from "./Landing";
import Features from "./Features";
import Questions from "./Questions";
import HowItWorks from "./HowItWorks";
import Unique from "./Unique";
import OurUsers from "./OurUsers";
import HowInvestmentWorks from "./Platform";
import FeaturedProject from "./FeaturedProject";


function LandingPage() {
    return (
        <div className="main">
            <div className='navbar'>
                <NavBar />
            </div>
            <Landing />
            <Unique />
            <Questions />
            <Features />
            <HowItWorks />
            <OurUsers />
            <HowInvestmentWorks />
            <FeaturedProject />
        </div>
    );
}

export default LandingPage;
