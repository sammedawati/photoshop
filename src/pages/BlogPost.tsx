import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getRelatedPosts } from "@/data/blogData";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import photographerFemale from "@/assets/photographer-female.jpg";

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();

    if (!slug) {
        return <Navigate to="/blog" replace />;
    }

    const post = getPostBySlug(slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const relatedPosts = getRelatedPosts(post.id, post.category, 3);

    return (
        <div className="min-h-screen bg-card">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Featured Image */}
                    <div className="mb-8 rounded-lg overflow-hidden shadow-lg animate-fade-in">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-96 object-cover"
                        />
                    </div>

                    {/* Post Header */}
                    <article className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                        {/* Category Badge */}
                        <Link
                            to={`/blog/category/${post.category}`}
                            className="inline-block mb-4 px-4 py-1 bg-terracotta-light/10 text-terracotta-light rounded-full text-sm font-medium hover:bg-terracotta-light/20 transition-colors"
                        >
                            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                        </Link>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-heading text-secondary mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
                            <div className="flex items-center gap-2">
                                <img
                                    src={photographerFemale}
                                    alt={post.author}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <User className="w-4 h-4" />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                        </div>

                        {/* Excerpt */}
                        <div className="text-lg text-muted-foreground mb-8 italic border-l-4 border-terracotta-light pl-4">
                            {post.excerpt}
                        </div>

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none mb-12"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                            style={{
                                color: 'hsl(var(--foreground))',
                            }}
                        />

                        {/* Tags */}
                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-border">
                                <Tag className="w-4 h-4 text-muted-foreground" />
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-secondary/5 text-secondary rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </article>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <section className="mt-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
                            <h2 className="text-3xl font-heading text-secondary mb-8">
                                Related Posts
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        to={`/blog/${relatedPost.slug}`}
                                        className="group"
                                    >
                                        <div className="mb-4 overflow-hidden rounded-lg shadow-md">
                                            <img
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="text-lg font-heading text-secondary group-hover:text-terracotta-light transition-colors mb-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPost;
