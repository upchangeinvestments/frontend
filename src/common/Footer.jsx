import React from 'react'
import '../styles/Footer.css'
import { AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container mx-auto lg:px-6">
                <div className="footer-cta py-4">
                    <div className="grid md:grid-cols-3">
                        <div className="">
                            <div className="single-cta md:flex">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Find Us</h4>
                                    <span>USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="single-cta md:flex">
                                <i className="fas fa-phone"
                                    style={{ transform: "scaleX(-1)" }}
                                ></i>
                                <div className="cta-text">
                                    <h4>Call Us</h4>
                                    <span>1234567890</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="single-cta md:flex">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail Us</h4>
                                    <span className="">upchangeinvestments@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content mt-6">
                    <div className="grid vsm:mb-6 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1">
                        <div className="md:col-span-3 lg:col-span-1">
                            <div className="footer-widget w-full">
                                <div className="footer-logo">
                                    <a href="#">
                                        <img src={require('../assets/footerLogo.JPG')} className="img-fluid" alt="logo" />
                                    </a>
                                </div>
                                <div className="footer-text lg:w-[90%]">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon grid grid-rows-2">
                                    <div className='mx-auto lg:mx-0'><span>Follow us</span></div>
                                    <div className="mx-auto lg:mx-0 flex">
                                        <a href="" ><AiFillTwitterCircle size="40px" /></a>
                                        <a href="" ><FaFacebook size="37px" /></a>
                                        <a href="" ><AiFillGoogleCircle size="40px" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:col-span-2 lg:col-span-1">
                            <div className="footer-widget mx-auto">
                                <div className="footer-widget-heading">
                                    <h3 className='vsm:mx-auto'>Useful Links</h3>
                                </div>
                                <ul className='vsm:text-center md:text-left vsm:-mt-6'>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">Home</a></li>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">about</a></li>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">services</a></li>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">portfolio</a></li>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">Contact</a></li>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">About us</a></li>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">Our Services</a></li>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">Expert Team</a></li>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">Contact us</a></li>
                                    <li className='vsm:w-[50%] md:w-[27%] lg:w-[50%]'><a href="#">Latest News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md:-ml-12 lg:col-span-1">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button type="submit"><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <ul className='space-x-4 flex justify-center'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
