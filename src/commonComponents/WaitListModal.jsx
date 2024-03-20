import React, { useState } from "react";
// import {
//     Button,
// } from "@material-tailwind/react";
import { ImCross } from "react-icons/im";
import axios from "axios";
import Error from "../utils/Error";
import SuccessToast from "../utils/successToast";
import bgImage from "../assets/login_BG.jpeg";
import { useAuth } from "../utils/AuthContext"
import "../App.css";
import logo from "../assets/logo.png";
import {
    Input,
} from "@material-tailwind/react";

function DialogDefault() {
    const [isOpen, setOpen] = useState(true);
    const handleOpen = () => setOpen(!isOpen);
    const { backendUrl } = useAuth();

    const otpGenerated = Math.floor(100000 + Math.random() * 900000);
    const OtpHandler = async () => {
        // add the blurred effect on teh post 
    }
    const WaitListHandler = async (event) => {
        event.preventDefault();
        try {
            const name = event.target.Name.value;
            const email = event.target.Mail.value;

            const response = await axios.post(`${backendUrl}/waitlist`, { name, email });
            if (response.status === 200) {
                SuccessToast("We have added you in our list.");
            } else if (response.status === 202) {
                SuccessToast("We have added you in our list.");
            }
            event.target.reset();
            handleOpen();
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
                        <form onSubmit={WaitListHandler} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
                            <div className="mb-1 flex flex-col gap-6">
                                <p variant="h6" color="blue-gray" className="-mb-3">
                                    Your Name
                                </p>
                                <Input
                                    name="Name"
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <p variant="h6" color="blue-gray" className="-mb-3">
                                    Your Email
                                </p>
                                <Input
                                    name="Mail"
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                            <button className="mt-6 bg-top vsm:px-4 vsm:py-1  lg:py-1 rounded-md md:text-base lg:text-base  xl:text-lg text-black font-bold  bg-cover " style={{ backgroundImage: `url(${bgImage})` }}>
                                Join Waitlist
                            </button>
                        </form>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default DialogDefault;