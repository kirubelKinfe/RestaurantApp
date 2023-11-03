import Image from "next/image"
import Logo from '@public/assets/images/kitfo-610x407.jpg'

const Header = () => {
    return (
        <header className="h-[80vh] mt-[80px] w-full relative grid grid-cols-2 items-center gap-12 bg-[#130849] px-20" id="home">
            <div className="col-span-1">
                <h1 className="text-[#7dd87d] text-3xl font-bold">Welcome</h1>
                <h3 className="mt-5 text-white text-7xl py-7">Enjoy Ethiopian Food</h3>
                <p className="text-base text-gray-400 mb-7">Ethiopian cuisine delights with diverse flavors, from injera and kitfo to spicy stews.</p>
                <a href="#about" className="bg-[#7dd87d] px-9 py-4 text-white rounded-full font-bold">About Us</a>
            </div>

            <div className="col-span-1">
                <Image
                    src={Logo}
                    className="rounded-3xl bg-gray-300"
                    alt="banner"
                />
            </div>
        </header>
    )
}

export default Header