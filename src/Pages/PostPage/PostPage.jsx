import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../commonComponents/NavBar";
import { Link, useParams } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
// import SearchBox from '../../commonComponents/SearchBox';
import "../../styles/CategoryPage/categoryPage.css";
import successMessage from "../../utils/successToast";
import errorMessage from "../../utils/Error";
import Footer from "../../commonComponents/Footer";
import "../../styles/LandingPage/Post.css";
import InvestmentData from "../../assets/companyData.json"
import { Helmet } from 'react-helmet-async';
import { RiShareBoxFill } from "react-icons/ri";
import bgImage from "../../assets/login_BG.jpeg";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import "../../App.css"
import { WhatsappShareButton, TwitterShareButton, LinkedinShareButton, FacebookShareButton, EmailShareButton } from "react-share";
import { MdContentCopy } from "react-icons/md";
import { WhatsappIcon, EmailIcon, FacebookIcon, LinkedinIcon, XIcon } from "react-share";
import { IoMdCloseCircle } from "react-icons/io";
import { useAuth } from "../../utils/AuthContext";
import AccreditedModalComponent from "./AccreditedModal";
import PostCard from "../LandingPage/PostCard";
import Carousel from "react-grid-carousel";
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton";

function Card({ info }) {

  return (
    <div className="">
      <div className="relative w-full">
        <img src={info.image} className="w-full h-[250px] rounded-xl" />
        <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-b-xl">
          <div className="text-white text-xl font-medium absolute bottom-0 pb-2 pl-4">{info.projectName}</div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-2 md:hidden lg:grid lg:grid-cols-2 font-semibold text-sm md:text-lg ">
        <div className="flex flex-col items-start">
          <p className="whitespace-nowrap">Class Type: {info.classType}</p>
          <p className="whitespace-nowrap">Return Rate: {info.returnRate}%</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="whitespace-nowrap">Year Started: {info.year}</p>
          <p className="whitespace-nowrap">Year Ended: {info.yearEnd}</p>
        </div>
      </div>
      <div className="hidden md:block lg:hidden p-4  font-semibold text-md text-center">
        <p className="whitespace-nowrap">Class Type: {info.classType}</p>
        <p className="whitespace-nowrap">Return Rate: {info.returnRate}%</p>
        <p className="whitespace-nowrap">Year Started: {info.year}</p>
        <p className="whitespace-nowrap">Year Ended: {info.yearEnd}</p>
      </div>
    </div>
  )
}

function formatMinInvestment(minInvestment) {
  if (minInvestment >= 1000000) {
    return false;
  } else {
    return `$${minInvestment.toLocaleString()}`;
  }
}

const valueFormatter = (value) => `${value}%`;

