import React from 'react';
import Post from "../../common/Post";
import ReactCardCarousel from "react-card-carousel";


function FeaturedProject() {
    return (
        <div className='relative grid grid-row gap-8 w-[100%] h-[80%]'>
            <div className="flex items-center justify-center text-3xl font-bold">
                Our Featured Project
            </div>
            <div className="relative" >
                <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
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