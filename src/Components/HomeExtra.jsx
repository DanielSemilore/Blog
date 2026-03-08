import React from "react";

const HomeExtra = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold dark:text-white">
          Discover More at HotCoffee
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Explore thoughtful articles, ideas, and inspiration designed to
          help you learn, grow, and stay curious in a fast-changing world.
        </p>
      </div>


      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="p-6 rounded-lg border dark:border-gray-800 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            Technology
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Learn about modern tools, programming concepts, and innovations
            shaping the future of technology and the web.
          </p>
        </div>


        {/* Card 2 */}
        <div className="p-6 rounded-lg border dark:border-gray-800 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            Productivity
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Discover strategies and habits that help you work smarter,
            stay focused, and achieve more in your daily life.
          </p>
        </div>


        {/* Card 3 */}
        <div className="p-6 rounded-lg border dark:border-gray-800 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            Creativity
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Explore ideas that inspire creativity, curiosity, and fresh
            perspectives in both work and personal projects.
          </p>
        </div>

      </div>


      {/* Quote Section */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <blockquote className="text-xl italic text-gray-700 dark:text-gray-300">
          “Good ideas start with curiosity, grow through learning,
          and become powerful when they are shared.”
        </blockquote>
      </div>

    </section>
  );
};

export default HomeExtra;