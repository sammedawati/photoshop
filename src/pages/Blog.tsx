import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, blogCategories, BlogCategory } from "@/data/blogData";
import photographerFemale from "@/assets/photographer-female.jpg";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main>
        <PageHeader
          title="Our Blog"
          subtitle="Stories, tips, and insights from our photography journey"
          variant="minimal"
        />
        <div className="container mx-auto px-4 pt-4">
          {/* Category Filter */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === "all"
                  ? "bg-terracotta-light text-black shadow-lg scale-105"
                  : "bg-secondary/5 text-secondary hover:bg-secondary/10 hover:text-black"
                  }`}
              >
                All Posts
              </button>
              {blogCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.name
                    ? "bg-terracotta-light text-black shadow-lg scale-105"
                    : "bg-secondary/5 text-secondary hover:bg-secondary/10 hover:text-black"
                    }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>


          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Image */}
                <Link to={`/blog/${post.slug}`} className="block mb-4 overflow-hidden rounded-lg shadow-md relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Badge on Image */}
                  <div className="absolute top-3 left-3">
                    <Link
                      to={`/blog/category/${post.category}`}
                      className="px-3 py-1 bg-white/90 backdrop-blur-sm text-secondary rounded-full text-xs font-medium hover:bg-terracotta-light hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </Link>
                  </div>
                </Link>

                {/* Author & Date */}
                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                  <img
                    src={photographerFemale}
                    alt={post.author}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-heading text-secondary group-hover:text-terracotta-light transition-colors mb-2 line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-secondary transition-colors group/link"
                >
                  <span className="underline">Read More</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <p className="text-lg text-muted-foreground">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
