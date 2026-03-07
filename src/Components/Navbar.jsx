import React from 'react'
import ThemeToggle from "./ThemeToggle"

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div>
        <header className="light:bg-white fixed z-50 dark:bg-gray-900 border-b dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" className="w-6 h-6" />
                    <span className="font-bold text-lg dark:text-white">
                        HotCoffee
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex gap-6 text-sm light:text-gray-600 dark:text-gray-300">
                        <a href="#" className="rounded-md hover:bg-gray-1000">Home</a>
                        <a href="#" className="rounded-md hover:bg-gray-1000">Articles</a>
                        <a href="#" className="rounded-md hover:bg-gray-1000">About</a>
                    </nav>
                    <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar