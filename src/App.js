import { Fragment } from 'react';
import './App.css';
import NavBar from "./common/NavBar";
import LandingPage from "./Pages/LandingPage/Landing";
import Tagline from "./Pages/LandingPage/Tagline";

function App() {
  return (
    // <Fragment>
    <div className="main">
      <div className='navbar'>
        <NavBar />
      </div>
      <LandingPage />
      <Tagline />

    </div>
    // </Fragment>
  );
}

export default App;
