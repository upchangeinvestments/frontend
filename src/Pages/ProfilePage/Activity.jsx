import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostCard from "../../commonComponents/PostCard";
import RMData from "../../assets/RMData.json";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 624 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 624, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Activity() {
  const sixCardsData = RMData.slice(0, 6);

  return (
    <div className="flex flex-col mt-20 items-center justify-center">
      <div className="vsm:w-[100%] md:w-[100%]">
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {sixCardsData.map((element, index) => (
            <div key={index}>
              <PostCard data={element} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Activity;
