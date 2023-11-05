import Image from "next/image"

const About = () => {
    return (
        <section className="grid w-full px-5 sm:px-10 lg:px-20 grid-cols-1 sm:grid-cols-2 pt-16 sm:pt-28 justify-center items-center gap-12" id="about">
            <div className="col-span-1 w-full flex items-center justify-center">
                <Image
                    src={"/images/Kitfo-and-Tibs.jpg"}
                    className="w-[360px] h-[410px] lg:w-[480px] lg:h-[530px] rounded-lg shadow-lg object-cover"
                    width={480}
                    height={530}
                    alt="restaurant"
                />
            </div>

            <div className="col-span-1">
                <h1 className="text-2xl font-bold text-[#7dd87d]">About Us</h1>
                <h2 className="text-2xl lg:text-4xl my-4">Mulu Ethiopian Restaurant</h2>
                <p className="text-sm lg:text-lg font-base mb-5 text-gray-400">Ethiopian restaurant of Malden ,MA favorite for both vegans & meat lovers with its authentic Ethiopian food all are food are prepared fresh vegetables and fresh meat.the frendliy staff and warm decor makes Ethiopian restaurant the perfect place to relax with family and friends.</p>
                <a href="#footer" className="bg-[#7dd87d] px-9 py-4 text-white rounded-full font-bold">Contact us</a>
            </div>
        </section>
    )
}

export default About