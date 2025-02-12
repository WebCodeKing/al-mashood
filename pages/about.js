import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <>
            <div className="flex-col justify-items-center">
                <div className="w-full h-auto flex items-center justify-center">
                    {/* Background Image */}
                    <Image
                        src="/about/madina.jpg"
                        alt="Madina Image"
                        width={1920}
                        height={1080}
                        className=""
                    />

                    {/* Overlay Text */}
                    <div className="hidden md:block absolute text-center  md:mb-[50vh]">
                        <h1 className="text-[45px] font-bold">About Al-Mashood Munazzam Pvt Ltd</h1>
                        <p className="text-[22px] mt-3 max-w-[55vw] mx-auto">
                            Your trusted companion in Hajj & Umrah journeys, providing seamless
                            services with dedication and experience.
                        </p>
                    </div>
                </div>
                <section className="py-24 relative max-w-[85%]">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Guiding Your Sacred Journey with a Legacy of Trust</h2>
                                    <p className="text-base font-normal leading-relaxed lg:text-start text-center">Founded in 2024, Al-Mashood Munazzam Pvt Ltd is a dynamic and growing group of 31 Hajj companies, dedicated to offering the highest standards of service for Hajj and Umrah pilgrims. As an IATA Accredited agent, a member of the Travel Agents Association of Pakistan (TAAP), and registered with the Ministry of Religious Affairs, we are committed to making your pilgrimage journey as smooth, comfortable, and spiritually enriching as possible.

                                        While we are a young company, our extensive partnerships with trusted Hajj and Umrah operators in Saudi Arabia enable us to provide pilgrims with an unparalleled experience. We bring together the expertise and resources of 31 leading companies in the industry, offering a variety of Hajj & Umrah packages to meet the diverse needs of every pilgrim.</p>
                                </div>
                                {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                                </button> */}
                            </div>
                            <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover overflow-hidden" src="/about/masjid.jpg" alt="about Us image" />
                        </div>
                    </div>
                </section>
                <section className="py-24 relative max-w-[85%]">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                            <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover overflow-hidden" src="/about/haram.jpg" alt="about Us image" />
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Guiding Your Sacred Journey with a Legacy of Trust</h2>
                                    <p className="text-base font-normal leading-relaxed lg:text-start text-center"><h1 className="font-bold text-[25px]">Why Choose Us?</h1>
                                        <br />
                                        <br />
                                        <p>A Group of Trusted Hajj Companies: Al-Mashood Munazzam Pvt Ltd is a collaboration of 31 reputable Hajj companies, pooling resources and expertise to ensure the best services for pilgrims.
                                        </p>
                                        <br />
                                        <p>Fully Accredited & Registered: As an IATA Accredited agent, and registered with the Ministry of Religious Affairs, we adhere to the highest standards of professionalism and trust.
                                        </p>
                                        <br />
                                        <p>
                                            Comprehensive Support: From travel bookings to transportation and accommodations, we handle all aspects of your pilgrimage to ensure peace of mind throughout your journey.
                                        </p><br />
                                        <p>
                                            Personalized Hajj & Umrah Packages: We offer a range of tailored packages, from affordable options to premium services, designed to suit every pilgrim’s needs.
                                        </p><br />
                                        <h1 className="font-bold text-[25px]">Our Services Include:</h1>
                                        <br />
                                        <p>Hajj & Umrah Packages: Carefully crafted to ensure comfort and convenience, our packages are designed for a fulfilling spiritual experience.
                                        </p><br />
                                        <p>Airline Ticketing: Utilizing GDS services, we provide the best airline options at competitive prices, ensuring a smooth journey.
                                        </p><br />
                                        <p>Nationwide Transport Solutions: We offer reliable transportation across Pakistan to make your travel as hassle-free as possible.
                                        </p><br />
                                        <p>At Al-Mashood Munazzam Pvt Ltd, we are deeply committed to delivering exceptional services while you embark on your sacred pilgrimage. With the support of our vast network of 31 companies, we ensure every step of your journey is handled with care, allowing you to focus solely on the spiritual journey of Hajj & Umrah.</p><br /></p>
                                </div>
                                {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                                </button> */}
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
