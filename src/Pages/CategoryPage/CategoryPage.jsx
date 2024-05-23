import React, { useState, useEffect, useRef } from "react";
import "../../styles/CategoryPage/categoryPage.css";
import NavBar from "../../commonComponents/NavBar";
// import SearchBox from '../../commonComponents/SearchBox';
import FilterSection from "../../commonComponents/Filter/FilterSection";
import Categories from "./Categories";
import Footer from "../../commonComponents/Footer";
import MobileFilterDrawer from "../../commonComponents/Filter/MobileFilterDrawer";
import MobileFilter from "../../commonComponents/Filter/MobileFilter";
import "../../App.css";
import RingLoader from "react-spinners/RingLoader";
import { Helmet } from 'react-helmet-async';
import Tooltip from '@mui/material/Tooltip';

function CategoryPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [filterData, setFilterData] = useState({});
  const [Id, setId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const clearAllFilterRef = useRef();
  useEffect(() => { }, [data]);

  const receiveDataObject = (dataObject) => {
    setData(dataObject);
  };

  const openDrawer = (index) => {
    setOpen((prevOpen) => !prevOpen);
    setId(index);
  };

  const receiveFilteredData = (data, filter) => {
    setFilterData(data);
    setFilters(filter);
  };

  const ClearAllFilterHandler = () => {
    if (clearAllFilterRef.current) {
      clearAllFilterRef.current.clearAllFilters();
    }
  };

  return (
    <div className="mobile-filter-drawer">
      <Helmet>
        <title>LynkInfinite Investments</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/category" />
      </Helmet>
      <div className="categoryMain">
        <MobileFilterDrawer
          open={open}
          closeDrawer={openDrawer}
          data={data}
          Index={Id}
          sendFilteredData={receiveFilteredData}
          className="bg-transparent"
          ref={clearAllFilterRef}
        />
        {/* filter section for mobile view */}
        <NavBar />
        <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
          <p className="uppercase font-['Playfair-Display'] text-white vsm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl lg:-mt-[27%] mx-auto lg:ml-[58%] text-center">
            Explore Investments
          </p>
        </div>
      </div>
      <div className="relative flex vsm:-mt-[220px] lg:-mt-[210px] xl:-mt-[290px] mb-16">
        <div className="absolute right-4 -top-12 md:hidden">
          <Tooltip title="Clear All filters" onClick={ClearAllFilterHandler}>
            <div className="flex items-center justify-end mr-4 mt-3 ">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 flex items-center justify-center ">
                <svg className="w-6 h-6 pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#6e30a7" d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" /></svg>
              </div>
            </div>
          </Tooltip>
        </div>
        <FilterSection sendFilteredData={receiveFilteredData} setLoader={setLoading} />
        <div className="vsm:flex vsm:flex-col vsm:w-[100%] md:w-[80%]">
          {loading === false && (
            < MobileFilter
              openDrawer={openDrawer}
              passDataObject={receiveDataObject}
            />)}
          {loading === false && <Categories data={filterData} filter={filters} />}
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
