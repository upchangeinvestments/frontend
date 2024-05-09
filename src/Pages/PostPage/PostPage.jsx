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
import { AiOutlineDollar } from "react-icons/ai";
import Button from "../../commonComponents/LoginButton";
import MaterialUIAccordion from "./Accordion";
import Footer from "../../commonComponents/Footer";
import "../../styles/LandingPage/Post.css";
import PhotoSection from "./PhotosSection";
import InvestmentData from "../../assets/RMData.json"

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
        The Fund’s primary focus is on development within the United
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
      <h2 className="font-['Playfair-Display'] text-lg">Fly Heights</h2>
      <p>
        Founded in 2023, Fly Heights Enterprises emerges as a dynamic force in the realm of urban development, spearheading transformative projects that redefine city skylines and enhance community living. With a commitment to innovation and sustainability, Fly Heights Enterprises embraces the challenge of shaping tomorrow's cities today.
        At Fly Heights Enterprises, our ethos is rooted in a deep-seated dedication to excellence and community enrichment. From iconic residential towers to state-of-the-art commercial complexes, we craft spaces that inspire and elevate the human experience. Our portfolio showcases a diverse range of projects, each bearing the hallmark of meticulous design and unparalleled quality.
        With a legacy spanning over a decade, Fly Heights Enterprises has become synonymous with forward-thinking urban development. Our team of visionary architects, engineers, and planners collaborate seamlessly to bring visionary concepts to life, ensuring that every project exceeds expectations.
      </p>
      <p>
        Beyond construction, Fly Heights Enterprises is committed to fostering sustainable growth and prosperity. Through strategic partnerships and community engagement initiatives, we strive to create lasting value for our stakeholders while championing environmental stewardship and social responsibility.
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


function PostPage() {
  const { postId } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const data = InvestmentData[postId];

  const tabs = [
    {
      title: "Overview",
      content: <OverViewContent />,
      link: `/post/${postId}/#Section`
    },
    {
      title: "Listed Company",
      content: <ListedCompany />,
      link: `/post/${postId}/#Section`
    },
    {
      title: "Business Plan",
      link: `/post/${postId}/#business`,
    },
    {
      title: "Financials",
      link: `/post/${postId}/#financial`,
    },
    {
      title: "Documents",
      link: `/post/${postId}/#documents`,
    },
  ];

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
                {data.title}
              </span>
              <span className="pl-2 font-medium">{data.category} Property</span>
            </div>
            <span className="flex font-['Playfair-Display'] items-center">
              <PiMapPinLineBold /> {data.location}
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
                className="vsm:w-[100%] md:w-[55%] lg:w-[60%] max-h-[430px] object-cover"
                src={data.image}
                alt="property"
              />
              <div className="flex flex-col  md:w-[45%] lg:w-[40%] items-center justify-center vsm:pb-4 md:pb-2 ">
                <div className="grid grid-cols-2 mt-4 mb-2 vsm:gap-x-4 md:gap-x-6 md:px-2 lg:px-0">
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <MdOutlineAutoGraph size="25px" />
                    </div>
                    <p className="mt-1">{data.IRR}</p>
                    <p className="whitespace-nowrap ">Targeted IRR</p>
                  </div>
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <GoLock size="25px" />
                    </div>
                    <p className="mt-1">{data.Hold_period} YEARS</p>
                    <p className="whitespace-nowrap ">Hold period</p>
                  </div>
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <AiOutlineDollar size="25px" />
                    </div>
                    <p className="mt-1">{data.Investment}</p>
                    <p className="whitespace-nowrap ">Min Investments</p>
                  </div>
                  <div className="flex flex-col items-center justify-center pb-2">
                    <div className="bg-white/20 backdrop-blur-xl rounded-full p-4">
                      <IoLocationOutline size="25px" />
                    </div>
                    <p className="mt-1">{data.location}</p>
                    <p className="whitespace-nowrap ">Location</p>
                  </div>
                </div>
                <div className="w-[85%] md:w-[80%]">
                  <Progressbar val={data.funded} />
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
              {tab.content ? tab.content : null}
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
                {data.description}
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
                The Fund’s primary focus is on development within the United
                States, a region that is increasing in population up to 70%
                faster than the national average with consistently sub-4%
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
