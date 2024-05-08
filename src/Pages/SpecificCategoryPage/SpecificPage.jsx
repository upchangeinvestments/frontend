import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../commonComponents/Footer";
import MobileFilterDrawer from "../../commonComponents/Filter/MobileFilterDrawer";
import MobileFilter from "../../commonComponents/Filter/MobileFilter";
import NavBar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";
// import SearchBox from "../../commonComponents/SearchBox";
import { GrClose } from "react-icons/gr";
import Tooltip from '@mui/material/Tooltip';
import FilterSection from "../../commonComponents/Filter/FilterSection";
import { useAuth } from "../../utils/AuthContext";
import Post from "./Posts";
import PaginationComponent from "../../commonComponents/PaginationComponent";
import "../../App.css";
import { GrSort } from "react-icons/gr";
import RingLoader from "react-spinners/RingLoader";
import axios from "axios";
import filterSVG from "../../assets/filter.svg";
// import { IoGameController } from "react-icons/io5";

function SpecificPage() {
  const { type } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [Id, setId] = useState(0);
  const [filterData, setFilterData] = useState({});
  const [unsortedData, setUnsorted] = useState({});
  const [totalPaginationPages, setTotalPaginationPages] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [starredPosts, setStarredPosts] = useState([]);
  const { user, backendUrl } = useAuth();
  const [loading, setLoading] = useState(false);
  const [viewSortFilter, setViewSortFilter] = useState(false);
  const sortFilterRef = useRef(null);
  const [investmentRange, setInvestmentRange] = useState("");
  const [fundTimeLine, setFundTimeLine] = useState("");
  const [IRR, setIRR] = useState("");
  var postsPerPage = 12;

  const receiveDataObject = (dataObject) => {
    setData(dataObject);
  };

  const openDrawer = (index) => {
    setOpen((prevOpen) => !prevOpen);
    setId(index);
  };

  const receiveFilteredData = (data) => {
    setFilterData(data);
    setUnsorted(data);
  };

  const PaginationHandler = (currentPage) => {
    setPageNo(currentPage);
    FetchLikedPosts();
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'investmentRange') {
      setInvestmentRange(value);
    } else if (name === 'fundTimeLine') {
      setFundTimeLine(value);
    } else if (name === 'IRR') {
      setIRR(value);
    }
  };

  const clearSortFilter = () => {
    setInvestmentRange("");
    setFundTimeLine("");
    setIRR("");
    setFilterData(unsortedData);
    setViewSortFilter(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [200]);
  }

  const SortFilterHandler = (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const formData = new FormData(form);
    setInvestmentRange(formData.get("investmentRange"));
    setFundTimeLine(formData.get("fundTimeLine"));
    setIRR(formData.get("IRR"));

    var sortData = [...filterData];
    if (investmentRange) {
      if (investmentRange === 'High') {
        sortData.sort((a, b) => b.minInvestment - a.minInvestment);
      } else {
        sortData.sort((a, b) => a.minInvestment - b.minInvestment);
      }
    }

    if (fundTimeLine) {
      if (fundTimeLine === 'started') {
        sortData = sortData.filter(item => item.funded <= 20)
      } else {
        sortData = sortData.filter(item => item.funded >= 80)
      }
    }

    if (IRR) {
      if (IRR === 'High') {
        sortData.sort((a, b) => b.IRR - a.IRR);
      } else {
        sortData.sort((a, b) => a.IRR - b.IRR);
      }
    }
    setFilterData(sortData);
    setViewSortFilter(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [200]);
  }

  const FetchLikedPosts = async () => {
    try {
      const starredPosts = await axios.get(`${backendUrl}/profile/${user._id}/fetchPosts`);
      const starredPostIndices = starredPosts.data.fetchedPosts.map((likedPost) => likedPost.postId);
      setStarredPosts(starredPostIndices);
    } catch (error) { }
  }
  useEffect(() => {
    FetchLikedPosts();
    const totalItems = filterData.length;
    const totalPages = Math.ceil(totalItems / postsPerPage);
    setTotalPaginationPages(totalPages);

    const handleClick = (event) => {
      if (sortFilterRef.current && !sortFilterRef.current.contains(event.target)) {
        setViewSortFilter(prev => !prev);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [filterData, user]);

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
          type={type}
        />
        {/* filter section for mobile view */}
        <NavBar />
        <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end vsm:mx-8 lg:mx-0">
          <p className="uppercase font-['Playfair-Display'] text-white vsm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl lg:-mt-[350px] xl:-mt-[430px] hidden lg:block lg:text-4xl font-medium mx-auto ml-[60%]">
            {type.split(" ").length === 1 ? (
              <div className="">
                <div className="">Explore {`${type}`}</div>
                <div className="">Properties</div>
              </div>
            ) : (
              <div className="">
                <div className="">Explore {type.split(" ")[0]} </div>
                <div className="">{type.split(" ").slice(1).join(" ")} Properties</div>
              </div>
            )}
          </p>
          <p className="uppercase font-['Playfair-Display'] text-white vsm:text-2xl md:text-4xl lg:hidden font-medium">
            {`Explore ${type} Properties`}
          </p>
        </div>
      </div>
      <div className="relative flex vsm:-mt-[220px] lg:-mt-[210px] xl:-mt-[290px] mb-16">
        <FilterSection sendFilteredData={receiveFilteredData} type={type} setLoader={setLoading} />
        <div className="vsm:flex vsm:flex-col vsm:w-[100%] md:w-[80%] ">
          {loading === false && (<MobileFilter
            openDrawer={openDrawer}
            passDataObject={receiveDataObject}
          />)}
          <div className="lg:mx-8">
            <div className="grid vsm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-6 md:gap-y-2 lg:gap-y-10 xl:gap-y-12">
              {loading === false && (filterData.length > 0) && filterData.slice((pageNo - 1) * postsPerPage, pageNo * postsPerPage).map((data, index) => (
                <div className="flex items-center justify-center" key={index}>
                  <Post data={{ ...data, index: (index + ((pageNo - 1) * 12)) }} blur={index === 0 ? "noBlur" : "noBlur"} starredPostIndices={starredPosts} FetchLikedPosts={FetchLikedPosts} />
                </div>
              ))}
            </div>
          </div>
          {loading === true && <div className="flex items-center justify-center h-[70%] w-[100%] sticky bottom-12">
            <RingLoader
              color="#9747ff"
              loading={loading}
              size={170}
            />
          </div>}
          {loading === false && (filterData.length > 0) && <PaginationComponent totalPages={totalPaginationPages} updateCurrentPage={PaginationHandler} />}
          {(filterData.length === 0) && (
            <div className="mx-auto z-[999] vsm:-mt-[50px] lg:mt-0">
              <img className="w-[450px]" src="https://i.postimg.cc/4y0f7QqX/pngtree-404-not-found-or-page-error-flat-line-concept-png-image-2468879-removebg-preview.png" alt="" />
              <p className="font-bold text-4xl text-center tracking-wider font-['Playfair-Display'] -mt-[100px]">No Data Found!</p>
            </div>
          )}
        </div>
        <div className="absolute right-8 -top-12 flex flex-col items-end ">
          <img src={filterSVG} className="w-[2rem] h-[2rem] -mt-2" alt="Sort Filter" onClick={() => setViewSortFilter(prev => !prev)} />
          {viewSortFilter && (<div ref={sortFilterRef} className="font-['Playfair-Display'] bg-white/30 backdrop-blur-xl w-[500px] rounded-lg mt-2">
            <form onSubmit={SortFilterHandler}>
              <h1 className="text-center font-bold text-2xl p-4 uppercase">Sort Investment Type</h1>
              <div className="w-full bg-[#9059d9]">
                <p className="text-left p-2 pl-8 text-lg font-bold text-white">Investment Range</p>
              </div>
              <div className="p2 pl-8 flex flex-col">
                <label className="mt-2">
                  <input className="mr-2" type="radio" name="investmentRange" value="High" checked={investmentRange === "High"} onChange={handleInputChange} />
                  High to low investment range
                </label>
                <label className="my-2">
                  <input className="mr-2" type="radio" name="investmentRange" value="low" checked={investmentRange === "low"} onChange={handleInputChange} />
                  Low to high investment range
                </label>
              </div>
              <div className="w-full bg-[#9059d9] ">
                <p className="text-left p-2 pl-8 text-lg font-bold text-white">Fund Timeline</p>
              </div>
              <div className="p2 pl-8 flex flex-col">
                <label className="mt-2">
                  <input className="mr-2" type="radio" name="fundTimeLine" value="started" checked={fundTimeLine === "started"} onChange={handleInputChange} />
                  Funding started recently
                </label>
                <label className="my-2">
                  <input type="radio" className="mr-2" name="fundTimeLine" value="closing" checked={fundTimeLine === "closing"} onChange={handleInputChange} />
                  Funding closing soon
                </label>
              </div>
              <div className="w-full bg-[#9059d9] ">
                <p className="text-left p-2 pl-8 text-lg font-bold text-white">Internal Rate of Return</p>
              </div>
              <div className="p2 pl-8 flex flex-col">
                <label className="mt-2">
                  <input className="mr-2" type="radio" name="IRR" value="High" checked={IRR === "High"} onChange={handleInputChange} />
                  High to low IRR
                </label>
                <label className="my-2">
                  <input className="mr-2" type="radio" name="IRR" value="low" checked={IRR === "low"} onChange={handleInputChange} />
                  Low to high IRR
                </label>
              </div>
              <div className="flex items-center justify-center">
                <button className="rounded-xl bg-[#9059d9] py-2 px-6 mb-4 text-white font-bold text-base">
                  APPLY
                </button>
              </div>
              <div className="absolute top-4 right-4" onClick={() => setViewSortFilter(false)}>
                <GrClose size={24} />
              </div>
              <Tooltip title="Clear All filter" className="absolute bottom-6 right-6" onClick={() => clearSortFilter()}>
                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#6e30a7" d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" /></svg>
              </Tooltip>
            </form>
          </div>)}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default SpecificPage;
