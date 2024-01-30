import React from 'react';
// import "../../styles/Tagline.css";

function Tagline() {
  return (
    <div className='flex flex-row w-full gap-8 justify-center text-3xl	'>
        <div className="">
          ONE <span className="text-white">PLATFORM</span>
        </div>
       <div className="text-container flex">
            <p className="static-text">ENDLESS <span className="text-white">OPPORTUNITIES</span></p>
            <ul className="dynamic-text text-white">
                {/* <li class="item"> OPPORTUNITIES</li> */}
                {/* <li class="item">COMPANIES</li> */}
            </ul>
      </div>
    </div>
  )
}

export default Tagline;     