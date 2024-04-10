import React from 'react'
import NavBar from '../../commonComponents/NavBar'
import Footer from '../../commonComponents/Footer'
import logo from '../../assets/logo.png'


function Welcome() {
  return (
    <div className="">
    <div className="contactMain text-white">
      <NavBar />
      <div className="h-[80vh] flex flex-col font-['Playfair-Display'] items-center justify-center">
        <h2 className='text-5xl mt-[100px]'>Thanks for Choosing LynkInfinite Investments</h2>
        <p className='text-lg mt-[10px]'>Embark on Your Investment Journey: Let's Discover Your Preferences Together!</p>
        <img
              className="vsm:w-[60%] vsm:mb-6 msm:w[40%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[30%]"
              src={logo}
              alt="Infinite Investments"
            />
       <p className='text-2xl bg-white/20 backdrop:blur-2xl px-2 py-4 text-[#6e30a7] rounded-lg'>Mail has been sent to your E-Mail Account</p>   
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Welcome