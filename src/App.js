import { Fragment } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingSection/LandingPage";


function App() {
  return (
    <Fragment>
      <LandingPage />
    </Fragment>
    // figure out the css for the zoom-in and zoom-out and implemet as well. 
  );
}

export default App;
