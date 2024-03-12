import React from 'react'

function SearchBox(props) {
    return (
        <div className="2xl:max-w-6xl mx-auto w-full p-4">
            <form className="vsm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto">
                <label for="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
                <div className="relative flex items-center">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="outline-none block w-full p-4 ps-12 text-base rounded-full bg-gray-50 text-black" placeholder="Search..." required />
                    <button type="submit" className="text-white absolute inset-y-0 right-0 m-1 font-medium rounded-full text-base px-6 bg-[#9747FF] hover:bg-[#8e47ec] bg-gradient-to-r from-purple-500 to-purple-700" >Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBox;