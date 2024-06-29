import React from "react";
import PostCard from "./PostCard";
import Carousel from "react-grid-carousel";
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton";
import companyData from "../../assets/companyData";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 624 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 624, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Explore() {
  return (
    <div className="flex flex-col items-center justify-center lg:-mt-10">
      <div className="mx-auto text-3xl mt-[40px] font-semibold mb-[30px] YesevaFont">
        <span className="text-purple-600">EXPLORE & COMPARE</span> COMPANIES
      </div>
      <div className="vsm:w-[100%] md:w-[100%] mb-20">
        <Carousel
          cols={3}
          rows={1}
          gap={10}
          arrowLeft={<LeftArrow dir="right" />}
          arrowRight={<RightArrow dir="right" />}
          loop={true}
        // showDots={true}
        // autoplay={3000}
        >
          {companyData.map((element, index) => (
            <Carousel.Item key={index}>
              <div className="" key={index}>
                <PostCard data={element} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Explore;
