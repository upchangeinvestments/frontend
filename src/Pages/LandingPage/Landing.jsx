import React from 'react';
import ExploreMoreButton from "../../common/exploreMoreButton";
import Tagline from "./Tagline";

function LandingPage() {
  return (
    <div className='relative max-h-screen h-[90vh] flex flex-col justify-center items-end '>
      <div className="absolute right-4 top-40 mr-28">
        <div className="text-5xl mb-4">Your Search Engine For</div>
        <div className="text-5xl mb-8 text-white">Real Estate Investments</div>
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