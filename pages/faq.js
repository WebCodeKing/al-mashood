import React, { useEffect, useState } from 'react'
import Image from "next/image";
import 'flowbite';
import { initFlowbite } from 'flowbite';

const Faq = () => {
  // useEffect(() => {
  //   initFlowbite();
  // }, []);
    useEffect(() => {
        // Just import Flowbite; no need for module.init()
        import("flowbite");
      }, []);
    // useEffect(() => {
    //   import('flowbite/dist/flowbite.min.js').then((module) => {
    //     if (module.default) {
    //       module.default();
    //     }
    //   });
    // }, []);
    // useEffect(() => {
    //     console.log("hello");
    //   // Import Flowbite and manually initialize it
    //   import('flowbite').then(() => {
    //     if (typeof window !== 'undefined' && window.Flowbite) {
    //       window.Flowbite.init(); // Manually trigger initialization
    //     }
    //   });
    // }, []);
      // useEffect(() => {
      //   const initializeFlowbite = async () => {
      //     try {
      //       await import("flowbite/dist/flowbite.min.js");
    
      //       if (typeof window !== "undefined" && window.Flowbite) {
      //         console.log("Flowbite is ready. Waiting for user interaction...");
      //       }
      //     } catch (error) {
      //       console.error("Error loading Flowbite:", error);
      //     }
      //   };
    
      //   initializeFlowbite();
    
      //   // Attach event listener to initialize Flowbite on user interaction
      //   const handleUserInteraction = () => {
      //     if (typeof window !== "undefined" && window.Flowbite) {
      //       window.Flowbite.init();
      //       console.log("Flowbite initialized after user interaction!");
      //     }
      //     document.removeEventListener("click", handleUserInteraction); // Remove listener after first use
      //   };
    
      //   document.addEventListener("click", handleUserInteraction);
        
      //   return () => {
      //     document.removeEventListener("click", handleUserInteraction);
      //   };
      // }, []);
      // useEffect(() => {
      //   console.log("useeffect");

      //   if (typeof window !== "undefined") {
      //     console.log("Checking if Flowbite is available...");
    
      //     const checkFlowbite = setInterval(() => {
      //       if (window.Flowbite && typeof window.Flowbite.init === "function") {
      //         console.log("✅ Flowbite found, initializing...");
      //         window.Flowbite.init();
      //         clearInterval(checkFlowbite); // Stop checking once initialized
      //       } else {
      //         console.warn("⚠️ Flowbite is still not ready. Retrying...");
      //       }
      //     }, 500); // Check every 500ms
    
      //     // Cleanup function to prevent memory leaks
      //     return () => clearInterval(checkFlowbite);
      //   }
      // }, []);


    
  return (
    <>
    {/* <button onClick={() => window.location.reload()}>Reload Page</button> */}

    <div className='flex-col items-center justify-center justify-items-center'>
     <div className='relative'>
      <Image
                  src="/FAQ/FAQ.webp"
                  width={1920}
                  height={1080}
                  className=""
                  alt="Home Page Image"
                  priority
                  />
                  <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  {/* <div className='w-[100%] h-[10px] bg-black'></div> */}
    <div className='w-90% md:w-[75%] h-[100px] mt-[60px] md:mt-[150px] text-center'><strong className='text-gray-500 text-[40px] md:text-[70px]'>GENERAL QUESTIONS</strong></div>
<div className='w-[90%] md:w-[75%] my-[80px] mx-auto' id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>1. What is Hajj?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Hajj is the pilgrimage to the holy city of Mecca in Saudi Arabia, which is an obligatory religious duty for Muslims to perform at least once in their lifetime if they are able to do so. It is one of the <span className='font-bold'>Five</span> Pillars of Islam.</p>
      {/* <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>2. When does Hajj take place?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Scheduled in <span className='font-bold'>Dhul-Hijjah</span>, the twelfth and final month of the Islamic lunar calendar, it occurs between the <span className='font-bold'>eighth</span> and <span className='font-bold'>thirteenth days</span> of the month.</p>
      {/* <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>3. What are the rituals of Hajj?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
    <div id="elementor-tab-content-1473" 
     className="text-gray-500 dark:text-gray-400 space-y-8 elementor-tab-content elementor-clearfix elementor-active" 
     data-tab="3" 
     role="region" 
     aria-labelledby="elementor-tab-title-1473">
  
  <p><strong>Ihram:</strong> Intent and Ihram mark the initial rites of Hajj, signifying the pure intention and sacred state of the pilgrim. This is achieved by entering Ihram, a pilgrim’s consecrated state, upon crossing the outer boundaries of Mecca, known as <strong>Miqat</strong>.</p>

  <p>Hujjaj wear simple attire: men wear two unstitched white cloths, while women wear loose-fitting modest clothing. Additionally, they must follow specific rules, including maintaining patience and refraining from sexual activity.</p>

  <p><strong>Tawaf:</strong> Hujjaj then perform Tawaf, meaning circling the Kaaba, the cube-shaped structure in the center of Masjid al-Haram, <strong>seven times</strong> counterclockwise.</p>

  <p><strong>Sa’i:</strong> Sa’i refers to walking or running between the Safa and Marwa hills, commemorating Hazrat Hajra’s (A.S.) search for water for her son, Hazrat Ismail (A.S.).</p>

  <h3><strong>Mina Arrival:</strong></h3>
  <p>Then, Hujjaj travel to Mina, a tent city located just outside Mecca, either by foot along pilgrim paths or by bus for the <strong>8km</strong> journey. They spend the day in Mina and depart the following morning at dawn.</p>

  <h3><strong>A Day at Mount Arafat (Wuquf)</strong></h3>
  <p>On the Day of Arafat, pilgrims travel from Mina to Mount Mercy (<em>Jabal ar-Rahmah</em>), where they spend the day in reverent prayer. This day, known as <strong>wuquf</strong>, is a significant moment in the Islamic calendar.</p>

  <h3><strong>Heading to Muzdalifah:</strong></h3>
  <p>Following sunset, Hujjaj journey to Muzdalifah, where they spend the night under the open sky. Here, they also collect 49 pebbles for the rites of the next day, departing shortly before sunrise.</p>

  <h3><strong>Rami & Nahr</strong></h3>
  <p>After leaving Muzdalifah, Hujjaj return to Mina before dawn to perform the first <strong>rami</strong>, symbolically stoning the devil by throwing <strong>seven</strong> pebbles at the largest of three columns known as <strong>Jamarat al-Aqaba</strong>.</p>

  <p>This is based on the tradition of Hazrat Ibrahim (A.S.), who saw in a dream that he was sacrificing his son Hazrat Ismail (A.S.) as a test of faith. At this spot in Mina, the devil appeared to discourage Hazrat Ibrahim (A.S.), but he drove him away by throwing stones.</p>

  <p>Pilgrims also perform the sacrifice known as Nahr, where either a camel or lamb is sacrificed. Pilgrims have the option to either purchase sacrifice coupons/vouchers or perform the sacrifice themselves.</p>

  <h3><strong>Continuation of Rami</strong></h3>
  <p>Over the next two days, pilgrims continue the ritual of throwing stones at the three pillars in <strong>Mina</strong>. They pelt each pillar with seven pebbles, starting with <strong>Jamarat al-Ula</strong>, then <strong>Jamarat al-Wusta</strong>, and finally <strong>Jamarat al-Aqaba</strong>.</p>

  <h3><strong>Halq (Shaving of Head)</strong></h3>
  <p>Halq, or the shaving of the head, is a ritual performed by male Hujjaj. It involves completely shaving the head or cutting the hair very short as a symbol of purification and humility before God. Women also participate in this act by cutting a small portion of their hair.</p>

  <h3><strong>Tawaf al-Wida:</strong></h3>
  <p>The Farewell Tawaf is a mandatory ritual performed by pilgrims before leaving Mecca at the end of their Hajj. It involves circling the Kaaba seven times in a counterclockwise direction as a way to bid farewell to the sacred site.</p>

</div>

      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-4">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
      <span>4. Who is obligated to perform Hajj?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
    <div 
  id="elementor-tab-content-1474" 
  className="elementor-tab-content elementor-clearfix elementor-active space-y-4 text-gray-500 dark:text-gray-400" 
  data-tab="4" 
  role="region" 
  aria-labelledby="elementor-tab-title-1474"
>
  <p>
    According to the Quran and Hadith, Hajj is obligatory for adult Muslims who are physically and financially able to undertake the journey. 
    The Quran states in Surah Al Imran (3:97):
  </p>

  <blockquote className="border-l-4 border-gray-300 pl-4 italic">
    “And Hajj to the House is a duty that mankind owes to Allah, for those who are able to undertake the journey.”
    <cite className="block text-sm text-gray-400">— Surah Al Imran (3:97)</cite>
  </blockquote>

  <p>This verse indicates that Hajj is mandatory for those who have the means to perform it.</p>

  <p>The Hadith about the five pillars of Islam can be found in Sahih Bukhari, Book 2:</p>

  <blockquote className="border-l-4 border-gray-300 pl-4 italic">
    Narrated Ibn ‘Umar: Allah’s Messenger (ﷺ) said:
    <br />Islam is based on (the following) five (principles):
  </blockquote>

  <ol className="list-decimal list-inside space-y-2">
    <li>To testify that none has the right to be worshipped but Allah and Muhammad is Allah’s Messenger (ﷺ).</li>
    <li>To offer the (compulsory congregational) prayers dutifully and perfectly.</li>
    <li>To pay Zakat (i.e. obligatory charity).</li>
    <li>To perform Hajj (i.e. Pilgrimage to Mecca).</li>
    <li>To observe fast during the month of Ramadan.</li>
  </ol>
</div>


      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-5">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
      <span>5. How do I prepare for Hajj?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
    <div id="elementor-tab-content-1475" className="tab-content space-y-4 text-gray-500 dark:text-gray-400" data-tab="5" role="region" aria-labelledby="elementor-tab-title-1475">
        <p>Preparing for Hajj involves both logistical and spiritual preparations. <strong>Al Mashood Munazzam Pvt Ltd</strong>, with 2 years of experience, suggests the following steps:</p>

        <p><strong>Educate Yourself:</strong> Learn about the rituals and significance of Hajj. Reading books or attending seminars can deepen your understanding.</p>
        <p><strong>Physical Preparation:</strong> Ensure you are physically fit for the journey. Consult a healthcare provider, especially if you have medical conditions.</p>
        <p><strong>Financial Preparation:</strong> Hajj can be costly. Plan your budget carefully for travel, accommodation, and other expenses. <strong>Al Mashood Munazzam Pvt Ltd Hajj services</strong> can ease this burden for you.</p>
        <p><strong>Logistical Preparation:</strong> Book flights, accommodation in Mecca, and transportation well in advance. Our <strong>customized Hajj packages</strong> let you choose based on your needs.</p>
        <p><strong>Spiritual Preparation:</strong> Increase your acts of worship, seek forgiveness, and set your intentions to perform Hajj solely for the sake of Allah.</p>
        <p><strong>Social Preparation:</strong> If traveling with a group, get familiar with your fellow pilgrims. <strong>Al Mashood Munazzam Pvt Ltd</strong> arranges pre-departure meetups to enhance your Hajj experience.</p>
        <p><strong>Health Preparation:</strong> Get necessary vaccinations and medications before traveling. Take precautions against heatstroke and respiratory infections.</p>
    </div>

      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-6">
    <button type="button" className="flex items-center justify-start w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
      <span className='text-left w-full'>6. What are the health and safety considerations during Hajj?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
    <div id="elementor-tab-content-1473" 
     className="space-y-8 elementor-tab-content elementor-clearfix elementor-active text-gray-500 dark:text-gray-400" 
     data-tab="6" 
     role="region" 
     aria-labelledby="elementor-tab-title-1473">
  
  <p><strong>Ihram:</strong> Intent and Ihram mark the initial rites of Hajj, signifying the pure intention and sacred state of the pilgrim. This is achieved by entering Ihram, a pilgrim’s consecrated state, upon crossing the outer boundaries of Mecca, known as <strong>Miqat</strong>.</p>

  <p>Hujjaj wear simple attire: men wear two unstitched white cloths, while women wear loose-fitting modest clothing. Additionally, they must follow specific rules, including maintaining patience and refraining from sexual activity.</p>

  <p><strong>Tawaf:</strong> Hujjaj then perform Tawaf, meaning circling the Kaaba, the cube-shaped structure in the center of Masjid al-Haram, <strong>seven times</strong> counterclockwise.</p>

  <p><strong>Sa’i:</strong> Sa’i refers to walking or running between the Safa and Marwa hills, commemorating Hazrat Hajra’s (A.S.) search for water for her son, Hazrat Ismail (A.S.).</p>

  <h3><strong>Mina Arrival:</strong></h3>
  <p>Then, Hujjaj travel to Mina, a tent city located just outside Mecca, either by foot along pilgrim paths or by bus for the <strong>8km</strong> journey. They spend the day in Mina and depart the following morning at dawn.</p>

  <h3><strong>A Day at Mount Arafat (Wuquf)</strong></h3>
  <p>On the Day of Arafat, pilgrims travel from Mina to Mount Mercy (<em>Jabal ar-Rahmah</em>), where they spend the day in reverent prayer. This day, known as <strong>wuquf</strong>, is a significant moment in the Islamic calendar.</p>

  <h3><strong>Heading to Muzdalifah:</strong></h3>
  <p>Following sunset, Hujjaj journey to Muzdalifah, where they spend the night under the open sky. Here, they also collect 49 pebbles for the rites of the next day, departing shortly before sunrise.</p>

  <h3><strong>Rami & Nahr</strong></h3>
  <p>After leaving Muzdalifah, Hujjaj return to Mina before dawn to perform the first <strong>rami</strong>, symbolically stoning the devil by throwing <strong>seven</strong> pebbles at the largest of three columns known as <strong>Jamarat al-Aqaba</strong>.</p>

  <p>This is based on the tradition of Hazrat Ibrahim (A.S.), who saw in a dream that he was sacrificing his son Hazrat Ismail (A.S.) as a test of faith. At this spot in Mina, the devil appeared to discourage Hazrat Ibrahim (A.S.), but he drove him away by throwing stones.</p>

  <p>Pilgrims also perform the sacrifice known as Nahr, where either a camel or lamb is sacrificed. Pilgrims have the option to either purchase sacrifice coupons/vouchers or perform the sacrifice themselves.</p>

  <h3><strong>Continuation of Rami</strong></h3>
  <p>Over the next two days, pilgrims continue the ritual of throwing stones at the three pillars in <strong>Mina</strong>. They pelt each pillar with seven pebbles, starting with <strong>Jamarat al-Ula</strong>, then <strong>Jamarat al-Wusta</strong>, and finally <strong>Jamarat al-Aqaba</strong>.</p>

  <h3><strong>Halq (Shaving of Head)</strong></h3>
  <p>Halq, or the shaving of the head, is a ritual performed by male Hujjaj. It involves completely shaving the head or cutting the hair very short as a symbol of purification and humility before God. Women also participate in this act by cutting a small portion of their hair.</p>

  <h3><strong>Tawaf al-Wida:</strong></h3>
  <p>The Farewell Tawaf is a mandatory ritual performed by pilgrims before leaving Mecca at the end of their Hajj. It involves circling the Kaaba seven times in a counterclockwise direction as a way to bid farewell to the sacred site.</p>

</div>

      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-7">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-7" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span className=''>7. Can women perform Hajj?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-7" className="hidden" aria-labelledby="accordion-collapse-heading-7">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
    <div id="elementor-tab-content-1477" 
      class="elementor-tab-content elementor-clearfix text-gray-500 dark:text-gray-400" 
      data-tab="7" 
      role="region" 
      aria-labelledby="elementor-tab-title-1477">

      <p className='leading-loose'>
        Yes, women can and are required to perform Hajj if they meet the same conditions as men, namely being physically and financially able to undertake the journey. There are specific guidelines and accommodations for women during Hajj to ensure their safety and comfort, such as designated areas for prayer and rituals. Women often perform Hajj with a mahram (a male relative whom she cannot marry, such as a father, brother, or son) to comply with Islamic regulations regarding travel and interaction with unrelated men.
      </p>

    </div>

      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-8">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-8" aria-expanded="false" aria-controls="accordion-collapse-body-8">
      <span className='text-left w-full'>8. Is there a specific dress code for Hajj?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-8" className="hidden" aria-labelledby="accordion-collapse-heading-8">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
    <div id="elementor-tab-content-1478" 
     class="elementor-tab-content elementor-clearfix elementor-active space-y-4 p-4 text-gray-500 dark:text-gray-400" 
     data-tab="8" 
     role="region" 
     aria-labelledby="elementor-tab-title-1478">
  
  <p class="font-semibold">Ihram:</p>

  <p class="leading-relaxed">
    Ihram marks the initial rites of Hajj, signifying the pure intention and sacred state of the pilgrim. 
    This is achieved by entering Ihram, a pilgrim’s consecrated state, upon crossing the outer boundaries of Mecca, 
    known as <strong>Miqat</strong>.
  </p>

  <p class="leading-relaxed">
    Hujjaj dress in simple attire, with men wearing two unstitched pieces of cloth and women wearing loose-fitting clothing.
  </p>

</div>


      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
</div> 
    </div>
    </>
  )
}

export default Faq