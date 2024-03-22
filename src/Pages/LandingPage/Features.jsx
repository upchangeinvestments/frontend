import React from "react";
import GlassCard from "../../commonComponents/GlassCard";

function Features() {
  const data = [
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold">PASSIVE</span>,
        <span className="text-[#6e30a7] font-['Playfair-Display']">
          {" "}
          Income
        </span>,
      ],
      // image: "https://i.postimg.cc/56W291tM/coin.png",
      description: [
        `Earn `,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium	">
          {" "}
          Periodic income
        </span>,
        ` and receive `,
        <span className="text-[#6e30a7] font-medium	"> monetary benefits</span>,
      ],
    },
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold uppercase">
          Right Targeted
        </span>,
        <span className="text-[#6e30a7] font-['Playfair-Display']">
          {" "}
          Investments
        </span>,
      ],
      // image: "https://i.postimg.cc/QF08qTJX/right-aud.png",
      description: [
        `Customize your Investment needs by `,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium">
          {" "}
          filtering{" "}
        </span>,
        `your type of projects and `,
        <span className="text-[#6e30a7] font-medium	"> ROI</span>,
      ],
    },
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold uppercase">
          Diverify
        </span>,
        <span className="text-[#6e30a7] font-['Playfair-Display']">
          {" "}
          Portfolio
        </span>,
      ],
      // image: "https://i.postimg.cc/tsXRP5PS/portfolio.png",
      description: [
        `Add Real estates to your portfolio & `,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium">
          {" "}
          diversify your Investments
        </span>,
      ],
    },
    {
      title: [
        <span className="text-[#6e30a7] font-['Playfair-Display']">
          {" "}
          Global
        </span>,
        <span className="font-['Playfair-Display'] font-bold uppercase ml-2">
          Reach
        </span>,
      ],
      // image: "https://i.postimg.cc/hf8PfwJQ/globe.png",
      description: [
        `Attracting `,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium	">
          {" "}
          local & inter-national{" "}
        </span>,
        ` Investments`,
      ],
    },
    // https://postimg.cc/gallery/C5XC4Ys -> gallery for images -> postimg.cc
  ];
  return (
    <div className="flex flex-col items-center my-12 font-['Playfair-Display'] lg:mb-6 justify-items-center vsm:mx-6 lg:mx-20 ">
      <h2 className="vsm:text-2xl md:text-3xl mb-4">
        FEATURES OF THIS PLATFORM
      </h2>
      <div className="grid md:grid-cols-2 sm:gap-x-8 gap-y-8 md:gap-x-8 lg:gap-x-16 font-['Playfair-Display'] text-black py-4">
        {data.map((feature, index) => (
          <GlassCard
            className=""
            key={index}
            title={feature.title}
            image={feature.image}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
