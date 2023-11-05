"use client";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

import Image from "next/image";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function CartModal() {
    const {
        cartCount,
        setItemQuantity,
        shouldDisplayCart,
        handleCartClick,
        cartDetails,
        removeItem,
        totalPrice,
        redirectToCheckout,
    } = useShoppingCart();
    const [isPending, setIsPending] = useState(false)

    async function handleCheckoutClick(event: any) {
        event.preventDefault();
        setIsPending(true)
        try {
            const result = await redirectToCheckout();

            if (result?.error) {
                console.log("result");
            }
            setIsPending(false)
        } catch (error) {
            console.log(error);
            setIsPending(false)
        }
    }
    console.log(cartDetails)
    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent className="sm:max-w-lg w-[90vw]">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>

                <div className="h-full flex flex-col justify-between">
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {cartCount === 0 ? (
                                <h1 className="py-6">You dont have any items</h1>
                            ) : (
                                <>
                                    {Object.values(cartDetails ?? {}).map((entry) => (
                                        <li key={entry.id} className="flex py-6">
                                            <div className="h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <Image
                                                    src={entry.image as string}
                                                    alt="Product image"
                                                    className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover"
                                                    width={80}
                                                    height={80}

                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col px-2">
                                                <div>
                                                    <div className="flex justify-between text-sm sm:text-base font-medium text-gray-900">
                                                        <h3>{entry.name}</h3>
                                                        <p className="ml-4 font-bold text-red-500">${entry.price}</p>
                                                    </div>
                                                    <p className="mt-1 text-xs sm:text-sm text-gray-500 line-clamp-2">
                                                        {entry.ingredients}
                                                    </p>
                                                </div>

                                                <div className="flex flex-1 items-end justify-between text-sm ">
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-gray-500">QTY: </p>
                                                        <input
                                                            className="border border-gray-700 self-start w-16  focus:outline-none  rounded-md p-1 h-6" value={entry.quantity}
                                                            onChange={(e) => setItemQuantity(entry.id, parseInt(e.target.value))}
                                                            type="number"
                                                        />
                                                    </div>

                                                    <div className="flex">
                                                        <button
                                                            type="button"
                                                            onClick={() => removeItem(entry.id)}
                                                            className="font-medium text-[#130849] hover:text-[#130849]/80"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal:</p>
                            <p className="font-bold text-red-500">${totalPrice}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes are calculated at checkout.
                        </p>

                        <div className="mt-6">
                            <Button
                                onClick={handleCheckoutClick}
                                className="w-full"
                                disabled={isPending ? true : false}
                            >
                                {isPending ? "Loading..." : "Checkout"}
                            </Button>
                        </div>

                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                OR{" "}
                                <button
                                    onClick={() => handleCartClick()}
                                    className=" font-medium text-primary hover:text-primary/80"
                                >
                                    Continue Shopping
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}