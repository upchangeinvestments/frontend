import React, { useState, useEffect } from "react";
import "../../styles/CategoryPage/categoryPage.css";
import NavBar from "../../commonComponents/NavBar";
// import SearchBox from '../../commonComponents/SearchBox';
import FilterSection from "../../commonComponents/FilterSection";
import Categories from "./Categories";
import Footer from "../../commonComponents/Footer";
import MobileFilterDrawer from "../../commonComponents/MobileFilterDrawer";
import MobileFilter from "../../commonComponents/MobileFilter";

function CategoryPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [Id, setId] = useState(0);

  const receiveDataObject = (dataObject) => {
    setData(dataObject);
  };

  const openDrawer = (index) => {
    setOpen((prevOpen) => !prevOpen);
    setId(index);
  };

  useEffect(() => {}, [data]);

  return (
    <div className="categoryMain lg:h-[55vh]  vsm:h-[60vh] md:h-[62vh] xl:h-[85vh] mobile-filter-drawer">
      <MobileFilterDrawer
        open={open}
        closeDrawer={openDrawer}
        data={data}
        Index={Id}
        className="bg-transparent"
      />
      {/* filter section for mobile view */}
      <NavBar />
      <div className="">
        <div className="uppercase  text-white flex items-center justify-end h-[50vh] lg:ml-[80px] xl:ml-[60px] 2xl:ml-[0px] ">
          <p className="vsm:text-2xl msm:text-3xl md:text-5xl mt-[-100px] mr-[100px]  font-['Playfair-Display']">
            {" "}
            Explore Categories
          </p>
        </div>
      </div>
      {/* <SearchBox /> */}
      <div className="flex   vsm:-mt-[100px] lg:-mt-[50px] xl:-mt-[100px] mb-16">
        <FilterSection />
        <div className="vsm:flex vsm:flex-col vsm:w-[100%] md:w-[80%]">
          <MobileFilter
            openDrawer={openDrawer}
            passDataObject={receiveDataObject}
          />
          <Categories />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
