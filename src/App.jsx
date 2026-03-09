import { useState } from 'react';
import './App.css';
import Navbar from "../src/components/Navbar";  ;
import Hero from "../src/components/Hero";
import BlogCard from "../src/components/BlogCard";
import { posts } from "../src/components/data/posts";
import Footer from "../src/components/Footer";
import Article from "../src/components/Article";
import About from "../src/components/About";
import HomeExtra from "../src/components/HomeExtra";
import FeaturedArticle from "../src/components/FeaturedArticle";
import AuthorSpotlight from "../src/components/AuthorSpotlight";
import Newsletter from "../src/components/Newsletter";
import Trending from "../src/components/Trending";
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
