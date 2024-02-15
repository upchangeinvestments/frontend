import React from 'react'
import NavBar from "../../commonComponents/NavBar"
import FAQ from "./FAQ";
import SubscriptionCard from './SubscriptionCard';
import Footer from "../../commonComponents/Footer";

function Subscriptption() {
    return (
        <div className="Subscription h-[100vh] overflow-y-scroll">
            <NavBar />
            <SubscriptionCard />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Subscriptption;