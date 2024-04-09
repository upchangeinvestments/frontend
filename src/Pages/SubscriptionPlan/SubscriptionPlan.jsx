import React from 'react';
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";
import SubscriptionForm from './SubscriptionForm';

function SubscriptionPlan() {
    return (
        <div className="">
            <div className="premiumMain">
                <Navbar />
                <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
                    <p className="uppercase font-['Playfair-Display'] text-white vsm:text-4xl md:text-5xl xl:text-6xl lg:-mt-[217px] lg:mr-[77px] xl:-mt-[430px] xl:mr-[167px] ">
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