import React, { useState } from 'react';
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Faq from "../Subscription/FAQ";

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="container mx-auto md:px-12">
            <div className="block rounded-lg bg-gradient-to-b from-white/30  to-[#c7b3ee] bg-opacity-10 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-8 md:px-10 -mt-[100px] backdrop-blur-[30px]">
                <div className="flex flex-wrap text-black ">
                    <div className="vsm:mb-12 md:mb-0 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-7/12 xl:w-6/12 lg:px-6 flex flex-col items-center justify-center">
                        <form onSubmit={handleSubmit} className=" rounded md:px-8 pt-6 w-full">
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    rows='5'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-[#9747FF] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                                    type="submit"
                                >
                                    <FaTelegramPlane />
                                    <p className='ml-4'>Send Message</p>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="lg:w-5/12 xl:6/12 flex items-center justify-center lg:-mt-4">
                        <div className="flex flex-col w-full">
                            <div className="basis-1/3 relative">
                                <div className="absolute right-0 top-0 border border-black border-1 rounded-full p-2">
                                    <FaLocationDot size="20px" />
                                </div>
                                <div className="flex flex-col items-center justify-end h-[60px]">
                                    <p className='font-bold text-lg uppercase'>Address</p>
                                    <div className="flex flex-col items-center justify-center">
                                        <p>Dallas</p>
                                        <p>Texas, USA</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='my-4  border-[1.5px] border-gray-400' />
                            <div className="flex flex-col items-center justify-center basis-1/3 my-4">
                                <div className="flex flex-col flex-center items-center">
                                    <p className='font-bold text-lg uppercase'>Phone</p>
                                    <p>+1 (469) 587-9543</p>
                                </div>
                                <div className="flex flex-col flex-center items-center">
                                    <p className='font-bold text-lg uppercase'>Email</p>
                                    <p>lynkinfiniteinvestments@gmail.com</p>
                                </div>
                            </div>
                            <hr className='my-4 border-[1.5px] border-gray-400' />
                            <div className="flex flex-col items-center justify-center basis-1/3">
                                <p>Connect with us</p>
                                <div className="flex  gap-x-4 mt-4">
                                    <Link to="/"><FaFacebookF size="23px" /></Link>
                                    <Link to="/"><FaInstagram size="25px" /></Link>
                                    <Link to="/"><FaXTwitter size="25px" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Faq class="w-full" />
                    {/* <div className="w-full shrink-0 grow-0 basis-auto lg:w-5/12 xl:6/12 flex items-center justify-center">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold text-[#9747FF] ">
                                            Customer support
                                        </p>
                                        <p className="text-black">
                                            support@example.com
                                        </p>
                                        <p className="text-black">
                                            +1 (469) 587-9543
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold text-[#9747FF] ">
                                            Sales questions
                                        </p>
                                        <p className="text-black">
                                            sales@example.com
                                        </p>
                                        <p className="text-black">
                                            +1 234-567-89
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                                <div className="align-start flex">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold text-[#9747FF] ">Press</p>
                                        <p className="text-black">
                                            press@example.com
                                        </p>
                                        <p className="text-black">
                                            +1 234-567-89
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                <div className="align-start flex">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold text-[#9747FF] ">Bug report</p>
                                        <p className="text-black">
                                            bugs@example.com
                                        </p>
                                        <p className="text-black">
                                            +1 234-567-89
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ContactForm