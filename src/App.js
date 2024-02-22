import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import PrivateRoute from "./utils/PrivateRoute";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignInPage from "./Pages/SignInPage/SignIn";
import SubscriptionPage from "./Pages/Subscription/SubscriptionPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/premium" element={< SubscriptionPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/category" element={< CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // figure out the css for the zoom-in and zoom-out and implemet as well. 
  );
}

export default App;
