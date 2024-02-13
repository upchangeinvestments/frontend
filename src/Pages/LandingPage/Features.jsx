import React, { useLayoutEffect, useRef, useState } from "react";
import GlassCard from '../../common/GlassCard';


function Features() {
  const data = [
    {
      title: [`Passive `, < span className="text-[#9747FF]" > Income</span >],
      image: "https://i.postimg.cc/56W291tM/coin.png",
      description: [`Earn `, < span className="text-[#9747FF] font-medium	" > Periodic income</span >, ` and receive `, < span className="text-[#9747FF] font-medium	" > monetary benefits</span >]
    },
    {
      title: [`Right Targeted `, < span className="text-[#9747FF]" > Investments</span >],
      image: "https://i.postimg.cc/QF08qTJX/right-aud.png",
      description: [`Customize your Investment needs by `, < span className="text-[#9747FF] font-medium" > filtering </span >, `your type of projects and `, < span className="text-[#9747FF] font-medium	" > ROI</span >]
    },
    {
      title: [`Diverify `, < span className="text-[#9747FF]"> Portfolio</span >],
      image: "https://i.postimg.cc/tsXRP5PS/portfolio.png",
      description: [`Add Real estates to your portfolio & `, < span className="text-[#9747FF] font-medium" > diversify your Investments</span >]
    },
    {
      title: [< span className="text-[#9747FF]" > Global</span >, ` Reach`],
      image: "https://i.postimg.cc/hf8PfwJQ/globe.png",
      description: [`Attracting `, < span className="text-[#9747FF] font-medium	" > local & inter-national </span >, ` Investments`]
    },
    // https://postimg.cc/gallery/C5XC4Ys -> gallery for images -> postimg.cc
  ];
  return (
    <div className="flex flex-col items-center my-12 lg:mb-6 justify-items-center vsm:mx-6 lg:mx-20">
      <h2 className="vsm:text-2xl md:text-3xl CustomizeFontH mb-4">FEATURES OF THIS PLATFORM</h2>
      <div className="grid md:grid-cols-2 sm:gap-x-8 gap-y-8 md:gap-x-8 lg:gap-x-16 text-black py-4">
        {data.map((feature, index) => (
          <GlassCard className="" key={index} title={feature.title} image={feature.image} description={feature.description} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Features; 