import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";
import { Helmet } from 'react-helmet-async';

function AboutUsPage() {

  return (
    <div className="">
      <Helmet>
        <title>About LynkInfinite Investments</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="flex flex-col items-center justify-center mb-8 md:mb-4">
        <div className="w-[100%]">
          <Navbar />
          <div className="FontLinikSans flex items-center justify-center relative">
            <div className="flex justify-center items-start relative">
              <div className="relative uppercase flex flex-col">
                <p className="text-[3.5rem] md:text-[4rem] xl:text-[5rem] text-shadow-xl text-center"><span className="text-purple-600 uppercase">About </span>us </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vsm:w-[90%] 2xl:max-w-7xl relative">
          <div className="flex flex-col md:flex-row mt-8">
            <div className="md:basis-2/3 my-auto">
              <div className="">
                <h1 className="font-bold text-3xl text-center font-['Playfair-Display'] uppercase"> <span>Built for Trust.</span> <br /><span>Designed for Connection</span></h1>
                <p className="p-4 pt-2 text-xl font-['Playfair-Display'] text-justify">
                  LynkInfinite is the first-of-its-kind platform where investors discover real estate investment firms — not just individual projects.
                  We provide access to verified, reputable investment firms across the U.S., enabling smarter, more confident decision-making for both seasoned
                  and first-time investors. Our goal is to simplify how capital finds trust.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 my-8 md:my-4 gap-x-4 mx-auto gap-y-4 md:gap-y-0 font-['Playfair-Display']">
                <div className="flex flex-col items-center justify-start" id="vision">
                  <p className="text-purple-600 font-bold text-2xl uppercase text-center">Vision</p>
                  <p className="p-4 pt-2 text-xl">Democratize access to reputable real estate firms through clear, data-driven discovery.</p>
                </div>
                <div className="flex flex-col items-center justify-start" id="mission">
                  <p className="text-purple-600 font-bold text-2xl uppercase text-center">Mission</p>
                  <p className="p-4 pt-2 text-xl">Build a trustworthy platform that connects the right investors with the right companies.</p>
                </div>
                <div className="flex flex-col items-center justify-start" id="value">
                  <p className="text-purple-600 font-bold text-2xl uppercase text-center">Values</p>
                  <p className="p-4 pt-2 text-xl">We value transparency, simplicity, and empowering informed decisions.</p>
                </div>
              </div>
            </div>
            <div className="hidden md:basis-1/3 md:flex items-center justify-center">
              <img className="mx-auto" src="https://i.postimg.cc/fLWTc5nD/4.png" alt="" />
            </div>
          </div>

          <div className="hidden md:flex w-[70%] mb-8">
            <div className="flex flex-col font-['Playfair-Display'] p-2">
              <p className="uppercase text-2xl font-bold  text-purple-600 whitespace-nowrap">Words from founder</p>
              <div className="w-[90%] text-xl">
                <p>
                  Real estate investing shouldn’t be a guessing game. LynkInfinite is here to make firm discovery transparent,
                  data-driven, and accessible for investors of all experience levels.
                </p>
                <p>&mdash; Lipika Sharma, Founder</p>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center justify-center flex-col w-[100%] mx-auto my-8 font-['Playfair-Display']">
            <p className="uppercase text-2xl font-extrabold text-purple-600">Words from founder</p>
            <div className="flex flex-col items-start justify-center">
              <p className="w-[90%] mx-auto text-justify text-xl">
                Real estate investing shouldn’t be a guessing game. LynkInfinite is here to make firm discovery transparent,
                data-driven, and accessible for investors of all experience levels.
              </p>
              <p className="m-[1rem]">&mdash; Lipika Sharma, Founder</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
