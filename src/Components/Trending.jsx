import React from "react";

const trending = [
  {
    id: 1,
    title: "How Coffee Fuels Creativity",
    read: "5 min read",
  },
  {
    id: 2,
    title: "Why Developers Love Morning Coffee",
    read: "4 min read",
  },
  {
    id: 3,
    title: "Building Better Habits Daily",
    read: "6 min read",
  },
  {
    id: 4,
    title: "The Secret to Staying Productive",
    read: "7 min read",
  },
];

const Trending = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-10 dark:text-white">
                🔥 Trending Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {trending.map((item, index) => (
                    <div
                    key={item.id}
                    className="p-6 border rounded-lg hover:shadow-lg transition dark:border-gray-800"
                    >
                        <span className="text-sm text-gray-400">
                            0{index + 1}
                        </span>
                        <h3 className="text-xl font-semibold mt-2 mb-2 dark:text-white">
                            {item.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {item.read}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trending;