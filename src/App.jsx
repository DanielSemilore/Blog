import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BlogCard from "./components/BlogCard.jsx";
import { posts } from "./components/data/posts.jsx";
import Footer from "./components/Footer.jsx";
import Article from "./components/Article.jsx";
import About from "./components/About.jsx";
import HomeExtra from "./components/HomeExtra.jsx";
import FeaturedArticle from "./components/FeaturedArticle.jsx";
import AuthorSpotlight from "./components/AuthorSpotlight.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Trending from "./components/Trending.jsx";
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
