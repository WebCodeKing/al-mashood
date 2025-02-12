import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="flex-col justify-items-center mx-w-[100%]">
       <div className="w-full h-auto flex items-center justify-center">
            <Image
            src="/homepage/main.jpg"
            width={1920}
            height={1080}
            className=""
            />
               <div className="hidden md:block absolute text-center text-white md:mb-[50vh] bg-black p-[25px] bg-opacity-30 rounded-xl">
                              <h1 className="text-[45px] font-bold z-10">About Al-Mashood Munazzam Pvt Ltd</h1>
                              <p className="text-[22px] mt-3 max-w-[55vw] mx-auto">
                              We ensure a seamless, comfortable, and spiritually fulfilling journey with expert guidance and premium services.
                              </p>
                          </div>
                          </div>
      <div className="flex justify-center mt-16 max-w-[85%] rounded-3xl">
        <section className="bg-white dark:bg-gray-900 bg-gray bg-opacity-0">
          <div className="grid justify-items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center md:text-left">ARE YOU PLANNING HAJJ?</h1>
              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-center md:text-left">Checkout out packages and features.</p>
              {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
              </a> */}
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex justify-center sm:text-center sm:mt-16">
              <img src="/homepage/hero-section.png" />
            </div>
          </div>
        </section>
      </div>
      <section className="py-24 relative max-w-[85%]">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Who We Are</h2>
                        <p className="text-base font-normal leading-relaxed lg:text-start text-center">We are IATA Accredited agent, member of Travel Agents Association of Pakistan and Karachi Chamber of Commerce & Industry (TAAP & KCCI) and also regsitered with Ministry of Religious Affairs, Islamabad. The Company has also contracted the services of various Hajj & Umrah companies at kingdom of Saudi Arabia and registered at Saudi Consulate Karachi.</p>
                    </div>
                    {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                    </button> */}
                </div>
                <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://images7.alphacoders.com/925/925784.jpg" alt="about Us image" />
            </div>
        </div>
    </section>
                                            
      <div className="flex-col space-y-16 justify-items-center max-w-[85%] my-16">
        <div className="sm:flex sm:flex-wrap md:flex md:flex-row lg:flex lg:flex-row lg:flex-nowrap xl:flex xl:flex-row xl:flex-nowrap 2xl:flex 2xl:flex-row 2xl:flex-nowrap justify-items-center md:gap-x-16 justify-center">
        <div  className="mb-16 max-w-sm rounded-lg shadow-lg dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-[80vw] h-[35.5vh]" src="/homepage/cards/Hajj-&-Umrah.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  ">
              Hajj & Umrah</h5>
            </a>
            <p className="mb-3 font-normal">We are the largest Hajj  Company in Pakistan and providing Best Hajj & Umrah Services!.</p>
            <a href="#" className="hidden inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        <div  className="mb-16 max-w-sm rounded-lg shadow-lg dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-[80vw] h-[35.5vh]" src="/homepage/cards/AirLine .webp" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Airline Tickets</h5>
            </a>
            <p className="mb-3 font-normal">We have all the GDS services and provide best prices of all Airlines Tickets!</p>
            <a href="#" className="hidden inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        <div  className="mb-16 max-w-sm rounded-lg shadow-lg dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-[80vw] h-[35.5vh]" src="/homepage/cards/Buses.webp" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  ">Tours and Transports</h5>
            </a>
            <p className="mb-3 font-normal  ">We are offering transport services & tours all our Pakistan.</p>
            <a href="#" className="hidden inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
