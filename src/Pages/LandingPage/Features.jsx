import React from "react";
import GlassCard from "../../commonComponents/GlassCard";

function Features() {
  const data = [
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold">
          NATIONWIDE{" "}
        </span>,
        <span className="text-[#6e30a7] font-['Playfair-Display']">
          {" "}
          Reach
        </span>,
      ],
      // image: "https://i.postimg.cc/56W291tM/coin.png",
      description: [
        `Earn `,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium	">
          {" "}
          Select local
        </span>,
        ` & `,
        <span className="text-[#6e30a7] font-medium	">
          {" "}
          national Investments
        </span>,
      ],
    },
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold uppercase">
          RIGHT TARGETED
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
        `your type of `,
        <span className="text-[#6e30a7] font-medium	">projects and ROI</span>,
      ],
    },
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold uppercase">
          Diversify
        </span>,
        <span className="text-[#6e30a7] font-['Playfair-Display']">
          {" "}
          Portfolio
        </span>,
      ],
      // image: "https://i.postimg.cc/tsXRP5PS/portfolio.png",
      description: [
        `Diversify your `,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium">
          {" "}
          Real estate investments {""}
        </span>,
        `by category :`,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium">
          {" "}
          Hotels, Retail, Land, warehouse
        </span>,
        `, etc.`,
      ],
    },
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold uppercase">
          REPUTABLE
        </span>,
        <span className="text-[#6e30a7] font-['Playfair-Display']">
          {" "}
          Firms
        </span>,
      ],
      // image: "https://i.postimg.cc/hf8PfwJQ/globe.png",
      description: [
        `Access `,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium	">
          {" "}
          investment projects{" "}
        </span>,
        `  from various`,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium	">
          {" "}
          reputable firms{" "}
        </span>,
        `through our`,
        <span className="text-[#6e30a7] font-['Playfair-Display'] font-medium	">
          {" "}
          centralized platform{" "}
        </span>,
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
