import React, { useState } from 'react';
import NavBar from "../../commonComponents/NavBar";
import SearchBox from '../../commonComponents/SearchBox';
import "../../styles/CategoryPage/categoryPage.css";
import { PiMapPinLineBold } from "react-icons/pi";
import Button from "../../commonComponents/LoginButton";
import MaterialUIAccordion from './Accordion';
import Footer from "../../commonComponents/Footer";

const Progressbar = ({ val }) => {
    const width = `${Math.min(Math.max(0, val), 100)}%`;

    return (
        <div className="bg-[#f9f7f4] flex w-full items-center rounded overflow-hidden">
            <div style={{ width: `${val}%` }} className="bg-[#9747ff] flex h-5 font-['Inter'] items-center justify-between pt-1 px-2 rounded" // Use dynamic width
            >
                <div className="text-xs font-bold text-white">FUNDED</div>
                <div className="text-xs font-bold text-white">{val}%</div>
            </div>
        </div>
    );
};
const OverViewContent = () => {
    return (
        <div className="">
            <p>Ardent Housing Fund II (AHF II) is a private real estate fund focused on generating above-average risk-adjusted returns through developing and operating rental housing in growing, undersupplied housing markets. AHFII has a fully identified pipeline of six assets</p>
            <p>The Fund’s primary focus is on development within the Southern United States, a region that is increasing in population up to 70% faster than the national average with consistently sub-4% unemployment rates. The strategic focus is on growing, undersupplied housing markets that have been capital-constrained even though their underlying population and job growth statistics are often similar to many primary markets. The General Partner has capitalized on this unsatisfied demand by pursuing projects in these markets and engaging experienced development partners through Ardent’s established relationships.</p>
        </div>
    )
}
const tabs = [
    { title: "Overview", content: <OverViewContent /> },
    { title: "Listed Company", content: 'content' },
    { title: "Business Plan", content: 'content' },
    { title: "Property", content: 'content' },
    { title: "Financials", content: 'content' },
    { title: "Documents", content: 'content' },
    { title: "Disclaimers", content: 'content' },
];