function PostPage() {
  const { postId } = useParams();
  const data = InvestmentData[postId];
  const bannerRef = useRef(null);
  const bgRef = useRef(null);
  const [bannerContent, setBannerContent] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [AccreditedModal, setAccreditedModal] = useState(false);
  const { isGuest, user } = useAuth();
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);

  const bannerItems = [
    {
      section: "Overview",
      linkToSection: `/post/${postId}/#overview`,
    },
    {
      section: "Insights",
      linkToSection: `/post/${postId}/#insights`,
    },
    {
      section: "Return Rates",
      linkToSection: `/post/${postId}/#returnRates`,
    },
    {
      section: "Project History",
      linkToSection: `/post/${postId}/#historicalProjects`,
    },
    {
      section: "Management",
      linkToSection: `/post/${postId}/#management`,
    },
  ]

  const PageUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PageUrl).then(() => {
      successMessage('URL copied to clipboard!');
    }).catch(err => {
      errorMessage("Failed to copy the url, try after sometime!");
    });
  };

  useEffect(() => {
    const bgPosition = bgRef.current.offsetTop;
    const bgHeight = bgRef.current.offsetHeight;

    const handleScroll = () => {
      if (bannerRef.current) {
        if (window.scrollY > (bgPosition + bgHeight)) {
          bannerRef.current.classList.add('fixed-Bannertop');
          setBannerContent(true);
        } else if ((bgPosition + bgHeight) >= window.scrollY) {
          bannerRef.current.classList.remove('fixed-Bannertop');
          setBannerContent(false);
        }
      }
    };

    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleModalClose = () => {
    setShareModal(false);
  };

  const AccreditedModalHandler = () => {
    setAccreditedModal(!AccreditedModal);
  }
  const closeAccreditedModal = (value) => {
    setAccreditedModal(value);
  }

  return (
    <div className="">
      <Helmet>
        <title>Project</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/post/:postId" />
      </Helmet>
      <div className="flex flex-col items-center justify-center relative font-['Playfair-Display'] w-[100%]">
        <AccreditedModalComponent open={AccreditedModal} CloseAccreditedModal={closeAccreditedModal} data={data} />
        {shareModal && (
          <div className="w-full h-full flex items-center justify-center flex-col z-[100] fixed inset-0 overflow-hidden">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-xl z-10 p-4 w-[90%] md:w-[50%] relative flex flex-col items-center justify-center">
              <IoMdCloseCircle onClick={handleModalClose} className="absolute top-4 right-4" size="17px" />
              <p className="text-xl text-center uppercase">Share this post</p>
              <hr className="w-full my-2 " />
              <div className="gap-x-8 flex flex-wrap my-2 items-center justify-center mx-auto relative gap-y-4 ">
                <div className="">
                  <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                    <MdContentCopy onClick={copyToClipboard} size={40} color="rgb(82 82 91)" />
                  </div>
                  <p className="text-sm w-full flex items-center justify-center">Copy page url</p>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                    <WhatsappShareButton url={PageUrl} >
                      <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                  </div>
                  <p className="text-sm w-full flex items-center justify-center">Whatsapp</p>
                </div>
                <div>
                  <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                    <TwitterShareButton url={PageUrl}>
                      <XIcon size={40} round={true} />
                    </TwitterShareButton>
                  </div>
                  <p className="text-sm w-full flex items-center justify-center">X</p>
                </div>

                <div>
                  <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                    <LinkedinShareButton url={PageUrl}>
                      <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>
                  </div>
                  <p className="text-sm w-full flex items-center justify-center">LinkedIn</p>
                </div>

                <div>
                  <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                    <FacebookShareButton url={PageUrl}>
                      <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                  </div>
                  <p className="text-sm w-full flex items-center justify-center">Facebook</p>
                </div>
                <div>
                  <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                    <EmailShareButton url={PageUrl}>
                      <EmailIcon size={40} round={true} />
                    </EmailShareButton>
                  </div>
                  <p className="text-sm w-full flex items-center justify-center">Email</p>
                </div>
              </div>

              <div className="gap-x-8 flex my-2 items-center justify-center w-[60%] mx-auto">
              </div>
            </div>
          </div>
        )}
        <div className="w-[100%] mx-auto">
          <div className="PostPage">
            <NavBar />
            <div className="" id="overview"></div>
            <div className="YesevaFont flex items-center justify-center relative w-full">
              <div className="flex justify-center items-start h-full relative w-[100%]">
                <div className="relative flex flex-col w-[100%]">
                  <p className="text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] uppercase text-center"> Company <span className="text-purple-600">Analysis</span></p>

                  <div ref={bgRef} className="bg-gradient-to-r from-[#2a235a] to-[#150d2b] flex items-center justify-center flex-col relative">
                    <p className={`text-2xl md:text-3xl lg:text-5xl flex items-center justify-center text-center text-white frauncesFont tracking-widest p-4 mb-8 mt-2 lg:mb-12 lg:p-6`}>{data.companyName}</p>
                    <div ref={bannerRef} className="">
                      <div className={`overflow-x-scroll lg:overflow-x-hidden lg:w-fit xl:max-w-6xl mx-auto px-12 py-2 flex justify-start space-x-6 absolute inset-x-0 ${bannerContent ? '' : 'top-1/2 transform translate-y-1/2'} bg-white text-black border-[1px] border-purple-600`}>
                        {bannerItems.map((data, index) => (
                          <NavHashLink to={data.linkToSection} smooth key={index} className="whitespace-nowrap py-2 lg:py-4 text-black">
                            <div className="flex items-center justify-center space-x-6">
                              <p>{data.section}</p>
                              <span className="h-8 border-[1.2px] border-gray-300"></span>
                            </div>
                          </NavHashLink>
                        ))}
                        <div onClick={() => setShareModal(true)}
                          className={`whitespace-nowrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-2 rounded-xl md:text-base lg:text-base xl:text-lg text-black font-bold flex items-center justify-center gap-x-2`}>
                          <RiShareBoxFill />Share
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vsm:w-[90%] mx-auto md:w-full max-w-7xl my-12 text-white">

          <div className="w-[90%] mx-auto flex items-center justify-center flex-col-reverse lg:flex-row gap-2 lg:gap-6 mb-12">
            <div className="flex items-center justify-center flex-col text-black lg:basis-[70%]">
              <div className="flex items-center justify-start w-full">
                <p className="YesevaFont text-2xl my-2 w-full text-center">Overview</p>
              </div>
              <p className="md:text-lg text-justify">{data.description}</p>
              {!isLaptop &&
                <div id="insights"></div>
              }
            </div>
            <div className="hidden lg:block h-60 border-[1.2px] border-gray-300"></div>
            <div className="flex items-center justify-center flex-col text-black lg:basis-[30%]">
              <div className="grid grid-cols-2 md:flex md:items-center md:justify-center md:flex-wrap lg:grid lg:grid-cols-2 mt-4 mb-2 vsm:gap-x-4 md:gap-x-6 md:px-2 lg:px-0">
                <div className="flex flex-col items-center justify-center pb-2">
                  <div className="bg-gray-100 rounded-full p-4">
                    <MdOutlineAutoGraph size="25px" />
                  </div>
                  <p className="mt-1 font-semibold text-xl">{data.feeStructure}%</p>
                  <p className="flex flex-wrap text-center">Management Fees</p>
                </div>
                <div className="flex flex-col items-center justify-center pb-2">
                  <div className="bg-gray-100 rounded-full p-4">
                    <GoLock size="25px" />
                  </div>
                  <p className="mt-1 font-semibold text-xl">{data.historicalReturnRates} %</p>
                  <p className="flex flex-wrap text-center">Return Rates</p>
                </div>
                <div className="flex flex-col items-center justify-center pb-2">
                  <div className="bg-gray-100 rounded-full p-4">
                    <AiOutlineDollar size="25px" />
                  </div>
                  <p className="mt-1 font-semibold text-xl">{data.aum}</p>
                  <p className="flex flex-wrap text-center">Asset Under Management</p>
                </div>
                <div className="flex flex-col items-center justify-center pb-2">
                  <div className="bg-gray-100 rounded-full p-4">
                    <IoLocationOutline size="25px" />
                  </div>
                  <p className="mt-1 font-semibold text-xl">{data.location}</p>
                  <p className="flex flex-wrap text-center">Location</p>
                </div>
                {isLaptop &&
                  <div id="insights"></div>
                }
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto flex flex-col gap-y-4 md:grid md:grid-cols-3 md:gap-6 h-full my-6">
            <div className="relative bg-gradient-to-r from-[#2A235A] to-[#150D2B] py-6 gap-2 rounded-lg flex items-center justify-start flex-col text-center">
              <p className="YesevaFont text-2xl text-center my-1 uppercase">Minimum Investment</p>
              <p className="text-[#A26CF6] text-3xl font-bold CerebriFont">USD  {formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</p>
            </div>

            <div className="relative bg-gradient-to-r from-[#2A235A] to-[#150D2B] py-6 gap-2 rounded-lg flex items-center justify-start flex-col text-center">
              <p className="YesevaFont text-2xl text-center my-1 uppercase py-2">Company Age</p>
              <p className="text-[#A26CF6] text-3xl font-bold CerebriFont">{data.age} years</p>
            </div>

            <div className="relative bg-gradient-to-r from-[#2A235A] to-[#150D2B] py-6 gap-2 rounded-lg flex items-center justify-start flex-col text-center">
              <p className="YesevaFont text-2xl text-center my-1 uppercase py-2">Risk Type</p>
              <p className="text-[#A26CF6] text-3xl font-bold CerebriFont">{data.riskLevel}</p>
            </div>

            <div className="relative bg-gradient-to-r from-[#2A235A] to-[#150D2B] py-6 gap-2 rounded-lg flex items-center justify-start flex-col text-center">
              <p className="YesevaFont text-2xl text-center my-1 uppercase py-2">Asset Type</p>
              <p className="text-[#A26CF6] text-3xl font-bold CerebriFont">Multifamily</p>
            </div>
            <div className="relative bg-gradient-to-r from-[#2A235A] to-[#150D2B] py-6 gap-2 rounded-lg flex items-center justify-start flex-col text-center">
              <p className="YesevaFont text-2xl text-center my-1 uppercase py-2">Markets</p>
              <p className="text-[#A26CF6] text-2xl font-bold CerebriFont flex-wrap">Dallas, TX | Las Vegas, NV | Greenville, SC</p>
            </div>
            <div className="relative bg-gradient-to-r from-[#2A235A] to-[#150D2B] py-6 gap-2 rounded-lg flex items-center justify-start flex-col text-center">
              <p className="YesevaFont text-2xl text-center my-1 uppercase py-2">Investment Type</p>
              <p className="text-[#A26CF6] text-3xl font-bold CerebriFont">Value-add</p>
            </div>
          </div>

          <div className="w-[90%] mx-auto flex items-center justify-center flex-col lg:flex-row gap-6 h-full my-4 ">
            <div className="flex items-start justify-left lg:basis-[70%] flex-col ">

              <div className="mb-4 text-black">
                <p className="text-xl YesevaFont my-2">Investment Strategy</p>
                <ul className="list-disc list-inside space-y-2">
                  <li className=""> <span className="font-bold ">Type: </span> Equity Focused</li>
                  <li className=""> <span className="font-bold ">Insight: </span> {data.companyName} primarily follows an equity investment strategy, benefiting from property appreciation and rental income. While equity investments can offer higher returns, they also come with higher risks compared to debt investments.</li>
                </ul>
              </div>

              <div className="mb-4 text-black">
                <p className="text-xl YesevaFont my-2">Redemption Policy</p>
                <ul className="list-disc list-inside space-y-2">
                  <li className=""> <span className="font-bold ">Frequency: </span> {data.redemptionPolicy}</li>
                  <li className=""> <span className="font-bold ">Insight: </span> The annual redemption policy allows investors to withdraw funds once a year, offering some liquidity but favoring long-term investment. This policy is suitable for investors with a long-term investment horizon.</li>
                </ul>
              </div>

              <div className="text-black">
                <p className="text-xl YesevaFont my-2">Management Fees Analysis </p>
                <ul className="list-disc list-inside space-y-2">
                  <li className=""> <span className="font-bold ">Industry Range: </span> {data.averageAnnualReturns}% of AUM or committed capital</li>
                  <li className=""> <span className="font-bold ">Assets Under Management: </span> {data.aum}</li>

                  {/* this div is for the navHash Link only*/}
                  {isLaptop &&
                    <div id="returnRates"></div>
                  }

                  <li className=""> <span className="font-bold ">Comparison Parameters: </span> Fee percentage, basis of calculation, frequency of application, and performance fees.</li>
                </ul>
              </div>

            </div>
            <div className="hidden lg:block h-80 border-[1.2px] border-gray-300 "></div>
            <div className="flex items-center justify-between lg:basis-[30%] flex-col text-black gap-y-12">
              <div className="flex items-center justify-center flex-col gap-y-2">
                <p className="uppercase text-xl font-semibold">Company Accepting</p>
                <p className="text-lg ">{data.investorEligibility.length === 2 ? "Accredited & Non-Accredited Investors" : "Accredited Investors"}</p>
                <div className="flex items-center justify-center">
                  <div onClick={AccreditedModalHandler}>
                    <button style={{ backgroundImage: `url(${bgImage})` }} className={`bg-top flex-wrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-2 rounded-xl md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover flex items-center justify-center gap-x-2 uppercase`}>
                      check if you quilify to be a accredited invetsor
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col gap-y-2">
                <p className="uppercase text-xl font-semibold">Company Website</p>
                <p className="uppercase text-lg text-center">Explore Investment Opportunity</p>
                <div className="flex items-center justify-center">
                  {!isLaptop &&
                    <div id="returnRates"></div>
                  }
                  <Link to="https://www.studio2694.com/" target='_blank'>
                    <button style={{ backgroundImage: `url(${bgImage})` }} className={`bg-top flex-wrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-2 rounded-xl md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover flex items-center justify-center gap-x-2 uppercase`}>
                      {data.companyName}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto py-8">
            <p className="font-bold text-2xl text-black YesevaFont mb-4">Historical Return Rates</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-100 text-center text-sm font-medium text-gray-500 sticky left-0 z-10"></th>
                    <th className="px-6 py-3 bg-white text-center text-sm font-medium text-gray-500">
                      <div className="font-bold text-black text-xl CerebriFont mt-2 whitespace-nowrap">2024</div>
                    </th>
                    <th className="px-6 py-3 bg-white text-center text-sm font-medium text-gray-500">
                      <div className="font-bold text-black text-xl CerebriFont mt-2 whitespace-nowrap">2023</div>
                    </th>
                    <th className="px-6 py-3 bg-white text-center text-sm font-medium text-gray-500">
                      <div className="font-bold text-black text-xl CerebriFont mt-2 whitespace-nowrap">2022</div>
                    </th>
                    <th className="px-6 py-3 bg-white text-center text-sm font-medium text-gray-500">
                      <div className="font-bold text-black text-xl CerebriFont mt-2 whitespace-nowrap">2021</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { label: 'Annualized Returns', key: 'yearly_returns' },
                    { label: 'Average Cash-on-Cash', key: 'cashOnCash' },
                    { label: 'Equity multiple', key: 'equityMultiple' },
                    { label: 'IRR', key: 'irrHistory' },
                  ].map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td className="p-4 text-center md:text-xl font-medium text-gray-500 bg-gray-100 sticky left-0 z-10">{row.label}</td>
                      {data[row.key].map((item, colIndex) => (
                        <td key={colIndex} className="px-6 py-4 text-center text-md font-medium text-black">
                          <div className="">
                            {row.key === "equityMultiple" ? item.value : `${item.value}%`}
                          </div>
                        </td>
                      ))}
                      {row.key === 'irrHistory' && (
                        <div id="historicalProjects"> {/* Your content here */} </div>
                      )
                      }
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>

          <div className="w-[90%] mx-auto gap-4 h-full my-4 text-black flex flex-col">
            <div className="text-2xl font-bold YesevaFont">
              Project History
            </div>
            <span className="rounded-full text-xl p-2 px-4 border-[1px] border-purple-600 w-fit">
              Completed
            </span>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6 ">
              {data.historicalProjects.map((info, index) => (
                <Card info={info} key={index} />
              ))}
            </div>
          </div>

          <div className="container items-center justify-center flex flex-col w-full md:w-[90%] mx-auto xl:max-w-6xl">
            <div className=" flex flex-col items-center justify-center text-black ">
              <div className="mb-4 text-black">
                <p className="text-xl YesevaFont my-2">Summary</p>
                {/* just to match the navhashlink */}
                {isLaptop &&
                  <div id="management"></div>
                }
                <p>
                  {data.companyName} presents a compelling investment opportunity with its solid historical return rates,
                  {data.riskLevel} risk level, and competitive fee structure. The firm's equity-focused strategy and manageable minimum
                  investment make it accessible to a range of investors. While the {data.redemptionPolicy} redemption policy offers limited liquidity,
                  the firm’s substantial AUM and regional expertise in {data.location0} add to its credibility and stability.
                </p>
                {!isLaptop &&
                  <div id="management"></div>
                }
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg my-4 py-4 w-full xl:max-w-6xl" >
              <p className="YesevaFont text-2xl text-center my-1 uppercase">contact Management</p>
              <div className="flex items-center justify-center flex-col md:flex-row gap-x-24 py-6 gap-y-12">
                <div className="flex flex-col items-center justify-center ">
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-x-4">
                    <img className="w-[150px] h-[150px] rounded-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
                    <div className="flex flex-col">
                      <p>Michael Harris</p>
                      <p>978-872-8966</p>
                      <p className="hidden lg:block">Senior Investment Manager</p>
                      <p className="hidden lg:block">michael.harris@investmentfirm.com</p>
                    </div>
                    <div className="">
                      <p className="lg:hidden text-center">Senior Investment Manager</p>
                      <p className="lg:hidden text-center">michael.harris@investmentfirm.com</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-x-4">
                    <img className="w-[150px] h-[150px] rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2Zlc3Npb25hbCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="person" />
                    <div className="flex flex-col">
                      <p>Jessica Mitchell</p>
                      <p>978-8987-6543</p>
                      <p className="hidden lg:block">Chief Investment Officer</p>
                      <p className="hidden lg:block">jessica.mitchell@investmentfirm.com</p>
                    </div>
                    <div className="">
                      <p className="lg:hidden text-center">Chief Investment Officer</p>
                      <p className="lg:hidden text-center">jessica.mitchell@investmentfirm.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] mx-auto -ml-4 my-6 xl:ml-0">
            <div className="YesevaFont text-black flex items-center justify-center ml-4 font-bold text-2xl my-4">
              <p className="text-center">Explore Similar Companies</p>
            </div>
            <Carousel
              cols={4}
              rows={1}
              gap={5}
              arrowLeft={<LeftArrow dir="right" />}
              arrowRight={<RightArrow dir="right" />}
              loop={true}
              mobileBreakpoint={767}
              responsiveLayout={[
                {
                  breakpoint: 1023,
                  cols: 2,
                  rows: 1,
                  gap: 10,
                  loop: true,
                }
              ]}>
              {InvestmentData.filter((firm) => firm.projectId !== data.projectId).map((element, index) => (
                <Carousel.Item key={index}>
                  <div className="md:-mx-6" key={index}>
                    <PostCard data={element} />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>


        </div>
      </div >
      <Footer />
    </div >
  );
}

export default PostPage;
