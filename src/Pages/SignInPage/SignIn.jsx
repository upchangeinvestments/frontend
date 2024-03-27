import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoGoogleplus, IoLogoApple } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import NavBar from "../../commonComponents/NavBar";
import "../../styles/SignIn/SignIn.css";
import axios from "axios";
import Error from "../../utils/Error";
import SuccessToast from "../../utils/successToast";
import { useAuth } from "../../utils/AuthContext";

const ConnetWithUs = () => {
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
        <Link to="/">
          <FaLinkedinIn size="30px" />
        </Link>
      </div>
    </div>
  );
};
// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; -> regex to validat the email:

const SignIn = () => {
  const location = useLocation();
  const isLogin = location.state?.isLogin || false;

  const [isSignUp, setIsSignUp] = useState(isLogin);
  const [userData, setUserData] = useState(location.state?.userData || null);
  const navigate = useNavigate();
  const { handleUpdateAuth, backendUrl } = useAuth();

  const SignInButtonClick = () => {
    setIsSignUp(!isSignUp);
  };

  const GoogleLoginHandler = async (event) => {
    event.preventDefault();
    try {
      window.open(`${backendUrl}/auth/google`, "_self");
    } catch (error) {
      console.log(error);
    }
  };
  const OutLookLoginHandler = async (event) => {
    event.preventDefault();
    try {
      window.open(`${backendUrl}/auth/outlook`, "_self");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      const response = await axios.post(`${backendUrl}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      handleUpdateAuth(true);
      navigate("/category");
      SuccessToast("Welcome to LynkInfinite Investment!");
    } catch (error) {
      if (!error.response) {
        return Error(error.message);
      }
      return Error(error.response.data.message);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const email = event.target.email.value;
      const password = event.target.password.value;
      const confirmPassword = event.target.confirmPassword.value;
      // console.log(email, password, confirmPassword);

      const response = await axios.post(`${backendUrl}/auth/signup`, {
        email,
        password,
        confirmPassword,
      });
      localStorage.setItem("token", response.data.token);
      // navigate('/category');
      SuccessToast("Check your Inbox, and verify your account!");
    } catch (error) {
      return Error(error.response.data.message);
    }
  };

  return (
    <div className="">
      <div
        className={
          isSignUp
            ? "vsm:hidden lg:block SignIn bg1"
            : "vsm:hidden lg:block SignIn bg2"
        }
      >
        <NavBar className="" />
        <div className="UserController">
          <div
            className={
              isSignUp ? "SignInContainer bg1" : "SignInContainer bg2 change"
            }
          >
            <div className="forms-container">
              <div className="form-control font-['Playfair-Display'] signup-form">
                <form onSubmit={handleSignUp}>
                  <h2 className="">SIGN UP</h2>
                  <div className="flex items-center justify-center gap-x-4 -mt-2">
                    <div onClick={GoogleLoginHandler}>
                      <img
                        className="w-[40px]"
                        src="https://i.postimg.cc/mhfvM9pZ/googleimage-removebg-preview.png"
                        alt="googlelogo"
                      />
                    </div>
                    <div onClick={OutLookLoginHandler}>
                      <img
                        className="w-[35px]"
                        src="https://i.postimg.cc/r0x8WkPj/outlook-com-microsoft-outlook-email-personal-storage-table-computer-icons-outlook-removebg-preview.png"
                        alt="outlook"
                      />
                    </div>
                    {/* <div onClick={GoogleLoginHandler}>
                      <img
                        className="w-[40px]"
                        src="https://i.postimg.cc/HJfYVxBj/computer-icons-email-facebook-login-bluetie-inc-facebook-icon-removebg-preview.png"
                        alt="outlook"
                      />
                    </div> */}
                    {/* <Link to="/">
                      <IoLogoApple size="30px" />
                    </Link> */}
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userData !== null ? userData.email : ""}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    required
                  />
                  <div className="checkbox flex items-center justify-center gap-2 mt-4">
                    <input type="checkbox" name="terms" required />
                    <label htmlFor="terms">
                      <p className="text-xs">
                        I agree to all statements in terms of service and
                        privacy policy
                      </p>
                    </label>
                  </div>
                  <button type="submit" className="my-6">
                    SIGN UP
                  </button>
                  <div>
                    <p>Have an account?</p>{" "}
                    <span id="signUp" onClick={SignInButtonClick}>
                      <div className="w-full flex items-center justify-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#6e30a7] hover:bg-purple-600">
                        SIGN IN
                      </div>
                    </span>
                  </div>
                </form>
              </div>
              <div className="form-control font-['Playfair-Display'] signin-form">
                <form onSubmit={handleLogin}>
                  <h2 className="text-2xl">SIGN IN</h2>
                  <div className="flex items-center justify-center gap-x-4 -mt-2">
                    <div onClick={GoogleLoginHandler}>
                      <img
                        className="w-[50px]"
                        src="https://i.postimg.cc/mhfvM9pZ/googleimage-removebg-preview.png"
                        alt="googlelogo"
                      />
                    </div>
                    <div onClick={OutLookLoginHandler}>
                      <img
                        className="w-[40px]"
                        src="https://i.postimg.cc/r0x8WkPj/outlook-com-microsoft-outlook-email-personal-storage-table-computer-icons-outlook-removebg-preview.png"
                        alt="outlook"
                      />
                    </div>
                    {/* <div onClick={GoogleLoginHandler}>
                      <img
                        className="w-[40px]"
                        src="https://i.postimg.cc/HJfYVxBj/computer-icons-email-facebook-login-bluetie-inc-facebook-icon-removebg-preview.png"
                        alt="outlook"
                      />
                    </div> */}
                    {/* <Link to="/">
                      <IoLogoApple size="30px" />
                    </Link> */}
                  </div>
                  <input
                    className=""
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />

                  <button type="submit" className="w-[65%]">
                    LOGIN
                  </button>
                  <a href="#">
                    <p className="">Forgot password</p>
                  </a>
                  <div className="mt-8">
                    {/* <input type="checkbox" />   I agree to all statements in terms of service */}
                    <p>Don't have an account? </p>
                    <span id="signUp" onClick={SignInButtonClick}>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#6e30a7] hover:bg-purple-600"
                      >
                        SIGN UP
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="intros-container font-['Playfair-Display']">
              <div className="intro-control signin-intro">
                <div className="intro-control__inner">
                  <div className="">
                    <h2 className="md:text-xl lg:text-2xl">
                      <font color="#0c0b0b">
                        WELCOME BACK! <br /> <span className="text-xl">TO</span>{" "}
                        <br />
                      </font>{" "}
                      <span className="">LYNKINFINTE INVESTMENTS</span>
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
                        <Link to="/">
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
                    {/* <h2 className='md:text-xl lg:text-2xl CustomizeFontH'>
                      <font color="#0c0b0b ">WELCOME TO</font> <br /> <span className=''>LYNKINFINTE INVESTMENTS</span>
                    </h2> */}
                    <h2 className="md:text-xl lg:text-2xl">
                      <font color="#0c0b0b ">SignUp to </font> <br />{" "}
                      <span className="">Explore INVESTMENTS</span>
                    </h2>
                  </div>
                  {/* <p><font color="#0c0b0b">Your Search Engine For</font> <font color="#9747FF">REAL ESTATE INVESTMENT</font></p> */}
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
                        <Link to="/">
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
      {/* Mobile screen Page */}
      <div className="lg:hidden font-['Playfair-Display'] SignInMobile">
        <NavBar className="" />
        <div className="FormMobile">
          <div className={isSignUp ? "SignUP" : "hidden"}>
            <div className="mt-8">
              <h2 className="text-2xl font-bold ">
                <font color="#0c0b0b">WELCOME TO</font> <br />
                <p className="UPCIN">LYNKINFINTE INVESTMENTS</p>
              </h2>
            </div>
            <div
              className="m-8 py-6 px-2 rounded-lg "
              style={{
                backgroundColor: "rgba(34, 25, 25, 0.5)",
              }}
            >
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSignUp}
              >
                <h2 className="">SIGN UP</h2>
                <div className="flex items-center justify-center gap-x-4">
                  <div onClick={GoogleLoginHandler}>
                    <img
                      className="w-[40px]"
                      src="https://i.postimg.cc/mhfvM9pZ/googleimage-removebg-preview.png"
                      alt="googlelogo"
                    />
                  </div>
                  <div onClick={OutLookLoginHandler}>
                    <img
                      className="w-[35px]"
                      src="https://i.postimg.cc/r0x8WkPj/outlook-com-microsoft-outlook-email-personal-storage-table-computer-icons-outlook-removebg-preview.png"
                      alt="outlook"
                    />
                  </div>
                  {/* <div onClick={GoogleLoginHandler}>
                    <img
                      className="w-[40px]"
                      src="https://i.postimg.cc/HJfYVxBj/computer-icons-email-facebook-login-bluetie-inc-facebook-icon-removebg-preview.png"
                      alt="outlook"
                    />
                  </div> */}
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  defaultValue={userData !== null ? userData.email : ""}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  required
                />
                <div className="checkbox font-['Playfair-Display'] flex items-center justify-center gap-2 mt-4">
                  <input type="checkbox" name="terms" required />
                  <label htmlFor="terms">
                    <p className="text-xs">
                      I agree to all statements in terms of service and privacy
                      policy
                    </p>
                  </label>
                </div>
                <button type="submit" className="my-6">
                  SIGN UP
                </button>
                <div>
                  <p>
                    Have an account?{" "}
                    <span id="signUp" onClick={SignInButtonClick}>
                      LOGIN
                    </span>
                  </p>
                </div>
              </form>
            </div>
            <ConnetWithUs />
          </div>
          <div className={isSignUp ? "hidden" : "LogIn"}>
            <div className="mt-8 font-['Playfair-Display']">
              <h2 className="text-2xl font-bold">
                <font color="#0c0b0b">
                  WELCOME BACK! <br /> <span className="text-xl">TO</span>{" "}
                  <br />
                </font>{" "}
                <span className="UPCIN">LYNKINFINTE INVESTMENTS</span>
              </h2>
            </div>
            <div
              className="m-8 py-6 px-2 rounded-lg "
              style={{
                backgroundColor: "rgba(34, 25, 25, 0.5)",
              }}
            >
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleLogin}
              >
                <h2 className="text-2xl font-bold">SIGN IN</h2>
                <div className="flex items-center justify-center gap-x-4">
                  <div onClick={GoogleLoginHandler}>
                    <img
                      className="w-[50px]"
                      src="https://i.postimg.cc/mhfvM9pZ/googleimage-removebg-preview.png"
                      alt="googlelogo"
                    />
                  </div>
                  <div onClick={OutLookLoginHandler}>
                    <img
                      className="w-[40px]"
                      src="https://i.postimg.cc/r0x8WkPj/outlook-com-microsoft-outlook-email-personal-storage-table-computer-icons-outlook-removebg-preview.png"
                      alt="outlook"
                    />
                  </div>
                  {/* <div onClick={GoogleLoginHandler}>
                    <img
                      className="w-[40px]"
                      src="https://i.postimg.cc/HJfYVxBj/computer-icons-email-facebook-login-bluetie-inc-facebook-icon-removebg-preview.png"
                      alt="outlook"
                    />
                  </div> */}
                </div>
                <input
                  className=""
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
                <button type="submit">LOGIN</button>
                <a href="#">
                  <p className="">Forgot password</p>
                </a>
                <div className="mt-8">
                  {/* <input type="checkbox" />   I agree to all statements in terms of service */}
                  <p>
                    Don't have an account?{" "}
                    <span id="signUp" onClick={SignInButtonClick}>
                      SIGN UP
                    </span>
                  </p>
                </div>
              </form>
            </div>
            <ConnetWithUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