function PostPage() {
    const [activeTab, setActiveTab] = useState(0);
    const val = "71";
    return (
        <div className="">
            <div className='flex flex-col items-center justify-center'>
                <div className="PostPage bg-top w-[100%]">
                    <NavBar />
                    <div className="w-full bg-black/20">
                        <SearchBox />
                    </div>
                </div>
                <div className="md:w-[90%] xl:w-[70%] 2xl:max-w-7xl">
                    <div className="flex flex-col items-center justify-center w-full py-4">
                        <div className="flex items-center justify-center text-2xl">
                            <span className='CustomizeFontH border-r border-gray-600 pr-2'>Post title</span>
                            <span className='pl-2'>Residential property</span>
                        </div>
                        <span className='flex items-center'><PiMapPinLineBold /> Ardent Housing Fund II, LP</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex justify-evenly bg-[#D2BBF1] w-full">
                            {tabs.map((value, index) => (
                                <p className={`font-semibold p-4 cursor-default	${activeTab === index ? "border-b-4 border-[#9747ff] text-[#9747ff]" : ""}`} key={index} onClick={() => setActiveTab(index)}>{value.title}</p>
                            ))}
                        </div>
                        <div className="flex w-full bg-white/20 backdrop-blur-xl shadow-md shadow-black-400 rounded-lg">
                            <img className="w-[60%]" src="https://app.realtymogul.com/sites/default/files/styles/private_placement_gallery_thumbnail/public/rendering1.jpg?itok=m_QV1feH" alt="property image" />
                            <div className="flex flex-col w-[40%] items-center justify-center pb-4">
                                <div className="grid grid-cols-2 my-4 gap-x-4 ">
                                    <div className="flex flex-col items-center justify-center pb-4">
                                        <div className='bg-white/20 backdrop-blur-xl rounded-full p-4'><PiMapPinLineBold size="20" /></div>
                                        <p>10.00%</p>
                                        <p>High Rental Yield</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center pb-4">
                                        <div className='bg-white/20 backdrop-blur-xl rounded-full p-4'><PiMapPinLineBold size="20" /></div>
                                        <p>17.50%</p>
                                        <p>High Returns</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center pb-4">
                                        <div className='bg-white/20 backdrop-blur-xl rounded-full p-4'><PiMapPinLineBold size="20" /></div>
                                        <p>$10K</p>
                                        <p>Min Investments</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center py-4">
                                        <div className='bg-white/20 backdrop-blur-xl rounded-full p-4'><PiMapPinLineBold size="20" /></div>
                                        <p>Outer Ring Road</p>
                                        <p>Location</p>
                                    </div>
                                </div>
                                <div className="w-[60%] ">
                                    <Progressbar val={val} />
                                </div>
                                <div className="my-4">
                                    <Button link="#" Text="Invest" />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p>Questions?</p>
                                    <p>(877) 821-7943</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p className='text-gray-600 text-sm'>*Please carefully review all sections before investing your money</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[90%] xl:w-[70%] 2xl:max-w-7xl bg-white/40 backdrop-blur-xl rounded-lg my-6 shadow-md shadow-black-400 p-6">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`mb-4 ${activeTab === index ? "block" : "hidden"}`}
                        >
                            <h2 className='CustomizeFontH text-xl text-left'>{tab.title}</h2>
                            {tab.content}
                        </div>
                    ))}

                </div>
                <div className="md:w-[90%] xl:w-[70%] 2xl:max-w-7xl grid grid-cols-12">
                    <div className="col-span-9">

                    </div>
                    <div className="col-span-3 p-4 bg-white/40 backdrop-blur-xl rounded-lg shadow-md shadow-black-400 ">
                        <h2 className='CustomizeFontH text-xl'>Investment Highlights</h2>
                        <div className="px-4 ">
                            <p className='mb-1'>This is a rare opportunity to purchase 1,71,402 sf in a LEED Platinum building – Prestige Tech Platina on Outer Ring Road in Bangalore tenanted to a US-based company on a 9-year lease (7-year lock-in), at a price of ₹10,600 per sf implying a 10% yield and a 17.5% IRR.</p>
                            <p>Prestige Tech Platina is a LEED Platinum building on the main Outer Ring Road and is part of the larger Prestige Tech Park campus with MNC tenants like JP Morgan Chase, Adobe, Schneider Electric and Juniper Networks.</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-[90%] xl:w-[70%] 2xl:max-w-7xl grid grid-cols-12 gap-4 my-6">
                    <div className="col-span-4  bg-white/40 backdrop-blur-xl rounded-lg shadow-md shadow-black-400 p-4">
                        <h2 className='CustomizeFontH text-xl'>Location Highlights</h2>
                        <div className="px-4 ">
                            <p className='mb-1'>The Fund’s primary focus is on development within the Southern United States, a region that is increasing in population up to 70% faster than the national average with consistently sub-4% unemployment rates.</p>
                            <p>The strategic focus is on growing, undersupplied housing markets that have been capital-constrained even though their underlying population and job growth statistics are often similar to many primary markets. The General Partner has capitalized on this unsatisfied demand by pursuing projects in these markets and engaging experienced development partners through Ardent’s established relationships.</p>
                        </div>
                    </div>
                    <div className="col-span-8 p-4 bg-white/40 backdrop-blur-xl rounded-lg shadow-md shadow-black-400 ">
                        <h2 className='CustomizeFontH text-xl'>Location</h2>
                        <div className="flex items-start justify-center h-full">
                            <iframe className='h-[90%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.67344082994!2d-96.89670148459179!3d32.82055613767164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1710268840150!5m2!1sen!2sin" width="800" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <MaterialUIAccordion />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PostPage;