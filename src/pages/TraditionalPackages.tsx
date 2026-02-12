import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";
import kidsShootRules from "@/assets/kids-shoot-rules.jpg";
import traditionalFeatured1 from "@/assets/traditional-featured-1.jpg";
import traditionalFeatured2 from "@/assets/traditional-featured-2.jpg";
import traditionalFeatured3 from "@/assets/traditional-featured-3.jpg";
import traditionalFeatured4 from "@/assets/traditional-featured-4.jpg";

const TraditionalPackages = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[#C8A26A]/30">
            <Navbar />
            <main className="pt-16">
                <div className="container mx-auto px-4 pt-8">
                    <header className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-light text-black tracking-widest mb-6 italic">
                            Traditional Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-6" />
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                <Sparkles className="w-5 h-5 text-[#C8A26A]" />
                                <span className="tracking-wide">Cultural Elegance</span>
                                <Sparkles className="w-5 h-5 text-[#C8A26A]" />
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>

                        {/* Top Gallery Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-2xl mx-auto px-2 mb-12">
                            {[traditionalFeatured1, traditionalFeatured2, traditionalFeatured3, traditionalFeatured4].map((img, i) => (
                                <div key={i} className="aspect-[2/3] overflow-hidden rounded-xl shadow-lg group">
                                    <img
                                        src={img}
                                        alt={`Traditional ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </header>

                    <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                        <p className="text-xl text-neutral-500 font-light italic">
                            Package details coming soon...
                        </p>
                    </div>

                    {/* Rules Section */}
                    <section className="max-w-2xl mx-auto mb-16 px-4">
                        <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                            <img src={kidsShootRules} alt="Kids Photo Shoot Rules" className="w-full h-auto object-cover" />
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TraditionalPackages;
