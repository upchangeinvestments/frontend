import React from 'react';
import ExploreMoreButton from "../../common/exploreMoreButton";
import Tagline from "./Tagline";

function LandingPage() {
  return (
    <div className='relative max-h-screen h-[90vh] w-full flex flex-col justify-center items-end vsm:flex vsm:flex-col vsm:items-center vsm:justify-center'>
      <div className="absolute vsm:mx-auto md:right-4 top-40 lg:mr-28">
        <div className="text-5xl mb-4 font-bold vsm:text-3xl">Your Search Engine For</div>
        <div className="text-5xl mb-8 text-white font-bold vsm:text-3xl">Real Estate Investments</div>
        <div className="flex justify-center">
          <ExploreMoreButton className="" Text="Explore More" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-2">
        <Tagline />
      </div>
    </div>
  )
}

export default LandingPage;