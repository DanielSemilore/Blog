import React from 'react'
import { useState } from 'react'

const BlogCard = ({ post }) => {
    const [readmore, setReadmore] = useState(false)

  return (
    <div>
        <article className="light:bg-white rounded-lg overflow-hidden border">
            <div className="group border rounded-lg overflow-hidden hover:shadow-xl transition duration-300 dark:border-gray-800">
                <img
                    src={post.image}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    alt=""
                />
                <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition dark:text-white">{post.title}</h3>
                    <p className="text-sm light:text-gray-600 mt-2">{post.excerpt}</p>

                    {readmore && (
                        <p>
                            It is a long established fact that a reader will be distracted 
                            by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that....
                        </p>
                    )}

                    <span className="inline-block mt-4 text-sm font-medium text-purple-600">
                        <button
                        onClick={() => setReadmore((s) => !s)}
                        className="items-center   rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                        aria-expanded={readmore}
                        >
                            {readmore ? 'Read Less' : 'Read more →'}
                        </button>
                        
                    </span>
                </div>    
            </div>
        </article>
    </div>
  )
}

export default BlogCard
