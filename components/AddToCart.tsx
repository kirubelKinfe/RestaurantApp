"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export interface ItemCart {
    name: string;
    ingredients: string;
    price: number;
    price_id: string,
    currency: string;
    image: any;
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

    const item = {
        name: name,
        ingredients: ingredients,
        price: price,
        currency: currency,
        image: image,
        price_id: price_id,
    };

    const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()
        closeModal(), addItem(item), handleCartClick()
    }
    return (
        <Button
            onClick={handleAddToCartClick}
        >
            Add To Cart
        </Button>
    );
}