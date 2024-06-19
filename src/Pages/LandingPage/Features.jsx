import React from "react";
import GlassCard from "../../commonComponents/GlassCard";

function Features() {
  const data = [
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold">
          NATIONWIDE{" "}
        </span>,
        <span className="text-purple-600 font-['Playfair-Display']">
          {" "}
          Reach
        </span>,
      ],
      // image: "https://i.postimg.cc/56W291tM/coin.png",
      description: [
        `We offer`,
        <span className="text-purple-600 font-['Playfair-Display'] font-medium	">
          {" "}
          Selected local and national investment companies {""}
        </span>,
        `providing investors with access to`,
        <span className="text-purple-600 font-medium	">
          {""} diverse markets{" "}
        </span>,
        `across the country.`,
      ],
    },
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold uppercase">
          RIGHT TARGETED
        </span>,
        <span className="text-purple-600 font-['Playfair-Display']">
          {" "}
          Companies
        </span>,
      ],
      // image: "https://i.postimg.cc/QF08qTJX/right-aud.png",
      description: [
        `Customize your Investment needs by `,
        <span className="text-purple-600 font-['Playfair-Display'] font-medium">
          {" "}
          filtering{" "}
        </span>,
        `your type of `,
        <span className="text-purple-600 font-medium	">your trusted companies.</span>,
      ],
    },
    {
      title: [
        <span className="font-['Playfair-Display'] font-bold uppercase">
          Diversify
        </span>,
        <span className="text-purple-600 font-['Playfair-Display']">
          {" "}
          Portfolio
        </span>,
      ],
      // image: "https://i.postimg.cc/tsXRP5PS/portfolio.png",
      description: [
        `Diversify your `,
        <span className="text-purple-600 font-['Playfair-Display'] font-medium">
          {" "}
          Real estate investments {""}
        </span>,
        `by category :`,
        <span className="text-purple-600 font-['Playfair-Display'] font-medium">
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
        <span className="text-purple-600 font-['Playfair-Display']">
          {" "}
          Companies
        </span>,
      ],
      // image: "https://i.postimg.cc/hf8PfwJQ/globe.png",
      description: [
        `Access `,
        <span className="text-purple-600 font-['Playfair-Display'] font-medium	">
          {" "}
          investment projects{" "}
        </span>,
        `  from various`,
        <span className="text-purple-600 font-['Playfair-Display'] font-medium	">
          {" "}
          reputable companies{" "}
        </span>,
        `through our`,
        <span className="text-purple-600 font-['Playfair-Display'] font-medium	">
          {" "}
          centralized platform.{" "}
        </span>,
      ],
    },
    // https://postimg.cc/gallery/C5XC4Ys -> gallery for images -> postimg.cc
  ];
  return (
    <div className="flex flex-col items-center my-12 font-['Playfair-Display'] lg:mb-6 justify-items-center vsm:mx-6 lg:mx-20 ">
      <h2 className="vsm:text-2xl md:text-3xl font-semibold mb-4 YesevaFont uppercase">
        <span className="text-purple-600">FEATURES </span> OF THIS PLATFORM
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
