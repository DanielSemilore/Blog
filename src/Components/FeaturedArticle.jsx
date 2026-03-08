import React from "react";

const FeaturedArticle = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
                Featured Article
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                alt="coffee"
                className="rounded-lg shadow-lg"
                />
                <div>
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
                Why Great Ideas Start With a Cup of Coffee
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                Coffee has long been associated with creativity, deep thinking,
                and productivity. From writers to developers, many people find
                their best ideas while enjoying a quiet moment with a warm drink.
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-md hover:opacity-90 dark:bg-white dark:text-black">
                <Link to="/articles" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                    Read Article
                </Link>
            </button>
    </div>

    </div>
</section>
);
};

export default FeaturedArticle;