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
            <div className="premiumMain">
                <Navbar />
                <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
                    <p className="uppercase font-['Playfair-Display'] lg:text-5xl xl:text-6xl text-purple-600 vsm:text-4xl md:text-5xl lg:-mt-[27%] mx-auto lg:ml-[60%]">
                        Subscription
                    </p>
                </div>
            </div>
            <SubscriptionForm />
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default SubscriptionPlan