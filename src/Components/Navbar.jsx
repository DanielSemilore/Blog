import React from 'react'
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div>
        <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" className="w-6 h-6" />
                    <span className="font-bold text-lg dark:text-white">
                        HotCoffee
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex gap-6 text-sm">
                        <Link to="/" className="rounded-md px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                            Home
                        </Link>
                        <Link to="/articles" className="rounded-md px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                            Articles
                        </Link>
                        <Link to="/about" className="rounded-md px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                            About
                        </Link>
                    </nav>
                    <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar