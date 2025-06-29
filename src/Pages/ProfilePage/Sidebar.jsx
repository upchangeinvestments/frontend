import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ProfileContent from "./ProfileContent";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../utils/AuthContext";
import successToast from "../../utils/successToast";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdUnsubscribe } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdOutlineRule } from "react-icons/md";
import Error from "../../utils/Error";
import { IoLogOutSharp } from "react-icons/io5";
import { PiCompassFill } from "react-icons/pi";
import Profile from "./Profile";
import Activity from "./Activity";
import Questionnaire from "./Questionnaire";
import AccreditedInvestor from "./AccreditedInvestor";
import axios from "axios";

const LogoutComponent = () => {
  const { logout } = useAuth();

  const HandleLogout = () => {
    logout();
  };
  return (
    <div className="flex flex-col items-center gap-4 mt-[30px] rounded-lg">
      <div className="text-xl text-[#6e30a7]">Thanks for visiting us!</div>
      <div onClick={HandleLogout} className="text-xl bg-[#6e30a7] text-white px-4 py-2 rounded-md flex flex-row items-center">
        Logout <FaSignOutAlt className="ml-2" />
      </div>
    </div>
  )
};

const Communication = () => {
  const { backendUrl, user } = useAuth();
  const [formVisibility, setFormVisibility] = useState(false);
  const [unsubscribed, setUnsubscribed] = useState(!user.subscribed.status);

  const handleSubscribe = () => {
    setFormVisibility(true);
  };
  const [formData, setFormData] = useState({
    unsubscribeReason: "",
    otherReason: "",
  });

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const subscribeUserHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/user/subscribe`, { user: user._id });

      if (response.status === 200) {
        successToast('You have subscribed successfully!');
        setUnsubscribed(false);
        setFormVisibility(false);
      }

    } catch (error) {
      if (error.response && error.response.data.message) {
        return Error(error.response.data.message);
      } else if (error.request) {
        return Error("Something went wrong! Please try again later.");
      } else {
        // will have to console errors with production specific style so that we can track errors from the server logs that users are receiving 
        return Error("An unexpected error occurred. Please try again later.");
      }
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const unsubscribeReason = formData.unsubscribeReason;
      const otherReason = formData.otherReason;
      var data = unsubscribeReason === 'other' ? otherReason : unsubscribeReason;

      const response = await axios.post(`${backendUrl}/user/unsubscribe`, { data: data, user: user._id });

      if (response.status === 200) {
        successToast('You have unsubscribed successfully!');
        setUnsubscribed(true);
      }

    } catch (error) {
      if (error.response && error.response.data.message) {
        return Error(error.response.data.message);
      } else if (error.request) {
        return Error("Something went wrong! Please try again later.");
      } else {
        // will have to console errors with production specific style so that we can track errors from the server logs that users are receiving 
        return Error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-[20px] space-y-4 mb-8 font-['Playfair-Display']">
      <img className="w-20" src="https://i.postimg.cc/C5cw8FP2/email-computer-icons-clip-art-png-favpng-4-TBZ4-Znz4p7x0-GH9kv8wx-Ln-G2-removebg-preview.png" alt="Email Image" />
      {!unsubscribed && !formVisibility && <div className="text-LG">You are subscribed to our messages.</div>}
      {!unsubscribed && !formVisibility && <div className="text-xl font-semibold">Do you want to unsubscribe from our messages ?</div>}

      {!unsubscribed && !formVisibility && <button onClick={handleSubscribe} className="bg-[#6e30a7] text-white font-semibold py-2 px-4 rounded">Unsubscribe</button>}

      {formVisibility && !unsubscribed && (
        <div>
          <form onSubmit={handleSubmit}>
            <label className="flex flex-row gap-4 w-full items-center uppercase my-2">
              <input className="w-4 h-4 text-[#6e30a7]" type="radio" required name="unsubscribeReason" value="No Longer Want Emails" onChange={handleRadioChange} />
              <div className="">I no longer want to receive these emails</div>
            </label>
            <label className="flex flex-row gap-4 w-full items-center uppercase my-2">
              <input className="w-4 h-4 text-[#6e30a7]" type="radio" required name="unsubscribeReason" value="Inappropriate Emails" onChange={handleRadioChange} />
              <div className="">The emails are inappropriate</div>
            </label>
            <label className="flex flex-row gap-4 w-full items-center uppercase my-2">
              <input className="w-4 h-4 text-[#6e30a7]" type="radio" required name="unsubscribeReason" value="No Longer Providing Value" onChange={handleRadioChange} />
              <div className="">Emails are no longer providing valuable information</div>
            </label>
            <label className="flex flex-row gap-4 w-full items-center uppercase my-2">
              <input className="w-4 h-4 text-[#6e30a7]" type="radio" required name="unsubscribeReason" value="Not Using Platform" onChange={handleRadioChange} />
              <div className="">I don't use this platform</div>
            </label>
            <label className="flex flex-row gap-4 w-full items-center uppercase my-2">
              <input className="w-4 h-4 text-[#6e30a7]" type="radio" required name="unsubscribeReason" value="other" onChange={handleRadioChange} />
              <div className="">Other</div>
            </label>
            <input type="text" name="otherReason" value={formData.otherReason} required onChange={handleTextChange} className="border-2 border-gray-300 rounded-xl p-2 ml-4 text-lg w-full" disabled={formData.unsubscribeReason !== "other"} />
            <div className="flex items-center justify-center my-4">
              <button className="bg-[#6e30a7] text-white font-semibold py-2 px-4 rounded" type="submit">Unsubscribe</button>
            </div>
          </form>
        </div>
      )}

      {unsubscribed && (
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-xl font-bold">You're Unsubscribed</h1>
          <p>We're sorry to loose you, but we totally understand.</p>
          <p>No worries! You can resubscribe us instantly by clicking on the button below.</p>
          <form onSubmit={subscribeUserHandler}>
            <div className="flex items-center justify-center my-4">
              <button className="bg-[#6e30a7] text-white font-semibold py-2 px-4 rounded" type="submit">Subscribe Us</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const TermsOfService = () => {
  return (
    <div className="">
      Acceptance of Terms:
      <br /> By accessing or using Lynkinfinite Investments, you agree to abide
      by these Terms of Service.
      <br />
      <br />
      Use of Services:
      <br /> Users may access and use Lynkinfinite Investments for personal,
      non-commercial purposes only.
      <br />
      <br />
      User Conduct:
      <br /> Users must not engage in any unlawful or unauthorized activities
      while using Lynkinfinite Investments.
      <br />
      <br />
      Intellectual Property:
      <br /> All content and materials on Lynkinfinite Investments are protected
      by intellectual property laws and may not be used without permission.
      <br />
      <br />
      Disclaimer of Warranties:
      <br /> Lynkinfinite Investments provides services "as is" without
      warranties of any kind.
      <br />
      <br />
      Limitation of Liability:
      <br /> Lynkinfinite Investments shall not be liable for any direct,
      indirect, incidental, or consequential damages arising out of the use of
      its services.
      <br />
      <br />
      Modification of Terms:
      <br /> Lynkinfinite Investments reserves the right to modify these Terms
      of Service at any time without prior notice.
      <br />
      <br />
      Investment Disclaimer:
      <br /> By using Lynkinfinite Investments, users acknowledge and understand
      that the company is not responsible for any investment projects listed on
      the platform. Lynkinfinite Investments serves as a source of awareness
      about investments and does not recommend or advise individuals to invest
      in any firms.
      <br />
      <br />
      Limited Liability:
      <br /> Lynkinfinite Investments shall not be liable for any losses or
      damages incurred as a result of investment decisions made based on
      information obtained from the platform. Users agree that the company's
      liability is limited, and no claims exceeding $1000 will be entertained.
      <br />
      <br />
      Resolution of Disputes:
      <br /> In the event of any issues or disputes, users are encouraged to
      contact Lynkinfinite Investments first to seek resolution. The company
      will endeavor to assist users in resolving disputes amicably and
      efficiently.
      <br />
      <br />
      Purposes Disclaimer:
      <br /> All images and return and projection figures displayed on
      Lynkinfinite Investments are for illustrative purposes only, may assume
      additional investments over time, and do not represent actual Lynkinfinite
      customer returns or projections. Past performance does not guarantee
      future results. Historical returns, expected returns, or probability
      projections may not reflect actual future performance. All investments
      involve risk and may result in partial or total loss. While we strive to
      utilize reliable data from third parties, Lynkinfinite cannot guarantee
      the accuracy or completeness of data provided by investors or other third
      parties.
      <br />
      <br />
      Service Description:
      <br />
      LynkInfinite Investments offers online tools designed to assist potential
      real estate investors in accessing private market real estate investments.
      Our service enables investors to diversify their portfolios across a
      curated selection of private market real estate opportunities, thereby
      presenting new avenues for portfolio growth.
      <br />
      <br />
      Your Registration Responsibilities:
      <br />
      To access and utilize certain features of our service, registration with
      LynkInfinite Investments may be required. By choosing to register, you
      agree to provide accurate, current, and complete information about
      yourself as prompted by our registration form. Your registration data,
      along with other relevant information, is subject to our Privacy Policy.
      Users under the age of 18 are not authorized to use our service, whether
      or not they choose to register.
      <br />
      <br />
      Member Account and Security:
      <br />
      You are responsible for maintaining the confidentiality of your account
      credentials and assume full responsibility for any activities conducted
      under your account. You agree to (a) promptly notify LynkInfinite
      Investments of any unauthorized use of your account or any security
      breaches and (b) ensure that you log out of your account after each
      session. LynkInfinite Investments shall not be liable for any losses or
      damages resulting from your failure to comply with these security
      measures.
      <br />
      <br />
      Service Modifications:
      <br />
      LynkInfinite Investments reserves the right to modify or discontinue the
      service (or any part thereof) with or without prior notice. By accessing
      our service, you agree that LynkInfinite Investments shall not be liable
      to you or any third party for any such modifications, suspensions, or
      terminations.
      <br />
      <br />
      General Usage Guidelines and Data Storage:
      <br />
      You acknowledge that LynkInfinite Investments may establish general
      guidelines and limitations regarding service usage, including the maximum
      duration for data retention and the allocated storage space on our
      servers. You agree that LynkInfinite Investments assumes no responsibility
      or liability for the deletion or failure to store any data or content
      maintained or uploaded via the service. Additionally, LynkInfinite
      Investments reserves the right to deactivate inactive accounts and alter
      these guidelines and limitations at its sole discretion, with or without
      notice.
      <br />
      <br />
      Website Services:
      <br />
      Our service includes various features accessible via the LynkInfinite
      Investments website. These features enable users to explore investment
      opportunities, manage their portfolios, and access other functionalities
      offered on our website.
      <br />
      <br />
      Subcribe:
      <br />
      By signing up for our newsletter, you agree to receive regular updates about our latest news, projects, and promotions. By default, you will be subscribed to all our newsletters and projects. If you wish to opt-out, you can unsubscribe at any time by clicking the 'unsubscribe' link in any of our emails. Please note that unsubscribing will only stop you from receiving future emails, and it will not remove your data from our system. We respect your privacy and will not share your information with third parties.
      <br />
      <br />
      License:
      <br />
      Subject to the Terms of Service, LynkInfinite Investments grants you a
      limited, revocable, non-exclusive, non-transferable, and non-sublicensable
      license to utilize the LynkInfinite Investments website for personal use.
      Each acceptance of the Terms of Service entitles you to the rights
      specified herein for the usage of the LynkInfinite Investments website.
      <br />
      <br />
      Link to other Websites Within our platform, you may encounter links to
      other websites or services not owned or managed by LynkInfinite
      Investments. These links may direct you to websites of travel partners,
      advertisers, affiliated companies, and other business associates. Please
      note that this Privacy Policy solely pertains to information collected
      through our services. We do not exercise control over these third-party
      websites, and your utilization of their websites and features is subject
      to the privacy policies published on those sites. LynkInfinite Investments
      bears no responsibility or liability for the privacy practices or business
      conduct of any third-party websites linked to our services, including
      those of our affiliated companies. Your decision to access third-party
      websites linked to our services is at your own discretion and risk.
      Therefore, we recommend reviewing the privacy policies of any linked
      third-party websites when navigating away from our services.
      <br />
      <br />
    </div>
  );
};
const PrivacyPolicy = () => {
  return (
    <div className="font-['Playfair-Display'] text-lg">
      Information Collection:
      <br /> Lynkinfinite Investments may collect personal information from
      users, including but not limited to name, email address, and contact
      information.
      <br />
      <br />
      Use of Information:
      <br /> Personal information collected by Lynkinfinite Investments may be
      used to improve services, personalize user experience, and communicate
      with users.
      <br />
      <br />
      Data Security:
      <br /> Lynkinfinite Investments implements appropriate security measures
      to protect personal information from unauthorized access, disclosure,
      alteration, or destruction.
      <br />
      <br />
      Third-Party Disclosure:
      <br /> Lynkinfinite Investments may share personal information with
      third-party service providers for the purpose of providing and improving
      services.
      <br />
      <br />
      Cookies:
      <br /> Lynkinfinite Investments may use cookies and similar technologies
      to enhance user experience and track usage patterns.
      <br />
      <br />
      Data Retention:
      <br /> Lynkinfinite Investments retains personal information for as long
      as necessary to fulfill the purposes outlined in this Privacy Policy.
      <br />
      <br />
      User Rights:
      <br /> Users may request access to, correction of, or deletion of their
      personal information held by Lynkinfinite Investments.
      <br />
      <br />
      Policy Changes:
      <br /> Lynkinfinite Investments reserves the right to update or revise
      this Privacy Policy at any time.
      <br />
      <br />
      Data Usage:
      <br /> Personal information collected by Lynkinfinite Investments will be
      used solely for the purpose of providing and improving services.
      <br />
      <br /> It will not be shared or sold to third parties for marketing
      purposes.
      <br />
      <br />
      Opt-Out:
      <br /> Users have the option to opt-out of receiving communications from
      Lynkinfinite Investments at any time.
      <br />
      <br />
      Data Retention:
      <br /> Personal information will be retained only for as long as necessary
      to fulfill the purposes outlined in this Privacy Policy.
      <br />
      <br />
      Policy Changes:
      <br /> Lynkinfinite Investments reserves the right to update or revise
      this Privacy Policy at any time, with changes being communicated to users
      through the platform or via email.
      <br />
      <br />
      Third Party Content and Linked Websites Mentions of third-party names,
      trademarks, products, or services on this website, as well as hyperlinks
      leading to third-party websites or content provided by third parties, are
      offered solely for your convenience. These references do not imply or
      constitute our endorsement, sponsorship, or recommendation of the third
      party, its information, materials, or services in any way. We disclaim
      responsibility for the practices or policies of such third parties, as
      well as the content of any third-party sites. Furthermore, we make no
      representations regarding the materials or services of third parties, nor
      the accuracy or content of any material found on such third-party sites.
      Should you choose to access any of these third-party sites via links
      provided, you do so entirely at your own risk.
      <br />
      <br />
      <span className="text-xl flex items-center justify-center">
        Advertising Cookies
      </span>{" "}
      <br />
      At LynkInfinite Investments, we collaborate with third parties to
      implement cookies on our website to facilitate various services,
      including: Ad Targeting:
      <br /> Third-party advertising companies work with us to display ads while
      you browse our website, allowing them to place and access their own
      cookies on your device to serve advertisements. These cookies may gather
      information about your visits to our site and other websites, as well as
      your purchasing behavior and interests across online platforms, to tailor
      ads about products and services that may interest you. However, this
      information does not include personally identifiable details such as your
      name, address, email, or telephone number.
      <br />
      <br />
      Web Log Data Collection:
      <br /> We permit select third parties, as outlined in our Privacy Policy,
      to collect web log data from you, such as your IP address and browser
      information, when you visit our website. This data may be utilized to
      place or recognize unique cookies on your browser, enabling you to receive
      personalized ads or content. These cookies may contain de-identified usage
      data or other information associated with data you voluntarily provided to
      us, such as your email address, shared with third parties solely in a
      hashed, non-human readable format.
      <br />
      <br />
      Advertising Analytics/Measurement:
      <br /> We utilize analytics cookies in our online advertising endeavors to
      understand user interactions with our website subsequent to exposure to
      online advertisements, including those displayed on third-party websites.
      Specifically, we utilize Google Analytics 360 Suite, incorporating Google
      Analytics Advertising, which employs third-party cookies. We have
      implemented IP address anonymization to shorten user IP addresses.
      Additionally, our website utilizes various Google Analytics Advertising
      features, such as Google Remarketing, Google Segments, Google Ads Manager,
      and Google Ads, to track website traffic, generate reports, and create
      audience segments for targeted advertising.
      <br />
      <br />
      Remarketing Pixel Tags:
      <br /> We may share website usage information with third-party advertising
      companies to manage and target ads, as well as conduct market research
      analysis on our website and others. To achieve this, we and our
      advertising partners may deploy pixel tags, also known as clear gifs, on
      select pages of our website. The information collected via these pixel
      tags enables us to deliver relevant advertisements to you when you browse
      other websites, based on your interests, including past searches conducted
      on our site.
      <br />
      <br />
    </div>
  );
};

const ChangePassword = () => {
  const { backendUrl, user } = useAuth();
  const updatePasswordHandler = async (event) => {
    try {
      event.preventDefault();
      const currentPassword = event.target.CurrentPassword.value;
      const newPassword = event.target.NewPassword.value;
      const passwordConfirm = event.target.ConfirmPassword.value;
      if (newPassword.length < 8) {
        return Error("Password must be at least 8 characters long");
      }
      const response = await axios.post(`${backendUrl}/auth/updatePassword`, { currentPassword, newPassword, passwordConfirm, "userId": user._id });
      if (response.status === 200) {
        successToast(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return Error(error.response.data.message);
      } else if (error.request) {
        return Error("Something went wrong! Please try again later.");
      } else {
        // will have to console errors with production specific style so that we can track errors from the server logs that users are receiving 
        return Error("An unexpected error occurred. Please try again later.");
      }
    }
  }

  return (
    <div className="flex flex-col gap-4 mb-[50px] mx-4">
      <form className="" onSubmit={updatePasswordHandler}>
        <div className="mb-4 mt-10">
          <label htmlFor="Name" className="block mb-1 font-bold md:text-lg lg:text-xl">Current Password</label>
          <input type="text" placeholder="Current Password" name="CurrentPassword" className="bg-transparent w-full border-gray-900 border-b-2 py-2 focus:outline-none focus:ring-[#6e30a7] focus:border-[#6e30a7] md:text-lg lg:text-lg" required />
        </div>
        <div className="mb-4 mt-10">
          <label htmlFor="Name" className="block mb-1 font-bold md:text-lg lg:text-xl">New Password</label>
          <input type="text" placeholder="New Password" name="NewPassword" className="bg-transparent w-full border-gray-900 border-b-2 py-2 focus:outline-none focus:ring-[#6e30a7] focus:border-[#6e30a7] md:text-lg lg:text-lg" required />
        </div>
        <div className="mb-4 mt-10">
          <label htmlFor="Name" className="block mb-1 font-bold md:text-lg lg:text-xl">Confirm Password</label>
          <input type="text" placeholder="Confirm Password" name="ConfirmPassword" className="bg-transparent w-full border-gray-900 border-b-2 py-2 focus:outline-none focus:ring-[#6e30a7] focus:border-[#6e30a7] md:text-lg lg:text-lg" required />
        </div>
      </form>
      <div className="flex flex-col items-center">
        <button type="submit" className="bg-[#6e30a7] text-[#ffff] py-2 px-4 rounded-md">RESET PASSWORD</button>
      </div>
    </div>
  )
}

const tabs = [
  { title: "My Profile", content: <Profile />, linkId: "", icon: <IoPersonCircleSharp />, activeIndex: 0 },
  { title: "Investor Status", content: <AccreditedInvestor />, linkId: "", icon: <PiCompassFill />, activeIndex: 2 },
  { title: "Questionnaire", content: <Questionnaire />, linkId: "", icon: <FaQuestionCircle />, activeIndex: 3 },
  { title: "Saved Companies", content: <Activity />, linkId: "", icon: <FaHeart />, activeIndex: 1 },
  { title: "Privacy Policy", content: <PrivacyPolicy />, linkId: "privacy-policy", icon: <MdPrivacyTip /> },
  { title: "Terms & Condition", content: <TermsOfService />, linkId: "terms", icon: <MdOutlineRule /> },
  { title: "Change Password", content: <ChangePassword />, linkId: "", icon: <RiLockPasswordFill /> },
  { title: "Communication", content: <Communication />, linkId: "", icon: <MdUnsubscribe /> },
  { title: "Logout", content: <LogoutComponent />, linkId: "", icon: <IoLogOutSharp /> },
];

const Sidebar = ({ sendDataToProfile }) => {
  const [isActive, setIsActive] = useState(0);

  const handleContent = (i) => {
    sendDataToProfile(tabs[i].content, tabs[i].title, tabs[i].linkId, tabs[i].activeIndex);
    setIsActive(i);
  };

  return (
    <div className="flex justify-start items-start shadow-md vsm:w-full h-full md:w-[90%] lg:w-[90%] xl:w-[90%] p-4 pl-1">
      <div className="flex flex-col items-start backdrop-blur-lg md:rounded-lg lg:rounded-lg w-full">
        <ul className="flex flex-col space-y-2 w-full font-['Poppins']">
          {tabs.map((tab, index) => (
            <li key={index} className={`vsm:p-2 sm:p-2 md:p-2 lg:p-4 ${isActive === index ? "shadow-lg bg-gradient-to-br from-[#1f0036] to-[#3b0a72] text-white rounded-lg  w-full" : "hover:text-purple-600"}`}
              onClick={() => handleContent(index)}>
              <div className="flex items-center justify-start relative">
                <span className="flex items-center justify-center gap-x-2">
                  {tab.icon}
                  <p className="font-['Playfair-Display'] text-xl"> {tab.title}</p>
                </span>
                <IoIosArrowDroprightCircle size="1.2rem" className="absolute right-0" color={isActive === index ? "white" : "bg-[#3b0a72]"} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
};

export default Sidebar;



