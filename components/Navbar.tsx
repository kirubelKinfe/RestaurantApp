const linkStyle = "text-base text-[#130849] py-2 px-7 font-bold transition hover:text-[#7dd87d]"
const Navbar = () => {
    return (
        <nav className="fixed bg-white z-50 right-0 top-0 left-0 flex items-center justify-between px-10 py-3 w-full shadow-md">
            <a href="/" className="text-3xl text-[#7dd87d] font-bold">Mulu <span className="text-[#130849]">Habesha</span></a>

            <ul className="flex items-center justify-between">
                <li><a href="#home" className={linkStyle}>Home</a></li>
                <li><a href="#about" className={linkStyle}>About Us</a></li>
                <li><a href="#menu" className={linkStyle}>Menu</a></li>
                <li><a href="#footer" className={linkStyle}>Contact Us</a></li>
            </ul>

            <div className="flex items-center">
                <a href="/login" className="px-9 py-4 bg-[#130849] text-white rounded-full font-bold">Login</a>
            </div>
        </nav>
    )
}

export default Navbar