import React from 'react'
import { Link } from "react-router-dom";

function ListWithUs() {
    return (
        <div className="w-auto mb-8 -mt-8 flex items-center justify-center CustomizeFontH">
            <Link to="/premium" className="text-3xl px-8 py-4 rounded-full shadow-sm  text-white bg-[#9747FF] hover:bg-[#8e47ec] bg-gradient-to-r from-purple-500 to-purple-700">
                <button type='submit'>LIST WITH US</button>
            </Link>
        </div>
    )
}

export default ListWithUs;