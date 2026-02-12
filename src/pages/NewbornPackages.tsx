import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import newbornGallery1 from "@/assets/hero-newborn-updated.jpg";
import newbornGallery2 from "@/assets/newborn-gallery-2.jpg";
import newbornGallery3 from "@/assets/newborn-gallery-3.jpg";
import newbornGallery4 from "@/assets/newborn-gallery-4.jpg";

import newbornFlyer1 from "@/assets/newborn-flyer-1.jpg";
import newbornFlyer2 from "@/assets/newborn-flyer-2.jpg";
import newbornFlyer3 from "@/assets/newborn-flyer-3.jpg";
import newbornFlyer4 from "@/assets/newborn-flyer-4.jpg";
import newbornFlyer5 from "@/assets/newborn-flyer-5.jpg";
import newbornFlyer6 from "@/assets/newborn-flyer-6.jpg";
import newbornRules from "@/assets/newborn-rules.jpg";

const NewbornPackages = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[#C8A26A]/30">
            <Navbar />

            <main className="pt-16">


                <div className="container mx-auto px-4 pt-8">

                    {/* Header Section */}
                    <header className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-light text-black tracking-widest mb-6 italic">
                            Newborn Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-6" />

                        {/* Elegant Icon Header */}
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                📷 <span className="tracking-wide">Timeless Newborn Portraits</span> 📷
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>

                        {/* Top Gallery Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-2">
                            {[newbornGallery1, newbornGallery2, newbornGallery3, newbornGallery4].map((img, i) => (
                                <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
                                    <img
                                        src={img}
                                        alt={`Newborn ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </header>

                    {/* Intro text */}
                    <div className="max-w-3xl mx-auto text-center mb-12 px-4">
                        <p className="text-lg md:text-xl text-neutral-500 font-light italic leading-relaxed">
                            "Capturing the pure, fleeting moments of your baby's first days
                            in the most artistic way possible..."
                        </p>
                    </div>

                    {/* Package Flyers Section */}
                    <section className="max-w-6xl mx-auto mb-16 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                            {/* Flyer 1 */}
                            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                                <img src={newbornFlyer1} alt="Newborn Package 1" className="w-full h-auto object-cover" />
                            </div>
                            {/* Flyer 2 */}
                            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                                <img src={newbornFlyer2} alt="Newborn Package 2" className="w-full h-auto object-cover" />
                            </div>
                            {/* Flyer 3 */}
                            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                                <img src={newbornFlyer3} alt="Newborn Package 3" className="w-full h-auto object-cover" />
                            </div>
                            {/* Flyer 4 */}
                            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                                <img src={newbornFlyer4} alt="Newborn Package 4" className="w-full h-auto object-cover" />
                            </div>
                            {/* Flyer 5 */}
                            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                                <img src={newbornFlyer5} alt="Newborn Package 5" className="w-full h-auto object-cover" />
                            </div>
                            {/* Flyer 6 */}
                            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                                <img src={newbornFlyer6} alt="Newborn Package 6" className="w-full h-auto object-cover" />
                            </div>
                            {/* Rules */}
                            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl md:col-span-2">
                                <img src={newbornRules} alt="Newborn Rules and Conditions" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </section>


                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NewbornPackages;
