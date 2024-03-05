import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";


const tabs = [
    { title: 'Terms & Conditions', content: 'content1' },
    { title: 'Privacy Policy', content: 'content2' },
    { title: 'About', content: 'content3' },
    { title: 'Logout', content: 'content4' },
];

const VerticalTabs = () => {
    const [isActive, setIsActive] = useState(0);

    return (
        <div className="grid grid-cols-12 my-8 gap-8">
            <div className="flex flex-col items-start bg-white/20 backdrop-blur-lg rounded-lg shadow-md p-4 col-span-3 xl:col-span-2">
                <ul className="flex flex-col space-y-2 w-full">
                    {tabs.map((tab, index) => (
                        <li className={`p-4 ${isActive === index ? 'bg-purple-500 rounded-lg text-white w-full' : ''}`} onClick={() => setIsActive(index)}>
                            <div className='flex items-center justify-between'>
                                <p> {tab.title}</p>
                                <MdKeyboardArrowRight />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-lg shadow-md p-4 col-span-9 xl:col-span-10">
                {tabs.map((tab, index) => (
                    <div className={`p-4 ${isActive === index ? 'block' : 'hidden'}`}>
                        <div
                            key={index}
                            className={`mb-4 ${isActive === index ? 'block' : 'hidden'}`}>
                            {tab.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalTabs;