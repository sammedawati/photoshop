import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostsByCategory, getCategoryInfo, type BlogCategory } from "@/data/blogData";
import { ArrowLeft } from "lucide-react";
import photographerFemale from "@/assets/photographer-female.jpg";

const BlogCategoryPage = () => {
    const { category } = useParams<{ category: string }>();

    if (!category) {
        return <Navigate to="/blog" replace />;
    }

    const categoryInfo = getCategoryInfo(category as BlogCategory);
    const posts = getPostsByCategory(category as BlogCategory);

    if (!categoryInfo || posts.length === 0) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-card">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to All Posts
                    </Link>

                    {/* Category Header */}
                    <div className="mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-heading text-secondary mb-4">
                            {categoryInfo.title}
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            {categoryInfo.description}
                        </p>
                        <div className="mt-4 text-sm text-muted-foreground">
                            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article
                                key={post.id}
                                className="group animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image */}
                                <Link to={`/blog/${post.slug}`} className="block mb-4 overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
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
                                <h2 className="text-lg font-heading text-secondary group-hover:text-terracotta-light transition-colors mb-2">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>

                                {/* Excerpt */}
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="text-sm text-foreground hover:text-secondary transition-colors underline"
                                >
                                    Read More
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogCategoryPage;
