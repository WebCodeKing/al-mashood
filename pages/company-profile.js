import React from 'react'
import { Building2, ShieldCheck, Handshake, Headphones } from "lucide-react";
import Image from "next/image";
import {
  Briefcase,
  Globe,
  FileText,
  Building,
  Bus,
  Users
} from "lucide-react";
import Link from 'next/link';

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
    {/* <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">
      About Al-Mashood Munazzam Pvt Ltd
    </h2>

    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
      Al-Mashood Munazzam Pvt Ltd, established in 2024, is a trusted group of
      31 Hajj companies based in Pakistan, specializing in organized and
      reliable Hajj and Umrah arrangements. We are committed to providing a
      seamless and spiritually fulfilling journey for every pilgrim.
    </p>
  </div>
</section> */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Vision & Mission
    </h2>

    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Vision */}
      <div className="bg-white p-8 rounded-lg shadow">
        <h3 className="text-2xl font-semibold text-[#ce9733] mb-4">
          Our Vision
        </h3>

        <p className="text-gray-600 leading-relaxed">
          To become a globally trusted and respected Hajj service provider, 
          recognized for our integrity, organization, and commitment to facilitating 
          spiritually meaningful journeys for pilgrims around the world.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white p-8 rounded-lg shadow">
        <h3 className="text-2xl font-semibold text-[#ce9733] mb-4">
          Our Mission
        </h3>

        <ul className="space-y-4 text-gray-600 list-disc list-inside">
          <li>
            <span className="font-semibold">Transparency:</span>  
            We ensure open and honest communication at every stage of the pilgrimage process.
          </li>
          <li>
            <span className="font-semibold">Comfort:</span>  
            Providing comfortable travel, accommodations, and logistics for all pilgrims.
          </li>
          <li>
            <span className="font-semibold">Shariah Compliance:</span>  
            All services are conducted in full compliance with Islamic principles.
          </li>
          <li>
            <span className="font-semibold">Customer Support:</span>  
            Dedicated support before, during, and after the pilgrimage for a seamless experience.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Company Background & History
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left Side - Text */}
      <div>
        <p className="text-gray-600 leading-relaxed mb-6">
          Founded in 2024, Al-Mashood Munazzam Pvt Ltd was established with a
          clear objective to bring structure, transparency, and organized
          coordination to Hajj and Umrah services in Pakistan. Recognizing the
          growing need for professional pilgrimage management, the company was
          formed as a unified group of 33 Hajj companies working under a
          coordinated and reliable system.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          The founders bring valuable industry knowledge and operational
          understanding of pilgrimage arrangements, travel logistics, and
          group management. Their experience in the Hajj and Umrah sector
          enables the company to maintain high service standards and
          disciplined organizational practices.
        </p>

        <p className="text-gray-600 leading-relaxed">
          With a strong foundation and structured network, Al-Mashood
          Munazzam Pvt Ltd is committed to steady growth, expanding service
          excellence, and establishing itself as a trusted name in pilgrimage
          management both nationally and internationally.
        </p>
      </div>

      {/* Right Side - Highlight Box */}
      <div className="bg-gray-50 p-10 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-6">
          Strategic Focus
        </h3>

        <ul className="space-y-4 text-gray-600">
          <li>• Organized network of 33 Hajj companies</li>
          <li>• Structured operational management</li>
          <li>• Commitment to Shariah-compliant services</li>
          <li>• Transparent and accountable processes</li>
          <li>• Long-term expansion and service enhancement plan</li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Services Overview
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
      While Almashood Munazzam Pvt Ltd itself does not directly provide Hajj and Umrah packages, 
      we serve as a strategic alliance of 33 trusted Hajj companies. This structure allows 
      us to manage multiple categories economy, middle, and luxury ensuring that every 
      pilgrim receives services best suited to their requirements. By coordinating and uniting 
      individual companies, we make pilgrimage arrangements smoother, more organized, and 
      highly reliable.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

      <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <Briefcase className="mb-5 w-8 h-8 text-[#ce9733]" />
        <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">
          Hajj Packages</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Diverse Hajj packages managed collectively by our network, covering all categories 
          for a smooth pilgrimage experience.
        </p>
      </div>

      <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <Globe className="mb-5 w-8 h-8 text-[#ce9733]" />
        <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Umrah Services</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Coordinated Umrah arrangements across all partner companies, tailored to each 
          pilgrim’s preference and budget.
        </p>
      </div>

      <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <FileText className="mb-5 w-8 h-8 text-[#ce9733]" />
        <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Visa Assistance</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Smooth visa processing support through our network, ensuring fast and hassle-free 
          approval.
        </p>
      </div>

      <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <Building className="mb-5 w-8 h-8 text-[#ce9733]" />
        <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Accommodation</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Comfortable and varied accommodation options across partner companies.
          {/* , 
          matching A/B/C/D categories. */}
        </p>
      </div>

      <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <Bus className="mb-5 w-8 h-8 text-[#ce9733]" />
        <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Transport</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Organized transport services coordinated among the companies for a seamless 
          travel experience.
        </p>
      </div>

      <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <Users className="mb-5 w-8 h-8 text-[#ce9733]" />
        <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Guidance Support</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Dedicated guidance and support at every step, leveraging the collective 
          expertise of our group network.
        </p>
      </div>

    </div>

    {/* Optional Link to Full Services Page */}
    <div className="text-center mt-12">
      <a 
        href="/services" 
        className="inline-block bg-[#ce9733] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#b17c29] transition duration-300"
      >
        Explore Full Services
      </a>
    </div>

  </div>
