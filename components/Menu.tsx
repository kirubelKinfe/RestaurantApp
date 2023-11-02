import Image from "next/image"
import Kitfo from '@public/assets/images/kitfo-610x407.jpg'

const Menu = () => {
    return (
        <section className="mt-28 px-20" id="menu">

            <div className="text-center">
                <p className="text-[#7dd87d] text-4xl font-bold">Food Menu</p>
                <p className="mt-4 text-4xl">Delicious Ethiopian foods</p>
            </div>

            <div className="mt-5">
                <p className="text-[#7dd87d] mb-5 text-4xl font-bold">Starters</p>
                <div className="grid grid-cols-4">
                    <div className="col-span-1 flex flex-col items-center py-4 px-6 shadow-2xl transition rounded-3xl transform cursor-pointer hover:scale-100 hover:-translate-y-5">
                        <div className="box-img">
                            <Image
                                src={Kitfo}
                                className="w-[164px] h-[164px] rounded-[40px]"
                                alt="food"
                            />
                        </div>
                        <div className="box-text">
                            <p className="text-[#7dd87d] mb-2 text-lg font-bold">Kitfo</p>
                            <p>from health cattle and fresh meet</p>
                            <p className="font-bold">20$</p>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center py-4 px-6 shadow-2xl transition rounded-3xl transform cursor-pointer hover:scale-100 hover:-translate-y-5">
                        <div className="box-img">
                            <Image
                                src={Kitfo}
                                className="w-[164px] h-[164px] rounded-[40px]"
                                alt="food"
                            />
                        </div>
                        <div className="box-text">
                            <p className="text-[#7dd87d] mb-2 text-lg font-bold">Kitfo</p>
                            <p>from health cattle and fresh meet</p>
                            <p className="font-bold">20$</p>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center py-4 px-6 shadow-2xl transition rounded-3xl transform cursor-pointer hover:scale-100 hover:-translate-y-5">
                        <div className="box-img">
                            <Image
                                src={Kitfo}
                                className="w-[164px] h-[164px] rounded-[40px]"
                                alt="food"
                            />
                        </div>
                        <div className="box-text">
                            <p className="text-[#7dd87d] mb-2 text-lg font-bold">Kitfo</p>
                            <p>from health cattle and fresh meet</p>
                            <p className="font-bold">20$</p>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center py-4 px-6 shadow-2xl transition rounded-3xl transform cursor-pointer hover:scale-100 hover:-translate-y-5">
                        <div className="box-img">
                            <Image
                                src={Kitfo}
                                className="w-[164px] h-[164px] rounded-[40px]"
                                alt="food"
                            />
                        </div>
                        <div className="box-text">
                            <p className="text-[#7dd87d] mb-2 text-lg font-bold">Kitfo</p>
                            <p>from health cattle and fresh meet</p>
                            <p className="font-bold">20$</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu