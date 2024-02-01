import { Fragment } from 'react';
import './App.css';
import NavBar from "./common/NavBar";
import LandingPage from "./Pages/LandingPage/Landing";
import Features from "./Pages/LandingPage/Features";
import Questions from "./Pages/LandingPage/Questions";
import HowItWorks from "./Pages/LandingPage/HowItWorks";
import Unique from "./Pages/LandingPage/Unique";
import OurUsers from "./Pages/LandingPage/OurUsers";
import HowInvestmentWorks from "./Pages/LandingPage/Platform";
// import Post from "./common/Post";
import FeaturedProject from "./Pages/LandingPage/FeaturedProject";


function App() {
  return (
    // <Fragment>
    <div className="main">
      <div className='navbar'>
        <NavBar />
      </div>
      <LandingPage />
      <Unique />
      <Questions />
      <Features />
      <HowItWorks />
      <OurUsers />
      <HowInvestmentWorks />
      <FeaturedProject />
      {/* <Post /> */}
    </div>
    // figure out the css for the zoom-in and zoom-out and implemet as well. 
    // </Fragment>
  );
}

export default App;
