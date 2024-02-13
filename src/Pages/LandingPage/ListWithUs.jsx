import React from 'react'
import { Link } from "react-router-dom";

function ListWithUs() {
    return (
        <Link to="/premium" className='my-12 flex items-center justify-center text-2xl underline'>
            <h1>List with us</h1>
        </Link>
    )
}

export default ListWithUs;