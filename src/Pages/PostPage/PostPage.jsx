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
      <div className="p-4 grid grid-cols-2 font-semibold text-lg">
        <div className="flex flex-col items-start">
          <p className="whitespace-nowrap">Class Type: {info.classType}</p>
          <p className="whitespace-nowrap">Return Rate: {info.returnRate}%</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="whitespace-nowrap">Year Started: {info.year}</p>
          <p className="whitespace-nowrap">Year Ended: {info.yearEnd}</p>
        </div>
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
  const [bannerContent, setBannerContent] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [AccreditedModal, setAccreditedModal] = useState(false);
  const { isGuest, user } = useAuth();
  const [chartWidth, setChartWidth] = useState(500);
  const chartRef = useRef();

  const bannerItems = [
    {
      section: "Overview",
      linkToSection: `/post/${postId}/#overview`,
    },
    {
      section: "Risk Type",
      linkToSection: `/post/${postId}/#riskType`,
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
    const bannerPosition = bannerRef.current.offsetTop;

    const handleScroll = () => {
      if (bannerRef.current) {
        console.log("window = ", window.scrollY);
        console.log("banner = ", bannerPosition);
        if (window.scrollY > bannerPosition) {
          bannerRef.current.classList.add('fixed-Bannertop');
          setBannerContent(true);
        } else if (bannerPosition >= window.scrollY) {
          bannerRef.current.classList.remove('fixed-Bannertop');
          setBannerContent(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      if (window.innerWidth < 767) {
        setChartWidth(window.innerWidth - 80);
      } else {
        setChartWidth(500);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const BarChartSetting = {
    xAxis: [
      {
        label: 'Annual Return Rate (%)',
      },
    ],
    width: chartWidth,
    height: 250,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <p className="text-xl text-center">Share this post</p>
              <hr className="w-full my-2 " />
              <div className="gap-x-8 flex flex-wrap my-2 items-center justify-center mx-auto relative gap-y-4 ">
                <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                  <MdContentCopy onClick={copyToClipboard} size={40} color="rgb(82 82 91)" />
                </div>
                <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                  <WhatsappShareButton url={PageUrl} >
                    <WhatsappIcon size={40} round={true} />
                  </WhatsappShareButton>
                </div>
                <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                  <TwitterShareButton url={PageUrl}>
                    <XIcon size={40} round={true} />
                  </TwitterShareButton>
                </div>
                <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                  <LinkedinShareButton url={PageUrl}>
                    <LinkedinIcon size={40} round={true} />
                  </LinkedinShareButton>
                </div>
                <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                  <FacebookShareButton url={PageUrl}>
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>
                </div>
                <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-xl px-4 md:px-8 py-2 ">
                  <EmailShareButton url={PageUrl}>
                    <EmailIcon size={40} round={true} />
                  </EmailShareButton>
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
                  <p className="text-[3.5rem] md:text-[4.5rem] uppercase text-center"> Company <span className="text-purple-600">Analysis</span></p>

                  <div className="bg-gradient-to-r from-[#2a235a] to-[#150d2b] flex items-center justify-center flex-col relative">
                    <p className={`text-5xl flex items-center justify-center text-left text-white frauncesFont tracking-widest p-6 mb-16`}>{data.companyName}</p>
                    <div ref={bannerRef} className={`container mx-auto px-4 py-2 flex justify-center space-x-6 absolute inset-x-0 ${bannerContent ? '' : 'top-1/2 transform translate-y-1/2'} bg-white text-black border-[1px] border-purple-600`}>
                      {bannerItems.map((data, index) => (
                        <NavHashLink to={data.linkToSection} smooth key={index} className="whitespace-nowrap py-4 text-black">
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
        <div className="vsm:w-[90%] mx-auto md:w-full max-w-7xl my-12 text-white">

          <div className="w-[90%] mx-auto flex items-center justify-center gap-6">
            <div className="flex items-center justify-center flex-col text-black basis-[70%]">
              <div className="flex items-center justify-start w-full">
                <p className="YesevaFont text-2xl my-2 w-full text-center">Overview</p>
              </div>
              <p className="text-lg text-justify">{data.description}</p>
            </div>
            <div className="h-60 border-[1.2px] border-gray-300 "></div>
            <div className="flex items-center justify-center flex-col text-black basis-[30%]">
              <div className="grid grid-cols-2 mt-4 mb-2 vsm:gap-x-4 md:gap-x-6 md:px-2 lg:px-0">
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
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-3 gap-6 h-full my-6 ">
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

          <div className="w-[90%] mx-auto flex items-center justify-center gap-6 h-full my-4 ">
            <div className="flex items-start justify-left basis-[70%] flex-col ">

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

              <div className="mb-4 text-black">
                <p className="text-xl YesevaFont my-2">Management Fees Analysis </p>
                <ul className="list-disc list-inside space-y-2">
                  <li className=""> <span className="font-bold ">Industry Range: </span> {data.averageAnnualReturns}% of AUM or committed capital</li>
                  <li className=""> <span className="font-bold ">Assets Under Management: </span> {data.aum}</li>
                  <li className=""> <span className="font-bold ">Comparison Parameters: </span> Fee percentage, basis of calculation, frequency of application, and performance fees.</li>
                </ul>
              </div>

            </div>
            <div className="h-80 border-[1.2px] border-gray-300 "></div>
            <div className="flex items-center justify-between basis-[30%] flex-col text-black gap-y-12">
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
                  <Link to="https://www.studio2694.com/" target='_blank'>
                    <button style={{ backgroundImage: `url(${bgImage})` }} className={`bg-top flex-wrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-2 rounded-xl md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover flex items-center justify-center gap-x-2 uppercase`}>
                      {data.companyName}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto overflow-x-auto py-8 my-6">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-100 text-center text-sm font-medium text-gray-500"></th>
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
              {/* <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { label: 'Annualized Returns', key: 'annualReturn' },
                  { label: 'Average Cash-on-Cash', key: 'cashOnCash' },
                  { label: 'Equity multiple', key: 'equityMultiple' },
                  { label: 'IRR', key: 'irr' },
                ].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="py-4 text-center text-xl font-medium text-gray-500 bg-gray-100">{row.label}</td>
                    <td className="py-4 text-center text-black">20.18%</td>
                    {/* {compareIds.map((item, colIndex) => (
                        <td key={colIndex} className="px-6 py-4 text-center text-md font-medium text-black">
                          <div className={row.key === 'minInvestment' ? "text-purple-600 text-2xl font-bold" : row.key === "investorEligibility" ? "w-[80%] mx-auto" : ""}>{row.key === "minInvestment" ? `$ ${data[item][row.key].toLocaleString()}` : `${data[item][row.key]}`}{row.key === 'feeStructure' ? "%" : ""}</div>
                        </td>
                      ))} */}
              {/* </tr> ))} */}
              {/* </tbody> */}
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="py-4 text-center text-xl font-medium text-gray-500 bg-gray-100">Annualized Returns</td>
                  <td className="py-4 text-center text-black">20%</td>
                  <td className="py-4 text-center text-black">22%</td>
                  <td className="py-4 text-center text-black">15%</td>
                  <td className="py-4 text-center text-black">23%</td>
                </tr>
                <tr>
                  <td className="py-4 text-center text-xl font-medium text-gray-500 bg-gray-100">Average Cash-on-Cash</td>
                  <td className="py-4 text-center text-black">10.18%</td>
                  <td className="py-4 text-center text-black">5.9%</td>
                  <td className="py-4 text-center text-black">12%</td>
                  <td className="py-4 text-center text-black">9.57%</td>
                </tr>
                <tr>
                  <td className="py-4 text-center text-xl font-medium text-gray-500 bg-gray-100">Equity multiple</td>
                  <td className="py-4 text-center text-black">2.01x</td>
                  <td className="py-4 text-center text-black">1.48x</td>
                  <td className="py-4 text-center text-black">2.12x</td>
                  <td className="py-4 text-center text-black">1.73x</td>
                </tr>
                <tr>
                  <td className="py-4 text-center text-xl font-medium text-gray-500 bg-gray-100">IRR</td>
                  <td className="py-4 text-center text-black">18%</td>
                  <td className="py-4 text-center text-black">15%</td>
                  <td className="py-4 text-center text-black">17%</td>
                  <td className="py-4 text-center text-black">10%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-[90%] mx-auto gap-4 h-full my-4 text-black flex flex-col">
            <div className="text-3xl">
              Project History
            </div>
            <span className="rounded-full text-xl p-2 px-4 border-[1px] border-purple-600 w-fit">
              Completed
            </span>
            <div className="grid grid-cols-3 gap-x-6 ">
              {data.historicalProjects.map((info, index) => (
                <Card info={info} key={index} />
              ))}
            </div>
          </div>

          <div className="container items-center justify-center flex flex-col w-full mx-auto">
            <div className=" flex flex-col items-center justify-center text-black ">
              <div className="mb-4 text-black">
                <p className="text-xl YesevaFont my-2">Summary</p>
                <div className="" id="management"></div>  {/* just to match the navhashlink */}
                <p>
                  {data.companyName} presents a compelling investment opportunity with its solid historical return rates,
                  {data.riskLevel} risk level, and competitive fee structure. The firm's equity-focused strategy and manageable minimum
                  investment make it accessible to a range of investors. While the {data.redemptionPolicy} redemption policy offers limited liquidity,
                  the firm’s substantial AUM and regional expertise in {data.location0} add to its credibility and stability.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg my-4 py-4 w-full" >
              <p className="YesevaFont text-2xl text-center my-1 uppercase">contact Management</p>
              <div id="historicalProjects"></div>
              <div className="flex items-center justify-center flex-col md:flex-row gap-x-20 py-6 gap-y-12">
                <div className="flex flex-col items-center justify-center ">
                  <div className="flex items-center justify-center gap-x-4">
                    <img className="w-[150px] h-[150px] rounded-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
                    <div className="flex flex-col">
                      <p>Michael Harris</p>
                      <p>978 872-8966</p>
                      <p>Senior Investment Manager</p>
                      <p>michael.harris@investmentfirm.com</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center gap-x-4">
                    <img className="w-[150px] h-[150px] rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2Zlc3Npb25hbCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="person" />
                    <div className="flex flex-col">
                      <p>Jessica Mitchell</p>
                      <p>978 8987-6543</p>
                      <p>Chief Investment Officer</p>
                      <p>jessica.mitchell@investmentfirm.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] mx-auto -ml-4 my-6">
            <div className="YesevaFont text-black flex items-center justify-center ml-4 font-bold text-2xl my-4">
              <p className="">Explore Similar Companies</p>
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
                  <div className="-mx-6" key={index}>
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
