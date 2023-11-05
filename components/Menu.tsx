import { getFoods } from "@sanity/actions"
import Food from "./Food"

export type FoodType = {
    _id: string,
    name: string,
    slug: string,
    image: string,
    category: string,
    ingredients: string,
    price: number,
    price_id: string
}

export const revalidate = 900;

const Menu = async () => {

    const foods = await getFoods({
        query: '',
        category: 'starters',
        page: '1'
    })

    return (
        <section className="mt-28 px-5 sm:px-10 lg:px-20" id="menu">

            <div className="text-center">
                <p className="text-[#7dd87d] text-2xl sm:text-4xl font-bold">Food Menu</p>
                <p className="mt-4 text-2xl sm:text-4xl">Delicious Ethiopian foods</p>
            </div>

            <div className="mt-5">
                <p className="text-[#7dd87d] mb-5 text-2xl sm:text-4xl font-bold">STARTERS</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {foods?.map((food: FoodType) => (
                        <Food key={food._id} food={food} />
                    ))}
                </div>
                <p className="mt-20 text-[#7dd87d] mb-5 text-2xl sm:text-4xl font-bold">BEEF SPECIALITIES</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {foods?.map((food: FoodType) => (
                        <Food key={food._id} food={food} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menu