import React from 'react';
import ExploreMoreButton from "../../common/exploreMoreButton";
import Tagline from "./Tagline";

function LandingPage() {
  return (
    <div className='relative max-h-screen h-[90vh] w-full flex flex-col justify-center items-end vsm:flex vsm:flex-col vsm:items-center vsm:justify-center CustomizeFontH'>
      <div className="absolute vsm:mx-auto md:right-12 md:top-32 lg:right-[8vw] lg:top-32 xl:right-36 xl:top-32 2xl:top-72 2xl:right-60 ">
        {/* <div className="absolute vsm:mx-auto md:right-4 md:top-32 md:mr-12 lg:mr-[9vw] lg:top-28 xl:mr-36 xl:mt-20 2xl:mt-32 2xl:mr-72"> */}
        <div className="mb-4 font-bold vsm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-6xl">Your Search Engine For</div>
        <div className="mb-8 text-white font-bold vsm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-6xl">Real Estate Investments</div>
        <div className="flex justify-center">
          <ExploreMoreButton className="" Text="Explore More" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6">
        <Tagline />
      </div>
    </div>
  )
}

export default LandingPage;