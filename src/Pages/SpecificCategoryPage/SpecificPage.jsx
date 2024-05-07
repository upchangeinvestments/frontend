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
// import PropagateLoader from "react-spinners/PropagateLoader";
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
        <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
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
      <div className="flex vsm:-mt-[220px] lg:-mt-[210px] xl:-mt-[290px] mb-16">
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
            <RingLoader
              color="#9747ff"
              loading={loading}
              size={170}
            />
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
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default SpecificPage;
