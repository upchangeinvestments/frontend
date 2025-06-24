import React from "react";
import PostCard from "./PostCard";
import Carousel from "react-grid-carousel";
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton";
import companyData from "../../assets/companyData";

const responsive = [
  {
    breakpoint: 1023,
    cols: 2,
    rows: 1,
    gap: 10,
    loop: true,
  }
]
function Explore() {
  return (
    <div className="flex flex-col items-center justify-center lg:-mt-10 md:mx-12 lg:mx-12 xl:mx-24">
      <div className="mx-auto text-2xl md:text-3xl text-center mt-[40px] font-semibold mb-[30px] YesevaFont">
        <span className="text-purple-600">EXPLORE & COMPARE</span> COMPANIES
      </div>
      <div className="w-[100%] mb-20">
        <Carousel
          cols={3}
          rows={1}
          gap={10}
          arrowLeft={<LeftArrow dir="right" />}
          arrowRight={<RightArrow dir="right" />}
          loop={true}
          mobileBreakpoint={767}
          responsiveLayout={responsive}>
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
