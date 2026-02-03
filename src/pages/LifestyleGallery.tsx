import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroLifestyle from "@/assets/hero_family.png";

const galleryPairs = [
    { id: 1, images: [heroLifestyle, heroLifestyle], title: "At Home Together" },
    { id: 2, images: [heroLifestyle, heroLifestyle], title: "Outdoor Adventures" },
    { id: 3, images: [heroLifestyle, heroLifestyle], title: "Urban Chronicles" },
    { id: 4, images: [heroLifestyle, heroLifestyle], title: "Quiet Mornings" },
];

const LifestyleGallery = () => {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 pt-16">
                    {/* Category Toggle Buttons */}
                    <div className="flex justify-center gap-6 mb-16">
                        <Link
                            to="/portfolio/lifestyle/packages"
                            className="px-10 py-5 border-2 border-[#7D8C62] text-[#7D8C62] bg-transparent rounded-full text-lg font-medium hover:bg-[#7D8C62] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Lifestyle Packages
                        </Link>
                        <Link
                            to="/portfolio/lifestyle/gallery"
                            className="px-10 py-5 bg-[#7D8C62] text-white rounded-full text-lg font-medium hover:bg-[#687652] transition-all duration-300 shadow-lg"
                        >
                            Lifestyle Gallery
                        </Link>
                    </div>

                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-light text-neutral-800 uppercase tracking-widest mb-6 italic">
                            Lifestyle Gallery
                        </h1>
                        <div className="h-px w-20 bg-[#D4A574] mx-auto mb-10" />
                        <p className="text-neutral-500 max-w-2xl mx-auto font-light text-sm tracking-wide leading-relaxed">
                            Candid, unposed, and beautifully real. Explore the stories of life lived in the moment.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-24">
                        {galleryPairs.map((pair) => (
                            <div key={pair.id} className="group animate-in fade-in slide-in-from-bottom-10 duration-1000">
                                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6">
                                    {pair.images.map((img, idx) => (
                                        <div key={idx} className="aspect-[3/4] overflow-hidden rounded-sm bg-neutral-50 shadow-sm transition-all duration-700 group-hover:shadow-xl">
                                            <img src={img} alt={pair.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm uppercase tracking-[0.4em] text-black font-light transition-colors duration-500">
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

export default LifestyleGallery;
