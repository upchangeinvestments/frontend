import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import Carousel from 'react-grid-carousel'
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton"

const NewsCard = ({ data, index }) => {
    return (
        <Link to={data.url} target="_blank" key={index} className="h-[300px] bg-white/20 backdrop-blur-xl rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center py-2 px-4 mb-4 mx-2 lg:mx-8 ">
            <img src={data.urlToImage} alt="Card image" className="w-[270px] h-[170px] rounded-lg " />
            <div className="p-4 hover:underline">
                <h3 className="text-base font-medium"> {data.title.length > 55 ? `${data.title.substring(0, 55)}...` : data.title}</h3>
                <div className="flex items-center justify-between text-black mt-2">
                    <p className="text-sm ">{data.source.name.length > 15 ? `${data.source.name.substring(0, 15)}...` : data.source.name}</p>
                    <p className="text-xs">{data.publishedAt.substring(0, 10)}</p>
                </div>
            </div>
        </Link>
    );
};
function News() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // https://rapidapi.com/apidojo/api/yahoo-finance1  -> API source
            try {
                // https://newsapi.org/s/us-business-news-api  -> new API source
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=44868c56642945f1b1149e540367a022');
                // console.log(response.data.articles);
                setNewsData(response.data.articles);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='relative'>
            <Carousel cols={3} rows={1} gap={10} arrowLeft={<LeftArrow dir="right" />} arrowRight={<RightArrow dir="right" />} loop>
                {newsData.map((data, index) => (
                    data.urlToImage && (
                        <Carousel.Item key={index} className="">
                            <NewsCard data={data} index={index} />
                        </Carousel.Item>
                    )
                ))}
            </Carousel>
        </div>
    )
}

export default News