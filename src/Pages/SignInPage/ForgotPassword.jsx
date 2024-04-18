import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import NavBar from "../../commonComponents/NavBar";
import "../../styles/SignIn/SignIn.css";


function ForgotPassword() {
    return (
        <div className="">
            <div className="vsm:hidden lg:block SignIn bg1">
                <NavBar className="" />
                <div className="UserController">
                    <div className="SignInContainer bg1">
                        <div className="forms-container">
                            {/* .......................start of registration form.......................  */}
                            <div className="form-control font-['Playfair-Display'] signup-form">

                            </div>
                            {/* .......................end of registration form....................... */}

                            {/* .......................start of login form and forgot password form....................... */}
                            <div className="form-control font-['Playfair-Display'] signin-form">
                                {/* .......................start of forgot password....................... */}

                            </div>
                            {/* .......................end of login form and forgot password form....................... */}
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
                                            <font color="#0c0b0b ">SignUp to </font> <br />{" "}
                                            <span className="">Explore INVESTMENTS</span>
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
        </div>
    )
}

export default ForgotPassword