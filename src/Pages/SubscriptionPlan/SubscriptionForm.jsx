import React, { useState, useEffect } from 'react';
import Faq from "./FAQ";
import bgImage from "../../assets/login_BG.jpeg";
import { FaTelegramPlane } from "react-icons/fa";
import { useAuth } from "../../utils/AuthContext";
import { Select, Option } from "@material-tailwind/react";
import SuccessToast from "../../utils/successToast";
import Error from "../../utils/Error";
import axios from "axios";


const Formoptions = [
    ["Residential", "Hotel", "Retail", "Warehouse & Storage", "Medical Facilites", "Mobile Home Parks", "Office", "Land & Infrastructure"],
    ['$1 Million - $3 Million', '$3 Million - $5 Million', '$5 Million - $10 Million', '$10 Million - $15 Million', 'Other'],
    ['Short-Term (3 Months)', 'Medium-Term (6 Months)', 'Long-Term (12 Months)', 'Custom Duration'],
    ['Premium Placement', 'Enhanced Analytics', 'Marketing Support', 'Customized Reports', 'Custom Services'],
]

function SubscriptionForm() {
    const { isAuth, user, backendUrl } = useAuth();
    const [formData, setFormData] = useState({ input1: '', input2: '', input3: '', input4: '' });
    const [input1Value, setInput1Value] = useState('Select Option');
    const [input2Value, setInput2Value] = useState('Select Option');
    const [input3Value, setInput3Value] = useState('Select Option');
    const [input4Value, setInput4Value] = useState('Select Option');
    const [userDetails, setUserDetails] = useState({ userName: '', companyName: '', userEmail: '', phoneNumber: '' });
    const [textField, setTextField] = useState(false);
    const [OtherTextValue, setOtherTextValue] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            userName: isAuth ? user.name : '',
            userEmail: isAuth ? user.email : ''
        }));
    }, [isAuth, user]);

    const handleuserDetailChange = (e, name) => {
        const { value } = e.target;
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            [name]: value
        }));
    };

    const handleInputChange = (value, setFormValue, name) => {
        if (value === 'Other' && name === 'input2') {
            setTextField(true);
        } else if (name === 'input2') {
            setTextField(false);
            setOtherTextValue('');
        }
        setFormValue(value);
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("formData: ", formData);

        var newFormData;
        newFormData = { ...userDetails, ...formData };
        if (OtherTextValue.length > 0) {
            newFormData = { ...newFormData, customEstimatedValue: OtherTextValue };
        }
        try {
            const res = await axios.post(`${backendUrl}/subscription/inquiry`, { data: newFormData });
            if (res.status === 200) {
                setFormSubmitted(true);
                SuccessToast("Details saved. We'll get back to you within 24 hrs to 48 hrs!");
                setInput1Value('Select Option');
                setInput2Value('Select Option');
                setInput3Value('Select Option');
                setInput4Value('Select Option');
                setUserDetails({
                    userName: isAuth ? user.name : '',
                    companyName: '',
                    userEmail: isAuth ? user.email : '',
                    phoneNumber: ''
                });

                setTimeout(() => {
                    setFormSubmitted(false);
                }, [600000])   // means 10 minutes

            }
        } catch (error) {
            var message;
            if (error.response) {
                const code = error.response.data.message.substring(0, 6);
                if (code === 'E11000') {
                    message = "You have already filled this inquiry form before. We'll get back to you within 24-48 hours!";
                } else {
                    message = "An error occurred. Please try filling out this form again a little later!"
                }
            } else {
                message = "An error occurred. Please try filling out this form again a little later!";
            }
            Error(message);
        }
    };

    return (
        <div className="font-['Playfair-Display'] w-full md:mx-auto md:px-12 pb-12 rounded-lg max-w-7xl px-6 py-12 md:py-8 vsm:-mt-[250px] md:-mt-[240px]" >
            <div className="max-w-7xl vsm:mt-[30px] vsm:py-4 vsm:px-4 sm:mt-[50px] vsm:mx-1 sm:px-6 md:mt-[40px] md:mb-6 lg:mt-0 md:col-span-2 lg:col-span-1 md:mx-0 md:px-3 lg:mb-0 bg-gradient-to-r from-[#6e30a7] to-purple-300 rounded-lg flex flex-col items-center justify-center">
                <p className="vsm:text-xl vsm:mb-[10px] msm:text-2xl md:text-2xl text-white font-bold ">
                    Listing Inquiry Form
                </p>
                <p className='text-xl '><span className='font-semibold'>We are Thrilled to Partner with You</span>: Please fill out our Listing Inquiry Form Below and we will get back to you within 24-48 hours! <br />(Select all that apply)</p>
                {!formSubmitted && <form
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
                                    className="customizedTextInput shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            ) : (
                                <input
                                    type="text"
                                    name="name"
                                    className="customizedTextInput shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                    value={userDetails.userName}
                                    onChange={(e) => handleuserDetailChange(e, 'userName')}
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
                                className="customizedTextInput shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                required
                                value={userDetails.companyName}
                                onChange={(e) => handleuserDetailChange(e, 'companyName')}
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
                                    className="customizedTextInput shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            ) : (
                                <input
                                    type="email"
                                    name="email"
                                    className="customizedTextInput shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                    value={userDetails.userEmail}
                                    onChange={(e) => handleuserDetailChange(e, 'userEmail')}
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
                            {isAuth && user.phone ? (
                                <input
                                    type="text"
                                    name="phone"
                                    value={user.phone}
                                    readOnly
                                    className="customizedTextInput shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                />
                            ) : (
                                <input
                                    type="number"
                                    name="phone"
                                    className="customizedTextInput shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                    required
                                    value={userDetails.phoneNumber}
                                    onChange={(e) => handleuserDetailChange(e, 'phoneNumber')}
                                />
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="input1"
                            className="block text-white text-base"
                        >
                            Please select the type of real estate project you're looking to list on LynkInfinite Investments
                        </label>
                        <Select name="input1" variant="outlined" label={input1Value === "Select Option" ? "Select Option" : ""} required className='flex items-center shadow appearance-none border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent'>
                            {Formoptions[0].map((option) => (
                                <Option className="bg-white/20 backdrop-blur-2xl text-black" key={option} onClick={() => handleInputChange(option, setInput1Value, "input1")} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="input2" className="block text-white text-base">
                            What is the estimated value of your project that you are seeking funding for?
                        </label>
                        <Select name="input2" variant="outlined" label={input2Value === "Select Option" ? "Select Option" : ""} required className='flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent'>
                            {Formoptions[1].map((option) => (
                                <Option className="bg-white/20 backdrop-blur-2xl text-black" key={option} onClick={() => handleInputChange(option, setInput2Value, "input2")} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                        {textField && (
                            <div className="mt-4">
                                <input value={OtherTextValue} required onChange={(e) => setOtherTextValue(e.target.value)} type="text" className='customizedTextInput flex items-center shadow appearance-none border rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent' />
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="input3"
                            className="block text-white text-base"
                        >
                            What duration would you prefer for your project to be listed on our platform?
                        </label>
                        <Select name="input3" variant="outlined" label={input3Value === "Select Option" ? "Select Option" : ""} required className='flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent'>
                            {Formoptions[2].map((option) => (
                                <Option className="bg-white/20 backdrop-blur-2xl text-black" key={option} onClick={() => handleInputChange(option, setInput3Value, "input3")} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="input4"
                            className="block text-white text-base"
                        >
                            Are you interested in any additional services or features for your listing?
                        </label>
                        <Select name="input4" variant="outlined" label={input4Value === "Select Option" ? "Select Option" : ""} required className='flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent'>
                            {Formoptions[3].map((option) => (
                                <Option className="bg-white/20 backdrop-blur-2xl text-black" key={option} onClick={() => handleInputChange(option, setInput4Value, "input4")} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
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
                </form>}
                {formSubmitted && (
                    <div className="flex flex-col items-center justify-center font-bold text-xl">
                        <p>We have saved your details.</p>
                        <p>We'll get back to you within 24 hrs to 48 hrs!</p>
                    </div>
                )}
            </div >
            <div className="rounded-lg max-w-7xl vsm:mx-4 md:mx-auto mt-[30px] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white/20  md:py-8 md:px-10  backdrop-blur-xl">
                <Faq className="w-full" />
            </div>
        </div >
    )
}

export default SubscriptionForm