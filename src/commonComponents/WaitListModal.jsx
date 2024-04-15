import React, { useState } from "react";
import OtpInput from 'react-otp-input';
import { ImCross } from "react-icons/im";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import Error from "../utils/Error";
import SuccessToast from "../utils/successToast";
import bgImage from "../assets/login_BG.jpeg";
import { useAuth } from "../utils/AuthContext";
import "../App.css";
import logo from "../assets/logo.png";
import { TiTick } from "react-icons/ti";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { CiCircleQuestion } from "react-icons/ci";
function DialogDefault({ isOpen, setOpen }) {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const handleOpen = () => setOpen(!isOpen);
    const { backendUrl } = useAuth();

    const steps = ["User Info", "Verification"];
    const [currentStep, setCurrentStep] = useState(0);
    const [complete, setComplete] = useState(false);

    const handlePrev = () => setCurrentStep((cur) => cur - 1);

    const handlePaste = (event) => {
        event.preventDefault();
        setOtp(event.clipboardData.getData('text'));
    };

    const resendCodeHandler = async () => {
        const otpSendResponse = await axios.post(`${backendUrl}/waitlist/otp`, { email });
        if (otpSendResponse.status === 200) {
            SuccessToast("Confirmation code has been sent again, please check your inbox.");
        } else {
            return Error("Something went wrong! Try again later");
        }
    }

    const OtpHandler = async (event) => {
        event.preventDefault();
        const otpSendResponse = await axios.post(`${backendUrl}/waitlist/otp`, { email });
        if (otpSendResponse.status === 200) {
            SuccessToast("Confirmation code has been sent to your email, please check your inbox");
            currentStep === steps.length ? setComplete(true) : setCurrentStep(1);
        } else {
            return Error("Something went wrong!");
        }
    }

    const WaitListHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${backendUrl}/waitlist`, { name, email, otp });
            if (response.status === 200) {
                SuccessToast("We have added you in our wait-list.");
                localStorage.setItem("waitlist", "joined");
                handleOpen();
            } else if (response.status === 202) {
                SuccessToast("You are in our waiting list already.");
                localStorage.setItem("waitlist", "joined");
                handleOpen();
            } else if (response.status === 203) {
                Error("Invalid confirmation code, please resend the confirmation code.");
            }
        } catch (error) {
            var message;
            if (error.response) {
                message = "Error: " + error.response.data.message + ", please resend the confirmation code.";
            } else {
                message = "Error occurred, please resend the confirmation code."
            }
            Error(message);
        }
    }

    return (
        <div className="">
            {isOpen && (<div className="absolute inset-0 z-50 bg-white/20 backdrop-blur-sm flex items-center justify-center  text-white">
                <div className="flex flex-col justify-center items-center w-[600px] bg-gradient-to-r from-[#6e30a7] to-purple-300 p-6 py-8 rounded-xl relative">
                    <div className="absolute right-4 top-4" onClick={handleOpen}>
                        <div className={currentStep === 0 ? "block" : "hidden"}>
                            <ImCross size="20px" />
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl">Join Project Waitlist</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="logo" className="w-[50%]" />
                    </div>
                    <div className="flex justify-between w-full">
                        {steps?.map((step, i) => (
                            <div
                                key={i}
                                className={`step-item relative flex flex-col justify-center items-center w-full ${currentStep === i ? "active"
                                    : (i < currentStep || complete) && "complete"
                                    } `}
                            >
                                <div className={`step w-10 h-10 flex items-center justify-center z-10 relative bg-slate-700 rounded-full font-semibold text-white`}>
                                    {i < currentStep || complete ? <TiTick size={24} /> : i + 1}
                                </div>
                                <p
                                    className={`text-[#161b33] ${(i + 1 < currentStep || complete) && "text-white"
                                        }`}
                                >
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <div className={currentStep === 0 ? "block" : "hidden"}>
                            <form onSubmit={OtpHandler} className="mb-2 w-80 max-w-screen-lg sm:w-96 ">
                                <div className="mb-1 flex flex-col gap-6">
                                    <p variant="h6" color="blue-gray" className="-mb-3">
                                        Your Name
                                    </p>
                                    <input
                                        type="text"
                                        onChange={(event) => setName(event.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                        required
                                    />
                                    <p variant="h6" color="blue-gray" className="-mb-3">
                                        Your Email
                                    </p>
                                    <input
                                        type="email"
                                        onChange={(event) => setEmail(event.target.value.trim().toLowerCase())}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="mt-6 bg-top vsm:px-4 vsm:py-1 lg:py-1 rounded-md md:text-base lg:text-base  xl:text-lg text-black font-bold  bg-cover " style={{ backgroundImage: `url(${bgImage})` }}>
                                        Send Confirmation Code
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className={currentStep === 1 ? "flex flex-col items-center justify-center" : "hidden"}>
                            <p className="text-sm flex-wrap uppercase">Confirmation code</p>
                            <form onSubmit={(event) => WaitListHandler(event)} className="mb-2 w-80 max-w-screen-lg sm:w-96 ">
                                <div className="w-full flex items-center justify-center OtpField">
                                    <OtpInput
                                        renderInput={(props) => <input {...props} />}
                                        className="p-4 text-lg m-4"
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={5}
                                        onPaste={handlePaste}
                                        renderSeparator={<span>-</span>}
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="mt-6 bg-top vsm:px-4 vsm:py-1  lg:py-1 rounded-md md:text-base lg:text-base  xl:text-lg text-black font-bold  bg-cover " style={{ backgroundImage: `url(${bgImage})` }}>
                                        Verify & Join Waitlist
                                    </button>
                                    <Tooltip title="Check spam if email not recieved">
                                        <Button ><CiCircleQuestion className="text-3xl text-[#fff] mt-6" /></Button>
                                    </Tooltip>
                                </div>
                            </form>
                            <p onClick={resendCodeHandler} className="hover:underline">Resend Confirmation Code</p>
                            <p onClick={handleOpen} className="hover:underline">Explore Website</p>
                        </div>
                        <div className="flex justify-start">
                            <button className={currentStep === 1 ? "block" : "hidden"} onClick={handlePrev} >
                                <FaArrowLeftLong size="15px" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default DialogDefault;