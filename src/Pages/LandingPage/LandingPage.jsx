import React from 'react';
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
import WaitListModal from "../../commonComponents/WaitListModal";
import { Helmet } from 'react-helmet-async';

function LandingPage() {
  const [isOpen, setOpen] = React.useState(!localStorage.getItem('waitlist'));

  return (
    <div className="main vsm:w-[100%] font-['Playfair-Display'] vsm:h-[130vh] md:h-[110vh] lg:h-[100vh]">
      <Helmet>
        <title>LynkInfinite Investments</title>
        <meta name="description" content="Real Estate Investment" />
        <link rel="canonical" href="/" />
      </Helmet>
      <WaitListModal isOpen={isOpen} setOpen={setOpen} />
      <NavBar />
      <Landing />
      {!isOpen && (
        <>
          <Unique />
          <Questions />
          <Features />
          {/* <OurUsers /> */}
          <HowInvestmentWorks />
          <FeaturedProject />
          <ListWithUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default LandingPage;
