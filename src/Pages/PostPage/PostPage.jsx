import React, { useState } from "react";
import NavBar from "../../commonComponents/NavBar";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
// import SearchBox from '../../commonComponents/SearchBox';
import "../../styles/CategoryPage/categoryPage.css";
import { PiMapPinLineBold } from "react-icons/pi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import Button from "../../commonComponents/LoginButton";
import MaterialUIAccordion from "./Accordion";
import Footer from "../../commonComponents/Footer";
import "../../styles/LandingPage/Post.css";
import PhotoSection from "./PhotosSection";

const Progressbar = ({ val }) => {
  // const width = `${Math.min(Math.max(0, val), 100)}%`;
  return (
    <div className="progress-section">
      <div className="task-progress flex items-center justify-center">
        <progress
          className="progress progress1"
          max="100"
          value={val}
        ></progress>
        <p className="text-xs text-nowrap ml-2 whitespace-nowrap">
          {val}% Funded
        </p>
      </div>
    </div>
  );
};
const OverViewContent = () => {
  return (
    <div className="">
      <p>
        Ardent Housing Fund II (AHF II) is a private real estate fund focused on
        generating above-average risk-adjusted returns through developing and
        operating rental housing in growing, undersupplied housing markets.
        AHFII has a fully identified pipeline of six assets
      </p>
      <p>
        The Fund’s primary focus is on development within the Southern United
        States, a region that is increasing in population up to 70% faster than
        the national average with consistently sub-4% unemployment rates. The
        strategic focus is on growing, undersupplied housing markets that have
        been capital-constrained even though their underlying population and job
        growth statistics are often similar to many primary markets. The General
        Partner has capitalized on this unsatisfied demand by pursuing projects
        in these markets and engaging experienced development partners through
        Ardent’s established relationships.
      </p>
    </div>
  );
};

const ListedCompany = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-['Playfair-Display'] text-lg">The Reilea Group</h2>
      <p>
        Founded in 1981, rilea group has been at the forefront of miami’s real
        estate development landscape, leaving an indelible mark through iconic
        buildings like J.P.Morgan’s headquarters at 1450 brickell. with a legacy
        spanning over four decades, our mission is unwavering: to be a beacon of
        innovation, progress, and community enrichment in the world of real
        estate development. at rilea group, we take immense pride in our ability
        to create enduring value for our stakeholders. Our commitment to
        excellence is evident through the thousands of jobs we’ve generated via
        construction, property management, and our thriving retail ventures.
        with a track record encompassing 10,000,000 rentable square feet, we’ve
        redefined urban living and working spaces, setting new standards for
        quality and sustainability. Our global reach extends to investors in
        over a dozen countries, a testament to our dedication to fostering
        international partnerships. We recognize that our success is interwoven
        with the prosperity of the communities we serve.
      </p>
      <p>
        Therefore, we pledge to continue our tradition of responsible
        development, prioritizing the well-being of our neighbors, and the
        preservation of the environment. At Rilea Group, we are more than
        developers; we are community builders, job creators, and global
        collaborators. our enduring mission is to shape urban landscapes, enrich
        lives, provide financial return for our partners and leave a lasting
        legacy of excellence in real estate development.
      </p>
      <div className="flex flex-col my-2 items-center justify-center">
        <p className="font-['Playfair-Display'] mb-2">
          TO KNOW MORE ABOUT THE FIRM AND INVEST IN THE PROJECT PLEASE GO TO THE
          LINK BELOW.
        </p>
        <Button link="#" Text="Visit the website" />
      </div>
    </div>
  );
};
const tabs = [
  {
    title: "Overview",
    content: <OverViewContent />,
  },
  {
    title: "Listed Company",
    content: <ListedCompany />,
  },

];

