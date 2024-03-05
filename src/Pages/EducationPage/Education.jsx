import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1440 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1440, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const ButtonGroup = ({ next, previous }) => {
    return (
        <div className="">
            <div className="carousel-button-group">
                <button className='absolute vsm:left-2 md:left-12 z-10'
                    style={{
                        top: "50%",
                        transform: "translateY(-50%)",
                        padding: "15px 15px",
                        backgroundColor: "rgba(104, 104, 104, 0.703)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer"
                    }}
                    onClick={() => previous()}>
                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#E2E2E2" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                </button>
                <button className="absolute vsm:right-2 md:right-12 z-10"
                    style={{
                        top: "50%",
                        transform: "translateY(-50%)",
                        padding: "15px 15px",
                        backgroundColor: "rgba(104, 104, 104, 0.703)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer"
                    }} onClick={() => next()}>
                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#E2E2E2" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                </button>
            </div >
        </div>
    );
};

const ArticleData = [
    {
        title: 'How to Invest in Real Estate',
        desc: 'Learn the basics of real estate investing and how to get started.',

    },
    {
        title: 'Understanding Private Equity',
        desc: 'Learn the ins and outs of private equity and how to make it work for you.',

    },
    {
        title: 'The Benefits of Alternative Investments',
        desc: 'Discover the advantages of alternative investments and how they can diversify your portfolio.',

    },
    {
        title: 'Maximizing Your Retirement Savings',
        desc: 'Learn tips and strategies for maximizing your retirement savings and achieving your financial goals.',

    },
    {
        title: 'The Importance of Estate Planning',
        desc: 'Understand the importance of estate planning and how to create a plan that protects your assets and loved ones.',

    },
    {
        title: 'Navigating the Stock Market',
        desc: 'Get a crash course in stock market investing and learn how to make informed decisions.',

    },

]

const EducationData = [
    {
        title: 'Q4 Founder Thoughts',
        content: 'Q4 2023 Letter from the Chief Investment Officer As 2024 approaches, our conviction in the strength of private markets remains strong as we see compelling opportunities across the universe of alternatives.',
        date: '3 months ago',
    },
    {
        title: 'LynkInfinite Founder Thoughts',
        content: 'Our thesis for the acquisition of Cadre',
        date: '3 months ago',
    },
    {
        title: 'Q4 Founder Thoughts',
        content:
            'Q4 2023 Letter from the Chief Investment Officer As 2024 approaches, our conviction in the strength of private markets remains strong as we see compelling opportunities across the universe of alternatives.',
        date: '3 months ago',
    },
    {
        title: 'Q4 Founder Thoughts',
        content: 'Q4 2023 Letter from the Chief Investment Officer As 2024 approaches, our conviction in the strength of private markets remains strong as we see compelling opportunities across the universe of alternatives.',
        date: '3 months ago',
    },
    // Add more data objects here...
];

const Card = ({ title, content, date }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
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
        Type: "Article",
    },
    {
        ImageSrc: "https://slidemodel.com/wp-content/uploads/8165-01-education-word-cloud-picture-1.jpg",
        Type: "Education",
    },
    {
        ImageSrc: "https://st.depositphotos.com/1001877/4879/i/450/depositphotos_48796089-stock-photo-news-concept-newspaper-sphere-three.jpg",
        Type: "News",
    },
    {
        ImageSrc: "https://sasahost.ke/zetu_files/2020/08/keywords-and-research-sasahost.png",
        Type: "Keywords",
    },
]

const Education = () => {
    const description = "According to the survey released on Tuesday, March 5, at the 17th edition of the FICCI Real Estate Summit, there was a 7 per cent increase in investors considering residential real estate as a viable investment option, with 36 per cent of expected buyers viewing properties as an investment option in the latter half of 2023. The Indian real estate industry has experienced a significant positive shift in homebuyer sentiment and investment during the second half of 2023, as per a recent survey conducted by trade body FICCI and real estate consultant Anarock.";
    const shortDescription = description.substring(0, 450) + '... see more';

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl text-black pb-6 flex justify-center CustomizeFontH ">Education Page</h1>
            <div className="grid grid-cols-2 gap-6">
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
                            <img src={data.ImageSrc} className='w-60 h-40 rounded-lg ' alt="" />
                            <p className='flex items-center justify-center uppercase CustomizeFontH text-3xl text-white'>{data.Type}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pt-8">
                <h1 className="text-4xl text-black pb-6 flex justify-center CustomizeFontH">Articles</h1>
                <div className="">
                    <Carousel swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        customTransition="transform 1500ms linear"
                        // transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                        customButtonGroup={<ButtonGroup />}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">
                        {ArticleData.map((article, index) => (
                            <article key={index} className="bg-white shadow-md rounded-md p-6 mx-8 mb-8 h-[250px]">
                                <h2 className="text-2xl font-bold text-gray-800">{article.title}</h2>
                                <p className="text-gray-600">{article.desc}</p>
                                <a href="#" className="text-blue-600 hover:underline">Read More</a>
                            </article>

                        ))}

                    </Carousel>;
                </div>
            </div>
            <div className="py-8">
                <h1 className="text-4xl text-black pb-6 flex justify-center CustomizeFontH">Education</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {EducationData.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;