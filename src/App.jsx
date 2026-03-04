import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BlogCard from "./components/BlogCard"
import { posts } from "./components/data/posts"

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </div>  
  )
}

export default App
