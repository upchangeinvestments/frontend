import React, { useState } from 'react';
import NavBar from "../../commonComponents/NavBar"
import '../../styles/SignIn/SignIn.css';
// import { FaUser, FaLock } from "react-icons/fa";

const ConnetWithUs = () => {
  return (
    <div className="mt-6 pb-6">
      <p className='flex items-center justify-center'>Connect with us</p>
      <div className="flex items-end justify-center ">
        <a href="#" className="social"><i className="fab fa-facebook-f" style={{
          fontSize: "20px"
        }}></i></a>
        <a href="#" className="social"><i className="fab fa-google-plus-g"
          style={{
            fontSize: "24px",
          }}
        ></i></a>
        <a href="#" className="social"><i className='fab fa-apple'
          style={{
            fontSize: "20px"
          }}
        ></i></a>
      </div>
    </div>
  );
}

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const SignInButtonClick = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="">
      <div className={isSignUp ? "vsm:hidden lg:block SignIn bg1" : "vsm:hidden lg:block SignIn bg2"} >
        <NavBar className="" />
        <div className="UserController">
          <div className={isSignUp ? 'SignInContainer bg1' : 'SignInContainer bg2 change'}>
            <div className="forms-container">
              <div className="form-control signup-form">
                <form action="#">
                  <h2 className='CustomizeFontH'>SIGN UP</h2>
                  <div className='social'>
                    <a href="#" className="social"><i className="fab fa-google-plus-g" style={{
                      fontSize: "24px"
                    }}></i></a>
                    <a href="#" className="social"><i className='fab fa-apple' style={{
                      fontSize: "24px"
                    }}></i></a>
                  </div>
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <input type="password" placeholder="Confirm password" required />
                  <div className="checkbox flex items-center justify-center gap-2 mt-4">
                    <input type="checkbox" id="terms" name="terms" required />
                    <label for="terms"><p className='text-xs'>I agree to all statements in terms of service</p></label>
                  </div>
                  <button type="submit" className='my-6'>SIGN UP</button>
                  <p>
                    <p>Have an account? <span id="signUp" onClick={SignInButtonClick}>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#9747FF] hover:bg-purple-600"
                      >
                        SIGN IN
                      </a></span></p>
                  </p>
                </form>

              </div>
              <div className="form-control signin-form">
                <form className=''>
                  <h2 className="text-2xl CustomizeFontH">SIGN IN</h2>
                  <div className='social'>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className='fab fa-apple'></i></a>
                  </div>
                  <input className='' type="text" placeholder="Email" required />
                  {/* <FaUser className='icon'/> */}
                  <input type="password" placeholder="Password" required />
                  {/* <FaLock className='icon'/> */}
                  <button type='submit' className='w-[65%]'>LOGIN</button>
                  <a href="#"><p className="">Forgot password</p></a>
                  <p className='mt-8'>
                    {/* <input type="checkbox" />   I agree to all statements in terms of service */}
                    <p>Don't have an account? <span id="signUp" onClick={SignInButtonClick}><a
                      href="#"
                      className="w-full flex items-center justify-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#9747FF] hover:bg-purple-600"
                    >
                      SIGN UP
                    </a></span>
                    </p>
                  </p>
                </form>
              </div>
            </div>
            <div className="intros-container">
              <div className="intro-control signin-intro">
                <div className="intro-control__inner">
                  <div className="">
                    <h2 className="md:text-xl lg:text-2xl CustomizeFontH">
                      <font color="#0c0b0b" >WELCOME BACK! <br /> <span className='text-xl'>TO</span> <br /></font> <span className='CustomizeFontH'>UPCHANGE INVESTMENTS</span>
                    </h2>
                  </div>

                  <div className="socials1">
                    <p>Connect with us</p>
                    <div className="flex items-end justify-center">
                      <a href="#" className="social"><i className="fab fa-facebook-f" style={{
                        fontSize: "20px"
                      }}></i></a>
                      <a href="#" className="social"><i className="fab fa-google-plus-g"
                        style={{
                          fontSize: "24px",
                        }}
                      ></i></a>
                      <a href="#" className="social"><i className='fab fa-apple'
                        style={{
                          fontSize: "20px"
                        }}
                      ></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-control signup-intro">
                <div className="intro-control__inner">
                  <div className="">
                    <h2 className='md:text-xl lg:text-2xl CustomizeFontH'>
                      <font color="#0c0b0b ">WELCOME TO</font> <br /> <span className=''>UPCHANGE INVESTMENTS</span>
                    </h2>
                  </div>
                  {/* <p><font color="#0c0b0b">Your Search Engine For</font> <font color="#9747FF">REAL ESTATE INVESTMENT</font></p> */}
                  <div className="socials">
                    <p className='vsm:text-xs lg:text-sm'>Connect with us</p>
                    <div className='social'>
                      <a href="#" className="social"><i className="fab fa-facebook-f" style={{
                        fontSize: "20px"
                      }}></i></a>
                      <a href="#" className="social"><i className="fab fa-google-plus-g"
                        style={{
                          fontSize: "24px",
                        }}
                      ></i></a>
                      <a href="#" className="social"><i className='fab fa-apple'
                        style={{
                          fontSize: "20px"
                        }}
                      ></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* Mobile screen Page */}
      <div className="lg:hidden SignInMobile">
        <NavBar className="" />
        <div className="FormMobile">
          <div className={isSignUp ? 'SignUP' : 'hidden'} >
            <div className="mt-8">
              <h2 className='text-2xl font-bold '>
                <font color="#0c0b0b">WELCOME TO</font> <br /><p className='UPCIN'>UPCHANGE INVESTMENTS</p>
              </h2>
            </div>
            <div className="m-8 py-6 px-2 rounded-lg " style={{
              backgroundColor: "rgba(34, 25, 25, 0.5)"
            }}>
              <form action="" className='flex flex-col items-center justify-center'>
                <h2 className=''>SIGN UP</h2>
                <div className='social'>
                  <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#" className="social"><i className='fab fa-apple'></i></a>
                </div>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm password" required />
                <div className="checkbox flex items-center justify-center gap-2 mt-4">
                  <input type="checkbox" id="terms" name="terms" required />
                  <label for="terms"><p className='text-xs'>I agree to all statements in terms of service</p></label>
                </div>
                <button type="submit" className='my-6'>SIGN UP</button>
                <p>
                  <p>Have an account? <span id="signUp" onClick={SignInButtonClick}>LOGIN</span></p>
                </p>
              </form>
            </div>
            <ConnetWithUs />
          </div>
          <div className={isSignUp ? 'hidden' : 'LogIn'}>
            <div className="mt-8">
              <h2 className="text-2xl font-bold">
                <font color="#0c0b0b" >WELCOME BACK! <br /> <span className='text-xl'>TO</span> <br /></font> <span className='UPCIN'>UPCHANGE INVESTMENTS</span>
              </h2>
            </div>
            <div className="m-8 py-6 px-2 rounded-lg " style={{
              backgroundColor: "rgba(34, 25, 25, 0.5)"
            }}>
              <form className='flex flex-col items-center justify-center'>
                <h2 className="text-2xl font-bold">SIGN IN</h2>
                <div className='social'>
                  <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#" className="social"><i className='fab fa-apple'></i></a>
                </div>
                <input className='' type="text" placeholder="Username" required />
                {/* <FaUser className='icon'/> */}
                <input type="password" placeholder="Password" required />
                {/* <FaLock className='icon'/> */}
                <button type='submit'>LOGIN</button>
                <a href="#"><p className="">Forgot password</p></a>
                <p className='mt-8'>
                  {/* <input type="checkbox" />   I agree to all statements in terms of service */}
                  <p>Don't have an account? <span id="signUp" onClick={SignInButtonClick}>SIGN UP</span>
                  </p>
                </p>
              </form>
            </div>
            <ConnetWithUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
