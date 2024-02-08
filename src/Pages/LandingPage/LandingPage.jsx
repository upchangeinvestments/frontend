import "../../styles/LandingPage.css";
import NavBar from "../../common/NavBar";
import Landing from "./Landing";
import Features from "./Features";
import Questions from "./Questions";
// import HowItWorks from "./HowItWorks";
import Unique from "./Unique";
import OurUsers from "./OurUsers";
import HowInvestmentWorks from "./Platform";
import FeaturedProject from "./FeaturedProject";
import Explore from "./Explore";
import Footer from "../../common/Footer"


function LandingPage() {
    return (
        <div className="main vsm:w-[125vw] md:w-[107vw] lg:w-[100%]">
            <NavBar />
            <Landing />
            <Unique />
            <Questions />
            <Features />
            <OurUsers />
            <HowInvestmentWorks />
            <Explore />
            <FeaturedProject />
            <Footer />
        </div>
    );
}

export default LandingPage;
