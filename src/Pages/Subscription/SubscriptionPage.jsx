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
            <FAQ class="bg-white/20 backdrop-blur-sm mb-24 vsm:p-12" />
            <Footer />
        </div>
    )
}

export default Subscriptption;