</section>
{/* <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6"> */}

    {/* Section Heading */}
    {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Legal & Registration Information
    </h2> */}

    {/* <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
      Almashood Munazzam Pvt Ltd operates as a fully registered and compliant group of Hajj companies. 
      Our structured network ensures that all services provided through our partner companies meet 
      government regulations, licensing requirements, and industry standards. This ensures safety, 
      legality, and trustworthiness for every pilgrim we serve.
    </p> */}

    {/* Grid of Legal Info */}
    {/* <div className="grid md:grid-cols-2 gap-8 text-gray-700"> */}

      {/* Card 1 */}
      {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Registration Number</h3>
        <p className="text-gray-600 leading-relaxed">
          Officially registered under the corporate laws of Pakistan. Each company in the group maintains 
          valid registration numbers with regulatory authorities.
        </p>
      </div> */}

      {/* Card 2 */}
      {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Government Approvals</h3>
        <p className="text-gray-600 leading-relaxed">
          All partner companies have obtained necessary government approvals for Hajj and Umrah operations, 
          ensuring compliance with national travel regulations.
        </p>
      </div> */}

      {/* Card 3 */}
      {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Ministry Affiliation</h3>
        <p className="text-gray-600 leading-relaxed">
          Affiliated with the Ministry of Religious Affairs for Hajj management in Pakistan, guaranteeing 
          alignment with official pilgrimage guidelines.
        </p>
      </div> */}

      {/* Card 4 */}
      {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Licensing Details</h3>
        <p className="text-gray-600 leading-relaxed">
          Each company in the Almashood group operates under valid travel and tourism licenses, 
          ensuring full legal compliance and accountability.
        </p>
      </div>

    </div> */}
    
    {/* Optional note at bottom */}
    {/* <p className="text-center text-gray-500 mt-12 text-sm max-w-2xl mx-auto">
      All legal documents and licenses are available upon request for verification. Our group ensures 
      transparent and lawful operation at every level.
    </p>

  </div>
</section> */}
{/* 
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6"> */}

    {/* Section Heading */}
    {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Management & Leadership
    </h2> */}

    {/* <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
      Our leadership team combines strong industry knowledge and operational expertise. 
      Each member is committed to ensuring a smooth, reliable, and high-quality pilgrimage experience 
      through our network of 31 Hajj companies.
    </p> */}

    {/* Grid of Leaders */}
    {/* <div className="grid md:grid-cols-2 gap-8 text-gray-700">

      {/* CEO / Director */}
      {/* <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">CEO / Director</h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          <strong>Mr. Muhammad Usman</strong> – Visionary leader with expertise in pilgrimage management and corporate coordination.
        </p>
        <p className="text-gray-600 text-sm">Years of Experience: 8+</p>
      </div> */} 

      {/* COO / Operations */}
      {/* <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">COO / Operations Head</h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          <strong>Mr. Ahmed Khan</strong> – Oversees operational efficiency across all partner companies.
        </p>
        <p className="text-gray-600 text-sm">Years of Experience: 10+</p>
      </div> */}

      {/* CFO / Finance */}
      {/* <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">CFO / Finance Head</h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          <strong>Ms. Fatima Ali</strong> – Responsible for financial planning and compliance across the group.
        </p>
        <p className="text-gray-600 text-sm">Years of Experience: 7+</p>
      </div> */}

      {/* Customer Support / Client Relations */}
      {/* <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Client Relations / Support</h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          <strong>Mr. Salman Riaz</strong> – Ensures smooth communication between pilgrims and the network of companies.
        </p>
        <p className="text-gray-600 text-sm">Years of Experience: 6+</p>
      </div> */}

    {/* </div> */}

    {/* Optional Note */}
    {/* <p className="text-center text-gray-500 mt-12 text-sm max-w-2xl mx-auto">
      Our leadership combines local expertise, operational experience, and strategic vision to deliver organized and reliable pilgrimage services.
    </p>

  </div>
</section> */}

<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800">
      Why Choose Us
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <Building2 className="mx-auto mb-4 text-[#ce9733]" size={40} />
        <h3 className="font-semibold text-lg mb-3">
          33 Company Network
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          A strong and well-structured group of Hajj companies operating across Pakistan.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <ShieldCheck className="mx-auto mb-4 text-[#ce9733]" size={40} />
        <h3 className="font-semibold text-lg mb-3">
          Reliable Management
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Professional coordination ensuring organized and stress-free pilgrimage arrangements.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <Handshake className="mx-auto mb-4 text-[#ce9733]" size={40} />
        <h3 className="font-semibold text-lg mb-3">
          Transparent Process
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Clear communication, ethical practices, and complete transparency at every stage.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <Headphones className="mx-auto mb-4 text-[#ce9733]" size={40} />
        <h3 className="font-semibold text-lg mb-3">
          Dedicated Support
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Continuous assistance before, during, and after the pilgrimage journey.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="py-16 bg-gradient-to-r from-[#ce9733] to-[#8a641f] text-white text-center">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-6">
      Begin Your Spiritual Journey With Confidence
    </h2>

    <button className="bg-white text-[#ce9733]  font-semibold px-6 py-3 rounded-lg">
     <ul> <Link legacyBehavior href="/contact"><a onClick={() => console.log("Navigating to Contact")}><li className="hover:text-gray-200">Contact Us</li></a></Link></ul>
      {/* Contact Us */}
    </button>
  </div>
</section>
{/* <section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
      Why Choose Us
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"> */}

      {/* Card */}
      {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col">
        
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#ce9733]/10 rounded-full">
          <Building2 className="text-[#ce9733]" size={32} />
        </div>

        <h3 className="font-semibold text-lg mb-3">
          33 Company Network
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          A strong and well-structured group of Hajj companies operating across Pakistan.
        </p>
      </div> */}

      {/* Repeat same structure for other cards */}

    {/* </div>
  </div>
</section> */}
    </>
  )
}

export default CompanyProfile