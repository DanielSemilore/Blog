import React from 'react'
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  return (
    <div>
        <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" className="w-6 h-6" />
                    <span className="font-bold text-lg dark:text-white">
                        HotCoffee
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-300">
                        <a href="#">Home</a>
                        <a href="#">Articles</a>
                        <a href="#">About</a>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar