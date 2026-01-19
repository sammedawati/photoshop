import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroSitter from "@/assets/hero_sitter.png";

const themePairs = [
    { id: 1, images: [heroSitter, heroSitter], title: "Boho Minimalist" },
    { id: 2, images: [heroSitter, heroSitter], title: "Tuscan Garden" },
    { id: 3, images: [heroSitter, heroSitter], title: "Whimsical Library" },
    { id: 4, images: [heroSitter, heroSitter], title: "Starlit Dreamer" },
];

const SitterThemes = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] selection:bg-[#C8A26A]/30">
            <Navbar />
            <main className="pt-20 pb-10">
                <div className="container mx-auto px-4 pt-16">
                    {/* Category Toggle Buttons */}
                    <div className="flex justify-center gap-6 mb-16">
                        <Link
                            to="/portfolio/sitter/packages"
                            className="px-10 py-5 border-2 border-[#7D8C62] text-[#7D8C62] bg-transparent rounded-full text-lg font-medium hover:bg-[#7D8C62] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Sitter Packages
                        </Link>
                        <Link
                            to="/portfolio/sitter/themes"
                            className="px-10 py-5 bg-[#7D8C62] text-white rounded-full text-lg font-medium hover:bg-[#687652] transition-all duration-300 shadow-lg"
                        >
                            Sitter Themes
                        </Link>
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-light font-serif text-neutral-800 uppercase tracking-widest mb-6 italic">
                            Sitter Themes
                        </h1>
                        <div className="h-px w-20 bg-[#D4A574] mx-auto mb-10" />
                        <p className="text-neutral-500 max-w-2xl mx-auto font-light text-sm tracking-wide leading-relaxed">
                            Playful and imaginative sets designed to capture your baby's interactive personality.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {themePairs.map((pair) => (
                            <div key={pair.id} className="group animate-in fade-in slide-in-from-bottom-10 duration-1000">
                                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6">
                                    {pair.images.map((img, idx) => (
                                        <div key={idx} className="aspect-[3/4] overflow-hidden rounded-sm bg-neutral-50 shadow-sm transition-all duration-700 group-hover:shadow-xl">
                                            <img src={img} alt={pair.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm uppercase tracking-[0.4em] text-neutral-400 font-light group-hover:text-[#D4A574] transition-colors duration-500">
                                        {pair.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SitterThemes;
