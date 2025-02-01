import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return <>
    <div id="background" className="">
  <Particles/><div className="relative z-10">   
  <Navbar/>
  <Component {...pageProps} />;
  <Footer/>
  </div>
  </div>
  </>
}
