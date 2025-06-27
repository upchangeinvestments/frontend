import GlassCard from "../../commonComponents/GlassCard";

function Features() {
  const data = [
    {
      title: [
        <span className=" font-bold">  NATIONWIDE{" "} </span>,
        <span className="text-purple-600 ">Reach</span>,
      ],
      // image: "https://i.postimg.cc/56W291tM/coin.png",
      description: [
        `We offer`, <span className="text-purple-600  font-medium	">{" "}    Selected local and national investment companies {""}</span>,
        `providing investors with access to`, <span className="text-purple-600 font-medium	">  {""} diverse markets{" "}</span>,
        `across the country.`,
      ],
    },
    {
      title: [
        <span className=" font-bold uppercase"> RIGHT TARGETED{" "}</span>,
        <span className="text-purple-600 ">Companies</span>,
      ],
      // image: "https://i.postimg.cc/QF08qTJX/right-aud.png",
      description: [
        `Customize your Investment needs by `, <span className="text-purple-600  font-medium">  {" "}  filtering{" "}  </span>,
        `your type of `, <span className="text-purple-600 font-medium	">trusted companies.</span>,
      ]
    },
    {
      title: [
        <span className=" font-bold uppercase">  Diversify </span>,
        <span className="text-purple-600 ">  {" "}  Portfolio </span>,
      ],
      // image: "https://i.postimg.cc/tsXRP5PS/portfolio.png",
      description: [
        `Diversify your `, <span className="text-purple-600  font-medium">   {" "}   Real estate investments {""} </span>,
        `by category:`, <span className="text-purple-600  font-medium">  {" "}  Hotels, Retail, Land, warehouse</span>,
        `, etc.`,
      ],
    },
    {
      title: [
        <span className=" font-bold uppercase">  Analyze </span>,
        <span className="text-purple-600 ">  {"  "}  History </span>,
      ],
      // image: "https://i.postimg.cc/hf8PfwJQ/globe.png",
      description: [
        `Review the`, <span className="text-purple-600  font-medium	">  {" "}  company's background</span>, ` and make informed`,
        <span className="text-purple-600  font-medium	">   {" "}  investment{" "} </span>,
        `decisions.`,
      ],
    },
    // https://postimg.cc/gallery/C5XC4Ys -> gallery for images -> postimg.cc
  ];
  return (
    <div className="flex flex-col items-center my-12 font-['Playfair-Display'] lg:m-2 lg:mb-10 justify-items-center vsm:mx-6 lg:mx-20 ">
      <h2 className="vsm:text-2xl md:text-3xl font-bold mb-4 font-['Playfair-Display'] uppercase">
        <span className="text-purple-600">FEATURES </span> OF THIS PLATFORM
      </h2>
      <div className="grid md:grid-cols-2 sm:gap-x-8 gap-y-8 md:gap-x-8 lg:gap-x-16 font-['Playfair-Display'] text-black py-4">
        {data.map((feature, index) => (
          <GlassCard
            className="font-['Playfair-Display']"
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
