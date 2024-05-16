import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import hospital from "../../assets/categories/hospital.jpg";
import hotel from "../../assets/categories/hotels.jpeg";
import infrastructure from "../../assets/categories/infrastructure.jpg";
import office from "../../assets/categories/office1.jpeg";
import resident from "../../assets/categories/residential.jpeg";
import retail from "../../assets/categories/retail.jpg";
import warehouse from "../../assets/categories/warehouse.jpg";
import BlurBuilding from "../../assets/Building_blur-xl.jpg";
import parks from "../../assets/parks.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import SuccessToast from "../../utils/successToast";
import { useAuth } from "../../utils/AuthContext"

const Images = [resident, retail, hotel, warehouse, hospital, parks, office, infrastructure, BlurBuilding];
const Texts = ["Residential", "Retail", "Hotel", "Warehouse & Storage", "Medical Facilities", "Mobile Home Parks", "Office", "Land & Infrastructure", "View All"];
const type = ["Residential", "Retail", "Hotel", "Warehouse & Storage", "Medical Facilities", "Mobile Home Parks", "Office", "Land & Infrastructure", "All"];

const defaultFilters = {
  investmentRange: [],
  holdPeriod: [],
  locations: [],
  zipCode: ""
};

const categoryData = Images.map((image, index) => ({
  image: image,
  text: Texts[index],
  type: type[index],
}));

function Categories({ data, filter }) {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const [isFilterChanged, setIsFilterChanged] = useState(false);

  const allCategoriesData = data.length > 0 ? [...new Set(data.map((item) => item.category))].map((category) => {
    return categoryData.find((element) => element.type === category);
  }) : categoryData;

  const haveFiltersChanged = () => {
    const filterKeys = Object.keys(defaultFilters);
    for (let i = 0; i < filterKeys.length; i++) {
      const key = filterKeys[i];
      if (filter[key] && filter[key].length > 0) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (haveFiltersChanged()) {
      setIsFilterChanged(true);
    } else if (isFilterChanged === true) {
      setIsFilterChanged(false);
    }

    if (isFilterChanged && data.length === 0) {
      if (isAuth) {
        if (filter["category"] && filter["category"].length > 0) {
          const category = filter["category"][1];
          navigate(`/category/${category}`);
        } else {
          SuccessToast("Please select a category to filter better.");
        }
      } else {
        SuccessToast("To filter more data, Please Sign in!");
      }
    }
  }, [filter, data, isFilterChanged, isAuth]);

  return (
    <div className="mx-8 z-[1]">
      <div className="grid  vsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-x-6  gap-y-12">
        {allCategoriesData.map((element, index) =>
          index === 8 ? (
            <Link
              to={element.type}
              key={index}
              className="flex flex-col items-center "
            >
              <div className="vsm:w-[90%] xl:w-[65%] flex items-center justify-center relative ">
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
            </Link>
          ) : (
            <Link
              to={element.type}
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="vsm:max-w-[90%] msm:max-w-[80%] sm:max-w-[70%] md:max-w-[80%] lg:max-w-[80%] xl:max-w-[65%] flex items-center justify-center">
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
    </div>
  );
}

export default Categories;
