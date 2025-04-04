import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from '../../utils/AuthContext';
import { Link } from "react-router-dom";
import Carousel from "react-grid-carousel";
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton";
import NewsApiData from "../../assets/newsApiData.json";

const NewsCard = ({ data, index }) => {
  return (
    <Link
      to={data.newsLink_href}
      target="_blank"
      key={index}
      className="h-[300px] bg-white/20 backdrop-blur-xl rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center py-2 px-4 mb-4 mx-2 lg:mx-8 "
    >
      <img
        src={data.image_src}
        alt="Card"
        className="w-[270px] h-[170px] rounded-lg "
      />
      <div className="p-4 hover:underline">
        <h3 className="text-base font-['Playfair-Display']  font-bold">
          {" "}
          {data.title.length > 55
            ? `${data.title.substring(0, 55)}...`
            : data.title}
        </h3>
        {/* <div className="flex items-center  justify-between text-black mt-2">
          <p className="text-sm font-['Playfair-Display']  ">
            {data.source.name.length > 15
              ? `${data.source.name.substring(0, 15)}...`
              : data.source.name}
          </p>
          <p className="text-xs font-['Playfair-Display'] ">
            {data.publishedAt.substring(0, 10)}
          </p>
        </div> */}
      </div>
    </Link>
  );
};
function News() {

  return (
    <div className="relative">
      <Carousel
        cols={3}
        rows={1}
        gap={10} arrowLeft={<LeftArrow dir="left" />}
        arrowRight={<RightArrow dir="left" />}
        loop
      >
        {NewsApiData.map(
          (data, index) => (
            <Carousel.Item key={index} className="">
              <NewsCard data={data} index={index} />
            </Carousel.Item>
          )
        )}
      </Carousel>
    </div>
  );
}

export default News;
