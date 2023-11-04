"use client"

import Image from "next/image"
import { FoodType } from "./Menu"
import { useState } from "react"
import FoodDetailsModal from "./FoodDetailsModal"

type FoodProps = {
    food: FoodType
}


const Food = ({ food }: FoodProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div onClick={() => setIsOpen(true)} className="col-span-1 flex flex-col items-center py-4 px-4 shadow-lg transition rounded-3xl transform cursor-pointer hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
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
            <FoodDetailsModal isOpen={isOpen} closeModal={() => setIsOpen(false)} food={food} />
        </div>
    )
}

export default Food