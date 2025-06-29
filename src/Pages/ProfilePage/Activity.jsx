import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";
import StarredPosts from "./StarredPosts";
import InvestmentData from "../../assets/companyData.json";

function Activity() {
  const { user, backendUrl } = useAuth();
  const [starredData, setStarredData] = useState([]);

  const FetchLikedPosts = async () => {
    try {
      const likedPosts = await axios.get(`${backendUrl}/profile/${user._id}/fetchPosts`);
      const starredPostIndices = likedPosts.data.fetchedPosts.map((likedPost) => likedPost.postId);
      // console.log("starred posts: ", starredPostIndices);
      setStarredData(starredPostIndices);
    } catch (error) {
      // console.log("error: ", error);
    }
  }

  const updatePostsHandler = (data) => {
    const updatedPosts = data.map(item => (item.postId));
    // console.log('updated posts', updatedPosts);
    setStarredData(updatedPosts);
  }
  useEffect(() => {
    FetchLikedPosts();
  }, [user])

  return (
    <div className="w-[100%] md:w-[90%]">
      {starredData && (starredData.length === 0) && (
        <div className="flex items-center flex-col justify-center mt-20 font-bold font-['Playfair-Display']">
          {/* <img className="rounded-3xl mt-12 z-[9999]" src="https://i.pinimg.com/564x/42/ef/d7/42efd7e3b3b68f6d1227108a70c65002.jpg" alt="" /> */}
          <p className='text-3xl text-gray-500 uppercase w-[50%] text-center'>Nothing here to see, pin posts to see here!</p>
        </div>
      )}
      <div className="mt-12 xl:gap-y-20">
        <div className="grid grid-cols-3 gap-x-8 gap-y-10">
          {starredData && starredData.map(index => (
            <StarredPosts key={index} data={{ ...InvestmentData[index], index: index }} updatePosts={updatePostsHandler} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activity;
