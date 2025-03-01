import { useState, useEffect } from "react";
import { IoLogoSlack } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust the delay as needed
        return () => clearTimeout(timer);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Loading Animation */}
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-1 bg-green-900 z-50 animate-loading"></div>
            )}

            {/* Navbar */}
            <nav className="capitalize flex justify-between items-center px-5 md:px-10 py-2 fixed w-full bg-white z-40 shadow-sm">
                {/* Logo and Brand Name */}
                <div className="flex items-center gap-2">
                    <IoLogoSlack className="text-2xl" />
                    <h1 className="text-lg font-bold">Slack Clone</h1>
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </div>

                {/* Menu Items */}
                <ul
                    className={`md:flex gap-10 text-sm font-semibold ${
                        isMenuOpen ? "block" : "hidden"
                    } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out`}
                >
                    <li>
                        <a href="" className="hover:text-green-900 transition-all duration-200 relative nav-link">
                            blogs
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:text-green-900 transition-all duration-200 relative nav-link">
                            about us
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:text-green-900 transition-all duration-200 relative nav-link">
                            pricing
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:text-green-900 transition-all duration-200 relative nav-link">
                            Newly
                        </a>
                    </li>
                </ul>

                {/* Get Started Button */}
                <button className="text-white bg-green-900 capitalize px-5 py-2 font-semibold text-md hover:bg-green-800 transition-all duration-200 hidden md:block">
                    get started
                </button>
            </nav>

            {/* Mobile Get Started Button */}
            {isMenuOpen && (
                <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg md:hidden z-30">
                    <button className="text-white bg-green-900 capitalize w-full py-2 font-semibold text-md hover:bg-green-800 transition-all duration-200">
                        get started
                    </button>
                </div>
            )}
        </>
    );
};

export default Navbar;