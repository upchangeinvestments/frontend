import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import NavBar from "../../commonComponents/NavBar";
import bgImage from "../../assets/login_BG.jpeg";
import "../../styles/SignIn/SignIn.css";
import axios from "axios";
import Error from "../../utils/Error";
import logo from "../../assets/blackLogo.png";
import SuccessToast from "../../utils/successToast";
import { useAuth } from "../../utils/AuthContext";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Helmet } from 'react-helmet-async';

const ConnetWithUs = () => {
  return (
    <div className="pb-6 ">
      <p className="flex items-center justify-center text-black">Connect with us</p>
      <div className="flex items-end justify-center gap-x-4 mt-2">
        <Link to="/">
          <FaFacebookF size="25px" color="black" />
        </Link>
        <Link to="/">
          <FaInstagram size="25px" color="black" />
        </Link>
        <Link to="https://www.linkedin.com/company/lynkinfiniteinvestments/" target="_blank">
          <FaLinkedinIn size="30px" color="black" />
        </Link>
      </div>
    </div>
  );
};

const SignIn = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isLogin = queryParams.get('isLogin');

  const [isSignUp, setIsSignUp] = useState(isLogin === 'true' ? true : false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [userData, setUserData] = useState(location.state?.userData || null);
  const navigate = useNavigate();
  const { handleUpdateAuth, backendUrl, handleGuest } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const isLogin = queryParams.get('isLogin');
    setIsSignUp(isLogin === 'true' ? true : false);
  }, [location]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const SignInButtonClick = () => {
    setIsSignUp(!isSignUp);
  };

  const GoogleLoginHandler = async (event) => {
    event.preventDefault();
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");

      const res = window.open(`${backendUrl}/auth/google`, "_self");
    } catch (error) {
      Error("Something went wrong, Please try again later.");
    }
  };
  const OutLookLoginHandler = async (event) => {
    event.preventDefault();
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");

      window.open(`${backendUrl}/auth/outlook`, "_self");
    } catch (error) {
      Error("Something went wrong, Please try again later.");
    }
  };

  const validateEmail = (enteredEmail) => {
    const emailRegex = /^[a-z0-9]+([._-][a-z0-9]+)*@(gmail\.com|yahoo\.com|outlook\.com)$/;
    if (!emailRegex.test(enteredEmail)) {
      return false;
    }
    return true;
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim().toLowerCase();
    const password = event.target.password.value.trim();

    if (!validateEmail(email)) {
      return Error("Email entered is Invalid");
    }
    try {
      const response = await axios.post(`${backendUrl}/auth/login`, {
        email,
        password,
        userData
      });

      localStorage.setItem("token", response.data.token);
      const currentDate = new Date();
      const tokenExpiration = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // expires in 1 day
      localStorage.setItem("tokenExpiration", tokenExpiration);
      handleGuest(false);
      handleUpdateAuth(true);
      navigate("/rei-firms");
      SuccessToast("Welcome to LynkInfinite Investment!");

    } catch (error) {
      if (!error.response) {
        return Error(error.message);
      }
      return Error(error.response.data.message);
    }
  };

  const handleGuestLogin = async () => {
    try {
      const response = await axios.post(`${backendUrl}/auth/guest`);
      localStorage.setItem('token', response.data.token);
      const currentDate = new Date();
      const tokenExpiration = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // expires in 1 day
      localStorage.setItem('tokenExpiration', tokenExpiration);

      handleUpdateAuth(true);
      navigate('/rei-firms');
    } catch (error) {
      console.error('Failed to login as guest, try again afte sometime!', error);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const email = event.target.email.value.trim().toLowerCase();
      const password = event.target.password.value.trim();
      const confirmPassword = event.target.confirmPassword.value.trim();

      if (!validateEmail(email)) {
        return Error("Email entered is Invalid");
      }
      const response = await axios.post(`${backendUrl}/auth/signup`, { email, password, confirmPassword, userData });
      if (response.status === 200) {
        SuccessToast("Verification email has been sent to your email, please verify your account!");
        const TempUserData = { email, password, confirmPassword };
        navigate("/welcome", { state: { isLogin: false, TempUserData: TempUserData } });
      }
    } catch (error) {
      if (error.response) {
        return Error(error.response.data.message);
      } else if (error.request) {
        return Error("Something went wrong! Please try again later.");
      } else {
        return Error(error.message);
      }
    }
  };

  const handleForgetPassword = async (event) => {
    event.preventDefault();
    try {
      const email = event.target.ForgotEmail.value.trim().toLowerCase();
      const name = event.target.name.value;

      if (!validateEmail(email)) {
        return Error("Invalid Email.");
      }
      const response = await axios.post(`${backendUrl}/auth/forgotPassword`, { email, name });
      if (response.status === 200) {
        SuccessToast(response.data.message);
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
  };

  return (
    <div className="">
      <Helmet>
        <title>Login page</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/signin" />
      </Helmet>
      <div className={
        isSignUp
          ? "vsm:hidden lg:block SignIn"
          : "vsm:hidden lg:block SignIn"
      }
      >
        <NavBar className="" />
        <div className="UserController">
          <div className={isSignUp ? "SignInContainer shadow-2xl -mt-8" : "SignInContainer change shadow-2xl -mt-8"}>
            <div className="forms-container">
              {/* .......................start of registration form.......................  */}
              <div className="form-control font-['Playfair-Display'] signup-form shadow-lg bg-gradient-to-br from-[#1f0036] to-[#3b0a72]">
                <form onSubmit={handleSignUp}>
                  <h2 className="text-2xl font-bold">SIGN UP</h2>
                  <div className="flex items-center justify-center gap-x-4 -mt-2">
                    <div onClick={GoogleLoginHandler}>
                      <img className="w-[40px]" src="https://i.postimg.cc/mhfvM9pZ/googleimage-removebg-preview.png" alt="googlelogo" />
                    </div>
                    <div onClick={OutLookLoginHandler}>
                      <img className="w-[35px]" src="https://i.postimg.cc/r0x8WkPj/outlook-com-microsoft-outlook-email-personal-storage-table-computer-icons-outlook-removebg-preview.png" alt="outlook" />
                    </div>
                  </div>
                  <input type="email" placeholder="Email" name="email" value={userData !== null ? userData.email : ""} onChange={(e) => setUserData({ ...userData, email: e.target.value })} required />
                  <div className="relative flex flex-start w-full eye-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className="w-full"
                      required
                    />
                    {showPassword ? (
                      <IoEyeOffOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
                    ) : (
                      <IoEyeOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
                    )}
                  </div>
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
                        I agree to all statements in <Link to='/Terms' target="_blank" className="hover:underline">terms of service</Link> and <Link to='/Privacy' target="_blank" className="hover:underline">privacy policy</Link>
                      </p>
                    </label>
                  </div>
                  <button type="submit" className="bg-top whitespace-nowrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 rounded-full md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }} >
                    SIGN UP
                  </button>
                  <div>
                    <p>Have an account?</p>{" "}
                    <span id="signUp" onClick={SignInButtonClick}>
                      <div className="w-full flex items-center justify-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold bg-top whitespace-nowrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 md:text-base lg:text-base xl:text-lg text-black bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${bgImage})` }} >
                        SIGN IN
                      </div>
                    </span>
                  </div>
                </form>
              </div>
              {/* .......................end of registration form....................... */}

              {/* .......................start of login form and forgot password form....................... */}
              <div className="form-control font-['Playfair-Display'] signin-form shadow-lg bg-gradient-to-br from-[#1f0036] to-[#3b0a72]">
                {/* .......................start of forgot password....................... */}
                {showForgetPassword ? (
                  <form onSubmit={handleForgetPassword}>
                    <h2 className="">Forgot Password</h2>
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="email" placeholder="Email" name="ForgotEmail" required />
                    <button type="submit" className="font-normal">
                      RESET PASSWORD
                    </button>
                    <div>
                      <p>Back to SignIn</p>{" "}
                      <span id="signUp" onClick={() => setShowForgetPassword(false)}>
                        <div className="w-full flex items-center justify-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#6e30a7] hover:bg-purple-600">
                          SIGN IN
                        </div>
                      </span>
                    </div>
                  </form>
                ) : (
                  // .......................start of login form .......................
                  <form onSubmit={handleLogin}>
                    <h2 className="text-2xl font-bold">SIGN IN</h2>
                    <div className="flex items-center justify-center gap-x-4 -mt-2">
                      <div onClick={GoogleLoginHandler}>
                        <img className="w-[50px]" src="https://i.postimg.cc/mhfvM9pZ/googleimage-removebg-preview.png" alt="googlelogo" />
                      </div>
                      <div onClick={OutLookLoginHandler}>
                        <img className="w-[40px]" src="https://i.postimg.cc/r0x8WkPj/outlook-com-microsoft-outlook-email-personal-storage-table-computer-icons-outlook-removebg-preview.png" alt="outlook" />
                      </div>
                    </div>
                    <input type="email" placeholder="Email" name="email" value={userData !== null ? userData.email : ""} onChange={(e) => setUserData({ ...userData, email: e.target.value })} required />
                    <div className="logineyeinput relative flex flex-start w-[75%]">
                      <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" required
                      />
                      {showPassword ? (
                        <IoEyeOffOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
                      ) : (
                        <IoEyeOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
                      )}
                    </div>
                    <button type="submit" className="bg-top whitespace-nowrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 rounded-full md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }} >
                      LOGIN
                    </button>
                    <div className="cursor-pointer" onClick={() => setShowForgetPassword(true)}>
                      <p className="">Forgot password</p>
                    </div>
                    <div className="mt-8">
                      {/* <input type="checkbox" />   I agree to all statements in terms of service */}
                      <p>Don't have an account? </p>
                      <span id="signUp" onClick={SignInButtonClick}>
                        <div className="w-full flex items-center justify-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm bg-top whitespace-nowrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover"
                          style={{ backgroundImage: `url(${bgImage})` }} >
                          SIGN UP
                        </div>
                      </span>
                    </div>
                  </form>
                  // .......................end of login form .......................
                )
                }
              </div>
              {/* .......................end of login form and forgot password form....................... */}
            </div>
            <div className="intros-container font-['Playfair-Display']">
              <div className="intro-control signin-intro ">
                <div className="intro-control__inner flex items-center justify-around flex-col h-full">
                  <div className="lg:w-64 vsm:w-44 sm:w-48 md:w-52 mx-auto">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="border-[1px] border-black rounded-xl px-12 py-2 hover:cursor-pointer" onClick={handleGuestLogin}>
                    <p className="text-black hover:underline">Continue as a GUEST</p>
                  </div>
                  <div className="socials1 font-['Playfair-Display']">
                    <p className="text-black text-lg">Connect with us</p>
                    <div className="">
                      <div className="flex items-end justify-center gap-x-4 mt-2">
                        <Link to="/">
                          <FaFacebookF size="23px" color="black" />
                        </Link>
                        <Link to="/">
                          <FaInstagram size="25px" color="black" />
                        </Link>
                        <Link to="https://www.linkedin.com/company/lynkinfiniteinvestments/" target="_blank">
                          <FaLinkedinIn size="25px" color="black" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-control signup-intro">
                <div className="intro-control__inner flex items-center justify-around flex-col h-full">
                  <div className="lg:w-64 vsm:w-44 sm:w-48 md:w-52 mx-auto">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="border-[1px] border-black rounded-xl px-12 py-2 hover:cursor-pointer" onClick={handleGuestLogin}>
                    <p className="text-black hover:underline">Continue as a GUEST</p>
                  </div>
                  <div className="socials">
                    <p className="text-lg text-black">Connect with us</p>
                    <div className="social">
                      <div className="flex items-end justify-center gap-x-4 mt-2">
                        <Link to="/">
                          <FaFacebookF size="23px" color="black" />
                        </Link>
                        <Link to="/">
                          <FaInstagram size="25px" color="black" />
                        </Link>
                        <Link to="https://www.linkedin.com/company/lynkinfiniteinvestments/" target="_blank">
                          <FaLinkedinIn size="25px" color="black" />
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


      {/* .......................Mobile screen Page....................... */}
      <div className="lg:hidden font-['Playfair-Display']">
        <NavBar className="" />
        <div className="FormMobile">
          <div className={isSignUp ? "SignUP" : "hidden"}>
            <div className="mt-8">
              <h2 className="text-2xl font-bold ">
                <font color="#0c0b0b">WELCOME TO</font> <br />
                <p className="text-purple-600">LynkInfinite Investments</p>
              </h2>
            </div>
            <div className="m-8 py-6 px-2 rounded-lg shadow-lg bg-gradient-to-br from-[#1f0036] to-[#3b0a72]">
              {/* ....................... start of registration form in mobile screens....................... */}
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSignUp}
              >
                <h2 className="text-2xl font-bold">SIGN UP</h2>
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
                </div>
                <input type="email" placeholder="Email" name="email" defaultValue={userData !== null ? userData.email : ""} required />
                <div className="relative logineyeinput flex flex-start w-[75%]">
                  <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="w-full" required />
                  {showPassword ? (
                    <IoEyeOffOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
                  ) : (
                    <IoEyeOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
                  )}
                </div>
                <input type="password" placeholder="Confirm password" name="confirmPassword" required />
                <div className="checkbox font-['Playfair-Display'] flex items-center justify-center gap-2 mt-4 w-[80%]">
                  <input type="checkbox" name="terms" required />
                  <label htmlFor="terms">
                    <p className="text-xs">
                      I agree to all statements in <Link to='/Terms' target="_blank" className="hover:underline">terms of service</Link> and <Link to='/Privacy' target="_blank" className="hover:underline">privacy policy</Link>
                    </p>
                  </label>
                </div>
                <button type="submit" className="bg-top whitespace-nowrap my-6 vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 rounded-full md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${bgImage})` }}>
                  SIGN UP
                </button>
                <div>
                  <p>
                    Have an account?{" "}
                    <span id="signUp" onClick={SignInButtonClick}>
                      SIGN IN
                    </span>
                  </p>
                </div>
                <div className="border-[1px] border-white rounded-xl px-6 py-2 hover:cursor-pointer my-4" onClick={handleGuestLogin}>
                  <p className="text-white hover:underline">Continue as a GUEST</p>
                </div>
              </form>
              {/* .......................end of registration of mobile screens....................... */}
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
                <span className="text-purple-600">LynkInfinite Investments</span>
              </h2>
            </div>
            <div className="m-8 py-6 px-2 rounded-lg shadow-lg bg-gradient-to-br from-[#1f0036] to-[#3b0a72]">
              {showForgetPassword ? (
                // ....................... start of forgot form .......................
                <form className="flex flex-col items-center justify-center" onSubmit={handleForgetPassword} >
                  <h2 className="text-2xl font-bold">FORGOT PASSWORD</h2>
                  <input className="" type="text" placeholder="Name" name="name" required />
                  <input className="" type="email" placeholder="Email" name="ForgotEmail" required />
                  <button type="submit" className="font-normal">
                    RESET PASSWORD
                  </button>
                  <div>
                    <p>Back to SignIn</p>{" "}
                    <span id="signUp" onClick={() => setShowForgetPassword(false)}>
                      <div className="w-full flex items-center justify-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#6e30a7] hover:bg-purple-600">
                        SIGN IN
                      </div>
                    </span>
                  </div>
                </form>
              ) : (
                // .......................start of login password .......................
                <form
                  className="flex flex-col items-center justify-center"
                  onSubmit={handleLogin}
                >
                  <h2 className="text-2xl font-bold">SIGN IN</h2>
                  <div className="flex items-center justify-center gap-x-4">
                    <div onClick={GoogleLoginHandler}>
                      <img className="w-[50px]" src="https://i.postimg.cc/mhfvM9pZ/googleimage-removebg-preview.png" alt="googlelogo" />
                    </div>
                    <div onClick={OutLookLoginHandler}>
                      <img className="w-[40px]" src="https://i.postimg.cc/r0x8WkPj/outlook-com-microsoft-outlook-email-personal-storage-table-computer-icons-outlook-removebg-preview.png" alt="outlook" />
                    </div>
                  </div>
                  <input className="" type="email" placeholder="Email" name="email" required value={userData !== null ? userData.email : ""} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                  <div className="relative logineyeinput flex flex-start w-[75%]">
                    <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="w-full" required />
                    {showPassword ? (
                      <IoEyeOffOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
                    ) : (
                      <IoEyeOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
                    )}
                  </div>
                  <button type="submit" className="bg-top whitespace-nowrap my-6 vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 rounded-full md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${bgImage})` }}>
                    LOGIN
                  </button>
                  <div className="cursor-pointer" onClick={() => setShowForgetPassword(true)}>
                    <p className="">Forgot password</p>
                  </div>
                  <div className="mt-8">
                    {/* <input type="checkbox" />   I agree to all statements in terms of service */}
                    <p>
                      Don't have an account?{" "}
                      <span id="signUp" onClick={SignInButtonClick}>
                        SIGN UP
                      </span>
                    </p>
                  </div>
                  <div className="border-[1px] border-white rounded-xl px-6 py-2 hover:cursor-pointer my-4" onClick={handleGuestLogin}>
                    <p className="text-white hover:underline">Continue as a GUEST</p>
                  </div>
                </form>)}

            </div>
            <ConnetWithUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
