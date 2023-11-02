import Image from "next/image"
import Banner from '@public/assets/images/Kitfo-and-Tibs.jpg'

const About = () => {
    return (
        <section className="grid w-full px-20 grid-cols-2 pt-28 items-center gap-12" id="about">
            <div className="col-span-1">
                <Image
                    src={Banner}
                    className="w-[480px] h-[530px] rounded-lg shadow-lg"
                    alt="restaurant"
                />
            </div>

            <div className="col-span-1">
                <h1 className="text-2xl font-bold text-[#7dd87d]">About Us</h1>
                <h2 className="text-4xl my-4">Mulu Ethiopian Restaurant</h2>
                <p className="text-lg font-base mb-5 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <a href="#footer" className="bg-[#7dd87d] px-9 py-4 text-white rounded-full font-bold">Contact us</a>
            </div>
        </section>
    )
}

export default About