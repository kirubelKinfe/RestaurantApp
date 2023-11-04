import { Dialog, Transition } from "@headlessui/react"
import { FoodType } from "./Menu"
import { Fragment } from "react"
import Image from "next/image"

import CloseIcon from '@public/assets/icons/close.svg'
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
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

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
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                        onClick={closeModal}
                                    >
                                        <Image
                                            src={CloseIcon}
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
                                            className='rounded-2xl w-[150px] h-[100px]'
                                            width={150}
                                            height={100}
                                        />
                                        <div className='flex flex-col gap-2'>
                                            <h2 className='font-semibold text-xl capitalize'>
                                                {food.name}
                                            </h2>
                                            <p className="text-sm text-gray-900">{food.ingredients}</p>
                                            <p className="font-bold text-red-500">${food.price}</p>
                                        </div>
                                    </div>


                                    <form className="flex flex-col gap-2">
                                        <p className="font-bold text-gray-900">Quantity</p>
                                        <input
                                            className="border border-gray-800 self-start w-20 rounded-md p-1 h-8" defaultValue={1}
                                            type="number"
                                        />

                                        <p className="font-bold text-gray-900 mt-2">Special Instructions</p>
                                        <textarea
                                            rows={3}
                                            className="p-2 rounded-md border border-gray-800"
                                            placeholder="Example: dressing on the side, extra cheese, etc."
                                        ></textarea>
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
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default FoodDetailsModal