import React from 'react'

const BlogCard = ({ post }) => {
  return (
    <div>
        <article className="bg-white rounded-lg overflow-hidden border">
            <img
                src={post.image}
                loading="lazy"
                decoding="async"
                className="h-44 w-full object-cover"
                alt=""
            />
            <div className="p-5">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm font-medium text-purple-600">
                    Read more →
                </span>
            </div>
        </article>
    </div>
  )
}

export default BlogCard
