import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from "react-router-dom";
import ArticleData from "../../assets/ArticlesEduPage.json";
import Footer from "../../commonComponents/Footer";
import NavBar from "../../commonComponents/NavBar";

function Articles() {
    const { articleId } = useParams();

    return (
        <div className="">
            <Helmet>
                <title>Articles</title>
                <meta name="description" content="Real Estate listed projects website" />
                <link rel="canonical" href="/article/:articleId" />
            </Helmet>
            <div className="categoryMain">
                <NavBar />
                <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
                    <p className="uppercase font-['Playfair-Display'] lg:text-5xl xl:text-6xl text-white vsm:text-4xl md:text-5xl lg:-mt-[27%] mx-auto lg:ml-[60%]">
                        Articles
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center mb-16">
                <div className="max-w-6xl bg-white/20 shadow-2xl shadow-purle-500/50 font-['Playfair-Display'] rounded-lg backdrop-blur-xl relative px-8 py-10 vsm:w-[90%] -mt-56 md:-mt-60 lg:-mt-52 xl:-mt-64 " dangerouslySetInnerHTML={{ __html: ArticleData[articleId].content }} />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default Articles