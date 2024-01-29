import React from 'react';
import ExploreMoreButton from "../../common/exploreMoreButton";

function LandingPage() {
  return (
    <div className='max-h-screen h-[90vh] flex flex-col justify-center items-end mr-32'>
      <div className="">
        <div className="text-5xl mb-4">Your Search Engine For</div>
        <div className="text-5xl mb-8 text-white">Real Estate Investments</div>
        <div className="flex justify-center">
          <ExploreMoreButton className="" Text="Explore More"/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;