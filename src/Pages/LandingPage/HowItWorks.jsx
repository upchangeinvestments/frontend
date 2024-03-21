import React, { useEffect } from "react";
import img2 from "../../assets/HowItWorks.png";
import Aos from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="grid vsm:grid-cols-1 md:grid-cols-2 my-8 vsm:mx-6 lg:mx-12 vsm:gap-8 lg:gap-20 vsm:mb-12">
      {/* data-aos="zoom-out-up" */}
      <div
        className="bg-white/20 backdrop-blur-sm rounded-lg flex flex-col justify-center items-center shadow-lg hover:shadow-xl pb-8"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="my-4 text-2xl font-['Playfair-Display']">
          What to expect?
        </div>
        <div className="flex flex-col font-['Playfair-Display'] items-center justify-center">
          <div className="w-[80%]">
            <p className="text-justify justify-self-center ">
              LynkInfinite Investments makes it easy for investors to access the
              real estate investment opportunities through a simple integrated
              platform.
            </p>
          </div>
          <div className="w-[80%] mt-2 mb-6 flex items-center justify-center ">
            {/* <Carousel showArrows={true} swipeable={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval="5000">
              <div>
                <img src={carousel1} />
                {/* <p className="legend">Legend 1</p> */}
            {/* </div>
              <div>
                <img src={carousel2} />
                {/* <p className="legend">Legend 2</p> */}
            {/* </div>
              <div> 
                <img src={carousel3} />
                {/* <p className="legend">Legend 3</p> */}
            {/* </div> 
            </Carousel> */}
            <img className="w-56" src={img2} alt="" />
          </div>
          <div className="w-[80%]">
            <p className="text-justify justify-self-center">
              Here you can tailor your investment strategy to align with your
              specific preferences, allowing for flexibility in choosing an
              investment range, preferred location, and selecting reputable
              investment firms. Customize your Return on Investment (ROI)
              expectations and other parameters to suit your individual
              requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col vsm:gap-y-4 md:gap-2 lg:gap-6 vsm:w-[95%] items-left justify-center">
        <div className="flex flex-row items-center gap-4">
          <div className="md:hidden">
            <svg
              className="SlideX h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="white"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </div>
          <div className="hidden md:block">
            <svg
              className="SlideX h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#6e30a7"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </div>
          <div className="z-40 font-['Playfair-Display']">
            <div className="text-2xl font-bold ">Explore</div>
            {/* <div className="text-lg	text-justify text-wrap	">You can browse through the available Alternative <span className="text-[#9747FF] font-bold"> Investment Opportunities </span> and set up a detailed call with <span className="text-[#9747FF] font-bold">firms</span> to further understand the product.</div> */}
            <div className="text-lg	text-justify text-wrap	">
              You can browse through the available{" "}
              <span className="text-[#6e30a7] font-bold">
                {" "}
                Investment Opportunities{" "}
              </span>{" "}
              that we offer and set up a detailed call with selected{" "}
              <span className="text-[#6e30a7] font-bold">firms</span> to further
              understand the product.
            </div>
          </div>
        </div>
        <hr className="" />
        <div className="flex flex-row items-center gap-4 ">
          <div className="">
            <svg
              className="FlipY h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#6e30a7"
                d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H160zM576 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM448 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm128 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM272 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM576 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-48-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
              />
            </svg>
          </div>
          <div className="font-['Playfair-Display']">
            <div className="text-2xl font-bold">Invest</div>
            <div className="text-lg	text-justify text-wrap	">
              Invest in our Vetted onboarded firms in the world of{" "}
              <span className="text-[#6e30a7] font-bold">Real Estate </span>{" "}
              based on your{" "}
              <span className="text-[#6e30a7] font-bold">Financial Goals</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-row items-center gap-4 overflow-y-hidden">
          <div className="md:hidden">
            <svg
              className="Move h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="white"
                d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 84c-11 0-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104c0-11-9-20-20-20zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z"
              />
            </svg>
          </div>
          <div className="hidden md:block">
            <svg
              className="Move h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#6e30a7"
                d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 84c-11 0-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104c0-11-9-20-20-20zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z"
              />
            </svg>
          </div>
          <div className="font-['Playfair-Display']">
            <div className="text-2xl font-bold">Strengthen Portfolio</div>
            <div className="text-lg	text-justify text-wrap	">
              Once <span className="text-[#6e30a7] font-bold">Invested</span>,
              you will receive your period/terms payout. Sit back and earn a
              stable passive income and watch your{" "}
              <span className="text-[#6e30a7] font-bold">portfolio grow</span>!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
