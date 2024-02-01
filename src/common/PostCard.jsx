import React from 'react';

const RealEstateCard = ({ location }) => {
    return (
        <div className='flex flex-col items-center justify-center mb-20 '>
            <div className="w-[80%]">
                <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="bg-white shadow-md rounded-b-lg p-4 px-6 w-[80%]">
                <div className="flex items-center justify-center">
                    <div className="text-lg font-bold">NE Real Estate title</div>
                </div>
                <div className="flex gap-1 items-center">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                    <p>{location}</p>
                </div>
                <div className="text-gray-600 mt-2">Eligendi non quis exercite culpa nesciunt nihil aut nostrum ... see more</div>
                <div className="progress-section " data-aos="fade-left" data-aos-once="true">
                    <div className="task-progress flex items-center justify-center">
                        <progress className="progress progress1" max="100" value="57"></progress>
                        <p className="text-xs text-nowrap ml-2">57% Funded</p>
                    </div>
                </div>
                <div className="flex justify-between items-center  mt-4">
                    <button className="bg-[#9747FF] text-white py-2 px-4 rounded-lg  hover:bg-purple-600">Know more...</button>
                    <div className="flex-nowrap">
                        <p>
                            Min Investment
                        </p>
                        <p className="font-bold">$10K</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealEstateCard;