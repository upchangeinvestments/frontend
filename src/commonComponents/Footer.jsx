import React from "react";
import "../styles/LandingPage/Footer.css";
import { FaFacebook } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer-section pt-8">
      <div className="px-20 ">
        <div className="footer-cta py-4">
          <div className="grid md:grid-cols-3">
            <div className="">
              <div className="single-cta md:flex">
                <IoLocationSharp className="text-[#6e30a7] text-[35px]" />
                <div className="cta-text">
                  <h4>Find Us</h4>
                  <span>Dallas, TX, USA</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="single-cta md:flex">
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
              <div className="single-cta md:flex  ">
                <IoMail className="text-[#6e30a7] text-[30px]" />
                <div className="cta-text">
                  <h4>Mail Us</h4>
                </div>
              </div>
              <span className="text-[#878787] md:ml-[20px] text-[14px]">
                LynkInfiniteInvestments@gmail.com
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
              <div className="footer-social-icon flex items-center justify-center my-4 vsm:hidden lg:block">
                <div className="mr-8">
                  <span className="">Follow us</span>
                </div>
                <div className="lg:mx-0 flex">
                  <a href="">
                    <FaFacebook size="30px" />
                  </a>
                  <a href="">
                    <CiLinkedin size="32px" />
                  </a>
                  <a href="">
                    <FaInstagram size="30px" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:col-span-2 lg:col-span-1 lg:-ml-8">
              <div className="footer-widget mx-auto">
                <div className="footer-widget-heading">
                  <h3 className="vsm:mx-auto">Useful Links</h3>
                </div>
                <ul className="grid vsm:grid-cols-2 vsm:-mt-6 vsm:text-center md:grid-cols-3 md:text-left gap-x-4 md:mt-[8px] lg:mt-[10px] xl:mt-[10px]">
                  <li className="text-left">
                    <a href="#">About</a>
                  </li>
                  <li className="text-left">
                    <a href="#">Investment</a>
                  </li>
                  <li className="text-left">
                    <a href="#">How it Works</a>
                  </li>
                  <li className="text-left">
                    <a href="#">Education</a>
                  </li>
                  <li className="text-left">
                    <a href="#">Contact</a>
                  </li>
                  <li className="text-left">
                    <a href="#">Link with us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-social-icon flex items-center justify-center my-4 vsm:hidden md:block lg:hidden">
                <div className="mr-8">
                  <span className="">Follow us</span>
                </div>
                <div className="lg:mx-0 flex">
                  <a href="">
                    <FaFacebook size="30px" />
                  </a>
                  <a href="">
                    <CiLinkedin size="30px" />
                  </a>
                  <a href="">
                    <FaInstagram size="30px" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 md:-ml-12 lg:col-span-1">
              <div className="footer-widget md:ml-12">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-social-icon flex items-center justify-center my-4 md:hidden ">
        <div className="mr-8">
          <span className="">Follow us</span>
        </div>
        <div className="lg:mx-0 flex">
          <a href="">
            <FaFacebook size="30px" />
          </a>
          <a href="">
            <CiLinkedin size="30px" />
          </a>
          <a href="">
            <FaInstagram size="30px" />
          </a>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container vsm:mx-auto md:flex md:mx-auto md:w-[80%] md:items-center md:justify-between">
          <div className="">
            <div className="copyright-text flex justify-center">
              <p>Copyright &copy; 2024, All Right Reserved</p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="footer-menu">
              <ul className="space-x-4 flex justify-center">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
