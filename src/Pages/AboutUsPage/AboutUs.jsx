import React from "react";
import Lipika_mam from "../../assets/founder2.jpg";
import { ImQuotesLeft } from "react-icons/im";
import BlurBuilding from "../../assets/Building_blur-md.jpg";
import logo from "../../assets/logo2.png";
import video from "../../assets/introVideo.mp4";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

function AboutUs() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-r from-purple-300 to-pink-200 lg:mb-0 lg:-mt-[240px] xl:-mt-[300px]">
      <div className="vsm:flex vsm:items-center justify-center vsm:flex-col md:flex  md:flex-row md:mt-2 xl:mt-8 relative">
        <div class="vsm:h-[700px] vsm:w-[280px]  vsm:mt-[30px] msm:w-[300px]   sm:w-[350px] md:w-[180px] md:h-[980px]  md:ml-[25px] md:mt-[50px] lg:ml-[60px] lg:mt-[50px] lg:w-[280px] lg:h-[1000px] xl:ml-[60px] xl:mt-[50px] xl:w-[280px] xl:h-[840px]  bg-gradient-to-r from-[#6e30a7] to-purple-300 backdrop-blur-xl bottom-0 flex flex-col  items-center rounded-lg font-['Playfair-Display'] rounded-t-full">
          <div
            className="vsm:w-[150px] vsm:h-[150px] vsm:mt-[50px] md:w-[120px] md:h-[120px] md:mt-[30px] lg:w-[200px] lg:h-[200px] lg:mt-[30px] border-2 border-yellow-500 rounded-full bg-center bg-cover"
            style={{ backgroundImage: `url(${Lipika_mam})` }}
          ></div>
          <div class="text-center">
            <h2 class="vsm:mt-[30px] vsm:text-[20px] vsm:mb-[30px] md:mt-[70px] md:text-[20px] md:mb-[50px] lg:text-[22px] text-white font-semibold lg:mt-[60px] lg:mb-[50px] uppercase">
              Company at a glance
            </h2>
            <div class="flex flex-col items-center">
              <div>
                <p class="vsm:text-[19px] md:text-[18px] lg:text-[20px] text-white font-medium md:mb-[20px] lg:mb-[15px]">
                  FOUNDER
                </p>
                <p class="vsm:text-[20px] vsm:mb-[10px] md:text-[19px] md:mb-[21px] lg:text-[21px] font-medium lg:mb-[15px]">
                  LIPIKA SHARMA
                </p>
              </div>
              <div class="mb-4">
                <p class="vsm:text-[19px] md:text-[18px] lg:text-[20px] text-white font-medium md:mb-[20px] lg:mb-[15px]">
                  FOUNDED
                </p>
                <p class="vsm:text-[20px] md:text-[19px] md:mb-[50px] lg:text-[21px] font-medium lg:mb-[50px] xl:mb-[30px]">
                  2024
                </p>
              </div>
              <div className="vsm:mt-[30px] sm:mt-0 ml-[15px]  lg:mt-[30px] xl:mt-[20px]">
                <video
                  className="rounded-xl w-[95%]"
                  src={video}
                  autoPlay
                  controls
                  loop
                  muted
                ></video>
              </div>
            </div>
          </div>
        </div>
        <div className="vsm:p-4 vsm:w-[90%] md:ml-4 vsm:mt-[30px] md:w-[68%]  md:p-8 md:mt-[50px] lg:p-6 lg:w-[60%] lg:ml-[40px] xl:p-4 xl:ml-[50px] lg:mt-[50px] xl:mt-[50px]  bg-white/20 shadow-2xl shadow-purle-500/50 font-['Playfair-Display'] rounded-lg backdrop-blur-xl relative ">
          <div className="absolute -top-5 left-0">
            <ImQuotesLeft color="gray" size="50px" className="opacity-[0.2]" />
          </div>
          <div className="vsm:ml-10 vsm:text-2xl vsm:mt-6 msm:ml-12  msm:text-3xl sm:text-3xl sm:ml-16 sm:mt-6 md:text-4xl md:ml-[85px] lg:text-4xl lg:text-center lg:ml-0  lg:mt-4 xl:text-5xl xl:mt-12">
            Words from <span className="text-purple-700"> CEO </span>
          </div>
          <div className="flex items-center justify-center text-2xl vsm:mt-8 msm:mt-6 sm:mt-6 md:mt-8">
            <img
              className="vsm:w-[60%] vsm:mb-6 msm:w[40%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[30%]"
              src={logo}
              alt="Infinite Investments"
            />
          </div>
          <p className="flex items-center justify-center text-justify vsm:text-[17px] md:text-[17px] lg:text-[20px] vsm:px-4 vsm:mb-6 md:p-4 xl:px-8  lg:mr-0">
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

      <div className="vsm:mb-[30px] md:mb-[50px] lg:mb-[50px]">
        <h2 className="vsm:text-[22px] md:text-[26px] lg:text-[32px] font-bold md:mt-12 lg:mt-12 text-center font-['Playfair-Display'] my-8 uppercase text-[#6e30a7]">
          Modern Real Estate Investment solutions
        </h2>

        <div className="flex flex-wrap md:gap-6 lg:gap-x-12 xl:gap-x-12 items-center font-['Playfair-Display'] justify-center w-full">
          <Card className="lg:my-6 border-2 border-[#6e30a7] vsm:w-[250px] vsm:mt-8 md:mt-[10px] md:w-[200px] lg:w-[250px] ">
            <CardHeader className="relative flex md:flex items-center justify-center -mt-6">
              <img
                className="w-[100%] h-[100%]"
                src={BlurBuilding}
                alt="card"
              />
              <p className="text-white absolute m-0  vsm:text-4xl md:text-3xl lg:text-5xl ">
                VISION
              </p>
            </CardHeader>
            <CardBody>
              <p className="lg:my-6 vsm:h-60 vsm:py-4 md:h-[320px]  lg:py-4   lg:h-60 text-base">
                We envision a dynamic platform for seamless exploration and
                comparison of diverse opportunities, empowering investors with
                robust analytics.
              </p>
            </CardBody>
          </Card>
          <Card className="border-2 border-[#6e30a7] vsm:mt-12 vsm:w-[250px] md:w-[200px] md:mt-[10px] lg:w-[250px]">
            <CardHeader className="relative flex items-center justify-center">
              <img
                className="w-[100%] h-[100%]"
                src={BlurBuilding}
                alt="card"
              />
              <p className="text-white absolute m-0 vsm:text-4xl md:text-3xl lg:text-5xl ">
                MISSION
              </p>
            </CardHeader>
            <CardBody>
              <p className="lg:my-6 vsm:h-60 vsm:py-4 md:h-[320px]  lg:py-4 lg:h-60 text-base">
                To empower investors with the tools and information needed to
                make informed real estate investment decisions, while
                facilitating collaboration and growth within the real estate
                funding industry.
              </p>
            </CardBody>
          </Card>
          <Card className="vsm:mt-12 border-2 border-[#6e30a7] vsm:w-[250px] md:w-[200px] md:mt-[10px] lg:w-[250px]">
            <CardHeader className="relative flex items-center justify-center">
              <img
                className="w-[100%] h-[100%]"
                src={BlurBuilding}
                alt="card"
              />
              <p className="text-white absolute m-0 vsm:text-4xl md:text-3xl lg:text-5xl">
                VALUES
              </p>
            </CardHeader>
            <CardBody>
              <p className="lg:my-6 vsm:h-60 vsm:py-4 md:h-[320px] lg:py-4  lg:h-60  text-base">
                We are committed to empowering individuals by simplifying real
                estate investing with transparency, fostering trust through
                clear information, and propelling innovation to redefine the
                investment experience.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
