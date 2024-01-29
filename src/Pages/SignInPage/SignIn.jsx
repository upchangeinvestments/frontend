import React, { useState } from 'react';
import './App.css';
// import { FaUser, FaLock } from "react-icons/fa";

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const SignInButtonClick = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
    <div className={isSignUp ? 'container' : 'container change'}>
      <div className="forms-container">
        <div className="form-control signup-form">
            <form action="#">
              <h2>SIGN UP</h2>
              <input type="email" placeholder="Email" required />
              <div class="underline"></div>
              <input type="password" placeholder="Password" required />
              <div class="underline"></div>
              <input type="password" placeholder="Confirm password" required />
              <div class="underline"></div>
              <button type="submit">REGISTER</button>
              <p>
              <input type="checkbox" />
                I agree to all statements in terms of service
              <p>Already have an account?<div id="signin-btn" onClick={SignInButtonClick}>Sign In.</div></p></p>
            </form>
            
        </div>
        <div className="form-control signin-form">
          <form action="#">
            <h2>SIGN IN</h2>
            <input type="text" placeholder="Username" required />
            {/* <FaUser className='icon'/> */}
            <input type="password" placeholder="Password" required />
            {/* <FaLock className='icon'/> */}
            <button type='submit'>LOGIN</button>
            <p>
            <input type="checkbox" />I agree to all statements in terms of service 
            <p>Don't have an account? <div id="signUp" onClick={SignInButtonClick}>Sign Up.</div></p> </p>
          </form>
        </div>
      </div>
      <div className="intros-container">
        <div className="intro-control signin-intro">
          <div className="intro-control__inner">
            <h2>
            <font color="#0c0b0b">WELCOME BACK TO</font> UPCHANGE INVESTMENT
            </h2>
            <h4>connect with us</h4>
            <div className="socials">
            <a href="/auth/facebook" class="social"><i className="fab fa-facebook-f"></i></a>
            {/* <i class="tnb-icon fa fa-facebook-square" aria-hidden="true"></i> */}
            <a href="/auth/google" class="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="/auth/apple" class="social"><i className='fab fa-apple'></i></a>
            
            </div>
          </div>
        </div>
        <div className="intro-control signup-intro">
          <div className="intro-control__inner">
          <h2>
            <font color="#0c0b0b">WELCOME TO</font> UPCHANGE INVESTMENT
            </h2>
            
            <p>Your Search Engine For <font color="#9747FF">REAL ESTATE INVESTMENT</font></p>
            <h4>Register to access all features of our services</h4>
            <div className="socials">
            <a href="/auth/facebook" class="social"><i className="fab fa-facebook-f"></i></a>
            <a href="/auth/google" class="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="/auth/apple" class="social"><i className='fab fa-apple'></i></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  <script  src="./script.js"></script>
</div>
  );
};

export default App;
