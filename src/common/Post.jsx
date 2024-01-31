import React from 'react';
import "../styles/Post.css";

function Post() {
    return (
        <div className="flex mx-auto px-4 w-[60vw]">
            <div className="">
                <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 w-1/2">
                <h3 className="text-xl font-semibold flex justify-center">POST TITLE</h3>
                <p className="text-gray-600 mb-2">property location</p>
                <p className="text-gray-700 text-xs	text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                    non Voluptatum ducimus voluptates voluptas.... see more
                </p>
                <div className="mt-2 grid grid-cols-2 gap-y-4 gap-x-2">
                    <div className="w-auto">
                        <div className="text-gray-600">Min Investment</div>
                        <div className="font-bold">$ 10K</div>
                    </div>
                    <div className="w-auto">
                        <p className="text-gray-600">Hold period</p>
                        <p className="font-bold">24 months</p>
                    </div>
                    <div className="w-auto">
                        <div className="text-gray-600">Category type</div>
                        <div className="font-bold">Rental Property</div>
                    </div>
                    <div className="w-auto">
                        <p className="text-gray-600">Cash-on-cash period</p>
                        <p className="font-bold">Quarterly</p>
                    </div>
                </div>


                <div className="mt-6 ">
                    <div className="flex items-center">
                        <p className="text-gray-600 mr-4">XX% FUNDED</p>
                    </div>
                    <div className="flex overflow-x-scroll gap-x-2 ButtonsSection"
                        style={{
                            '-webkit-scrollbar': 'width: 3px; background-color: #f5f5f5;',
                            '-webkit-scrollbar-thumb': 'background-color: #cccccc; border-radius: 3px;',
                            /* Add other vendor prefixes as needed */
                        }}
                    >
                        <div className="border-slate-400 border rounded-lg ">
                            <button className="text-gray-700 px-4 py-2 rounded-md text-nowrap	">Documents</button>
                        </div>
                        <div className="border-slate-400 border rounded-lg ">
                            <button className="text-gray-700 px-4 py-2 rounded-md text-nowrap	">IRA eligibilty</button>
                        </div>
                        <div className="border-slate-400 border rounded-lg ">
                            <button className="text-gray-700 px-4 py-2 rounded-md text-nowrap	">Terms</button>
                        </div>
                        <div className="border-slate-400 border rounded-lg ">
                            <button className="text-gray-700 px-4 py-2 rounded-md text-nowrap	">Terms</button>
                        </div>
                        <div className="border-slate-400 border rounded-lg ">
                            <button className="text-gray-700 px-4 py-2 rounded-md text-nowrap	">Terms</button>
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-center">
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">Know More </button>
                </div>

            </div>
        </div >
    );
}

export default Post;