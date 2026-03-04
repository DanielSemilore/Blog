import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Make better <br /> coffee ☕
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-md">
                        Why learn how to blog? Build authority, share ideas, and grow influence.
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
                    className="rounded-xl shadow-lg"
                />
            </div>
        </section>
    </div>
  )
}

export default Hero
