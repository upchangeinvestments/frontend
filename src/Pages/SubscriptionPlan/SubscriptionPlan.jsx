import React from 'react';
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";
import SubscriptionForm from './SubscriptionForm';
import { Helmet } from 'react-helmet-async';

function SubscriptionPlan() {
    return (
        <div className="">
            <Helmet>
                <title>Subscribe LynkInfinite Investments</title>
                <meta name="description" content="Real Estate listed projects website" />
                <link rel="canonical" href="/premium" />
            </Helmet>
            <div className="">
                <Navbar />
                <div className="lg:h-[70vh] xl:h-[65vh] FontLinikSans flex items-center justify-center relative flex-col">
                    <div className="flex flex-col justify-start items-center h-[90%] relative">
                        <p className="text-[2.5rem] md:text-[4rem] xl:text-[5rem] text-purple-600 uppercase text-shadow-xl"> Subscription </p>
                        <p className="text-black uppercase text-2xl md:text-2xl text-center font-semibold">Listing Inquiry Form</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <SubscriptionForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SubscriptionPlan