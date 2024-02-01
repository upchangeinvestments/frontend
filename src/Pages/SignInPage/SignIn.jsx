import React, { useState } from 'react';
import '../../styles/SignIn.css';
// import { FaUser, FaLock } from "react-icons/fa";

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const SignInButtonClick = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='SignInBody'>
      <div className={isSignUp ? 'SignInContainer' : 'SignInContainer change'}>
        <div className="forms-container">
          <div className="form-control signup-form">
            <form action="#">
              <h2>SIGN UP</h2>
              <div className='social'>
                <a href="#" class="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i className='fab fa-apple'></i></a>
              </div>
              <input type="email" placeholder="Email" required />
              <div class="underline"></div>
              <input type="password" placeholder="Password" required />
              <div class="underline"></div>
              <input type="password" placeholder="Confirm password" required />
              <div class="underline"></div>
              <button type="submit">REGISTER</button>
              <p>
                <input type="checkbox" /> I agree to all statements in terms of service
                <p>Already have an account? <span id="signUp" onClick={SignInButtonClick}>Sign In.</span></p>
              </p>
            </form>

          </div>
          <div className="form-control signin-form">
            <form>
              <h2>SIGN IN</h2>
              <div className='social'>
                <a href="#" class="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i className='fab fa-apple'></i></a>
              </div>
              <input type="text" placeholder="Username" required />
              {/* <FaUser className='icon'/> */}
              <input type="password" placeholder="Password" required />
              {/* <FaLock className='icon'/> */}
              <button type='submit'>LOGIN</button>
              <p>
                <input type="checkbox" />   I agree to all statements in terms of service
                <p>Don't have an account? <span id="signUp" onClick={SignInButtonClick}>Sign Up.</span>
                </p>
              </p>
            </form>
          </div>
        </div>
        <div className="intros-container">
          <div className="intro-control signin-intro">
            <div className="intro-control__inner">
              <h2>
                <font color="#0c0b0b">WELCOME BACK TO</font> UPCHANGE INVESTMENT
              </h2>

              <div className="socials1">
                <p>connect with us</p>
                <a href="#" class="social"><i className="fab fa-facebook-f"></i></a>
                {/* <i class="tnb-icon fa fa-facebook-square" aria-hidden="true"></i> */}
                <a href="#" class="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i className='fab fa-apple'></i></a>

              </div>
            </div>
          </div>
          <div className="intro-control signup-intro">
            <div className="intro-control__inner">
              <h2>
                <font color="#0c0b0b">WELCOME TO</font> <br /> UPCHANGE INVESTMENT
              </h2>

              <p><font color="#0c0b0b">Your Search Engine For</font> <font color="#9747FF">REAL ESTATE INVESTMENT</font></p>
              <div className="socials">
                <p>Register to access all features of our services</p>
                <a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-b3a7b80" target="_blank">
                  <span class="elementor-screen-only"></span>
                  <i class="fab fa-facebook"></i> </a>
                <a class="elementor-icon elementor-social-icon elementor-social-icon-google elementor-repeater-item-b3a7b80" target="_blank">
                  <span class="elementor-screen-only"></span>
                  <i class="fab fa-google-plus-g"></i> </a>
                <a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-b3a7b80" target="_blank">
                  <span class="elementor-screen-only"></span>
                  <i class="fab fa-apple"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="./script.js"></script>
    </div>
  );
};

export default App;
