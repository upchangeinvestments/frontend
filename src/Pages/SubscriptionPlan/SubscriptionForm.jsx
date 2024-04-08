import React, { useState } from 'react';
import Faq from "./FAQ";
import bgImage from "../../assets/login_BG.jpeg";
import { FaTelegramPlane } from "react-icons/fa";
import { useAuth } from "../../utils/AuthContext"

const Formoptions = [
    ['--Select option--', "Residential", "Hotels", "Retail", "Warehouse & Storage", "Medical Facilites", "School", "Office", "Infrastructure", 'Other'],
    ['--Select option--', '$ 50,000 - $ 1 Million', '$ 1 Million - $3 Million', '$ 3 Million - $5 Million', '$ 5 Million - $10 Million', '$ 10 Million - $15 Million', 'Other'],
    ['--Select option--', 'Short-Term (3 Months)', 'Medium-Term (6 Months)', 'Long-Term (12 Months)', 'Custom Duration'],
    ['--Select option--', 'Premium Placement', 'Enhanced Analytics', 'Marketing Support', 'Customized Reports', 'Custom Services'],
]

function SubscriptionForm() {
    const { isAuth, user } = useAuth();
    console.log(isAuth, user);
    const [formData, setFormData] = useState({ input1: '', input2: '', input3: '', input4: '' });
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [input3Value, setInput3Value] = useState('');
    const [input4Value, setInput4Value] = useState('');

    const handleInputChange = (e, setFormValue) => {
        setFormValue(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;


    };

    return (
        <div className="font-['Playfair-Display'] w-full md:mx-auto md:px-12 pb-12 rounded-lg max-w-7xl px-6 py-12 md:py-8">
            <div className="max-w-7xl vsm:mt-[30px] vsm:py-4 vsm:px-4 sm:mt-[50px] vsm:mx-4 sm:px-6 md:mt-[40px] md:mb-6 lg:mt-0 md:col-span-2 lg:col-span-1 md:mx-0 md:px-3 lg:mb-0 bg-gradient-to-r from-[#6e30a7] to-purple-300 rounded-lg flex flex-col items-center justify-center">
                <p className="vsm:text-xl vsm:mb-[10px] msm:text-2xl md:text-2xl text-white font-bold ">
                    Listing Inquiry Form
                </p>
                <p className='text-xl '><span className='font-semibold'>We are Thrilled to Partner with You</span>: Please fill out our Listing Inquiry Form Below and we will get back to you within 24-48 hours! <br />(Select all that apply)</p>
                <form
                    onSubmit={handleSubmit}
                    className=" rounded vsm:p-4 md:px-8 md:pt-6 w-full"
                >
                    <div className="flex vsm:flex-col md:flex-row vsm:gap-0 md:gap-8">
                        <div className="mb-4 basis-1/2">
                            <label
                                htmlFor="name"
                                className="block text-white text-base mb-2"
                            >
                                Name
                            </label>
                            {isAuth && user.name ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    readOnly
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            ) : (
                                <input
                                    type="text"
                                    name="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            )}
                        </div>
                        <div className="mb-4 basis-1/2">
                            <label
                                htmlFor="companyName"
                                className="block text-white text-base mb-2"
                            >
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex vsm:flex-col md:flex-row vsm:gap-0 md:gap-8">
                        <div className="mb-4 basis-1/2">
                            <label
                                htmlFor="name"
                                className="block text-white text-base mb-2"
                            >
                                Email
                            </label>
                            {isAuth && user.email ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    readOnly
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            ) : (
                                <input
                                    type="email"
                                    name="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            )}
                        </div>
                        <div className="mb-4 basis-1/2">
                            <label
                                htmlFor="phone"
                                className="block text-white text-base mb-2"
                            >
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="phone"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                required
                            />

                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="input1"
                            className="block text-white text-base"
                        >
                            Please select the type of real estate project you're looking to list on LynkInfinite Investments
                        </label>
                        <select value={input1Value} onChange={(e) => handleInputChange(e, setInput1Value)} name="input1" required className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent'>
                            {Formoptions[0].map((option) => (
                                <option className="bg-white/20 backdrop-blur-2xl text-black" key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="input2"
                            className="block text-white text-base"
                        >
                            What is the estimated value of your project that you are seeking funding for?
                        </label>
                        <select value={input2Value} onChange={(e) => handleInputChange(e, setInput2Value)} name="input2" required className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent'>
                            {Formoptions[1].map((option) => (
                                <option className="bg-white/20 backdrop-blur-2xl text-black" key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="input3"
                            className="block text-white text-base"
                        >
                            What duration would you prefer for your project to be listed on our platform?
                        </label>
                        <select value={input3Value} onChange={(e) => handleInputChange(e, setInput3Value)} name="input3" required className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent'>
                            {Formoptions[2].map((option) => (
                                <option className="bg-white/20 backdrop-blur-2xl text-black" key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="input4"
                            className="block text-white text-base"
                        >
                            Are you interested in any additional services or features for your listing?
                        </label>
                        <select value={input4Value} onChange={(e) => handleInputChange(e, setInput4Value)} name="input4" required className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent'>
                            {Formoptions[3].map((option) => (
                                <option className="bg-white/20 backdrop-blur-2xl text-black" key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            style={{ backgroundImage: `url(${bgImage})` }}
                            className="bg-center bg-cover text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                            type="submit"
                        >
                            <FaTelegramPlane />
                            <p className="ml-4">Submit Form</p>
                        </button>
                    </div>
                </form>
            </div>
            <div className="rounded-lg max-w-7xl vsm:mx-4 md:mx-auto mt-[30px] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white/20  md:py-8 md:px-10  backdrop-blur-xl">
                <Faq className="w-full" />
            </div>
        </div>
    )
}

export default SubscriptionForm