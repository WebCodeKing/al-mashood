import React from 'react'

const CompanyProfile = () => {
  return (
    <>
    <div className="px-6 my-20 sm:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
          <div className="max-w-3xl max-lg:mx-auto max-lg:text-center">
            <h1 className="bg-gradient-to-r from-[#ce9733] to-[#8a641f] bg-clip-text text-transparent md:text-5xl text-4xl font-bold !leading-tight">Al-Mashood Munazzam Pvt Ltd
              {/* <span className="bg-gradient-to-r from-[#ce9733] to-[#8a641f] bg-clip-text text-transparent"></span> */}
            
              
               </h1>
            <p className="text-slate-600 text-base leading-relaxed mt-6">Al-Mashood Munazzam Pvt Ltd is a leading conglomerate in the Hajj and Umrah services sector, managing a network of 33 affiliated companies across Pakistan. With decades of experience, we have successfully facilitated thousands of pilgrims each year, offering end-to-end services including travel arrangements, accommodation, and on-ground support in Saudi Arabia. Our corporate office coordinates a seamless flow of operations, ensuring timely packages, transparent payments, and efficient quota management for every pilgrim. Committed to excellence and trust, Al-Mashood leverages its vast network and industry expertise to provide an organized, secure, and spiritually fulfilling journey for Hujjaj nationwide. </p>

            {/* <div className="mt-12 flex flex-wrap gap-6 max-lg:justify-center">
              <button type='button'
                className="bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-full px-6 py-3 cursor-pointer outline-0">Try It for Free</button>
              <button type='button'
                className="bg-transparent hover:bg-slate-100 border border-indigo-700 transition-all text-base text-slate-900 font-medium rounded-full px-6 py-3 cursor-pointer outline-0">See How It Works</button>
            </div> */}
          </div>
          <div className="relative rounded-3xl overflow-hidden h-full">
            <img src="/company-profile/hero-section.jpg" alt="app-img"
              className="w-full h-full object-cover object-top lg:absolute lg:right-0 lg:top-0 lg:bottom-0" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CompanyProfile