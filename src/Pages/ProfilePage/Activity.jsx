import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";
import StarredPosts from "./StarredPosts";
import InvestmentData from "../../assets/FilterData.json";

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
    <div className="">
      {starredData && (starredData.length === 0) && (
        <div className='flex items-center  justify-center flex-col gap-6'>
          <img className="rounded-3xl mt-32 z-[9999]" src="https://i.pinimg.com/564x/42/ef/d7/42efd7e3b3b68f6d1227108a70c65002.jpg" alt="" />
          <p className=''>Nothing here to see, like posts to see here!</p>
        </div>
      )}
      <div className="mx-8">
        <div className="grid vsm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 md:gap-y-2 lg:gap-y-10 xl:gap-y-12">
          {starredData && starredData.map(index => (
            <StarredPosts key={index} data={{ ...InvestmentData[index], index: index }} updatePosts={updatePostsHandler} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activity;
