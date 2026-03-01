import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
import Link from 'next/link';
const hajj2025 = () => {
  return (
    <>
    <div className='flex flex-col md:flex-wrap justify-items-center max-w-[100%]'>
    {/* <div className='max-w-[85%] my-[110px] bg-opacity-[40%] mx-auto'>
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
              src="/SECP/2025/Recognition Letter.jpg"
              alt="Hajj Package 1"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              src="/SECP/2025/CTC OF INC. FORM-II_Page_1.jpg"
              alt="Hajj Package 2"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              src="/SECP/2025/CTC OF INC. FORM-II_Page_3.jpg"
              alt="Hajj Package 3"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              src="/SECP/2025/CTC OF INC. FORM-II_Page_4.jpg"
              alt="Hajj Package 4"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              src="/SECP/2025/CTC OF INC. FORM-II_Page_5.jpg"
              alt="Hajj Package 5"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
        </Swiper>
    </div> */}
     <div className='flex flex-wrap justify-items-center mx-auto w-[90%] md:w-[85%]'>
      <Link href="/SECP/2025/recognition-letter.pdf" className='mx-auto'>
        <div className="relative flex-col justify-items-center items-center max-w-3xl mx-auto p-8 border-t-4 border-indigo-500 shadow-2xl hover:shadow-3xl transition-shadow rounded-xl bg-gradient-to-r from-gray-50 to-white my-[100px] md:w-[31vw] hover:border-x hover:border-b cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                {/* Document Icon */}
                <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M6 8h12M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6c-1.1 0-2 .9-2 2z"/>
                </svg>
                <h2 className="text-2xl font-bold text-gray-800">Recognition Letter</h2>
              </div>
        
              {/* Next.js Optimized Image */}
              {/* <div className="relative mb-4 w-[15vw]"> */}
              <div className="mb-4 md:w-[15vw]">
                <Image
                  src="/SECP/2025/Recognition Letter.jpg" // Replace with your image path
                  alt="Document Thumbnail"
                //   layout="fill"
                //   objectFit="cover"
                width={1920}
                height={1080}
                  className="rounded-lg md:max-h-[50vh]"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
              </div>
        
              {/* <p className="text-lg text-gray-700 leading-relaxed">
                This document contains important details about our services. Please review it carefully.
              </p> */}
            </div>
            </Link>
            <Link href="/SECP/2025/CTC OF INC. FORM-II.pdf" className='mx-auto'>
        <div className="relative flex-col justify-items-center items-center max-w-3xl mx-auto p-8 border-t-4 border-indigo-500 shadow-2xl hover:shadow-3xl transition-shadow rounded-xl bg-gradient-to-r from-gray-50 to-white my-[100px] md:w-[31vw] hover:border-x hover:border-b cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                {/* Document Icon */}
                <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M6 8h12M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6c-1.1 0-2 .9-2 2z"/>
                </svg>
                <h2 className="text-2xl font-bold text-gray-800">Form II</h2>
              </div>
        
              {/* Next.js Optimized Image */}
              {/* <div className="relative mb-4"> */}
              <div className="mb-4 md:w-[15vw]">
                <Image
                  src="/SECP/2025/CTC OF INC. FORM-II_Page_1.jpg" // Replace with your image path
                  alt="Document Thumbnail"
                  // layout="fill"
                  // objectFit="cover"
                width={1920}
                height={1080}
                  className="rounded-lg"
                />
                 {/* <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true} */}
          {/* // className="w-[15vw] rounded-lg shadow-lg mb-4" */}
          {/* className="w-full max-w-[90%] md:max-w-[15vw] rounded-lg shadow-lg mb-4 z-0"
        > */}
          {/* <SwiperSlide className="flex justify-center">
            <img
              src="/SECP/2025/Recognition Letter.jpg"
              alt="Hajj Package 1"
              className="w-[35vw] h-[400px] object-contain rounded-lg mx-auto"
            />
          </SwiperSlide> */}
          {/* <SwiperSlide className="flex justify-center">
            <Image
              src="/SECP/2025/CTC OF INC. FORM-II_Page_1.jpg"
              width={1920}
              height={1080}
              alt="Hajj Package 2"
              className="max-w-full h-auto object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Image
               width={1920}
               height={1080}
              src="/SECP/2025/CTC OF INC. FORM-II_Page_3.jpg"
              alt="Hajj Package 3"
              className="wmax-w-full h-auto object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/SECP/2025/CTC OF INC. FORM-II_Page_4.jpg"
              alt="Hajj Package 4"
              className="max-w-full h-auto object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Image
              width={1920}
              height={1080}
              src="/SECP/2025/CTC OF INC. FORM-II_Page_5.jpg"
              alt="Hajj Package 5"
              className="max-w-full h-auto object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
        </Swiper> */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
              </div>
              {/* <p className="text-lg text-gray-700 leading-relaxed">
                This document contains important details about our services. Please review it carefully.
              </p> */}
            </div>
            </Link>
            <Link href="/SECP/2025/form-III.pdf" className='mx-auto'>
        <div className="relative flex-col justify-items-center items-center max-w-3xl mx-auto p-8 border-t-4 border-indigo-500 shadow-2xl hover:shadow-3xl transition-shadow rounded-xl bg-gradient-to-r from-gray-50 to-white my-[100px] md:w-[31vw] hover:border-x hover:border-b cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                {/* Document Icon */}
                <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M6 8h12M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6c-1.1 0-2 .9-2 2z"/>
                </svg>
                <h2 className="text-2xl font-bold text-gray-800">Form III</h2>
              </div>
        
              {/* Next.js Optimized Image */}
              <div className=" mb-4 md:w-[15vw]">
                <Image
                  src="/SECP/2025/form-III/form-III_page-0001.jpg" // Replace with your image path
                  alt="Document Thumbnail"
                //   layout="fill"
                //   objectFit="cover"
                width={1920}
                height={1080}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
              {/* {/* <p className="text-lg text-gray-700 leading-relaxed">
                This document contains important details about our services. Please review it carefully.
              </p> */}
            </div>
            </Link>
            </div>
    </div>
    </>
  )
}

export default hajj2025