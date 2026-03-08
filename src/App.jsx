import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlogCard from "./components/BlogCard";
import { posts } from "./components/data/posts";
import Footer from "./components/Footer";
import Article from "./components/Article";
import About from "./components/About";
import HomeExtra from "./components/HomeExtra"
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
              </main>
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
