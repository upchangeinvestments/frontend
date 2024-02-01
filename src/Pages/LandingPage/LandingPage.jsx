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
import Explore from "./Explore";


function LandingPage() {
    return (
        <div >
            <div className="main">
                <div className='navbar'>
                    <NavBar />
                </div>
                <Landing />
            </div>
            <Unique />
            <Questions />
            <Features />
            <HowInvestmentWorks />
            <HowItWorks />
            <Explore />
            <OurUsers />
            <FeaturedProject />
        </div>
    );
}

export default LandingPage;
