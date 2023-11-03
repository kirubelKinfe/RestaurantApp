import Image from "next/image"
import Kitfo from '@public/assets/images/sambusa.jpg'
import { FoodType } from "./Menu"

type FoodProps = {
    food: FoodType
}


const Food = ({ food }: FoodProps) => {
    return (
        <div className="col-span-1 flex flex-col items-center py-4 px-4 shadow-lg transition rounded-3xl transform cursor-pointer hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
            <Image
                src={food.image}
                className="w-[200px] h-[140px] rounded-[40px]"
                width={300}
                height={300}
                alt="food"
            />
            <div className="mt-2">
                <p className="text-[#7dd87d] mb-2 text-lg font-bold">{food.name}</p>
                <p className="text-sm text-gray-700">{food.ingredients}</p>
                <p className="font-bold text-red-500">${food.price}</p>
            </div>
        </div>
    )
}

export default Food