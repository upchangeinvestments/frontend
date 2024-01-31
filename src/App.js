import { Fragment } from 'react';
import './App.css';
import NavBar from "./common/NavBar";
import LandingPage from "./Pages/LandingPage/Landing";
import Tagline from "./Pages/LandingPage/Tagline";
import Features from "./Pages/LandingPage/Features";
import Questions from "./Pages/LandingPage/Questions";
import HowItWorks from "./Pages/LandingPage/HowItWorks";
import Unique from "./Pages/LandingPage/Unique";


function App() {
  return (
    // <Fragment>
    <div className="main">
      <div className='navbar'>
        <NavBar />
      </div>
      <LandingPage />
      <Tagline />
      <Unique />
      <Questions />
      <Features />
      <HowItWorks />
    </div>
    // figure out the css for the zoom-in and zoom-out and implemet as well. 
    // </Fragment>
  );
}

export default App;
