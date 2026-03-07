import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="light:bg-white border-t mt-20">
            <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
                {/* Brand */}
                <div>
                    <h2 className="text-lg font-bold">
                        HotCoffee   
                    </h2>
                    <p className="text-sm light:text-gray-600 mt-3 max-w-xs">
                        A minimal blog focused on clarity, creativity, and growth.
                    </p>
                </div>
                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Navigation
                    </h3>
                    <ul className="space-y-2 text-sm light:text-gray-600">
                        <li>    
                            <a href="#" className="rounded-md hover:bg-gray-1000">   
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="rounded-md hover:bg-gray-1000">
                                Articles
                            </a>
                        </li>
                        <li>
                            <a href="#" className="rounded-md hover:bg-gray-1000">
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
                    <ul className="space-y-2 text-sm light:text-gray-600">
                        <li>
                            <a href="https://www.instagram.com/yhungchamp14?igsh=MXA1cWtnd3p4MWNyYg%3D%3D" target="_blank" className="hover:bg-amber-300 hover:rounded-md hover:w-15 hover:font-bold">
                               Instagram 
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/DanielSemilore" target="_blank" className="hover:bg-amber-300 hover:rounded-md hover:w-15 hover:font-bold">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@yhungchamp2" target="_blank" className="hover:bg-amber-300 hover:rounded-md hover:w-15 hover:font-bold">   
                                Tiktok
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t text-center text-sm light:text-gray-500 py-6">
                © {new Date().getFullYear()} HotCoffee. All rights reserved.
            </div>
        </footer>
    </div>
  )
}

export default Footer