function PostPage() {
  const [activeTab, setActiveTab] = useState(0);
  const val = "71";
  return (
    <div className="bg-gradient-to-r from-purple-300 to-pink-200 ">
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
                The Highlands
              </span>
              <span className="pl-2 font-medium">Residential property</span>
            </div>
            <span className="flex font-['Playfair-Display'] items-center">
              <PiMapPinLineBold /> Ardent Housing Fund II, LP
            </span>
          </div>
          <div className="flex flex-col items-center font-['Playfair-Display'] justify-center w-full ">
            <div className="flex justify-start lg:justify-evenly lg:gap-[380px] bg-[#D2BBF1] vsm:overflow-x-scroll lg:overflow-hidden w-full">
              {tabs.map((value, index) => (
                <NavHashLink to="/post/#Section" smooth
                  className={`font-semibold text-lg p-4 cursor-default whitespace-nowrap ${activeTab === index
                    ? "border-b-4 border-[#6e30a7] text-[#6e30a7]"
                    : ""
                    }`}
                  key={index}
                  onClick={() => setActiveTab(index)}
                >
                  {value.title}
                </NavHashLink>
              ))}
            </div>
            <div className="flex vsm:flex-col md:flex-row w-full bg-white/20 backdrop-blur-xl shadow-md shadow-black-400 rounded-lg">
              <img
                className="vsm:w-[100%] md:w-[55%] lg:w-[60%] object-cover"
                src="https://app.realtymogul.com/sites/default/files/styles/private_placement_gallery_thumbnail/public/rendering1.jpg?itok=m_QV1feH"
                alt="property"
              />
              <div className="flex flex-col  md:w-[45%] lg:w-[40%] items-center justify-center vsm:pb-4 md:pb-2 ">
                <div className="grid grid-cols-2 mt-4 mb-2 vsm:gap-x-4 md:gap-x-6 md:px-2 lg:px-0">
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <MdOutlineAutoGraph size="25px" />
                    </div>
                    <p className="mt-1">10.00%</p>
                    <p className="whitespace-nowrap ">Targeted IRR</p>
                  </div>
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <GoLock size="25px" />
                    </div>
                    <p className="mt-1">2 YRS</p>
                    <p className="whitespace-nowrap ">Hold period</p>
                  </div>
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <AiOutlineDollar size="25px" />
                    </div>
                    <p className="mt-1">$10K</p>
                    <p className="whitespace-nowrap ">Min Investments</p>
                  </div>
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <IoLocationOutline size="25px" />
                    </div>
                    <p className="mt-1">Dallas, TX</p>
                    <p className="whitespace-nowrap ">Location</p>
                  </div>
                </div>
                <div className="w-[85%] md:w-[80%]">
                  <Progressbar val={val} />
                </div>
                <div className="my-4">
                  <Button
                    link="#"
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
              {tab.content}
            </div>
          ))}
        </div>
        <div className="vsm:w-[90%] xl:w-[70%] 2xl:max-w-7xl vsm:flex vsm:flex-col  lg:grid lg:grid-cols-12 gap-4 ">
          <div className="lg:col-span-8 ">
            <PhotoSection />
          </div>
          <div className="w-[100%] vsm:mt-4 lg:mt-0 lg:col-span-4 p-4 bg-white/40 backdrop-blur-xl rounded-lg shadow-md shadow-black-400 ">
            <h2 className="font-['Playfair-Display'] font-bold text-[#6e30a7] mb-2 text-xl">
              Investment Highlights
            </h2>
            <div className="px-4 font-['Playfair-Display'] ">
              <p className="mb-1">
                This is a rare opportunity to purchase 1,71,402 sf in a LEED
                Platinum building – Prestige Tech Platina on Outer Ring Road in
                Bangalore tenanted to a US-based company on a 9-year lease
                (7-year lock-in), at a price of ₹10,600 per sf implying a 10%
                yield and a 17.5% IRR.
              </p>
              <p>
                Prestige Tech Platina is a LEED Platinum building on the main
                Outer Ring Road and is part of the larger Prestige Tech Park
                campus with MNC tenants like JP Morgan Chase, Adobe, Schneider
                Electric and Juniper Networks.
              </p>
            </div>
          </div>
        </div>
        <div className="vsm:w-[90%] xl:w-[70%] 2xl:max-w-7xl vsm:flex vsm:flex-col-reverse lg:grid lg:grid-cols-12 gap-4 my-6">
          <div className="lg:col-span-4  bg-white/40 backdrop-blur-xl rounded-lg shadow-md shadow-black-400 p-4">
            <h2 className="font-['Playfair-Display'] font-bold text-[#6e30a7] mb-2 text-xl">
              Location Highlights
            </h2>
            <div className="px-4 font-['Playfair-Display'] ">
              <p className="mb-1">
                The Fund’s primary focus is on development within the Southern
                United States, a region that is increasing in population up to
                70% faster than the national average with consistently sub-4%
                unemployment rates.
              </p>
              <p>
                The strategic focus is on growing, undersupplied housing markets
                that have been capital-constrained even though their underlying
                population and job growth statistics are often similar to many
                primary markets. The General Partner has capitalized on this
                unsatisfied demand by pursuing projects in these markets and
                engaging experienced development partners through Ardent’s
                established relationships.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 p-4 bg-white/40 backdrop-blur-xl rounded-lg shadow-md shadow-black-400 ">
            <h2 className="font-['Playfair-Display'] font-bold text-[#6e30a7] mb-2 text-xl">
              Location
            </h2>
            <div className="flex items-start justify-center h-full">
              <iframe
                className="h-[90%] w-[90%]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.67344082994!2d-96.89670148459179!3d32.82055613767164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1710268840150!5m2!1sen!2sin"
                width="800"
                height="300"
                allowfullscreen=""
                loading="lazy"
                title="Google Maps - Dallas, TX, USA"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mb-8 vsm:w-[90%] xl:w-[70%] 2xl:max-w-7xl bg-white/20 backdrop-blur-xl rounded-lg  shadow-md shadow-black-400  p-4">
          <MaterialUIAccordion />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;
