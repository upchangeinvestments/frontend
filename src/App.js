import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import PrivateRoute from "./utils/PrivateRoute";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignInPage from "./Pages/SignInPage/SignIn";
import SubscriptionPage from "./Pages/Subscription/SubscriptionPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AboutUs from "./Pages/AboutUsPage/AboutUsPage";
import Contact from "./Pages/ContactPage/ContactPage";
import VerifyUser from "./Pages/VerifyUser/VerifyUser";
import EducationPage from "./Pages/EducationPage/EducationPage";
import HowInvestmentWorks from "./Pages/LandingPage/Platform";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/premium" element={< SubscriptionPage />} />
        <Route path="/about" element={< AboutUs />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/how-it-works" element={<HowInvestmentWorks />} />
        <Route path="/resources" element={<EducationPage />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/:id/verify/:token" element={< VerifyUser />} />
        <Route path="/category" element={< CategoryPage />} />
        <Route path="/category/:type" exact element={< ProfilePage />} />
        <Route path="/profile" element={< ProfilePage />} />
        <Route element={<PrivateRoute />}>
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        bodyClassName="text-sm"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce} />
    </BrowserRouter>
    // figure out the css for the zoom-in and zoom-out and implemet as well. 
  );
}

export default App;
