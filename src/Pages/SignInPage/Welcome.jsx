import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from '../../commonComponents/NavBar'
import Footer from '../../commonComponents/Footer'
import logo from '../../assets/logo.png'
import { useAuth } from "../../utils/AuthContext";
import axios from "axios"
import Error from "../../utils/Error";
import SuccessToast from "../../utils/successToast";
import { FiEdit } from "react-icons/fi";


function Welcome() {
  const location = useLocation();
  const navigate = useNavigate();
  const { backendUrl } = useAuth();
  const userData = location.state?.TempUserData || null;
  const changeMailHandler = () => {
    navigate("/signin?isLogin=false", { state: { userData: userData } });
  }
  const resendEmailHandler = async () => {
    const response = await axios.post(`${backendUrl}/auth/resendEmailVerification`, { email: userData.email, password: userData.password, confirmPassword: userData.confirmPassword });
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
          <p className='text-2xl bg-white/20 backdrop:blur-2xl px-2 py-4 text-[#6e30a7] rounded-lg'>Verification mail has been sent to your E-Mail Account</p>
          <div className='flex items-center justify-center mt-[30px] gap-8'>
          <div onClick={resendEmailHandler} className="hover:underline hover:cursor-pointer bg-[#6e30a7] px-4 py-2 rounded-md">Resend Verification Email</div>
          <div onClick={changeMailHandler} className="flex items-center hover:underline hover:cursor-pointer text-[#6e30a7] bg-purple-300 backdrop-blur-3xl px-4 py-2 rounded-lg"><FiEdit className="mr-2" />Change Email</div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Welcome