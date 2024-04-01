import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import Faq from "../Subscription/FAQ";
import bgImage from "../../assets/login_BG.jpeg";
import logo from "../../assets/logo2.png";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";
import SuccessToast from "../../utils/successToast";
import Error from "../../utils/Error";


function ContactForm() {
  const { backendUrl, user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(user);
    const email = event.target.email.value;
    const name = event.target.name.value;
    const message = event.target.message.value;
    const authProvider = user.provider;
    const userId = user._id;

    try {
      const response = await axios.post(`${backendUrl}/contact`, { email, name, message, authProvider, userId });
      if (response.status === 200) {
        SuccessToast("We'll get back to you soon!");
        event.target.reset();
      }
    } catch (error) {
      // console.error("Error saving contact query:", error);
      Error("Something went wrong, please try again later.");
    }
  };

  return (
    <div className=" bg-gradient-to-r from-purple-300 to-pink-200  font-['Playfair-Display'] lg:-mt-[160px]   w-full md:mx-auto md:px-12 pb-12">
      <div className="block lg:max-w-7xl mx-auto rounded-lg vsm:py-[20px] bg-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  lg:px-6 lg:py-12  md:py-8 md:px-10 -mt-[120px] backdrop-blur-xl">
        <div className=" text-black grid relative vsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div className="md:col-span-2 lg:col-span-1 flex items-center justify-end">
            <div className="flex flex-col  vsm:mx-4 vsm:mt-8x vsm:w-[100%] sm:ml-0 md:w-[100%] md:mr-[15px]  lg:ml-12 lg:w-[90%] lg:mr-[20px] pb-[40px] shadow-2xl rounded-lg">
              <div className="basis-1/3  relative">
                <div className="flex flex-col vsm:mt-16 sm:mt-20 lg:mt-28 items-center justify-end h-[60px]">
                  <div className="lg:w-64 vsm:w-44 sm:w-48  md:w-52">
                    <img src={logo} alt="" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="right-0 top-0 mt-2 p-2">
                      <FaLocationDot size="20px" />
                    </div>
                    <p>Dallas Texas, USA</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center basis-1/3 my-4">
                <div className="flex flex-col flex-center items-center">
                  <div className="right-0 top-0  p-2">
                    <FaPhone size="20px" />
                  </div>
                  <p>+1 (469) 587-9543</p>
                </div>
                <div className="flex flex-col mt-5 flex-center items-center">
                  <div className=" right-0 top-0  p-2">
                    <IoMdMail size="20px" />
                  </div>
                  <p className="vsm:text-[14px] msm:text-[16px] lg:ml-8">
                    LynkInfniteInvestments@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col vsm:mt-4 sm:mt-4 md:mt-12 lg:mt-20 items-center justify-center basis-1/3">
                <p>Connect with us</p>
                <div className="flex  gap-x-4 mt-6">
                  <Link to="/">
                    <FaFacebookF size="23px" />
                  </Link>
                  <Link to="/">
                    <FaInstagram size="25px" />
                  </Link>
                  <Link to="/">
                    <FaLinkedinIn size="25px" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="vsm:mt-[30px] vsm:py-4 vsm:px-4 vsm:mx-4 sm:mt-[50px]  sm:px-6  md:mt-[40px] md:mb-6 lg:mt-0  md:col-span-2 lg:col-span-1  md:px-3 lg:mb-0 bg-gradient-to-r from-[#6e30a7] to-purple-300 rounded-lg  flex flex-col items-center justify-center">
            <p className="vsm:text-xl vsm:mb-[10px] msm:text-2xl md:text-2xl text-white font-bold ">
              Send Us a Message
            </p>
            <form
              onSubmit={handleSubmit}
              className=" rounded vsm:p-4 md:px-8 md:pt-6 w-full"
            >
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-1 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-1 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  style={{ backgroundImage: `url(${bgImage})` }}
                  className="bg-center bg-cover text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                  type="submit"
                >
                  <FaTelegramPlane />
                  <p className="ml-4">Send Message</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="rounded-lg max-w-7xl vsm:mx-4 md:mx-auto mt-[30px]   px-6 py-12  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white/20  md:py-8 md:px-10  backdrop-blur-xl">
        <Faq class="w-full" />
      </div>
    </div>
  );
}

export default ContactForm;
