import React from 'react'
import GlassCard from '../../common/GlassCard';

function Features() {
  const data = [
    {
      title: "Passive Income",
      image: "https://i.postimg.cc/56W291tM/coin.png",
      description: "Earn Periodic income and receive deposits quarterly"
    },
    {
      title: "Right Audience",
      image: "https://i.postimg.cc/QF08qTJX/right-aud.png",
      description: "Get your posts viewed by those who are interested"
    },
    {
      title: "Diverify Portfolio",
      image: "https://i.postimg.cc/tsXRP5PS/portfolio.png",
      description: "Add different types of Real estates & diversify your portfolio"
    },
    {
      title: "Global Reach",
      image: "https://i.postimg.cc/hf8PfwJQ/globe.png",
      description: "Attracting local & inter-national buyers"
    },
    // https://postimg.cc/gallery/C5XC4Ys -> gallery for images -> postimg.cc
  ];
  return (
    <div className="flex flex-col items-center my-16 justify-items-center overflow-hidden vsm:mx-6 lg:mx-20">
      <h2 className="vsm:text-2xl md:text-3xl font-bold mb-4">FEATURES OF THIS PLATFORM</h2>
      <div className="grid md:grid-cols-2 sm:gap-x-8 gap-y-8 md:gap-x-8 lg:gap-x-16 text-black py-4">
        {data.map((feature, index) => (
          <GlassCard className="" key={index} title={feature.title} image={feature.image} description={feature.description} />
        ))}
      </div>
    </div>
  )
}

export default Features; 