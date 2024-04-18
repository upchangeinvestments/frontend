import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from "../../assets/logo2.png";
import ProfileContent from "./ProfileContent";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../utils/AuthContext";
import successToast from "../../utils/successToast";

const LogoutComponent = () => {
  const { logout } = useAuth();

  const HandleLogout = () => {
    logout();
  };
  return (
    <div className="flex flex-col items-center gap-4 mt-[30px] rounded-lg">
      <div className="text-xl text-[#6e30a7]">Thanks for visiting us!</div>
      <div onClick={HandleLogout} className="text-xl bg-[#6e30a7] text-white px-4 py-2 rounded-md flex flex-row items-center">
    Logout <FaSignOutAlt className="ml-2"/>
  </div>
    </div>
  )
};

const Communication = () => {
  const handleSubscribe = () => {
    successToast('You have subscribed successfully!');
  };
  return (
    <div className="flex flex-col items-center mt-[20px] space-y-4">
      <div className="text-xl font-semibold">Stay Connected with Us</div>
      <div className="text-[#6e30a7] text-lg text-center">
        Subscribe to our newsletter to get the latest updates and offers.
      </div>
      <button onClick={handleSubscribe} className="bg-[#6e30a7]  text-white font-semibold py-2 px-4 rounded">
        Subscribe
      </button>
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
       <br/>
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
    <div className="">
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
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-[50px]">
       <input type="text" placeholder="Current Password" name="CurrentPassword" required />
       <input type="text" placeholder="New Password" name="NewPassword" required />
       <input type="text" placeholder="Confirm Password" name="ConfirmPassword" required />
       <button type="submit" className="bg-[#6e30a7] text-[#ffff] py-2 px-4 rounded-md">RESET PASSWORD</button>
    </div>
  )
}

const tabs = [
  { title: "PROFILE SECTION", content: <ProfileContent />, linkId: "" },
  {
    title: "TERMS OF SERVICE",
    content: <TermsOfService />,
    linkId: "terms",
  },
  {
    title: "PRIVACY POLICY",
    content: <PrivacyPolicy />,
    linkId: "privacy-policy",
  },
  {
    title: "CHANGE PASSWORD",
    content: <ChangePassword/>,
    linkId:"",
  },
  { title: "COMMUNICATION", content:<Communication/>, linkId: "" },
  { title: "LOGOUT", content: <LogoutComponent />, linkId: "" },
];

const Sidebar = ({ sendDataToProfile }) => {
  const [isActive, setIsActive] = useState(0);

  const handleContent = (i) => {
    sendDataToProfile(tabs[i].content, tabs[i].title, tabs[i].linkId);
    setIsActive(i);
  };

  return (
    <div className="flex vsm:justify-start lg:justify-end items-center">
      <div className="vsm:w-full h-[100vh] md:w-[200px] md:mt-[50px] md:ml-[20px] lg:w-[280px] lg:mt-[50px] lg:ml-[40px] xl:w-[60%] xl:mr-[70px] flex flex-col items-center bg-gradient-to-r from-[#6e30a7] to-purple-300  backdrop-blur-lg md:rounded-lg lg:rounded-lg shadow-md p-4 ">
        <ul className="flex flex-col space-y-2 w-full">
          <div className="vsm:w-[180px] vsm:ml-[30px] vsm:mb-[50px] sm:w-[200px] sm:ml-[30px] sm:mb-[50px] md:w-[150px] md:ml-[5px] md:mb-[40px] lg:mx-[20px] lg:mt-[20px] lg:mb-[80px] lg:w-[200px] xl:w-[230px]">
            <img src={logo} alt="" />
          </div>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`vsm:p-[10px] sm:p-[10px] md:p-[10px] lg:p-[15px] md:text-[15px] lg:text-[17px] xl:text-[18px]  xl:p-[17px]  ${isActive === index ? " md:bg-white  rounded-lg  w-full" : ""
                }`}
              onClick={() => handleContent(index)}
            >
              <div className="flex items-center justify-between">
                <p> {tab.title}</p>
                <MdKeyboardArrowRight />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;



