import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white border-t mt-20">
            <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
                {/* Brand */}
                <div>
                    <h2 className="text-lg font-bold">
                        HotCoffee   
                    </h2>
                    <p className="text-sm text-gray-600 mt-3 max-w-xs">
                        A minimal blog focused on clarity, creativity, and growth.
                    </p>
                </div>
                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Navigation
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>    
                            <a href="#" className="hover:text-black">   
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">
                                Articles
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Connect
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                            <a href="#" className="hover:text-black">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">   
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t text-center text-sm text-gray-500 py-6">
                © {new Date().getFullYear()} HotCoffee. All rights reserved.
            </div>
        </footer>
    </div>
  )
}

export default Footer