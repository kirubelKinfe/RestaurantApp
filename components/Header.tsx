import Image from "next/image"

const Header = () => {
    return (
        <header className="h-[50vh] lg:h-[80vh] mt-20 w-full relative grid grid-cols-1 sm:grid-cols-2 items-center bg-[#f9f9f9] sm:gap-12 px-5 sm:px-10 lg:px-20" id="home">
            <div className="col-span-1">
                <h1 className="text-blue-500 text-2xl lg:text-3xl font-bold">Welcome</h1>
                <h3 className="mt-5 text-black text-3xl lg:text-6xl py-7">Enjoy Ethiopian Food</h3>
                <p className="text-base text-gray-700 mb-7">Ethiopian cuisine delights with diverse flavors, from injera and kitfo to spicy stews.</p>
                <a href="#about" className="bg-blue-500 px-9 py-4 text-white rounded-full font-bold">About Us</a>
            </div>

            <div className="col-span-1 hidden sm:block">
                <Image
                    src='/images/EthiopianFood.jpg'
                    className="w-[600px] h-[350px] rounded-3xl bg-gray-300 object-cover"
                    width={600}
                    height={350}
                    alt="banner"
                />
            </div>
        </header>
    )
}

export default Header