import React from 'react'
import { useNavigate, useLocation, Link } from "react-router-dom";
import NavBar from '../../commonComponents/NavBar'
import Footer from '../../commonComponents/Footer'
import logo from '../../assets/logo.png'
import { useAuth } from "../../utils/AuthContext";
import axios from "axios"
import Error from "../../utils/Error";
import SuccessToast from "../../utils/successToast";


function Welcome() {
  const location = useLocation();
  const navigate = useNavigate();
  const { backendUrl } = useAuth();
  const userData = location.state?.TempUserData || null;
  console.log(userData);
  const changeMailHandler = () => {
    navigate("/signin", { state: { isLogin: false, userData: userData } });
  }
  const resendEmailHandler = async () => {
    const response = await axios.post(`${backendUrl}/auth/resendEmailVerification`, { email: userData.email, password: userData.password, confirmPassword: userData.confirmPassword });
    console.log(response);
    if (response.status === 200) {
      if (response.data.message === "New Email has been sent to your account.") {
        SuccessToast("New Email has been sent to your account")
      } else if (response.data.message === "You have verified successfully, please login.") {
        SuccessToast("You have verified successfully, please login.");
      } else {
        SuccessToast("Email has been sent to your account.");
      }
    } else {
      Error("Internal Server Error, please try again later");
    }
  }

  return (
    <div className="">
      <div className="contactMain text-white">
        <NavBar />
        <div className="h-[80vh] flex flex-col font-['Playfair-Display'] items-center justify-center">
          <h2 className='text-5xl mt-[100px]'>Thanks for Choosing LynkInfinite Investments</h2>
          {/* <p className='text-lg mt-[10px]'>Embark on Your Investment Journey: Let's Discover Your Preferences Together!</p> */}
          <img
            className="vsm:w-[60%] vsm:mb-6 msm:w[40%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[30%]"
            src={logo}
            alt="Infinite Investments"
          />
          <p className='text-2xl bg-white/20 backdrop:blur-2xl px-2 py-4 text-[#6e30a7] rounded-lg'>Mail has been sent to your E-Mail Account</p>
          <div onClick={resendEmailHandler} className="hover:underline hover:cursor-pointer">Resend Verification Email</div>
          <div onClick={changeMailHandler} className="hover:underline hover:cursor-pointer">Change Email</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Welcome