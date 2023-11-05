"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export interface ItemCart {
    name: string;
    ingredients: string;
    price: number;
    price_id: string,
    currency: string;
    image: string;
    closeModal: () => void
}

export default function AddToCart({
    currency,
    ingredients,
    image,
    name,
    price,
    price_id,
    closeModal
}: ItemCart) {
    const { addItem, handleCartClick } = useShoppingCart();
    const [specialInstructions, setSpecialInstructions] = useState("")

    const item = {
        name: name,
        ingredients: ingredients,
        price: price,
        currency: currency,
        image: image,
        price_id: price_id,
        specialInstructions: specialInstructions
    };

    const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()
        closeModal(), addItem(item), handleCartClick()
    }
    return (
        <form className="flex flex-col gap-2">
            <p className="font-bold text-gray-900 mt-2">Special Instructions</p>
            <textarea
                rows={3}
                className="p-2 rounded-md border border-gray-800"
                placeholder="Example: dressing on the side, extra cheese, etc."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
            ></textarea>
            <Button
                onClick={handleAddToCartClick}
            >
                Add To Cart-${price}
            </Button>
        </form>
    );
}