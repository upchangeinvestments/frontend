import React from "react";
import { Link } from "react-router-dom";
import hospital from "../../assets/categories/hospital.jpg";
import hotel from "../../assets/categories/hotels.jpeg";
import infrastructure from "../../assets/categories/infrastructure.jpg";
import office from "../../assets/categories/office1.jpeg";
import resident from "../../assets/categories/residential.jpeg";
import retail from "../../assets/categories/retail.jpg";
import school from "../../assets/categories/school.jpg";
import warehouse from "../../assets/categories/warehouse.jpg";
import BlurBuilding from "../../assets/Building_blur-xl.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

// import storage from "../../assets/categories/storage.jpg";

const Images = [
  resident,
  retail,
  hotel,
  warehouse,
  hospital,
  school,
  office,
  infrastructure,
  BlurBuilding,
];
const Texts = [
  "Residential",
  "Retail",
  "Hotels",
  "Warehouse & Storage",
  "Medical Facilites",
  "School",
  "Office",
  "Infrastructure",
  "View All",
];
const type = [
  "residential",
  "retail",
  "hotel",
  "warehouse",
  "medical",
  "school",
  "office",
  "infrastructure",
  "all",
];

const categoryData = Images.map((image, index) => ({
  image: image,
  text: Texts[index],
  type: type[index],
}));

function Categories() {
  return (
    <div className=" mx-8">
      <div className="grid  vsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6  gap-y-12">
        {categoryData.map((element, index) =>
          index === 8 ? (
            <div
              key={index}
              className="flex flex-col items-center justify-center "
            >
              <div className="vsm:w-[100%] xl:w-[90%] flex items-center justify-center relative ">
                <img
                  src={element.image}
                  alt=""
                  className="rounded-3xl object-cover vsm:w-[250px] h-[350px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                />
                <div className="font-['Playfair-Display'] font-bold text-xl absolute m-0 hover:underline flex items-center justify-center">
                  <p>{element.text}</p>
                  <MdKeyboardArrowRight size="25px" />
                </div>
              </div>
            </div>
          ) : (
            <Link
              to={element.type}
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="vsm:w-[100%] msm:w-[80%] sm:w-[70%] md:w-[100%] xl:w-[70%] flex items-center justify-center">
                <img
                  src={element.image}
                  alt=""
                  className="rounded-3xl object-cover h-[350px] shadow-xl"
                />
              </div>
              <div className="flex items-center justify-center pt-2">
                <p className="font-['Playfair-Display'] font-bold text-xl">
                  {element.text}
                </p>
              </div>
            </Link>
          )
        )}
      </div>
      {/* <div className="mt-4 flex items-center justify-center CustomizeFontH p-4 ">
                <button className="bg-[#9747FF] text-white px-4 py-2 rounded-md hover:bg-purple-600 w-44">See More </button>
            </div> */}
    </div>
  );
}

export default Categories;
