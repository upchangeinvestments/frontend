import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function SubscriptionCard() {
    return (

        <div className="flex items-center justify-center">
            <div className="my-8">
                <h1 className="text-3xl flex items-center justify-center montserrat-Stretch mb-8">CHOOSE YOUR PLAN</h1>
                <div className="grid vsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border-[1px] border-[#9747FF] bg-[#faf2fa] rounded-3xl text-xl shadow p-6 premiumCard hover:transition-all hover:duration-300 hover:ease-in hover:transform hover:scale-105">
                        <h2 className="text-xl font-bold mb-2 montserrat-Stretch text-[#9747FF]">STANDARD</h2>
                        <div className="my-6 pricingText">
                            <p className='text-center text-4xl'>$549</p>
                            <p className='text-center text-base'>per month</p>
                        </div>
                        <div className="pr-4 " style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <ul className=''>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>Unlimited Access</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>Limited Users</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>No Monthly Fees</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>Up to 100 Projects</p>
                                </li>
                            </ul>
                            <ul className='text-[#565859]'>
                                <li className='flex items-center gap-4'>
                                    <div className=""><RxCross2 className='text-[#a97de3]' /></div>
                                    <p>Priority Support</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><RxCross2 className='text-[#a97de3]' /></div>
                                    <p>Value for Money</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><RxCross2 className='text-[#a97de3]' /></div>
                                    <p>Unlimited Storage</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><RxCross2 className='text-[#a97de3]' /></div>
                                    <p>Live Meeting</p>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full mt-2 py-2 public-sans-Stretch text-black">SELECT</button>
                    </div>
                    <div className="border-[1px] border-[#9747FF] bg-[#9747FF] rounded-3xl text-xl shadow p-6 text-[#e3e3e3] premiumCard hover:transition-all hover:duration-300 hover:ease-in hover:transform hover:scale-105">
                        <h2 className="text-xl font-bold mb-2 montserrat-Stretch ">BUSINESS</h2>
                        <div className="my-6 pricingText">
                            <p className='text-center text-4xl' >$795</p>
                            <p className='text-center text-base'>per month</p>
                        </div>
                        <div className="pr-4 " style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <ul className=''>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='' /></div>
                                    <p>Unlimited Access</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='' /></div>
                                    <p>Unlimited Users</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='' /></div>
                                    <p>No Monthly Fees</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='' /></div>
                                    <p>Priority Support</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='' /></div>
                                    <p>Value for Money</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='' /></div>
                                    <p>Unlimited Storage</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='' /></div>
                                    <p>Live Meeting</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='' /></div>
                                    <p>Unlimited Projects</p>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full mt-2 py-2 public-sans-Stretch text-black">SELECT</button>
                    </div>
                    <div className="bg-[#faf2fa] border-[1px] border-[#9747FF] rounded-3xl text-xl shadow p-6 premiumCard hover:transition-all hover:duration-300 hover:ease-in hover:transform hover:scale-105">
                        <h2 className="text-xl font-bold mb-2 montserrat-Stretch text-[#fd603a]">ENTERPRISE</h2>
                        <div className="my-6 pricingText">
                            <p className='text-center text-4xl'>$1495</p>
                            <p className='text-center text-base'>per month</p>
                        </div>
                        <div className="pr-4 " style={{ fontFamily: "Montserrat, sans-serif" }}>
                            <ul className=''>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>Unlimited Access</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>Limited Users</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>No Monthly Fees</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>Priority Support</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>Value for Money</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><FaCheck className='text-[#9747FF]' /></div>
                                    <p>Up to 150 Projects</p>
                                </li>
                            </ul>
                            <ul className='text-[#565859]'>
                                <li className='flex items-center gap-4'>
                                    <div className=""><RxCross2 className='text-[#a97de3]' /></div>
                                    <p>Unlimited Storage</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <div className=""><RxCross2 className='text-[#a97de3]' /></div>
                                    <p>Live Meeting</p>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full mt-2 py-2 public-sans-Stretch text-black">SELECT</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SubscriptionCard;