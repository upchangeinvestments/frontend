import React, { useState } from "react";
import OtpInput from 'react-otp-input';
import { ImCross } from "react-icons/im";
import axios from "axios";
import Error from "../utils/Error";
import SuccessToast from "../utils/successToast";
import bgImage from "../assets/login_BG.jpeg";
import { useAuth } from "../utils/AuthContext"
import "../App.css";
import logo from "../assets/logo.png";
import { Stepper } from "@material-tailwind/react";

function DialogDefault() {
    const [isOpen, setOpen] = useState(!localStorage.getItem('waitlist'));
    console.log(isOpen);
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const handleOpen = () => setOpen(!isOpen);
    const { backendUrl } = useAuth();

    const [activeStep, setActiveStep] = useState(0);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


    const otpGenerated = Math.floor(10000 + Math.random() * 90000);
    const OtpHandler = async (event) => {
        event.preventDefault();
        console.log(otpGenerated);

        const otpSendResponse = await axios.post(`${backendUrl}/waitlist/otp`, { email, otpGenerated });
        console.log(otpSendResponse);
        if (otpSendResponse.status === 200) {
            setActiveStep(1);
        } else {
            return Error("Something went wrong!");
        }
        // add the blurred effect on teh post 
    }
    const WaitListHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${backendUrl}/waitlist`, { name, email, otp });
            if (response.status === 200) {
                SuccessToast("Verified Confirmation code & we have added you in our waited list.");
                localStorage.setItem("waitlist", "joined");
                handleOpen();
            } else if (response.status === 202) {
                SuccessToast("Verified Confirmation code & You are in our waiting list already.");
                localStorage.setItem("waitlist", "joined");
                handleOpen();
            } else if (response.status === 203) {
                Error("Invalid Confirmation code");
            }
        } catch (error) {
            console.log(error)
            return Error(error.response.data.message);
        }
    }

    return (
        <div className="">
            {isOpen && (<div className="absolute inset-0 z-50 bg-white/20 backdrop-blur-sm flex items-center justify-center  text-white">
                <div className="flex flex-col justify-center items-center w-[600px] bg-gradient-to-r from-[#6e30a7] to-purple-300 p-6 py-8 rounded-xl relative">
                    <div className="absolute right-4 top-4" onClick={handleOpen}><ImCross size="20px" /></div>
                    <div>
                        <p className="text-3xl">Join waitlist</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="logo" className="w-[70%]" />
                    </div>
                    <div className="">
                        <Stepper
                            activeStep={activeStep}
                            isFirstStep={(value) => setIsFirstStep(value)}
                        >
                            <div onClick={() => setActiveStep(0)}>1</div>
                            <div onClick={() => setActiveStep(1)}>2</div>
                        </Stepper>
                        <div className={activeStep === 0 ? "block" : "hidden"}>
                            <form onSubmit={OtpHandler} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
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
                                        type="text"
                                        onChange={(event) => setEmail(event.target.value)}
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
                        <div className={activeStep === 1 ? "flex flex-col items-center justify-center" : "hidden"}>
                            <p className="text-sm flex-wrap mt-8 ">We have sent a confirmation code on your mobile number & on your email address</p>
                            <form onSubmit={WaitListHandler} className="mb-2 w-80 max-w-screen-lg sm:w-96 ">
                                <div className="w-full flex items-center justify-center OtpField">
                                    <OtpInput
                                        renderInput={(props) => <input {...props} />}
                                        className="p-4 text-lg m-4"
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={5}
                                        onPaste={true}
                                        renderSeparator={<span>-</span>}
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="mt-6 bg-top vsm:px-4 vsm:py-1  lg:py-1 rounded-md md:text-base lg:text-base  xl:text-lg text-black font-bold  bg-cover " style={{ backgroundImage: `url(${bgImage})` }}>
                                        Verify & Join Waitlist
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-4 flex justify-start">
                            <button className={activeStep === 1 ? "block" : "hidden"} onClick={handlePrev} disabled={isFirstStep}>
                                Prev
                            </button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default DialogDefault;