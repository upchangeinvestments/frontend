import React from 'react'
import { Link } from "react-router-dom";

function ListWithUs() {
    return (
        <div className="w-auto mb-8 -mt-8 flex items-center justify-center ButtonFont">
            <Link to="/premium" className="text-2xl font-bold px-8 py-4 rounded-full shadow-sm  text-white bg-[#A474E2] opacity-[.80]">
                <button type='submit '>LIST WITH US</button>
            </Link>
        </div>
    )
}

export default ListWithUs;