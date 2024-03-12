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
import PostPage from "./Pages/PostPage/PostPage";
import SpecificPage from "./Pages/SpecificCategoryPage/SpecificPage";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './utils/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/premium" element={< SubscriptionPage />} />
          <Route path="/about" element={< AboutUs />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/how-it-works" element={<HowInvestmentWorks />} />
          <Route path="/resources" element={<EducationPage />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/:id/verify/:token" element={< VerifyUser />} />
          <Route path="/category/:type" exact element={< SpecificPage />} />
          <Route path="/post" exact element={< PostPage />} />
          <Route path="/profile" element={< ProfilePage />} />
          <Route path="/category" element={
            // <PrivateRoute>
            <CategoryPage />
            // </PrivateRoute>
          } />

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
      </AuthProvider>
    </BrowserRouter>
    // figure out the css for the zoom-in and zoom-out and implemet as well. 
  );
}

export default App;
