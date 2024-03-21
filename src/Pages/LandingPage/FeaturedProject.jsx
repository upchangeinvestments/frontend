import React, { createRef } from "react";
import Post from "../../commonComponents/Post";
import ReactCardCarousel from "react-card-carousel";
import PropertyData from "../../assets/RMData.json";

function FeaturedProject() {
  const carouselRef = createRef();
  return (
    <div className="grid grid-row gap-8 w-[100%] h-[700px] vsm:-mt-[130px] md:-mt-[120px] lg:-mt-[230px] xl:-mt-[210px] vsm:mb-[250px] md:mb-[270px] lg:mb-[130px] 2xl:mb-[190px]">
      <div className="flex items-center justify-center text-3xl  md:mb-[50px] lg:-mb-[190px] xl:-mb-[170px] 2xl:-mb-[120px]">
        OUR FEATURED PROJECTS
      </div>
      <div className="relative">
        <button
          className="absolute vsm:left-2 md:left-12 z-10"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            padding: "15px 15px",
            backgroundColor: "rgba(104, 104, 104, 0.703)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={() => carouselRef.current.prev()}
        >
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#E2E2E2"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
            />
          </svg>
        </button>
        <ReactCardCarousel
          autoplay={false}
          autoplay_speed={5000}
          ref={carouselRef}
        >
          {PropertyData.map((data, index) => (
            <div key={index}>
              <Post data={data} type="Residential" />
            </div>
          ))}
        </ReactCardCarousel>
        <button
          className="absolute vsm:right-2 md:right-12 z-10"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            padding: "15px 15px",
            backgroundColor: "rgba(104, 104, 104, 0.703)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={() => carouselRef.current.next()}
        >
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#E2E2E2"
              d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FeaturedProject;
