import React from "react";

const About = () => {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            {/* Title */}
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">
                    About HotCoffee
                </h1>
                <p className="text-gray-600 dark:text-gray-100 text-lg">
                    A place where ideas, stories, and inspiration are shared — just like a
                    warm cup of coffee shared between friends.
                </p>
            </header>
            {/* Main Content */}
            <div className="space-y-8 text-lg leading-relaxed">
                <div className="text-gray-700 dark:text-gray-300">
                    <p>
                        HotCoffee is a modern blog platform created to share thoughtful
                        articles, creative ideas, and meaningful discussions. In a world where
                        information moves quickly, we believe there is still value in slowing
                        down, reading deeply, and engaging with ideas that inspire curiosity
                        and reflection.
                    </p>
                    <p>
                        The concept behind HotCoffee is simple: just like a good cup of
                        coffee, great ideas should be enjoyed slowly. Every article published
                        here is meant to spark creativity, encourage learning, and offer
                        readers something valuable they can take with them.
                    </p>
                    <p>
                        Whether you're exploring topics about technology, productivity,
                        creativity, or everyday life, HotCoffee aims to provide content that
                        feels thoughtful, clear, and enjoyable to read. Our goal is to create
                        a digital space that feels calm and welcoming — somewhere readers can
                        return to whenever they want to learn something new or simply relax
                        with a good article.
                    </p>
                </div>    
                {/* Story Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                        The Story Behind HotCoffee
                    </h2>
                    <div className="text-gray-700 dark:text-gray-300">
                        <p>
                            HotCoffee started as a learning project focused on building modern
                            web applications using React and Tailwind CSS. The goal was not only
                            to create a simple blog interface but also to design a clean,
                            responsive, and enjoyable reading experience.
                        </p>
                        <p>
                            As the project evolved, it became a demonstration of how modern web
                            technologies can be used to build fast, scalable, and visually
                            appealing websites. The layout focuses on readability, simplicity,
                            and smooth navigation so that readers can focus on the content
                            rather than distractions.
                        </p>
                        <p>
                            Every component of the site — from the navigation bar to the article
                            pages — was designed with usability and performance in mind. This
                            project also explores features like theme switching, responsive
                            design, and modular component structures.
                        </p>
                    </div>
                </div>
                {/* Mission */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                        Our Mission
                    </h2>
                    <div className="text-gray-700 dark:text-gray-300">
                        <p>
                            Our mission is to create a space where knowledge, creativity, and
                            inspiration can be shared openly. We believe that good writing and
                            thoughtful ideas have the power to educate, motivate, and bring
                            people together.
                        </p>
                        <p>
                            HotCoffee aims to encourage readers to explore new perspectives,
                            learn new skills, and discover topics they may not have considered
                            before.
                        </p>
                    </div>
                </div>
                {/* What Readers Can Expect */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                        What You Can Expect Here
                    </h2>
                    <div className="text-gray-700 dark:text-black">
                        <ul className="list-disc pl-6 space-y-2 ">
                            <li>Thoughtful articles and insights</li>
                            <li>Simple explanations of modern technology</li>
                            <li>Creative and productivity ideas</li>
                            <li>Clean and enjoyable reading experience</li>
                            <li>A constantly evolving blog platform</li>
                        </ul>
                    </div>    
                </div>
                {/* Technology Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                        Technologies Used
                    </h2>
                    <div className="text-gray-700">
                        <p className="dark:text-gray-300">
                            HotCoffee was built using modern front-end technologies that allow
                            developers to create fast and scalable web applications.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 dark:text-black">
                            <li>React for building dynamic user interfaces</li>
                            <li>Tailwind CSS for modern and responsive styling</li>
                            <li>Vite for fast development and build performance</li>
                            <li>Component-based architecture for scalability</li>
                        </ul>
                    </div>
                </div>
                {/* Future Vision */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                        Looking Ahead
                    </h2>
                    <div className="text-gray-700 dark:text-gray-300">
                        <p>
                            HotCoffee is only the beginning. Future updates may include more
                            interactive features, improved article navigation, search
                            functionality, and expanded content categories.
                        </p>
                        <p>
                            The long-term vision is to transform HotCoffee into a fully featured
                            blog platform where readers can explore a wide variety of topics,
                            discover new perspectives, and connect with ideas that matter.
                        </p>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="mt-16 text-sm light:text-gray-500 dark:text-gray-200 border-t pt-8">
                Built with passion using React and Tailwind CSS.
            </footer>
        </section>
    );
};

export default About;