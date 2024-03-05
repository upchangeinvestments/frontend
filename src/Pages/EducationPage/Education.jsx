import React from 'react';

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

const data = [
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
        desc: "Our thesis for the acquisition od cadre"
    },
    {
        ImageSrc: "https://slidemodel.com/wp-content/uploads/8165-01-education-word-cloud-picture-1.jpg",
        Type: "Education",
        desc: "Our thesis for the acquisition od cadre"
    },
    {
        ImageSrc: "https://st.depositphotos.com/1001877/4879/i/450/depositphotos_48796089-stock-photo-news-concept-newspaper-sphere-three.jpg",
        Type: "News",
        desc: "Our thesis for the acquisition od cadre"
    },
    {
        ImageSrc: "https://sasahost.ke/zetu_files/2020/08/keywords-and-research-sasahost.png",
        Type: "Keywords",
        desc: "Our thesis for the acquisition od cadre"
    },
]

const Education = () => {
    const description = "According to the survey released on Tuesday, March 5, at the 17th edition of the FICCI Real Estate Summit, there was a 7 per cent increase in investors considering residential real estate as a viable investment option, with 36 per cent of expected buyers viewing properties as an investment option in the latter half of 2023. The Indian real estate industry has experienced a significant positive shift in homebuyer sentiment and investment during the second half of 2023, as per a recent survey conducted by trade body FICCI and real estate consultant Anarock.";
    const shortDescription = description.substring(0, 450) + '... see more';

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h1 className="text-4xl font-bold text-gray-800 py-12 flex justify-center">EducationPage</h1>
            <div className="grid grid-cols-2 my-6 gap-6">
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
                        <div key={index} className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-xl p-4 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <div className="">
                                <img src={data.ImageSrc} className='w-60 h-40 rounded-lg ' alt="" />
                            </div>
                            <div className="my-4 ">
                                <p className='flex items-center justify-center uppercase montserrat-Stretch'>{data.Type}</p>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-8">
                <h1 className="text-4xl font-bold text-gray-800 pb-6 flex justify-center">Articles</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ArticleData.map((article, index) => (
                        <article key={index} className="bg-white shadow-md rounded-md p-6">
                            <h2 className="text-2xl font-bold text-gray-800">{article.title}</h2>
                            <p className="text-gray-600">{article.desc}</p>
                            <a href="#" className="text-blue-600 hover:underline">Read More</a>
                        </article>

                    ))}
                </div>
            </div>
            <div className="py-8">
                <h1 className="text-4xl font-bold text-gray-800 pb-6 flex justify-center">Education</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;