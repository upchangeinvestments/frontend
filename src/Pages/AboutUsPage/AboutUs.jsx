import React from "react";
import Lipika_mam from "../../assets/LS_Photo.png";
import { ImQuotesLeft } from "react-icons/im";
import BlurBuilding from "../../assets/Building_blur-md.jpg";
import logo from "../../assets/logo2.png";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

function AboutUs() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-r from-purple-300 to-pink-200 lg:mb-0 vsm:mb-12 md:mb-12">
      <div className="flex vsm:flex vsm:flex-col md:flex md:flex-row md:mt-2 lg:mt-8 relative">
        <div class="lg:ml-[120px] lg:mt-[50px] lg:w-[280px] lg:h-[680px] bg-purple-500 backdrop-blur-xl bottom-0 flex flex-col items-center rounded-lg rounded-t-full">
          <img
            className="lg:w-[200px] lg:h-[200px] lg:mt-[30px] rounded-full "
            src={Lipika_mam}
            alt="Lipika Sharma"
          />
          <div class="text-center">
            <h2 class="lg:text-[22px] text-white font-semibold lg:mt-[50px] lg:mb-4 uppercase">
              Company at a glance
            </h2>
            <div class="flex flex-col items-center">
              <div>
                <p class="lg:text-[18px] text-white font-medium mb-2">
                  Founder
                </p>
                <p class="lg:text-[20px] lg:mb-[15px]">Lipika Sharma</p>
              </div>
              <div class="mb-4">
                <p class="lg:text-[18px] text-white font-medium mb-2">
                  Founded
                </p>
                <p class="lg:text-[20px]">2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="vsm:p-4 vsm:w-[90%] vsm:ml-4 vsm:mt-16 md:w-[68%] md:p-8 md:px-10 lg:p-6 lg:w-[60%] lg:ml-[40px] xl:p-4 xl:ml-[80px] bg-white/20   rounded-lg backdrop-blur-xl relative ">
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
            <img className="w-[100%] h-[100%]" src={BlurBuilding} alt="card" />
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
            <img className="w-[100%] h-[100%]" src={BlurBuilding} alt="card" />
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
            <img className="w-[100%] h-[100%]" src={BlurBuilding} alt="card" />
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
    </div>
  );
}

export default AboutUs;
