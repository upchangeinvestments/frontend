import React from 'react'
import "../../styles/CategoryPage/categoryPage.css"
import NavBar from '../../commonComponents/NavBar';
// import SearchBox from '../../commonComponents/SearchBox';
import FilterSection from '../../commonComponents/FilterSection';

function CategoryPage() {
    return (
        <div className='categoryMain'>
            <NavBar />
            <div className="">
                <p className='uppercase text-white font-bold text-5xl flex items-center justify-center h-[50vh]'>Explore Categories</p>
            </div>
            {/* <SearchBox /> */}
            <FilterSection />
        </div>
    )
}

export default CategoryPage;