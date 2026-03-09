import { useState } from 'react';
import './App.css';
import Navbar from "../src/Components/Navbar";
import Hero from "../src/Components/Hero";
import BlogCard from "../src/Components/BlogCard";
import { posts } from "../src/Components/data/posts";
import Footer from "../src/Components/Footer";
import Article from "../src/Components/Article";
import About from "../src/Components/About";
import HomeExtra from "../src/Components/HomeExtra";
import FeaturedArticle from "../src/Components/FeaturedArticle";
import AuthorSpotlight from "../src/Components/AuthorSpotlight";
import Newsletter from "../src/Components/NewsLetter";
import Trending from "../src/Components/Trending";
import { Routes, Route } from "react-router-dom";


function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${theme} min-h-screen`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <main className="max-w-6xl mx-auto px-4 py-16">
                <section className="grid md:grid-cols-3 gap-8">
                  {posts.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </section>
                <FeaturedArticle />
                <AuthorSpotlight />
                <Newsletter />
              </main>
              <Trending />
              <HomeExtra />
            </>
          }
        />
          {/* Article Page */}
          <Route path="/articles" element={<Article />} />
          {/*About page */}
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>  
  )
}

export default App
