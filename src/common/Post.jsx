import React from 'react';
import "../styles/Post.css";

function Post() {
    return (
        <div className="">
            <div className="flex mx-auto w-[50vw] h-[60vh] ">
                {/* <div className="flex mx-auto px-4 "> */}
                <div className="flex">
                    <img className="rounded-l-lg" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="bg-white shadow-md p-8 w-1/2 rounded-r-lg">
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

                    <div className="mt-2">
                        <div className="flex items-center mb-4">
                            <div className="progress-section" data-aos="fade-left" data-aos-once="true">
                                <div className="task-progress flex items-center justify-center">
                                    <progress className="progress progress1" max="100" value="57"></progress>
                                    <p className="text-xs text-nowrap ml-2">57% Funded</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex overflow-x-scroll gap-x-2 ButtonsSection "
                            style={{
                                '-webkit-scrollbar': 'width: 3px; background-color: #f5f5f5;',
                                '-webkit-scrollbar-thumb': 'background-color: #cccccc; border-radius: 3px;',
                                /* Add other vendor prefixes as needed */
                            }}
                        >
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">Documents</button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">IRA eligibilty</button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">Terms</button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">Management Fees</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                        <button className="bg-[#9747FF] text-white px-4 py-2 rounded-md hover:bg-purple-600">Know More </button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Post;