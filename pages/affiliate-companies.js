// "use client"; // If using Next.js 13+ with App Router
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AffiliateCompanies = () => {
  return (
    <>
      <div>
        <div className="w-full h-auto flex items-center justify-center">
          <Image
            src="/packages/title.jpeg"
            width={1920}
            height={1080}
            className=""
            alt="Title"
            priority
          />
          <div className="hidden md:block absolute text-center text-white md:mb-[50vh] bg-black p-[25px] bg-opacity-60 rounded-xl">
            <h1 className="text-[45px] font-bold z-10">Al-Mashood Munazzam Pvt Ltd</h1>
            <p className="text-[22px] mt-3 max-w-[50vw] mx-auto">
              Your trusted companion in Hajj & Umrah journeys, providing seamless
              services with dedication and experience.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8 my-[120px]">
          {/* Left Side - Package Description */}
          <div className="w-full md:w-1/2 text-left text-justify">
            {/* <h2 className="text-3xl font-bold mb-4">Hajj & Umrah Packages</h2>
            <p className="leading-relaxed">
              Experience a hassle-free and spiritually enriching journey with our **Hajj & Umrah** packages.
              We offer a range of services including visa assistance, comfortable accommodations, guided tours, and
              transport facilities in Makkah and Madinah. Our expert team ensures a smooth pilgrimage experience,
              allowing you to focus on your ibadah (worship).
            </p>
            <p className=" mt-4">
              Choose from **economy, premium, and VIP packages**, tailored to meet your budget and preferences.
              Book now and let us take care of all the arrangements for your sacred journey!
            </p> */}
            <h2 className="text-3xl font-bold mb-4">Al-Mashood Munazzam Pvt Ltd</h2>
            <p>
            Al-Mashood Munazzam Pvt Ltd is a leading organization dedicated to providing exceptional Hajj and Umrah services. Established in 2024, we bring together 31 reputable Hajj companies under one platform, ensuring a seamless and spiritually enriching pilgrimage experience. As an IATA-accredited agent and a proud member of the Travel Agents Association of Pakistan (TAAP), we are officially registered with the Ministry of Religious Affairs. Our commitment to excellence, combined with strong partnerships in Saudi Arabia, allows us to offer a range of well-organized, comfortable, and reliable pilgrimage packages tailored to the needs of every pilgrim.
            </p>
          </div>
          <img className="lg:mx-0 mx-auto w-full md:w-[40vw] md:h-[70vh] rounded-3xl object-cover overflow-hidden" src="/packages/hujjaj.jpg" alt="about Us image" />
          {/* Right Side - Image Slider */}
          {/* <div className="w-full md:w-1/2"> */}
            {/* <h2 className="text-gray-200 text-[30px] font-bold text-center mb-6">Our Packages</h2> */}

            {/* <Swiper
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
            </Swiper> */}
          {/* </div> */}
        </div>
      </div>
      <div className="flex flex-col items-center mb-[150px] mt-[120px]">


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[85%]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                </th> */}
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  S No.
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Enrollment No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name of HGO
                </th>
                <th scope="col" className="px-6 py-3">
                  Quota
                </th>
                <th scope="col" className="px-6 py-3">
                  Chief Executive
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile No
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Land Line
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Website
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Hajj Package
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  1
                </th>
                <td className="px-6 py-4">
                  2191
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Abbas Tours (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Shabana Waheed Khan
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-6002600
                </td>
                <td className="px-6 py-4">
                  abbas2191@yahoo.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0483-723900
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Lala G Plaza, Main Khushab Road,
                  <br />Opposite Maula Bakhsh Hospital,
                  <br /> Noori Gate Sargodha.
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  2
                </th>
                <td className="px-6 py-4">
                  2148
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Al Furqan International (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  138
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Naeem Baig Mirza
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0330-8554564
                </td>
                <td className="px-6 py-4">
                  alfurqanhajjumra@yahoo.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-4842516
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No. 1,2,3 Ist Floor, Aashiana
                  <br /> Shopping Centre, Rehamanabad
                  <br /> Chowk, Murree Road, Rawalpindi.

                </td>
                <td className="px-6 py-4">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://alfurqaninternational.com" target="_blank" rel="noopener noreferrer">
                    alfurqaninternational.com
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  3
                </th>
                <td className="px-6 py-4">
                  2194
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Allah-U-Akbar Hajj & Umrah Services (Pvt) Ltd
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Abbas Ali
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0334-5077554
                </td>
                <td className="px-6 py-4">
                  allah_u_akbar2194@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-4927392
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Off No 5 First Floor Al Mustafa Plaza,
                  <br /> Chandni Chowk Rawalpindi

                </td>
                <td className="px-6 py-4">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="http://allah-u-akbar.net/"
                    target="_blank"
                    rel="noopener noreferrer">
                    allah-u-akbar.net
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  4
                </th>
                <td className="px-6 py-4">
                  2236
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Al-Tehamah Hajj & Umrah services (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Abdul Mohi Badshah
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0333-9433285
                </td>
                <td className="px-6 py-4">
                  altehamah2236@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-4938014
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Flat No. 14, 1st Flore, Rose One Plaza,
                  <br /> Plot No. 13, I-8 Markaz. Islamabad

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  5
                </th>
                <td className="px-6 py-4">
                  3222
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Arab On Line Services (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Muhammad Riaz
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0333-4309532
                </td>
                <td className="px-6 py-4">
                  arabonline786@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0423-6297447
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No.Gf-07, Empress Tower,
                  <br /> 46- Empress Road, Lahore.

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  6
                </th>
                <td className="px-6 py-4">
                  6106
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Bait-Ullah Tours (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  138
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Abdul Mubeen
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0333-3382266
                </td>
                <td className="px-6 py-4">
                  baitullah6106@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0622-877466
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No.15-16, First Floor Asim Plaza,
                  <br /> Chandani Chowk,Rawalpindi

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  7
                </th>
                <td className="px-6 py-4">
                  2158
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Carvan e Azmat (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  123
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Muhammad Waheed Iqbal Butt
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-8564950
                </td>
                <td className="px-6 py-4">
                  contact@c-azmat.com.pk
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-4906316
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office 8,9,10 Ground Floor Asim Center,
                  <br /> B Block, Satellite Town, Murree Road,
                  <br /> Rawalpindi.

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  8
                </th>
                <td className="px-6 py-4">
                  2238
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Carvan-e-Yousaf (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Muhammad Abdullah Butt
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0333-5819888
                </td>
                <td className="px-6 py-4">
                  contact@c-yousaf.com.pk
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-4906701
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No. 11, Asim Plaza Near Mcb
                  <br /> Chandni Chowk Murree Road,
                  <br /> Rawalpindi

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  9
                </th>
                <td className="px-6 py-4">
                  2220
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Dar Ul Ateeq (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Arshad Mahmood
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-8555534
                </td>
                <td className="px-6 py-4">
                  darulateeq@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-5400253
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Shop No.3 Lower Ground Floor, Plaza
                  <br /> No.53 Bahria Springs Commercial,
                  <br /> Phase 7, Bahria Town Rawalpindi

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  10
                </th>
                <td className="px-6 py-4">
                  2190
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Deedar e Rahamat International Travel & Tours (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Muhammad Farooq
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-5511940
                </td>
                <td className="px-6 py-4">
                  deedarerahmat@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-2716937
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No. 51-52, 2nd Floor, Aashiana
                  <br /> Center, Rehmanabad Chowk, Murree
                  <br /> Road, Rawalpindi

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  11
                </th>
                <td className="px-6 py-4">
                  3338
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Faqeerullah (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Muhammad Afzal Khan
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-8405015
                </td>
                <td className="px-6 py-4">
                  fsdregencytravels@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0423-749596
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  157/12, 1st Floor, Rafique Plaza, Main
                  <br /> Muslim Town Moor, Ferozwepur Road,
                  <br /> Lahore

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  12
                </th>
                <td className="px-6 py-4">
                  2104
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Galaxy Hajj and Umrah Services (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  138
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Abdul Ghaffar Khan
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-8562540
                </td>
                <td className="px-6 py-4">
                  galaxy2104@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-2877291
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office.No.6 (Basement), Feroz Centre,
                  <br /> 14-D Fazal-E-Haq Road, Near Tabaq
                  <br /> Hotel, Blue Area, Islamabad

                </td>
                <td className="px-6 py-4">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="https://www.galaxyhajj.com.pk"
                    target="_blank"
                    rel="noopener noreferrer">
                    galaxyhajj.com.pk
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a href="/packages/hajj-package/2025/12-galaxy-hajj-and-umrah-services.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Open</a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  13
                </th>
                <td className="px-6 py-4">
                  2119
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  H. Naseem Hassan (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  123
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Sajjad Ullah
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0330-5970070
                </td>
                <td className="px-6 py-4">
                  hnaseemhassan2005@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-2276656
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No.2, Block No. 53, Near Pia
                  <br /> Head Office, Fazal-E-Haq Road,
                  <br /> Blue Area Islamabad.

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  14
                </th>
                <td className="px-6 py-4">
                  2112
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Karwan e Sultania (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  138
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Raja Zafar Ullah Khan
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0333-5273546
                </td>
                <td className="px-6 py-4">
                  karwanesultania@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  058-27444646
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Shop No. 1 Basement Younas Plaza
                  <br /> Near Gazi Masjid Allama Iqbal
                  <br /> Road Mirpur Azad Kashmir

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  15
                </th>
                <td className="px-6 py-4">
                  3208
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Karwan-e-Hermain Travel & Tour Operators (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Shafaat Hussian
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-4509758
                </td>
                <td className="px-6 py-4">
                  khtrwp@yahoo.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0423-6366908
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Aftab Center 30 Davis Road Lahore.

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  16
                </th>
                <td className="px-6 py-4">
                  2174
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Karwan-E-Shahzeb Hajj & Umrah Services (Pvt) Ltd
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Mubashar Ali
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-9728129
                </td>
                <td className="px-6 py-4">
                  karwan_e_shahzeb@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-8773078
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No.2 & 3, 1st Floor, Al Rayan Plaza,
                  <br /> Police Foundation, Islamabad

                </td>
                <td className="px-6 py-4">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="http://www.karwaneshahzeb.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    karwaneshahzeb.com
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  17
                </th>
                <td className="px-6 py-4">
                  2246
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Karwan-E-Taibba (Pvt) Ltd
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Muhammad Ayaz Tariq
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0334-7771056
                </td>
                <td className="px-6 py-4">
                  karvan_e_taibba@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-4927210
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Off No 4 First Floor Al Mustafa Plaza,
                  <br /> Chandni Chowk Rawalpindi

                </td>
                <td className="px-6 py-4">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="http://karwangroup.net/"
                    target="_blank"
                    rel="noopener noreferrer">
                    karwangroup.net
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  18
                </th>
                <td className="px-6 py-4">
                  3330
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Karwan-e-Zaitoon Travel & Tours (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Shahid Amin
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-4281421
                </td>
                <td className="px-6 py-4">
                  karwanezaitoon_intl@yahoo.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0423-6292967
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  G-13, Hill View Arcade, 5-Davis Road,
                  <br /> Lahore

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  19
                </th>
                <td className="px-6 py-4">
                  2171
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Lala Gi Tours (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Sher Jan Khan
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0306-6002000
                </td>
                <td className="px-6 py-4">
                  lalagi2171@yahoo.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0483-728989
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Shop No.12, Noor Shopping Centre Near
                  <br /> Taxi Stand Sargodha Pakistan.

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  20
                </th>
                <td className="px-6 py-4">
                  3331
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Mayfair Travellers (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Ghulam Murtaza
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-8067708
                </td>
                <td className="px-6 py-4">
                  may_fair_travellers@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0423-6366021
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  11-Ground Floor, Makkah Heights,
                  <br /> 11-Abbot Road, Lahore

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  21
                </th>
                <td className="px-6 py-4">
                  3201
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Meraj Un Nabi Travels (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Waseem Iqbal
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0321-5168550
                </td>
                <td className="px-6 py-4">
                  info@meraj.iqbalgroup.biz
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-8749111
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  2nd Floor, Iqbal Group Building, 1-Main
                  <br /> Service Road, I-8/4 Extension, Islambad.

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  22
                </th>
                <td className="px-6 py-4">
                  2176
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Multi Faith International (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Zia Masoud Ahmed Toor
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0321-5163382
                </td>
                <td className="px-6 py-4">
                  multifaithint@yahoo.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-5565723
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No.36-A, 2nd Floor, Block No.2,
                  <br /> Services Plaza, The Mall Road, Saddar,
                  <br /> Rawalpindi.

                </td>
                <td className="px-6 py-4">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="https://www.multifaithint.com.pk"
                    target="_blank"
                    rel="noopener noreferrer">
                    multifaithint.com.pk
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a href="/packages/hajj-package/2025/22-multi-faith-international.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Open</a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  23
                </th>
                <td className="px-6 py-4">
                  3117
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Pan Islamic Tours & Travels (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  123
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Muhammad Salman
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0322-2214390
                </td>
                <td className="px-6 py-4">
                  panislamic3117@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0423-7414799
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No.1, Makkah Heights, 11-Abbott
                  <br /> Road, Lahore.

                </td>
                <td className="px-6 py-4">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="https://panislamic.com.pk"
                    target="_blank"
                    rel="noopener noreferrer">
                    panislamic.com.pk
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a href="/packages/hajj-package/2025/23-pan-islamic.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Open</a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  24
                </th>
                <td className="px-6 py-4">
                  2226
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Qafla-e-Madienah Hajj Umrah Services (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Munir Ahmed
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0333-5169092
                </td>
                <td className="px-6 py-4">
                  qfl2226@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-5400388
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Plot # 23-B, Ali Market Railway Scheme 1
                  <br /> Chaklalah Rawalpind

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  25
                </th>
                <td className="px-6 py-4">
                  2102
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  7 Seas Hajj And Umrah Services (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  115
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Nasir Khan
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0341-6000066
                </td>
                <td className="px-6 py-4">
                  sevenseas2102@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-4862663
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No.10, 1st Floor, Ahmed Centre, I-8
                  <br /> Markaz, Islamabad.

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  26
                </th>
                <td className="px-6 py-4">
                  2258
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  S.G International Tours (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Shehzad Ahmed
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0333-5852814
                </td>
                <td className="px-6 py-4">
                  sgjhelum@yahoo.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0544-610042
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Office No. 49,Old Gt Road, Gts Chowk,
                  <br /> Rah-E-Aziz, Jhelum Cantt.

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  27
                </th>
                <td className="px-6 py-4">
                  3344
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Safina-e-Haram (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Abdul Manan Anbalvi
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0321-4872799
                </td>
                <td className="px-6 py-4">
                  umerarshad@live.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0423-5914036
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Lg F-7 Century Tower Kalma Chowk
                  <br /> Gulberg Iii Lahore

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  28
                </th>
                <td className="px-6 py-4">
                  2130
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Taiba Haramayn (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  138
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Ashraf Ali
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-5127035
                </td>
                <td className="px-6 py-4">
                  taibaharamayn25@yahoo.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0966-711765
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  East Circular Road Dera Ismail Khan

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  29
                </th>
                <td className="px-6 py-4">
                  2181
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Tauheed Enterprises (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  101
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Hameed Khan
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0300-6003200
                </td>
                <td className="px-6 py-4">
                  touheed2181@yahoo.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0483-721300
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  Shop No 12 Noor Shopping Centre Near
                  <br /> Taxi Stand Sargodha.

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  30
                </th>
                <td className="px-6 py-4">
                  2243
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  Zam Zam Group (Pvt) Ltd.
                </td>
                <td className="px-6 py-4 font-bold">
                  49
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Nadir Khan
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  0341-6000066
                </td>
                <td className="px-6 py-4">
                  zamzamair@hotmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  051-2872468
                </td>
                <td className="px-6 py- whitespace-nowrap">
                  No. 4, Taimur Chambers, Fazal-E-Haq
                  <br /> Road, Blue Area, Islamabad

                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </>
  );
};

export default AffiliateCompanies;
