import React, { useState, useEffect } from "react";
import "../../styles/CategoryPage/categoryPage.css";
import NavBar from "../../commonComponents/NavBar";
// import SearchBox from '../../commonComponents/SearchBox';
import FilterSection from "../../commonComponents/Filter/FilterSection";
import Categories from "./Categories";
import Footer from "../../commonComponents/Footer";
import MobileFilterDrawer from "../../commonComponents/Filter/MobileFilterDrawer";
import MobileFilter from "../../commonComponents/Filter/MobileFilter";
import "../../App.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import RingLoader from "react-spinners/RingLoader";

function CategoryPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [filterData, setFilterData] = useState({});
  const [Id, setId] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => { }, [data]);

  const receiveDataObject = (dataObject) => {
    setData(dataObject);
  };

  const openDrawer = (index) => {
    setOpen((prevOpen) => !prevOpen);
    setId(index);
  };

  const receiveFilteredData = (data) => {
    setFilterData(data);
  };

  return (
    <div className="mobile-filter-drawer">
      <div className="categoryMain">
        <MobileFilterDrawer
          open={open}
          closeDrawer={openDrawer}
          data={data}
          Index={Id}
          sendFilteredData={receiveFilteredData}
          className="bg-transparent"
        />
        {/* filter section for mobile view */}
        <NavBar />
        <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
          <p className="uppercase font-['Playfair-Display'] text-white vsm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl lg:-mt-[350px] xl:-mt-[430px] mx-auto lg:ml-[60%]">
            Explore Categories
          </p>
        </div>
      </div>
      <div className="flex vsm:-mt-[220px] lg:-mt-[210px] xl:-mt-[290px] mb-16">
        <FilterSection sendFilteredData={receiveFilteredData} setLoader={setLoading} />
        <div className="vsm:flex vsm:flex-col vsm:w-[100%] md:w-[80%]">
          {loading === false && (<MobileFilter
            openDrawer={openDrawer}
            passDataObject={receiveDataObject}
          />)}
          {loading === false && <Categories data={filterData} />}
          {loading === true && <div className="flex items-center justify-center h-[70%] w-[100%] sticky bottom-12">
            {/* <PropagateLoader
              color="#9747ff"
              loading={loading}
              size={15}
            /> */}
            <RingLoader
              color="#9747ff"
              loading={loading}
              size={170}
            />
          </div>}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default CategoryPage;
