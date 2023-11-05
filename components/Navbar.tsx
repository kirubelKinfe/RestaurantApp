"use client"

import { ShoppingBag, Menu } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'
import { Button } from './ui/button'
import SideNav from './SideNav'
import { useState } from 'react'

const linkStyle = "text-sm lg:text-base text-[#130849] py-2 px-4 md:px-7 font-bold transition hover:text-[#7dd87d]"

const Navbar = () => {
    const { handleCartClick } = useShoppingCart()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed bg-white z-50 right-0 top-0 left-0 flex items-center justify-between px-5 sm:px-10 h-20 w-full shadow-md">
            <div className='flex items-center gap-3'>
                <Menu className='text-[#130849] block md:hidden' onClick={() => setMenuOpen(true)} />
                <a href="/" className="text-lg md:text-xl lg:text-3xl text-[#7dd87d] font-bold">Mulu <span className="text-[#130849]">Ethiopian</span> Restaurant</a>
            </div>

            <ul className="items-center justify-between hidden md:flex">
                <li><a href="#home" className={linkStyle}>Home</a></li>
                <li><a href="#about" className={linkStyle}>About Us</a></li>
                <li><a href="#menu" className={linkStyle}>Menu</a></li>
                <li><a href="#footer" className={linkStyle}>Contact Us</a></li>
            </ul>

            <div className="flex divide-x border-r sm:border-l">
                <Button
                    variant={"outline"}
                    onClick={() => handleCartClick()}
                    className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-none'
                >
                    <ShoppingBag className='text-[#130849]' />
                    <span className='hidden text-xs font-semibold text-[#130849] sm:block'>
                        Cart
                    </span>
                </Button>
            </div>
            <SideNav menuOpen={menuOpen} handleMenuClose={() => setMenuOpen(false)} />
        </nav>
    )
}

export default Navbar