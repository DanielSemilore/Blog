import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="bg-white border-b">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
                <h1 className="font-bold text-lg">HotCoffee</h1>
                <nav className="flex gap-6 text-sm text-gray-600">
                    <a href="#">Home</a>
                    <a href="#">Articles</a>
                    <a href="#">About</a>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar