import React from 'react';

const EducationData = [
    {
        title: "What are money market funds?",
        description: "Have excess cash in your checking account? Learn about this yielding cash management solution that can help protect your principal and maintain daily liquidity.",
        linkText: "Learn More",
        href: "#",
    },
    {
        title: "What are ETFs?",
        description: "Exchange-traded funds, or ETFs, have made investing easier and more accessible. Learn more about them.",
        linkText: "Learn More",
        href: "#",

    },
    {
        title: "A guide to investing in closed end funds",
        description: "Looking for greater flexibility in your investment strategy with higher potential income and return? Explore closed end funds at BlackRock.",
        linkText: "Learn More",
        href: "#",
    },
    {
        title: "What are mutual funds?",
        description: "Mutual funds for beginners: Learn about this easy way to invest in stocks, bonds, and other assets.",
        linkText: "Learn More",
        href: "#",

    },
    {
        title: "What are commodity funds?",
        description: "Explore the unique investment vehicle that lets you invest in commodities, or raw materials.",
        linkText: "Learn More",
        href: "#",
    },
]

const cardsData = [
    {
        title: "What is inflation?",
        description: "Is inflation a good or bad? Explore what it means.",
    },
    {
        title: "How to Invest?",
        description: "Learn why, when, and how to start investing your money.",
    },
];


function ServiceCard({ title, description }) {
    return (
        <div className="bg-white/20 backdrop-blur-xl rounded-lg shadow-md overflow-hidden text-center mx-8 p-4 border border-1 border-[#9747FF] flex flex-col ">
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="line-clamp-3">{description}</p>
            <button className="bg-[#9747FF] hover:bg-purple-700 text-white py-1 px-2 rounded mt-2 w-[50%] mx-auto">Learn More</button>
        </div>
    );
}

const Card = (props) => {
    return (
        <a href={props.data.href} className="block bg-white/20 backdrop-blur-xl shadow-md p-4 rounded-lg h-[200px] relative border border-1 border-[#9747FF]">
            <h2 className="text-lg font-semibold mb-2">{props.data.title}</h2>
            <p className="">{props.data.description}</p>
            <button className="bg-[#9747FF] hover:bg-purple-700 text-white py-1 px-2 rounded mt-2 absolute bottom-4">
                {props.data.linkText}
            </button>
        </a>
    );
};

const Education = () => {
    return (
        <div className="p-4 ">
            <div className="">
                <h1 className="text-xl font-semibold text-center mb-4 text-white">
                    Learn the basics
                </h1>
                <p className="mb-6 text-left text-white w-[70%] mx-auto">
                    Many people never start investing their money because they don’t understand things like qualified longevity annuity contracts – and to be honest, we can’t blame them. We are here to help demystify financial terminology and make investing easier for everyone.

                    At BlackRock, we strive to help more and more people achieve their financial goals and experience financial well-being.

                    If you’re new to the world of investing, start here and learn about why you should invest, how to get started, and improve your financial vocabulary.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cardsData.map((card, index) => (
                        <ServiceCard key={index} {...card} />
                    ))}
                </div>


            </div>
            <div className="my-6">
                <h1 className="text-xl font-semibold text-center mb-4 text-white">
                    Understand the different types of investment funds
                </h1>
                <p className="mb-6 text-left text-white w-[70%] mx-auto">
                    Learn about the different kinds of investment funds available to investors,
                    from cost-effective exchange-traded funds (ETFs) and index funds to actively
                    managed and offshore funds. Then you can start to develop an investment
                    strategy around your own personal goals and preferences.
                </p>
                <div className="flex flex-wrap">
                    {EducationData.map((data, index) => (
                        <div className="w-full md:w-1/3 p-2" key={index}>
                            <Card data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;