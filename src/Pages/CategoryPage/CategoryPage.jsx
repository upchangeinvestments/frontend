import React, { useState, useEffect } from "react";
import "../../styles/CategoryPage/categoryPage.css";
import NavBar from "../../commonComponents/NavBar";
// import SearchBox from '../../commonComponents/SearchBox';
import FilterSection from "../../commonComponents/FilterSection";
import Categories from "./Categories";
import Footer from "../../commonComponents/Footer";
import MobileFilterDrawer from "../../commonComponents/MobileFilterDrawer";
import MobileFilter from "../../commonComponents/MobileFilter";
import "../../App.css";

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

  useEffect(() => { }, [data]);

  return (
    <div className="mobile-filter-drawer">
      <div className="categoryMain">
        <MobileFilterDrawer
          open={open}
          closeDrawer={openDrawer}
          data={data}
          Index={Id}
          className="bg-transparent"
        />
        {/* filter section for mobile view */}
        <NavBar />
        <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
          <p className="uppercase font-['Playfair-Display'] text-white vsm:text-2xl md:text-4xl lg:text-[40px] xl:text-[60px]  lg:-mt-[220px] lg:mr-[15px] xl:-mt-[430px] xl:mr-[20px] ">
            Explore Categories
          </p>
        </div>
      </div>
      <div className="flex vsm:-mt-[220px] lg:-mt-[210px] xl:-mt-[290px] mb-16">
        <FilterSection />
        <div className="vsm:flex vsm:flex-col vsm:w-[100%] md:w-[80%]">
          <MobileFilter
            openDrawer={openDrawer}
            passDataObject={receiveDataObject}
          />
          <Categories />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default CategoryPage;
