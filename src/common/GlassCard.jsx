import React from 'react'

function GlassCard(props) {
  return (
    <div
      className="w-auto bg-white/20 backdrop-blur-sm rounded-lg flex flex-row justify-center items-center shadow-lg hover:shadow-xl py-2"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="">
        <div
          className="w-32 h-32 mr-4"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="w-[60%]">
        <h3 className="text-xl font-bold mb-1 text-black">{props.title}</h3>
        <p className="text-black text-left	text-lg">{props.description}</p>
      </div>
    </div>
  )
}

export default GlassCard;