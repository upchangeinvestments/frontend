import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from "react-router-dom";
import ArticleData from "../../assets/ArticlesEduPage.json";
import Footer from "../../commonComponents/Footer";
import NavBar from "../../commonComponents/NavBar";

function Articles() {
    const { articleHeading } = useParams();
    const article = ArticleData.find(article => article.title === articleHeading);

    return (
        <div className="">
            <Helmet>
                <title>Articles</title>
                <meta name="description" content="Real Estate listed projects website" />
                <link rel="canonical" href="/article/:articleHeading" />
            </Helmet>
            <div className="categoryMain">
                <NavBar />
                <div className="h-[40vh] md:h-[70vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
                    <p className="uppercase font-['Playfair-Display'] font-bold lg:text-5xl xl:text-6xl text-black vsm:text-4xl md:text-5xl -mt-[60%] lg:-mt-[27%] mx-auto">
                        Articles
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center mb-16">
                <div className="max-w-6xl bg-white/20 text-white shadow-purle-500/50 font-['Playfair-Display'] rounded-lg backdrop-blur-xl relative px-8 py-10 vsm:w-[90%] -mt-56 md:-mt-60 lg:-mt-72 xl:-mt-88 shadow-lg bg-gradient-to-br from-[#1f0036] to-[#3b0a72]" dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default Articles