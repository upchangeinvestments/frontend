import React, { useState } from "react";
import NavBar from "../../commonComponents/NavBar";
import { Link, useParams } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
// import SearchBox from '../../commonComponents/SearchBox';
import "../../styles/CategoryPage/categoryPage.css";
import { PiMapPinLineBold } from "react-icons/pi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import { AiOutlineDollar } from "react-icons/ai";
import Button from "../../commonComponents/LoginButton";
import MaterialUIAccordion from "./Accordion";
import Footer from "../../commonComponents/Footer";
import "../../styles/LandingPage/Post.css";
import PhotoSection from "./PhotosSection";
import InvestmentData from "../../assets/firmsData.json"
import { Helmet } from 'react-helmet-async';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegCircleQuestion } from "react-icons/fa6";



function formatMinInvestment(minInvestment) {
  if (minInvestment >= 1000000) {
    return false;
  } else {
    return `$${minInvestment.toLocaleString()}`;
  }
}

const OverViewContent = ({ data }) => {
  return (
    <div className="">
      <h1 className="text-lg font-bold">{data.CompanyName}</h1>
      <p style={{ whiteSpace: 'pre-line' }}>{data.Overview}</p>
    </div >
  );
};


function PostPage() {
  const { postId } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const data = InvestmentData[postId];

  const tabs = [
    {
      title: "Overview",
      content: <OverViewContent data={data} />,
      link: `/post/${postId}/#Section`
    },
    {
      title: "Documents",
      link: `/post/${postId}/#documents`,
    },
    {
      title: "Contact Details",
      link: `/post/${postId}/#contact`,
    },
    {
      title: "Additional Information",
      link: `/post/${postId}/#information`,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-300 to-pink-200 ">
      <Helmet>
        <title>Project</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/post/:postId" />
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[100%]">
          <div className="PostPage h-[65vh]">
            <NavBar />
          </div>
        </div>
        <div className="vsm:w-[90%] xl:w-[70%]  2xl:max-w-7xl -mt-[55vh]">
          <div className="flex flex-col items-center justify-center w-full py-4">
            <div className="flex vsm:flex-col md:flex-row font-['Playfair-Display'] items-center justify-center text-2xl">
              <span className="md:border-r md:border-gray-600 font-semibold pr-2">
                {data.title}
              </span>
              <span className="pl-2 font-medium">{data.CompanyName}</span>
            </div>
            <span className="flex font-['Playfair-Display'] items-center">
              <PiMapPinLineBold /> {data.city}, {data.location}
            </span>
          </div>
          <div className="flex flex-col items-center font-['Playfair-Display'] justify-center w-full ">
            <div className="flex justify-stretch gap-4 bg-[#D2BBF1] vsm:overflow-x-scroll lg:overflow-hidden w-full">
              {tabs.map((value, index) => (
                <NavHashLink to={value.link} smooth
                  className={`w-full font-semibold text-lg p-4 cursor-default whitespace-nowrap ${activeTab === index
                    ? "border-b-4 border-[#6e30a7] text-[#6e30a7] bg-purple-500/20 rounded-md "
                    : ""
                    }`}
                  key={index}
                  onClick={() => setActiveTab(index)}
                >
                  <p className="text-center">{value.title}</p>
                </NavHashLink>
              ))}
            </div>
            <div className="flex vsm:flex-col md:flex-row w-full bg-white/20 backdrop-blur-xl shadow-md shadow-black-400 rounded-lg">
              <img
                className="vsm:w-[80%] md:w-[20%] md:h-[20%] lg:w-[30%] lg:h-[30%] m-auto"
                src={data.FirmLogo}
                alt="Company logo"
              />
              <div className="flex flex-col  md:w-[45%] lg:w-[40%] items-center justify-center vsm:pb-4 md:pb-2 ">
                <div className="grid grid-cols-2 mt-6 mb-2 vsm:gap-x-4 md:gap-x-6 md:px-2 lg:px-0 lg:gap-x-12">
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <CiStar size="25px" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <FaStar size="15px" />
                      <p className=""> <span className="text-xl">{data.CompanyRating} </span>/ 5</p>
                    </div>
                    <Tooltip title="LynkInfinite's ratings are determined by our team. The scoring formulas take into account multiple metrics for each financial product and service." >
                      <p className="whitespace-nowrap flex items-center justify-center gap-1 ">LynkInfinite Rating <span><FaRegCircleQuestion size="15px" /></span></p>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <GoLock size="25px" />
                    </div>
                    <p className="mt-1">Class {data.classType}</p>
                    <p className="whitespace-nowrap ">Class Type</p>
                  </div>
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <AiOutlineDollar size="25px" />
                    </div>
                    <p className="mt-1">{formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</p>
                    <p className="whitespace-nowrap ">Min Investments</p>
                  </div>
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <IoLocationOutline size="25px" />
                    </div>
                    <p className="mt-1">{data.city}, {data.location}</p>
                    <p className="whitespace-nowrap ">Location</p>
                  </div>
                </div>
                <div className="my-2">
                  <Button
                    link={data.CompanyLink}
                    target="_blank"
                    Text="INVEST"
                    classname="vsm:px-8 vsm:py-2"
                  />
                </div>
                <div className="flex flex-col items-center justify-center hover:underline">
                  <Link to="/contact" target="_blank">
                    Questions?
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-600 text-xs px-4">
                    *Please carefully review all sections before investing your
                    money
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Section" className="vsm:w-[90%] xl:w-[70%] 2xl:max-w-7xl bg-white/40 font-['Playfair-Display']  backdrop-blur-xl rounded-lg my-6 shadow-md shadow-black-400 p-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`mb-4 ${activeTab === index ? "block" : "hidden"}`}
            >
              <h2 className="text-xl text-[#6e30a7] font-bold text-left">
                {tab.title}
              </h2>
              {tab.content ? tab.content : null}
            </div>
          ))}
        </div>
        <div className="vsm:w-[90%] xl:w-[70%] 2xl:max-w-7xl vsm:flex vsm:flex-col  lg:grid lg:grid-cols-12 gap-4 ">
          <div className="lg:col-span-8 ">
            <PhotoSection data={data} />
          </div>
          <div className="w-[100%] vsm:mt-4 lg:mt-0 lg:col-span-4 p-4 bg-white/40 backdrop-blur-xl rounded-lg shadow-md shadow-black-400 ">
            <h2 className="font-['Playfair-Display'] font-bold text-[#6e30a7] mb-2 text-xl">
              Investment Highlights
            </h2>
            <div className="px-4 font-['Playfair-Display'] ">
              <p style={{ whiteSpace: 'pre-line' }}>{data.InvestHighlights}</p>
            </div>
          </div>
        </div>
        <div className="vsm:w-[90%] xl:w-[70%] 2xl:max-w-7xl vsm:flex vsm:flex-col-reverse my-6 ">
          <div className="pt-4 pb-2 bg-white/40 backdrop-blur-xl rounded-lg shadow-md shadow-black-400">
            <h2 className="font-['Playfair-Display'] font-bold text-[#6e30a7] mb-2 text-xl">
              Location
            </h2>
            <div className="flex items-start justify-center h-full md:h-[500px]">
              <iframe src={data.locationMap}
                width="800"
                height="800"
                className="h-[90%] w-[90%]"
                allowfullscreen=""
                loading="lazy"
                title="Google Maps"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mb-8 vsm:w-[90%] xl:w-[70%] 2xl:max-w-7xl bg-white/20 backdrop-blur-xl rounded-lg  shadow-md shadow-black-400  p-4">
          <MaterialUIAccordion websiteLink={data.CompanyLink} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;
