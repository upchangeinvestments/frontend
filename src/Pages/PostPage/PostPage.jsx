import React, { useEffect, useRef } from "react";
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
import Footer from "../../commonComponents/Footer";
import "../../styles/LandingPage/Post.css";
import InvestmentData from "../../assets/companyData.json"
import { Helmet } from 'react-helmet-async';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { PieChart } from '@mui/x-charts/PieChart';
import { RiShareBoxFill } from "react-icons/ri";
import { BarChart } from '@mui/x-charts/BarChart';
import bgImage from "../../assets/login_BG.jpeg";
import { useAuth } from "../../utils/AuthContext";
import "../../App.css"

const BarChartSetting = {
  xAxis: [
    {
      label: 'Annual Return Rate (%)',
    },
  ],
  width: 500,
  height: 250,
};

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

  const { isAuth } = useAuth();

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
      section: "Location",
      linkToSection: `/post/${postId}/#location`,
    },
    {
      section: "Management",
      linkToSection: `/post/${postId}/#management`,
    },
  ]
  useEffect(() => {
    const bannerPosition = bannerRef.current.offsetTop;
    const handleScroll = () => {
      if (bannerRef.current) {
        if (window.scrollY > bannerPosition) {
          bannerRef.current.classList.add('fixed-Bannertop');
          console.log("window scrollY", window.scrollY)
        } else if (bannerPosition >= window.scrollY) {
          bannerRef.current.classList.remove('fixed-Bannertop');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="">
      <Helmet>
        <title>Project</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/post/:postId" />
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[100%]">
          <div className="PostPage">
            <NavBar />
            <div className="YesevaFont flex items-center justify-center relative">
              <div className="flex justify-center items-start h-[90%] relative">
                <div className="relative flex flex-col">
                  <p className="text-[4.5rem] uppercase"> Company <span className="text-purple-600">Analysis</span></p>
                  <p className="YesevaFont text-center text-4xl mb-2">{data.companyName}</p>
                </div>
              </div>
            </div>
          </div>
          <div ref={bannerRef} className="flex items-center justify-between  bg-gradient-to-r from-[#9b5bd4] to-purple-300 text-white px-12 py-4 w-full">
            <div className="flex items-center justify-start gap-x-8">
              {bannerItems.map((data, index) => (
                <NavHashLink to={data.linkToSection} smooth key={index} className="border-[1px] border-white rounded-full p-2 px-6 ">
                  {data.section}
                </NavHashLink>
              ))}
            </div>
            <div className="text-black rounded-full p-2 px-6 border-[1px] border-black" onClick={scrollToTop}>
              Back to top
            </div>
          </div>
        </div>
        <div className="vsm:w-[90%] lg:w-[60%] 2xl:max-w-6xl my-4 text-white">
          <div className="flex items-center justify-center flex-col text-black" id="overview">
            <div className="flex items-center justify-start w-[120%]">
              <p className="YesevaFont text-xl mb-2 text-left">Overview</p>
            </div>
            <p className="font-['Playfair-Display'] text-xl lg:w-[120%] text-justify">{data.description}</p>
          </div>
          <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg my-6 py-4 ">
            <p className="YesevaFont text-2xl text-center my-1 uppercase">{data.companyName} strategy allocation</p>
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center relative">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 75, label: 'Equity Focused', color: "#A26CF6" },
                        { id: 1, value: 25, label: 'Other Strategies', color: "#C59FFF" },
                      ],
                      highlightScope: { faded: 'global', highlighted: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      innerRadius: 50,
                      outerRadius: 100,
                      paddingAngle: 2,
                      cornerRadius: 5,
                      startAngle: 0,
                      endAngle: 360,
                      cx: 100,
                      cy: 120,
                    }
                  ]}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                  width="450px"
                  height="250px"
                />
                <div className="z-10 absolute right-10 flex flex-col items-start justify-center gap-y-2">
                  <div className="flex items-center justify-center gap-x-2">
                    <div className="w-4 h-4 border-[1px] border-white bg-[#A26CF6]"></div>
                    <p>Equity Focused (25%)</p>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <div className="w-4 h-4 border-[1px] border-white bg-[#C59FFF]"></div>
                    <p>Other Strategies (75%)</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col ">
                <p className="text-[#A26CF6] text-5xl mb-4 font-medium">{data.aum}</p>
                <p className="text-xl CormorantFont CerebriFont">Assets Under Mangement</p>
              </div>
            </div>
          </div>
          <div className="mb-4 text-black">
            <p className="text-xl font-bold CerebriFont my-2">Investment Strategy</p>
            <ul className="list-disc list-inside space-y-2">
              <li className=""> <span className="font-bold ">Type: </span> Equity Focused</li>
              <li className=""> <span className="font-bold ">Insight: </span> {data.companyName} primarily follows an equity investment strategy, benefiting from property appreciation and rental income. While equity investments can offer higher returns, they also come with higher risks compared to debt investments.</li>
            </ul>
          </div>
          <div className="mb-4 text-black">
            <p className="text-xl font-bold CerebriFont my-2">Assets Under Management (AUM)</p>
            <ul className="list-disc list-inside space-y-2">
              <li className=""> <span className="font-bold ">Total: </span> {data.aum}</li>
              <li className=""> <span className="font-bold ">Insight: </span> With {data.aum} in AUM, {data.companyName} is a mid-sized firm. This level of AUM indicates stability and sufficient resources to manage investments effectively and generate returns for investors. </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-x-6 my-6 ">
            <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg flex flex-col items-center justify-center" id="riskType">
              <p className="YesevaFont text-2xl text-center my-1 uppercase py-2">Risk type</p>
              <div className="relative h-full w-full CerebriFont">
                <p className="absolute left-20 bottom-4">Low</p>
                <p className="absolute bottom-4 right-20">High</p>
                <p className="absolute top-4 inset-x-0 left-[42%]">Medium</p>
                <img src="https://i.postimg.cc/dt1k2mm6/highmeter.png" alt="High" />
                {/* <img src="https://i.postimg.cc/t4nsfqcV/medium.png" alt="Medium" />
                <img src="https://i.postimg.cc/HshJBc6g/low.png" alt="Low" /> */}
              </div>
            </div>
            <div className="relative bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg flex items-center justify-start flex-col text-center" >
              <div className="">
                <p className="YesevaFont text-2xl text-center my-1 uppercase py-4">Minimum Investment</p>
                <p className="text-[#A26CF6] text-3xl font-bold CerebriFont">USD {formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</p>
              </div>
              <div className="text-2xl CerebriFont mt-8">
                <p className="YesevaFont text-3xl text-center uppercase">Acceptance</p>
                <p className="text-[#A26CF6] font-bold mt-2">Accredited only</p>
              </div>
            </div>
          </div>
          <div className="mb-4 text-black">
            <p className="text-xl font-bold CerebriFont my-2">Risk Level</p>
            <ul className="list-disc list-inside space-y-2">
              <li className=""> <span className="font-bold ">Level: </span> {data.riskLevel}</li>
              <li className=""> <span className="font-bold ">Insight: </span> {data.companyName} balances its investment strategy to offer reasonable returns while managing risk. This {data.riskLevel} risk level is suitable for investors seeking a balance between growth and safety.</li>
            </ul>
          </div>
          <div className="mb-4 text-black">
            <p className="text-xl font-bold CerebriFont my-2">Minimum Investment</p>
            <ul className="list-disc list-inside space-y-2">
              <li className=""> <span className="font-bold ">Amount: </span> USD {data.minInvestment}</li>
              <li className=""> <span className="font-bold ">Insight: </span> This minimum investment level makes Evsion Capital Investments accessible to both high-net-worth individuals and smaller institutional investors. It provides a moderate entry point, allowing broader participation.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg p-4 my-6" id="returnRates">
            <p className="YesevaFont text-2xl text-center my-1 uppercase">Historical return rates</p>
            <div className="flex items-center justify-center -mt-8 -ml-8">
              <div className="text-white">
                <BarChart
                  dataset={data.yearly_returns}
                  yAxis={[{ scaleType: 'band', dataKey: 'year' }]}
                  series={[{ dataKey: 'value', label: 'Annual Return Rate', valueFormatter, color: '#A26CF6', height: "200px" }]}
                  sx={{
                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                      fill: "white"
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                      fill: "white"
                    },
                    "& .MuiChartsLegend-root": {
                      hidden: "true",
                      display: "none",
                    },
                    "& .MuiChartsAxis-label ": {
                      stroke: "white",
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                      stroke: "white",
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
                      stroke: "white",
                    },
                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                      stroke: "white",
                    },
                    "& .MuiChartsAxis-left .MuiChartsAxis-tick": {
                      stroke: "white",
                    }
                  }}
                  layout="horizontal"
                  {...BarChartSetting}
                />
              </div>
              <div className="text-4xl text-[#A26CF6] font-bold whitespace-nowrap overflow-hidden text-ellipsis flex-shrink -mt-4">{data.historicalReturnRates.split("-")[0]}% - {data.historicalReturnRates.split("-")[1]}%</div>
            </div>
          </div>
          <div className="mb-4 text-black my-4">
            <p className="text-xl font-bold CerebriFont my-2 ">Historical Return Rates</p>
            <ul className="list-disc list-inside space-y-2">
              <li className=""> <span className="font-bold ">Return Rate: </span> {data.historicalReturnRates}%</li>
              <li className=""> <span className="font-bold ">Insight: </span> This indicates solid past performance, suggesting potential for consistent future returns. A historical return rate of {data.historicalReturnRates}% is attractive and implies effective portfolio management that consistently delivers positive results.</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-x-6 my-6 ">
            <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg flex flex-col items-center justify-center">
              <p className="YesevaFont text-2xl text-center my-1 uppercase py-2">Management Fees</p>
              <div className=" text-center mb-6 CerebriFont">
                <div className="grid grid-cols-2 gap-x-10 my-2">
                  <div className="">
                    <p className="text-[#A26CF6] text-3xl font-bold">1%-2%</p>
                    <p className="">Asset Management</p>
                  </div>
                  <div className=" ">
                    <p className="text-[#A26CF6] text-3xl font-bold">1%-2%</p>
                    <p className="">Acquisition</p>
                  </div>
                </div>
                <div className="w-full mx-auto text-center mt-2">
                  <p className="text-[#A26CF6] text-3xl font-bold">15%</p>
                  <p className=" ">Performance/Incentive</p>
                </div>
              </div>

            </div>
            <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg flex items-center justify-center flex-col text-center">
              <div className="">
                <p className="YesevaFont text-2xl text-center my-1 uppercase py-2">Company Age</p>
                <p className="text-[#A26CF6] text-3xl font-bold CerebriFont">{data.age} years</p>
              </div>
              <div className="CerebriFont mt-8">
                <p className="YesevaFont text-2xl text-center uppercase">Founded</p>
                <p className="text-[#A26CF6] font-bold text-3xl">{data.yearFounded}</p>
              </div>
            </div>
          </div>
          <div className="mb-4 text-black">
            <p className="text-xl font-bold CerebriFont my-2">Management Fees Analysis </p>
            <ul className="list-disc list-inside space-y-2">
              <li className=""> <span className="font-bold ">Industry Range: </span> {data.averageAnnualReturns}% of AUM or committed capital</li>
              <li className=""> <span className="font-bold ">Assets Under Management: </span> {data.aum}</li>
              <li className=""> <span className="font-bold ">Comparison Parameters: </span> Fee percentage, basis of calculation, frequency of application, and performance fees.</li>
            </ul>
          </div>
          <div className="mb-4 text-black">
            <p className="text-xl font-bold CerebriFont my-2">Fee Structure</p>
            <ul className="list-disc list-inside space-y-2">
              <li className=""> <span className="font-bold ">Management Fee: </span> {data.feeStructure}%</li>
              <li className=""> <span className="font-bold ">Insight: </span> A {data.feeStructure}% management fee is competitive within the industry. This fee covers operational costs while aiming to maximize net returns for investors. Although not the lowest, it is justified by the firm's performance and services provided.</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] py-4 rounded-lg my-6" id="location">
            <p className="YesevaFont text-2xl text-center my-1 uppercase">Headquarter location</p>
            <div className="flex items-center justify-center">
              <div className="">
                <img src="https://i.postimg.cc/fR9Q4fFz/demographic.jpg" className="w-[400px] -ml-[100px]" alt="Location" />
              </div>
              <div className="text-center CerebriFont mr-[50px] -mt-[100px]">
                <p className="text-2xl text-center uppercase YesevaFont mb-2">Location</p>
                <p className="text-[#A26CF6] text-2xl uppercase font-bold">{data.location}</p>
              </div>
            </div>
          </div>
          <div className="mb-4 text-black">
            <p className="text-xl font-bold CerebriFont my-2">Geographic Focus</p>
            <ul className="list-disc list-inside space-y-2">
              <li className=""> <span className="font-bold ">Region: </span> {data.location}</li>
              <li className=""> <span className="font-bold ">Insight: </span> The firm leverages local market expertise and relationships within the {data.location} region. This geographic focus provides advantages in local market knowledge but also means that investors' exposure is concentrated in a single region, potentially impacting diversification.</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg my-6 py-4" id="management">
            <p className="YesevaFont text-2xl text-center my-1 uppercase">contact Management</p>
            <div className="flex items-center justify-center gap-x-20 py-6">
              <div className="flex flex-col items-center justify-center ">
                <div className="flex items-center justify-center gap-x-4">
                  <img className="w-[100px] h-[100px] rounded-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
                  <div className="flex flex-col">
                    <p>Michael Harris</p>
                    <p>978 872-8966</p>
                  </div>
                </div>
                <div className="flex flex-col text-left ml-4">
                  <p>Senior Investment Manager</p>
                  <p>michael.harris@investmentfirm.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-x-4">
                  <img className="w-[100px] h-[100px] rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2Zlc3Npb25hbCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="person" />
                  <div className="flex flex-col">
                    <p>Jessica Mitchell</p>
                    <p>978 8987-6543</p>
                  </div>
                </div>
                <div className="flex flex-col text-left ml-4">
                  <p>Chief Investment Officer</p>
                  <p>jessica.mitchell@investmentfirm.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-black my-4 ">
            <p className="font-bold text-2xl YesevaFont uppercase">Additional Analytics</p>

            <div className="mb-4 text-black">
              <p className="text-xl font-bold CerebriFont my-2">Redemption Policy</p>
              <ul className="list-disc list-inside space-y-2">
                <li className=""> <span className="font-bold ">Frequency: </span> {data.redemptionPolicy}</li>
                <li className=""> <span className="font-bold ">Insight: </span> The annual redemption policy allows investors to withdraw funds once a year, offering some liquidity but favoring long-term investment. This policy is suitable for investors with a long-term investment horizon.</li>
              </ul>
            </div>

            <div className="mb-4 text-black">
              <p className="text-xl font-bold CerebriFont my-2">Summary</p>
              <p>
                {data.companyName} presents a compelling investment opportunity with its solid historical return rates,
                {data.riskLevel} risk level, and competitive fee structure. The firm's equity-focused strategy and manageable minimum
                investment make it accessible to a range of investors. While the {data.redemptionPolicy} redemption policy offers limited liquidity,
                the firm’s substantial AUM and regional expertise in {data.location0} add to its credibility and stability.
              </p>
            </div>

          </div>
          <div className="flex items-center justify-center">
            <Link to="https://www.studio2694.com/" target="_blank">
              <button style={{ backgroundImage: `url(${bgImage})` }}
                className={`bg-top whitespace-nowrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-3 rounded-full md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover flex items-center justify-center gap-x-2`}>
                <RiShareBoxFill />{data.companyName}
              </button>
            </Link>
          </div>

          {/* detail analysis of the company  */}

        </div>
      </div >
      <Footer />
    </div >
  );
}

export default PostPage;
