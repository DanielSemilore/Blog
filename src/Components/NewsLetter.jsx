import React from "react";

const NewsLetter = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-16 mt-16">
            <div className="max-w-3xl mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-4 dark:text-white">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Get the latest articles, insights, and updates delivered directly
                    to your inbox.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-md border w-full md:w-72 dark:bg-gray-900 dark:border-gray-700"
                    />
                    <button className="px-6 py-2 bg-black text-white rounded-md hover:opacity-90 dark:bg-white dark:text-black">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;