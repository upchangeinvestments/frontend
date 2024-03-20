import "../../styles/LandingPage/LandingPage.css";
import NavBar from "../../commonComponents/NavBar";
import Landing from "./Landing";
import Features from "./Features";
import Questions from "./Questions";
// import HowItWorks from "./HowItWorks";
import Unique from "./Unique";
import HowInvestmentWorks from "./Platform";
import FeaturedProject from "./FeaturedProject";
import ListWithUs from "./ListWithUs";
import Footer from "../../commonComponents/Footer";

function LandingPage() {
  return (
    <div className="main vsm:w-[125vw] font-['Playfair-Display'] md:w-[107vw] lg:w-[100%] vsm:h-[130vh] md:h-[110vh] lg:h-[100vh]">
      <NavBar />
      <Landing />
      <Unique />
      <Questions />
      <Features />
      {/* <OurUsers /> */}
      <HowInvestmentWorks />
      <FeaturedProject />
      <ListWithUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
