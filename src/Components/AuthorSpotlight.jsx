import React from "react";

const AuthorSpotlight = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-10 dark:text-white">
                Author Spotlight
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                src="https://i.pravatar.cc/200"
                alt="author"
                className="w-40 h-40 rounded-full shadow-lg"
                />
                <div className="max-w-xl">
                    <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                        Alex Morgan
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Alex is a writer and technology enthusiast who enjoys exploring
                        ideas about creativity, productivity, and modern web development.
                        Through HotCoffee, Alex shares thoughtful articles designed to
                        inspire curiosity and continuous learning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AuthorSpotlight;