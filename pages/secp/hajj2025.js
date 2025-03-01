import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const hajj2025 = () => {
  return (
    <>
    <div className='flex-col justify-items-center'>
    <div className='max-w-[85%] my-[110px] bg-opacity-[40%] mx-auto'>
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
    </div>
    </div>
    </>
  )
}

export default hajj2025