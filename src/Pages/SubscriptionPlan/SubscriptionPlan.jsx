import React from 'react';
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";
import SubscriptionForm from './SubscriptionForm';

function SubscriptionPlan() {
    return (
        <div className="">
            <div className="categoryMain -z-[10]">
                <Navbar />
                <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
                    <p className="uppercase font-['Playfair-Display'] text-white vsm:text-4xl md:text-5xl xl:text-6xl lg:-mt-[350px] lg:mr-[200px] xl:-mt-[430px] xl:mr-[250px] ">
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