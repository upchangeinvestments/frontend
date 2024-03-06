import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import Carousel from 'react-grid-carousel'
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton"

// const linkData = [
//     {
//         ImageSrc: "https://cdn.nwe.io/files/x/9d/af/47f0a1092be97b8555143d95b0f5.jpeg"
//     },
//     {
//         ImageSrc: "https://s.yimg.com/ny/api/res/1.2/HsSZKZHKg8JXIAtp0Je8Sg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/the-bergen-record/39a067a2905ce2a8e6b33ef82952b7c1"
//     },
//     {
//         ImageSrc: "https://s.yimg.com/ny/api/res/1.2/wfiy.tTm5ZlsK2idq.wn7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTQyMDtoPTExNjtjZj13ZWJw/https://media.zenfs.com/en/globenewswire.com/fc5498fa6f0f512585a02a4052963a3a"
//     },
//     {
//         ImageSrc: "https://bloximages.newyork1.vip.townnews.com/victoriaadvocate.com/content/tncms/assets/v3/editorial/6/d2/6d2b0104-43a9-5cd9-b9d4-f9e2b76c9a34/65ccc76b84040.image.jpg?resize=1200%2C479"
//     },
//     {
//         ImageSrc: "https://mma.prnewswire.com/media/965791/4511473/CB_Vertical_Stacked_Logo.jpg?p=distribution"
//     },
//     {
//         ImageSrc: "https://s.yimg.com/ny/api/res/1.2/c5b7LJqPJJA2Y1bG1EVdAA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTQyMDtoPTE3MTtjZj13ZWJw/https://media.zenfs.com/en/globenewswire.com/62ec3c694364e3068b9409435b0f83ea"
//     },
//     {
//         ImageSrc: "https://photos.zillowstatic.com/fp/620887b549a722be610cdc02db3f264c-cc_ft_1152.webp"
//     },
//     {
//         ImageSrc: "https://mma.prnewswire.com/media/2355578/420_Property_croped_Logo.jpg?p=facebook"
//     }
// ]

const NewsCard = ({ data, index }) => {
    return (
        <Link to={data.url} target="_blank" className="h-[300px] bg-white/20 backdrop-blur-xl rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center py-2 px-4 mb-4 mx-8 ">
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