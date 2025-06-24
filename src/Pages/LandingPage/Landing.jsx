import { useEffect, useState } from "react";

function LandingPage() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setTimeout(() => setKey(prev => prev + 1), 100);
  }, []);

  return (
    <div className="flex flex-row m-4 mb-12 w-[90%] mx-auto">
      <div className="basis-1/2 bordr-2 border-black">
        <img className="mx-auto rounded-[2rem] w-[85%]" src="https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-697c-61fb-82ae-6f21e286779f/raw?se=2025-06-24T19%3A44%3A35Z&sp=r&sv=2024-08-04&sr=b&scid=090f56d9-50e0-5e3b-9b19-12f3a898f7e6&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-24T14%3A17%3A38Z&ske=2025-06-25T14%3A17%3A38Z&sks=b&skv=2024-08-04&sig=vHSRkAFjgEqD1KtptJCeXsikd6ORFBhXv1QJCkX2qMs%3D" alt="" />
      </div>
      <div className="basis-1/2 bordr-2 border-black m-auto ">
        <div class="max-w-lg mx-auto p-12 rounded-[2rem] bg-gradient-to-br from-[#1f0036] to-[#3b0a72] text-white shadow-lg">
          <h1 class="text-5xl font-bold leading-tight mb-8">
            Discover Trusted <br />
            Real Estate <br />
            Investment Firms
          </h1>
          <p class="text-2xl mb-12 font-bold text-gray-300">
            Connect with reputable companies <br />
            and invest with confidence.
          </p>
          <button class="text-2xl bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
