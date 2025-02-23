// "use client"; // If using Next.js 13+ with App Router
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Packages = () => {
  return (
    <>
    <div>
      <div className="w-full h-auto flex items-center justify-center">
      <Image
      src="/Packages/title.jpeg"
      width={1920}
      height={1080}
      className=""
      alt="Title"
      />
         <div className="hidden md:block absolute text-center text-white md:mb-[50vh] bg-black p-[25px] bg-opacity-60 rounded-xl">
                        <h1 className="text-[45px] font-bold z-10">About Al-Mashood Munazzam Pvt Ltd</h1>
                        <p className="text-[22px] mt-3 max-w-[55vw] mx-auto">
                            Your trusted companion in Hajj & Umrah journeys, providing seamless
                            services with dedication and experience.
                        </p>
                    </div>
                    </div>
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Left Side - Package Description */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-3xl font-bold mb-4">Hajj & Umrah Packages</h2>
        <p className="leading-relaxed">
          Experience a hassle-free and spiritually enriching journey with our **Hajj & Umrah** packages. 
          We offer a range of services including visa assistance, comfortable accommodations, guided tours, and 
          transport facilities in Makkah and Madinah. Our expert team ensures a smooth pilgrimage experience, 
          allowing you to focus on your ibadah (worship).
        </p>
        <p className=" mt-4">
          Choose from **economy, premium, and VIP packages**, tailored to meet your budget and preferences. 
          Book now and let us take care of all the arrangements for your sacred journey!
        </p>
      </div>

      {/* Right Side - Image Slider */}
      <div className="w-full md:w-1/2">
        {/* <h2 className="text-gray-200 text-[30px] font-bold text-center mb-6">Our Packages</h2> */}

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full rounded-lg shadow-lg"
        >
          <SwiperSlide className="flex justify-center">
            <img
              src="/packages/Package-1.jpg"
              alt="Hajj Package 1"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              src="/packages/Package-2.jpg"
              alt="Hajj Package 2"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              src="/packages/Package-3.jpg"
              alt="Hajj Package 3"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              src="/packages/Package-4.jpg"
              alt="Hajj Package 4"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              src="/packages/Package-5.jpg"
              alt="Hajj Package 5"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>
    </>
  );
};

export default Packages;
