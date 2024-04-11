import React from 'react'
import NavBar from '../../commonComponents/NavBar'
import Footer from '../../commonComponents/Footer'
function HowItWorksPage() {
  return (
    <div className="">
        <div className="premiumMain">
          <NavBar/>
          <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
            <p className="uppercase font-['Playfair-Display'] lg:text-5xl xl:text-6xl text-white vsm:text-4xl md:text-5xl lg:-mt-[215px] lg:mr-[53px] xl:-mt-[430px] xl:mr-[145px] ">
              How It Works
            </p>
          </div>
        </div>
        <div className='flex flex-col vsm:mt-[-175px] md:mt-[-160px] lg:mt-[-220px] items-center justify-center'>
        <span className="vsm:text-xl md:text-2xl vsm:mb-[20px] font-medium">What is an Aggregator System?{" "}</span>
            <div className="flex flex-col items-center justify-center vsm:bg-white/20 vsm:backdrop-blur-3xl md:backdrop-blur-none md:bg-transparent vsm:mx-4 vsm:rounded-lg vsm:mb-[50px]">
              <img className="bg-white/20 backdrop-blur-xl rounded-lg vsm:w-[80%] md:w-[40%] vsm:mt-[20px] md:mt-[30px] lg:mt-[60px] " src="https://i.postimg.cc/XJjjqRMq/lynkinv-removebg1.png" alt="" />
              <p className="flex flex-col items-center justify-center vsm:text-lg vsm:w-[80%] md:w-[50%] mt-[40px] vsm:mb-[20px] md:mb-[50px] text-center"> Lynkinfinite Investments utilizes an aggregator system to consolidate real estate investment opportunities from various reputable firms into a single, centralized platform. This system streamlines the process for users, allowing them to easily explore, compare, and select tailored investment options in one convenient location.</p>
            </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
  )
}

export default HowItWorksPage