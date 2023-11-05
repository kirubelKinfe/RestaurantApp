"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

type SideNavProps = {
    menuOpen: boolean
    handleMenuClose: () => void
}

const linkStyle = "text-xl text-[#130849] py-2 px-4 font-bold transition hover:text-[#7dd87d]"

export default function SideNav({ menuOpen, handleMenuClose }: SideNavProps) {

    return (
        <Sheet open={menuOpen} onOpenChange={handleMenuClose}>
            <SheetContent side={"left"} className="sm:max-w-lg w-[90vw]">
                <h1 className="font-bold  text-[#130849] text-xl px-4">Menu</h1>
                <ul className="mt-20 flex flex-col gap-10 justify-between">
                    <li><a href="#home" className={linkStyle} onClick={handleMenuClose}>Home</a></li>
                    <li><a href="#about" className={linkStyle} onClick={handleMenuClose}>About Us</a></li>
                    <li><a href="#menu" className={linkStyle} onClick={handleMenuClose}>Menu</a></li>
                    <li><a href="#footer" className={linkStyle} onClick={handleMenuClose}>Contact Us</a></li>
                </ul>
            </SheetContent>
        </Sheet>
    );
}