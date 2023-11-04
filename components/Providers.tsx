"use client"

import { ReactNode } from "react"
import { CartProvider as Provider } from "use-shopping-cart"

export default function CartProvider({ children }: { children: ReactNode }) {
    return (
        <Provider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
            successUrl="https://restaurant-habesha.vercel.app/stripe/success"
            cancelUrl="https://restaurant-habesha.vercel.app/stripe/error"
            currency="USD"
            billingAddressCollection={false}
            shouldPersist={true}
            language="en-US"
        >{children}</Provider>
    )
}