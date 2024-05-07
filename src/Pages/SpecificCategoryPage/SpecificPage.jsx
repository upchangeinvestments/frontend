import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../commonComponents/Footer";
import MobileFilterDrawer from "../../commonComponents/Filter/MobileFilterDrawer";
import MobileFilter from "../../commonComponents/Filter/MobileFilter";
import NavBar from "../../commonComponents/NavBar";
import "../../styles/CategoryPage/categoryPage.css";
// import SearchBox from "../../commonComponents/SearchBox";
import FilterSection from "../../commonComponents/Filter/FilterSection";
import { useAuth } from "../../utils/AuthContext";
import Post from "./Posts";
import PaginationComponent from "../../commonComponents/PaginationComponent";
import "../../App.css";
// import SkeletonCard from "../../commonComponents/SkeletonCard";
import PropagateLoader from "react-spinners/PropagateLoader";
import RingLoader from "react-spinners/RingLoader";
import axios from "axios";

function SpecificPage() {
  const { type } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [Id, setId] = useState(0);
  const [filterData, setFilterData] = useState({});
  const [totalPaginationPages, setTotalPaginationPages] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [starredPosts, setStarredPosts] = useState([]);
  const { user, backendUrl } = useAuth();
  const [loading, setLoading] = useState(false);
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
  };

  const PaginationHandler = (currentPage) => {
    setPageNo(currentPage);
    FetchLikedPosts();
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
  }, [filterData, user]);

  return (
    <div className="categoryMain vsm:h-[60vh] md:h-[62vh] lg:h-[85vh] xl:h-[100vh] mobile-filter-drawer">
      <MobileFilterDrawer
        open={open}
        closeDrawer={openDrawer}
        data={data}
        Index={Id}
        sendFilteredData={receiveFilteredData}
        className="bg-transparent"
        type={type}
      />
      {/* filter section for mobile view random */}
      <NavBar />
      <div className="w-full">
        <div className="uppercase text-white font-['Playfair-Display'] font-bold vsm:text-4xl flex flex-col items-center justify-center md: lg:ml-[550px] lg:mt-[-60px] xl:ml-[750px] h-[50vh] gap-8">
          <div className="">
            <div
              className="vsm:hidden lg:block  lg:text-4xl font-medium xl:text-5xl"
              style={{ wordSpacing: "" }}
            >
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
            </div>
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
                  {process.env.REACT_APP_NODE_ENV === "dev" ?
                    <Post data={{ ...data, index: (index + ((pageNo - 1) * 12)) }} blur={index === 0 ? "noBlur" : "noBlur"} starredPostIndices={starredPosts} FetchLikedPosts={FetchLikedPosts} /> :      // (post) data in not blurred in local dev
                    <Post data={{ ...data, index: (index + ((pageNo - 1) * 12)) }} blur={index === 0 ? "noBlur" : "blur"} starredPostIndices={starredPosts} FetchLikedPosts={FetchLikedPosts} />
                  }
                </div>
              ))}
            </div>
          </div>
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
            {/* <div className="grid vsm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-4 md:gap-y-2 lg:gap-y-10 xl:gap-y-12">
              {(() => {
                const skeletonCards = [];
                for (let i = 0; i < 12; i++) {
                  skeletonCards.push(
                    <div className="flex items-center justify-center" key={i}>
                      <SkeletonCard />
                    </div>
                  );
                }
                return skeletonCards;
              })()}
            </div> */}
          </div>}
          {loading === false && (filterData.length > 0) && <PaginationComponent totalPages={totalPaginationPages} updateCurrentPage={PaginationHandler} />}
          {(filterData.length === 0) && (
            <div className="mx-auto">
              <img className="w-[450px]" src="https://i.postimg.cc/4y0f7QqX/pngtree-404-not-found-or-page-error-flat-line-concept-png-image-2468879-removebg-preview.png" alt="" />
              <p className="font-bold text-4xl text-center tracking-wider font-['Playfair-Display'] -mt-[100px]">No Data Found!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpecificPage;
