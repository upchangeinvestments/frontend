import React from "react";
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import GoldenButton from "../../commonComponents/LoginButton";

function NotFoundPage() {

    return (
        <div className="">
            <Helmet>
                <title>About LynkInfinite Investments</title>
                <meta name="description" content="Real Estate listed projects website" />
                <link rel="canonical" href="/about" />
            </Helmet>
            <div className="flex flex-col items-center justify-center">
                <div className="w-[100%]">
                    <Navbar />
                    <div className="YesevaFont flex items-center justify-center relative">
                        <div className="flex justify-center items-start relative">
                            <div className="relative uppercase flex flex-col">
                                <p className="text-[3.5rem] md:text-[4.5rem] text-shadow-xl text-center">Page <span className="text-purple-600 uppercase">Not Found</span></p>
                                <p className="montserrat-Stretch text-9xl mt-4 text-center"> 404</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 relative">
                    <div className="my-4 flex items-center justify-center flex-col poppins-regular p-4 px-8 ">
                        <p className="text-lg text-center">The Page you requested could not be found</p>
                        <div className="my-8">
                            <Link to="/">
                                <GoldenButton Text="Go back to Home page" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div >
    );
}

export default NotFoundPage;
