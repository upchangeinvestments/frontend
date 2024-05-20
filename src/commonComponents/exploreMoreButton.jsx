import React from "react";
import { Link } from "react-router-dom";

function ExploreMoreButton(props) {
  return (
    <Link to={props.Link} className="bg-[#ccaaf8]  px-4 py-2 rounded-full">
      <button className="text-black flex items-center justify-center gap-4">
        <div className="text-lg font-['Playfair-Display']  font-semibold">
          {props.Text}
        </div>
        <div className="">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </div>
      </button>
    </Link>
  );
}

export default ExploreMoreButton;
