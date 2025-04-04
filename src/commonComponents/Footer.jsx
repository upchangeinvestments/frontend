import React from "react";
import "../styles/LandingPage/Footer.css";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer-section font-['Playfair-Display'] pt-8 pb-8">
      <div className="vsm:px-8 md:px-20 ">
        <div className="footer-cta py-4">
          <div className="grid md:grid-cols-3">
            <div className="">
              <div className="single-cta vsm:flex md:flex">
                <IoLocationSharp className="text-[#6e30a7] text-[35px]" />
                <div className="cta-text">
                  <h4>Find Us</h4>
                  <span>Dallas, TX, USA</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="single-cta vsm:flex vsm:py-6 md:py-0 md:flex">
                <IoCall className="text-[#6e30a7] text-[35px]" />
                <div className="cta-text">
                  <h4>Call Us</h4>
                  <span>
                    <p>(469) 587-9543</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="single-cta vsm:flex  md:flex  ">
                <IoMail className="text-[#6e30a7] text-[30px]" />
                <div className="cta-text">
                  <h4>Mail Us</h4>
                </div>
              </div>
              <span className="text-[#878787] md:ml-[20px] text-[14px]">
                Advisor@lynkinfiniteinvestments.com
              </span>
            </div>
          </div>
        </div>
        <div className="footer-content mt-6">
          <div className="grid md:grid-rows-1 md:grid-cols-3 lg:grid-rows-1">
            <div className="md:col-span-3 lg:col-span-1">
              <div className="footer-widget w-full">
                <div className="footer-logo">
                  <a href="#">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text lg:w-[90%]">
                  <p className="">
                    Your Search Engine for Real Estate Investments.
                  </p>
                </div>
              </div>

            </div>
            <div className="w-full md:col-span-2 lg:col-span-1 lg:ml-8">
              <div className="footer-widget mx-auto">
                <div className="footer-widget-heading">
                  <h3 className="vsm:mx-auto">Useful Links</h3>
                </div>
                <ul className="grid vsm:grid-cols-2 vsm:mt-2 vsm:text-center md:grid-cols-3 md:text-left gap-x-4 md:mt-[8px] lg:mt-[10px] xl:mt-[10px]">
                  <li className="text-left">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="text-left">
                    <Link to="/rei-firms">Investments</Link>
                  </li>
                  <li className="text-left">
                    <Link to="/work">How it Works</Link>
                  </li>
                  <li className="text-left">
                    <Link to="/resources">Resources</Link>
                  </li>
                  <li className="text-left">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="text-left">
                    <Link to="/Terms">Terms & Conditions </Link>
                  </li>
                  <li className="text-left">
                    <Link to="/Privacy">Privacy Policy</Link>
                  </li>
                  <li className="text-left">
                    <Link to="/premium">List with Us</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-social-icon flex items-center justify-center my-4 vsm:hidden md:block lg:hidden">
                <div className="mr-8 mb-4">
                  <span className="md:text-2xl">Follow us</span>
                </div>
                <div className="lg:mx-0 flex">
                  <a href="">
                    <FaFacebookF size="28px" />
                  </a>
                  <a href="">
                    <FaInstagram size="30px" />
                  </a>
                  <Link to="https://www.linkedin.com/company/lynkinfiniteinvestments/" target="_blank">
                    <FaLinkedinIn size="30px" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 md:ml-8 lg:col-span-1">
              {/* <div className="footer-widget md:ml-12">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text ">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form md:mb-[30px]">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="w-[100%] bg-[#2e2e2e] text-white vsm:py-[10px] vsm:px-[10px] md:py-[10px] md:px-[10px] lg:py-[14px] lg:px-[28px] "
                    />
                    <button
                      type="submit"
                      className="absolute bg-[#6e30a7] vsm:py-[10px] vsm:px-[15px] md:py-[10px] md:px-[15px] lg:py-[13px] lg:px-[20px] top-0 right-0 "
                    >
                      <i className="fab fa-telegram-plane text-white md:text-[18px] lg:text-[22px] -rotate-6"></i>
                    </button>
                  </form>
                </div>
              </div> */}
              <div className="footer-social-icon flex items-center justify-center my-4 lg:ml-12 xl:ml-16 vsm:hidden lg:block">
                <div className="mr-6">
                  <span className="mb-4 lg:text-2xl">Follow us</span>
                </div>
                <div className="flex">
                  <a href="">
                    <FaFacebookF size="28px" />
                  </a>
                  <a href="">
                    <FaInstagram size="30px" />
                  </a>
                  <Link to="https://www.linkedin.com/company/lynkinfiniteinvestments/" target="_blank">
                    <FaLinkedinIn size="30px" />
                  </Link>
                </div>
              </div>
              <div className="footer-social-icon font-['Playfair-Display'] flex items-center mt-4  md:hidden ">
                <div className="mr-16">
                  <span className="vsm:text-2xl">Follow us</span>
                </div>
                <div className="lg:mx-0 flex">
                  <a href="">
                    <FaFacebookF size="28px" />
                  </a>
                  <a href="">
                    <FaInstagram size="30px" />
                  </a>
                  <Link to="https://www.linkedin.com/company/lynkinfiniteinvestments/" target="_blank">
                    <FaLinkedinIn size="30px" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </footer >
  );
};

export default Footer;
