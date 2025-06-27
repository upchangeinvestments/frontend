import React, { useEffect } from "react";
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";
import { Helmet } from 'react-helmet-async';
import { NavHashLink } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUsPage() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="">
      <Helmet>
        <title>About LynkInfinite Investments</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[100%]">
          <Navbar />
          <div className="FontLinikSans flex items-center justify-center relative">
            <div className="flex justify-center items-start relative">
              <div className="relative uppercase flex flex-col">
                <p className="text-[3.5rem] md:text-[4.5rem] text-shadow-xl text-center"><span className="text-purple-600 uppercase">About </span>us </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vsm:w-[90%] 2xl:max-w-7xl relative">
          <div className="flex mt-4">
            <div className="md:basis-2/3 my-auto">
              <div className="">
                <h1 className="font-bold text-3xl text-center font-['Playfair-Display'] uppercase"> <span>Built for Trust.</span> <br /><span>Designed for Connection</span></h1>
                <p className="p-4 pt-2 text-center text-xl font-['Playfair-Display']">
                  LynkInfinite is the first-of-its-kind platform where investors discover real estate investment firms — not just individual projects.
                  We provide access to verified, reputable investment firms across the U.S., enabling smarter, more confident decision-making for both seasoned
                  and first-time investors. Our goal is to simplify how capital finds trust.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 my-8 md:my-4 gap-x-4 mx-auto gap-y-4 md:gap-y-0 font-['Playfair-Display']">
                <div className="flex flex-col items-center justify-start" data-aos="fade-right" id="vision">
                  <p className="text-purple-600 font-bold YesevaFont text-2xl uppercase text-center">Vision</p>
                  <p className="p-4 pt-2 text-xl">Democratize access to reputable real estate firms through clear, data-driven discovery.</p>
                </div>
                <div className="flex flex-col items-center justify-start" data-aos="fade-up" id="mission">
                  <p className="text-purple-600 font-bold YesevaFont text-2xl uppercase text-center">Mission</p>
                  <p className="p-4 pt-2 text-xl">Build a trustworthy platform that connects the right investors with the right companies.</p>
                </div>
                <div className="flex flex-col items-center justify-start" data-aos="fade-left" id="value">
                  <p className="text-purple-600 font-bold YesevaFont text-2xl uppercase text-center">Values</p>
                  <p className="p-4 pt-2 text-xl">We value transparency, simplicity, and empowering informed decisions.</p>
                </div>
              </div>
            </div>
            <div className="md:basis-1/3 flex items-center justify-center">
              <img className="mx-auto" src="https://i.postimg.cc/fLWTc5nD/4.png" alt="" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center w-[70%] mx-auto mb-8" data-aos="zoom-in">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src="https://i.postimg.cc/D0WcDRtC/founder2.jpg" className="object-cover object-top vsm:w-[150px] vsm:h-[150px] vsm:mt-[50px] md:w-[120px] md:h-[120px] md:mt-[30px] lg:w-[150px] lg:h-[150px] rounded-full p-2 bg-gradient-to-br from-white to-[#6e30a7] " alt="Founder" />
              <div className="mt-2">
                <p className="text-purple-600  text-3xl font-extrabold CerebriFont uppercase text-left">Lipika </p>
                <p className="CerebriFont font-extrabold text-3xl uppercase text-left">Sharma</p>
              </div>
            </div>
            <div className="ml-[2rem] lg:-mt-[1rem]">
              <div className="flex flex-col items-start justify-center">
                <p className="uppercase CerebriFont text-3xl font-extrabold  text-purple-600 whitespace-nowrap">Words from founder</p>
                <p className="w-[90%]"> Join us in reshaping the landscape of accessible and comprehensive investment solutions.
                  Discover the power of choice and the ease of informed decision-making with Lynkinfinite Investments, your trusted partner in the journey towards financial growth and security.</p>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center justify-center flex-col w-[100%] mx-auto my-8">
            <p className="uppercase CerebriFont text-2xl font-extrabold  text-purple-600 -mb-8">Words from founder</p>
            <div className="flex flex-col items-center justify-center">
              <img src="https://i.postimg.cc/D0WcDRtC/founder2.jpg" className="object-cover object-top vsm:w-[150px] vsm:h-[150px] vsm:mt-[50px] rounded-full p-2 bg-gradient-to-br from-white to-[#6e30a7] " alt="Founder" />
              <div className="m-6">
                <p className="text-3xl font-extrabold CerebriFont uppercase text-left"><span className="text-purple-600">Lipika</span> Sharma </p>
              </div>
            </div>
            <div className="ml-[2rem] -mt-[1rem]">
              <div className="flex flex-col items-start justify-center">
                <p className="w-[90%]"> Join us in reshaping the landscape of accessible and comprehensive investment solutions.
                  Discover the power of choice and the ease of informed decision-making with Lynkinfinite Investments, your trusted partner in the journey towards financial growth and security.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
