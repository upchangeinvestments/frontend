import React, { createRef } from "react";
import ReactCardCarousel from "react-card-carousel";
import PropertyData from "../../assets/RMData.json";

function FeaturedProject() {
  const carouselRef = createRef();
  return (
    <div className="grid grid-row gap-8 md:w-[100%] md:h-[700px] vsm:mt-[150px] md:-mt-[120px] lg:-mt-[230px] xl:-mt-[210px] vsm:mb-[250px] md:mb-[270px] lg:mb-[130px] 2xl:mb-[190px]">
      <div className="flex items-center justify-center text-3xl  md:mb-[50px] lg:-mb-[190px] xl:-mb-[170px] 2xl:-mb-[120px]">
        {/* OUR FEATURED PROJECTS */}
      </div>
      <div className="relative">
        <ReactCardCarousel
          autoplay={true}
          autoplay_speed={5000}
          ref={carouselRef}
          spread="wide" // Spread wide to adjust the position of cards
        >
          <div className="relative card">
            <p className="absolute top-2 left-2 bg-gradient-to-r from-[#6e30a7]  to-purple-300  text-white rounded-full px-3 font-semibold text-lg">
              Ad
            </p>
            <img
              className="md:h-[450px]"
              src="https://i.postimg.cc/J7jMSKX0/add.jpg"
              alt="add image"
            />
          </div>
          <div className="relative card">
            <p className="absolute top-2 left-2 bg-gradient-to-r from-[#6e30a7]  to-purple-300  text-white rounded-full px-3  font-semibold text-lg">
              Ad
            </p>
            <img
              className="md:h-[450px]"
              src="https://i.postimg.cc/cCZxF5dp/add1.jpg"
              alt="add image"
            />
          </div>
          <div className="relative card">
            <p className="absolute top-2 left-2 bg-gradient-to-r from-[#6e30a7]  to-purple-300  text-white rounded-full px-3  font-semibold text-lg">
              Ad
            </p>
            <img
              className="md:h-[450px]"
              src="https://i.postimg.cc/g2rYthP2/add2.jpg"
              alt="add image"
            />
          </div>
        </ReactCardCarousel>
      </div>
    </div>
  );
}

export default FeaturedProject;
