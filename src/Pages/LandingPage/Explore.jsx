import React from "react";
import PostCard from "../../commonComponents/PostCard";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import RMData from "../../assets/RMData.json";
import Carousel from "react-grid-carousel";
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton";

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
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto text-3xl mt-[40px] font-semibold mb-[60px] font-['Playfair-Display']">
        EXPLORE PROJECTS
      </div>
      <div className="vsm:w-[100%] md:w-[100%] mb-20">
         <Carousel
            cols={3}
            rows={1}
            gap={10}
            arrowLeft={<LeftArrow dir="right" />}
            arrowRight={<RightArrow dir="right" />}
            loop
          >
             {RMData.map((element, index) => (
              <Carousel.Item key={index}>  
            <div className="" key={index}>
              <PostCard data={element} />
            </div>
              </Carousel.Item>
            ))}
          </Carousel>
        {/* <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-100-px"
        >
          {RMData.map((element, index) => (
            <div className="" key={index}>
              <PostCard data={element} />
            </div>
          ))}
        </Carousel> */}
      </div>
    </div>
  );
}

export default Explore;
