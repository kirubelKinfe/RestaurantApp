import { Dialog, Transition } from "@headlessui/react"
import { FoodType } from "./Menu"
import { Fragment } from "react"
import Image from "next/image"

import AddToCart from "./AddToCart"

type FoodDetailsProps = {
    isOpen: boolean
    closeModal: () => void
    food: FoodType
}

const FoodDetailsModal = ({ isOpen, closeModal, food }: FoodDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-50' onClose={closeModal}>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-out duration-300'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='relative w-full max-w-lg max-h-[100vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                    <button
                                        type='button'
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full outline-none'
                                        onClick={closeModal}
                                    >
                                        <Image
                                            src={"/close.svg"}
                                            alt='close'
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        />
                                    </button>

                                    <div className='flex items-center gap-3 mt-3'>
                                        <Image
                                            src={food.image}
                                            alt='Food Image'
                                            priority
                                            className='rounded-2xl w-[110px] h-[70px] sm:w-[150px] sm:h-[100px]'
                                            width={150}
                                            height={100}
                                        />
                                        <div className='flex flex-col gap-2'>
                                            <h2 className='font-semibold sm:text-xl text-base capitalize'>
                                                {food.name}
                                            </h2>
                                            <p className="text-xs sm:text-sm text-gray-900">{food.ingredients}</p>
                                            <p className="text-sm sm:text-base font-bold text-red-500">${food.price}</p>
                                        </div>
                                    </div>



                                    <AddToCart
                                        currency="USD"
                                        ingredients={food.ingredients}
                                        image={food.image}
                                        name={food.name}
                                        price={food.price}
                                        price_id={food.price_id}
                                        key={food._id}
                                        closeModal={closeModal}
                                    />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}

export default FoodDetailsModal