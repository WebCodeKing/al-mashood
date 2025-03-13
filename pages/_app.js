import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";



export default function App({ Component, pageProps }) {
    return <>
    <div className="w-[100%] overflow-hidden">
    {/* <div id="background" className="">
  <div className="relative z-10">    */}
  <Head>
    <link rel="icon" href="/favicon.png"></link>
  </Head>
  <Navbar/>
  <Component {...pageProps} />;
  <Footer/>
  {/* </div>
  </div> */}
  </div>
  
  </>
}
