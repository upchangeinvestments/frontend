import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { propTypesSelected } from '@material-tailwind/react/types/components/select';

function GlassCard(props) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      // data-aos={(props.index % 2) == 0 ? "fade-right" : "fade-left"}
      className="w-auto bg-white/20 backdrop-blur-sm flex flex-row justify-center items-center shadow-lg rounded-lg hover:shadows-xl py-2"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="">
        <div
          className={props.index === 2 ? "w-24 h-24 mr-4" : "w-32 h-32 mr-4"}
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="w-[60%]">
        <h3 className="text-xl mb-1 text-black CustomizeFontH">{props.title}</h3>
        <p className="text-black text-left text-lg pr-2">{props.description}</p>
      </div>
    </div>
  )
}

export default GlassCard;