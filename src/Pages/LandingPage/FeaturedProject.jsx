import React from 'react';
import Post from "../../common/Post";
import ReactCardCarousel from "react-card-carousel";


function FeaturedProject() {
    return (
        <div className='grid grid-row gap-8 w-[100%] h-[80%] mt-4'>
            <div className="flex items-center justify-center text-3xl font-bold vsm:mb-80 lg:mb-52">
                Our Featured Project
            </div>
            <div className="relative mb-72" >
                <ReactCardCarousel autoplay={false} autoplay_speed={3000}>
                    <div className=''>
                        <Post />
                    </div>
                    <div>
                        <Post />
                    </div>
                    <div>
                        <Post />
                    </div>
                </ReactCardCarousel>
            </div>
        </div>
    );
}

export default FeaturedProject;