import { useEffect, useState } from "react";
import "../../styles/LandingPage/LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setTimeout(() => setKey(prev => prev + 1), 100);
  }, []);

  return (
    <div className="flex flex-row m-4 mb-12 w-[90%] mx-auto">
      <div className="hidden md:flex basis-1/2 bordr-2 border-black">
        <img className="mx-auto rounded-[2rem] w-[75%]" src="https://i.postimg.cc/HxM0Qz8P/image1-crop.png" alt="" />
      </div>
      <div className="basis-1/2 bordr-2 border-black m-auto">
        <div
          className="relative max-w-lg mx-auto p-12 text-white shadow-lg bg-gradient-to-br from-[#1f0036] to-[#3b0a72] folded-br"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0 100%)',
            borderRadius: '1.5rem',
          }}
        >
          <h1 class="text-5xl font-bold leading-tight mb-8">
            Discover Trusted <br />
            Real Estate <br />
            Investment Firms
          </h1>
          <p class="text-2xl mb-12 font-bold text-gray-300">
            Connect with reputable companies <br />
            and invest with confidence.
          </p>
          <Link to="/rei-firms">
            <button class="text-2xl bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:opacity-90 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div >
  );
}

export default LandingPage;
