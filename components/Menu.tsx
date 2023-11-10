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

    const starters = await getFoods({
        query: '',
        category: 'starters',
        page: '1'
    })

    const beefSpecialities = await getFoods({
        query: '',
        category: 'beef specialities',
        page: '1'
    })
    console.log(beefSpecialities)
    return (
        <section className="bg-[#f9f9f9] mt-28 pt-5 px-5 sm:px-10 lg:px-20" id="menu">

            <div className="text-center">
                <p className="text-blue-500 text-2xl sm:text-4xl font-bold">Food Menu</p>
                <p className="mt-4 text-2xl sm:text-4xl">Delicious Ethiopian foods</p>
            </div>

            <div className="mt-5">
                <p className="text-blue-500 mb-5 text-2xl sm:text-4xl font-bold">STARTERS</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {starters?.map((food: FoodType) => (
                        <Food key={food._id} food={food} />
                    ))}
                </div>
                <p className="mt-20 text-blue-500 mb-5 text-2xl sm:text-4xl font-bold">BEEF SPECIALITIES</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {beefSpecialities?.map((food: FoodType) => (
                        <Food key={food._id} food={food} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menu