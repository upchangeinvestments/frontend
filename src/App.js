import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute";
import PrivateProfileRoute from "./utils/PrivateProfileRoute";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignInPage from "./Pages/SignInPage/SignIn";
import ForgotPassword from "./Pages/SignInPage/ForgotPassword";
import SubscriptionPlan from "./Pages/SubscriptionPlan/SubscriptionPlan";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AboutUs from "./Pages/AboutUsPage/AboutUsPage";
import Contact from "./Pages/ContactPage/ContactPage";
import VerifyUser from "./Pages/VerifyUser/VerifyUser";
import EducationPage from "./Pages/EducationPage/EducationPage";
import Articles from "./Pages/EducationPage/Articles";
import HowInvestmentWorks from "./Pages/LandingPage/Platform";
import PostPage from "./Pages/PostPage/PostPage";
import SpecificPage from "./Pages/SpecificCategoryPage/SpecificPage";
import ComparePage from "./Pages/SpecificCategoryPage/Compare";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./utils/AuthContext";
import Termsandconditions from "./Pages/SpecificCategoryPage/Termsandconditions";
import Privacyandpolicy from "./Pages/SpecificCategoryPage/Privacyandpolicy";
import Welcome from "./Pages/SignInPage/Welcome";
import HowItWorksPage from "./Pages/SpecificCategoryPage/HowItWorksPage";
import RoiCalculator from "./Pages/RoiCalculatorPage/CalculatorPage"
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/premium" element={<SubscriptionPlan />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/how-it-works" element={<HowInvestmentWorks />} />
          <Route path="/resources" element={<EducationPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:id/verify/:token" element={<VerifyUser />} />
          <Route path="/rei-firms" exact element={
            <PrivateRoute>
              <SpecificPage />
            </PrivateRoute>
          } />
          <Route path="/compare" exact element={
            <PrivateRoute>
              <ComparePage />
            </PrivateRoute>
          } />
          <Route path="/post/:postId" exact element={
            <PrivateRoute>
              <PostPage />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateProfileRoute>
              <ProfilePage />
            </PrivateProfileRoute>
          } />
          <Route path="/terms" element={<Termsandconditions />} />
          <Route path="/roi-calculator" element={<RoiCalculator />} />
          <Route path="/article/:articleHeading" element={<Articles />} />
          <Route path="/privacy" element={<Privacyandpolicy />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/work" element={<HowItWorksPage />} />
          <Route path="/resetPassword/:resetToken" element={<ForgotPassword />} />
          <Route path="*" element={<NotFoundPage />} />
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
          transition={Bounce}
        />
      </AuthProvider>
    </BrowserRouter >
    // figure out the css for the zoom-in and zoom-out and implemet as well.
  );
}

export default App;
