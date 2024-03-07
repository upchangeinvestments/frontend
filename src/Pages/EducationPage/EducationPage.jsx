import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-grid-carousel'
import News from "./News"
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton"
import Education from "./Education"
import Footer from "../../commonComponents/Footer"
import NavBar from "../../commonComponents/NavBar"
import ArticleData from "../../assets/ArticlesEduPage.json"


const Card = ({ title, content, date }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mx-6 mb-4 h-[250px]">
            <div className="text-xl font-medium mb-2">{title}</div>
            <div className="text-gray-600 mb-4">{date}</div>
            <div className="text-gray-800">
                <p>{content}</p>
            </div>
        </div>
    );
};


const MainData = [
    {
        ImageSrc: "https://thumbs.dreamstime.com/b/articles-complex-like-puzzle-pictured-as-word-pieces-to-show-can-be-difficult-needs-cooperating-fit-together-d-164200470.jpg",
        Type: "Articles",
    },
    {
        ImageSrc: "https://slidemodel.com/wp-content/uploads/8165-01-education-word-cloud-picture-1.jpg",
        Type: "Education",
    },
    {
        ImageSrc: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Type: "News",
    },
    {
        ImageSrc: "https://sasahost.ke/zetu_files/2020/08/keywords-and-research-sasahost.png",
        Type: "Keywords",
    },
]


function EducationPage() {
    const description = "According to the survey released on Tuesday, March 5, at the 17th edition of the FICCI Real Estate Summit, there was a 7 per cent increase in investors considering residential real estate as a viable investment option, with 36 per cent of expected buyers viewing properties as an investment option in the latter half of 2023. The Indian real estate industry has experienced a significant positive shift in homebuyer sentiment and investment during the second half of 2023, as per a recent survey conducted by trade body FICCI and real estate consultant Anarock.";
    const shortDescription = description.substring(0, 300) + '... see more';

    return (
        <div className="main vsm:w-[125vw] md:w-[107vw] lg:w-[100%] vsm:h-[130vh] md:h-[110vh] lg:h-[100vh]">
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 vsm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl text-white pb-6 flex justify-center CustomizeFontH ">Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col pt-1">
                        <img className='rounded-t-lg' src="https://i.pinimg.com/564x/11/91/c2/1191c215e4e5d4f9deb3bfbe544313c2.jpg" alt="Real-Estate Investment" />
                        <div className="p-4 bg-white/30 backdrop-blur-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-b-lg">
                            <p className='text-xs uppercase montserrat-Stretch mb-2'>Time to invest</p>
                            <p className='font-semibold hover:underline montserrat-Stretch mb-2'>7% rise in investors in residential properties in second half of 2023 </p>
                            <p className='text-sm'>{shortDescription}</p>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {MainData.map((data, index) => (
                            <div key={index} className="py-8 flex flex-col items-center justify-between bg-white/20 backdrop-blur-xl rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <img src={data.ImageSrc} className='w-[150px] h-[130px] lg:w-60 lg:h-40 rounded-lg ' alt="" />
                                <p className='flex items-center justify-center uppercase CustomizeFontH text-3xl text-[#9747FF] vsm:mt-4 md:mt-0'>{data.Type}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-8">
                    {/* <h1 className="text-4xl text-white pb-6 flex justify-center CustomizeFontH">Education</h1> */}
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
                    <h1 className="text-4xl text-white pb-6 flex justify-center CustomizeFontH">Articles</h1>
                    <div className="">
                        <Carousel cols={2} rows={1} gap={10} arrowLeft={<LeftArrow dir="left" />} arrowRight={<RightArrow dir="left" />} loop>
                            {ArticleData.map((article, index) => (
                                <Carousel.Item key={index} >
                                    <div className="bg-white/20 backdrop-blur-xl shadow-md rounded-md p-6 mx-2 lg:mx-8 mb-4 vsm:h-[250px] md:h-[300px] lg:h-[250px]">
                                        <h2 className="text-lg font-semibold text-gray-800 text-left ">{article.title}</h2>
                                        <div className="mt-2">
                                            <p className="text-black md:hidden">{article.desc.length > 75 ? `${article.desc.substring(0, 65)}...` : article.desc}</p>
                                            <p className="text-black vsm:hidden md:block">{article.desc}</p>
                                        </div>
                                        <div className="mt-4">
                                            <Link to={article.url} target="_blank" className="text-[#9747FF] hover:underline ">Read More</Link>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className="py-8">
                    <h1 className="text-4xl text-white pb-6 flex justify-center CustomizeFontH">News</h1>
                    <News />
                </div>
            </div >
            <Footer />
        </div >
    )
}

export default EducationPage