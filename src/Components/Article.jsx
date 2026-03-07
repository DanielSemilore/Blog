import React from "react";

const Article = () => {
  return (
    <div>
        <article className="max-w-3xl mx-auto px-6 py-16">
            {/* Title */}
            <header className="mb-10">
                <h1 className="text-4xl font-bold leading-tight mb-4">
                    The Philosophy of Pleasure and Pain
                </h1>
                <div className="text-sm text-gray-500 dark:text-gray-200">
                    Written by Marcus Tullius Cicero • 45 BC
                </div>
            </header>
            {/* Section */}
            <section className="space-y-6 text-lg leading-relaxed">
                <h2 className="text-2xl font-semibold light:text-gray-900">
                Section 1.10.32
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo.
                    </p>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit.
                    </p>
                    <p>
                        Sed quia non numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit laboriosam.
                    </p>
                </div>    
            </section>
            {/* Translation */}
            <section className="mt-12 space-y-6 text-lg leading-relaxed">
                <h2 className="text-2xl font-semibold light:text-gray-900">
                    1914 Translation by H. Rackham
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you a complete
                        account of the system.
                    </p>
                    <p>
                        No one rejects, dislikes, or avoids pleasure itself because it is
                        pleasure, but because those who do not know how to pursue pleasure
                        rationally encounter consequences that are extremely painful.
                    </p>
                    <p>
                        To take a trivial example, which of us ever undertakes laborious
                        physical exercise except to obtain some advantage from it?
                    </p>
                </div>    
            </section>
            {/* Section */}
            <section className="mt-12 space-y-6 text-lg leading-relaxed">
                <h2 className="text-2xl font-semibold light:text-gray-900">
                    Section 1.10.33
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        et quas molestias excepturi sint occaecati cupiditate non provident.
                    </p>
                    <p>
                        Similique sunt in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                        distinctio.
                    </p>
                    <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                        impedit quo minus id quod maxime placeat facere possimus.
                    </p>
                </div>    
            </section>
            {/* Quote */}
            <blockquote className="mt-12 border-l-4 border-gray-300 dark:border-gray-700 pl-6 italic text-gray-600 dark:text-gray-400">
                "No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure
                rationally encounter consequences that are extremely painful."
            </blockquote>
            {/* Footer */}
            <footer className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
                Article source: <span className="italic">de Finibus Bonorum et Malorum</span> •
                Cicero (45 BC)
            </footer>
        </article>
    </div>    
  );
};

export default Article;