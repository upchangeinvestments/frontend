import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignInPage from "./Pages/SignInPage/SignIn";
import Subscription from "./Pages/Subscription/Subscription";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/premium" element={< Subscription />} />
      </Routes>
    </BrowserRouter>
    // figure out the css for the zoom-in and zoom-out and implemet as well. 
  );
}

export default App;
