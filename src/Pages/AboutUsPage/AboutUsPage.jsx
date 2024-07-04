import React from "react";
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";
import { Helmet } from 'react-helmet-async';
import { NavHashLink } from "react-router-hash-link";


function AboutUsPage() {
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
          <div className="YesevaFont flex items-center justify-center relative">
            <div className="flex justify-center items-start relative">
              <div className="relative uppercase flex flex-col">
                <p className="text-[4.5rem] text-shadow-xl"> <span className="text-purple-600 uppercase">About </span>us </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vsm:w-[90%] lg:w-[80%] 2xl:max-w-7xl my-4 relative">
          <p className="text-black uppercase CerebriFont text-4xl text-center font-bold">Company at a glance</p>
          <div className="flex items-center justify-center gap-x-6 h-[100px] my-6">
            <NavHashLink to="/about/#investor" smooth>
              <div className="flex flex-col items-center hover:text-purple-600 justify-center">
                <img src="https://i.postimg.cc/pLLVCCN6/investors.jpg" alt="Investors" className="w-24 h-24" />
                <p className="text-center uppercase">Investors</p>
              </div>
            </NavHashLink>
            <NavHashLink to="/about/#knowledge" smooth>

              <div className="flex flex-col items-center hover:text-purple-600 justify-center">
                <img src="https://i.postimg.cc/ydc7xr9k/knowledge.jpg" alt="Knowledge" className="w-24 h-24" />
                <p className="text-center uppercase">knowledge</p>
              </div>
            </NavHashLink>
            <NavHashLink to="/about/#search" smooth>
              <div className="flex flex-col items-center hover:text-purple-600 justify-center">
                <img src="https://i.postimg.cc/zfLzZfGw/search.jpg" alt="Search" className="w-24 h-24" />
                <p className="text-center uppercase">search</p>
              </div>
            </NavHashLink>
            <NavHashLink to="/about/#partners" smooth>

              <div className="flex flex-col items-center hover:text-purple-600 justify-center">
                <img src="https://i.postimg.cc/qq9GB78f/partner.jpg" alt="Partner" className="w-24 h-24" />
                <p className="text-center uppercase">General Partners</p>
              </div>
            </NavHashLink>
            <NavHashLink to="/about/#vision" smooth>

              <div className="flex flex-col items-center hover:text-purple-600 justify-center">
                <img src="https://i.postimg.cc/D0hnXdd5/vision.jpg" alt="Vision" className="w-24 h-24" />
                <p className="text-center uppercase">vision</p>
              </div>
            </NavHashLink>
            <NavHashLink to="/about/#mission" smooth>

              <div className="flex flex-col items-center hover:text-purple-600 justify-center">
                <img src="https://i.postimg.cc/pLcW6jRX/mission.jpg" alt="Mission" className="w-24 h-24" />
                <p className="text-center uppercase">mission</p>
              </div>
            </NavHashLink>
            <NavHashLink to="/about/#value" smooth>

              <div className="flex flex-col items-center hover:text-purple-600 justify-center -mt-1">
                <img src="https://i.postimg.cc/hGHSSqXk/value.jpg" alt="Value" className="w-24 h-24" />
                <p className="text-center uppercase">value</p>
              </div>
            </NavHashLink>
          </div>
          <p className="w-full text-justify ">Welcome to Lynkinfinite Investments, your gateway to a world of diverse and accessible real estate investment firms. Founded in 2024, Lynkinfinite is a cutting-edge platform designed to revolutionize the way investors discover and connect with real estate investment firms. We believe that investing should be inclusive and accessible to all. Our mission is to eliminate the complexities of finding the right investment firm by providing a centralized system that aggregates and analyzes information about reputable firms nationwide. We empower investors to easily search, compare, and connect with firms that align with their goals. As a trusted knowledge resource, we guide investors through their journey and support their financial success.</p>
          <div className="w-full flex flex-col items-center justify-center" id="investor">
            <p className="text-black uppercase CerebriFont text-3xl text-center font-bold mt-6 mb-2">Building a community of Investors</p>
            <div className="border-2 border-black flex items-center justify-center w-[80%]">
              <p className="p-6 w-[80%] text-justify">You should aim to write formally and objectively using impersonal and precise language and delivering information in a straightforward manner without sharing personal opinions. You should also use appropriate transition words to link ideas or topics. Avoid things like slang and colloquial phrases, low modality language, contractions and first person pronouns.</p>
              <img src="https://i.postimg.cc/pLLVCCN6/investors.jpg" className="w-24 h-24" alt="Investor" />
            </div>
          </div>
          <div className="grid grid-cols-3 my-4  gap-x-4 w-[80%] mx-auto">
            <div className="flex flex-col items-center justify-start" id="vision">
              <p className="text-purple-600 font-bold Cereberi text-2xl text-center">Vision</p>
              <div className="border-2 border-black">
                <p className="p-6">To be the leading platform that empowers real estate investors by providing unparalleled access to a comprehensive marketplace of reputable investment firms, fostering informed decision-making and financial growth.</p>
                <img src="https://i.postimg.cc/D0hnXdd5/vision.jpg" alt="Investor" className=" mx-auto w-32 h-32" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start" id="mission">
              <p className="text-purple-600 font-bold Cereberi text-2xl text-center">Mission</p>
              <div className="border-2 border-black">
                <p className="p-6">Our mission is to create an inclusive, user-friendly platform that showcases real estate investment firms nationwide. We enable investors to easily search, compare, and connect with firms that align with their goals. We strive to be a trusted knowledge resource, guiding investors and supporting their financial success.</p>
                <img src="https://i.postimg.cc/pLcW6jRX/mission.jpg" alt="Mission" className="mx-auto w-32 h-32" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start" id="value">
              <p className="text-purple-600 font-bold Cereberi text-2xl text-center">Values</p>
              <div className="border-2 border-black">
                <p className="p-6">To be the premier platform empowering real estate investors with comprehensive access to reputable investment firms. We aim to foster informed decision-making and financial growth through unparalleled transparency, innovation, and community support.</p>
                <img src="https://i.postimg.cc/hGHSSqXk/value.jpg" alt="Values" className="mx-auto w-32 h-32" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center" id="knowledge">
            <p className="text-black uppercase CerebriFont text-3xl text-center font-bold mt-6 mb-2">Empowering Investors with Knowledge</p>
            <div className="border-2 border-black flex items-center justify-center w-[80%]">
              <img src="https://i.postimg.cc/ydc7xr9k/knowledge.jpg" className="w-24 h-24" alt="Knowledge" />
              <p className="p-6 w-[80%] text-justify">Our mission goes beyond providing a directory. We aim to be a knowledge giver for investors and a home for real estate investing companies. Whether you're an experienced investor or someone with limited direction, Lynkinfinite is here to guide you. We provide tools and resources to help you make informed decisions when selecting the right investment firm.</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center" id="partners">
            <p className="text-black uppercase CerebriFont text-3xl text-center font-bold mt-6 mb-2">A Marketplace for General Partners</p>
            <div className="border-2 border-black flex items-center justify-center w-[80%]">
              <p className="p-6 w-[80%] text-justify">Lynkinfinite has evolved into a marketplace and advertising platform for General Partners (GPs) nationwide. Our platform brings together real estate investors and multiple investment firms, enabling you to search for, compare, and connect with the firms that resonate most with your investment goals. It's the power of choice, and it’s right at your fingertips.</p>
              <img src="https://i.postimg.cc/qq9GB78f/partner.jpg" className="w-24 h-24" alt="partner" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center" id="search">
            <p className="text-black uppercase CerebriFont text-3xl text-center font-bold mt-6 mb-2">Streamlined and Customizable Search Experience</p>
            <div className="border-2 border-black flex items-center justify-center w-[80%]">
              <img src="https://i.postimg.cc/zfLzZfGw/search.jpg" className="w-24 h-24" alt="Search" />
              <p className="p-6 w-[80%] text-justify">Our streamlined approach empowers investors to explore, evaluate, and compare multiple real estate investment firms seamlessly. Whether you're looking to customize your search criteria, choose preferred locations, or select reputable investment firms, Lynkinfinite offers the flexibility to tailor your search according to your specific preferences. We believe in breaking down barriers to make informed decisions accessible to all.</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-[70%] mx-auto my-4">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src="https://i.postimg.cc/D0WcDRtC/founder2.jpg" className="object-cover object-top vsm:w-[150px] vsm:h-[150px] vsm:mt-[50px] md:w-[120px] md:h-[120px] md:mt-[30px] lg:w-[150px] lg:h-[150px] rounded-full p-2 bg-gradient-to-br from-white to-[#6e30a7] " alt="Founder" />
              <div className="mt-2">
                <p className="text-purple-600  text-3xl font-extrabold CerebriFont uppercase text-left">Lipika </p>
                <p className="CerebriFont font-extrabold text-3xl uppercase text-left">Sharma</p>
              </div>
            </div>
            <div className="ml-[2rem] -mt-[1rem]">
              <div className="flex flex-col items-start justify-center">
                <p className="uppercase CerebriFont text-3xl font-extrabold  text-purple-600">Words from founder</p>
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
