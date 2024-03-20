import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-grid-carousel";
import News from "./News";
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton";
import Education from "./Education";
import Footer from "../../commonComponents/Footer";
import NavBar from "../../commonComponents/NavBar";
import ArticleData from "../../assets/ArticlesEduPage.json";

const MainData = [
  {
    ImageSrc: "https://i.postimg.cc/y60sd0pQ/article-removebg-preview.png",
    Type: "Article",
  },
  {
    ImageSrc: "https://i.postimg.cc/4x2TMPnd/education-removebg-preview.png",
    Type: "Education",
  },
  {
    ImageSrc: "https://i.postimg.cc/0yCm0fSL/news.jpg",
    Type: "News",
  },
  {
    ImageSrc: "https://i.postimg.cc/d3p1B7Qk/keywords.jpg",
    Type: "Keywords",
  },
];

function EducationPage() {
  const description =
    "According to the survey released on Tuesday, March 5, at the 17th edition of the FICCI Real Estate Summit, there was a 7 per cent increase in investors considering residential real estate as a viable investment option, with 36 per cent of expected buyers viewing properties as an investment option in the latter half of 2023. The Indian real estate industry has experienced a significant positive shift in homebuyer sentiment and investment during the second half of 2023, as per a recent survey conducted by trade body FICCI and real estate consultant Anarock.";
  const shortDescription = description.substring(0, 150) + "... see more";

  return (
    <div className="main vsm:w-[125vw] md:w-[107vw] lg:w-[100%] vsm:h-[130vh] md:h-[110vh] lg:h-[100vh]">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 vsm:px-6 lg:px-8 py-8">
        <h1 className="text-5xl my-[20px] text-white pb-6 flex justify-center font-['Playfair-Display'] ">
          RESOURCES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col pt-1 bg-white/30 backdrop-blur-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg">
            <div className="flex items-center justify-center bg-[url('https://i.pinimg.com/564x/11/91/c2/1191c215e4e5d4f9deb3bfbe544313c2.jpg')] w-[450px] h-[200px] mx-auto mt-4 rounded-lg"></div>
            <div className="p-4">
              <p className="text-xs uppercase font-['Playfair-Display'] mb-2">
                Time to invest
              </p>
              <p className="font-semibold hover:underline font-['Playfair-Display'] mb-2">
                7% rise in investors in residential properties in second half of
                2023
              </p>
              <p className="text-sm">{shortDescription}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {MainData.map((data, index) => (
              <div
                key={index}
                className="py-8 flex flex-col items-center justify-center bg-white/20 backdrop-blur-xl rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
              >
                <div className="lg:w-[220px]  lg:h-[100px] flex justify-center items-center border-2 border-[#6e30a7]">
                  <p className="flex items-center justify-center uppercase font-['Playfair-Display'] text-3xl  text-[#6e30a7] vsm:mt-4 md:mt-0">
                    {data.Type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8">
          <h1 className="text-4xl my-[20px] text-white pb-6 flex justify-center font-['Playfair-Display']">
            EDUCATION
          </h1>
          <Education />
          {/* <div className="">
                        <Carousel cols={3} rows={1} gap={10} arrowLeft={<LeftArrow dir="right" />} arrowRight={<RightArrow dir="right" />} loop>
                            {EducationData.map((item, index) => (
                                <Carousel.Item key={index} className="">
                                    <Card {...item} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div> */}
        </div>
        <div className="pt-8">
          <h1 className="text-4xl my-[20px] text-white pb-6 flex justify-center font-['Playfair-Display']">
            ARTICLES
          </h1>
          <div className="">
            <Carousel
              cols={2}
              rows={1}
              gap={10}
              arrowLeft={<LeftArrow dir="left" />}
              arrowRight={<RightArrow dir="left" />}
              loop
            >
              {ArticleData.map((article, index) => (
                <Carousel.Item key={index}>
                  <div className="bg-white/20 backdrop-blur-xl font-['Playfair-Display']  shadow-md rounded-md p-6 mx-2 lg:mx-8 mb-4 vsm:h-[300px] lg:h-[250px]">
                    <h2 className="text-lg font-semibold text-gray-800 text-left ">
                      {article.title}
                    </h2>
                    <div className="mt-2">
                      <p className="text-black md:hidden">
                        {article.desc.length > 175
                          ? `${article.desc.substring(0, 165)}...`
                          : article.desc}
                      </p>
                      <p className="text-black vsm:hidden md:block">
                        {article.desc.length > 210
                          ? `${article.desc.substring(0, 200)}...`
                          : article.desc}
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link
                        to={article.url}
                        target="_blank"
                        className="text-[#6e30a7] hover:underline "
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="py-8">
          <h1 className="text-4xl my-[20px] text-white  pb-6 flex justify-center font-['Playfair-Display']">
            NEWS
          </h1>
          <News />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EducationPage;
