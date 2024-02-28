import React from 'react';
import AboutUs from './AboutUs';
import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css"


function AboutUsPage() {
    return (
        <div className="">
            <div className='aboutMain text-white'>
                <Navbar />
                <div className="h-[49vh] flex items-center justify-center">
                    <p className='uppercase text-white font-bold vsm:text-2xl md:text-5xl mt-[12px]'>ABOUT US</p>
                </div>
                <div className="bg-white/20 backdrop-blur-xl p-2 absolute bottom-0 w-full">
                    <div className="flex vsm:flex-col md:flex-row items-center justify-center mx-auto vsm:w-[100%] md:w-[60%]">
                        <div className="flex basis-1/2 items-center justify-center">
                            <h2 className="text-2xl font-semibold flex items-center justify-center vsm:mb-4 md:mb-0 uppercase">Company at a glance</h2>
                        </div>
                        <div className="basis-1/2 flex items-center justify-center text-white gap-x-16">
                            <div className="">
                                <p className="text-sm font-medium md:mb-2">Founded</p>
                                <p className="text-lg">2024</p>
                            </div>
                            <div className="">
                                <p className="text-sm font-medium md:mb-2">Founder</p>
                                <p className="text-lg">Lipika Sharma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
            <Footer />
        </div>
    )
}

export default AboutUsPage