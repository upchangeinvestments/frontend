import React from "react";
import Lipika_mam from "../../assets/LS_Photo.png";
import { ImQuotesLeft } from "react-icons/im";
import BlurBuilding from "../../assets/Building_blur-md.jpg";
import logo from "../../assets/logo2.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function AboutUs() {
  return (
    <div className="overflow-x-hidden vsm:mb-12 md:mb-12">
      <div className="flex vsm:flex vsm:flex-col md:flex md:flex-row md:mt-2 lg:mt-8">
        <div class=" vsm:w-72 vsm:h-60 vsm:ml-4 vsm:mt-8 msm:ml-6 msm:w-80 sm:w-96 md:w-44 md:mt-[400px] md:ml-8  lg:ml-12 lg:mt-[350px] lg:w-72 lg:h-60 xl:mt-[230px] xl:ml-24 bg-white/20  backdrop-blur-xl bottom-0    flex justify-center items-center rounded-lg">
          <div class="text-center">
            <h2 class=" vsm:text-xl lg:text-2xl text-[#9747FF] font-semibold mb-4 uppercase">
              Company at a glance
            </h2>
            <div class="flex flex-col items-center">
              <div class="mb-4">
                <p class="text-sm text-white font-medium mb-2">Founded</p>
                <p class="text-lg">2024</p>
              </div>
              <div>
                <p class="text-sm text-white font-medium mb-2">Founder</p>
                <p class="text-lg">Lipika Sharma</p>
              </div>
            </div>
          </div>
        </div>
        <div className="vsm:p-4 vsm:w-[90%] vsm:ml-4 vsm:mt-16 md:w-[68%] md:p-8 md:px-10 lg:p-6 lg:w-[60%] lg:ml-8 xl:p-4 xl:ml-20 bg-white/20   rounded-lg backdrop-blur-xl relative ">
          <img
            className="vsm:w-16 vsm:left-[240px] vsm:top-[-32px] msm:w-20 msm:left-[270px] msm:top-[-35px] sm:left-[322px] md:left-[440px] md:w-24  lg:w-32 lg:left-[515px] lg:-top-10 xl:left-[785px] xl:top-[-65px] rounded-full absolute  bg-center"
            src={Lipika_mam}
            alt="Lipika Sharma"
          />
          <div className="absolute -top-5 left-0">
            <ImQuotesLeft color="gray" size="50px" className="opacity-[0.2]" />
          </div>
          <div className="vsm:ml-10 vsm:text-2xl vsm:mt-6 msm:ml-12  msm:text-3xl sm:text-3xl sm:ml-16 sm:mt-6 md:text-4xl lg:text-4xl lg:text-center lg:ml-0  lg:mt-4 xl:text-5xl xl:mt-12">
            Words from CEO
          </div>
          <div className="flex items-center justify-center text-2xl vsm:mt-8 msm:mt-6 sm:mt-6 md:mt-8">
            <img
              className="vsm:w-[60%] vsm:mb-6 msm:w[40%] sm:w-[50%] lg:w-[35%] xl:w-[30%]"
              src={logo}
              alt="Infinite Investments"
            />
          </div>
          <p className="flex items-center justify-center text-justify vsm:px-4 vsm:mb-6 md:p-4 xl:px-8  lg:mr-0">
            Welcome to Lynkinfinite Investments, your gateway to a world of
            diverse and accessible real estate investment opportunities. Founded
            in 2024, Lynkinfinite is a cutting-edge platform designed to
            revolutionize the way investors approach real estate. At
            Lynkinfinite, we recognize that the world of investing should be
            inclusive and available to everyone. Our platform eliminates the
            complexities typically associated with real estate investments by
            providing a centralized system that aggregates opportunities from
            various reputable firms. Our streamlined approach empowers investors
            to explore, evaluate, and compare multiple real estate investment
            options seamlessly. Whether you're looking to customize your
            investment range, choose preferred locations, or select reputable
            investment firms, Lynkinfinite offers the flexibility to tailor your
            strategy according to your specific preferences. We believe in
            breaking down barriers to make informed investment decisions
            accessible to all. Customize your Return on Investment (ROI)
            expectations and other parameters to align with your individual
            requirements. is dedicated to empowering you to make well-informed
            decisions, maximizing your potential returns as you embark on your
            investment journey. Welcome to Lynkinfinite Investments – where your
            investment goals become possibilities, and the world of real estate
            investing is at your fingertips. Join us in reshaping the landscape
            of accessible and comprehensive investment solutions.
          </p>
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold mt-12 text-center my-8 uppercase text-[#9747FF]">
          Modern Real Estate Investment solutions
        </h2>
      </div>
      <div className="flex flex-wrap gap-x-12 items-center justify-center w-full">
        <Card className="my-6 w-[250px] ">
          <CardHeader className="relative flex md:flex items-center justify-center -mt-6">
            <img
              className="w-[100%] h-[100%]"
              src={BlurBuilding}
              alt="card-image"
            />
            <p className="text-white absolute m-0 text-5xl CustomizeFontH">
              VISION
            </p>
          </CardHeader>
          <CardBody>
            <p className="py-4 h-60 text-base">
              We envision a dynamic platform for seamless exploration and
              comparison of diverse opportunities, empowering investors with
              robust analytics.
            </p>
          </CardBody>
        </Card>
        <Card className="my-6 w-[250px]">
          <CardHeader className="relative flex items-center justify-center">
            <img
              className="w-[100%] h-[100%]"
              src={BlurBuilding}
              alt="card-image"
            />
            <p className="text-white absolute m-0 text-5xl CustomizeFontH">
              Mission
            </p>
          </CardHeader>
          <CardBody>
            <p className="py-4 h-60 text-base">
              To empower investors with the tools and information needed to make
              informed real estate investment decisions, while facilitating
              collaboration and growth within the real estate funding industry.
            </p>
          </CardBody>
        </Card>
        <Card className="my-6 w-[250px]">
          <CardHeader className="relative flex items-center justify-center">
            <img
              className="w-[100%] h-[100%]"
              src={BlurBuilding}
              alt="card-image"
            />
            <p className="text-white absolute m-0 text-5xl CustomizeFontH">
              VALUES
            </p>
          </CardHeader>
          <CardBody>
            <p className="py-4 h-60 text-base">
              We are committed to empowering individuals by simplifying real
              estate investing with transparency, fostering trust through clear
              information, and propelling innovation to redefine the
              investment experience.
            </p>
          </CardBody>
        </Card>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-16 lg:gap-x-12 xl:gap-x-4 vsm:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto">
                <div className='flex flex-col items-center justify-center mb-20 '>
                    <div className="max-w-[250px] h-[120px] bg-bottom">
                        <div className="relative flex items-center justify-center">
                            <img src={BlurBuilding} className="w-[100%] h-[100%] rounded-t-lg" alt="" />
                            <p className='text-white absolute m-0 text-5xl CustomizeFontH'>VISION</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-b-lg p-4 px-6 w-[250px]">
                        <p className="py-4 h-60 ">
                            We envision a dynamic platform for seamless exploration and comparison of
                            diverse opportunities, empowering investors with robust analytics.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-20 '>
                    <div className="max-w-[250px] h-[120px] bg-bottom">
                        <div className="relative flex items-center justify-center AboutCard">
                            <img src={BlurBuilding} className="w-[100%] h-[100%] rounded-t-lg" alt="" />
                            <p className='text-white absolute m-0 text-5xl CustomizeFontH'>Mission</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-b-lg p-4 px-6 w-[250px]">
                        <p className="py-4 h-60">
                            To empower investors with the tools and information needed to make
                            informed real estate investment decisions, while facilitating collaboration
                            and growth within the real estate funding industry.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-20 '>
                    <div className="max-w-[250px] h-[120px] bg-bottom">
                        <div className="relative flex items-center justify-center AboutCard">
                            <img src={BlurBuilding} className="w-[100%] h-[100%] rounded-t-lg" alt="" />
                            <p className='text-white absolute m-0 text-5xl CustomizeFontH'>Values</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-b-lg p-4 px-6 w-[250px]">
                        <p className='py-4 h-60'>We are committed to empowering individuals
                            by simplifying real estate investing with transparency, fostering trust
                            through clear information, and propelling innovation to redefine the
                            investment experience.
                        </p>
                    </div>
                </div>
            </div> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 vsm:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
                <div className='rounded-lg p-4 bg-white/20 backdrop-blur-[50px] border-[1px] border-[#9747FF]'>
                    <h2 className="text-xl font-semibold mb-2 ">Vision</h2>
                    <p className="text-justify">
                        We envision a dynamic platform for seamless exploration and comparison of
                        diverse opportunities, empowering investors with robust analytics.
                    </p>
                </div>
                <div className="rounded-lg p-4 bg-white/20 backdrop-blur-[50px] border-[1px] border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2">Mission</h2>
                    <p className="text-justify">
                        To empower investors with the tools and information needed to make
                        informed real estate investment decisions, while facilitating collaboration
                        and growth within the real estate funding industry.
                    </p>
                </div>
                <div className="rounded-lg p-4 bg-white/20 backdrop-blur-[50px] border-[1px] border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2">Values</h2>
                    <p className='text-justify'>we are committed to empowering individuals by simplifying real estate investing with transparency, fostering trust through clear information, and propelling innovation to redefine the investment experience.</p>
                    {/* <div>
                        We are driven by the following values:
                        <br />
                        <span className="font-bold text-[#9747FF]"> <p>Comprehensive Search:</p> </span>
                        <p> Investors efficiently find real estate opportunities from diverse companies in one place. </p> <br />
                        <span className="font-bold text-[#9747FF]"> <p>Comparison Tools:</p> </span>
                        <p> Robust analytics enable investors to evaluate and compare investment options. </p> <br />
                        <span className="font-bold text-[#9747FF]">Network Building:</span>
                        <p>  Real estate funding companies gain visibility, expanding their network for project funding. </p> <br />
                    </div> */}
      {/* </div>
            </div >  */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 vsm:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
                <div className="p-4 AboutCard border border-1 border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2 ">Vision</h2>
                    <p className="">
                        We envision a dynamic platform for seamless exploration and comparison of
                        diverse opportunities, empowering investors with robust analytics.
                    </p>
                </div>
                <div className="p-4 AboutCard border border-1 border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2">Mission</h2>
                    <p className="">
                        To empower investors with the tools and information needed to make
                        informed real estate investment decisions, while facilitating collaboration
                        and growth within the real estate funding industry.
                    </p>
                </div>
                <div className="p-4 AboutCard border border-1 border-[#9747FF]">
                    <h2 className="text-xl font-semibold mb-2">Values</h2>
                    <div>
                        We are driven by the following values:
                        <br />
                        <span className="font-bold text-[#9747FF]"> <p>Comprehensive Search:</p> </span>
                        <p> Investors efficiently find real estate opportunities from diverse companies in one place. </p> <br />
                        <span className="font-bold text-[#9747FF]"> <p>Comparison Tools:</p> </span>
                        <p> Robust analytics enable investors to evaluate and compare investment options. </p> <br />
                        <span className="font-bold text-[#9747FF]">Network Building:</span>
                        <p>  Real estate funding companies gain visibility, expanding their network for project funding. </p> <br />
                    </div>
                </div>
            </div> */}
    </div>
  );
}

export default AboutUs;
