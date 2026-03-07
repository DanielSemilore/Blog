import React from 'react'
import { useState } from 'react'

const BlogCard = ({ post }) => {
    const [readmore, setReadmore] = useState(false)

  return (
    <div>
        <article className="light:bg-white rounded-lg overflow-hidden border">
            <img
                src={post.image}
                loading="lazy"
                decoding="async"
                className="h-44 w-full object-cover"
                alt=""
            />
            <div className="p-5">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-sm light:text-gray-600 mt-2">{post.excerpt}</p>
                <p> </p>

                {readmore && (
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque nihil architecto corporis nemo
                        consectetur voluptates et dicta praesentium beatae perferendis, facilis voluptatem? Dignissimos eius ut
                        obcaecati!
                    </p>
                    <br/>
                    <p>

                    </p>
                    <br/>
                    <p>

                    </p>
                    <br/>
                    <p>

                    </p>
                    <br/>
                    <p>

                    </p>
                )}

                <span className="inline-block mt-4 text-sm font-medium text-purple-600">
                    <button
                    onClick={() => setReadmore((s) => !s)}
                    className="mt-4 inline-flex items-center px-4 py-2 bg-amber-300 text-black font-semibold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    aria-expanded={readmore}
                    >
                        {readmore ? 'Read Less' : 'Read more →'}
                    </button>
                    
                </span>
            </div>
        </article>
    </div>
  )
}

export default BlogCard
