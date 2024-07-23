import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function GlassCard(props) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="md:w-[350px] lg:w-[450px] xl:w-[550px] bg-white/20 backdrop-blur-lg flex flex-row justify-center items-center shadow-lg rounded-lg hover:shadows-xl py-6">
      <div className="w-[100%] px-8">
        <h3 className="text-xl mb-1 text-black">{props.title}</h3>
        <p className="text-black text-left text-lg pr-2">{props.description}</p>
      </div>
    </div>
  );
}

export default GlassCard;
