import React from 'react';
import "../../styles/LandingPage/Post.css";

function Post({ data, type }) {
    const isEven = data.index % 2 === 0;
    return (
        <div className="">
            <div className="hidden xl:grid grid-cols-2 xl:mx-6 rounded-lg bg-white p-4">
                <div className="">
                    <div className="">
                        <img src={data.image} alt="Property Image" />
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <div className="progress-section">
                                <div className="task-progress flex items-center justify-center">
                                    <progress className="progress progress1" max="100" value="57"></progress>
                                    <p className="text-xs text-nowrap ml-2">57% Funded</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-y-3 gap-x-2">
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
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">Listed Company</button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">Management Fees</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className="vsm:text-base md:text-xl CustomizeFontH flex justify-center px-2">{data.title}</h3>
                    <p className="text-gray-600 mb-2 px-4">{data.location}</p>
                    <p className="text-gray-700 md:text-xs xl:text-base	text-justify px-4">
                        {data.description.length > 75 ? `${data.description.substring(0, 70)}... see more` : data.description}
                    </p>
                    <div className="p-2 grid grid-cols-2 gap-y-2 gap-x-6 vsm:text-xs sm:text-base md:text-base mx-auto -mt-2">
                        <div className="flex items-center justify-center flex-col">
                            <div className="text-gray-600">Min Investment</div>
                            <div className="font-bold text-base ">$ 10K</div>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <p className="text-gray-600">Hold period</p>
                            <p className="font-bold text-base">24 months</p>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <div className="text-gray-600">Category type</div>
                            <div className="font-bold text-base capitalize">{`${type}`}</div>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <p className="text-gray-600">Target IRR</p>
                            <p className="font-bold text-base">{data.IRR}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-[#9747FF] text-white px-4 py-2 rounded-md hover:bg-purple-600">Know More </button>
                    </div>
                </div>
            </div >
            <div className={`xl:hidden vsm:flex vsm:flex-col vsm:my-6 lg:my-0 md:flex ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} xl:flex-row items-center justify-center`}>
                <div className="relative flex">
                    <img className={`vsm:w-[300px] md:w-[300px] lg:w-auto lg:h-[350px] vsm:rounded-t-lg  ${isEven ? 'lg:rounded-r-lg' : 'lg:rounded-l-lg'} xl:rounded-none xl:rounded-l-lg`} src={data.image} alt="" />
                    <div className="absolute bottom-4 w-full flex items-center">
                        <div className="progress-section">
                            <div className="task-progress flex items-center justify-center">
                                <progress className="progress progress1" max="100" value="57"></progress>
                                <p className="text-xs text-nowrap ml-2">57% Funded</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`bg-white vsm:w-[300px] md:w-[300px] lg:h-[350px] vsm:p-6 md:p-4 lg:w-1/2 vsm:rounded-b-lg lg:rounded-none ${isEven ? 'lg:rounded-l-lg' : 'lg:rounded-r-lg'}  xl:rounded-none xl:rounded-r-lg`}>
                    <h3 className="vsm:text-base md:text-xl CustomizeFontH flex justify-center">{data.title}</h3>
                    <p className="text-gray-600 mb-2">{data.location}</p>
                    <p className="text-gray-700 text-xs	text-justify">
                        {data.description.length > 75 ? `${data.description.substring(0, 100)}... see more` : data.description}
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-y-2 gap-x-2">
                        <div className="w-auto mx-auto">
                            <div className="text-gray-600  text-sm">Min Investment</div>
                            <div className="font-bold vsm:text-base sm:text-lg ">$ 10K</div>
                        </div>
                        <div className="w-auto mx-auto">
                            <p className="text-gray-600  text-sm">Hold period</p>
                            <p className="font-bold vsm:text-base sm:text-lg">24 months</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <div className="text-gray-600  text-sm">Category type</div>
                            <div className="font-bold vsm:text-base sm:text-lg capitalize">{`${type}`}</div>
                        </div>
                        <div className="w-auto mx-auto">
                            <p className="text-gray-600  text-sm">Target IRR</p>
                            <p className="font-bold vsm:text-base sm:text-lg">{data.IRR}</p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <div className="flex overflow-x-scroll gap-x-2 ButtonSection">
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">Documents</button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">IRA eligibilty</button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">Listed Company</button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">Terms</button>
                            </div>
                            <div className="border-slate-400 border rounded-lg ">
                                <button className="text-gray-700 px-2.5 py-1 rounded-md text-nowrap	">Management Fees</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                        <button className="bg-[#9747FF] text-white px-4 py-2 rounded-md hover:bg-purple-600">Know More </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Post;
