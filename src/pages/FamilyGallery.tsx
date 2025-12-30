import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import heroFamily from "@/assets/hero_family.png";

const galleryPairs = [
    { id: 1, images: [heroFamily, heroFamily], title: "Golden Hour Memories" },
    { id: 2, images: [heroFamily, heroFamily], title: "Cosy At-Home Moments" },
    { id: 3, images: [heroFamily, heroFamily], title: "Adventure Together" },
    { id: 4, images: [heroFamily, heroFamily], title: "Generational Legacy" },
];

const FamilyGallery = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <Link
                        to="/portfolio/family"
                        className="inline-flex items-center text-neutral-400 hover:text-neutral-900 mb-12 transition-colors text-xs uppercase tracking-[0.2em]"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back to Family
                    </Link>

                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-light text-neutral-800 uppercase tracking-widest mb-6 italic">
                            Family Gallery
                        </h1>
                        <div className="h-px w-20 bg-[#D4A574] mx-auto mb-10" />
                        <p className="text-neutral-500 max-w-2xl mx-auto font-light text-sm tracking-wide leading-relaxed">
                            Timeless emotions and genuine connections captured in every frame.
                            Browse our family stories below.
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

export default FamilyGallery;
