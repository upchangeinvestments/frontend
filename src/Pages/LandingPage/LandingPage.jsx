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
        <div className="main vsm:w-[125vw] md:w-[107vw] lg:w-[100%]">
            <NavBar />
            <Landing />
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
