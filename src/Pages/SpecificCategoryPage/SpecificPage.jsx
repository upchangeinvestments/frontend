import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../commonComponents/Footer";
import MobileFilterDrawer from "../../commonComponents/MobileFilterDrawer";
import MobileFilter from "../../commonComponents/MobileFilter";
import NavBar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";
// import SearchBox from "../../commonComponents/SearchBox";
import FilterSection from "../../commonComponents/FilterSection";
import PropertyData from "../../assets/RMData.json";
import Post from "./Posts";
import "../../App.css";

function SpecificPage() {
  const { type } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [Id, setId] = useState(0);
  const [filterData, setFilterData] = useState({});

  const receiveDataObject = (dataObject) => {
    setData(dataObject);
  };

  const openDrawer = (index) => {
    setOpen((prevOpen) => !prevOpen);
    setId(index);
  };

  const receiveDataFromFilter = (data) => {
    console.log("in parent component: ", data);
    setFilterData(data);
  };

  return (
    <div className="categoryMain vsm:h-[60vh] md:h-[62vh] lg:h-[85vh] xl:h-[100vh] mobile-filter-drawer">
      <MobileFilterDrawer
        open={open}
        closeDrawer={openDrawer}
        data={data}
        Index={Id}
        className="bg-transparent"
      />
      {/* filter section for mobile view random */}
      <NavBar />
      <div className="w-full">
        <div className="uppercase text-white font-['Playfair-Display'] font-bold vsm:text-4xl flex flex-col items-center justify-center md: lg:ml-[550px] lg:mt-[-60px] xl:ml-[750px] h-[50vh] gap-8">
          <div className="">
            <p
              className="vsm:hidden lg:block  lg:text-4xl font-medium xl:text-5xl"
              style={{ wordSpacing: "" }}
            >
              <div className="">Explore {`${type}`}</div>
              <div className="">Properties</div>
            </p>
            <div
              className="vsm:text-2xl vsm:mt-[60px] sm:text-3xl md:text-4xl vsm:ml-[15px] msm:ml-[35px] sm:ml-[50px] md:ml-[10px] md:block lg:hidden flex flex-col items-center justify-center"
              style={{ wordSpacing: "0.25em" }}
            >
              <div className="">{`Explore ${type} Properties`}</div>
            </div>
          </div>
        </div>
        {/* <div className="w-full mt-[-100px] mb-[100px] bg-black">
          <SearchBox />
        </div> */}
      </div>
      <div className="flex vsm:-mt-[30px] md:mt-[10px] lg:mt-[50px] xl:mt-[10px] mb-16">
        <FilterSection sendDataToParent={receiveDataFromFilter} />
        <div className="vsm:flex vsm:flex-col vsm:w-[100%] md:w-[80%] ">
          <MobileFilter
            openDrawer={openDrawer}
            passDataObject={receiveDataObject}
          />
          <div className="lg:mx-8">
            <div className="grid vsm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-6 md:gap-y-2 lg:gap-y-10 xl:gap-y-12">
              {PropertyData.map((data, index) => (
                <div className="flex items-center justify-center" key={index}>
                  {/* <Post data={{ ...data, index: index }} type={type} blur={index === 0 ? "noBlur" : "blur"} /> */}
                  <Post data={{ ...data, index: index }} type={type} blur={index === 0 ? "noBlur" : "noBlur"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpecificPage;
