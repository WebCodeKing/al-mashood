import React from 'react'

const CompanyProfile = () => {
  return (
    <>
    <div class="px-6 sm:px-10">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
          <div class="max-w-3xl max-lg:mx-auto max-lg:text-center">
            <h1 class="bg-gradient-to-r from-[#ce9733] to-[#8a641f] bg-clip-text text-transparent md:text-5xl text-4xl font-bold !leading-tight">Al-Mashood Munazzam Pvt Ltd
              {/* <span class="bg-gradient-to-r from-[#ce9733] to-[#8a641f] bg-clip-text text-transparent"></span> */}
            
              
               </h1>
            <p class="text-slate-600 text-base leading-relaxed mt-6">Simplify your daily operations and focus on growth. Our intuitive platform helps you organize tasks, monitor progress, and stay connected — no matter your industry.</p>

            <div class="mt-12 flex flex-wrap gap-6 max-lg:justify-center">
              <button type='button'
                class="bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-full px-6 py-3 cursor-pointer outline-0">Try It for Free</button>
              <button type='button'
                class="bg-transparent hover:bg-slate-100 border border-indigo-700 transition-all text-base text-slate-900 font-medium rounded-full px-6 py-3 cursor-pointer outline-0">See How It Works</button>
            </div>
          </div>
          <div class="relative lg:h-screen">
            <img src="https://readymadeui.com/images/real-estate-img.webp" alt="app-img"
              class="w-full h-full object-cover object-top lg:absolute lg:right-0 lg:top-0 lg:bottom-0" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CompanyProfile