import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HajjGuides = () => {
    return (
        <div className=''>
            <div className="w-full h-auto flex items-center justify-center">
                {/* Background Image */}
                <Image
                    src="/hajj-guide/title-hajj-guide.jpg"
                    alt="Madina Image"
                    width={1920}
                    height={1080}
                    className="h-[100vh]"
                />

                {/* Overlay Text */}
                <div className="hidden md:block absolute bg-black bg-opacity-45 text-center text-white p-5 rounded-xl md:mb-[10vh]">
                    <h1 className="text-[45px] font-bold">Al-Mashood Munazzam Pvt Ltd</h1>
                    <p className="text-[22px] mt-3 max-w-[50vw] mx-auto">
                        A complete step-by-step guide to help you navigate your sacred journey with ease, ensuring a meaningful and spiritually fulfilling Hajj experience.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-8 md:flex-row justify-center items-center mb-0 my-[150px]">
    <Link href="/hajj-guide/pdf/01-Hajj-Ka-Tareeqa.pdf" className=''><div className="relative inline-block shadow-xl border -white hover:border-black rounded-lg">
        <Image
            src="/hajj-guide/procedure-of-hajj.jpg"
            alt="Madina Image"
            width={250}
            height={10}
            className="rounded-lg h-[56vh]"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 bg-opacity-60 bg-black text-white font-bold text-[20px] w-full text-center p-2 rounded-lg">
            <p>Procedure of Hajj</p>
        </div>
    </div>
    </Link>
    <Link href="/hajj-guide/pdf/02-Haj-Kay-Intezami-Amoor.pdf" className=''><div className="relative inline-block shadow-xl border -white hover:border-black rounded-lg">
        <Image
            src="/hajj-guide/hajj-affairs-management.jpg"
            alt="Madina Image"
            width={250}
            height={10}
            className="rounded-lg h-[56vh]"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 bg-opacity-60 bg-black text-white font-bold text-[20px] w-full text-center p-2 rounded-lg">
            <p>Hajj Affairs Management</p>
        </div>
    </div>
    </Link>
    <Link href="/hajj-guide/pdf/03-Haj-Brochure.pdf" className=''><div className="relative inline-block shadow-xl border -white hover:border-black rounded-lg">
        <Image
            src="/hajj-guide/hajj-brochure.jpg"
            alt="Madina Image"
            width={250}
            height={10}
            className="rounded-lg h-[56vh]"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 bg-opacity-60 bg-black text-white font-bold text-[20px] w-full text-center p-2 rounded-lg">
            <p>Hajj Brochure</p>
        </div>
    </div>
    </Link>
    <Link href="/hajj-guide/pdf/04-Anwar-e-Harmain.pdf" className=''><div className="relative inline-block shadow-xl border -white hover:border-black rounded-lg">
        <Image
            src="/hajj-guide/women-in-jamaat.jpg"
            alt="Madina Image"
            width={250}
            height={10}
            className="rounded-lg h-[56vh]"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 bg-opacity-60 bg-black text-white font-bold text-[20px] w-full text-center p-2 rounded-lg">
            <p>Women in Jamaat</p>
        </div>
    </div>
    </Link>
    
</div>
            <div className="flex flex-wrap gap-8 justify-center items-center mb-[150px] mt-[33px] md:my-[150px]">
    <Link href="/hajj-guide/pdf/05-Zyarat-e-Madima-o-Masjid-Nabvi.pdf" className=''><div className="relative inline-block shadow-xl border -white hover:border-black rounded-lg">
        <Image
            src="/hajj-guide/visit-to-masjid-nabawi.jpg"
            alt="Madina Image"
            width={250}
            height={10}
            className="rounded-lg h-[56vh]"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 bg-opacity-60 bg-black text-white font-bold text-[20px] w-full text-center p-2 rounded-lg">
            <p>Visit to Masjid Nabawi</p>
        </div>
    </div>
    </Link>
    <Link href="/hajj-guide/pdf/06-Khawateen-or-Namaz-Bajamat.pdf" className=''><div className="relative inline-block shadow-xl border -white hover:border-black rounded-lg">
        <Image
            src="/hajj-guide/ihram-rule.jpg"
            alt="Madina Image"
            width={250}
            height={10}
            className="rounded-lg h-[56vh]"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 bg-opacity-60 bg-black text-white font-bold text-[20px] w-full text-center p-2 rounded-lg">
            <p>Ihram Rules</p>
        </div>
    </div>
    </Link>
    <Link href="/hajj-guide/pdf/07-Ahram-Aur-Mutaliqa-Ahkamat.pdf" className=''><div className="relative inline-block shadow-xl border -white hover:border-black rounded-lg">
        <Image
            src="/hajj-guide/lights-of-the-haramain.jpg"
            alt="Madina Image"
            width={250}
            height={10}
            className="rounded-lg h-[56vh]"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 bg-opacity-60 bg-black text-white font-bold text-[20px] w-full text-center p-2 rounded-lg">
            <p>Lights of the Haramain</p>
        </div>
    </div>
    </Link>
    <Link href="/hajj-guide/pdf/08-Umrah-or-Hajij-Ke-Duwain.pdf" className=''><div className="relative inline-block shadow-xl border -white hover:border-black rounded-lg">
        <Image
            src="/hajj-guide/duas-for-umrah-&-hajj.jpg"
            alt="Madina Image"
            width={250}
            height={10}
            className="rounded-lg h-[56vh]"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 bg-opacity-60 bg-black text-white font-bold text-[20px] w-full text-center p-2 rounded-lg">
            <p>Duas for Umrah & Hajj</p>
        </div>
    </div>
    </Link>
    
</div>

        </div>

    )
}

export default HajjGuides