import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from "../../utils/AuthContext";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import NavBar from "../../commonComponents/NavBar";
import "../../styles/SignIn/SignIn.css";
import axios from "axios";
import Error from "../../utils/Error";
import SuccessToast from "../../utils/successToast";

const ConnectWithUs = () => {
  return (
    <div className="mt-6 pb-6">
      <p className="flex items-center justify-center">Connect with us</p>
      <div className="flex items-end justify-center gap-x-4 mt-2">
        <Link to="/">
          <FaFacebookF size="25px" />
        </Link>
        <Link to="/">
          <FaInstagram size="25px" />
        </Link>
        <Link to="https://www.linkedin.com/company/lynkinfiniteinvestments/" target="_blank">
          <FaLinkedinIn size="30px" />
        </Link>
      </div>
    </div>
  );
};

const ForgotPassword = () => {
  let { resetToken } = useParams();
  const navigate = useNavigate();
  const { handleUpdateAuth, backendUrl } = useAuth();

  const resetPasswordHandler = async (event) => {
    try {
      event.preventDefault();
      const password = event.target.NewPassword.value;
      const passwordConfirm = event.target.ConfirmPassword.value;
      const response = await axios.post(`${backendUrl}/auth/resetPassword`, { password, passwordConfirm, resetToken });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        const currentDate = new Date();
        const tokenExpiration = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // expires in 1 day
        localStorage.setItem("tokenExpiration", tokenExpiration);

        handleUpdateAuth(true);
        SuccessToast(response.data.message);
        navigate('/category');
      }
    } catch (error) {
      if (error.response) {
        return Error(error.response.data.message);
      } else if (error.request) {
        return Error("Something went wrong! Please try again later.");
      } else {
        // will have to console errors with production specific style so that we can track errors from the server logs that users are receiving 
        return Error("An unexpected error occurred. Please try again later.");
      }
    }
  }

  return (
    <div className="">
      <div className="vsm:hidden lg:block SignIn bg1">
        <NavBar className="" />
        <div className="UserController">
          <div className="SignInContainer bg1">
            <div className="forms-container">
              <div className="form-control font-['Playfair-Display'] signin-form">
                <form onSubmit={resetPasswordHandler}>
                  <h2>RESET PASSWORD</h2>
                  <input type="text" placeholder="New Password" name="NewPassword" required />
                  <input type="text" placeholder="Confirm Password" name="ConfirmPassword" required />
                  <button type="submit" className="">RESET PASSWORD</button>
                </form>
              </div>
            </div>
            <div className="intros-container font-['Playfair-Display']">
              <div className="intro-control signin-intro">
                <div className="intro-control__inner">
                  <div className="">
                    <h2 className="md:text-xl lg:text-2xl">
                      <font color="#0c0b0b">
                        OOPS! IT SEEMS <br /> <span className="text-xl">YOU</span> <br />
                      </font>{" "}
                      <span className="">FORGT YOUR PASSWORD</span>
                    </h2>
                  </div>
                  <div className="socials1 font-['Playfair-Display']">
                    <p>Connect with us</p>
                    <div className="">
                      <div className="flex items-end justify-center gap-x-4 mt-2">
                        <Link to="/">
                          <FaFacebookF size="23px" />
                        </Link>
                        <Link to="/">
                          <FaInstagram size="25px" />
                        </Link>
                        <Link to="https://www.linkedin.com/company/lynkinfiniteinvestments/" target="_blank">
                          <FaLinkedinIn size="25px" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-control signup-intro">
                <div className="intro-control__inner">
                  <div className="font-['Playfair-Display']">
                    <h2 className="md:text-xl lg:text-2xl">
                      <font color="#0c0b0b ">SignUp to </font> <br /> <span className="">Explore INVESTMENTS</span>
                    </h2>
                  </div>
                  <div className="socials">
                    <p className="vsm:text-xs lg:text-base">Connect with us</p>
                    <div className="social">
                      <div className="flex items-end justify-center gap-x-4 mt-2">
                        <Link to="/">
                          <FaFacebookF size="23px" />
                        </Link>
                        <Link to="/">
                          <FaInstagram size="25px" />
                        </Link>
                        <Link to="https://www.linkedin.com/company/lynkinfiniteinvestments/" target="_blank">
                          <FaLinkedinIn size="25px" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile screen */}
      <div className="lg:hidden font-['Playfair-Display'] SignInMobile">
        <NavBar className="" />
        <div className="FormMobile">
          <div className="">
            <div className="mt-8">
              <h2 className="text-2xl font-bold ">
                <font color="#0c0b0b">OOPS! IT SEEMS YOU </font> <br />
                <p className="UPCIN">FORGET YOUR PASSWORD</p>
              </h2>
            </div>
            <div
              className="m-8 py-6 px-2 rounded-lg "
              style={{
                backgroundColor: "rgba(34, 25, 25, 0.5)",
              }}
            >
              {/* ....................... start of registration form in mobile screens....................... */}
              <form className="flex flex-col items-center justify-center">
                <h2>FORGOT PASSWORD</h2>
                <input type="text" placeholder="Current Password" name="CurrentPassword" required />
                <input type="text" placeholder="New Password" name="NewPassword" required />
                <input type="text" placeholder="Confirm Password" name="ConfirmPassword" required />
                <button type="submit" className="">RESET PASSWORD</button>
              </form>
              {/* .......................end of registration of mobile screens....................... */}
            </div>
            <ConnectWithUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
