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
import Footer from "../../commonComponents/Footer";
import "../../styles/LandingPage/Post.css";
import InvestmentData from "../../assets/companyData.json"
import { Helmet } from 'react-helmet-async';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

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
                <div className="relative uppercase flex flex-col">
                  <p className="text-[4.5rem]"> Company <span className="text-purple-600">Analysis</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vsm:w-[90%] lg:w-[60%] 2xl:max-w-6xl my-4 text-white">
          <div className="flex items-center justify-center flex-col text-black ">
            <p className="YesevaFont text-center text-4xl mb-2">{data.companyName}</p>
            <div className="flex items-center justify-start w-[120%]">
              <p className="YesevaFont text-xl mb-2 text-left">Overview</p>
            </div>
            <p className="CormorantFont font-bold text-xl lg:w-[120%] text-justify">{data.description}</p>
          </div>
          <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg my-2 py-6 ">
            <p className="YesevaFont text-3xl text-center my-2 uppercase">{data.companyName} strategy allocation</p>
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center ">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 75, label: 'Equity Focused' },
                        { id: 1, value: 25, label: 'Other Strategies' },
                      ],
                      highlightScope: { faded: 'global', highlighted: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      innerRadius: 30,
                      outerRadius: 100,
                      paddingAngle: 2,
                      cornerRadius: 5,
                      startAngle: -180,
                      endAngle: 180,
                      cx: 200,
                      cy: 120,
                    }
                  ]}
                  width="400px"
                  height="250px"
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <p className="text-[#A26CF6] text-5xl">{data.aum}</p>
                <p className="text-xl CormorantFont">Assets Under Mangement</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 my-6 ">
            <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg flex flex-col items-center justify-center ">
              <p className="uppercase">Risk type</p>
              <div className="">
                {/* <Dial /> */}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg flex items-center justify-center flex-col py-6 text-center">
              <div className="my-6 ">
                <p className="uppercase">Minimum Investment</p>
                <p className="text-[#A26CF6]">USD {formatMinInvestment(data.minInvestment) ? formatMinInvestment(data.minInvestment) : data.Investment}</p>
              </div>
              <div className="">
                <p className="">Acceptance</p>
                <p className="text-[#A26CF6]">Accredited only</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg p-6">
            <p className="YesevaFont text-3xl text-center my-2 uppercase">Historical return rates</p>
            <div className="flex items-center justify-center -mt-8 ">
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
              <div className="text-4xl text-[#A26CF6] font-bold whitespace-nowrap overflow-hidden text-ellipsis flex-shrink -mt-4">{data.historicalReturnRates}%</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 my-6 ">
            <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg flex flex-col items-center justify-center py-6">
              <p className="YesevaFont text-xl text-center uppercase">Management Fees</p>

              <div className="grid grid-cols-2 gap-x-10 text-center my-6 ">
                <div className="">
                  <p className="text-[#A26CF6]">1%-2%</p>
                  <p className="">Asset Management</p>
                </div>
                <div className=" ">
                  <p className="text-[#A26CF6]">1%-2%</p>
                  <p className="">Asset Management</p>
                </div>
              </div>

              <div className="w-full mx-auto text-center ">
                <p className="text-[#A26CF6] ">15%</p>
                <p className=" ">Performance/Incentive</p>
              </div>

            </div>
            <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg flex items-center justify-between flex-col py-6 text-center">
              <div className="">
                <p className="YesevaFont text-xl text-center uppercase">Company Age</p>
                <p className="text-[#A26CF6]">{data.age} years</p>
              </div>
              <div className="">
                <p className="uppercase">Founded</p>
                <p className="text-[#A26CF6]">{data.yearFounded}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] py-6 rounded-lg">
            <p className="YesevaFont text-xl text-center uppercase">Headquarter location</p>
            <div className="flex items-center justify-center">
              <div className="">
                <img src="https://i.postimg.cc/fR9Q4fFz/demographic.jpg" className="w-[400px] mr-[20px]" alt="Location" />
              </div>
              <div className="text-center">
                <p className="YesevaFont text-xl text-center uppercase">Location</p>
                <p className="text-[#A26CF6] text-3xl uppercase">{data.location}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#2A235A] to-[#150D2B] rounded-lg my-6">
            <p className="YesevaFont text-3xl text-center my-2 uppercase">contact Management</p>
            <div className="flex items-center justify-center gap-x-40 py-6">
              <div className="flex items-center justify-center py-6 ">
                <div className=" ">
                  <img className="w-[100px] h-[100px] rounded-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
                </div>
                <div className="flex flex-col text-left ml-4">
                  <p>Name:</p>
                  <p>Title:</p>
                  <p>Phone:</p>
                  <p>Email:</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className=" ">
                  <img className="w-[100px] h-[100px] rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2Zlc3Npb25hbCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="person" />
                </div>
                <div className="flex flex-col text-left ml-4">
                  <p>Name:</p>
                  <p>Title:</p>
                  <p>Phone:</p>
                  <p>Email:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  );
}

export default PostPage;
