import React, { useState } from "react";
import { FaXTwitter, FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import Faq from "../Subscription/FAQ";
import bgImage from "../../assets/login_BG.jpeg";
import logo from "../../assets/logo2.png";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container mx-auto md:px-12">
      <div className="block rounded-lg bg-gradient-to-b from-white/30  to-[#c7b3ee] bg-opacity-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  px-6 py-12  md:py-8 md:px-10 -mt-[100px] backdrop-blur-[30px]">
        <div className=" text-black grid vsm:grid-cols-1 lg:grid-cols-4 ">
          <div className="col-span-1 ml-5 flex items-center justify-end lg:-mt-4">
            <div className="flex flex-col ml-10 w-full">
              <div className="basis-1/3 relative">
                <div className="flex flex-col mt-28 items-center justify-end h-[60px]">
                  <div className="w-80 ">
                    <img src={logo} alt="" />
                  </div>
                  <div className="flex items-center mt-8 justify-center">
                    <div className="right-0 top-0  p-2">
                      <FaLocationDot size="20px" />
                    </div>
                    <p>Dallas Texas, USA</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center basis-1/3 my-4">
                <div className="flex flex-center items-center">
                  <div className="right-0 top-0  p-2">
                    <FaPhone size="20px" />
                  </div>
                  <p>+1 (469) 587-9543</p>
                </div>
                <div className="flex ml-8 mt-5 flex-center items-center">
                  <div className=" ml-4  right-0 top-0  p-2">
                    <MdOutlineMail size="20px" />
                  </div>
                  <p>lynkinfiniteinvestments@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col mt-20 items-center justify-center basis-1/3">
                <p>Connect with us</p>
                <div className="flex  gap-x-4 mt-6">
                  <Link to="/">
                    <FaFacebookF size="23px" />
                  </Link>
                  <Link to="/">
                    <FaInstagram size="25px" />
                  </Link>
                  <Link to="/">
                    <FaXTwitter size="25px" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full col-span-1 ml-[60px] mb-8 map">
            <iframe
              className="absolute rounded-lg  mt-8 w-80"
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.67236648232!2d-96.89636237485647!3d32.820556582433206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1709581944715!5m2!1sen!2sin"
              width="280"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="vsm:mb-12 col-span-2 lg:pl-[100px] rounded-lg md:mb-0 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 bg-gradient-to-r from-purple-400 to-purple-300  py-8  flex flex-col items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className=" rounded md:px-8 pt-6   w-full"
            >
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
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
      <div className="rounded-lg mt-[80px]  px-6 py-12 bg-[#c7b3ee] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-8 md:px-10 -mt-[100px] backdrop-blur-[30px]">
        <Faq class="w-full" />
      </div>
    </div>
  );
}

export default ContactForm;
