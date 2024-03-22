import React from "react";
import PostCard from "../../commonComponents/PostCard";
import RMData from "../../assets/RMData.json";

function Activity() {
  const sixCardsData = RMData.slice(0, 6);

  return (
    <div>
      <h2 className="text-3xl mt-12 text-white font-['Playfair-Display'] font-bold mb-4">
        Favourites
      </h2>
      <div className="grid vsm:grid-col-1 md:grid-cols-2  lg:grid-cols-3 mt-12 justify-center">
        {sixCardsData.map((element, index) => (
          <div key={index} className="flex justify-center">
            <PostCard data={element} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
