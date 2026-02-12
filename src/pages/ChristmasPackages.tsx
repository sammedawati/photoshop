import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";
import kidsShootRules from "@/assets/kids-shoot-rules.jpg";
import christmasFeatured1 from "@/assets/christmas-featured-1.jpg";
import christmasFeatured2 from "@/assets/christmas-featured-2.jpg";
import christmasFeatured3 from "@/assets/christmas-featured-3.jpg";
import christmasFeatured4 from "@/assets/christmas-featured-4.jpg";

const ChristmasPackages = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[#C8A26A]/30">
            <Navbar />
            <main className="pt-16">
                <div className="container mx-auto px-4 pt-8">
                    <header className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-light text-black tracking-widest mb-6 italic">
                            Christmas Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-6" />
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                <Sparkles className="w-5 h-5 text-[#C8A26A]" />
                                <span className="tracking-wide">Celebrate the Joy</span>
                                <Sparkles className="w-5 h-5 text-[#C8A26A]" />
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>
                    </header>

                    <header className="text-center mb-8">
                        {/* Top Gallery Grid - Larger Format */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mb-16">
                            {[christmasFeatured1, christmasFeatured2, christmasFeatured3, christmasFeatured4].map((img, i) => (
                                <div key={i} className="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl group">
                                    <img
                                        src={img}
                                        alt={`Christmas ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="max-w-4xl mx-auto text-center mt-16 mb-20 px-4">
                            <p className="text-2xl md:text-3xl text-neutral-500 font-light italic tracking-widest">
                                Packages coming soon...
                            </p>
                        </div>
                    </header>

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

export default ChristmasPackages;
