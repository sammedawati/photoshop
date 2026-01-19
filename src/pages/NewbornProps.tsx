import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import portfolioNewborn from "@/assets/hero_newborn.png";

const propPairs = [
    { id: 1, images: [portfolioNewborn, portfolioNewborn], title: "Rustic Basket Theme" },
    { id: 2, images: [portfolioNewborn, portfolioNewborn], title: "Ethereal Wrap Set" },
    { id: 3, images: [portfolioNewborn, portfolioNewborn], title: "Floral Meadow Props" },
    { id: 4, images: [portfolioNewborn, portfolioNewborn], title: "Vintage Dreamer Bed" },
];

const NewbornProps = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] selection:bg-[#C8A26A]/30">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 pt-16">
                    {/* Category Toggle Buttons */}
                    <div className="flex justify-center gap-6 mb-16">
                        <Link
                            to="/portfolio/newborn/packages"
                            className="px-10 py-5 border-2 border-[#7D8C62] text-[#7D8C62] bg-transparent rounded-full text-lg font-medium hover:bg-[#7D8C62] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Newborn Packages
                        </Link>
                        <Link
                            to="/portfolio/newborn/props"
                            className="px-10 py-5 bg-[#7D8C62] text-white rounded-full text-lg font-medium hover:bg-[#687652] transition-all duration-300 shadow-lg"
                        >
                            Newborn Props
                        </Link>
                    </div>

                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-light text-neutral-800 uppercase tracking-widest mb-6 italic">
                            Newborn Props
                        </h1>
                        <div className="h-px w-20 bg-[#D4A574] mx-auto mb-10" />
                        <p className="text-neutral-500 max-w-2xl mx-auto font-light text-sm tracking-wide leading-relaxed">
                            Discover our curated collection of artisanal props, wraps, and custom-designed themes
                            built to ensure your baby's safety and comfort.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-24">
                        {propPairs.map((pair) => (
                            <div key={pair.id} className="group animate-in fade-in slide-in-from-bottom-10 duration-1000">
                                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6">
                                    {pair.images.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="aspect-[3/4] overflow-hidden rounded-sm bg-neutral-50 shadow-sm transition-all duration-700 group-hover:shadow-xl"
                                        >
                                            <img
                                                src={img}
                                                alt={`${pair.title} view ${idx + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
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

                    <div className="mt-40 text-center py-20 border-t border-neutral-100">
                        <h2 className="text-2xl font-light uppercase tracking-widest mb-6">Book Your Design</h2>
                        <p className="text-neutral-400 text-sm mb-12 italic">Let's craft your baby's first story.</p>
                        <Link
                            to="/contact"
                            className="inline-block border border-neutral-800 text-neutral-800 px-12 py-4 rounded-full hover:bg-neutral-800 hover:text-white transition-all duration-500 text-xs uppercase tracking-widest"
                        >
                            Consult with us
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NewbornProps;
